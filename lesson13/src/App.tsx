import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
} from "react";

// useCallback memoizes a function so that it's not always recreated
// useMemo memoizes a value

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

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

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      {/* this button onclick fn will run on each btn click */}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Add</button> */}
      {/* button using useCallback which memoizes functions */}
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
