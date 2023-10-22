import React from 'react'
const clickMe = (e) => {
    console.log('Even onClick');
};
const showMyName = (e, name) => {
    console.log('Mi name is ' + name);
};
function doubleClickMe(){
    console.log('You double click me');
}
const leaveEnterMause = (e, action)=>{
    alert(`You have ${action}`);
}
const onBlur = e=>{
    console.log('What are you leaving me');
}
const onFocus = e=>{
    console.log('Thanks. Now insert your name!!!')
}
export const EventsComponent = () => {
    return (
        <div>
            <h2>Events</h2>
            <button onClick={clickMe}>Click me</button> <br/>
            <button onClick={e=>{
                showMyName(e, 'Joghs')
            }}>Show my name</button><br/>
            <button onDoubleClick={doubleClickMe}>Double click me</button>
            <div id="box-event" onMouseLeave={e=>leaveEnterMause(e, 'leaved')}
            onMouseEnter={e=>leaveEnterMause(e, 'entered')}>
                Pass your cursor inside me
            </div>
            <div>
                <input type='text' onBlur={onBlur} onFocus={onFocus} placeholder='Insert your name'/>
            </div>
        </div>
    )
}
