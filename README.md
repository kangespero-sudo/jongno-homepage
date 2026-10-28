# 종로 홈페이지 배포 실습

첨부 참고 이미지를 바탕으로 제작한 반응형 정적 홈페이지입니다. 비공식 개인 실습이며 종로구청 공식 서비스가 아닙니다.

공개 홈페이지: https://kangespero-sudo.github.io/jongno-homepage/

GitHub 저장소: https://github.com/kangespero-sudo/jongno-homepage

## 구현 기능

- 데스크톱·태블릿·모바일 화면
- 공지사항·고시공고·입법예고·채용공고 탭 및 게시물 상세 보기
- 예시 게시물·생활 서비스 검색, 서비스 안내 전용 검색
- 키보드로 조작할 수 있는 탭과 메뉴
- 생활 안내, 민원서비스, 문화 콘텐츠 안내창

실제 민원·예약 접수, 로그인, AI 모델, 실시간 행정 데이터는 연결되어 있지 않습니다. 입력한 검색어는 서버에 전송하거나 저장하지 않습니다. Google Fonts를 불러오며 사용이 불가능하면 시스템 글꼴로 표시합니다. 인물 사진은 [종로구 공식 홈페이지](https://www.jongno.go.kr/portal/open_content/images/2023_renewal/main/mayor.png?v=20260701001)의 공개 이미지를 사용했습니다.

## 실행

빌드나 패키지 설치가 필요하지 않습니다. `index.html`을 브라우저에서 열거나 정적 웹서버로 이 폴더를 제공하세요.

## GitHub Pages

이 폴더의 파일을 새 저장소의 `main` 브랜치에 올린 뒤 **Settings → Pages → Deploy from a branch → main / (root) → Save**를 선택합니다.

저장소 이름이 `jongno-homepage`일 경우 주소는 `https://kangespero-sudo.github.io/jongno-homepage/`입니다. 실제 배포 완료 여부는 GitHub Pages의 상태에서 확인해야 합니다.

향후 파일을 수정해 main 브랜치에 올리면 GitHub Pages가 갱신됩니다.
