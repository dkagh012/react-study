// React와 useContext 훅을 가져옵니다.
import React, { useContext } from 'react';

// 필요한 컴포넌트들을 가져옵니다.
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

// 인증 상태를 관리하는 컨텍스트를 가져옵니다.
import AuthContext from './store/auth-context';

// App 함수형 컴포넌트를 정의합니다.
function App() {
  // useContext 훅을 사용하여 AuthContext의 현재 값을 가져옵니다.
  const ctx = useContext(AuthContext);

  // App 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    // React.Fragment를 사용하여 여러 요소를 그룹화합니다.
    <React.Fragment>
      {/* MainHeader 컴포넌트를 렌더링합니다. */}
      <MainHeader />
      <main>
        {/* 사용자가 로그인하지 않았을 경우 Login 컴포넌트를 렌더링합니다. */}
        {!ctx.isLoggedIn && <Login />}
        {/* 사용자가 로그인했을 경우 Home 컴포넌트를 렌더링합니다. */}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

// App 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default App;
