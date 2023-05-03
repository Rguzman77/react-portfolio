import { Outlet } from 'react-router-dom';
import { Nav } from '../../components/index';


const Layout = () => {
    return (
        <>
            <Nav />
            
            <main>
                <Outlet />
            </main>
          
        </>
    )
}

export default Layout