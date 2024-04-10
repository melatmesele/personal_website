import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
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
                        <h2>Skills</h2>
                        <p>With a passion for crafting robust solutions and a commitment to continuous learning, I have honed a diverse skill set in software engineering. From designing scalable back-end architectures to creating intuitive front-end interfaces.</p>
                        <Carousel responsive={responsive} infinite={true} showDots={false} // This line hides the navigation dots, assuming that 'showDots' is the correct prop.
  arrows={false}  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Backend Development Skill Meter" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Frontend Development Skill Meter" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Database Management Skill Meter" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Web Development Skill Meter" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Colorful Sharp Designs Background" />
    </section>
  )
}
