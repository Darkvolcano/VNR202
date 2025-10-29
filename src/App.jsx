// import "./App.css";
// import Header from "./Header";
// import Footer from "./components/Footer";
// import ScrollytellingTimeline from "./ScrollytellingTimeline";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <ScrollytellingTimeline />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css"; // File CSS đã nâng cấp LỚN

// Import các component
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <main>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        {/* (Bạn có thể thêm các phần "Tư tưởng", "Bản đồ", "Di sản" ở đây 
             với các bố cục khác nữa) */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
