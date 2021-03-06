import React from "react";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";



const Routes = () => {
  return (
    <>
      <Router>
      
        <ScrollTopBehaviour />
        <Switch>
          {/* <Route exact path="/" component={Preview} />
          <Route path="/home-light" component={HomeLight} />
          <Route path="/home-light-animation" component={HomeLightAnimation} />
          <Route
            path="/home-light-sidebar-two"
            component={HomeLightSidebarTwo}
          />
          <Route path="/dark-particle-effect" component={HomeDarkParticles} />
          <Route
            path="/home-light-professional"
            component={LightProfessionalAnimation}
          />
          <Route
            path="/home-light-professional-2"
            component={HomeLightProfessional2}
          /> */}
          <Route path="/" component={HomeDarkAnimation} />
          <Route path="/home-dark-animation" component={HomeDarkAnimation} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
