import React, { useState, useEffect } from "react";
import CourseDataService from "../service/CourseDataService";

function ListCoursesComponent(props) {
  let [courses, setCourses] = useState([]);
  let [message, setMessage] = useState("");
  useEffect(() => {
    refreshCourses();
  }, []);

  const refreshCourses = () => {
    CourseDataService.retrieveAllCourses("in28minutes") //HARDCODED
      .then(response => {
        console.log(response);
        response.data = response.data.sort(function(a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });
        setCourses(response.data);
      });
  };
  const deleteCourseClicked = id => {
    CourseDataService.deleteCourse("in28minutes", id).then(response => {
      setMessage(`Delete of course ${id} Successful`);
      refreshCourses();
    });
  };
  const updateCourseClicked = id => {
    props.history.push(`/courses/${id}`);
  };
  const addCourseClicked = () => {
    props.history.push(`/courses/-1`);
  };
  return (
    <div className="container">
      <h3>All Courses</h3>
      {message && <div className="alert alert-success">{message}</div>}

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.description}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      deleteCourseClicked(course.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateCourseClicked(course.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
          <button className="btn btn-success" onClick={addCourseClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListCoursesComponent;
