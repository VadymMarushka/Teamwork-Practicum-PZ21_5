import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/images/artem.png"} alt="Artem Kozak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Artem Kozak</h2>
          <p style={styles.position}>UI/UX designer</p>
        </div>
        </div>
        <div style={styles.card}>
        <img src={"/Petro_Bida_photo.jpg"} alt="Petro Bida" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Petro Bida</h2>
          <p style={styles.position}>.NET developer</p>
        </div>
        </div>
    <div style={styles.card}>
        <img src={"/images/avatar-nazar.jpg"} alt="Nazar Horodetskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Nazar Horodetskyi</h2>
          <p style={styles.position}>Business analyst</p>
        </div>
        </div>
      <div style={styles.card}>
        <img src={"/images/vadym.png"} alt="Vadym Marushka" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Vadym Marushka</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
      color: "hotpink", // changed color to pink
    margin: "0.5em 0 0 0",
  },
};

export default Body;
