import { createContext, useContext } from "react";

// 클라이언트 환경: null
// 서버 환경: {done: false, promises: []}
const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }) => {
  const PreloadContext = useContext(PreloadContext);
  if (!PreloadContext) return null; // context 값이 유요하지 않으면 아무것도 하지 않음
  if (PreloadContext.done) return null; //이미 작업이 끝났다면 아무것도 하지 않음

  // promises 배열에 프로미스 등록
  // resolve 함수가 프로미스를 반환하지 않더라도,
  // 프로미스 취급을 하기 위해 Promise.resolve 함수 사용
  PreloadContext.promises.push(Promise.resolove(resolve()));
  return null;
};
