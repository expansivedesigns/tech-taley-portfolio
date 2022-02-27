//import { BrowserRouter as Router } from "react-router-dom"
import '../app.css'

export default function FooterLinks({ link1, link2, link3 }){
    return (
        <div className="footer_links">
            <div className='footer'>
                <a href={link1} className='footer_link' target="_blank" rel="noreferrer noopener">Facebook</a>
                <a href={link2} className='footer_link' target="_blank" rel="noreferrer noopener">Instagram</a>
                <a href={link3} className='footer_link' target="_blank" rel="noreferrer noopener">Twitter</a>
            </div>
        </div>        
    )
}