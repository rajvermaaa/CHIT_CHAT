import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "../components/Logout";   // ✅ Import Logout Button

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      if (user) setUserName(user.username);
    };
    getUserName();
  }, []);

  return (
    <Container>
      {/* Logout button placed on top-right */}
      <div className="logout-container">
        <Logout />
      </div>

      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  position: relative;    /* Needed for logout positioning */

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;

  img {
    height: 20rem;
  }

  span {
    color: #4e0eff;
  }

  /* Position the logout button in the top-right corner */
  .logout-container {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
