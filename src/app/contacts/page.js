"use client";

import CustomCard from "@/components/common/CustomCard";
import { axiosInstance } from "@/config/axiosConfig";
import { useEffect, useState } from "react";

export default function Contacts() {
  const [courses, setCourses] = useState([]);
  // const getCourses = async () => {
  //   try {
  //     const courses = await axiosInstance({
  //       method: "GET",
  //       url: "course/all",
  //     });
  //     console.log(courses);
  //     if (courses.status) {
  //       setCourses(courses.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getCourses();
  // }, []);

  return (
    <main className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <CustomCard />
          </div>
        </div>
      </div>
    </main>
  );
}
