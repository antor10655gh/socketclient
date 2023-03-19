import './App.css';

function App() {
  return (
    <div className="App">
      <div class="get-in-touch">
        <div className="joiningform">
          <h1 class="title">Join The Room</h1>
          <form class="contact-form row">
            <div class="form-field col-lg-6 ">
              <input
                id="email"
                class="input-text js-input"
                type="email"
                required
              />
              <label class="label" for="email">
                E-mail
              </label>
            </div>
            <div class="form-field col-lg-6 ">
              <input
                id="joinCode"
                class="input-text js-input"
                type="text"
                required
              />
              <label class="label" for="joinCode">
                Code
              </label>
            </div>
            <div class="form-field col-lg-12">
              <input class="submit-btn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
