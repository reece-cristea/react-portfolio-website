import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';


const Resume = () => {

  const downloadResume = () => {
    const aTag = document.createElement('a');
    aTag.href = "https://rcportfolioimages.s3.us-west-1.amazonaws.com/reececristearesume.png";
    aTag.setAttribute('download', 'reece_cristea_resume.png')
    aTag.target = "_blank";
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  
  return (
    <div className="py-5 ms-5 text-center fade-in" style={{height: "100%"}}>
      <div className="row w-100 justify-content-around">
        <div className="col-md-10 fade-in">
          <img className="border rounded border-4 border-dark" src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/reece_cristea_resume.png' style={{width: "100%"}} alt="Resume"></img>
        </div>
        <div className="col">
          <button className="btn btn-primary mt-5 fade-in text-light" onClick={downloadResume} value="download">Download</button>
        </div>
      </div>
    </div>
  )
}

export default Resume