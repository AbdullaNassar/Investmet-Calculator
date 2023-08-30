import './Header.css'
function Header(props){
    return(
        <div className="header-info">
            <div className="img">
                <img src={props.img} alt="Can't upload photo" />
            </div>
            <h2>Investment Calculator</h2>
        </div>

    );
}

export default Header;