import React, { useEffect, useState} from 'react'
import Topnav from './Topnav'
import Menu from './Menu'
import Banner from './Banner'
import ProjectFilter from './ProjectFilter'
//import ProjectMenu from './ProjectMenu'
//import ProjectCard from './ProjectCard'

//import SkillCard from './SkillCard'
import SkillsButton from './SkillsButton'
import Contact from './Contact'
import FooterLogo from './FooterLogo'
import FooterLinks from './FooterLinks'



export default function Home(){  //use can only use hooks in function components
	const [menuToggle, setMenuToggle] = useState(false)
	const [menu, setMenu] = useState([])
	const [bannerImage, setBannerImage] = useState([])
	//const [skills, setSkills] = useState([])
	const [footerlogo, setFooterLogo] = useState([])
	const [footerlinks, setFooterLinks] = useState([])

	useEffect(() => {
		async function fetchData(){
			try {
				const response = await fetch(`https://expansivedesigns.github.io/tech-taley-api/data.json`)
				const data = await response.json()	

				setMenu(data.results.menus)	
				setBannerImage(data.results.banner)					
				//setSkills(data.results.skills)
				//setProjects(data.results.projects)
				setFooterLogo(data.results.footer1)
				setFooterLinks(data.results.footer1[0].social)

			} catch(err){
				console.log("Issue loading images", err)
			}
		}
		
		fetchData()
	}, [])	

	return (
		<div className="home" id="home">
				<Topnav 
						menuToggle={menuToggle}	
						setMenuToggle={setMenuToggle}				
				/>

				{ menu.map(({ intro, skills, projects, contact }) => (
					<Menu
						intro={intro}
						skills={skills}
						projects={projects}
						contact={contact}
						menuToggle={menuToggle}	
						setMenuToggle={setMenuToggle}													
					/>
				))}					
							
				{bannerImage.map(({ image, alt, title, role, desc, link }) => (
					<Banner 
						image={image}
						alt={alt}
						title={title}
						role={role}						
						desc={desc}
						link={link}
					/>
				))}

			<h2 className="section_heading section" id="projects">React Projects</h2>
			<hr />

			<div className="project_section section">
				<ProjectFilter />
			</div>
						
			<h2 className="section_heading section" id="skills">Skills</h2>
			<hr />

			<div className="section skill_section">

				<div className="skill_list">

					<SkillsButton />
					{/* { skills.map(({ id, title, desc}) => (
						<SkillCard key={id}
							title={title}
							desc={desc}
						/>
					))} */}

					{/* updated skills section
						<div className="skill_list">
							{ skills.map(({ id, title, skills}) => (
								<SkillCardUpdated key={id}
									title={title}
									skills={skills}
								/>
							))}
						</div>    
					*/}    



				</div>

			</div>

			<h2 className="section_heading" id="contact">Contact me</h2>
			<hr />

			<div className="contact_section section container">	
				<Contact />
			</div>	

			<div className="footer">
				{ footerlogo.map(({ image, alt, title }) => (
					<FooterLogo
						image={image}
						alt={alt}
						title={title}
					/>
				))}

				{footerlinks.map(({ link1, link2, link3, link4 }) => (
					<FooterLinks
						link1={link1}
						link2={link2}
						link3={link3}
						link4={link4}
					/>
				))}
			</div>	
		</div>			
	)
}