export default function FooterLogo({ image, alt, title }){
    return (
        <div className="footer_logo">
            <img className="footer_logo_img" src={image} alt={alt} />
            <h1 className="footer_title">{title}</h1>
        </div>       
    )
}