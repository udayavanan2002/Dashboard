import "./sidebar.css"
import logo from '../../assets/icons/icons8-laptop-metrics-64.png';
import logo2 from '../../assets/icons/icons8-high-intensity-beam-spotlight-for-party-function-24.png'
import logo7 from '../../assets/icons/icons8-year-64 (1).png';
import logo11 from '../../assets/icons/icons8-city-50.png'
import logo12 from '../../assets/icons/icons8-country-50 (1).png'
import logo13 from '../../assets/icons/icons8-high-intensity-beam-spotlight-for-party-function-24 (1).png'
import logo14 from '../../assets/icons/icons8-likelihood-64.png'
import logo15 from '../../assets/icons/icons8-relevance-64.png'
import logo16 from '../../assets/icons/icons8-sector-67.png'
import logo17 from '../../assets/icons/icons8-view-48.png'

const sidebar = () => {
    const navLi = {id:"",topic:"X"}
    const navlinks = [
        {id:"Intensity",topic:{logo2},href:"www.google.com",img:`{logo}`},{ id:"Likelihood",topic:"X "},{ id:"Relevance",topic:"X "},{ id:"Year"},
        { id:"Country"},{ id:"Topics"},{ id:"Region"},{ id:"city"}
    ]
  return (
    <div className="main">
        <div className={`sidebar`}>  
        <div className="head">filters</div>
             <nav className="navigation">
                <ul className="nav-list">
                    {/* {
                        // navlinks.map((navLi)=> (<li key={navLi.topic}>
                        //     <a href={navLi.href} className={`nav-link`}>
                        //         <img src={navLi.topic} alt="" />
                        //         <span className="nav-link-test">
                        //             {navLi.id}
                        //         </span>
                        //     </a>
                    </li>
                    ))
                } */}
                
                <li><img src={logo16}  width={20}/><a href=""> Sector</a></li>
                <li><img src={logo12}  width={20}/><a href=""> Country</a></li>
                <li><img src={logo17}  width={20}/><a href=""> Sources</a></li>
                <li><img src={logo11}  width={20}/><a href=""> City</a></li>
                <li><img src={logo7}  width={20}/><a href=""> Year</a></li>
                <li><img src={logo13}  width={20}/><a href=""> Intensity</a></li>
                <li><img src={logo14}  width={20}/><a href=""> Likelihood</a></li>
                <li> <img src={logo15} width={20}/><a href="">Relevence</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default sidebar