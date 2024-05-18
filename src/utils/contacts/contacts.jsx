import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'react-feather';



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
            <span className='text-location'> <MapPin className='pin'/>Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115 </span>
        </div>
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
            <div className="center cardsContacts">
                <div className=" titleContacts">
                    <h2>Contact Us</h2>
                    <span>Silahkan hubungi kami jika Anda memiliki pertanyaan atau umpan balik</span>                    
                    <br />
                </div>
                <div className="hr-contacts"> </div>   
                 {/*Break*/}
                <div className="wrapper-form">
                    <div className="opsi-form">
                        <h3></h3>
                    </div>
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