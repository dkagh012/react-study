// React와 useContext 훅을 가져옵니다.
import React, { useContext } from 'react';

// 인증 상태를 관리하는 컨텍스트를 가져옵니다.
import AuthContext from '../../store/auth-context';

// CSS 모듈을 가져옵니다.
import classes from './Navigation.module.css';

// Navigation 함수형 컴포넌트를 정의합니다.
const Navigation = () => {
  // useContext 훅을 사용하여 AuthContext의 현재 값을 가져옵니다.
  const ctx = useContext(AuthContext);

  // Navigation 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // nav 요소를 렌더링합니다. 이 요소는 CSS 클래스를 props로 받습니다.
    <nav className={classes.nav}>
      <ul>
        {/* 사용자가 로그인했을 경우에만 "Users" 링크를 렌더링합니다. */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {/* 사용자가 로그인했을 경우에만 "Admin" 링크를 렌더링합니다. */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {/* 사용자가 로그인했을 경우에만 로그아웃 버튼을 렌더링합니다. 이 버튼은 클릭 시 로그아웃 핸들러를 실행합니다. */}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

// Navigation 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default Navigation;
