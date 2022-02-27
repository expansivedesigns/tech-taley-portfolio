import { init } from 'ityped'
import { useEffect, useRef } from 'react' //useRef hook instead of document.querySelector

export default function Banner({ image, alt, title, role, desc, link }){
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, { 
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["ReactJS, NodeJS", "MongoDB, ExpressJS", "React Hooks, Material-UI", "Web Services, API Calls", "HTML5, CSS3, ES6", "GitHub, CD/CI", "TypeScript, Docker"],
		})	
	}, [])

    return (
        <div className="banner">
			<img className="banner-img" src={image} alt={alt} />
			<div className="banner-div">
				<h1 className="banner-title">{title}</h1>
				<h2 className="banner-role">{role}</h2>
				<h2 className="banner-desc">{desc}</h2>					
				<h2 className="banner-string">
					<span ref={textRef}></span>
				</h2>				

				<button className="banner-btn">
					<a className="banner-link" href={link}>My Work</a>
				</button>
			</div>
        </div>
    )
}