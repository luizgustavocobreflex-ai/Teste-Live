import Topbar from "./TopBar";

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Topbar />
      <div className="layout-main">
        {children}
      </div>
    </div>
  );
}
