---
title: HTML/CSS
sidebar_label: HTML/CSS
tags: [html, css, interview]
---

# HTML/CSS

## HTML 기본 개념

<details>
<summary><strong>⭐ Q. script 태그에서 사용하는 async와 defer의 차이에 대해 설명해주세요.</strong></summary>

- 기본적으로 브라우저는 `<script>` 태그를 만나면 HTML 파싱을 멈추고 스크립트를 다운로드한 뒤 실행합니다. **async**와 **defer**는 이 문제를 해결하기 위해 사용됩니다.

  **async**는 스크립트를 **비동기적**으로 다운로드하면서 HTML 파싱을 계속 진행하다가, 다운로드가 완료되는 즉시 파싱을 멈추고 스크립트를 실행합니다. 여러 async 스크립트는 실행 순서가 보장되지 않으므로, 광고나 분석 스크립트처럼 독립적인 스크립트에 적합합니다.

  **defer**도 마찬가지로 비동기 다운로드를 진행하지만, HTML 파싱이 **모두 끝난 후**에 스크립트를 실행합니다. 여러 defer 스크립트는 HTML에 명시된 순서대로 실행이 보장되므로, DOM에 접근하거나 스크립트 간 실행 순서가 중요한 경우에 사용합니다.

</details>

<details>
<summary><strong>⭐ Q. HTML 렌더링 도중 JavaScript가 실행되면 렌더링이 멈추는 이유가 뭔가요?</strong></summary>

- 브라우저의 **메인 스레드**가 **HTML 파싱·렌더링**과 **자바스크립트 실행**을 함께 처리하기 때문입니다. 브라우저는 하나의 메인 스레드에서 순차적으로 작업을 처리하는데, `<script>` 태그를 만나면 해당 스크립트가 DOM을 변경할 수 있으므로 HTML 파싱을 즉시 멈춥니다.

  이후 자바스크립트 엔진에 제어권을 넘겨 스크립트를 실행하는데, 이 역시 **메인 스레드**에서 이루어지기 때문에 레이아웃 계산이나 페인팅 같은 렌더링 작업도 함께 중단됩니다. 이를 완화하기 위해 **async**, **defer** 속성을 사용하거나 스크립트를 `<body>` 태그 맨 끝에 위치시키는 방법을 사용합니다.

</details>

<details>
<summary><strong>Q. HTML이란 무엇인가요?</strong></summary>

- **HTML**은 HyperText Markup Language의 약자로, 웹 페이지의 구조를 정의하는 **마크업 언어**입니다. 하이퍼텍스트는 문서 간 연결을 의미하며, HTML은 다양한 태그를 통해 제목, 문단 등 정보를 구조화합니다. 프로그래밍 언어와 달리 동작이 아닌 문서의 구조와 의미를 표현하는 데 중점을 둡니다.

</details>

<details>
<summary><strong>Q. HTML5의 주요 특징은 무엇인가요?</strong></summary>

- HTML5의 대표적인 특징으로 **시맨틱 태그** 도입이 있습니다. 기존에는 `<div>` 태그로 구조를 잡는 경우가 많았는데, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>` 같이 의미를 명확하게 나타내는 태그들이 추가되어 구조 이해와 **SEO**에 도움이 됩니다.

  또한 웹 애플리케이션 개발을 위한 기능들도 추가되었습니다. 사용자 컴퓨터에 데이터를 저장할 수 있는 **로컬 스토리지**·**세션 스토리지**가 생겼고, **웹 소켓**을 통해 서버와 실시간 양방향 통신도 가능해졌습니다.

</details>

<details>
<summary><strong>Q. 브라우저 동작 중 중단되는 과정이 어떻게 되나요?</strong></summary>

- 브라우저는 HTML을 위에서 아래로 순차적으로 파싱하며 **DOM을 구성**합니다. `<script>` 태그를 만나면 HTML 파싱을 중단하고 자바스크립트를 실행하며, 실행이 끝난 후에야 파싱이 재개됩니다. 자바스크립트가 실행되는 동안에는 다음 HTML 요소를 파싱하거나 렌더링하지 않습니다.

</details>

<details>
<summary><strong>Q. DOCTYPE 이란 무엇인가요?</strong></summary>

- **DOCTYPE**은 HTML 문서의 가장 첫 줄에 위치하며, 이 문서가 어떤 버전의 **HTML 표준**을 따르는지 브라우저에 알려주는 역할을 합니다. 브라우저는 DOCTYPE 선언을 보고 HTML5인지, 이전 버전의 HTML이나 XHTML인지를 파악하여 그에 맞는 방식으로 문서를 해석하고 렌더링합니다.

</details>

<details>
<summary><strong>Q. 메타 태그(Meta Tag)란?</strong></summary>

- **메타 태그**는 HTML 문서에 대한 **메타데이터**를 제공하는 태그로, 화면에 직접 보이지는 않지만 브라우저나 검색 엔진에 중요한 정보를 전달합니다. 주로 `<head>` 안에 위치하며, 문자 인코딩 방식, 검색 엔진을 위한 페이지 설명·키워드, 모바일 화면 표시를 위한 **뷰포트** 설정 등을 지정할 때 사용합니다.

</details>

<details>
<summary><strong>Q. HTML에서의 attributes와 properties의 차이점을 설명해 주세요.</strong></summary>

- **어트리뷰트**는 HTML 태그 안에 직접 작성하는 정적인 값으로, `<input type="text" value="초기값" id="myInput">`에서 `type`, `value`, `id` 같은 것들이 이에 해당합니다. 주로 문자열 형태이며 웹 페이지의 초기 상태를 정의합니다.

  **프로퍼티**는 자바스크립트를 통해 접근하는 DOM 노드의 속성입니다. `element.value`나 `element.id`처럼 접근하며, 해당 요소의 **현재 상태**를 나타냅니다. 문자열뿐만 아니라 불리언, 숫자, 객체 등 다양한 타입을 가질 수 있습니다. 즉, 어트리뷰트는 HTML 마크업에 정의된 초기값이고, 프로퍼티는 자바스크립트로 다루는 DOM 객체의 실시간 속성입니다.

</details>

<details>
<summary><strong>Q. HTML과 XML의 차이</strong></summary>

- **HTML**은 웹 페이지에 **내용을 보여주고 구조를 만드는 데** 초점을 맞춘 언어로, `<h1>`, `<p>`, `<img>` 등 미리 정해진 태그를 사용해 콘텐츠의 의미와 표현 방식을 나타냅니다.

  반면 **XML**은 **데이터를 저장하고 전송하는 데** 주로 사용됩니다. HTML처럼 미리 정해진 태그가 있는 것이 아니라, 사용자가 데이터 구조에 맞게 직접 태그를 정의할 수 있어 '확장 가능한' 마크업 언어라고 불립니다.

</details>

## CSS 기본 개념

<details>
<summary><strong>⭐ Q. Cascading에 대해 설명해주세요.</strong></summary>

- **Cascading**은 CSS에서 여러 스타일 규칙이 하나의 요소에 겹쳐서 적용될 때, 어떤 스타일이 우선적으로 적용될지를 결정하는 **우선순위 체계**를 말합니다. 적용 여부는 **명시도**, **소스 순서**, **중요도** 순으로 판단되며, 충돌할 경우 가장 높은 우선순위를 가진 선언이 최종적으로 적용됩니다. 이 특성 덕분에 CSS는 유연하게 스타일을 덮어쓰거나 오버라이딩할 수 있습니다.

</details>

<details>
<summary><strong>⭐ Q. 박스 모델, margin, padding, box-sizing의 차이와 관계를 설명해주세요.</strong></summary>

- HTML에서 모든 요소는 박스 형태로 구성되며, 이를 **박스 모델**이라고 부릅니다. 박스 모델은 바깥쪽부터 **margin(바깥 여백)** , **border(테두리)** , **padding(안쪽 여백)** , **content(실제 내용)** 순서로 이루어져 있습니다.

  **margin**은 요소와 요소 사이의 바깥 여백을 의미하고, **padding**은 테두리와 내용 사이의 안쪽 여백을 의미합니다. **box-sizing** 속성은 `width`와 `height`를 계산할 때 어떤 부분까지 포함할지 결정하는데, 기본값인 `content-box`는 content 영역만을 기준으로 하고, `border-box`는 padding과 border까지 포함해 전체 크기를 계산합니다. 실무에서는 레이아웃이 꼬이지 않도록 `border-box`를 많이 사용합니다.

</details>

<details>
<summary><strong>⭐ Q. display, position, top/margin-top/translateY의 차이와 레이아웃에 미치는 영향은?</strong></summary>

- **display**는 `block`, `inline`, `flex`, `grid` 등 요소의 레이아웃 방식을 결정하고, **position**은 `static`, `relative`, `absolute`, `fixed`, `sticky` 등을 통해 요소의 위치 지정 방법을 다르게 합니다.

  **top**은 `position`과 함께 사용해 위치를 이동시킵니다.

  **margin-top**은 바깥 여백으로 주변 요소와의 간격에 영향을 줍니다.

  **translateY**는 `transform` 속성으로 시각적으로만 이동하며 레이아웃에는 영향을 주지 않습니다. 각각의 목적과 레이아웃 영향이 다르므로 상황에 맞게 사용해야 합니다.

</details>

<details>
<summary><strong>Q. CSS에서 inline, internal, external 스타일의 차이</strong></summary>

- **inline**은 태그에 직접 `style` 속성으로 작성하는 방식입니다.

  **internal**은 `<style>` 태그를 HTML 내부에 작성하는 방식입니다.

  **external**은 별도 CSS 파일을 `<link>`로 불러오는 방식입니다. 유지보수성과 재사용성 측면에서는 external이 가장 효율적입니다.

</details>

<details>
<summary><strong>Q. CSS에서 Reflow와 Repaint는 무엇이며, 성능에 어떤 영향을 미치나요?</strong></summary>

- **Repaint**는 요소의 색상이나 배경처럼 시각적 스타일만 변경되었을 때, 레이아웃에는 영향을 주지 않고 해당 부분만 다시 그리는 것을 말합니다. `background-color`나 `color` 속성이 바뀌면 Repaint가 일어납니다.

  **Reflow**는 이보다 더 큰 작업으로, 요소의 크기나 위치 등 레이아웃이 변경되었을 때 발생합니다. `width`, `height`, `margin` 같은 속성이 바뀌거나 DOM 요소가 추가·삭제될 때 브라우저는 변경된 요소와 주변 요소들의 위치·크기를 다시 계산해야 합니다. Reflow는 거의 항상 Repaint를 동반하므로 성능 비용이 큽니다.

</details>

<details>
<summary><strong>Q. CSS 애니메이션과 JS 애니메이션의 차이</strong></summary>

- **CSS 애니메이션**은 `transition`이나 `@keyframes`를 이용해 선언적으로 정의합니다. 시작·끝 상태와 중간 지점들을 정의하면 브라우저가 중간 과정을 부드럽게 처리하며, 레이아웃 변경을 일으키지 않는 속성은 메인 스레드와 별도로 처리할 수 있어 성능이 일반적으로 좋습니다.

  **자바스크립트 애니메이션**은 스타일 속성값을 **직접 프레임 단위로 변경**하는 방식으로, 보통 `requestAnimationFrame` API나 애니메이션 라이브러리를 활용합니다. 모든 단계를 완전히 제어할 수 있어 복잡한 효과에 유용하지만, 메인 스레드를 많이 사용해 버벅거림이 발생할 수 있습니다.

</details>

<details>
<summary><strong>Q. visibility: hidden과 display: none의 차이는?</strong></summary>

- **`visibility: hidden`** 은 요소를 화면에 보이지 않게 하지만 공간은 그대로 유지합니다.

  **`display: none`** 은 요소 자체를 문서 흐름에서 완전히 제거해 공간도 차지하지 않습니다. 즉, `visibility: hidden`은 자리를 유지한 채 숨기고, `display: none`은 요소가 아예 없는 것처럼 동작합니다.

</details>

<details>
<summary><strong>Q. CSS 선택자 우선순위는 어떻게 되나요?</strong></summary>

- CSS 선택자 우선순위는 **`!important`** 가 가장 높고, 그다음으로 **인라인 스타일**, **ID 선택자**, **클래스·속성·가상 클래스·가상 요소 선택자**, **태그 선택자**, **전체 선택자** 순입니다.

</details>

<details>
<summary><strong>Q. margin 병합에 대해 설명해주세요.</strong></summary>

- **margin 병합** 현상은 인접한 블록 요소의 상하단 margin이 합쳐지는 현상으로, 두 margin 중 **큰 값**으로 병합됩니다. 이는 인접한 블록 사이뿐만 아니라 **부모와 자식 요소** 사이에서도 발생합니다. 예를 들어 부모의 `margin`이 0이고 자식의 `margin`이 10px이면, 자식의 상하단 margin이 부모의 margin으로 병합되어 margin이 사라진 것처럼 보입니다. 이를 막는 대표적인 해결책으로 부모 요소에 `overflow: hidden`을 적용하는 방법이 있습니다.

</details>

<details>
<summary><strong>Q. z-index는 무엇이고, 어떻게 동작하나요?</strong></summary>

- **z-index**는 요소의 쌓임 순서를 지정하는 속성으로, 숫자가 클수록 앞쪽에 표시됩니다. 단, `position` 속성이 `static`이 아닌 값으로 설정된 요소에만 적용됩니다. 같은 **stacking context** 안에서는 z-index 값에 따라 우선순위가 정해지지만, 서로 다른 컨텍스트끼리는 부모-자식 관계에 따라 달라질 수 있어 의도한 레이어링을 위해서는 `position`, `z-index`, `stacking context`를 함께 고려해야 합니다.

</details>

<details>
<summary><strong>Q. float 동작에 대해 설명해주세요.</strong></summary>

- **float**을 설정하면 요소가 기존 문서 흐름에서 빠져나와, 포함된 박스나 다른 float 요소의 가장자리에 닿을 때까지 좌 또는 우로 이동합니다.

</details>

<details>
<summary><strong>Q. top, margin-top, translate-y 차이에 대해 설명해주세요.</strong></summary>

- **top**은 `position` 속성과 함께 사용하는 위치 지정 속성으로, `relative`일 경우 원래 위치 기준으로, `absolute`나 `fixed`일 경우 기준 부모나 뷰포트를 기준으로 이동합니다.

  **margin-top**은 요소의 바깥 여백을 지정하며 문서 흐름에 영향을 주어 주변 요소와의 간격을 조절합니다.

  **translateY**는 `transform`의 하위 속성으로 요소를 y축 방향으로 시각적으로만 이동시키며, 레이아웃에 영향을 주지 않아 애니메이션이나 동적 인터페이스에서 자주 사용됩니다.

</details>

<details>
<summary><strong>Q. SCSS에 대해 설명해주세요.</strong></summary>

- **SCSS**는 CSS 구문과 완전히 호환되며 Sass의 모든 기능을 지원하는 **CSS의 상위집합**입니다. 웹에서 직접 동작할 수 없으므로 전처리기를 통해 CSS로 변환한 후 적용해야 합니다.

</details>

<details>
<summary><strong>Q. position 속성에는 뭐가 있는지 설명해주세요</strong></summary>

- **position** 속성에는 `static`, `relative`, `absolute`, `fixed`, `sticky`가 있습니다.

  `static`은 기본값으로 위치 이동이 불가하고, `relative`는 원래 위치 기준으로 이동합니다.

  `absolute`는 가장 가까운 위치 지정 조상을 기준으로 배치되고, `fixed`는 뷰포트를 기준으로 고정됩니다.

  `sticky`는 스크롤 위치에 따라 `static`과 `fixed`처럼 전환되며 동작합니다.

</details>

<details>
<summary><strong>Q. display 속성에는 뭐가 있는지 설명해주세요</strong></summary>

- **display**는 요소의 레이아웃 방식을 정의하는 속성으로, `block`, `inline`, `inline-block`, `flex`, `grid`, `none` 등이 있습니다.

  `block`은 줄 바꿈이 발생하는 블록 요소, `inline`은 줄 안에 배치되는 요소, `inline-block`은 줄 안에 있으면서 크기 지정도 가능한 형태입니다.

  `flex`와 `grid`는 각각 1차원·2차원 레이아웃에 사용하며, `none`은 요소를 화면에서 완전히 제거합니다.

</details>

<details>
<summary><strong>Q. 가상 클래스(:hover 등)와 가상 요소(::before 등)의 차이와 활용법을 설명해주세요.</strong></summary>

- **가상 클래스**는 요소의 상태나 위치에 따라 스타일을 적용합니다. `:hover`, `:focus`, `:nth-child` 등이 대표적입니다.

  **가상 요소**는 `::before`, `::after` 등으로 실제로 존재하지 않는 콘텐츠를 생성해 스타일을 적용합니다.

  둘 다 HTML 구조를 변경하지 않고 동적 스타일링이 가능하다는 점에서 유용합니다.

</details>

<details>
<summary><strong>Q. CSS 애니메이션, 트랜지션, JS 애니메이션의 차이와 각각의 장단점은?</strong></summary>

- **CSS 트랜지션**은 상태 변화에 따라 한 번 동작하는 단순한 전환 효과이고, **CSS 애니메이션**은 `@keyframes`를 통해 여러 단계를 정의해 반복·세밀 제어가 가능합니다. 둘 다 브라우저가 중간 과정을 부드럽게 처리하며, 레이아웃에 영향을 주지 않는 속성은 메인 스레드와 별도로 처리해 성능이 좋습니다.

  **JS 애니메이션**은 `requestAnimationFrame` 등으로 직접 제어하며 복잡한 효과에 유리하지만, 메인 스레드를 많이 사용해 성능 저하가 있을 수 있습니다.

</details>

<details>
<summary><strong>Q. CSS 전처리기(SCSS 등)와 후처리기의 차이, 그리고 SCSS의 특징은?</strong></summary>

- **전처리기**는 CSS 작성 전에 변수, 중첩, 함수 등을 활용해 코드 구조를 개선하는 도구로, SASS·LESS 등이 있습니다.

  **후처리기**는 CSS가 완성된 후 자동 접두사 추가나 최적화 같은 처리를 적용하며, PostCSS가 대표적입니다.

</details>

<details>
<summary><strong>Q. Styled-Components와 Tailwind CSS의 차이를 말해주세요.</strong></summary>

- **Styled Components**는 **CSS-in-JS** 방식으로, 자바스크립트 파일 내에서 직접 CSS를 작성할 수 있습니다. 런타임 시 스타일이 동적으로 생성·주입되기 때문에 동적인 스타일 적용이 자유롭지만, 런타임 성능 저하나 초기 렌더링 속도에 영향을 줄 수 있습니다.

  **Tailwind CSS**는 미리 정의된 유틸리티 클래스 조합으로 빠르게 스타일링할 수 있고, 빌드 타임에 필요한 CSS만 생성해 파일 크기를 최소화하고 로딩 속도가 우수합니다. 다만 동적 스타일링에는 제한적입니다.

</details>

## 반응형

<details>
<summary><strong>⭐ Q. Flexbox와 Grid의 차이점에 대해 설명해주세요.</strong></summary>

- 둘 다 레이아웃을 구성할 때 사용되는 CSS 속성이지만, 차원과 목적에서 차이가 있습니다.

  **Flexbox**는 **1차원 레이아웃** 방식으로, 행 또는 열 중 한 방향을 기준으로 요소를 배치합니다. `justify-content`, `align-items` 등을 통해 요소를 자동 정렬하며, 버튼 그룹이나 내비게이션 바처럼 한 줄 구성에 효과적입니다.

  **Grid**는 **2차원 레이아웃** 방식으로, 행과 열을 동시에 활용해 요소를 배치할 수 있습니다. `grid-template-rows`, `grid-template-columns` 등으로 격자를 사전에 정의하고 그 안에 요소를 배치하며, 전체 페이지 구조나 카드 레이아웃, 갤러리처럼 정해진 영역을 나눠 배치할 때 유리합니다.

</details>

<details>
<summary><strong>⭐ Q. 반응형 레이아웃에서 브레이크 포인트는 어떻게 설정하나요?</strong></summary>

- 일반적으로 모바일, 태블릿, 데스크탑, 더 큰 모니터를 기준으로 잡습니다. 최근에는 디바이스 종류가 다양해지면서 단순한 해상도보다는 콘텐츠의 가독성과 UI 배치를 기준으로 브레이크포인트를 잡는 경우도 많습니다. 또한 Grid 레이아웃을 사용할 때는 컬럼이 지나치게 좁아지지 않도록 시각적 안정성을 고려해 세부적인 브레이크포인트를 추가하기도 합니다.

</details>

<details>
<summary><strong>Q. CSS flex-wrap 속성에 대해서 설명해주세요.</strong></summary>

- **flex-wrap**은 Flex 컨테이너 안의 아이템들이 한 줄에 공간이 부족할 때 줄 바꿈을 할지 여부를 결정하는 속성입니다. `nowrap`은 줄 바꿈 없이 한 줄에 계속 배치하고, `wrap`은 공간이 부족하면 다음 줄로 넘기며, `wrap-reverse`는 wrap과 동일하게 줄 바꿈하되 줄의 순서가 반대로 쌓입니다.

</details>

<details>
<summary><strong>Q. px, em, rem의 차이를 설명해주세요.</strong></summary>

- **px**는 절대 단위로 픽셀을 기준으로 크기가 고정됩니다.

  **em**은 상대 단위로 해당 요소의 `font-size`를 기준으로 크기를 결정하며, `font-size`가 지정되지 않은 경우 부모의 값을 상속합니다.

  **rem**도 상대 단위이지만 최상위 HTML 요소의 `font-size`를 기준으로 하기 때문에, em과 달리 중첩에 영향을 받지 않아 일관되고 예측 가능한 크기 조절이 가능합니다.

</details>

<details>
<summary><strong>Q. vw, vh에 대해서 설명해주세요.</strong></summary>

- **vw**는 뷰포트 너비를 100으로 기준 삼아, 1vw가 뷰포트 너비의 1%에 해당합니다.

  **vh**는 뷰포트 높이를 100으로 기준 삼아, 1vh가 뷰포트 높이의 1%에 해당합니다.

</details>

<details>
<summary><strong>Q. 페이지 크기가 변해도 항상 같은 비율을 유지하는 요소를 만들려면 CSS를 어떻게 설정해야될까요?</strong></summary>

- **`%` 단위**를 사용하면 됩니다. `margin`, `padding`, `width`, `height` 같은 속성에 적용할 수 있으며, 부모 요소의 크기를 기준으로 비율을 유지합니다.

</details>

## 접근성

<details>
<summary><strong>⭐ Q. 웹 접근성을 위해 고려해야 할 HTML/CSS 측면은 무엇이 있나요?</strong></summary>

- HTML 측면에서는 **시맨틱 태그**를 활용해 구조를 명확히 표현하고, 이미지에는 `alt` 속성으로 대체 텍스트를 제공해야 합니다. 폼 요소에는 `label`을 명확히 연결해 보조기기 사용자도 정보를 인식할 수 있도록 하고, 필요한 경우 **ARIA** 속성도 활용합니다.

  CSS 측면에서는 **색상 대비**를 충분히 확보하고 중요한 정보는 색상에만 의존하지 않도록 설계해야 하며, **포커스**가 가시적으로 표시되도록 해야 키보드 사용자도 원활히 이용할 수 있습니다.

</details>

<details>
<summary><strong>⭐ Q. 웹 접근성에서 ARIA란 무엇이며, 언제 사용하나요?</strong></summary>

- **ARIA**는 보조기기 사용자가 웹 콘텐츠를 더 잘 이해할 수 있도록 돕는 속성 집합입니다. 시맨틱 태그로 표현이 어려운 동적 UI나 커스텀 컴포넌트에 접근성 정보를 추가할 때 사용하며, `role`, `aria-label`, `aria-hidden` 등 다양한 속성이 있습니다.

</details>

<details>
<summary><strong>Q. SEO(검색 엔진 최적화)를 위해 HTML에서 신경 써야 할 점은?</strong></summary>

- **시맨틱 태그**를 활용해 구조를 명확히 하고, `title`, `meta description`, `alt` 속성 등 검색 엔진이 이해할 수 있는 정보를 충분히 제공해야 합니다. 또한 **heading 태그**의 계층 구조를 올바르게 사용하고, 링크에는 의미 있는 텍스트를 사용하는 것이 중요합니다.

</details>

## 성능 최적화

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

- **CSS 변수**는 `:root`나 특정 선택자에 `--변수명` 형태로 선언하고, `var(--변수명)`으로 사용합니다. 테마 변경이나 반복되는 값 관리에 유용하며, 런타임에 동적으로 값을 변경할 수도 있습니다.

</details>

<details>
<summary><strong>Q. 미디어 쿼리에서 orientation, resolution 등 고급 속성은 언제 활용하나요?</strong></summary>

- **`orientation`** 은 화면이 가로·세로 모드인지에 따라 스타일을 다르게 적용할 때 사용하고, **`resolution`** 은 디스플레이의 픽셀 밀도에 따라 이미지를 교체하거나 스타일을 조정할 때 사용합니다. 예를 들어 `@media (orientation: landscape)`, `@media (min-resolution: 2dppx)` 같은 형태로 작성합니다.

</details>
