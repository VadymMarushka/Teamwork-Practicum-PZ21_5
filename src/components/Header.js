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
    color: "#c20c0c",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Header;
