import React, { Component } from "react";
import { Slide } from "react-reveal";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    // const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <div className="row">
          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              {/* <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul> */}
            </aside>
            <aside className="six columns footer-widgets">              
          <Slide right duration={1000}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ashwinkey04"
              theme="dark"
              options={{ height: 400 }}
            />
          </Slide>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
