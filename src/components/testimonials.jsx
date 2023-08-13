import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row" style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-8">
                  <div className="testimonial">
                    <div className="testimonial-image" style={{ height: '80px', width: '80px' }}>
                      {" "}
                      <img style={{ height: '100%', width: '100%' }} src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p style={{ fontSize: '20px' }}>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
