[![Build Status](https://travis-ci.org/seungha-kim/wpsn-testability.svg?branch=master)](https://travis-ci.org/seungha-kim/wpsn-testability)

# WPSN Testability

테스트 용이성(Testability)는 소프트웨어에 대한 테스트가 얼마나 쉬운지를 말하는 용어입니다.
테스트 용이성이 높을 수록 소프트웨어의 설계가 유연하고 컴포넌트 간 결합도가 낮기 때문에, 좋은 설계라고 할 수 있습니다.

이번 프로젝트에서는 Node.js 기반 소프트웨어를 테스트하는 방법과, Testability를 고려한 설계 방법, 지속적인 통합(Continuous Integration, CI)를 다룹니다.

- [assert 내장 모듈](https://nodejs.org/api/assert.html)
- [Mocha test framework](https://mochajs.org/)
- [SuperAgent](http://visionmedia.github.io/superagent/) & [SuperTest](https://github.com/visionmedia/supertest)
- [Testability]를 높이기 위한 [의존성 주입](https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EC%84%B1_%EC%A3%BC%EC%9E%85)과 [Sinon](http://sinonjs.org/)
- [지속적인 통합](https://ko.wikipedia.org/wiki/%EC%A7%80%EC%86%8D%EC%A0%81_%ED%86%B5%ED%95%A9) & [Travis CI](https://travis-ci.org/)

> assert : ok = true나 false로 간주되는 것들을 표현 / 에러를 내주는 역할

> assert.equal(3,3) = 맞으면 지나가고, 틀리면 에러를 표출 ==를 이용해서 비교.
> 타입체크까지 하고 싶다면 strictEqual()을 사용
> 객체의 depth내용까지 비교하려면 deepEqual 혹은 deepStrictEqual을 사용
> assert.throws(() => {throw new Error()}) : 함수를 인자로 받아서 에러가 잘나는지를 테스트할 때! 즉, 에러코드가 잘 에러를 검출하는지를 검사

```javascript
assert.throws(()=>{throw new MyError(), MyError})
//프로토타입까지 거슬러 올라가서 생각해주어야한다.
```
