export default function ProjectMenu({id, title, active, setSelected}){    
    return (
        <span 
            className={ active ? "project_menu_item active" : "project_menu_item" }
            onClick={()=> setSelected(id)}>
            {title}
        </span>
    )
}