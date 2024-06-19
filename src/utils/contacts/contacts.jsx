import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'react-feather';
import { useState } from 'react';
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
            <MapContainer className="container-map" center={position} zoom={17} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>Gedung Sate
                </Popup>
                </Marker>
            </MapContainer>
        </div>
        <div className="center border-res">
            <span className='text-location'> <MapPin className='pin'/>Jl. Diponegoro No.22, Kec. Kota Bandung, Jawa Barat 40115 </span>
        </div>
        </>
    )
}

function Form () {
    const [form, setForm] = useState({
        name: "",
        email: "",
        msg: ""
    })

    const [ status, setStatus ] = useState(false)
    const [ thx, setThx ] =  useState(false)
    const [ msgLength, setMsgLength ] = useState(false)

    // VALIDATION ABOUT PENDING STATUS

    const [ sendStatus, setSendStatus ] =  useState(true)

    const hitPostContact = async (e) => {
        // e.preventDefault()
        const dataContacts = {
            "name" : form.name,
            "email" : form.email,
            "msg" : form.msg
        }

        try {
            setSendStatus(false)
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                }, body: JSON.stringify(dataContacts)
            })

            if (response.status == 400) {
                setStatus(true)
                setThx(false)
                setMsgLength(false)
            }

            console.log('messege sucsessed sending : ', response)
            setSendStatus(true)
        
        } catch (e) {
            console.log('Error :', e)
            setSendStatus(true)
        }
    }
 
    const formChange = (e) => { 
        const { name, value } = e.target
        // console.log(name)
        setForm({
            ...form,
            [name]: value
        })
        // console.log(form)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!(
            form.name == "" &&
            form.email == "" &&
            form.msg == ""
        )) {
            // VALIDASI TINGKAT LANJUT
            if (form.msg.length <= 6) {
                setMsgLength(true)
                setThx(false)
                setStatus(false)
            } else {
                sendMsg({
                    name: form.name,
                    email: form.email,
                    msg: form.msg,
                })
                setThx(true)
                setMsgLength(false)
                // console.log(form)
                setForm({
                    name: "",
                    email: "",
                    msg: ""
                })
            }
            

            setStatus(false)
        } else {
            setStatus(true)
            setThx(false)
            setMsgLength(false)
            
        }
        function sendMsg (msg) {
            hitPostContact()
        }
    }

    return (
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
                    placeholder='Input Your Email Here'/>
                </div>
                <div className="placeholder">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    id="msg" 
                    name='msg' 
                    value={form.msg} 
                    onChange={formChange}
                    rows={5} 
                    placeholder='Input Your Message Here'/>
                </div>
                <div className="client-output">
                    {
                        sendStatus ? null : (
                            <p>loading...</p>
                        )
                    }
                    {
                        msgLength ? (
                            <>
                              <p>Please Throw Valid Messege <button onClick={() => setMsgLength(false)}>
                                x</button></p>
                            </>
                        ) : null
                    }

                    {
                        status ? (
                            <>
                            <p>Please Throw A Message <button onClick={
                            () => {
                                setStatus(false)
                            }
                            }>x </button></p> 
                            </>
                        ) 
                        : null
                    }
                    {
                        thx ? (
                            <>
                            <p>Thank you for your feedback :D <button onClick={
                            () => {
                                setThx(false)
                            }
                            }>x</button></p> 
                            </>
                        ) 
                        : null
                    }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
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
            <div className="center cardsContacts">
                <div className=" titleContacts">
                    <h2>Contact Us</h2>
                    <span>Jika Anda memiliki pertanyaan atau umpan balik, silakan hubungi kami menggunakan formulir di bawah ini atau melalui informasi kontak di bawah ini</span>                    
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