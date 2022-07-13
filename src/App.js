import React, { useState } from "react";



function App() {
  const [imgUrl, setUrl] = useState("");
  const [textUrl, setText] = useState("");
  const callImg = () => {
    fetch("https://cataas.com/cat")
      .then((res) => res.blob())
      .then((data) => setUrl(data[0].url));
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setText(data.text));
  }
    

  
  return (
    <div>
      <div className="content">
        <div className="image">
          <img src={imgUrl} alt="cat" />
        </div>
        <p className="description">
          {textUrl}
          Click on <strong>New Fact</strong> to fetch some facts
        </p>
        <button className="btn" onClick={() => callImg()}>
          New fact
        </button>
      </div>
    </div>
  );
}

export default App;
