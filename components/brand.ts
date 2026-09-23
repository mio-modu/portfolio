/**
 * 회사명 노출 스위치.
 *
 * 위시켓·원티드 같은 중개 플랫폼은 포트폴리오에 회사명·연락처가 드러나면
 * 등록을 거절한다. 그래서 브랜드 표기를 한 곳에 모아 두고 껐다 켠다.
 *
 * 되돌리려면 아래 한 줄만 true 로 바꾸면 된다.
 */
export const SHOW_BRAND = false;

/** 로고 자리에 들어가는 글자. 브랜드를 감추면 중립 표기로 대체된다 */
export const WORDMARK = SHOW_BRAND ? "Lumain" : "Portfolio";

/** 상세 페이지 좌상단 뒤로가기 링크 */
export const HOME_LABEL = SHOW_BRAND ? "← Lumain" : "← HOME";

/** 푸터 우측 이름 줄. 감출 때는 아예 렌더하지 않는다 */
export const BRAND_KO = SHOW_BRAND ? "루메인 (Lumain)" : null;

/** <title> 과 og:title */
export const SITE_TITLE = SHOW_BRAND
  ? "루메인(Lumain) 포트폴리오"
  : "포트폴리오 — AI 서비스 기획·개발";
