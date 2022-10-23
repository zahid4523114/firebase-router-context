import React from "react";
import { Link } from "react-router-dom";

const FreeCourses = ({ course }) => {
  const { id, courseThumb, courseDes, price, courseHeader } = course;
  console.log(course);
  return (
    <div className="my-5">
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-full w-full" src={courseThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{courseHeader}</h2>
          <p className="font-bold">${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/course/${id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourses;
