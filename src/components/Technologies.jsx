import React from "react";

const techList = [
  {
    label: "Tech 01",
  },
  {
    label: "Tech 02",
  },
  {
    label: "Tech 03",
  },
  {
    label: "Tech 04",
  },
  {
    label: "Tech 05",
  },
  {
    label: "Tech 06",
  },
];

const Technologies = () => {
  return (
    <section
      className="row d-flex justify-content-around align-items-center py-5 mb-5"
      style={{ height: "auto", minHeight: "50vh" }}
    >
      {
        // ITERATE OVER ARRAY
        techList.map((item) => {
          return (
            <div
              className="card m-2 bg-info"
              style={{ width: "15rem", height: "20rem" }}
            >
              {item.label}
            </div>
          );
        })
      }
    </section>
  );
};

export default Technologies;
