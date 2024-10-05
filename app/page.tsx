"use client";
import React from "react";
import StudentCard from  "./components/StudentCard";

const students = [
  {
    name: " Areeba Shahid",
    age:20,
    rollNumber: "39819",
    className: "GIAIC",
    imageUrl: "/images/side.jpeg",
    gender:"Female",
    city:"Karachi",
    phoneNumber: "0311-1234567",
    address: "132 main St, New York,NY 90009"
  },

  {
    name: " meryem Shahid",
    age:20,
    rollNumber: "39819",
    className: "GIAIC",
    imageUrl: "/images/side2.jpeg",
    gender:"Female",
    city:"Karachi",
    phoneNumber: "0311-1234567",
    address: "132 main St, New York,NY 90009"
  },

  {
    name: " Abrish Fatima",
    age:20,
    rollNumber: "39819",
    className: "GIAIC",
    imageUrl: "/images/side3.jpeg",
    gender:"Female",
    city:"Karachi",
    phoneNumber: "0311-1234567",
    address: "132 main St, New York,NY 90009"
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-b text-underline-offset: 8px text-transform: uppercase text-black-800 underline hover:underline-offset-4">
        Created by Areeba Shahid
        </h2>
      </div>
    </div>
    
  );
}