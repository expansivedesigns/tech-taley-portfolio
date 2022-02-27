export default function SkillCard({ id, title, desc }){
    return (
            <div className="skill_card card" key={id}>
                <h2 className="skill_title">{title}</h2>
                <h4 className="skill_desc">{desc}</h4> 
            </div>
    )
}



