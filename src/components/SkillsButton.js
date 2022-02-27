import React from 'react'

export default function SkillsBar() {
    return (
        <div className="skills_buttons">
            <div className="skills_button_section">
                <h2>Structure and Design</h2>
                <div className="skills_span">                
                    <span className="html">HTML5</span>
                    <span className="css">CSS3</span>
                    <span className="css">ES6</span>
                    <span className="flexbox">FlexBox</span> 
                    <span className="typescript">TypeScript</span> 
                    <span className="material">Material-UI</span> 
                </div>                            
            </div>

            <div className="skills_button_section">
                <h2>Full-Stack Application</h2>
                <div className="skills_span">                    
                    <span className="mongo">MongoDB</span>
                    <span className="express">ExpressJS</span> 
                    <span className="react">ReactJS</span>                                    
                    <span className="node">NodeJS</span>
                </div>    
            </div>

            <div className="skills_button_section">
                <h2>Deployment</h2>
                <div className="skills_span">                
                    <span className="github">gitHub</span>
                    <span className="githubpages">gitHub Pages</span> 
                    <span className="heroku">Heroku</span> 
                    <span className="docker">Docker</span> 
                </div>    
            </div>

            <div className="skills_button_section">
            <h2>API</h2>
            <div className="skills_span">                
                <span className="html">MongoDB</span>
                <span className="html">ExpressJS</span> 
                <span className="html">ReactJS</span>                                    
                <span className="html">NodeJS</span>
            </div>    
            </div>

            <div className="skills_button_section">
            <h2>CI/CD & Testing</h2>
            <div className="skills_span">                
                <span className="github">gitHub</span>
                <span className="jasmine">Jasmine</span>
                <span className="jest">Jest</span>
            </div>     
            </div>            

        </div>
    )
}
