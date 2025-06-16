// App.jsx
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const MovieDetails = lazy(() => import("./components/MovieDetails"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Favorites = lazy(() => import("./pages/Favorites")); 
const AddMovie = lazy(() => import("./pages/AddMovie"));
const EditMovie = lazy(() => import("./pages/EditMovie"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "favorites", element: <Favorites /> },
      { path: "addmovie", element: <AddMovie /> },
     { path: "edit/:id", element: <EditMovie /> },


    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<p style={{ textAlign: "center", paddingTop: "2rem" }}>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
