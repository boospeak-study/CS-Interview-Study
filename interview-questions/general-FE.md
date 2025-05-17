# FE 공통

<details>
<summary><strong>Q. CSR / SSR / SSG 에 대해 설명해주세요.</strong></summary>

답변

## CSR

초기 로딩 시 최소한의 HTML만 전달하고, JavaScript가 실행된 후 브라우저에서 모든 UI를 구성함

### 장점

SPA에 적합하고 사용자와의 인터랙션이 빠릅니다.

### 단점

초기 로딩 속도 느리고 SEO에 불리함

## SSR

요청 시 서버가 HTML을 완전히 구성한 후 브라우저에 전달해 바로 렌더링하는 방식

### 장점

초기 로딩 속도가 빠르고 SEO에 유리, 보안에 유리함

### 단점

서버의 부담이 증가하고 페이지 전환 시 전체 HTML을 다시 요청해야 합니다.

## SSG

빌드 시 미리 HTML을 생성해서 저장해두고, 사용자가 요청할 때 해당 HTML을 그대로 전달하는 방식

### 장점

매우 빠르고 SEO에 매우 유리함

### 단점

실시간 데이터 반영이 어렵고 페이지 수가 많으면 빌드 시간이 길어짐

질문 제작: 강민주

출처: (optional)

</details>

<details>
<summary><strong>Q. CSR과 SSR의 단점을 극복하는 방법에 대해 설명해주세요.</strong></summary>

답변

## CSR 단점 극복 방법

### 초기 로딩이 느림

해결 방법

- code splitting(코드 분할) 필요한 페이지/ 컴포넌트 단위로 JS 번들을 나누어 초기에 최소한의 코드로만 로딩
- Lazy Loading : 사용자가 실제로 접근할 때 필요한 리소스만 불러옴
- Preloading/Prefetching : 예상되는 사용자 이동 경로에 있는 리소스를 미리 불러와 준비

### SEO에 불리함

해결 방법

- 사전 렌더링 : 정적 HTML을 미리 생성해 검색 엔진에 제공
- 동적 렌더링 : 일반 사용자는 CSR로 처리하고, 크롤러에게만 SSR 결과를 전달(Google 추천 방식)

## SSR 단점 극복 방법

### 서버 부하가 큼

해결 방법

- 캐싱 : 페이지 결과나 API 응답을 CDN 또는 서버 메모리에 저장하여 재사용
- ISR : 정적 페이지를 일정 주기로 백그라운드에서 다시 생성하는 방식

### 페이지 전환 시 깜빡임/느림

해결 방법

- Hydaration 최적화 : 클라이언트 측에서 부드럽게 React가 takeover 하도록 조정
- client-side routing 병행 : 페이 이동은 CSR 방식으로, 초기 로딩만 SSR로 처리

질문 제작: 강민주

출처: (optional)

</details>

<details>
<summary><strong>Q. PNG, JPG, WEBP, AVIF와 같은 이미지 포맷의 차이점에 대해서 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 프론트엔드에서 피처 구현하면서 가장 고려해야 될 게 뭐라고 생각하나요?!</strong></summary>

- 프론트엔드에서 피처를 구현할 때 가장 중요하게 고려해야 할 점은 사용자 경험이라고 생각합니다. 최종적으로 프론트엔드가 개발하는 모든 기능은 사용자를 위한 것이기 때문입니다.

  구체적으로 다음 요소들을 균형 있게 고려해야 합니다.

  성능과 속도: 사용자는 빠른 응답을 기대합니다. 불필요한 렌더링을 줄이고, 코드 스플리팅, 이미지 최적화, 캐싱 전략 등을 통해 로딩 시간을 최소화해야 합니다.

  접근성(Accessibility): 모든 사용자가 장애 여부와 관계없이 기능을 사용할 수 있어야 합니다. 시맨틱 HTML, ARIA 속성, 키보드 네비게이션 지원이 필수적입니다.

  유지보수성: 코드베이스가 확장 가능하고 다른 개발자들이 쉽게 이해할 수 있도록 설계해야 합니다. 컴포넌트의 재사용성과 명확한 관심사 분리가 중요합니다.

</details>

<details><summary><strong>Q. SPA에서 검색 엔진 최적화를 이루는 방법에 대해서 알려주세요.</strong></summary>

1. **SSR 사용**: 서버에서 페이지의 HTML을 미리 만들어 브라우저와 검색 봇에 전달합니다. 초기 콘텐츠를 바로 인식할 수 있습니다.
2. **SSG 사용**: 빌드 시점에 모든 페이지의 HTML을 미리 생성해 둡니다. 빠르고 SEO에 매우 유리합니다. (예: Gatsby, Next.js/Nuxt.js의 SSG 모드)
3. **동적 렌더링:** 사용자에게는 SPA를, 검색 봇에게는 서버에서 미리 렌더링된 버전을 보여주는 방식입니다.
</details>

<details><summary><strong>Q. SSR 방식으로 SPA를 구현하는 과정에 대해서 알려주세요.</strong></summary>

1. 첫 페이지 로드 시에 서버가 필요한 데이터를 포함한 완전한 HTML을 미리 만들어서 브라우저에 보냅니다.
2. 그 후, 브라우저는 JavaScript를 로드하여 서버에서 생성된 HTML에 동적인 기능을 추가합니다. 이 과정을 **하이드레이션**이라고 합니다.
3. 이후에는 일반적인 SPA처럼 클라이언트 측에서 페이지를 업데이트하며 동작합니다.
</details>

<details>
<summary><strong>Q. CLS 말고 Core Web Vitals 측정항목에는 뭐가 있는지 아시나요?!</strong></summary>

- Core Web Vitals는 Google이 웹사이트 사용자 경험을 측정하는 핵심 지표들입니다.

  LCP(Largest Contentful Paint): 페이지의 가장 큰 콘텐츠가 화면에 표시되는 시간을 측정합니다. 좋은 사용자 경험을 위해서는 2.5초 이내여야 합니다.

  FID(First Input Delay): 사용자가 페이지와 처음 상호작용할 때 응답 지연 시간을 측정합니다. 100ms 이하가 권장됩니다.

  INP(Interaction to Next Paint): FID를 대체할 새로운 지표로, 모든 사용자 상호작용의 응답성을 측정합니다. 200ms 이하가 좋은 경험입니다.

  TTFB(Time to First Byte): 서버 응답 시간을 측정하는 지표로, 리소스 요청부터 첫 데이터를 받는 시간입니다.

</details>

<details>
<summary><strong>Q. Lighthouse 성능 측정 기준에는 뭐가 있는지 설명해주세요.!</strong></summary>

- Lighthouse는 Google에서 개발한 웹페이지 품질 측정 도구로, 다음과 같은 주요 성능 측정 기준들을 포함합니다.

- 성능(Performance)

  - First Contentful Paint(FCP): 페이지가 로드되기 시작한 시점부터 콘텐츠의 일부가 화면에 렌더링될 때까지의 시간
  - Largest Contentful Paint(LCP): 가장 큰 콘텐츠 요소가 화면에 렌더링되는 시간 (Core Web Vitals의 일부)
  - Speed Index: 페이지 콘텐츠가 얼마나 빨리 시각적으로 표시되는지 측정
  - Time to Interactive(TTI): 페이지가 완전히 상호작용 가능한 상태가 되는 데 걸리는 시간
  - Total Blocking Time(TBT): FCP와 TTI 사이에서 메인 스레드가 차단된 총 시간
  - Cumulative Layout Shift(CLS): 페이지 로드 중 예기치 않은 레이아웃 이동의 정도 (Core Web Vitals의 일부)

- 접근성(Accessibility)

  - 웹사이트가 장애가 있는 사용자들에게 얼마나 접근 가능한지 측정
  - ARIA 속성의 올바른 사용, 색상 대비, 키보드 접근성 등 평가

- 최적화 권장사항(Best Practices)

  - HTTPS 사용, 안전하지 않은 JavaScript 방지, 올바른 이미지 비율 사용 등
  - 브라우저 오류 로깅, 사용자 경험을 저해하는 요소들 체크

- SEO(Search Engine Optimization)

  - 검색 엔진이 페이지를 얼마나 잘 이해할 수 있는지 측정
  - meta 태그, 텍스트 크기, 크롤링 가능 여부 등 확인

- PWA(Progressive Web App)
  - 웹사이트가 PWA 기준을 얼마나 충족하는지 측정
  - 오프라인 작동, 설치 가능성, HTTPS 사용 등 평가

</details>

<details>
<summary><strong>Q. 웹 애플리케이션의 성능을 최적화할 수 있는 방법들에 대해서 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 웹 접근성의 개념과 개선 방법에 대해 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 낙관적 업데이트에 관해서 설명해 주세요.!</strong></summary>

- 낙관적 업데이트는 사용자 인터페이스를 즉각적으로 반응하게 만들어 사용자 경험을 향상시키는 패턴입니다. 서버 응답을 기다리지 않고 UI를 먼저 업데이트한 후, 서버 응답이 돌아오면 그에 맞게 상태를 최종 조정하는 방식입니다.
- 장점: 사용자에게 즉각적인 피드백 제공으로 앱이 더 빠르게 느껴집니다.
- 단점: 서버 요청이 실패하면 롤백 로직을 구현해야 합니다, 이에 따라서 상태 관리의 복잡성이 증가할 수 있습니다.

</details>

<details>
<summary><strong>Q. 이미지 최적화 방법들에 대해 설명해주세요.!</strong></summary>

1. 적절한 이미지 포맷 선택: WebP를 사용하면 JPG, PNG보다 30~50% 작은 파일 크기로 동일한 품질을 제공합니다.
2. 반응형 이미지: `<picture>` 요소를 활용하여 기기 특성마다 이미지 포맷을 다르게 전달할 수 있습니다.
3. 지연 로딩(Lazy Loading): 뷰포트에 들어올 때만 이미지를 로드하여 초기 페이지 로드 시간을 단축할 수 있습니다.

</details>

<details>
<summary><strong>Q. 애자일에 대해 설명해주세요!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 웹, 앱 브릿지에 대해서 알고계신가요? 알고 계시다면 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 지원자님이 생각하시는 클린 코드에 대해 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 지원자님이 생각하시는 클린 아키텍쳐에 대해 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. non-blocking과 async의 차이점에 대해 설명해주세요.</strong></summary>

non-blocking과 async는 자주 함께 쓰이지만, 의미와 관점이 조금 다릅니다.
non-blocking은 함수가 작업을 수행하더라도 결과가 나올 때까지 기다리지 않고 즉시 제어권을 돌려주는 실행 방식을 의미합니다.
반면, async는 함수가 호출된 이후의 작업 완료 시점에 실행될 로직을 미리 지정해두는 코드 구조를 말합니다.
예를 들어, `non-blocking`은 A 함수가 B 함수를 호출했을 때 B 함수가 작업을 끝내지 않아도 A 함수가 계속 실행될 수 있도록 하는 실행 흐름이고, `async`는 그 작업이 끝났을 때 어떻게 처리할지를 명시하는 방식입니다.
즉, non-blocking은 실행 방식, async는 그 실행을 처리하는 코드 스타일이라고 볼 수 있습니다.

</details>

<details>
<summary><strong>Q. blocking / non-blocking / sync / async 에 대해 설명해주세요. 그리고 각각을 조합한 것에 대해 설명해주세요.</strong></summary>

1. **blocking + sync** : 다른 작업이 진행되는 동안 자신의 작업을 처리하지 않고 (blocking), 다른 작업의 완료 여부를 바로 받아 순차적으로 처리하는 (sync) 방식이다. 다른 작업의 결과가 자신의 작업에 영향을 주는 경우에 활용할 수 있다.
2. **blocking + async** : 다른 작업이 진행되는 동안 자신의 작업을 멈추고 기다리는 (blocking), 다른 작업의 결과를 바로 처리하지 않아 순서대로 작업을 수행하지 않는 (async) 방식이다.
3. **non-blocking + async** : 다른 작업이 진행되는 동안에도 자신의 작업을 처리하고 (non-blocking), 다른 작업의 결과를 바로 처리하지 않아 작업 순서가 지켜지지 않는 (async) 방식이다. 다른 작업의 결과가 자신의 작업에 영향을 주지 않는 경우에 활용할 수 있다.
4. **non-blocking + sync** : 다른 작업이 진행되는 동안에도 자신의 작업을 처리하고 (non-blocking), 다른 작업의 결과를 바로 처리하여 작업을 순차대로 수행하는 (sync) 방식이다.
</details>

## Infra, Build, Tools

<details>
<summary><strong>Q. Nginx에 대해서 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. CI/CD에 대해서 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 웹 서비스 배포 시스템 구축 경험이 있으신가요? 배포 프로세스에 대해 아는대로 설명해주세요.</strong></summary>

- 예시 답변: AWS 환경에서 배포해본 경험이 있습니다. 배포 프로세스는 개발 -> 빌드 -> 테스트 -> 배포 -> 모니터링 순서로 이루어집니다.

- 웹서버: HTTP 요청에 대해 정적으로 HTML 페이지를 전달합니다.
- WAS: 클라이언트 요청에 따라서 동적으로 콘텐츠를 생성하여 제공합니다.

</details>

<details>
<summary><strong>Q. Monorepo 사용 경험에 대해서 말씀해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 패키지 매니저(npm, pnpm, yarn, yarn2) 사용 경험에 대해 말씀해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. Git에 대해서 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 사용하신 Git 브랜치 전략에 대해 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. Git Merge, Squash, Rebase의 차이에 대해서 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. dependencies 와 devDependencies 차이에 대해 설명해주세요.!</strong></summary>

1. dependencies: 프로덕션 환경에서 앱을 실행하는데 필요한 패키지들이 담깁니다. (ex: React, Redux, Axios)
2. devDependencies: 개발 과정에서만 필요한 패키지들이 담깁니다. 빌드 도구, 테스트 프레임워크, 린터 등이 이곳에 포함됩니다. (ex: Webpack, Babel, ESLint, TypeScript)

</details>

<details>
<summary><strong>Q. MSA 경험이 있으신가요? 알고 계시는 만큼 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. BFF 아키텍처 구현 경험이 있나요? 혹은 알고 계시는 만큼 설명해주세요.</strong></summary>

BFF는 'Backend for Frontend'의 약자인데요, 말 그대로 **프론트엔드만을 위한 맞춤형 백엔드 서버입니다.**

요즘 서비스들은 웹, 모바일 앱 등 다양한 프론트엔드 환경을 가지는 경우가 많잖아요? 그리고 백엔드는 여러 기능을 제공하는 범용 API나 마이크로서비스로 구성되기도 하고요.

이때 프론트엔드 입장에서는, 화면 하나를 그리기 위해 여러 백엔드 API를 호출해야 하거나, 반대로 너무 많은 불필요한 데이터까지 받아와서 직접 가공해야 하는 불편함이 생길 수 있습니다.

**BFF는 이런 문제를 해결하기 위해 중간에 위치**합니다. 특정 프론트엔드(예: 웹 앱용 BFF, 모바일 앱용 BFF)를 타겟으로 해서, **백엔드의 여러 API를 대신 호출**해서 데이터를 가져오고, 프론트엔드가 **필요로 하는 형태로 데이터를 조합하고 가공**해서, **딱 맞는 응답 하나로 만들어서** 프론트엔드에 전달해주는 역할을 합니다.

덕분에 프론트엔드 개발자는 복잡한 데이터 처리나 여러 번의 API 호출 없이, BFF가 제공하는 API만 호출하면 되니까 **개발이 훨씬 편해지고**, 필요한 데이터만 받으니 **성능 개선**에도 도움이 됩니다.

결국, 프론트엔드 개발 경험과 사용자 경험을 향상시키기 위한 아키텍처 패턴이라고 생각합니다.

</details>

<details>
<summary><strong>Q. Webpack과 Vite, 기타 번들링 도구에 대한 설명 해주세요.</strong></summary>

답변

Webpack은 가장 많이 쓰이는 번들러 중 하나로 모든 자원을 JS 모듈로 간주하여, 의존성을 분석하고 하나(또는 여러개)의 파일로 번들링해줍니다. 플러그인/로더 기반 구조로 확장성이 높고 트리 쉐이킹과 코드 분할을 지원해 줍니다.
Vite는 최근 떠오른 매우 빠른 빌드 도구로 개발 시에는 번들링하지 않고, ESM으로 빠르개 실행시켜줍니다. 빌드 시에는 Rollup 기반으로 번들링하고 간단한 설정으로 빠르게 사용할 수 있지만 커스텀하기 어려울 수 있습니다.

질문 제작: OOO

출처: (optional)

</details>

## Testing

<details>
<summary><strong>Q. FE 개발에서 테스트 코드를 작성해서 얻는 이점이 무엇인가요?!</strong></summary>

- 예시 답변: 저는 Jest를 통해서 간단한 테스트 코드를 작성해본 경험이 있습니다. 테스트 코드를 작성하면, 코드 수정이 발생할 때마다 동작의 성공 여부를 빠르게 판단할 수 있어서 생산성에 유리하다고 생각합니다. 특히 OOO 회사의 서비스에서 OOO 요구사항이 변동되는 경우에 빠르게 대응이 가능합니다.
- (본인의 경험 + 회사 서비스에 적용하여 설명하면 Good)

</details>

<details>
<summary><strong>Q. 유닛 테스트, 통합 테스트, E2E 테스트에 대해 각각 설명해주세요.!</strong></summary>

- 유닛 테스트: 앱의 개별 구성 요소(컴포넌트)를 독립적으로 테스트합니다.
  - ex: Button 컴포넌트 클릭 시, 함수가 호출되는지 테스트
- 통합 테스트: 여러 구성 요소(컴포넌트)가 함께 동작할 때 올바른지 테스트합니다.
  - ex: 폼을 제출할 시, API 호출이 올바르게 발생하는지 테스트
- E2E 테스트: 사용자의 관점에서 앱의 전체적인 흐름을 테스트합니다.
  - ex: 사용자가 로그인하고 상품을 구매하는 전체 과정 테스트

</details>

<details>
<summary><strong>Q. 만약 간단한 입력 필드 컴포넌트를 만든다면, 어떤 부분을 테스트해봐야 할까요?!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. FE 테스트를 위해 주로 어떤 라이브러리나 프레임워크를 사용하나요?!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 컴포넌트를 테스트할 때, API 호출을 실제 네트워크 요청 없이 테스트하려면 어떻게 해야 할까요?!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary><strong>Q. 프론트엔드 E2E 테스트에 대해 설명해주세요.!</strong></summary>

답변

질문 제작: OOO

출처: (optional)

</details>
