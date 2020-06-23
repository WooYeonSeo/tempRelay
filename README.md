## 프리윌린 사전과제

## 🎈실행

```bash
# root 폴더에서 시작
cd client
yarn start

```

=> http://localhost:8000/

```bash
# root 폴더에서 시작
cd server
yarn start:dev

```

=> http://localhost:4000/graphql

## 🥎 CheckList

- ✅ localhost로 http 통신을 통해 불러오기 - data 조회 서버 graphQL로 구축
- ✅ 화면 마크업
- ✅ 문제리스트에서 문제를 노출
- ✅ 문제리스트에서 선택(`Active`)한 문제가 없을 경우 placeholder 노출
- ✅ 유사문항 버튼 클릭 시 유사문제 리스트에 문제 목록 노출
- ✅ 유사문항 클릭 시 파란색으로 토글 - 한개만 선택 가능
- ✅ 삭제 : 해당 문제 삭제, 유사문제 리스트 초기화
- ✅ 추가 : 선택된 유사문항 하단에 문제 추가, `active` 그대로 유지
- ✅ 교체 : 선택된 유사문항과 문항 교체
- ✅ 유사문제 리스트에 unitName 노출
- ✅ 상태관리 : Apollo-client

- [ ] 성능 향상을 위해 최적화 작업

## 📚 사용 기술

- Server : Typescript, GraphQL, nodejs
- Client : Typescript, React, Apollo-Client, Styled-Component
