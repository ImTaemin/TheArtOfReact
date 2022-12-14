import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

// 미리 styles에서 클래스를 받아 오도록 설정
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
