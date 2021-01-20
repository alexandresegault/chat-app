import React from "react";
import Contact from "./components/Contact.js";
import users from "./components/ContactList";
function App() {
  return (
    <div className="App">
      {users.map((user, index) => {
        return (
          <Contact
            key={index}
            name={user.name}
            avatar={user.avatar}
            online={user.online}
          />
        );
      })}
    </div>
  );
}

export default App;
