import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import Skills from './SkillCard'
import Projects from './ProjectCard'
import Contact from './Contact'

export default function Menu({ intro, skills, projects, contact, menuToggle, setMenuToggle }){

    return ( 
        <div>    
            <Router>
                <div className={ menuToggle ? "menu active" : "menu" }>
                    <Link to='/#home' className='menu_link'>Home</Link>
                    <Link to='/#projects' className='menu_link'>Projects</Link>  
                    <Link to='/#skills' className='menu_link'>Skills</Link>
                    <Link to='/#contact' className='menu_link'>Contact</Link>
                </div>

                <Switch>
                    <Route path="/#skills" exact component={Skills} />                 
                    <Route path="/#projects" exact component={Projects} />
                    <Route path="/#contact" exact component={Contact} />                 
                </Switch>                
            </Router>  
        </div>          
    ) 
}