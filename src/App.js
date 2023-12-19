import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Help/Faq";
import Contact, { contactAction } from "./pages/Help/Contact";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/Help/NotFound";
import { careersLoader } from "./pages/careers/Careers";
import Careers from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersErrors from "./pages/careers/CareersErrors";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path="/" element = {<Home />} />       
      <Route path="about" element = {<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} action ={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersErrors />}>
        <Route index element={<Careers/>}loader={careersLoader}/>
        <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router ={router} />
  );
}

export default App
