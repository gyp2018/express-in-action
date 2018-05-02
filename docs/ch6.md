# Chapter 6 API 구축

## 6.1 기본 JSON API 예제
`/timezone?tz=America+Los_Angeles`

```json
{
  "time": "2018-06-09T16:20:00+01:00",
  "zone": "America/Los_Angeles"
}
```

## 6.2 간단한 Express에서 동작하는 JSON API
- [예제 6.1]
- [예제 6.2]

## 6.3 생성, 조회, 업데이트, 삭제 API
- Create
- Rad
- Update
- Delete

### 6.3.1 HTTP 메서드
- GET
- POST
- PUT
- DELETE

- [예제 6.4]

### 6.3.2 CURD 애플리케이션과 HTTP 메서드

## 6.4 API 버전 관리
- [예제 6.5]
- [예제 6.6]
- [예제 6.7]
- [예제 6.8]

## 6.5 HTTP 상태 코드 설정

### 6.5.1 HTTP 상태 코드 설정

### 6.5.2 100 범위

### 6.5.3 200 범위
- 200: 성공(OK)
- 201: 작성됨(CREATED)
- 202: 허용됨(ACCEPTED)
- 204: 콘텐츠 없음(NO CONTENT)

### 6.5.4 300 범위
- 301: 영구적으로 이동됨(MOVED PERMANENTLY)
- 303: 기타 위치 확인(SEE OTHER)
- 307: 임시 리디렉션(TEMPORARY REDIRECT)

### 6.5.5 400 범위
- 401: 권한 없음(UNAUTHORIZED)
- 403: 금지됨(FORBIDDEN)
- 404: 찾을 수 없음(NOT FOUND)
- 기타에러(OTHER ERRORS)

### 6.5.6 500 범위
- 500: 내부 서버 오류
