import "./Imagelink.css";
const Imagelink = ({ onChange, onSubmit, errmsg }) => {
  return (
    <div>
      <p className="f3 tc">
        {"this magic brain will detect face in your picture"}
      </p>
      <div className="center">
        <div className="from center pa3 br3 shadow-5">
          <input
            type="text"
            className="f4 w-70 "
            onChange={onChange}
            placeholder="Enter the image address/url"
          />
          <button
            onClick={onSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            find
          </button>
        </div>
      </div>
      {errmsg.check ? (
        <small
          style={{
            color: "brown",
            fontWeight: "bolder",
            fontSize: "clamp(15px, 3.5vw, 20px)",
            marginLeft: "25%",
          }}
        >
          {errmsg.msg}
        </small>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Imagelink;
