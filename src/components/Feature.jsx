import React from 'react'
import FeaturesBOx from "./FeaturesBOx"
import featureimage from "../images/feature_1.png"
import featureimage2 from "../images/feature_2.png"
import featureimage3 from "../images/feature_3.png"

export const Feature = (props) => {
    return (
        <div id="features">
           <div className="a-container">
             <FeaturesBOx image={featureimage} title="Development Course"/>
             <FeaturesBOx image={featureimage2} title="Money Saving Services"/>
             <FeaturesBOx image={featureimage3} title="Usability Interface"/>

           </div>  
        </div>
    )
}


export default Feature;