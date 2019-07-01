## simple-todos 2019.07.01

- meteor create [app name] 명령어는 기본적으로 blaze-html-template 로 페이지를 렌딩한다.

- React를 사용할 때에는 굳이 필요가 없으므로 다음 명령어를 실행한다. 
```
meteor remove blaze-html-templates
meteor add static-html
```
- static-html 패키지는 나중에 리액트 컴포넌트를 사용하기 위한 [순수 HTML] 파일이며 미티어 웹 서버가 서빙할 파일이다.

- blaze-html-template과 static-html은 미티어 패키지이다. (그러니 meteor ~~ 라고 명령어를 사용)

- 구버전의 미티어는 imports 디렉토리가 특별한 의미였지만, 버전이 업데이트 되면서 미티어의 엔트리 포인트는 패키지 제이슨의 미티어 메인 모듈에 의해 결정 되므로 크게 신경쓰지 않아도 된다.

### JSX를 사용하기 위한 룰
- React 스코프 안에 있어야한다. JSX는 React.createElement의 syntatic sugar이기 때문이다.
- 컴포넌트는 항상 대문자로 시작해야한다. => 소문자로 시작할 시에 html태그와 충돌이 일어나서 그런듯 하다.
- 등등 너무 길다. 