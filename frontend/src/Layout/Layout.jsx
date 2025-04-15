import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/signup", "/login"];

  return (
    <div>
      <Header />
      <main>{children}</main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
