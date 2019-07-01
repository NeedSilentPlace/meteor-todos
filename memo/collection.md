## simple-todos [Collection]

- Meteor의 콜렉션이 특별한 것은 클라이언트와 서버 모두 접근이 가능하다는 것!

- 따라서 클라이언트의 뷰 로직이 생각보다 간단해진다.

- simple-todos의 데이터베이스는 현재 클라이언트에 존재한다 ? ??? 

```
const Tasks = new Mongo.Collection('tasks');
```

- 새로운 콜렉션을 생성하는 방법이다.

- server의 main.js에서 tasks.js를 받으면 몽고디비 콜렉션이 만들어지고 데이터를 클라이언트에 넘길 준비가 된다.

3.3 Using data from a collection inside a React component [흥미롭다]

- Meteor collection을 리액트 컴포넌트 안에서 사용하기 위해선 [react-meteor-data]라는 Meteor package가 필요하다.

- react-meteor-data를 사용하기 위해서는 컴포넌트를 withTracker라는 H.O.C로 감싸야 한다.

- withTracker 첫번째 인자로 리턴한 객체는 다음 인자의 컴포넌트의 prop으로 내려간다.