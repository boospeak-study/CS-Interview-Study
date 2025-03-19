# TCP & UDP 문제
## OX 문제

#### TCP는 연결 설정 없이 데이터를 전송하는 비연결형(Connectionless) 프로토콜이다. (O/X)
<details> <summary>정답 보기</summary> X (TCP는 **연결형(Connection-oriented)** 프로토콜임) </details>

#### UDP는 패킷의 순서를 보장하지 않는다. (O/X)
<details> <summary>정답 보기</summary> O </details>

#### TCP의 4-way handshake 과정에서 서버는 FIN 요청을 받으면 즉시 연결을 종료한다. (O/X)
<details> <summary>정답 보기</summary> X (서버는 ACK를 먼저 보내고, 남은 데이터를 처리한 후 FIN을 클라이언트에 보냄) </details>

---

## 객관식 문제
#### 다음 중 UDP의 특징이 아닌 것은?
1. 연결 설정이 필요 없다.
2. 신뢰성이 높아 패킷 손실이 거의 없다.
3. 패킷 순서가 보장되지 않는다.
4. 스트리밍, VoIP 등에 주로 사용된다.
<details> <summary>정답 보기</summary> 2. 신뢰성이 높아 패킷 손실이 거의 없다. (UDP는 신뢰성이 낮아 패킷 손실이 발생할 수 있음) </details>

#### TCP의 4-way handshake 과정에서 클라이언트가 마지막으로 보내는 패킷은?
1. SYN
2. FIN
3. SYN + ACK
4. ACK
<details> <summary>정답 보기</summary> 4. ACK </details>

#### TCP와 UDP의 차이에 대한 설명으로 틀린 것은?
1. TCP는 패킷의 순서를 보장하지만, UDP는 순서를 보장하지 않는다.
2. TCP는 신뢰성이 높지만, 속도는 UDP보다 느리다.
3. UDP는 브로드캐스트를 지원하지만, TCP는 지원하지 않는다.
4. TCP는 초기 연결 과정 없이 데이터를 바로 전송한다.
<details> <summary>정답 보기</summary> 4. TCP는 초기 연결 과정 없이 데이터를 바로 전송한다. (TCP는 3-way handshake를 통해 연결을 먼저 설정해야 함) </details>

---

## 서술형 문제
#### TCP의 3-way handshake 과정과 4-way handshake 과정의 차이를 설명하세요.
<details> <summary>정답 보기</summary> 아래 개념 참고
</details>

#### TCP와 UDP의 차이를 설명하세요.
<details> <summary>정답 보기</summary> 아래 개념 참고
</details>

---
---
---

# TCP & UDP

## TCP의 3-way handshake와 4-way handshake
TCP의 연결과정과 해제과정은 각각 **3-way handshake**, **4-way handshake** 과정을 겪습니다.

### 3-way handshake과정
클라이언트가 서버로 SYN를 보내 연결을 요청하고 서버에서 클라이언트로 SYN + ACK를 보냅니다. 이를 클라이언트에서 수신받으면 서버로 ACK를 보내며 TCP가 연결됩니다.

### 4-way handshake과정
클라이언트가 연결을 해제하기 위해 FIN요청을 보냅니다. 서버는 이를 받아 ACK를 보내고 남은 요청들을 처리 후 FIN을 클라이언트에게 보냅니다. 클라이언트가 이를 수신하여 ACK를 서버에게 보내고, 혹시나 지연된 데이터응답이 있을 수 있기에 일정시간 기다린 후 연결을 종료합니다.

---

## TCP와 UDP의 차이
TCP와 UDP는 둘다 OSI 7계층 중 전송계층에 해당하는 프로토콜입니다.
TCP는 **가상회선(Virtual Circuit)**을 사용하고 UDP는 **데이터그램(Datagram)**방식을 사용합니다.

### 가상회선 방식
가상회선 방식의 경우 초기 연결 설정이 필요합니다.
각각의 패킷은 독립적이지 않아서 고장난 링크나 노드를 만나면 새로운 연결을 설정해야 하는 **stateful**방식입니다.

### 데이터그램 방식
데이터그램 방식의 경우 초기 연결 설정을 하지 않습니다.
또한, 각각의 패킷은 독립적으로 포워드하기 때문에 보낸순서와 받는순서가 다를 수 있습니다.
포워딩 과정 중 고장난 링크나 노드를 우회하여 라우팅을 하는 **stateless**방식이지만 인터넷의 경우 라우팅 테이블에 timeout(TTL)을 두어 stateful과 stateless가 공존하는 **soft state**상태입니다.

### 차이 정리

| 특성                 | TCP                           | UDP                                |
|----------------------|-------------------------------|------------------------------------|
| 연결 설정             | 가상회선 방식 (Connection-oriented) | 데이터그램 방식 (Connectionless)       |
| 패킷 순서 보장        | 보장됨 (Ordered delivery)      | 보장되지 않음 (Unordered delivery)   |
| 신뢰성                | 높음 (Reliable)               | 낮음 (Unreliable)                   |
| 속도                  | 상대적으로 느림               | 상대적으로 빠름                      |
| 사용 예시             | 파일 전송, 이메일 등         | 스트리밍, 동영상 전송 등             |
| 브로드캐스트 지원     | 지원 안 함                    | 지원 함                              |

