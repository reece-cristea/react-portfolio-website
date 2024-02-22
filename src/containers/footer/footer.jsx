import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const footer = () => {
    return (
        <div>
            <div id="footer" className="bg-dark text-light">
                <div className="row" style={{width:"100%"}}>
                    <div className="col ms-2 mt-2">
                        <a href="https://www.linkedin.com/in/reece-cristea/" target="_blank"><img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/linkedin2.png'></img></a>
                        <a href="https://github.com/reece-cristea/" target="_blank"><img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/github.png'></img></a>
                    </div>
                    <div className="col text-end me-2">
                        <p className="fs-4 mb-0">Contact Me</p>
                        <a className="text-light mb-0" href="mailto: rcinlae36@gmail.com">
                            rcinlae36@gmail.com
                        </a>
                        <p className="mb-0">+1(805)915-9606</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer