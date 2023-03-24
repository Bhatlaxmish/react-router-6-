import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet/>{/* it tells react nested router should desplayed at this position */}
      </main>
    </>
  );
}

export default RootLayout;
