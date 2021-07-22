import spin from "./spin.svg";
import "./loading.css";

function Loading({ Load }) {
  return (
    <>
      {Load ? (
        <div className="loading">
          <img src={spin} alt="loading img" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loading;
