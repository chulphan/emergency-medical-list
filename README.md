# 응급실 진료항목 제공 프로젝트

## 만들게 된 계기

이 프로젝트는 어느 주말 오후 운동을 하다가 다친 내가 겪었던 불편함을 해소하고자 기획하게 됨.

당시 동네에 있는 한 대학병원 응급실을 찾아갔는데, 코랑 치아 모두 진료해줄 수는 없다고 함.

혹시 그런 병원이 어디있는지 알려달라고 했으나, 그런거까지는 모른다고 함.

당시 같이 가주었던 친구가 119에 까지 전화를 해서 겨우 알아내게 되었음.

이런 웹 애플리케이션이 있으면 다른 사람들도 덜 해매지 않을까 해서 만들려고 함.

## 사용된 기술

- [x] React.js

- [x] Apollo(GraphQL)

- [x] Express.js

- [x] BootStrap

- [x] python(requests)

- [x] MongoDB

## 추가해야 할 기능(ToDo)

- [x] 병원 목록을 불러오는 API.(병원 목록을 크롤링해서 DB에 저장하는 것으로 대체)

- [x] 리스트에 병원 이름, 전화번호, 진료항목, 주소를 표시.

- [ ] 지역별 필터

- [ ] 검색(병원)

- [x] API 를 통해 불러온 병원 목록을 DB에 저장

- [x] API 를 통해 불러운 병원 목록 중 병원 id(hospital_id) 를 이용해서 해당 병원의 진료목록을 가져오는 API (크롤링시 해당 RESTAPI만 따로 호출해서 DB의 같은 테이블에 저장하는 것으로 대체)

- [x] 병원 진료목록을 DB에 저장

- [ ] 병원 이미지...???

- [ ] CSS 필요

  - [ ] 글씨 색

  - [ ] 리스트 색

  - [ ] 글씨 배치

- [ ] 사이트 이용시 불편사항 또는 건의사항 등록할 수 있는 게시판 필요(?..사실 필요한지 잘 모르겠음)
