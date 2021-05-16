import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      {!changeText && <Output>It is good to see you</Output>}
      {changeText && <Output>Changed</Output>}
      <h2>Hello world</h2>
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
