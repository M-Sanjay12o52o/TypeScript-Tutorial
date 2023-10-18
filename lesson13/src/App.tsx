import { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    // use effect deals with side effects
    // it's when something changes
    // here when the users state changes the useEffect will be called into action
    console.log("mounting...");
    console.log("Users: ", users);

    return () => console.log("unmounting...");
  }, [users]);

  return <div className="App"></div>;
}

export default App;
