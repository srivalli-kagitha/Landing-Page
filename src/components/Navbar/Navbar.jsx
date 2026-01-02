import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>GlobeTrek</div> 
            <ul className='nav-menu'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Explore</a> 
                <a href="#">Vacation</a>   
            </ul>  
        </div>
    )
}

export default Navbar