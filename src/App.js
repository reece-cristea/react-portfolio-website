import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer, Navbar} from './containers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/AboutMe",
        element: <AboutMe />
      },
      {
        path: "/Projects",
        element: <Projects />
      },
      {
        path: "/Resume",
        element: <Resume />
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;