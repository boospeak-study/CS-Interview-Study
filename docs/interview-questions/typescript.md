---
title: TypeScript
sidebar_label: TypeScript
tags: [typescript, interview]
---

# TypeScript

## 기본 개념

<details>
<summary><strong>Q. 타입스크립트를 사용하는 이유에 대해서 설명해주세요.</strong></summary>

- 가장 큰 이유는 **정적 타입 시스템을 지원**한다는 점입니다.

  코드를 실행하기 전인 컴파일 타임에 타입 관련 오류를 미리 발견해서 수정할 수 있습니다. 이를 통해 런타임에서 발생할 수 있는 많은 버그를 줄여 코드의 안정성을 향상시킬 수 있습니다.

</details>

<details>
<summary><strong>Q. 타입스크립트와 자바스크립트의 차이는 무엇인가요?</strong></summary>

- **JavaScript**는 동적 타입 언어로 변수의 타입이 런타임에 결정되며, 브라우저나 Node.js에서 바로 실행됩니다.

  **TypeScript**는 정적 타입 언어로 **컴파일 단계**에서 타입을 검사하며, JavaScript로 **트랜스파일된 후**에 실행됩니다.

</details>

<details>
<summary><strong>Q. 타입스크립트로 작성된 코드의 성능은 자바스크립트와 비교했을 때 어떤가요?</strong></summary>

- TypeScript로 작성된 코드의 성능은 JavaScript와 동일합니다.

  TypeScript는 컴파일 타임에 타입 검사를 통해 코드의 품질을 높이지만, 최종적으로 변환되는 코드는 JavaScript로 컴파일되기 때문에 실행 성능에는 차이가 없습니다.

</details>

<details>
<summary><strong>Q. 타입스크립트를 도입하지 않는 것이 더 나은 경우도 있나요?</strong></summary>

- 네, 있습니다. 빠른 개발이 중요한 **프로토타입이나 소규모 프로젝트**에서는 타입스크립트 도입이 오히려 과도한 비용이 될 수 있습니다. 팀 내 타입스크립트 경험이 부족하고 학습 여유가 없는 경우에는 러닝 커브로 인해 생산성이 떨어질 수 있으며, 기존 자바스크립트 코드베이스가 방대할 경우에는 전면 전환보다 점진적 도입이나 미도입이 더 현실적인 선택일 수 있습니다.

</details>

<details>
<summary><strong>Q. 타입스크립트를 새롭게 도입하는걸 추진할 때, 팀원들을 어떻게 설득하실 건가요?</strong></summary>

- 타입스크립트의 **실질적인 이점**을 명확히 전달하는 것이 중요합니다. 런타임 에러를 줄이고 코드 안전성을 강화한다는 점을 강조하고, 특히 유지보수 비용이 큰 프로젝트라면 타입 시스템이 협업 품질을 어떻게 개선할 수 있는지 실제 사례를 통해 보여줄 것입니다. 초기 학습 곡선에 부담을 느끼는 팀원이 있다면 **점진적 도입**을 제안할 것 같습니다.

</details>

## 동작 원리

<details>
<summary><strong>Q. 타입스크립트의 타입 시스템은 런타임에 어떻게 동작하나요?</strong></summary>

- TypeScript의 타입 시스템은 **컴파일 타임**에만 동작하며, 런타임에는 타입 정보가 제거됩니다.

  TypeScript는 코드가 실행되기 전에 타입 검사를 통해 오류를 검출합니다. 하지만 컴파일 후 생성되는 JavaScript 코드에는 **트랜스파일링**되어 타입 정보가 포함되지 않으므로, 실제 실행 시에는 타입 검사가 이루어지지 않습니다.

</details>

<details>
<summary><strong>Q. 타입스크립트의 컴파일링 과정에 대해서 설명해주세요.</strong></summary>

- 개발자가 `.ts` 또는 `.tsx` 파일에 TypeScript 코드를 작성하면, **TSC(TypeScript Compiler)** 가 이를 분석하여 타입 검사를 수행합니다. 타입 오류가 있으면 에러를 발생시키고, 오류가 없으면 타입 정보가 제거된 순수 **JavaScript 파일(`.js`)** 을 생성합니다. 생성된 JavaScript 파일은 브라우저나 Node.js 환경에서 실행됩니다.

</details>

<details>
<summary><strong>Q. 타입스크립트는 어떻게 실행 전에 타입 오류를 잡아서 빨간줄로 표시할 수 있나요?</strong></summary>

- TypeScript는 정적 타입 검사 언어이기 때문에 런타임 전에 타입 오류를 잡을 수 있습니다.

  우리가 작성한 TypeScript 코드는 tsc(TypeScript Compiler)를 통해 JavaScript로 컴파일되며, 이 과정에서 타입 시스템이 동작해 코드에 명시된 타입과 실제 값 또는 표현식이 일치하는지 검사합니다.

  만약 타입이 일치하지 않으면 컴파일 에러가 발생하고, 터미널에서는 오류 메시지로, 에디터에서는 해당 부분에 빨간 줄로 표시되어 문제를 알려줍니다.

</details>

## 문법

<details>
<summary><strong>Q. interface와 type의 차이점에 대해 설명해주세요.</strong></summary>

- **`interface`**는 객체 타입 정의에 특화되어 있으며, `extends` 키워드로 확장이 가능하고 같은 이름으로 중복 선언 시 **자동으로 병합**됩니다.

  **`type`**은 `&` 기호로 확장하며 중복 선언 시 오류가 발생합니다. 튜플, 유니온, 조건부 타입 등 다양한 고급 타입 선언이 가능하고, 문자열·숫자 같은 **원시 타입에도 별칭**을 붙일 수 있다는 점에서 차이가 있습니다.

</details>

<details>
<summary><strong>Q. 제네릭에 대해 설명해주세요.</strong></summary>

- 제너릭은 타입을 마치 함수의 파라미터처럼 받아서 사용하는 기능으로, `<T>`와 같이 표기합니다.

  이를 통해 함수, 인터페이스, 클래스 등에서 **다양한 타입에 유연하게 대응**할 수 있으며, 코드의 재사용성과 타입 안정성을 높일 수 있습니다. 또한 `extends` 키워드를 사용하면 특정 타입만 허용하는 제약 조건도 설정할 수 있습니다.

  제너릭은 유틸리티 타입과 함께 자주 사용되며, 대표적으로 `Partial<T>`, `Readonly<T>`처럼 기존 타입을 변형해주는 기능을 제공합니다.

</details>

<details>
<summary><strong>Q. 유니언 타입( | )과 인터섹션 타입(&)의 차이를 설명해주세요.</strong></summary>

- **유니언 타입(`|`)** 은 두 타입 중 하나라도 만족하면 되는 타입이고, **인터섹션 타입(`&`)** 은 두 타입 조건을 모두 만족해야 하는 타입입니다.

</details>

<details>
<summary><strong>Q. 유틸리티 타입에 대해서 설명해주세요</strong></summary>

- 제네릭, 맵드 타입, 조건부 타입 등을 활용하여 실무에서 자주 쓰이는 타입 변환을 미리 정의해 놓은 내장 타입들입니다. 대표적으로 **`Partial`**(모든 속성을 선택적으로), **`Pick`**(특정 속성만 선택), **`Omit`**(특정 속성만 제외)이 있습니다.

</details>

<details>
<summary><strong>Q. 타입 단언과 타입 가드의 차이점은 무엇인가요?</strong></summary>

- **타입 단언**은 `as` 키워드를 사용해 타입을 **강제로 지정**하는 것이고, **타입 가드**는 `typeof`, `instanceof`, 사용자 정의 타입 가드 등을 통해 실제 타입을 **체크하고 좁혀주는** 방식입니다.

</details>

<details>
<summary><strong>Q. 타입스크립트에서 private, protected, public 키워드는 어떤 역할을 하나요?</strong></summary>

- **public**은 클래스의 모든 속성이나 메서드를 외부에서 접근할 수 있는 기본 접근 제어자입니다.

  **private**은 클래스 내부에서만 접근 가능하며, 외부는 물론 상속된 자식 클래스에서도 접근이 불가합니다.

  **protected**는 private과 유사하지만 자식 클래스에서는 접근할 수 있다는 차이가 있습니다.

</details>

<details>
<summary><strong>Q. 타입 추론(Type Inference)이란 무엇인가요?</strong></summary>

- 개발자가 명시적으로 타입을 선언하지 않아도 타입스크립트 컴파일러가 문맥이나 값에 따라 자동으로 타입을 유추하는 기능입니다. 예를 들어 `const name = "Alice"`라고 작성하면 `name`이 `string` 타입임을 자동으로 추론합니다. 코드의 간결성과 생산성이 향상되지만, 추론된 타입 범위가 너무 넓어질 때는 타입 안정성이 떨어지므로 명시적으로 타입을 지정하는 것이 좋습니다.

</details>

<details>
<summary><strong>Q. any 타입의 사용을 어떻게 피하고 계신가요?</strong></summary>

- 가능한 한 구체적인 타입을 명시하려고 합니다. `string`, `number` 같은 원시 타입이나 객체는 타입 별칭을 사용해 명확하게 정의합니다. 타입을 정확히 알 수 없을 때는 **`unknown`** 타입을 우선 고려하는데, `unknown`은 타입 가드를 통해 먼저 타입을 확인하고 사용하도록 강제하기 때문에 `any`보다 안전한 대안입니다.

</details>

<details>
<summary><strong>Q. TypeScript에서 undefined, null를 다루는 방법에 대해 설명해주세요.</strong></summary>

- 타입스크립트는 `null`과 `undefined`로 인한 런타임 에러를 방지하기 위해 **`strictNullChecks`** 컴파일러 옵션을 제공합니다. `tsconfig.json`에서 이 옵션을 `true`로 설정하면, `string`이나 `number` 같은 타입의 변수에 `null`이나 `undefined`를 할당할 수 없게 됩니다. 변수가 `null` 또는 `undefined`를 가질 수 있다면 유니언 타입으로 명시적으로 표시해야 합니다.

</details>

<details>
<summary><strong>Q. Partial / Pick / Omit 에 대해 설명해주세요.</strong></summary>

- 셋 다 기존 타입을 기반으로 새로운 타입을 생성하는 유틸리티 타입입니다.

  **`Partial`**은 모든 속성을 선택적으로 만듭니다.

  **`Pick`**은 특정 속성만 선택하여 새 타입을 만듭니다.

  **`Omit`**은 특정 속성을 제외한 나머지 속성들로 새 타입을 생성합니다.

</details>

<details>
<summary><strong>Q. Record / Array에 대해 설명해주세요.</strong></summary>

- 두 타입 모두 반복적인 데이터 구조를 표현할 때 사용합니다.

  **`Record<K, T>`**는 key와 value의 타입을 명시해 객체를 정의하는 매핑 타입으로, 예를 들어 `Record<string, number>`는 `{ [key: string]: number }`와 같습니다.

  **`Array<T>`**는 제네릭 기반 배열 타입으로 `T[]`와 동일합니다.

</details>

<details>
<summary><strong>Q. void란 무엇이며 언제 void 유형을 사용해야 할까요?</strong></summary>

- **`void`**는 아무런 반환값이 없음을 나타내는 타입으로, 주로 반환값이 없는 함수에 사용합니다. 이벤트 핸들러처럼 부수 효과만 있는 함수가 대표적입니다.

</details>

<details>
<summary><strong>Q. any / unkown / never 은 무엇이고 TypeScript에서 언제 사용해야 할까요?</strong></summary>

- **`any`**는 타입 검사를 완전히 비활성화하므로 가능한 피해야 합니다.

  **`unknown`**은 타입을 알 수 없을 때 사용하며, 사용 전에 반드시 타입을 좁혀야 합니다.

  **`never`**는 절대 도달할 수 없는 코드에 사용합니다.

  정리하면 `any`는 최후의 수단, `unknown`은 안전한 미지 타입, `never`는 불가능한 상태를 표현할 때 사용합니다.

</details>

<details>
<summary><strong>Q. 0 / null / undefined / NaN 에 대해 설명해주세요.</strong></summary>

- **`0`**은 숫자 값이 0인 상태입니다.

  **`null`**은 값이 없음을 의도적으로 나타내는 것으로 변수는 존재하지만 비어있는 상태입니다.

  **`undefined`**는 변수가 선언됐지만 아직 값이 할당되지 않은 상태를 의미합니다.

  **`NaN`**은 숫자 타입이지만 유효한 숫자가 아닌 특수한 값입니다.

  <img width="1280" height="370" alt="img1 daumcdn" src="https://github.com/user-attachments/assets/b36b1584-1fa6-489c-98fa-62370d3429a9" />

  ```
  let a; // undefined
  let b = null; // null

  느슨한 비교(==)에서는 null과 undefined가 같게 처리되지만,
  엄격한 비교(===)에서는 다르게 취급됩니다.
  ```

</details>

<details>
<summary><strong>Q. 옵셔널 체이닝 연산자(?.), non-null 단언 연산자(!.), 널 병합 연산자(??.) 에 대해 설명해주세요</strong></summary>

- **옵셔널 체이닝(`?.`)** 은 중간에 `null`이나 `undefined`가 있을 때 에러 없이 `undefined`를 반환합니다. 주로 객체나 배열의 중첩된 속성에 접근할 때 사용합니다.

  ```jsx
  // 중간에 undefined나 null이 있으면 에러가 아니라 undefined를 반환
  const city = user?.address?.city;
  ```

  **non-null 단언(`!.`)** 은 `null` 또는 `undefined`가 아닐 것이라고 컴파일러에게 보장하는 것입니다. 타입스크립트의 `null` 경고를 무시하고 무조건 값이 있다고 선언해 타입 에러를 피하지만, 실제로 `null`이나 `undefined`가 있으면 런타임 에러가 발생합니다.

  ```jsx
  // 무조건 값이 있다고 단언하는것
  // 만약 중간에 null이나 undefined가 있으면 런타임에서 에러가 난다.
  const city = user!.address!.city;
  ```

  **널 병합 연산자(`??`)** 는 왼쪽 값이 `null` 또는 `undefined`일 때 오른쪽 대체값을 반환하는 연산자입니다.

  ```jsx
  const name = user.name ?? 'Guest';
  ```

</details>

<details>
<summary><strong>Q. 타입 단언에 대해 설명해주세요.</strong></summary>

- **타입 단언**은 개발자가 타입스크립트 컴파일러보다 타입을 더 정확히 알고 있을 때, 특정 타입이라고 컴파일러에게 직접 알려주는 것입니다. 주로 `as` 문법을 사용해 해당 값의 타입을 강제로 지정합니다.

  ```jsx
  // as 안하면, 마지막 줄에서 "개체가 null인것 같습니다" 라고 에러남.
  // div 태그가 없어서 변수 div에 null 값이 들어올 수도 있어서 에러나는 것.
  const div = document.querySelector("div") as HTMLDivElement;
  div.innerHTML = "asdf";
  ```

  ```jsx
  // non-null연산자로도 해결이 가능하다
  const div = document.querySelector("div")!;
  div.innerHTML = "asdf";

  // or

  const div = document.querySelector("div");
  div!.innerHTML = "asdf";
  ```

</details>

<details>
<summary><strong>Q. 타입 단언과 강제 형변환은 같은 개념인가요?</strong></summary>

- 타입 단언은 강제 형변환과 다른 개념입니다. **강제 형변환**은 실제로 데이터 자료형을 변환하지만, **타입 단언**은 실제 값을 변환하지 않고 타입만 특정 타입이라고 컴파일러에게 주장하는 것입니다.

</details>

<details>
<summary><strong>Q. 타입 단언을 남발하면 안되는 이유는 무엇인가요?</strong></summary>

- 타입 단언을 남발하면 **타입 안전성**이 깨지기 때문입니다. 타입 단언은 컴파일러에게 타입 검사를 포기하도록 강제하기 때문에, 실제 값이 달라도 컴파일 단계에서 에러가 나지 않아 런타임에서 예기치 못한 에러가 발생할 수 있습니다. 따라서 타입 단언은 정말 확실한 경우나 `unknown` 타입을 좁힐 때만 사용하고, 나머지 상황에서는 **타입 가드**를 사용해 타입 안전성을 유지하는 것이 좋습니다.

</details>

<details>
<summary><strong>Q. 타입 가드에 대해 설명해주세요.</strong></summary>

- **타입 가드**는 조건문을 활용해 타입을 좁혀 에러를 줄이는 방어 코드 기법입니다. 전용 문법이 따로 있는 것이 아니라 일반 조건문으로도 구현할 수 있습니다. 자주 사용되는 키워드로는 일반 타입 체킹에 **`typeof`**, 클래스 체킹에 **`instanceof`**, 배열 체킹에 **`Array.isArray`**, 객체 속성 체킹에 **`in`** 연산자가 있습니다.

</details>

<details>
<summary><strong>Q. Enum 타입에 대해 설명해주세요.</strong></summary>

- **enum**은 여러 개의 상수값을 하나의 타입으로 묶어서 관리할 수 있게 하는 타입입니다. 타입스크립트에서는 기본적으로 숫자형과 문자열형을 지원합니다.

  ```jsx
  // 숫자 enum은 자동으로 0부터 순서대로 할당된다.
  enum Status {
    Pending,   // 0
    Approved,  // 1
    Rejected,  // 2
  }

  const s: Status = Status.Approved;
  console.log(s); // 1
  ```

  ```jsx
  // 문자열 enum은 명시적으로 값을 지정한다.
  const Role = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST",
  } as const;

  // Role -> "ADMIN" | "USER" | "GUEST"
  type Role = (typeof Role)[keyof typeof Role];
  ```

</details>

<details>
<summary><strong>Q. 리터럴 타입이란 무엇인가요?</strong></summary>

- **리터럴 타입**은 값 자체를 타입으로 가지는 타입으로, 특정 값 하나만 허용합니다.

  ```jsx
  // 일반 타입 vs 리터럴 타입
  let a: string = "Hello";
  a = "World"; // ✅ 가능 (string이면 뭐든 가능)

  let b: "Hello" = "Hello";
  b = "World"; // ❌ 오류! "Hello"만 가능
  ```

  ```jsx
  // 숫자 리터럴
  let count: 3 = 3;
  count = 4; // ❌ 에러 (3만 가능)
  ```

  ```jsx
  // 리터럴 타입의 유니온
  type Direction = "up" | "down" | "left" | "right";

  function move(dir: Direction) {
    console.log(dir);
  }

  move("up");    // ✅
  move("right"); // ✅
  move("back");  // ❌ Error
  ```

</details>

## 유틸리티 타입 코딩

- 맵드 타입 기반

<details>
<summary><strong>Partial&lt;T&gt;</strong></summary>

- 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

  ````tsx
  interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
  }

          type Partial<T> = {
          	[key in keyof T]? : T[key];
          };

          const draft: Partial<Post> = {
          	title: "제목 나중에 짓자",
          	content: "초안..."
          }
          ```
  ````

</details>

<details>
<summary><strong>Required</strong></summary>

- 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

  ```tsx
  interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }

  type Required<T> = {
    [key in keyof T]-?: T[key];
  };

  // 썸네일URL이 현재 선택인데, 이게 필수로 필요한 경우
  const withThumbnailPost: Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
  };
  ```

</details>

<details>
<summary><strong>Readonly&lt;T&gt;</strong></summary>

- 읽기전용
  - 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

    ````tsx
    interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
    }

          type Readonly<T> = {
          	readonly [key in keyof T]: T[key];
          }

          const readonlyPost: Readonly<Post> = {
          	title: "보호된 게시글 입니다."
          	tags: [],
          	content: "",
          }
          ```
    ````

</details>

<details>
<summary><strong>Pick&lt;T, K&gt;</strong></summary>

- 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

  ```tsx
  interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }

  type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags | 'content' | 'thumbnailURL'
    // 'title' | 'content' extends 'title' | 'tags | 'content' | 'thumbnailURL'
    [key in K]: T[key];
  };

  const legacyPost: Pick<Post, "title" | "content"> = {
    title: "엤날 글",
    content: "옛날 컨텐츠",
  };
  ```

</details>

<details>
<summary><strong>Omit&lt;T, K&gt;</strong></summary>

- 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
  - 비슷하게 Exclude는 유니언에서 특정 타입을 제외할 때 사용합니다.

    ```tsx
    interface Post {
      title: string;
      tags: string[];
      content: string;
      thumbnailURL?: string;
    }

    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
    // T = Post, K = 'title',
    // Pick<Post, Exclude<keyof Post, 'title'>
    // Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
    // Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

    const noTitlePost: Omit<Post, "title"> = {
      content: "",
      tags: [],
      thumbnailURL: "",
    };
    ```

</details>

<details>
<summary><strong>Record&lt;K, V&gt;</strong></summary>

```tsx
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// K extends keyof any
// 어떤 타입이 될지 모르겠는데 적어도 타입 변수 k 에 들어오는 타입은
// 어떤 객체 타입의 키를 추출해 놓은 유니언 타입이야
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;
```

</details>

- 조건부 타입 기반

<details>
<summary><strong>Exclude&lt;T, U&gt;</strong></summary>

- T에서 U를 제거하는 타입
  - 유니언에서 특정 타입을 제외할 때 사용 (Omit은 객체의 특정 속성을 제외한 타입을 만들때 사용)

    ```tsx
    type Exclude<T, U> = T extends U ? never : T;
    // 1단계
    // Exclude<string, boolean> |
    // Exclude<boolean, boolean>

    // 2단계
    // string | never

    // 최종적으로는
    // string

    type A = Exclude<string | boolean, boolean>;
    ```

</details>

<details>
<summary><strong>Extract&lt;T, U&gt;</strong></summary>

- T에서 U를 추출하는 타입

  ```tsx
  type Exract<T, U> = T extends U ? T : never;

  type B = Extract<string | boolean, boolean>;
  ```

</details>

<details>
<summary><strong>ReturnType&lt;T&gt;</strong></summary>

- 함수의 반환값 타입을 추출하는 타입

  ```tsx
  function funcA() {
    return "hello";
  }

  function funcB() {
    return 10;
  }

  type ReturnType<T extends (...any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : never;

  // ReturnA의 타입은 string
  type ReturnA = ReturnType<typeof funcA>;

  // ReturnB의 타입은 number
  type ReturnB = returnType<typeof funcB>;
  ```

</details>
