useState

const [state, setState] = useState(initialValue);

state: 상태변수의 현재 값입니다. 구성 요소의 렌더링 논리 또는 상태에 액세스하거나 표시해야 하는 모든 위치에서 사용할 수 있습니다.

setStateuseState: 상태를 업데이트하기 위해 에서 제공하는 기능입니다 . setState새 값으로 호출하면 React는 구성 요소를 다시 렌더링하고 그에 따라 상태 값을 업데이트합니다.

initialValue: 상태변수의 초기값입니다. 문자열, 숫자, 부울 또는 객체/배열과 같은 기본 값일 수 있습니다.
