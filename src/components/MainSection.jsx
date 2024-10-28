import React from "react";

const MainSection = () => {
  return (
    <main className=" bg-secondary" style={{ height: "auto" }}>
      <div className="container d-flex flex-row-reverse justify-content-evenly align-items-center py-5">
        {/* HERO IMAGE */}
        <div className=" col-3 d-none d-sm-block">
          <img
            className="image"
            src="1473079147382.jpg"
            alt="image"
            width={"250px"}
          />
        </div>

        {/* HERE SECTION USER DETAILS */}
        <div className="content d-flex flex-column justify-content-start col-2">
          <h2>Prasanth U</h2>
          <h4>___________________________</h4>
          <h5>B.Sc Computer Science</h5>
          <p>Contact:+91 1234567890</p>
          <p>Email: prasanthpsh@gmail.com</p>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
