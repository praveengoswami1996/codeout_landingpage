import './Navbar.css';
import logo from '../../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className='app__navbar'>
        {/*Left Side of Navbar Section*/}
        <div className='app__navbar-left'>
            <div className='app__navbar-left_logo'>
                <img src={logo} alt="Codeout Logo"/>
            </div>
            <div className='app__navbar-verticalline'/>
            <form className='app__navbar-searchbar'>
                <input 
                    type="text" 
                    placeholder='Search our courses..'
                />
                <button type='submit'>
                    <BsSearch size={22} color='#fff' />
                </button>
            </form>
        </div>

        {/*Right Side of navbar Section*/}
        <div className='app__navbar-right'>
            <ul>
               <li>Home</li>
               <li>Blog</li>
               <li className='dropdown'>Courses <BiDownArrow /></li>
               <li>About Us</li>
               <li style={{margin: "0"}}>Contact Us</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar;