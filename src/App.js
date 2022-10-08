import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [profile, setProfile] = useState({});

  const handleChange = (({target}) => {
    const {firstName, familyName, email} = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [target.name]: target.value
    }))
    console.log(profile)
    console.log(firstName)
    console.log(target)
  } )

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2))
    setProfile({});
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test
        </p>
      </header>
      
        <h1>Aloha</h1>
        <form onSubmit={handleSubmit}>
        <input placeholder='First Name' onChange={handleChange} name='firstName' value={profile.name}></input>
        <input placeholder='Family Name'  onChange={handleChange} name='familyName'></input>
        <input placeholder='email'  onChange={handleChange} name='email'></input>
        <button>Submit</button>
        </form>
      
      
    </div>
  );
}

export default App;
