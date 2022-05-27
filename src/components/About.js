import React from "react";

function About({image, about}) {
    return<div>
        <aside>
            <img src={image ? image : 'https://via.placeholder.com/215'}
            alt='blog log'
             />
             <p>{about}</p>
        </aside>
    </div>;
}
export default About;