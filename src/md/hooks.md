# Hooks

## useState

- 항상 최상위에 사용
- 다른 hooks 안에 선언하면 안됨

## useEffect

- useEffect(() => {}, [])
- []가 바뀔때 실행

## useMemo

- useMemo(() => {}, [])
- []가 바뀌기 전까지 값을 기억

## useCallback

- useCallback(() => {}, [])
- []가 바뀌기 전까지 함수를 기억
- 자식 컴포넌트에 함수를 props로 넘길때는 useCallback을 꼭 해줘야 한다.

## useRef

## componentDidMount()

- render가 처음 실행된 후 한번만 실행됨
- 리랜더링 시 실행x
- 비동기 요청을 많이 함

## componentDidUpdate()

- 리랜더링 후 실행

## componentWillUnMount()

- 컴포넌트가 제거되기 직전 실행됨
- componentDidMount에서 실행된 동작을 제거
- 부모가 자식컴포넌트(나)를 없앴을 때
- 비동기 요청 정리

## 클래스 실행 순서

constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔때 -> render -> componentDidUpdate)
부모가 나를 없앴을 때 -> componentWillUnMount -> 소멸

비동기 바깥의 변수를 참조하면 클로저 문제 발생
