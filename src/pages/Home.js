import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '../components';
import './pages.css';

function Home() {
  return (
    <div className='fade-in'>
      <div className="text-center display-1 text-dark my-5">
        Welcome!
      </div><div className="row ps-5 gx-5 gx-md-5 mb-5 align-items-center text-center" style={{ width: "100%" }}>
        <div className="col-12 col-md-6 ps-4">
          <div className="display-5 text-center">
            Hello! I'm a dedicated software developer with a passion for crafting seamless web experiences. With experience in front-end UI/UX,
            I specialize in translatting designs into interactive, user-friendly interfaces. My skills in HTML, CSS, JavaScript, and frameworks like
            React.js make me a valuable asset in delivering top-notch web solutions.
          </div>
        </div>
        <div className="col-12 col-md-6 text-center ps-4">
          <div className="slideshow" style={{ maxWidth: "750px", overflow: "hidden", display: "inline-block" }}>
            <Carousel />
          </div>
        </div>
        <hr style={{ marginTop: "5rem", border: "2px solid black", width: "100%", borderRadius: "10px" }}></hr>
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <div className='display-3 mt-5' style={{ width: "60%" }}>
            Check out some of my other pages to learn more about me and feel
            free to contact me with any questions you have.
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home