// React와 필요한 훅들을 가져옵니다.
import React, { useState, useEffect } from 'react';

// AuthContext를 생성합니다. 초기값은 로그인 상태가 false이며, 로그인/로그아웃 핸들러는 빈 함수입니다.
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
});

// AuthContextProvider 컴포넌트를 생성합니다. 이 컴포넌트는 AuthContext의 값을 제공합니다.
export const AuthContextProvider = (props) => {
  // 로그인 상태를 관리하는 state를 생성합니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 로그인 정보를 가져와 로그인 상태를 설정합니다.
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  // 로그아웃 핸들러입니다. 로컬 스토리지에서 로그인 정보를 제거하고 로그인 상태를 false로 설정합니다
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // 로그인 핸들러입니다. 로컬 스토리지에 로그인 정보를 저장하고 로그인 상태를 true로 설정합니다.
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  // AuthContext.Provider 컴포넌트를 반환합니다. 이 컴포넌트는 AuthContext의 값을 제공합니다.
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {/* 이 컴포넌트의 자식 컴포넌트들을 렌더링합니다. */}
      {props.children}
    </AuthContext.Provider>
  );
};

// AuthContext를 내보냅니다. 이를 통해 다른 파일에서 이 컨텍스트를 사용할 수 있습니다.
export default AuthContext;
