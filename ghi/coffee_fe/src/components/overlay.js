import { ReactNode } from 'react'
import './css/overlay.css'

function Overlay({open, children, blur}){
    return (
        <div className={`overlay-wrapper ${blur ? 'blur' : ''}`.trim()} hidden={!open}>
            {children}
        </div>
    );
}

export default Overlay
