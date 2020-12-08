import React from 'react'

function Menu() {
    return (
        <div className="about">
            <div className="container">
               <div className="row">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="img/pizza.jpg" alt="pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                    <h3>The Pizza Menu</h3>
                    <h1>CHICAGO THIN CRUST</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas facere debitis esse. Molestias eum distinctio rerum provident iste, magnam ratione veritatis, beatae ex repellat labore blanditiis fugit, repudiandae saepe.
                    </p>
                    <div className="about__btn">
                        <a href="" className="btn btn-smart">
                            VIEW MORE
                        </a>
                    </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Menu
