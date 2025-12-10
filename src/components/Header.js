import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My dream team</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "1em",
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
};

export default Header;
