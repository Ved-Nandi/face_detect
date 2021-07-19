const Register = ({ check, setUserData, errmsg }) => {
  const { Small, setSmall } = errmsg;
  const onRegister = (event) => {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const cpassword = document.getElementById("cpassword").value;
    const name = document.getElementById("name").value;

    if (!password && !email && !cpassword && !name) {
      return setSmall({ check: true, msg: "all fildes are required" });
    }
    if (password === cpassword) {
      const bodyd = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      };

      fetch("https://radiant-dusk-10748.herokuapp.com/register", bodyd)
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
            console.log("user allredy present");
            setSmall({ check: true, msg: "email is allredy present" });
          }
        });
    } else {
      console.log("pssword and confirm password sholud match");
      setSmall({ check: true, msg: "chek password and confirm password" });
    }
  };

  return (
    <article
      className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc"
      style={{ marginTop: "1%" }}
    >
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
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
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="cpassword"
                id="cpassword"
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
              value="Register"
              onClick={onRegister}
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
