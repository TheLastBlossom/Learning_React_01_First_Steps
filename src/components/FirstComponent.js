import React from "react";
let name = "Gerad"
let userdata = {
    'surname': 'Radmandt',
    'age': '23',
    'hobbies': 'calisthecnics, programming, yoga',
};
const FirstComponent = () => {
    return (
        <div>
            <h2>Data of the user: {name} {userdata.surname}</h2>
            <ul>
                <li>Age: {userdata.surname}</li>
                <li>Hobbies: {userdata.hobbies}</li>
            </ul>

        </div>
    );
}
export default FirstComponent;