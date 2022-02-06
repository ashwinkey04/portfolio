import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Raag extends Component {
    render() {
        if (!this.props.data) return null;
        const raag = "raag";
        const downloadLink = "https://f-droid.org/en/packages/in.amfoss.raag/";
        const githubLink = "https://github.com/raag-music/raag"
        const desc = "Checkout my latest Flutter project - an open source music player.";

        return (
            <Slide right duration={1000}>
                <section id="raag">
                    <Fade duration={1000}>
                        <div className="row">
                            <div className="nine columns content">
                                <h2>{raag}</h2>
                                <p>{desc}</p>
                                <div className="row">
                                    <div className="columns contact-details">
                                        <p>
                                            <a href={downloadLink} className="button">
                                                <i className="fa fa-android"></i> F-Droid
                                            </a>
                                            <a href={githubLink} className="button github">
                                                <i className="fa fa-github"></i> GitHub
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>
            </Slide>
        );
    }
}

export default Raag;
