import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const setPageTitle = ()=>{

    const location = useLocation();

    useEffect(() => {
      const path = location.pathname;
      let title = 'Default Title';
  
      if (path === '/') {
        title = 'Home';
      } else if (path === '/projects') {
        title = 'Projects';
      } else {
        title = `Page ${path}`;
      }
  
      document.title = title;
    }, [location]);

}


export default setPageTitle;