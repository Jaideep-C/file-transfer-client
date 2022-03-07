import { useState } from "react";
import "./styles/app.css";
function App() {
  const [fileData, setFileData] = useState();
  const onFileChange = (e) => setFileData(e.target.files[0]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    const server = "https://neat-otter-84.loca.lt";
    data.append("fileData", fileData);
    fetch(`${server}/file/upload`, {
      method: "POST",
      body: data,
    })
      .then((res) => console.log("Posted", res))
      .catch((err) => console.log(err));
    console.log(data);
  };
  return (
    <div className="myApp">
      <h1>Back up a file</h1>
      <form onSubmit={onFormSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
