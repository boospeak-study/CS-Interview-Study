# HTTP 문제
## OX 문제
#### HTTP는 클라이언트의 상태를 저장하지 않는 무상태(stateless) 프로토콜이다. (O/X)
<details> <summary>정답 보기</summary> O </details>

#### HTTP 1.1에서는 요청마다 연결을 새로 맺어야 한다. (O/X)
<details> <summary>정답 보기</summary> X (HTTP 1.1에서는 **keep-alive** 헤더를 사용하여 지속적인 연결이 가능함) </details>

#### HTTP 3.0에서는 TCP 대신 UDP 기반을 사용하여 지연 시간을 줄였다. (O/X)
<details> <summary>정답 보기</summary> O </details>

---

## 객관식 문제
#### 다음 중 HTTP 2.0에서 도입된 기술이 아닌 것은?
1. 멀티플렉싱
2. 헤더 압축
3. 파이프라이닝
4. UDP 기반 전송
<details> <summary>정답 보기</summary> 4. UDP 기반 전송 (HTTP 3.0에서 도입됨) </details>

#### HTTP 1.0의 가장 큰 단점으로 올바른 것은?
1. GET 메서드만 지원함
2. 한 번의 요청-응답마다 연결을 새로 맺어야 함
3. 헤더 압축을 지원하지 않음
4. TCP 대신 UDP를 사용하여 신뢰성이 부족함
<details> <summary>정답 보기</summary> 2. 한 번의 요청-응답마다 연결을 새로 맺어야 함 </details>

#### 다음 중 HTTP 3.0에서 도입된 특징은?
1. 멀티플렉싱
2. TCP 기반 전송
3. UDP 기반 QUIC 프로토콜
4. HOL(Head-of-Line) Blocking 문제 발생

<details> <summary>정답 보기</summary> 3. UDP 기반 QUIC 프로토콜 </details>

---

## 서술형 문제
#### HTTP 1.1과 HTTP 2.0의 주요 차이점을 설명하세요.
<details> <summary>정답 보기</summary> HTTP 1.1: Keep-Alive를 통해 지속적인 연결 가능하지만, 하나의 요청이 끝나야 다음 요청을 처리할 수 있음 (HOL Blocking 문제 발생) HTTP 2.0: 멀티플렉싱을 지원하여 단일 TCP 연결에서 여러 요청을 동시에 처리 가능, 헤더 압축 도입으로 성능 향상 </details>

#### HTTP 3.0에서 TCP 대신 UDP를 사용한 이유를 설명하세요.
<details> <summary>정답 보기</summary> HTTP 2.0에서는 단일 TCP 연결을 사용하지만, 네트워크 환경이 불안정할 경우 HOL Blocking(Head-of-Line Blocking) 문제가 발생함. 이를 해결하기 위해 HTTP 3.0에서는 UDP 기반의 QUIC 프로토콜을 사용하여 연결 속도를 높이고 지연 시간을 줄였음. QUIC은 1-RTT 핸드셰이크를 통해 연결을 빠르게 설정하고, 패킷 손실이 있어도 전체 연결이 지연되지 않도록 설계됨. </details>

---
---
---

# HTTP
## HTTP
HTTP는 클라이언트-서버구조로 되어있고, 서버가 클라이언트의 상태를 저장하지 않는 무상태 프로토콜(**stateless**)
또한, 요청을 주고받을 때만 연결을 유지하고 응답 이후 연결이 끊어지는 **비연결성**을 갖음

### HTTP 발전 단계
#### HTTP 0.9
초기모델인 HTTP 0.9는 GET메서드만 지원을 해주었고 HTTP 헤더조차 없었습니다.
#### HTTP 1.0
HTTP 1.0에서는 모든 메서드를 지원하고, 헤더도 추가되었습니다. 또한, 한번의 데이터 전송을 위해 연결과 해제를 해야하는 비효율적인 구조입니다.
#### HTTP 1.1
이를 해결하기 위해 HTTP 1.1에서는 **keep-alive**속성이 헤더에 추가되어 지속적인 연결이 가능해졌습니다. 그래서 여러번의 데이터 전송을 하더라도, 한번의 연결과 한번의 해제만 있으면 됩니다.
#### HTTP 2.0
HTTP 2.0에서는 이전버전의 HOL(Head Of Line Blocking)문제: 무거운 헤더로 인해 이후의 패킷이 영향을 받는 문제를 해결하기 위해 **멀티플렉싱**을 지원하여 단일 TCP연결에도 여러 요청과 응답을 받을 수 있게 되었습니다. 또한, **헤더압축**도 지원합니다.
#### HTTP 3.0
HTTP 2.0의 긴 왕복지연시간(RTT)을 해결하기 위해 TCP기반을 **UDP**기반으로 바꾸어 지연시간을 3-RTT에서 1-RTT로 줄였습니다.
