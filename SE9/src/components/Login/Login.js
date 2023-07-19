// React와 필요한 훅들을 가져옵니다.
import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';

// 필요한 컴포넌트들을 가져옵니다.
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

// CSS 모듈을 가져옵니다.
import classes from './Login.module.css';

// 이메일 상태를 관리하는 리듀서 함수를 정의합니다.
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

// 비밀번호 상태를 관리하는 리듀서 함수를 정의합니다.
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

// Login 함수형 컴포넌트를 정의합니다.
const Login = (props) => {
  // 폼의 유효성을 관리하는 state를 생성합니다.
  const [formIsValid, setFormIsValid] = useState(false);

  // useReducer 훅을 사용하여 이메일과 비밀번호 상태를 관리합니다.
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // useContext 훅을 사용하여 AuthContext의 현재 값을 가져옵니다.
  const authCtx = useContext(AuthContext);

  // useRef 훅을 사용하여 이메일과 비밀번호 입력 필드의 참조를 가져옵니다.
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // 컴포넌트가 마운트될 때와 언마운트될 때 콘솔에 메시지를 출력합니다.
  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // 이메일과 비밀번호의 유효성을 추출합니다.
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // 이메일과 비밀번호의 유효성이 변경될 때마다 폼의 유효성을 검사합니다.
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  // 이메일 입력 핸들러입니다. 사용자가 이메일을 입력할 때마다 이메일 상태를 업데이트합니다.
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  // 비밀번호 입력 핸들러입니다. 사용자가 비밀번호를 입력할 때마다 비밀번호 상태를 업데이트합니다.
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  // 이메일 유효성 검사 핸들러입니다. 이메일 입력 필드에서 포커스가 벗어날 때 이메일의 유효성을 검사합니다.
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  // 비밀번호 유효성 검사 핸들러입니다. 비밀번호 입력 필드에서 포커스가 벗어날 때 비밀번호의 유효성을 검사합니다.
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  // 제출 핸들러입니다. 폼이 제출될 때 로그인을 시도합니다.
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  // Login 컴포넌트가 렌더링하는 JSX를 반환합니다.
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

// Login 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default Login;
