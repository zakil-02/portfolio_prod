
import meter3 from "../assets/img/fullCercle.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Soft Skills</h2>
                        <p>Here are some of my skills !</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>LeaderShip</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Teamwork</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Perseverence</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Design Thinking</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Problem Solving</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}