// React와 필요한 훅들을 가져옵니다.
import React, { useRef, useImperativeHandle } from 'react';

// CSS 모듈을 가져옵니다.
import classes from './Input.module.css';

// Input 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 forwardRef를 사용하여 ref를 받을 수 있습니다.
const Input = React.forwardRef((props, ref) => {
  // useRef 훅을 사용하여 입력 필드의 참조를 가져옵니다.
  const inputRef = useRef();

  // 입력 필드를 활성화하는 함수를 정의합니다.
  const activate = () => {
    inputRef.current.focus();
  };

  // useImperativeHandle 훅을 사용하여 부모 컴포넌트가 이 컴포넌트의 인스턴스를 사용할 수 있도록 합니다.
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  // Input 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // div 요소를 렌더링합니다. 이 요소는 CSS 클래스를 props로 받습니다.
    <div
      className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
        }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

// Input 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default Input;
