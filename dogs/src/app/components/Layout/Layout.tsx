import { Header } from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="dashboard-container">
        <Header
          imgSrc="/static/assets/nowatch-logo.svg"
          tooltipText={""}
          headerText={""}
        />
        <div className="content-container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
