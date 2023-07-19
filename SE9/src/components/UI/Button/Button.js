// React를 가져옵니다.
import React from 'react';

// CSS 모듈을 가져옵니다.
import classes from './Button.module.css';

// Button 함수형 컴포넌트를 정의합니다.
const Button = (props) => {
  // Button 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // button 요소를 렌더링합니다. 이 요소는 여러 props를 받습니다.
    <button
      // type props가 제공되지 않았을 경우 기본값으로 'button'을 사용합니다.
      type={props.type || 'button'}
      // CSS 클래스를 설정합니다. 기본 클래스 외에 추가적인 클래스가 제공되면 함께 적용합니다.
      className={`${classes.button} ${props.className}`}
      // 클릭 핸들러를 설정합니다.
      onClick={props.onClick}
      // disabled 상태를 설정합니다.
      disabled={props.disabled}
    >
      {/* 이 컴포넌트의 자식 요소들을 렌더링합니다. */}
      {props.children}
    </button>
  );
};

// Button 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default Button;
