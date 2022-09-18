import React from "react";
import { ColorConsumer } from "../context/color";
//static contextType 사용
//import ColorContext from '../contexts/color'

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  //static contextType = ColorContext;
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault(); //마우스 우측 버튼 무시
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;

// 클래스형 컴포넌트 static contextType 사용
// class SelectColors extends Component {
//   render() {
//     return (
//       <div>
//         <h2>색상을 선택하세요.</h2>
//         <div style={{ display: ‘flex‘ }}>
//           {colors.map(color => (
//             <div
//               key={color}
//               style={{
//                 background: color,
//                 width: ‘24px‘,
//                 height: ‘24px‘,
//                 cursor: ‘pointer‘
//               }}
//             />
//           ))}
//         </div>
//         <hr />
//       </div>
//     );
//   }
// }