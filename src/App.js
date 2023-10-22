import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { EventsComponent } from './components/EventsComponent';

function App() {
  const name = "Luis Suarez";
  const userdata = {
    "country": "Colombia",
    "age": 30,
    "gender": "Male",
    "specialty": "Calisthenic Flow",
    "achievements": ["Colombian Flow Master 2016", "Pan-American Flow Fest 2019"]
  }
  const skills = "john";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='componets'>
          <EventsComponent />
          <hr/>
          <ThirdComponent userdata={userdata} skills={skills} />
          <hr/>
          <SecondComponent />
          <hr/>
          <FirstComponent></FirstComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
