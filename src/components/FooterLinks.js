import { BrowserRouter as Router } from "react-router-dom"
 
export default function FooterLinks({ link1, link2, link3 }){
    return (
        <div className="footer_links">
            <Router>
                <div className='footer'>
                    <a href={link1} className='footer_link'>Facebook</a>
                    <a href={link2} className='footer_link'>Instagram</a>
                    <a href={link3} className='footer_link'>Twitter</a>
                </div>
            </Router>
        </div>        
    )
}