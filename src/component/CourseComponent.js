import React, { useState, useEffect } from "react";
import CourseDataService from "../service/CourseDataService";
import { useForm } from "react-hook-form";

function CourseComponent(props) {
  const [id, setId] = useState(props.match.params.id);
  const [description, setDescription] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    let username = "in28minutes";
    
    let course = {
        id,
        username,
        description:data.description
    }
console.table(course)
    if (id === -1) {
        CourseDataService.createCourse(username, course)
            .then(() => props.history.push('/courses'))
    } else {
        CourseDataService.updateCourse(username, id, course)
            .then(() => props.history.push('/courses'))
    }

  };
  useEffect(() => {
    if (id == -1) {
      return;
    }
    CourseDataService.retrieveCourse("", id).then(response => {
      setDescription(response.data.description);
    });
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form-group">
        <label>Id</label>

        <input
          className="form-control"
          name="id"
          defaultValue={id}
          ref={register}
          disabled
        />
      </fieldset>
      <fieldset className="form-group">
        <label>Description</label>
        <input
          className="form-control"
          name="description"
          defaultValue={description}
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.description && <span>This field is required and with a minimum length of 6 characters</span>}
      </fieldset>
      <input className="btn btn-success" type="submit" />
    </form>
  );
}

export default CourseComponent;
