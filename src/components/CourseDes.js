import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDes = () => {
  const courseData = useLoaderData();
  //   const { courseDes, courseHeader } = courseData;
  console.log(courseData);
  return (
    <div>
      <h1>this is course des length is</h1>
    </div>
  );
};

export default CourseDes;
