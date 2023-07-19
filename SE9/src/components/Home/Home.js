// React와 useContext 훅을 가져옵니다.
import React, { useContext } from 'react';

// 필요한 컴포넌트들을 가져옵니다.
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

// CSS 모듈을 가져옵니다.
import classes from './Home.module.css';

// 인증 상태를 관리하는 컨텍스트를 가져옵니다.
import AuthContext from '../../store/auth-context';

// Home 함수형 컴포넌트를 정의합니다.
const Home = (props) => {
  // useContext 훅을 사용하여 AuthContext의 현재 값을 가져옵니다.
  const authCtx = useContext(AuthContext);

  // Home 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // Card 컴포넌트를 렌더링합니다. 이 컴포넌트는 CSS 클래스를 props로 받습니다.
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* 로그아웃 버튼을 렌더링합니다. 이 버튼은 클릭 시 로그아웃 핸들러를 실행합니다. */}
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

// Home 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default Home;
