import React from "react";

function About(props) {
  return (
    <>
      <h1 style={{color:props.mode==='light'?'black':'white'}}>ABOUT</h1>
      <div className="jumbotron" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more about the author
        </a>
      </div>
    </>
  );
}

export default About;
