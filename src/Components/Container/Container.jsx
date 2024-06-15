import React from "react";
import styles from "./Container.module.css";
import Navigation from "../Navigation/Navigation";
import MainContent from "../MainContent/MainContent";
import useExpenses from "../../Hooks/useExpenses";

function Container({ children }) {
  const [LazyComponent, setLazyComponent] = React.useState("form");


  const handleLazyComponent = (com) => setLazyComponent(com);

  return (
    <div className={styles.container}>
      <Navigation
        setLazyComponent={setLazyComponent}
        handleLazyComponent={handleLazyComponent}
      />
      <MainContent
        handleLazyComponent={handleLazyComponent}
        LazyComponent={LazyComponent}
      />
    </div>
  );
}

export default Container;
