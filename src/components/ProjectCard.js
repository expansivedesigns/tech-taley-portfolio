// 1. npx create-react-app my-app --template typescript ??

// 2.  implicitly declare types of all prop:   status?: string means optional
//     type projectPropType = { 
//     id: number
//     image: string
//     alt: string
//     desc: string
//     link: string
//     status?: string
// }

//3. implicitly declare types of all functions
//const ProjectCard: React.FC<projectPrototype> = ({id, image, alt, title, desc, link}) =>  return ( same as below)

export default function ProjectCard({id, image, alt, title, desc, link, code, api, status}){
	return (
            <div className="project_card card" key={id}>
                <div className="project_image_div">                  
                        <img className="project_image"
                            src={image}
                            alt={alt}
                            target="_blank" 
                            rel="noreferrer"                           
                        />

                </div>   

                <div className="project_title_div">               
                    <a className="project_link" target="_blank" rel="noreferrer" href={link}>
                        <h1 className="project_title">{title}</h1>
                    </a>
                </div> 

                <div className="project_status_div">                              
                    <p className="project_desc">{desc}</p>
                    <span><a className="project_views" target="_blank" rel="noreferrer" href={link}>project</a></span>| 
                    <span><a className="project_views" target="_blank" rel="noreferrer" href={code}>code</a></span> |
                    <span><a className="project_views" target="_blank" rel="noreferrer" href={api}>api</a></span>
                    <h4>Status: <span className="project_status">{status}</span></h4>  
                </div>                                                       
            </div>
	)
}

