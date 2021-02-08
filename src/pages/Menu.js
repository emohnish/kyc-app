import '../styles/menu.css';
import {SidebarData} from '../components/SidebarData';
const navLinks = [
    { url: '/about-us', name: 'About Us' },
    { url: '/projects', name: 'Projects' },
    { url: '/services', name: 'Services' },
    { url: '/contact-us', name: 'Contact Us' },
  ];
  
  const Menu=()=> {  
        return (      
        <div>
          
          <div className="menu">    
          <div className="active" >       
            <ul>
            
            <li>
                <a href="#">Home</a>
            </li>
              
            </ul>
          </div>
          </div>  
        </div>
      );
     
  }

  export default Menu;