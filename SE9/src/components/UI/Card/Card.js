// React를 가져옵니다.
import React from 'react';

// CSS 모듈을 가져옵니다.
import classes from './Card.module.css';

// Card 함수형 컴포넌트를 정의합니다.
const Card = (props) => {
  // Card 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // div 요소를 렌더링합니다. 이 요소는 CSS 클래스를 props로 받습니다.
    <div className={`${classes.card} ${props.className}`}>
      {/* 이 컴포넌트의 자식 요소들을 렌더링합니다. */}
      {props.children}
    </div>
  );
};

// Card 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default Card;
