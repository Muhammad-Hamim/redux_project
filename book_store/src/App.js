import React from "react";
import Navbar from "./components/Navbar";
import BookPage from "./components/BookPage";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* main content */}
      <main class="py-12 2xl:px-6">
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          {/* book page */}
          <BookPage />
          {/* add book page */}
          <BookForm />
        </div>
      </main>
      {/* main content */}
    </div>
  );
};

export default App;
