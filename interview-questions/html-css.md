# HTML/CSS

## HTML

<details>
<summary><strong>Q. HTML이란 무엇인가?</strong></summary>

HTML은 HyperText Markup Language의 약자입니다. 웹 페이지의 구조와 내용을 정의하는 데 사용되는 기본적인 마크업 언어입니다.

</details>

<details>
<summary><strong>Q. HTML5의 주요 특징</strong>은 무엇인가?</summary>

가장 먼저, 시맨틱 태그가 도입되었습니다. 기존에는 `<div>` 태그로 구조를 잡는 경우가 많았는데, HTML5에서는 `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>` 과 같이 의미를 명확하게 나타내는 태그들이 추가되어서 웹 페이지의 구조를 더 명확하게 이해할 수 있게 되었고, 검색 엔진 최적화(SEO)에도 도움이 됩니다.

또한 웹 애플리케이션 개발을 위한 기능들이 추가되었습니다. 예를 들어, 사용자의 컴퓨터에 데이터를 저장할 수 있는 로컬 스토리지(Local Storage)나 세션 스토리지(Session Storage) 기능이 생겼고, 웹 소켓(WebSockets)을 통해 서버와 실시간으로 양방향 통신을 하는 것도 가능해졌습니다.

</details>

<details>
<summary><strong>Q. 시맨틱 마크업이란 무엇</strong>인가요?</summary>

주어진 용도에 맞는 태그를 사용하는 것입니다. 예를 들어 `<div>` 태그만을 남발하는 것이 아니라, 위치와 용도에 맞게 `<header>`, `<nav>`, `<section>` 태그 등을 사용하는 것이고, 이를 통해 코드의 가독성, 웹 접근성, SEO가 향상됩니다.

</details>

<details>
<summary><strong>Q. script 태그에서 </strong>사용하는 async와 defer의 차이에 대해 설명해주세요.</summary>

기본적으로 브라우저는 HTML을 위에서 아래로 읽어 내려가다가 `<script>` 태그를 만나면, HTML 파싱을 멈추고 스크립트 파일을 다운로드해서 실행합니다. 스크립트 실행이 끝나야 다시 HTML 파싱을 재개하는데요, 이러면 스크립트 파일이 크거나 네트워크가 느릴 경우 페이지 로딩이 멈춰 보이는 문제가 생길 수 있습니다. async와 defer는 이런 문제를 해결하기 위해 나왔습니다.

**async** 속성은 스크립트 파일을 다운로드하는 동안 HTML 파싱을 멈추지 않고 **비동기적**으로 진행합니다. 다운로드가 완료되면 즉시 HTML 파싱을 멈추고 스크립트를 실행합니다. 스크립트 실행 후 다시 HTML 파싱을 이어갑니다. 중요한 점은, 여러 개의 async 스크립트가 있을 경우 다운로드가 먼저 완료되는 순서대로 실행되기 때문에, 스크립트 실행 순서가 보장되지 않습니다. 따라서 다른 스크립트나 DOM 구조에 의존성이 없는 독립적인 스크립트(예: 광고 스크립트, 분석 스크립트)에 주로 사용합니다.

**defer** 속성도 async처럼 스크립트 파일을 다운로드하는 동안 HTML 파싱을 멈추지 않고 **비동기적**으로 진행합니다. 하지만 async와 달리 스크립트 다운로드가 완료되어도 즉시 실행하지 않고, HTML 파싱이 **모두 끝난 후**에 스크립트를 실행합니다. 여러 개의 defer 스크립트가 있다면 HTML에 명시된 순서대로 실행되는 것이 보장됩니다. 따라서 DOM 요소에 접근하거나 스크립트 간의 실행 순서가 중요한 경우에 주로 사용합니다.

</details>

<details>
<summary><strong>Q. HTML 렌더링 도중 </strong>JavaScript가 실행되면 렌더링이 멈추는 이유가 뭔가요?</summary>

브라우저의 **메인 스레드**가 **HTML 파싱/렌더링**과 **자바스크립트 실행**을 함께 처리하기 때문입니다.

브라우저는 기본적으로 하나의 메인 스레드에서 순차적으로 작업을 처리하는데요.

HTML 문서를 위에서부터 읽어 내려가며 파싱하고 화면에 그리는 렌더링 작업을 하다가 `<script>` 태그를 만나면, 그 스크립트가 현재까지 파싱된 DOM 구조를 변경할 수도 있기 때문에 일단 HTML 파싱을 멈춥니다.

그리고 자바스크립트 엔진에게 제어권을 넘겨서 스크립트를 다운로드하고 실행하게 됩니다. 이 스크립트 실행 역시 메인 스레드에서 이루어지기 때문에, 스크립트가 실행되는 동안에는 멈췄던 HTML 파싱뿐만 아니라 다른 렌더링 관련 작업(예: 레이아웃 계산, 페인팅)도 진행될 수 없습니다.

즉, 자바스크립트 실행과 HTML 렌더링이 **같은 작업 라인(메인 스레드)을 공유**하기 때문에, 자바스크립트가 실행되는 동안에는 렌더링 작업이 멈추게 되는 것입니다.

이런 이유로 용량이 큰 스크립트나 실행 시간이 긴 스크립트가 HTML 중간에 위치하면 페이지 로딩이 느려지는 현상이 발생할 수 있고, 이를 완화하기 위해 앞서 말씀드린 async나 defer 같은 속성을 사용하거나 스크립트를 `<body>` 태그 맨 끝에 두는 방법을 사용합니다.

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. 브라우저 동작 중 중단</strong>되는 과정</summary>

1. 브라우저는 HTML을 위에서 아래로 순차적으로 파싱하며 DOM을 구성
2. JavaScript 코드(특히 `<script>` 태그)를 만나면 실행을 위해 HTML 파싱을 중단
3. JavaScript가 실행되는 동안 브라우저는 다음 HTML 요소를 파싱하거나 렌더링하지 않음
4. JavaScript 실행이 끝나야 HTML 파싱이 다시 진행됨
</details>

<details>
<summary><strong>Q. DOCTYPE 이란 무</strong>엇인가요?</summary>

HTML 문서의 가장 첫 줄에 위치해서, 이 문서가 어떤 버전의 HTML 표준을 따라 작성되었는지를 웹 브라우저에게 알려주는 역할을 합니다.
브라우저는 이 DOCTYPE 선언을 보고 해당 문서가 HTML5인지, 아니면 이전 버전의 HTML이나 XHTML인지를 파악하고, 그에 맞는 방식으로 문서를 해석하고 렌더링합니다.

</details>

<details>
<summary><strong>Q. 메타 태그(Meta T</strong>ag)란?</summary>

메타 태그는 HTML 문서 자체에 대한 **추가적인 정보, 즉 메타데이터**를 제공하기 위해 사용하는 태그입니다. 이 정보는 웹 페이지 화면에 직접적으로 보이진 않지만, 브라우저나 검색 엔진 로봇에게 해당 문서에 대한 중요한 정보를 알려주는 역할을 합니다.

주로 `<head>` 태그 안에 위치하는데요, 예를 들어서 어떤 문자 인코딩 방식을 사용하는지(charset="UTF-8"), 검색 엔진을 위해 페이지의 설명(name="description")이나 키워드(name="keywords")는 무엇인지, 또는 모바일 기기에서 화면을 어떻게 보여줄지 뷰포트(name="viewport") 설정 같은 것들을 메타 태그를 통해 지정할 수 있습니다.

</details>

<details>
<summary><strong>Q. HTML에서의 attr</strong>ibutes와 properties의 차이점을 설명해 주세요.</summary>

HTML 태그 안에 직접 작성하는 것들, 예를 들어 `<input type="text" value="초기값" id="myInput">` 에서 type, value, id 같은 것들이 바로 **어트리뷰트**입니다. 이것들은 HTML 소스 코드에 존재하는 정적인 값들이고, 보통 문자열 형태로 되어 있습니다. 웹 페이지의 초기 상태를 정의하는 데 사용되죠.

반면에, **프로퍼티**는 자바스크립트를 통해 접근하는 DOM 노드의 속성입니다. 예를 들어, document.getElementById('myInput') 로 가져온 요소 객체에서 element.value 나 element.id 처럼 접근하는 값들이 프로퍼티입니다. 이 프로퍼티들은 해당 요소의 현재 상태를 나타내고, 문자열뿐만 아니라 불리언(boolean), 숫자, 객체 등 다양한 타입을 가질 수 있습니다.

요약하자면, 어트리뷰트는 HTML 마크업에 정의된 것이고, 프로퍼티는 자바스크립트로 다루는 DOM 객체의 실시간 속성입니다.

</details>

<details>
<summary><strong>Q. HTML과 XML의 차</strong>이</summary>

**HTML**은 웹 페이지에 **내용을 보여주고 그 구조를 만드는 데** 초점을 맞춘 언어입니다. 즉, 웹 브라우저가 어떻게 화면을 그릴지를 정의하는 데 사용됩니다. 그래서 미리 정해진 태그들 (`<h1>`, `<p>`, `<img>` 등)을 사용해서 콘텐츠의 의미와 표현 방식을 나타냅니다.

반면에 **XML**은 **데이터를 저장하고 전송하는 데** 주로 사용됩니다. 데이터의 구조를 설명하고 의미를 부여하는 데 목적이 있습니다. XML은 HTML처럼 미리 정해진 태그가 있는 것이 아니라, 사용자가 데이터의 구조에 맞게 직접 태그를 정의해서 사용할 수 있습니다. 그래서 '확장 가능한(eXtensible)' 마크업 언어라고 불립니다. 예를 들어 `<person><name>홍길동</name><age>30</age></person>` 처럼 데이터 구조를 자유롭게 표현할 수 있습니다.

</details>

## CSS

<details>
<summary><strong>Q. CSS 속성에는 어떤것</strong>들이 있나요?</summary>

CSS 속성은 웹 요소의 스타일을 지정하는 데 사용되며 정말 다양한 종류가 있습니다. 크게 레이아웃과 정렬, 텍스트 스타일, 색상 및 배경, 그 외에도 그림자와 투명도 및 트랜지션과 관련된 속성들이 있습니다.

</details>

<details>
<summary><strong>Q. CSS에서 Reflow</strong>와 Repaint는 무엇이며, 성능에 어떤 영향을 미치나요?</summary>

네, Reflow와 Repaint는 브라우저가 화면을 다시 그리는 과정과 관련된 개념입니다.

**Repaint**는 요소의 색상이나 배경처럼 화면에 보이는 스타일만 변경되었을 때, 레이아웃에는 영향을 주지 않고 해당 부분만 다시 그리는 것을 말합니다. 예를 들어 background-color나 color 속성이 바뀌면 Repaint가 일어납니다.

**Reflow**는 이보다 더 큰 작업인데요, 요소의 크기나 위치, 즉 레이아웃이 변경되었을 때 발생합니다. width, height, margin 같은 속성이 바뀌거나 DOM 요소가 추가/삭제될 때 일어나죠. 브라우저는 변경된 요소와 그 주변 요소들의 위치와 크기를 다시 계산해야 합니다. 그래서 Reflow는 거의 항상 Repaint를 동반합니다.

</details>

<details>
<summary><strong>Q. CSS 애니메이션과 J</strong>S 애니메이션의 차이</summary>

**CSS 애니메이션**은 transition이나 @keyframes 같은 CSS 속성을 이용해서 **선언적으로** 정의합니다. 즉, 시작 상태와 끝 상태, 또는 중간 지점들을 정의하면 브라우저가 알아서 중간 과정을 부드럽게 처리해줍니다. 레이아웃 변경을 일으키지 않는 속성의 애니메이션은 브라우저가 메인 스레드와 별도로 처리할 수 있어서 성능이 일반적으로 좋습니다.

**자바스크립트 애니메이션**은 스크립트를 사용해서 요소의 스타일 속성값을 **직접 프레임 단위로 변경**하는 방식입니다. 보통 requestAnimationFrame API를 사용하거나 애니메이션 라이브러리를 활용합니다. 애니메이션의 모든 단계를 완전히 제어할 수 있어서 복잡한 효과를 만드는 상황에 유용합니다. 다만 메인 스레드를 많이 사용하게 되어 버벅거림이 발생할 수 있습니다. requestAnimationFrame을 잘 사용하고 성능에 민감한 속성 위주로 조작하면 좋은 성능을 낼 수 있습니다.

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. visibility: </strong>hidden과 display: none의 차이는?</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. CSS 선택자 우선순위</strong>는 어떻게 되나요?</summary>

답변

1. ! important
2. 인라인 스타일
3. ID 선택자
4. Class 선택자, 속성 기반 선택자, 가상 클래스, 가상요소 선택자
5. 태그 선택자
6. 전체 선택자 \*

질문 제작: 최경일

</details>

<details>
<summary><strong>Q. Cascading에 대</strong>해 설명해주세요.</summary>

CSS에서 여러 스타일 규칙이 하나의 요소에 적용될 수 있을 때, 우선순위에 따라 어떤 스타일이 적용될지를 결정하는 것을 말합니다.

중요도, 선언 위치 등에 따라 결정됩니다.

질문 제작 : 강민주

</details>

<details>
<summary><strong>Q. Box model에 대</strong>해 설명해주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. margin과 padd</strong>ing의 차이를 알려주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. margin 병합에 대</strong>해 설명해주세요.</summary>

`margin` 병합 현상은 인접한 블록요소의 상하단 마진이 **병합**되는 현상을 의미하며, 그 크기는 두 마진 중 **큰 값**을 가진 마진의 값으로 병합됩니다.

이는 인접한 블록이 아닌 부모와 자식 요소간에도 발생합니다.

부모에 `margin`을 0으로 설정하고 자식 요소의 `margin`을 10px로 설정하면, 자식요소의 상하단 `margin`이 부모의 `margin`으로 병합되어 마치 `margin`이 사라진 것 같은 현상이 발생합니다.

이런 현상을 막기위한 대표적인 해결책으로 부모 요소에 `overflow: hidden`을 주는 방법이 있습니다.

질문 제작: 박병주

출처: [면접 준비 노트 (HTML, CSS)](https://velog.io/@dnr6054/fe-interview-html-css)

</details>

<details>
<summary><strong>Q. CSS의 box-siz</strong>ing에 대해 설명해주세요</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. z-index는 무엇이</strong>고, 어떻게 동작하나요?</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. float 동작에 대해</strong> 설명해주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. top, margin-</strong>top, translate-y 차이에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. SCSS에 대해 설명해</strong>주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. position 속성에</strong>는 뭐가 있는지 설명해주세요</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. display 속성에는</strong> 뭐가 있는지 설명해주세요</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. 가상 클래스에 대해 설</strong>명해주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. 컨테이닝 블록에 대해 </strong>설명해주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. CSS in JS의 장</strong>단점에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

</details>

<details>
<summary><strong>Q. CSS에서 inline</strong>, internal, external 스타일의 차이</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. CSS의 가상 클래스(</strong>:hover, :focus 등)와 가상 요소(::before, ::after)의 차이</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. CSS에서 트랜지션(t</strong>ransition)과 애니메이션(animation)의 차이</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. CSS 전처리기와 후처</strong>리기의 차이점은 무엇인가요?</summary>

답변

질문 제작: OOO

</details>

### 반응형

<details>
<summary><strong>Q. Flexbox와 Gri</strong>d의 차이점에 대해 설명해주세요.</summary>

둘 다 페이지에서 레이아웃을 구성할 때 사용되는 CSS 속성으로, 화면 요소를 배치하고 정렬하는데 사용됩니다. 차이점으로는 크게 3가지가 있습니다.

첫번째로 Flexbox는 1차원 레이아웃 방식으로, 행 또는 열 중 한 방향을 기준으로 요소를 배치하는 데 적합합니다. 반면, Grid는 2차원 레이아웃 방식으로, 행과 열을 동시에 활용하여 요소를 배치할 수 있습니다.

두번째는 사용 목적의 차이입니다. Flexbox는 콘텐츠 중심 레이아웃에 적합합니다. 콘텐츠가 유동적으로 변화할 때 유연하게 대응할 수 있어 버튼 그룹, 내비게이션 바처럼 한 줄 구성에 효과적입니다. 반면 Grid는 레이아웃 중심이며, 전체 페이지 구조나 카드 레이아웃, 갤러리처럼 정해진 영역을 나누어 배치할 때 유리합니다.

세번째는 기본 동작의 차이입니다. Flexbox는 `justify-content`, `align-items` 등을 통해 컨테이너의 방향과 크기에 따라 요소들이 자동으로 정렬됩니다. Grid는 `grid-template-rows`, `grid-template-columns` 등을 사용해 행과 열을 사전에 정의하고, 그 격자(grid) 안에 요소를 배치하는 방식입니다.

</details>

<details>
<summary><strong>Q. CSS flex-wra</strong>p 속성에 대해서 설명해주세요.</summary>

flex-wrap은 Flex 컨테이너 안의 Flex 아이템들이 한 줄에 공간이 부족할 때 줄 바꿈을 할지 여부를 결정하는 CSS 속성입니다.

- `nowrap`: 줄 바꿈을 하지 않습니다. 아이템들이 컨테이너 너비를 넘어서더라도 한 줄에 계속 배치됩니다.
- `wrap`: 공간이 부족하면 아이템들이 다음 줄로 넘어갑니다 (아래로).
- `wrap-reverse`: wrap과 동일하게 줄 바꿈 하지만, 줄의 순서가 반대로 쌓입니다 (위로).
</details>

<details>
<summary><strong>Q. 반응형 레이아웃에서 브</strong>레이크 포인트는 어떻게 설정하나요?</summary>

반응형 레이아웃의 브레이크포인트는 콘텐츠가 깨지거나 어색해 보이는 지점을 기준으로 잡는 것이 가장 좋습니다. 일반적으로, Mobile First 방식으로 작은 화면에서 시작해 점차 넓혀가며 브레이크포인트를 추가하는 것이 효율적입니다.

과거에는 특정 기기의 해상도를 기준으로 잡는 경우가 많았습니다. 하지만, 기기 종류가 매우 다양해져서 모든 기기에 완벽하게 대응하기 어려워졌기 때문에 콘텐츠의 가독성을 중심으로 브레이크 포인트를 잡는 경우가 더 많아졌습니다.

</details>

<details>
<summary><strong>Q. px, em, rem의</strong> 차이를 설명해주세요.</summary>

- px: 절대 단위로써 픽셀을 기준으로 크기가 고정됩니다.
- em: 상대 단위로써 해당 요소의 font-size를 기준으로 크기를 결정합니다.
  (해당 요소 내 font-size가 지저이 안되어있다면 부모 font-size를 상속)
- rem: 상대 단위로써 최상위 요소(HTML 요소)의 font-size를 기준으로 크기를 결정합니다. em과 달리 중첩에 영향을 받지 않기 때문에 일관되고 예측 가능한 크기로 조절할 수 있습니다.
</details>

<details>
<summary><strong>Q. vw, vh에 대해서 </strong>설명해주세요.</summary>

vw는 viewport의 너비값을 100vw라고 정의합니다.
즉, viewport 너비의 0.01배가 1vw입니다.

vh는 viewport 높이값을 100vh로 정의합니다.
즉, viewport 높이의 0.01배가 1vh입니다.

</details>

<details>
<summary><strong>Q. 페이지 크기가 변해도 </strong>항상 같은 비율을 유지하는 요소를 만들려면 CSS를 어떻게 설정해야될까요?</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

### 접근성

<details>
<summary><strong>Q. 웹 접근성을 위해 고려</strong>해야 할 HTML/CSS 측면은 무엇이 있나요?</summary>

답변

질문 제작: OOO

</details>

### 성능 최적화

<details>
<summary><strong>Q. CSS에서 will-c</strong>hange 속성의 역할은?</summary>

답변

질문제작 : 홍창현

출처 : https://velog.io/@changbob/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EB%8C%80%EB%B9%84-%EC%9B%B9

</details>

<details>
<summary><strong>Q. 웹 폰트 적용 시 성능</strong>을 최적화하기 위한 방법에는 무엇이 있나요?</summary>

답변

질문 제작: OOO

</details>
