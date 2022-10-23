import React, { useEffect, useState } from "react";
import FreeCourses from "./FreeCourses";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1500/corses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="flex justify-between flex-wrap container mx-auto">
        {courses.map((course) => (
          <FreeCourses key={course.id} course={course}></FreeCourses>
        ))}
      </div>
    </div>
  );
};

export default Courses;
