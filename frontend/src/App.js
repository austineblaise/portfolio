import React, {useState,useEffect} from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Header from "./components/Navbar/Navbar";
import Resume from "./components/Resume/Resume";
import AdminSignin from "./components/signin/AdminSignin";
import AdminPage from "./components/AdminPage/PageAdmin";
import PortfolioUpload from "./components/screens/PortfolioUpload";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AdminRoute from "./components/AdminRoute";
import ScrollToTop from "./components/ReactScroll/ReactScroll";




function App() {
	const [isLoading, setLoading] = useState(true);

	function fakeRequest() {
	  return new Promise(resolve => setTimeout(() => resolve(), 2500));
	}
  
	useEffect(() => {
	  fakeRequest().then(() => {
		const el = document.querySelector(".loader-container");
		if (el) {
		  el.remove();
		  setLoading(!isLoading);
		
		}
	  });
	}, [isLoading]);
  
	if (isLoading) {
	  return null;
	}
	return (
		<div className="App">
			<Router>
			<ScrollToTop/>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/about">
						<About />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>

					<Route path="/header">
						<Header />
					</Route>

					<Route path="/resume">
						<Resume />
					</Route>

					

					<AdminRoute path="/adminpage">
						<AdminPage/>
					</AdminRoute>

					<Route path="/adminsignin">
						<AdminSignin />
					</Route>

					<AdminRoute path="/porfolioupload">
						<PortfolioUpload/>
					</AdminRoute>
					<Route>
					<PageNotFound/>
					</Route>
					
				</Switch>
				
			</Router>

		</div>
	);
}

export default App;
