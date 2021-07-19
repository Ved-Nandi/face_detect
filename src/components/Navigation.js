const Navigation = ({ check, text, setnull, errmsg }) => {
  function reset() {
    setnull.setImgurl("");
    setnull.setIurl("");
    errmsg({ check: false, msg: "" });
    console.log(errmsg);
    check("Login");
  }
  return (
    <nav
      className="mt0"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <p
        className="f3 link dim black underline pr3 pointer"
        onClick={() => reset()}
      >
        {text}
      </p>
    </nav>
  );
};

export default Navigation;
