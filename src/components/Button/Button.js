import Nav from 'react-bootstrap/Nav';

function Button({ icon, text, href }) {
    return (
        <Nav.Link href={href} className='m-3 d-flex p-2 rounded'
            style={{
                backgroundColor: "#11999E",
                fontSize: "20px",
                color: "#E4F9F5",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>
            <i className={icon} style={{
                fontSize: "30px",
                marginLeft : "15px",
            }}></i>
            {text}
        </Nav.Link>
    )
}

export default Button;