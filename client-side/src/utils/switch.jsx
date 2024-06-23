import React, { useState } from 'react';

export default function SwitchButton({buttonClass}) {

    // let proggrams = document.querySelectorAll('.prog')
    // let events = document.querySelectorAll('.event')
    // let gallery = document.querySelectorAll('.gallery')
    // let news = document.querySelectorAll('.news')

    const [lastActiveButton, setLastActiveButton] = useState(null);

    function calling(button) {
        // function switchFn (buttonRn) {
        //     if (button.id == "button1") {
        //         proggrams.forEach(item => item.classList.add('act'));
        //         events.forEach(item => item.classList.remove('act'));
        //         gallery.forEach(item => item.classList.remove('act'));
        //         news.forEach(item => item.classList.remove('act'));
        //     } if (button.id == "button2") {
        //         proggrams.forEach(item => item.classList.remove('act'));
        //         events.forEach(item => item.classList.add('act'));
        //         gallery.forEach(item => item.classList.remove('act'));
        //         news.forEach(item => item.classList.remove('act'));
        //     } if (button.id == "button3") {
        //         proggrams.forEach(item => item.classList.remove('act'));
        //         events.forEach(item => item.classList.remove('act'));
        //         gallery.forEach(item => item.classList.add('act'));
        //         news.forEach(item => item.classList.remove('act'));
        //     } if (button.id == "button4") {
        //         proggrams.forEach(item => item.classList.remove('act'));
        //         events.forEach(item => item.classList.remove('act'));
        //         gallery.forEach(item => item.classList.remove('act'));
        //         news.forEach(item => item.classList.add('act'));        
        //     }
        // }
        

        const buttons = document.querySelectorAll('.button-switch');

        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        

        if (lastActiveButton !== null ) {
            lastActiveButton.classList.remove('active');

        }
        button.classList.add('active');

        setLastActiveButton(button);
        // switchFn(button)
        buttonClass(button.id)
        // console.log(`From switch.jsx is: ${button.id}`)
    }

    return (
        <> 
            <div className="switch-wrapper">
                <div className="switch-container">
                    <a onClick={() => calling(document.getElementById("button1"))} id="button1" href="#proggram" className="button-switch active">Proggrams</a>
                    <a onClick={() => calling(document.getElementById("button2"))} id="button2" href="#event" className="button-switch">Event</a>
                    <a onClick={() => calling(document.getElementById("button3"))} id="button3" href="#gallery" className="button-switch">Gallery</a>
                    <a onClick={() => calling(document.getElementById("button4"))} id="button4" href="#news" className="button-switch">News</a>
                </div>
            </div>
        </>
    );
}
