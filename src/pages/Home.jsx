import React from 'react';
import { useSocket } from '../providers/Socket';

const Home = () => {
  const { socket } = useSocket();
  return (
    <div className="get-in-touch">
      <div className="joiningform">
        <h1 className="title">Join The Room</h1>
        <form className="contact-form row">
          <div className="form-field col-lg-6 ">
            <input
              id="email"
              className="input-text js-input"
              type="email"
              required
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="joinCode"
              className="input-text js-input"
              type="text"
              required
            />
            <label className="label" htmlFor="joinCode">
              Room Code
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
