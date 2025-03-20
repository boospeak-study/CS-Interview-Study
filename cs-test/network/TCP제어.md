# TCP 제어 문제

## OX 문제

#### TCP에서 오류를 검출하는 방법은 타임아웃 발생과 중복된 ACK 수신 두 가지이다. (O/X)

<details> <summary>정답 보기</summary> O </details>

#### Go-Back-N ARQ에서는 오류가 발생하면 해당 패킷만 재전송한다. (O/X)

<details> <summary>정답 보기</summary> X (오류가 발생하면 이후 모든 패킷을 폐기하고 재전송함) </details>

#### TCP의 혼잡 제어에서 Slow Start는 혼잡 윈도우 크기를 RTT마다 2배씩 지수적으로 증가시킨다. (O/X)

<details> <summary>정답 보기</summary> O </details>

---

## 객관식 문제

#### TCP 오류 제어에서 재전송을 수행하는 ARQ 기법이 아닌 것은?

1. Stop-and-Wait ARQ
2. Go-Back-N ARQ
3. Selective Repeat ARQ
4. Adaptive ARQ
<details> <summary>정답 보기</summary> 4. Adaptive ARQ (내가 지어냄) </details>

#### 슬라이딩 윈도우 기법과 가장 관련이 깊은 것은?

1. 오류 제어
2. 흐름 제어
3. 혼잡 제어
<details> <summary>정답 보기</summary> 2. 흐름 제어 (슬라이딩 윈도우는 송신자와 수신자의 속도를 맞추는 흐름 제어 기법) </details>

#### 다음 중 혼잡 제어 알고리즘이 아닌 것은?

1. AIMD
2. Slow Start
3. Sliding Window
4. Fast Retransmit
<details> <summary>정답 보기</summary> 3. Sliding Window (슬라이딩 윈도우는 흐름 제어 기법임) </details>

#### TCP에서 빠른 재전송(Fast Retransmit)이 실행되는 조건은?

1. 타이머가 만료될 때
2. 중복된 ACK를 3번 받을 때
3. 혼잡 윈도우가 최대 크기에 도달할 때
4. 혼잡 윈도우가 Slow Start Threshold에 도달할 때
<details> <summary>정답 보기</summary> 2. 중복된 ACK를 3번 받을 때 </details>

#### TCP 혼잡 제어 방식 중, Tahoe 방식에 포함되지 않는 것은?

1. 느린 시작 (Slow Start)
2. 혼잡 회피 (Congestion Avoidance)
3. 빠른 재전송 (Fast Retrasmit)
4. 빠른 회복 (Fast Recovery)
<details> <summary>정답 보기</summary> 4. 빠른 회복 (Reno 방식이 Tahoe+빠른 회복을 혼합한 방식임) </details>

---

## 서술형 문제

#### Go-Back-N ARQ와 Selective Repeat ARQ의 차이를 설명하세요.

<details> <summary>정답 보기</summary> Go-Back-N ARQ : 오류가 발생하면 이후 모든 패킷을 폐기하고 재전송, Selective Repeat ARQ : 오류가 발생한 패킷만 선택적으로 재전송하여 효율적 </details>

#### 혼잡 제어와 흐름 제어의 차이를 설명하고, 각각의 대표적인 기법을 1가지씩 예시로 들어보세요.

<details> <summary>정답 보기</summary> 흐름 제어 : 송신자가 수신자의 처리 속도를 고려하여 데이터를 조절 (ex. 슬라이딩 윈도우), 혼잡 제어: 송신자가 네트워크의 혼잡 상태를 고려하여 전송량을 조절 (ex. Slow Start) </details>

#### TCP의 AIMD 알고리즘에 대해 설명하세요.

<details> <summary>정답 보기</summary> AIMD(Additive Increase, Multiplicative Decrease)는 TCP의 혼잡 제어 방식 중 하나로 혼잡이 감지되지 않으면 혼잡 윈도우를 RTT마다 1씩 증가하고, 혼잡이 감지되면 혼잡 윈도우를 절반으로 감소시킨다. 네트워크 상태에 따라 유동적으로 전송 속도를 조절하는 방식이다. </details>

---

---

---

# TCP 제어

## TCP 오류 제어

TCP는 오류를 검출하게 되면 재전송의 방식으로 오류를 제어한다.
TCP가 오류를 검출하는 방법은 2가지가 있다.

- 중복된 ACK 세그먼트를 수신했을 때
- 타임아웃이 발생했을 때

### 재전송 기법

재전송 기법 : ARQ(Auotomatic Repeat Request, 자동 재전송 요구)

- 수신 호스트의 답변(ACK)과 타임아웃을 토대로 문제를 진단
- 문제가 생긴 메시지를 재전송함으로써 신뢰성을 확보하는 방식

#### ARQ의 3가지 방식

- Stop-and-Wait ARQ
- Go-Back-N ARQ
- Selective Repeat ARQ

### Stop-and-Wait ARQ

- 송신 측이 하나의 패킷을 보낸 후, **수신 측의 확인 응답(ACK)**을 받을 때까지 대기하는 방식
- 장점 : 단순하지만, 높은 신뢰성
- 단점 : 네트워크의 이용 효율이 낮아지고 성능 저하

#### Stop-and-Wait의 문제를 해결하는 방법

각 세그먼트에 대한 ACK 세그먼트가 도착하기 전이더라도 여러 세그먼트를 보낼 수 있어야 함

- 파이프라이닝 : 연속해서 메시지를 보낼 수 있는 기술

### Go-Back-N ARQ

- **Stop-and-Wait**의 단점을 보안한 파이프라이닝 전송 방식식
- 송신자는 윈도우 크기(N)만큼 여러 개의 패킷을 연속 전송 가능
- 수신 측에서 오류가 발생하면 이후 **모든 패킷을 폐기하고 재전송**

### Selective Repeat ARQ

- **Go-Back-N**의 비효율성을 해결한 파이프라이닝 전송 방식
- **오류가 발생한 패킷만** 선택적으로 재전송
- 수신 측은 패킷을 버퍼에 저장 후 순서대로 정렬

---

## TCP 흐름 제어

송신 호스트가 수신 호스트의 처리 속도를 고려하여 송수신 속도를 균일하게 유지하는 기능

- **Stop-and-Wait ARQ**를 사용하게 되면 별도의 흐름 제어가 필요하지 않음
  즉, 흐름 제어가 필요한 경우는 **파이프라이닝 전송 방식**
- **Go-Back-N ARQ**, **Selective Repeat ARQ**

### 슬라이딩 윈도우

- 윈도우 : 송신 호스트가 파이프라이닝할 수 있는 최대량
  즉, 윈도우 크기만큼 확인 응답을 받지 않고도 한 번에 전송 가능하다는 의미

송신자는 수신자가 설정한 윈도우 크기(Window Size)만큼 연속적으로 패킷을 보냄
수신자는 수신한 패킷을 확인하고, 윈도우 크기를 업데이트하여 송신자에게 전송 속도를 조절하게 함

---

#### 혼잡(congestion)

많은 트래픽으로 인해 패킷의 처리 속도가 늦어지거나 유실될 우려가 있는 네트워크 상황

## TCP 혼잡 제어

- 송신 호스트가 혼잡한 정도에 맞춰 유동적으로 전송량을 조절하는 기능
- 흐름 제어의 주체가 **수신 호스트**라면 혼잡 제어의 주체는 **송신 호스트**

- 혼잡 윈도우 : 혼잡 없이 전송할 수 있는 데이터양
- 수신 윈도우는 수신 호스트가 헤더로 알려줌
- 혼잡 윈도우는 송신 호스트가 알아서 직접 계산해서 알아내야 함

## 혼잡 제어 알고리즘

### AIMD(Additive Increase/Multiplicative Decrease)방식

합으로 증가, 곱으로 감소

- 혼잡이 감지되지 않는다면, 혼잡 윈도우를 RTT마다 1씩 선형적으로 증가
- 혼잡이 감지되면, 혼잡 윈도우를 절반으로 떨어뜨림
  위의 과정을 반복

### 느린 시작 알고리즘 (Slow Start)

- 혼잡 윈도우를 1부터 시작해 문제 없이 수신된 ACK 세그먼트 하나당 1씩 증가시키는 방식
- 혼잡 윈도우는 RTT마다 2배씩 지수적으로 증가 -> 초기 전송 속도 빠른 확보
- 혼잡 윈도우가 **Slow Start Threshold**에 도달하면 **혼잡 회피 알고리즘**으로 전환
- 만약, 패킷 손실이 발생하면, 혼잡 윈도우를 줄이고 다시 **Slow Start**를 시작

### 혼잡 회피 알고리즘

**Slow Start**가 끝난 후, 네트워크가 혼잡해지는 것을 방지하기 위해 느리게(혼잡 윈도우를 선형적으로) 증가시키는 방식

- RTT마다 혼잡 윈도우를 1MSS씩 선형적으로 증가
- 만약, 패킷 손실이 발생하면, 혼잡 윈도우를 줄이고 다시 **Slow Start**를 시작

### 빠른 재전송 알고리즘

패킷이 손실되었을 때, 타이머가 만료되기 전에 빠르게 재전송하는 기법
TCP는 중복된 ACK가 **3번 연속**으로 오면 패킷이 손실되었다고 판단하고 해당 패킷을 즉시 재전송함

### 빠른 회복 알고리즘

패킷 손실이 발생했지만 완전히 **Slow Start**로 돌아가지 않고 **혼잡 회피 알고리즘**에서 복구하는 기법
중복 ACK 3번을 받은 경우, 혼잡 윈도우를 줄인 후, 선형적으로 증가시키면서 전송 속도를 회복

즉, 중복된 ACK가 3번 연속받게 되면 **빠른 재전송 알고리즘**과 **빠른 회복 알고리즘**을 실행
