import { useState } from "react";

export default function PhotoCard(props) {
  const [visibility, setVisibility] = useState("hidden");

  return (
    <span className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4 mb-3">
    <div
      className="card mb-3"
      style={{maxWidth: "540px",
      maxHeight: "370px"
      }}
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      >
    <div className="row g-0">
      <div className="col-md-4" style={{maxWidth: "230px"}}>
        <img
          src={props.src}
          className="img-fluid rounded-start"
          alt="..."
          onClick={()=>{setVisibility('visible')}}
          style={{
            height: "230px",
            width: "230px",
            objectFit: "cover"
          }}
          />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.bodyText}</p>
        </div>
      </div>
    </div>

    <div
      className="centered"
      style={{
        visibility: visibility,
        zIndex: 2,
      }}
      >

      <div>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        style={{
          position: "absolute",
          top: 0,
          left: 0
        }}
        onClick={() => {
          setVisibility('hidden')
        }}
        ></button>
      <img
        src={props.src}
        style={{
          width: "400px",
          height: "400px",
          objectFit: "contain",
          top: 0,
          zIndex: 3,
        }}/>
      </div>
    </div>

    </div>
    </span>
  );
}