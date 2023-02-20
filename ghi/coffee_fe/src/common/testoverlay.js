import { useState } from 'react'
import Overlay from '../components/overlay'
import '../components/css/overlay.css'

function FullScreenOverlayDemo({open, onClose}) {
    return (
        <Overlay open={open} blur={true}>
            <div id='fullscreen-overlay-demo'>
                <h1>Fullscreen Overlay Demo</h1>
                <p>
                    This is just an example full screen overlay. Click the close button to close the
                    overlay.
                </p>
                <button onClick={onClose}>Close</button>
            </div>
        </Overlay>
    )
}

function PopupOverlayDemo({ open, onClose }) {
    const [complete, setComplete] = useState(false);

    return (
        <Overlay open={open} blur={true}>
            <div id='popup-overlay-demo' className="my-5 container">
                <div className='popup'>
                    <button className='close-popup-button' onClick={onClose}>
                        Close
                    </button>
                    {!complete && (
                        <>
                            <h1>Join our Newsletter!</h1>

                            <div>
                                <strong>Enter your email below:</strong>
                            </div>

                            <div>
                                <input className='popup-email-input' />
                                <button
                                    className='popup-email-button'
                                    onClick={() => setComplete(true)}>
                                    Sign Up
                                </button>
                            </div>
                        </>
                    )}
                    {complete && (
                        <>
                            <h1>Thank You! All signed up</h1>
                        </>
                    )}
                </div>
            </div>
        </Overlay>
    );
}

export {FullScreenOverlayDemo, PopupOverlayDemo}
