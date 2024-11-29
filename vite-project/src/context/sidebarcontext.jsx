import './sidebarcontext.css'
import logo from '../assets/icons/icons8-laptop-metrics-64.png'
import logo3 from '../assets/icons/Person.png'
import logo4 from '../assets/icons/icons8-logo-50 (1).png'
import logo5 from '../assets/icons/icons8-view-48.png'
import logo6 from '../assets/icons/icons8-color-50.png'
import logo2 from '../assets/icons/icons8-high-intensity-beam-spotlight-for-party-function-24.png'

const sidebarcontext = () => {
  return (
    <div>
        <div className="header">
        <div className="header-content">
          <div className='nav'>
            <img src={logo4} alt="" width={40} />
            <h1>Dashboard</h1>
          </div>
          <ul className="menu">
            <li>
              <img src={logo6} alt="" width={20}/>
            </li>
            <li>
            <img src={logo5} alt="" width={20}/>
            </li>
            <li>
            <img src={logo3} alt="" width={20}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default sidebarcontext