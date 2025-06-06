# HTML/CSS

## HTML

<details>
<summary><strong>Q. HTML이란 무엇인가요?</strong></summary>

- HTML은 HyperText Markup Language의 약자로, 웹 페이지의 구조를 정의하는 마크업 언어입니다. 하이퍼텍스트는 문서 간 연결을 의미하며, HTML은 다양한 태그를 통해 제목, 문단 등 정보를 구조화합니다. 이는 프로그래밍 언어와 달리 동작이 아닌 문서의 구조와 의미를 표현하는 데 중점을 둡니다.
  <br/>
  (HTML은 프로그래밍 언어가 아니라 마크업 언어입니다.)

</details>

<details>
<summary><strong>Q. HTML5의 주요 특징은 무엇인가요?</strong></summary>

- 가장 먼저, 시맨틱 태그가 도입되었습니다. 기존에는 `<div>` 태그로 구조를 잡는 경우가 많았는데, HTML5에서는 `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>` 과 같이 의미를 명확하게 나타내는 태그들이 추가되어서 웹 페이지의 구조를 더 명확하게 이해할 수 있게 되었고, 검색 엔진 최적화(SEO)에도 도움이 됩니다.
  <br/>
  또한 웹 애플리케이션 개발을 위한 기능들이 추가되었습니다. 예를 들어, 사용자의 컴퓨터에 데이터를 저장할 수 있는 로컬 스토리지나 세션 스토리지 기능이 생겼고, 웹 소켓을 통해 서버와 실시간으로 양방향 통신을 하는 것도 가능해졌습니다.

</details>

<details>
<summary><strong>⭐ Q. script 태그에서 사용하는 async와 defer의 차이에 대해 설명해주세요.</strong></summary>

- 기본적으로 브라우저는 HTML을 위에서 아래로 읽어 내려가다가 `<script>` 태그를 만나면, HTML 파싱을 멈추고 스크립트 파일을 다운로드해서 실행합니다. 스크립트 실행이 끝나야 다시 HTML 파싱을 재개하는데요, 이러면 스크립트 파일이 크거나 네트워크가 느릴 경우 페이지 로딩이 멈춰 보이는 문제가 생길 수 있습니다. async와 defer는 이런 문제를 해결하기 위해 나왔습니다.
  <br/>
  **async** 속성은 스크립트 파일을 다운로드하는 동안 HTML 파싱을 멈추지 않고 **비동기적**으로 진행합니다. 다운로드가 완료되면 즉시 HTML 파싱을 멈추고 스크립트를 실행합니다. 스크립트 실행 후 다시 HTML 파싱을 이어갑니다. 중요한 점은, 여러 개의 async 스크립트가 있을 경우 다운로드가 먼저 완료되는 순서대로 실행되기 때문에, 스크립트 실행 순서가 보장되지 않습니다. 따라서 다른 스크립트나 DOM 구조에 의존성이 없는 독립적인 스크립트(예: 광고 스크립트, 분석 스크립트)에 주로 사용합니다.
  <br/>
  **defer** 속성도 async처럼 스크립트 파일을 다운로드하는 동안 HTML 파싱을 멈추지 않고 **비동기적**으로 진행합니다. 하지만 async와 달리 스크립트 다운로드가 완료되어도 즉시 실행하지 않고, HTML 파싱이 **모두 끝난 후**에 스크립트를 실행합니다. 여러 개의 defer 스크립트가 있다면 HTML에 명시된 순서대로 실행되는 것이 보장됩니다. 따라서 DOM 요소에 접근하거나 스크립트 간의 실행 순서가 중요한 경우에 주로 사용합니다.

</details>

<details>
<summary><strong>⭐ Q. HTML 렌더링 도중 JavaScript가 실행되면 렌더링이 멈추는 이유가 뭔가요?</strong></summary>

- 브라우저의 **메인 스레드**가 **HTML 파싱/렌더링**과 **자바스크립트 실행**을 함께 처리하기 때문입니다.
  <br/>
  브라우저는 기본적으로 하나의 메인 스레드에서 순차적으로 작업을 처리하는데요.
  <br/>
  HTML 문서를 위에서부터 읽어 내려가며 파싱하고 화면에 그리는 렌더링 작업을 하다가 script 태그를 만나면, 그 스크립트가 현재까지 파싱된 DOM 구조를 변경할 수도 있기 때문에 일단 HTML 파싱을 멈춥니다.
  <br/>
  그리고 자바스크립트 엔진에게 제어권을 넘겨서 스크립트를 다운로드하고 실행하게 됩니다. 이 스크립트 실행 역시 메인 스레드에서 이루어지기 때문에, 스크립트가 실행되는 동안에는 멈췄던 HTML 파싱뿐만 아니라 다른 렌더링 관련 작업(예: 레이아웃 계산, 페인팅)도 진행될 수 없습니다.
  <br/>
  즉, 자바스크립트 실행과 HTML 렌더링이 **같은 작업 라인(메인 스레드)을 공유**하기 때문에, 자바스크립트가 실행되는 동안에는 렌더링 작업이 멈추게 되는 것입니다.
  <br/>
  이런 이유로 용량이 큰 스크립트나 실행 시간이 긴 스크립트가 HTML 중간에 위치하면 페이지 로딩이 느려지는 현상이 발생할 수 있고, 이를 완화하기 위해 앞서 말씀드린 async나 defer 같은 속성을 사용하거나 스크립트를 `<body>` 태그 맨 끝에 두는 방법을 사용합니다.

</details>

<details>
<summary><strong>Q. 브라우저 동작 중 중단되는 과정이 어떻게 되나요?</strong></summary>

1. 브라우저는 HTML을 위에서 아래로 순차적으로 파싱하며 DOM을 구성
2. JavaScript 코드(특히 `<script>` 태그)를 만나면 실행을 위해 HTML 파싱을 중단
3. JavaScript가 실행되는 동안 브라우저는 다음 HTML 요소를 파싱하거나 렌더링하지 않음
4. JavaScript 실행이 끝나야 HTML 파싱이 다시 진행됨
</details>

<details>
<summary><strong>Q. DOCTYPE 이란 무엇인가요?</strong></summary>

- HTML 문서의 가장 첫 줄에 위치해서, 이 문서가 어떤 버전의 HTML 표준을 따라 작성되었는지를 웹 브라우저에게 알려주는 역할을 합니다.
  브라우저는 이 DOCTYPE 선언을 보고 해당 문서가 HTML5인지, 아니면 이전 버전의 HTML이나 XHTML인지를 파악하고, 그에 맞는 방식으로 문서를 해석하고 렌더링합니다.

</details>

<details>
<summary><strong>Q. 메타 태그(Meta Tag)란?</strong></summary>

- 메타 태그는 HTML 문서 자체에 대한 **추가적인 정보, 즉 메타데이터**를 제공하기 위해 사용하는 태그입니다. 이 정보는 웹 페이지 화면에 직접적으로 보이진 않지만, 브라우저나 검색 엔진 로봇에게 해당 문서에 대한 중요한 정보를 알려주는 역할을 합니다.
  <br/>
  주로 `<head>` 태그 안에 위치하는데요, 예를 들어서 어떤 문자 인코딩 방식을 사용하는지(charset="UTF-8"), 검색 엔진을 위해 페이지의 설명(name="description")이나 키워드(name="keywords")는 무엇인지, 또는 모바일 기기에서 화면을 어떻게 보여줄지 뷰포트(name="viewport") 설정 같은 것들을 메타 태그를 통해 지정할 수 있습니다.

</details>

<details>
<summary><strong>Q. HTML에서의 attributes와 properties의 차이점을 설명해 주세요.</strong></summary>

- HTML 태그 안에 직접 작성하는 것들, 예를 들어 `<input type="text" value="초기값" id="myInput">` 에서 type, value, id 같은 것들이 바로 **어트리뷰트**입니다. 이것들은 HTML 소스 코드에 존재하는 정적인 값들이고, 보통 문자열 형태로 되어 있습니다. 웹 페이지의 초기 상태를 정의하는 데 사용되죠.
  <br/>
  반면에, **프로퍼티**는 자바스크립트를 통해 접근하는 DOM 노드의 속성입니다. 예를 들어, document.getElementById('myInput') 로 가져온 요소 객체에서 element.value 나 element.id 처럼 접근하는 값들이 프로퍼티입니다. 이 프로퍼티들은 해당 요소의 현재 상태를 나타내고, 문자열뿐만 아니라 불리언(boolean), 숫자, 객체 등 다양한 타입을 가질 수 있습니다.
  <br/>
  요약하자면, 어트리뷰트는 HTML 마크업에 정의된 것이고, 프로퍼티는 자바스크립트로 다루는 DOM 객체의 실시간 속성입니다.

</details>

<details>
<summary><strong>Q. HTML과 XML의 차이</strong></summary>

- **HTML**은 웹 페이지에 **내용을 보여주고 그 구조를 만드는 데** 초점을 맞춘 언어입니다. 즉, 웹 브라우저가 어떻게 화면을 그릴지를 정의하는 데 사용됩니다. 그래서 미리 정해진 태그들 (`<h1>`, `<p>`, `<img>` 등)을 사용해서 콘텐츠의 의미와 표현 방식을 나타냅니다.
  <br/>
  반면에 **XML**은 **데이터를 저장하고 전송하는 데** 주로 사용됩니다. 데이터의 구조를 설명하고 의미를 부여하는 데 목적이 있습니다. XML은 HTML처럼 미리 정해진 태그가 있는 것이 아니라, 사용자가 데이터의 구조에 맞게 직접 태그를 정의해서 사용할 수 있습니다. 그래서 '확장 가능한(eXtensible)' 마크업 언어라고 불립니다. 예를 들어 `<person><name>홍길동</name><age>30</age></person>` 처럼 데이터 구조를 자유롭게 표현할 수 있습니다.

</details>

## CSS

<details>
<summary><strong>Q. CSS에서 inline, internal, external 스타일의 차이</strong></summary>

- inline은 태그에 직접 style 속성으로 작성하고, internal은 `<style>` 태그를 HTML 내부에 작성하며, external은 별도 CSS 파일을 `<link>`로 불러오는 방식입니다. 유지보수성과 재사용성 측면에서는 external이 가장 효율적입니다.

</details>

<details>
<summary><strong>Q. CSS에서 Reflow와 Repaint는 무엇이며, 성능에 어떤 영향을 미치나요?</strong></summary>

- Repaint는 요소의 색상이나 배경처럼 화면에 보이는 스타일만 변경되었을 때, 레이아웃에는 영향을 주지 않고 해당 부분만 다시 그리는 것을 말합니다. 예를 들어 background-color나 color 속성이 바뀌면 Repaint가 일어납니다.
  <br/>
  Reflow는 이보다 더 큰 작업인데요, 요소의 크기나 위치, 즉 레이아웃이 변경되었을 때 발생합니다. width, height, margin 같은 속성이 바뀌거나 DOM 요소가 추가/삭제될 때 일어나죠. 브라우저는 변경된 요소와 그 주변 요소들의 위치와 크기를 다시 계산해야 합니다. 그래서 Reflow는 거의 항상 Repaint를 동반합니다.

</details>

<details>
<summary><strong>Q. CSS 애니메이션과 JS 애니메이션의 차이</strong></summary>

- CSS 애니메이션은 transition이나 @keyframes 같은 CSS 속성을 이용해서 선언적으로 정의합니다. 즉, 시작 상태와 끝 상태, 또는 중간 지점들을 정의하면 브라우저가 알아서 중간 과정을 부드럽게 처리해줍니다. 레이아웃 변경을 일으키지 않는 속성의 애니메이션은 브라우저가 메인 스레드와 별도로 처리할 수 있어서 성능이 일반적으로 좋습니다.
  <br/>
  자바스크립트 애니메이션은 스크립트를 사용해서 요소의 스타일 속성값을 **직접 프레임 단위로 변경**하는 방식입니다. 보통 requestAnimationFrame API를 사용하거나 애니메이션 라이브러리를 활용합니다. 애니메이션의 모든 단계를 완전히 제어할 수 있어서 복잡한 효과를 만드는 상황에 유용합니다. 다만 메인 스레드를 많이 사용하게 되어 버벅거림이 발생할 수 있습니다. requestAnimationFrame을 잘 사용하고 성능에 민감한 속성 위주로 조작하면 좋은 성능을 낼 수 있습니다.

</details>

<details>
<summary><strong>Q. visibility: hidden과 display: none의 차이는?</strong></summary>

- visibility: hidden은 요소를 화면에 보이지 않게 하지만 공간은 그대로 유지되고, display: none은 요소 자체를 문서 흐름에서 제거해 공간도 차지하지 않게 됩니다. 즉, visibility: hidden은 자리만 숨기고 레이아웃에 영향이 있지만, display: none은 요소가 아예 없는 것처럼 동작합니다.

</details>

<details>
<summary><strong>Q. CSS 선택자 우선순위는 어떻게 되나요?</strong></summary>

1. ! important
2. 인라인 스타일
3. ID 선택자
4. Class 선택자, 속성 기반 선택자, 가상 클래스, 가상요소 선택자
5. 태그 선택자
6. 전체 선택자

</details>

<details>
<summary><strong>⭐ Q. Cascading에 대해 설명해주세요.</strong></summary>

- Cascading은 CSS에서 여러 스타일 규칙이 하나의 요소에 겹쳐서 적용될 때, 어떤 스타일이 우선적으로 적용될지를 결정하는 우선순위 체계를 말합니다. 이때 적용 여부는 크게 명시도, 소스 순서, 중요도 순으로 판단되며, 같은 요소에 여러 스타일이 충돌할 경우 가장 높은 우선순위를 가진 선언이 최종적으로 적용됩니다. 이 특성 덕분에 CSS는 유연하게 스타일을 덮어쓰거나 오버라이딩할 수 있습니다.

중요도, 선언 위치 등에 따라 결정됩니다.

</details>

<details>
<summary><strong>⭐ Q. 박스 모델, margin, padding, box-sizing의 차이와 관계를 설명해주세요.</strong></summary>

- HTML에서 모든 요소는 박스 형태로 구성되며, 이를 박스 모델이라고 부릅니다. 박스 모델은 바깥쪽부터 margin(바깥 여백), border(테두리), padding(안쪽 여백), content(실제 내용) 순서로 이루어져 있습니다.
- margin은 요소와 요소 사이의 바깥 여백을 의미하고, padding은 요소의 테두리와 내용 사이의 안쪽 여백을 의미합니다.
- box-sizing 속성은 요소의 width와 height를 계산할 때 어떤 부분까지 포함할지 결정합니다. 기본값인 content-box는 width와 height가 content 영역만을 의미하고, border-box는 padding과 border까지 포함해서 전체 크기를 계산합니다. 실무에서는 레이아웃이 꼬이지 않도록 border-box를 많이 사용합니다.

</details>

<details>
<summary><strong>Q. margin 병합에 대해 설명해주세요.</strong></summary>

- `margin` 병합 현상은 인접한 블록요소의 상하단 마진이 **병합**되는 현상을 의미하며, 그 크기는 두 마진 중 **큰 값**을 가진 마진의 값으로 병합됩니다.
  <br/>
  이는 인접한 블록이 아닌 부모와 자식 요소간에도 발생합니다.
  <br/>
  부모에 `margin`을 0으로 설정하고 자식 요소의 `margin`을 10px로 설정하면, 자식요소의 상하단 `margin`이 부모의 `margin`으로 병합되어 마치 `margin`이 사라진 것 같은 현상이 발생합니다.
  <br/>
  이런 현상을 막기위한 대표적인 해결책으로 부모 요소에 `overflow: hidden`을 주는 방법이 있습니다.

</details>

<details>
<summary><strong>Q. z-index는 무엇이고, 어떻게 동작하나요?</strong></summary>

- z-index는 요소의 쌓임 순서를 지정하는 속성으로, 숫자가 클수록 앞쪽에 표시됩니다. 단, z-index가 적용되려면 해당 요소에 position 속성(relative, absolute, fixed, sticky) 중 하나가 설정되어 있어야 합니다. 같은 stacking context 안에서는 z-index 값에 따라 우선순위가 정해지지만, 서로 다른 컨텍스트끼리는 부모-자식 관계에 따라 우선순위가 달라질 수 있어 의도한 레이어링을 위해서는 position, z-index, stacking context를 함께 고려해야 합니다.

</details>

<details>
<summary><strong>Q. float 동작에 대해 설명해주세요.</strong></summary>

- float을 설정하면 요소를 기존 문서의 흐름에서 빠져나와 포함된 박스나 다른 float 요소의 edge에 닿을 때까지 좌나 우로 이동하게 됩니다.

</details>

<details>
<summary><strong>Q. top, margin-top, translate-y 차이에 대해 설명해주세요.</strong></summary>

- top은 요소의 위치를 위쪽 기준으로 얼마나 떨어뜨릴지를 지정하는 속성으로, position 속성과 함께 사용됩니다. position: relative일 경우 원래 위치 기준으로 이동하고, absolute나 fixed는 기준이 되는 부모나 뷰포트를 기준으로 위치가 결정됩니다. 반면 margin-top은 요소의 바깥 여백을 지정하며, 문서 흐름에 영향을 주어 주변 요소와의 간격을 조절할 때 사용됩니다. translateY는 transform 속성의 하위 개념으로, 현재 위치를 기준으로 요소를 y축 방향으로 시각적으로 이동시키며, 레이아웃에 영향을 주지 않기 때문에 애니메이션이나 동적 인터페이스에서 자주 사용됩니다. 각각의 속성은 사용 목적과 레이아웃에 미치는 영향이 다르므로 상황에 맞게 선택하는 것이 중요합니다.

</details>

<details>
<summary><strong>Q. SCSS에 대해 설명해주세요.</strong></summary>

- CSS 구문과 완전히 호환되며 Sass의 모든 기능을 지원하는 CSS의 상위집합입니다. SCSS는 웹에서 직접 동작할 수 없고, 전처리기로 변환 후에 CSS를 적용해야 합니다.

</details>

<details>
<summary><strong>Q. position 속성에는 뭐가 있는지 설명해주세요</strong></summary>

- position에는 static, relative, absolute, fixed, sticky가 있으며, static은 기본값이고 위치 이동 불가합니다. relative는 원래 위치 기준으로 이동하고, absolute는 가장 가까운 위치 지정 조상을 기준으로 절대 위치됩니다. fixed는 화면 기준으로 고정되며, sticky는 스크롤 위치에 따라 static과 fixed처럼 동작합니다.

</details>

<details>
<summary><strong>Q. display 속성에는 뭐가 있는지 설명해주세요</strong></summary>

- display는 요소의 레이아웃 방식을 정의하는 속성으로, 대표적으로 block, inline, inline-block, flex, grid, none 등이 있습니다. block은 줄바꿈되는 블록 요소, inline은 줄 안에 배치되는 요소, inline-block은 줄 안에 있으면서 크기 지정이 가능한 형태입니다. flex와 grid는 각각 유연한 1차원, 2차원 레이아웃을 구성할 때 사용하며, none은 요소를 화면에서 완전히 제거합니다.

</details>

<details>
<summary><strong>Q. 가상 클래스(:hover 등)와 가상 요소(::before 등)의 차이와 활용법을 설명해주세요.</strong></summary>

- 가상 클래스는 요소의 상태나 위치에 따라(:hover, :focus, :nth-child 등) 스타일을 적용하고, 가상 요소(::before, ::after)는 실제로 존재하지 않는 콘텐츠를 생성해 스타일을 적용합니다. 둘 다 동적 스타일링에 유용합니다.

</details>

<details>
<summary><strong>Q. CSS 애니메이션, 트랜지션, JS 애니메이션의 차이와 각각의 장단점은?</strong></summary>

- CSS 애니메이션은 transition, @keyframes 등으로 선언적으로 정의합니다. 즉, 시작 상태와 끝 상태, 또는 중간 지점들을 정의하면 브라우저가 알아서 중간 과정을 부드럽게 처리해줍니다.
- 트랜지션은 상태 변화에 따라 한 번만 동작, 애니메이션은 여러 단계 반복/세밀 제어가 가능합니다.
- JS 애니메이션은 requestAnimationFrame 등으로 직접 제어하며 복잡한 효과에 유리하나, 메인 스레드 사용이 많아 성능 저하가 있을 수 있습니다.

</details>

<details>
<summary><strong>⭐ Q. display, position, top/margin-top/translateY의 차이와 레이아웃에 미치는 영향은?</strong></summary>

- display는 block, inline, flex, grid 등 요소의 레이아웃 방식을 결정합니다.
- position은 static, relative, absolute, fixed, sticky 등이 있고, 위치 지정 방법이 다릅니다.
- top은 position과 함께 위치를 이동, margin-top은 바깥 여백, translateY는 transform으로 시각적 이동(레이아웃 영향 없음)입니다. 각각의 목적과 레이아웃 영향이 다르므로 상황에 맞게 사용해야 합니다.

</details>

<details>
<summary><strong>Q. CSS 전처리기(SCSS 등)와 후처리기의 차이, 그리고 SCSS의 특징은?</strong></summary>

- 전처리기(SASS, LESS 등)는 CSS 작성 전 변수, 중첩, 함수 등을 활용해 코드 구조를 개선하며, 후처리기(PostCSS 등)는 CSS가 완성된 후 자동 접두사 추가나 최적화 같은 후처리를 적용합니다.

</details>

<details>
<summary><strong>Q. Styled-Components와 Tailwind CSS의 차이를 말해주세요.</strong></summary>

- Styled Components는 CSS-in-JS 방식으로, 자바스크립트 파일 내에서 직접 CSS를 작성할 수 있습니다. 런타임 시 스타일이 동적으로 생성되어 주입되기 때문에 동적인 스타일 적용이 자유롭다는 장점이 있지만, 이러한 방식은 런타임 성능 저하나 초기 렌더링 속도에 영향을 줄 수 있다는 단점도 있습니다.

- Tailwind CSS는 미리 정의된 클래스 조합으로 빠르게 스타일링 가능하고, 빌드 타임에 필요한 CSS만 생성해 파일 크기 최소화, 로딩 속도가 우수하다는 장점이 있습니다. 하지만 동적 스타일링에 제한적입니다.

</details>

### 반응형

<details>
<summary><strong>⭐ Q. Flexbox와 Grid의 차이점에 대해 설명해주세요.</strong></summary>

- 둘 다 페이지에서 레이아웃을 구성할 때 사용되는 CSS 속성으로, 화면 요소를 배치하고 정렬하는데 사용됩니다. 차이점으로는 크게 3가지가 있습니다.
  <br/>
  첫번째로 Flexbox는 1차원 레이아웃 방식으로, 행 또는 열 중 한 방향을 기준으로 요소를 배치하는 데 적합합니다. 반면, Grid는 2차원 레이아웃 방식으로, 행과 열을 동시에 활용하여 요소를 배치할 수 있습니다.
  <br/>
  두번째는 사용 목적의 차이입니다. Flexbox는 콘텐츠 중심 레이아웃에 적합합니다. 콘텐츠가 유동적으로 변화할 때 유연하게 대응할 수 있어 버튼 그룹, 내비게이션 바처럼 한 줄 구성에 효과적입니다. 반면 Grid는 레이아웃 중심이며, 전체 페이지 구조나 카드 레이아웃, 갤러리처럼 정해진 영역을 나누어 배치할 때 유리합니다.
  <br/>
  세번째는 기본 동작의 차이입니다. Flexbox는 `justify-content`, `align-items` 등을 통해 컨테이너의 방향과 크기에 따라 요소들이 자동으로 정렬됩니다. Grid는 `grid-template-rows`, `grid-template-columns` 등을 사용해 행과 열을 사전에 정의하고, 그 격자(grid) 안에 요소를 배치하는 방식입니다.

</details>

<details>
<summary><strong>Q. CSS flex-wrap 속성에 대해서 설명해주세요.</strong></summary>

- flex-wrap은 Flex 컨테이너 안의 Flex 아이템들이 한 줄에 공간이 부족할 때 줄 바꿈을 할지 여부를 결정하는 CSS 속성입니다.
  <br/>
- `nowrap`: 줄 바꿈을 하지 않습니다. 아이템들이 컨테이너 너비를 넘어서더라도 한 줄에 계속 배치됩니다.
- `wrap`: 공간이 부족하면 아이템들이 다음 줄로 넘어갑니다 (아래로).
- `wrap-reverse`: wrap과 동일하게 줄 바꿈 하지만, 줄의 순서가 반대로 쌓입니다 (위로).

</details>

<details>
<summary><strong>⭐ Q. 반응형 레이아웃에서 브레이크 포인트는 어떻게 설정하나요?</strong></summary>

- 일반적으로 모바일, 태블릿, 데스크탑, 더 큰 모니터를 기준으로 잡습니다. 최근에는 디바이스 종류가 다양해지면서 단순한 해상도보다는 콘텐츠의 가독성과 UI 배치를 기준으로 브레이크포인트를 잡는 경우도 많습니다. 또한 Grid 레이아웃을 사용할 때는 컬럼이 지나치게 좁아지지 않도록 시각적 안정성을 고려해 세부적인 브레이크포인트를 추가하기도 합니다.

</details>

<details>
<summary><strong>Q. px, em, rem의 차이를 설명해주세요.</strong></summary>

- px: 절대 단위로써 픽셀을 기준으로 크기가 고정됩니다.
- em: 상대 단위로써 해당 요소의 font-size를 기준으로 크기를 결정합니다.
  (해당 요소 내 font-size가 지저이 안되어있다면 부모 font-size를 상속)
- rem: 상대 단위로써 최상위 요소(HTML 요소)의 font-size를 기준으로 크기를 결정합니다. em과 달리 중첩에 영향을 받지 않기 때문에 일관되고 예측 가능한 크기로 조절할 수 있습니다.
</details>

<details>
<summary><strong>Q. vw, vh에 대해서 설명해주세요.</strong></summary>

- vw는 viewport의 너비값을 100vw라고 정의합니다. 즉, viewport 너비의 1%가 1vw입니다.
  <br/>
  vh는 viewport 높이값을 100vh로 정의합니다. 즉, viewport 높이의 1%가 1vh입니다.

</details>

<details>
<summary><strong>Q. 페이지 크기가 변해도 항상 같은 비율을 유지하는 요소를 만들려면 CSS를 어떻게 설정해야될까요?</strong></summary>

- % 단위를 사용하면 됩니다. margin, padding, width, height 같은 속성들에 사용할 수 있습니다.

</details>

### 접근성

<details>
<summary><strong>⭐ Q. 웹 접근성을 위해 고려해야 할 HTML/CSS 측면은 무엇이 있나요?</strong></summary>

- 웹 접근성을 위해 HTML 측면에서는 시맨틱 태그를 활용해 구조를 명확히 표현하고, 이미지에는 alt 속성을 제공해 대체 텍스트를 제공해야 합니다. 폼 요소에는 label을 명확히 연결해 보조기기 사용자도 정보를 인식할 수 있도록 하고, ARIA 속성도 상황에 따라 활용할 수 있습니다.
  <br/>
  CSS 측면에서는 색상 대비를 충분히 확보하고, 중요한 정보는 색상에만 의존하지 않도록 설계해야 하며, 포커스가 가시적으로 표시되도록 해야 키보드 사용자도 원활히 이용할 수 있습니다.

</details>

<details>
<summary><strong>⭐ Q. 웹 접근성에서 ARIA란 무엇이며, 언제 사용하나요?</strong></summary>

- ARIA(Accessible Rich Internet Applications)는 시각장애인 등 보조기기 사용자가 웹 콘텐츠를 더 잘 이해할 수 있도록 돕는 속성 집합입니다. 시맨틱 태그로 표현이 어려운 동적 UI나 커스텀 컴포넌트에 접근성 정보를 추가할 때 사용합니다. 예를 들어, role, aria-label, aria-hidden 등 다양한 속성이 있습니다.

</details>

<details>
<summary><strong>Q. SEO(검색 엔진 최적화)를 위해 HTML에서 신경 써야 할 점은?</strong></summary>

- 시맨틱 태그를 활용해 구조를 명확히 하고, title, meta description, alt 속성 등 검색 엔진이 이해할 수 있는 정보를 충분히 제공해야 합니다. 또한 heading 태그(h1~h6)의 계층 구조를 올바르게 사용하고, 링크에는 의미 있는 텍스트를 사용해야 합니다.

</details>

### 성능 최적화

<details>
<summary><strong>Q. CSS에서 will-change 속성의 역할은?</strong></summary>

- `will-change` 속성은 특정 요소에 앞으로 변화가 예상되는 CSS 속성을 미리 브라우저에 알려줘서, 렌더링 최적화를 유도하는 역할을 합니다. 예를 들어 `transform`, `opacity`와 같이 성능 비용이 큰 속성이 자주 변경될 경우, will-change를 통해 사전 최적화를 하면 레이아웃 계산이나 페인트, 컴포지팅 비용을 줄일 수 있습니다. 다만 과도하게 사용하면 GPU 메모리를 낭비할 수 있어, 실제 변화가 예상되는 경우에만 제한적으로 사용하는 것이 좋습니다.

</details>

<details>
<summary><strong>Q. 웹 폰트 적용 시 성능을 최적화하기 위한 방법에는 무엇이 있나요?</strong></summary>

- 웹 폰트를 최적화하려면 먼저 `font-display: swap`을 사용해 로딩 중에도 텍스트가 바로 보이게 하고, 실제 사용하는 글자만 포함된 서브셋 폰트를 적용해 용량을 줄이는 것이 좋습니다. 또한 압축률이 높은 woff2 포맷을 사용하고, preload로 폰트를 우선 로드하면 렌더링 지연을 줄일 수 있습니다. 이외에도 사용하지 않는 굵기나 스타일은 제외하고 꼭 필요한 것만 불러오는 것이 중요합니다.

</details>

<details>
<summary><strong>Q. CSS 변수(CSS Custom Properties)는 무엇이고, 어떻게 사용하나요?</strong></summary>

- CSS 변수는 :root나 선택자에 --변수명 형태로 선언하고, var(--변수명)으로 사용할 수 있습니다. 테마 변경, 반복되는 값 관리 등에서 유용하며, 런타임에 동적으로 값을 변경할 수도 있습니다.

</details>

<details>
<summary><strong>Q. 미디어 쿼리에서 orientation, resolution 등 고급 속성은 언제 활용하나요?</strong></summary>

- orientation은 화면이 가로/세로 모드인지에 따라 스타일을 다르게 적용할 때, resolution은 디스플레이의 픽셀 밀도에 따라 이미지를 교체하거나 스타일을 조정할 때 사용합니다. 예시: @media (orientation: landscape), @media (min-resolution: 2dppx)

</details>
