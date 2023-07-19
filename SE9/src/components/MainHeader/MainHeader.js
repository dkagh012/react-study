// React를 가져옵니다.
import React from 'react';

// 필요한 컴포넌트를 가져옵니다.
import Navigation from './Navigation';

// CSS 모듈을 가져옵니다.
import classes from './MainHeader.module.css';

// MainHeader 함수형 컴포넌트를 정의합니다.
const MainHeader = (props) => {
  // MainHeader 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // header 요소를 렌더링합니다. 이 요소는 CSS 클래스를 props로 받습니다.
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      {/* Navigation 컴포넌트를 렌더링합니다. */}
      <Navigation />
    </header>
  );
};

// MainHeader 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default MainHeader;
