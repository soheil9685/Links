import { Container } from "react-bootstrap";

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#11999E" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,128C384,107,480,117,576,138.7C672,160,768,192,864,192C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            <div className="text-center d-flex justify-content-center align-items-center" style={{backgroundColor : "#11999E"}}>
                <i class="fa-regular fa-copyright" style={{color : "#E4F9F5" , fontSize : "25px"}}></i>
                <h4 className="text-center" style={{color : "#E4F9F5" , marginRight : "10px"}}>طراحی شده توسط سهیل حسینی</h4>
            </div>
        </>
    )
}

export default Footer;