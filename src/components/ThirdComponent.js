import React from 'react'
import PropTypes from 'prop-types';
// export const ThirdComponent = (props) => {
//     return (
//         <div>
//             <h2>Communication between components</h2>
//             <h3>Name : {props.name}</h3>
//             <ul>
//                 <li>Country: {props.userdata.country}</li>
//                 <li>Age: {props.userdata.age}</li>
//                 <li>Gender: {props.userdata.gender}</li>
//                 <li>Specialty: {props.userdata.specialty}</li>
//                 <li>Achivements: <ul>
//                 <li>{props.userdata.achievements[0]}</li>
//                 <li>{props.userdata.achievements[1]}</li>
//                 </ul></li>
//             </ul>
//         </div>
//     )
// }

export const ThirdComponent = ({ name, userdata, skills }) => {
    const { country, age, gender, specialty, achievements } = userdata;
    return (
        <div>
            <h2>Communication between components</h2>
            <h3>Name : {name}</h3>
            <ul>
                <li>Country: {country}</li>
                <li>Age: {age}</li>
                <li>Gender: {gender}</li>
                <li>Specialty: {specialty}</li>
                <li>Achivements: <ul>
                    <li>{achievements[0]}</li>
                    <li>{achievements[1]}</li>
                </ul></li>
            </ul>
        </div>
    )
}
ThirdComponent.propTypes = {
    name: PropTypes.string.isRequired,
    userdata: PropTypes.object.isRequired,
    skills: PropTypes.PropTypes.oneOf([
        "john", "jinas"    
    ]).isRequired
}
ThirdComponent.defaultProps = {
    name: 'Jonas Rodhs'
}