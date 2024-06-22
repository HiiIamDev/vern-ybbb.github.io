import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'react-feather';
import { useState, useRef } from 'react';
import { Close } from 'feather-icons-react';



export default function Contacts () {
    return (
        <>
            <CardsContacts />
        </>
    )
}

function Maps () {
    const position = [-6.902422009375671, 107.61869816851394]
    return (
        <>
        <div className="wrapperMaps">
            <MapContainer center={position} zoom={17} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>Gedung Sate
                </Popup>
                </Marker>
            </MapContainer>
            <div className="center border-res">
                <span className='text-location'> <MapPin className='pin'/>Jl. Diponegoro No.22, Kec. Kota Bandung, Jawa Barat 40115 </span>
            </div>
        </div>  
        
        </>
    )
}

function Form () {
    // SETTING UP ALL STATES
    const [ thx, setThx ] =  useState(false) // if all validator state is done, this will be activated to be true for thanks to client ID 1
    const [ msgLength, setMsgLength ] = useState(false) // message length detecting and setting state to a true ID 2
    const [ isEmail, setEmail] = useState(false) // state that used to warn if is this an real email or not ID 4
    const [ isEmpty, setEmpty ] = useState(false) // state that validate to check if an form box is empty ID 5
    const [ isName, setName ] = useState(false) // state that validate to check if name.length <= 4
    const [ isError, setIsError ] = useState(false) // state to declared if its something is error on external server

    const nameForm = useRef(null)
    const emailForm = useRef(null)
    const msgForm = useRef(null)

    const handleRef = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault()
            if (nextRef === "submit") {
                handleSubmit(e)
            } else {
                nextRef.current.focus()
            }
        }
    }

    const altRef = (nextRef) => {
        switch (nextRef) {
            case 'name' : 
                nameForm.current.focus()
                break
            case 'email' : 
                emailForm.current.focus()
                break
            case 'msg' : 
                msgForm.current.focus()
                break
        }
    }

    const [ form, setForm ] = useState({
        "name": "",
        "email": "",
        "msg": ""
    }) // setting up placeholder state data from form

    const [ sendStatus, setSendStatus ] =  useState(true) // if true they'll displayed on conditional operator ID 3

    // CHANGE STATE VALUE INTO DEFAULT VALUE

    function stateDEF () {
        setThx(false)
        setMsgLength(false)
        setEmail(false)
        setEmpty(false)
        setName(false)
        setIsError(false)
    }

    // filled up data from form 
    const formChange = (e) => {
        const { name, value } = e.target // target maybe from onChange parents event
        setForm({
            ...form, // ... meaning for looping option on object 
            [name]: value 
        })
    }

    // handling submit

    const handleSubmit = (e) => {
        e.preventDefault()
        const isDataValid = dataValidation()

        if ( isDataValid == 200 ) {
            sendMsg()
        } 
    }

    // validation

    function dataValidation () {
        let nVer = 0
        // isEmptyValidation
        if ((
            form.name == "",
            form.email == "",
            form.msg == ""
            )) {
            stateDEF() // change all state value into deffault
            setEmpty(true)
        } else {
            ++nVer
            // IF NOT EMPTY CALLS MORE VALIDATION 

            // name validation

            if (form.name.length <= 5) {
                stateDEF()
                setName(true)
                altRef('name')
            } else  {
                ++nVer
            } 

            //  email validation

            let gmail = form.email

            if(
                gmail.includes('@') &&
                gmail.includes('gmail') &&
                gmail.includes('.') &&
                gmail.includes('com')
            ) {
                ++nVer
            } else {
                stateDEF()
                setEmail(true)
                altRef('email')
            }

            // msg validation 

            if (form.msg.length <= 4) {
                stateDEF() 
                setMsgLength(true)
                altRef('msg')
            } else {
                ++nVer
            }
        }

        // POINT VERIFICATION VALIDATION

        if (nVer == 4) {
            return 200
        } else {
            return 400
        }
    }

    function sendMsg () {
        let date = new Date()
        let dataValid = {
            "name" : form.name,
            "email" : form.email,
            "msg" : form.msg,
            "date" : date.toLocaleString()
        }

        // console.log('Succsesfull sending: ', dataValid)
        // PENDING INTO API

        const sending = async (e) => {
            setSendStatus(false)
            try {
                const response = await fetch('http://localhost:5000/contact', {
                    'method': 'POST',
                    'headers': {
                        'Content-type': 'Application/json',
                    }, 'body': JSON.stringify(dataValid)
                })

                if (response.status == 200) {
                    setTimeout(() => {
                        setSendStatus(true)
                    }, 1000)
                    stateDEF()
                    setThx(true)
                    setForm({
                       "name" : "",
                       "email" : "",
                       "msg": ""
                    })
                }  else {
                    stateDEF()
                    setIsError(true)
                    setTimeout(() => {
                        setSendStatus(true)
                    }, 1000)
                }

            } catch {
                
                setTimeout(() => {
                    stateDEF()
                    setIsError(true)
                    setSendStatus(true)
                }, 500)
            }
        }

        sending()

        
    }

    return (
        <>
            {
                sendStatus ? (
            <div className="wrapper-form">
            <form id='contact' className='form-contacts' onSubmit={handleSubmit}>
                <div className="placeholder">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={formChange}
                    ref={nameForm}
                    onKeyPress={(e) => handleRef(e, emailForm)}
                    placeholder='Input Your Name Here'/>
                </div>
                <div className="placeholder">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={formChange}
                    ref={emailForm}
                    onKeyPress={(e) => handleRef(e, msgForm)}
                    placeholder='Input Your Email Here'/>
                </div>
                <div className="placeholder">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    id="msg" 
                    name='msg' 
                    value={form.msg} 
                    onChange={formChange}
                    ref={msgForm}
                    rows={5} 
                    onKeyPress={(e) => handleRef(e, 'submit')}
                    placeholder='Input Your Message Here'/>
                </div>
                <div className="client-output">       
                    {
                        isError ? (
                            <>
                                <p>Something is error in external server, please to try again later :( <button onClick={() => setIsError(false)}>close</button></p>
                                
                            </>
                        ) : null
                    }                   
                    {
                        msgLength ? (
                            <>
                              <p>Please provide a more specific message <button onClick={() => setMsgLength(false)}>
                                close</button></p>
                            </>
                        ) : null
                    }
                    {   
                        thx ? (
                            <>
                            <p>Thank you for your feedback :D <button onClick={
                            () => {
                                setThx(false)
                            }
                            }>close</button></p> 
                            </>
                        ) 
                        : null
                    }
                    {
                        isEmail ? (
                            <>
                                <p>We only accept <a href="https://unacademy.com/content/gate-cse-it/difference-between-email-and-gmail/" target="_blank" title="What's the difference between email and gmail?"><i>Gmail?</i></a> <button onClick={() => setEmail(false)}>close</button></p>
                                
                            </>
                        ) : null
                    } 
                    {
                        isName ? (
                            <>
                                <p>We do not accept short names that are less than 5 letters :( <button onClick={() => setName(false)}>close</button></p>
                                
                            </>
                        ) : null
                    }
                    {
                        isEmpty ? (
                            <>
                                <p>Please fill in the form <button onClick={() => setEmpty(false)}>close</button></p>
                                
                            </>
                        ) : null
                    }

                </div>
                <button type='submit'>Submit</button>
            </form>
            </div>
                ) : (
                <p>loading...</p>
            )
            }
        </>              
    ) 
}

function CardsContacts (
    {
        children
    }
) {
    return (
        <div className="wrapperContacts">
            <Maps />
            {/* DIFFERENT ELEMENT HERE */}
            <div className="cards-flex">
                <div className="center cardsContacts">
                    <div className=" titleContacts">
                        <h2>Contact Us</h2>
                        {/*<span>Jika Anda memiliki pertanyaan atau umpan balik, 
                        silakan hubungi kami menggunakan formulir di bawah ini atau melalui informasi kontak 
                            di bawah ini</span>   */}                
                        <span className='fs-14'>Jika anda memiliki pertanyaan atau umpan balik, silahkan hubungi kami menggunakan formulir atau melalui beberapa kontak sosial media dibawah ini</span> 
                    </div>
                    <div className="wrapper-form">
                        <div className="opsi-form">
                            <h3></h3>
                        </div>
                    </div>
                </div>
                <div className="wrapper-side">
                    <Form />
                </div>
            </div>
        </div>
    )
}

function SocialMedia () {
    return (        <>
            <ul style={{
                "listStyle": "none",
            }}>
                <li><a href='#whatsapp'><img src="/icon/whatsapp.png" style={{
                    'width': '30px'
                }}alt="" /></a></li>
            </ul>
        </>
    )
}