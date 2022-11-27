import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Resume from "../Resume/Resume";


function App() {
	
	return (
		<div>
			<Navbar />
			<Header/>
			<About />
			<Resume/>
			<Portfolio />
			<Contact />
			<Footer />
			
		</div>
	);
}

export default App;
