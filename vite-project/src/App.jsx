import './App.css'
import Sidebar  from './layout/Sidebar/sidebar'
import Content from './layout/Content/content'
import Sidebarcontext from './context/sidebarcontext'


function App() {

  return (
    <>
        <Sidebarcontext />
        <div className='app'>
        <Sidebar/>  
        <Content/>
      </div>
      
     
    </>
  )
}

export default App
