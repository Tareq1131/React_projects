import React from "react";

const MenuCard = ({ menuData }) => {
  const myStyle = { color: "red" };
  return (
    <>
     <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        const {id, name, category, image, description}= curElem;

        return (
          <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-Number card-circle subtle">{id}</span>
                    <span className="card-author subbtle" style={myStyle}>
                    {name}
                    </span>
                    <h2 className="card-title">  {name}</h2>
                    <span className="card-description subbtle">
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
          </>
        );
      })}
    </section>
    </>
  );
};

export default MenuCard;
