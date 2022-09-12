import React from "react";
import Proptypes from "prop-types";

const MyComponent = (props) => {
  const { name, children, favoriteNumber } = props;
  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다.
      <br />
      children 값 : {children}
      <br />
      좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: Proptypes.string,
  favoriteNumber: Proptypes.number.isRequired,
};

export default MyComponent;
