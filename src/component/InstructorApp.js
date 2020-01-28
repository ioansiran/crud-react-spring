import React from "react";
import ListCoursesComponent from "./ListCoursesComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseComponent from "./CourseComponent";

function InstructorApp() {
  return (
    <Router>
        <h1>Instructor Application</h1>
        <Switch>
          <Route path="/" exact component={ListCoursesComponent} />
          <Route path="/courses" exact component={ListCoursesComponent} />
          <Route path="/courses/:id" component={CourseComponent} />
        </Switch>{" "}
    </Router>
  );
}

export default InstructorApp;
