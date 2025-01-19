import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <h2 className="about-us-heading">About Us</h2>
      <p>
        One of our goals for this project is to develop a software designed to
        assist the visually impaired by providing them with the ability to
        experience aspects of the world that people with normal vision often
        take for granted, such as understanding the facial expressions of cats
        or identifying different species of fish while engaging in their hobbies
        like fishing. This software aims to bridge the gap, allowing those with
        visual impairments to better connect with their environment and enjoy
        these experiences through innovative technology.
      </p>
      <p>
        One of the greatest difficulties for wildlife researchers is is
        collecting accurate field data for various endangered species. So, by
        implementing our convolutional neural network on a set of Fish species
        native to a region (in this case Northern Europe), we can put field data
        collection in the hands of the general public and fishermen. Through our
        application, a fisherman who catches a fish that they do not recognize
        can take a picture of their fish, and then run it through the program,
        which will tell them important data regarding it's conservation status,
        and the appropriate action to take with their catch to protect the local
        fishery. In the future, we will build this out so catches can be logged
        and located on a map, to help in tracking fish migration changes in
        regions badly affected by climate change.
      </p>
      <p>
        By leveraging advanced image processing techniques, we analyze their
        expressions in real time.
      </p>
      <p>
        This innovative approach helps provide deeper insights into animal
        behavior.
      </p>
    </section>
  );
};

export default AboutUs;
