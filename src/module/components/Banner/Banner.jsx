import cx from "classnames";
import styles from "./Banner.module.css";

export const Banner = ({ className, children }) => {
  const bannerClass = cx(styles.banner, className);
  return <div className={bannerClass}>{children}</div>;
};
