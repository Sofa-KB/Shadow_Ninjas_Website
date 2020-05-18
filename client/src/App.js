import React from 'react';
import Form from 'react-bootstrap/Form';
import Crest from './images/guild_crest_large.png';
import Logo from './images/Shadow2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div>
      <div className="text-center crest">
        <img src={Crest} alt="Guild Crest" />
        <br />
        <img className="logo" src={Logo} alt="Shadow Ninjas" />
      </div>
      <div className="container">

        <Form>
          <div className="text-center">
            <a className="login_button btn btn-primary" href="http://localhost:3001/auth/bnet">
              Log In
              </a>
          </div>
        </Form>


      </div>
    </div>
  );
}

export default App;
