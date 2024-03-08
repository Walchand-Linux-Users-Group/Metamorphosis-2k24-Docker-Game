import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Submit = () => {
  const [username, setUsername] = useState("");
  const [flag, setFlag] = useState("");
  const navigate = useNavigate();
  // const [responses, setResponses] = useState(0)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dmeta2024games.onrender.com/api/v1/submit", {
        username: username,
        flag: flag,
      })
      .then((response) => {
        alert("Correct Flag");
      })
      .catch((error) => {
        alert("Invalid Flag or invalid username");
      });
  };
  const handlesUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleFlag = (e) => {
    setFlag(e.target.value);
  };

  const handleLeaderboard = () => {
    navigate("/leaderboard");
  };
  return (
    <>
      <div className="ring">
        <i style={{ "--clr": "#d900ff" }}></i>
        <i style={{ "--clr": "#1fbfdb" }}></i>
        <i style={{ "--clr": "#a60074" }}></i>
        <form action="submit" onSubmit={handleFormSubmit} className="login">
          <div className="login">
            <h2>CONTAINERS</h2>
            <div className="inputBx" onChange={handlesUsername}>
              <input type="text" placeholder="Username" />
            </div>
            <div className="inputBx">
              <input type="text" placeholder="Flag" onChange={handleFlag} />
            </div>
            <div className="inputBx">
              <input type="submit" value="Submit Flag" />
            </div>
            <div className="inputBx">
              <button onClick={handleLeaderboard}>
                🏁 See Leaderboarder! 🏁
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mobile-button">
        <button onClick={handleLeaderboard}>🏁 See Leaderboarder! 🏁</button>
      </div>
    </>
  );
};

export default Submit;
