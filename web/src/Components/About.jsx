import React from "react";

const About = () => {
    return (
        <div>
            <div>
                <h2>Overview</h2>
                
                <p>
                    <b><a href="https://github.com/lsabrina51/wayne_hacks.git">Visit Project Git Repository</a></b>
                    <br></br>
                    
                    Our project consists of two parts: 
                    <ul>
                        <li>Species of Fish Identifier</li>
                        <li>Cat Emotion Identifier</li>
                    </ul>

                    Both of these projects focus on using a CNN network to analyze user-uploaded photos. 
                    Once a photo is uploaded, the CNN identifies it as either a specific
                     species or type of fish, or determines the cat's current mood, 
                     depending on the subject of the photo.

                    <br></br>
                </p>
            </div>

            <div class = "motives">
                <h2>Motives</h2>

                <div>
                    <p>
                    One of our goals for this project is to develop a software designed to assist the visually impaired by providing
                     them with the ability to experience aspects of the world that people with normal vision
                      often take for granted, such as understanding the facial expressions of cats or identifying 
                      different species of fish while engaging in their hobbies like fishing. This software aims to bridge 
                      the gap, allowing those with visual impairments to better connect with their environment 
                      and enjoy these experiences through innovative technology. 
                    </p>
                </div>

                <div class = "demo_motives">
                    <h3>Fish Species Identifier</h3>
                    <p><b>Purpose:</b> One of the greatest difficulties for wildlife researchers is 
                        is collecting accurate field data for various endangered species. So,
                        by implementing our convolutional neural network on a set of Fish
                        species native to a region (in this case Northern Europe), we can put 
                        field data collection in the hands of the general public and fishermen.
                        Through our application, a fisherman who catches a fish that they do not recognize
                        can take a picture of their fish, and then run it through the program, 
                        which will tell them important data regarding it's conservation status, 
                        and the appropriate action to take with their catch to protect the local
                        fishery. In the future, we will build this out so catches can be logged
                        and located on a map, to help in tracking fish migration changes in regions
                        badly affected by climate change.
                        <br></br>
                    </p>
                </div>

                <div class = "demo_motives">
                    <h3>Cat Expression Identifier</h3>
                    <p>In addition to helping the visually impared population, a cat expression identifier also aids
                         pet owners, veterinarians,
                         and animal behaviorists better understand and interpret  emotional states and 
                         needs of a cat. Cats are known for their subtle expressions, whether they're happy,
                          angry, sad, normal, scared, or surprised. By developing a reliable tool to identify these 
                          expressions, we can improve cat welfare by enabling early detection of health issues 
                          or emotional distress. Additionally, it can enhance communication between humans and 
                          cats, fostering stronger bonds and allowing owners and researchers to respond more appropriately to 
                          their pets' needs.</p>
                </div>
            </div>


        </div>
    );
}

export default About;