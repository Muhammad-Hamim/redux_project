import { Route, Routes } from "react-router";
import HomeLayout from "./components/Layout/HomeLayout";
import BlogLayout from "./components/Layout/BlogLayout";
import HomePage from "./components/pages/HomePage";
import BlogPage from "./components/pages/BlogPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="services" element={<h1>Services</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Route>
      {/* blog layout sections routing */}
      <Route path="/blog" element={<BlogLayout />}>
        <Route path=":postId" element={<BlogPage />} />
      </Route>
    </Routes>
  );
};

export default App;
