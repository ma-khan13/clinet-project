import React from "react";

const About = () => {
  return (
    <section>
      <div className="container about-section">
        <div className="section-heading">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="row">
          <div className="col-12 content-left">
            <div className="row">
              <div className="col-md-4 image-left">
                <img
                  src={
                    "https://i.ibb.co/Jm9WKKC/raamin-ka-0q-JBEzudn5-E-unsplash-1.png"
                  }
                  alt=""
                />
              </div>
              <div className="col-md-8 text-container">
                <span className="d-md-block border-left"></span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa fuga laudantium ducimus totam magnam debitis a sint
                  dignissimos asperiores doloribus ea quas officia ullam, eaque
                  architecto eligendi vel aliquid exercitationem quos quisquam
                  sed. Vel dignissimos voluptate sit sint voluptates beatae
                  excepturi consectetur rem distinctio, saepe dicta temporibus
                  similique mollitia non?
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 content-right">
            <div className="row">
              <div className="col-md-8 text-container-bottom">
                <span className=" d-md-block border-right"></span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa fuga laudantium ducimus totam magnam debitis a sint
                  dignissimos asperiores doloribus ea quas officia ullam, eaque
                  architecto eligendi vel aliquid exercitationem quos quisquam
                  sed. Vel dignissimos voluptate sit sint voluptates beatae
                  excepturi consectetur rem distinctio, saepe dicta temporibus
                  similique mollitia non?
                </p>
              </div>
              <div className="col-md-4 image-right">
                <img
                  src={
                    "https://i.ibb.co/RBx5Tbr/raamin-ka-1-VRz-Np4-TJs4-unsplash.png"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
