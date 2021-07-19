const Singin = ({ check, setUserData, errmsg }) => {
  const { Small, setSmall } = errmsg;

  const onSingin = (event) => {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    if (!email && !password) {
      return setSmall({ check: true, msg: "all filds are required" });
    }
    const bodyd = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("http://localhost:3001/singin", bodyd)
      .then((res) => res.json())
      .then((res) => {
        if (res.id !== undefined) {
          setUserData({
            id: res.id,
            name: res.name,
            email: res.email,
            entries: res.entries,
            joined: res.joined,
          });
          setSmall({ check: false, msg: "" });
          check("home");
        } else {
          console.log("wrong user id password", res);
          setSmall({ check: true, msg: "wrong user id or pass word" });
        }
      });
  };

  return (
    <article
      className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc"
      style={{ marginTop: "8%" }}
    >
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
              {Small.check ? (
                <small
                  style={{
                    color: "brown",
                    fontWeight: "bolder",
                    fontSize: "clamp(10px, 2.5vw, 14px)",
                  }}
                >
                  {Small.msg}
                </small>
              ) : (
                <></>
              )}
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={onSingin}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              href="#0"
              className="f6 link grow black db pointer"
              onClick={() => {
                check("register");
                setSmall({ check: false, msg: "" });
              }}
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Singin;
