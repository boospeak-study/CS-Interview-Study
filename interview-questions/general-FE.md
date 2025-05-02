# FE 공통

<details>
<summary>CSR / SSR / SSG 에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>CSR과 SSR의 단점을 극복하는 방법에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details><summary>Q. SPA에서 검색 엔진 최적화를 이루는 방법에 대해서 알려주세요.</summary>

1. **SSR 사용**: 서버에서 페이지의 HTML을 미리 만들어 브라우저와 검색 봇에 전달합니다. 초기 콘텐츠를 바로 인식할 수 있습니다.
2. **SSG 사용**: 빌드 시점에 모든 페이지의 HTML을 미리 생성해 둡니다. 빠르고 SEO에 매우 유리합니다. (예: Gatsby, Next.js/Nuxt.js의 SSG 모드)
3. **동적 렌더링:** 사용자에게는 SPA를, 검색 봇에게는 서버에서 미리 렌더링된 버전을 보여주는 방식입니다.
</details>

<details><summary>Q. SSR 방식으로 SPA를 구현하는 과정에 대해서 알려주세요.</summary>

1. 첫 페이지 로드 시에 서버가 필요한 데이터를 포함한 완전한 HTML을 미리 만들어서 브라우저에 보냅니다.
2. 그 후, 브라우저는 JavaScript를 로드하여 서버에서 생성된 HTML에 동적인 기능을 추가합니다. 이 과정을 **하이드레이션**이라고 합니다.
3. 이후에는 일반적인 SPA처럼 클라이언트 측에서 페이지를 업데이트하며 동작합니다.
</details>

<details>
<summary>PNG, JPG, WEBP, AVIF와 같은 이미지 포맷의 차이점에 대해서 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>프론트엔드에서 피처 구현하면서 가장 고려해야 될 게 뭐라고 생각하나요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>CLS 말고 Core Web Vitals 측정항목에는 뭐가 있는지 아시나요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>Lighthouse 성능 측정 기준에는 뭐가 있는지 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>웹 애플리케이션의 성능을 최적화할 수 있는 방법들에 대해서 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>웹 접근성의 개념과 개선 방법에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>낙관적 업데이트에 관해서 설명해 주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>이미지 최적화 방법들에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>애자일에 대해 설명해주세요</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>웹, 앱 브릿지에 대해서 알고계신가요? 알고 계시다면 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>지원자님이 생각하시는 클린 코드에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>지원자님이 생각하시는 클린 아키텍쳐에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>non-blocking과 async의 차이점에 대해 설명해주세요.</summary>

non-blocking과 async는 자주 함께 쓰이지만, 의미와 관점이 조금 다릅니다.
non-blocking은 함수가 작업을 수행하더라도 결과가 나올 때까지 기다리지 않고 즉시 제어권을 돌려주는 실행 방식을 의미합니다.
반면, async는 함수가 호출된 이후의 작업 완료 시점에 실행될 로직을 미리 지정해두는 코드 구조를 말합니다.
예를 들어, `non-blocking`은 A 함수가 B 함수를 호출했을 때 B 함수가 작업을 끝내지 않아도 A 함수가 계속 실행될 수 있도록 하는 실행 흐름이고, `async`는 그 작업이 끝났을 때 어떻게 처리할지를 명시하는 방식입니다.
즉, non-blocking은 실행 방식, async는 그 실행을 처리하는 코드 스타일이라고 볼 수 있습니다.

</details>

<details>
<summary>blocking / non-blocking / sync / async 에 대해 설명해주세요. 그리고 각각을 조합한 것에 대해 설명해주세요.</summary>

1. **blocking + sync** : 다른 작업이 진행되는 동안 자신의 작업을 처리하지 않고 (blocking), 다른 작업의 완료 여부를 바로 받아 순차적으로 처리하는 (sync) 방식이다. 다른 작업의 결과가 자신의 작업에 영향을 주는 경우에 활용할 수 있다.
2. **blocking + async** : 다른 작업이 진행되는 동안 자신의 작업을 멈추고 기다리는 (blocking), 다른 작업의 결과를 바로 처리하지 않아 순서대로 작업을 수행하지 않는 (async) 방식이다.
3. **non-blocking + async** : 다른 작업이 진행되는 동안에도 자신의 작업을 처리하고 (non-blocking), 다른 작업의 결과를 바로 처리하지 않아 작업 순서가 지켜지지 않는 (async) 방식이다. 다른 작업의 결과가 자신의 작업에 영향을 주지 않는 경우에 활용할 수 있다.
4. **non-blocking + sync** : 다른 작업이 진행되는 동안에도 자신의 작업을 처리하고 (non-blocking), 다른 작업의 결과를 바로 처리하여 작업을 순차대로 수행하는 (sync) 방식이다.
</details>

## Infra, Build, Tools

<details>
<summary>Nginx에 대해서 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>CI/CD에 대해서 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>웹 서비스 배포 시스템 구축 경험이 있으신가요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>Monorepo 사용 경험에 대해서 말씀해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>패키지 매니저(npm, pnpm, yarn, yarn2) 사용 경험에 대해 말씀해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>Git에 대해서 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>사용하신 Git 브랜치 전략에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>Git Merge, Squash, Rebase의 차이에 대해서 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>dependencies 와 devDependencies 차이에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>MSA 경험이 있으신가요? 알고 계시는 만큼 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>BFF 아키텍처 구현 경험이 있나요? 혹은 알고 계시는 만큼 설명해주세요.</summary>

BFF는 'Backend for Frontend'의 약자인데요, 말 그대로 **프론트엔드만을 위한 맞춤형 백엔드 서버입니다.**

요즘 서비스들은 웹, 모바일 앱 등 다양한 프론트엔드 환경을 가지는 경우가 많잖아요? 그리고 백엔드는 여러 기능을 제공하는 범용 API나 마이크로서비스로 구성되기도 하고요.

이때 프론트엔드 입장에서는, 화면 하나를 그리기 위해 여러 백엔드 API를 호출해야 하거나, 반대로 너무 많은 불필요한 데이터까지 받아와서 직접 가공해야 하는 불편함이 생길 수 있습니다.

**BFF는 이런 문제를 해결하기 위해 중간에 위치**합니다. 특정 프론트엔드(예: 웹 앱용 BFF, 모바일 앱용 BFF)를 타겟으로 해서, **백엔드의 여러 API를 대신 호출**해서 데이터를 가져오고, 프론트엔드가 **필요로 하는 형태로 데이터를 조합하고 가공**해서, **딱 맞는 응답 하나로 만들어서** 프론트엔드에 전달해주는 역할을 합니다.

덕분에 프론트엔드 개발자는 복잡한 데이터 처리나 여러 번의 API 호출 없이, BFF가 제공하는 API만 호출하면 되니까 **개발이 훨씬 편해지고**, 필요한 데이터만 받으니 **성능 개선**에도 도움이 됩니다.

결국, 프론트엔드 개발 경험과 사용자 경험을 향상시키기 위한 아키텍처 패턴이라고 생각합니다.

</details>

<details>
<summary>Webpack과 Vite, 기타 번들링 도구에 대한 설명 해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

## Testing

<details>
<summary>FE 개발에서 테스트 코드를 작성해서 얻는 이점이 무엇인가요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>유닛 테스트, 통합 테스트, E2E 테스트에 대해 각각 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>만약 간단한 입력 필드 컴포넌트를 만든다면, 어떤 부분을 테스트해봐야 할까요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>FE 테스트를 위해 주로 어떤 라이브러리나 프레임워크를 사용하나요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>컴포넌트를 테스트할 때, API 호출을 실제 네트워크 요청 없이 테스트하려면 어떻게 해야 할까요?</summary>

답변

질문 제작: OOO

출처: (optional)

</details>

<details>
<summary>프론트엔드 E2E 테스트에 대해 설명해주세요.</summary>

답변

질문 제작: OOO

출처: (optional)

</details>
