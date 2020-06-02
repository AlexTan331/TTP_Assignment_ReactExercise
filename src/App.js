import React, { Component } from "react";
import ContactCard from "./ContactCard";
import css from "./App.css";
class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="James"
          mobileNumber="123-456-789"
          workNumber="123-654"
          email="James@example.com"
        />
        <ContactCard
          name="Joe"
          mobileNumber="789-000-789"
          workNumber="789-000"
          email="Joe@example.com"
        />
        <ContactCard
          name="John"
          mobileNumber="111-000-222"
          workNumber="999-000"
          email="John@example.com"
        />
      </>
    );
  }
}

export default App;
