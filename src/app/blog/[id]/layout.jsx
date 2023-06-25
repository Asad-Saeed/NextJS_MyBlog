import React from "react";
import styles from "./page.module.css";

const BlogLayout = ({ children }) => {
  //Always used to warp all component of this folder
  return (
    <div className={styles.container}>
      BlogLayout
      {children}
    </div>
  );
};

export default BlogLayout;
