const Layout = ({ children }) => {
  return (
    <div>
      <p className="h-24 bg-gray-500 flex justify-center items-center">
        Layout
      </p>
      {children}
    </div>
  );
};
export default Layout;
