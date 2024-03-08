import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Submit = () => {
  const [username, setUsername] = useState("");
  const [flag, setFlag] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // const [responses, setResponses] = useState(0)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://dmeta2024games.onrender.com/api/v1/submit", {
        username: username,
        flag: flag,
      })
      .then((response) => {
        setMsg("Correct Flag");
        setLoading(false);
        setFlag("");
      })
      .catch((error) => {
        setMsg("Invalid Flag or invalid username");
        setLoading(false);
        setFlag("");
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
    console.log("Leaderboard");
  };

  return (
    <>
      <div className="ring">
        <i style={{ "--clr": "#d900ff" }}></i>
        <i style={{ "--clr": "#1fbfdb" }}></i>
        <i style={{ "--clr": "#a60074" }}></i>
        <form action="submit" onSubmit={handleFormSubmit} className="login">
          <div className="login">
            <h2 style={{ textAlign: "center", marginBottom: "0.2rem" }}>
              PIRATES OF CONTAINERS
            </h2>
            <div className="inputBx" onChange={handlesUsername}>
              <input type="text" placeholder="Enter Meta ID" />
            </div>
            <div className="inputBx">
              <input
                type="text"
                value={flag}
                placeholder="Enter Flag"
                onChange={handleFlag}
              />
            </div>
            <div className="inputBx">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <input type="submit" value="Submit Flag" />
                  <div className="msggg">{msg}</div>
                </>
              )}
            </div>
            <div className="inputBx">
              <button onClick={handleLeaderboard}>
                🏁 See Leaderboard! 🏁
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mobile-button">
        <button onClick={handleLeaderboard} style={{ zIndex: "1000000" }}>
          🏁 See Leaderboard! 🏁
        </button>
      </div>
    </>
  );
};

export default Submit;
