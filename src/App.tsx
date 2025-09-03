import { Provider } from "react-redux";
import { store } from "./store";
import ThemeSync from "./components/ThemeSync";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Journey from "./pages/user/Journey";
import Projects from "./pages/user/Projects";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeSync />

      <div className="min-h-screen bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100 font-roboto">
        <BrowserRouter>
          <Routes>
            {/* Layout wrapper for all user routes */}
            <Route path="/" element={<Layout />}>
              {/* Default route - redirect to home */}
              <Route index element={<About />} />

              {/* Named routes */}
              <Route path="about" element={<About />} />
              <Route path="journey" element={<Journey />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
