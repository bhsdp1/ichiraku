import React from 'react';
import '../../dist.css/Homepage.css';
import Hero from '../../img/Hero.png';
import Left from '../../img/Left.png';
import Owner from '../../img/Owner.png';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero__section">
                <div className="left__container">
                    <img src={Left} alt="" />
                    <h2>ラーメンは最大の喜びです</h2>
                    <h2>一楽</h2>
                </div>
                <div className="hero__container">
                    <div className="hero">
                        <div className="hero__text">
                            <h2>Japanese Authentic Noodle Restaurant</h2>
                            <p>Ramen is the best pleasure</p>

                            <div className="buttons">
                                <a href="/">Explore →</a>
                                <a href="/">Branches</a>
                            </div>
                        </div>
                        <img src={Hero} alt="" />
                    </div>
                </div>
                <div className="bottom__container">
                    <div className="left__text">
                        <h3>39k+</h3>
                        <p>Satisfied<br/>Costumers</p>
                    </div>
                    <div className="vl"/>
                    <div className="right__text">
                        <img src={Owner} alt="Owner"/>
                        <p>"This is the best Authentic<br/>Japanese Restaurant I have<br/>experienced"</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Homepage;
