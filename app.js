'use strict';
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const newsData={
 '공지사항':[
 ['2026년 제16차 건축자산전문위원회 심의결과 공지','2026.10.28','종로의 건축자산을 보존하기 위한 전문위원회 심의결과 안내 예시입니다. 실제 심의 내용과 일정은 종로구 공식 홈페이지의 공지사항을 확인해 주세요.'],
 ['2026년 아동·청소년 관련기관 취업제한 점검 안내','2026.10.27','아동·청소년 관련기관 점검 안내 예시입니다. 구체적인 대상과 서류는 공식 공고에서 확인할 수 있습니다.'],
 ['2026년 제20차 건축안전전문위원회 개최 일정 안내','2026.10.27','건축안전전문위원회 개최 일정 안내 예시입니다. 이 페이지의 내용은 배포 연습을 위한 샘플입니다.'],
 ['가을 문화 산책, 종로에서 만나는 특별한 하루','2026.10.26','역사와 문화가 함께하는 종로의 골목을 걸어 보세요. 행사 일정과 참여 방법은 공식 홈페이지에서 확인해 주세요.'],
 ['우리 동네 공영주차장 이용 안내','2026.10.26','공영주차장 위치와 이용요금은 운영 상황에 따라 달라질 수 있습니다. 공식 홈페이지에서 최신 정보를 확인해 주세요.'],
 ['주민과 함께 만드는 더 깨끗한 종로','2026.10.25','깨끗한 생활환경을 위한 분리배출과 생활쓰레기 배출 안내 예시입니다.']
 ],
 '고시공고':[
 ['도시계획시설 사업 실시계획 열람 공고','2026.10.28','도시계획 관련 열람 공고 예시입니다. 실제 공고문과 의견제출 기한은 공식 홈페이지에서 확인해 주세요.'],
 ['종로구 공공시설 운영에 관한 안내 공고','2026.10.27','공공시설 운영 안내를 위한 샘플 공고입니다.'],
 ['도로점용 허가 관련 공시송달 공고','2026.10.26','도로점용 관련 공고를 표시하는 예시입니다.'],
 ['지역상권 활성화 지원사업 참여 안내','2026.10.25','지역상권 지원사업에 관한 샘플 안내입니다.'],
 ['공유재산 사용허가 관련 공고','2026.10.24','공유재산 관련 공고 예시입니다.'],
 ['주민 의견 수렴을 위한 열람 안내','2026.10.23','주민 의견 수렴 안내 예시입니다.']
 ],
 '입법예고':[
 ['종로구 주민 생활 편의 증진 조례안 입법예고','2026.10.28','주민 생활 편의 관련 조례안 예시입니다. 실제 입법예고가 아니며 법적 효력이 없습니다.'],
 ['공공시설 운영 조례 일부개정안 예고','2026.10.27','공공시설 운영 조례에 대한 샘플 입법예고입니다.'],
 ['문화예술 지원에 관한 조례안 의견 수렴','2026.10.26','문화예술 지원 조례의 의견 수렴 예시입니다.'],
 ['환경보전 조례 일부개정안 입법예고','2026.10.25','환경보전 조례에 대한 예시입니다.'],
 ['주차장 설치 및 관리 조례안 안내','2026.10.24','주차장 관련 조례 예시입니다.'],
 ['지역 공동체 활성화 조례안 안내','2026.10.23','지역 공동체 조례 안내 예시입니다.']
 ],
 '채용공고':[
 ['주민과 함께할 기간제근로자 채용 안내','2026.10.28','홈페이지 구현용 채용공고 예시입니다. 실제 채용이 아니며 지원 서류를 받지 않습니다.'],
 ['문화시설 운영지원 인력 모집 안내','2026.10.27','문화시설 운영지원 채용공고 샘플입니다.'],
 ['공원 관리 분야 기간제근로자 모집','2026.10.26','공원 관리 분야 채용 예시입니다.'],
 ['생활환경 정비사업 참여자 모집','2026.10.25','생활환경 정비사업 관련 샘플 모집 공고입니다.'],
 ['공공도서관 운영 보조인력 모집','2026.10.24','공공도서관 운영 채용 예시입니다.'],
 ['지역 일자리 사업 참여 안내','2026.10.23','지역 일자리 사업 샘플 안내입니다.']
 ]
};
const services={
 '민원서류 안내':'주민등록등본, 가족관계증명서 등 각종 민원서류의 발급 방법을 확인할 수 있습니다. 이 실습 페이지에서는 서류를 발급하거나 개인정보를 입력받지 않습니다.',
 '통합예약':'교육·문화 프로그램, 체육시설, 공공공간 등 종로의 다양한 예약 서비스를 공식 홈페이지에서 찾아보세요. 실제 예약은 공식 서비스에서 진행됩니다.',
 '공영주차장':'종로구 공영주차장의 위치, 운영시간, 요금을 공식 홈페이지에서 확인해 주세요. 이 페이지는 실시간 주차 현황을 제공하지 않습니다.',
 '복지혜택':'어르신, 아동·청소년, 장애인, 가족을 위한 지원 정보를 공식 홈페이지의 복지정보 메뉴에서 찾아보세요. 지원 대상과 기준은 각 공고를 확인해 주세요.',
 '생활불편 신고':'도로, 청소, 소음 등 생활 속 불편사항의 접수 방법을 공식 홈페이지에서 확인하세요. 이 실습 페이지에서는 신고를 접수하지 않습니다.',
 '일자리 정보':'종로구의 채용 소식과 일자리 지원 정보를 공식 홈페이지에서 확인해 주세요. 채용공고 탭에서는 화면 구현용 예시를 볼 수 있습니다.',
 '쓰레기 배출 안내':'생활쓰레기, 음식물쓰레기, 재활용품, 대형폐기물의 배출 방법은 지역과 품목에 따라 다릅니다. 공식 홈페이지의 생활정보에서 정확한 기준을 확인해 주세요.',
 '재난안전':'기상특보, 재난 대피요령, 안전시설에 관한 정보는 공식 기관의 최신 안내를 확인해 주세요. 이 페이지는 재난 상황을 실시간으로 표시하지 않습니다.',
 '조직도':'종로구의 부서 구성과 담당 업무는 공식 홈페이지의 행정정보·조직도 메뉴에서 확인할 수 있습니다.',
 '직원검색':'담당 직원과 부서의 연락처는 공식 홈페이지에서 검색해 주세요. 이 데모에서는 실제 직원 정보를 수집하거나 저장하지 않습니다.',
 '오시는 길':'종로구청의 현재 청사 위치와 대중교통 안내는 공식 홈페이지의 오시는 길 메뉴에서 확인해 주세요.',
 '부서안내':'민원, 복지, 문화, 도시, 안전 등 업무별 담당 부서는 공식 홈페이지에서 확인해 주세요.',
 '사이트 안내':'이 웹사이트는 사용자가 제공한 종로구청 홈페이지 이미지를 참고한 개인 배포 실습 결과물입니다. 공공기관의 공식 홈페이지가 아니며 실제 행정 업무를 처리하지 않습니다. 검색은 페이지에 포함된 예시 소식과 서비스 정보만 대상으로 합니다. 사진은 제공된 참고 이미지에서 화면 일부를 표시했습니다.',
 '언어 안내':'현재 한국어 화면을 제공합니다. 외국어 행정 안내는 종로구 공식 홈페이지의 언어 선택 기능을 이용해 주세요.',
 '종로에 오신 것을 환영합니다':'역사와 오늘이 함께하는 종로. 문화와 일상, 이웃과 공간을 연결하는 홈페이지 디자인 실습입니다. 주민에게 필요한 정보를 쉽고 편하게 찾을 수 있도록 구성했습니다.',
 '종로 문화 산책':'고궁과 골목, 박물관과 작은 문화공간을 따라 종로의 이야기를 만나보세요. 행사 정보와 방문 안내는 종로구 공식 홈페이지에서 확인해 주세요.',
 '역사와 문화가 숨 쉬는 종로':'경복궁, 창덕궁, 북촌과 인사동 등 오랜 시간의 흔적을 품은 종로의 공간을 찾아보세요. 관람시간과 예약 여부는 각 시설의 공식 안내를 확인해 주세요.',
 '우리 동네 초록 쉼터':'바쁜 일상 사이 잠시 쉬어 갈 수 있는 동네 공원과 산책길을 만나보세요. 공식 홈페이지에서 공원과 녹지 공간의 위치를 찾아볼 수 있습니다.'
};
const menus={'종합민원':['민원서류 안내','생활불편 신고','통합예약'],'생활정보':['공영주차장','쓰레기 배출 안내','재난안전'],'복지정보':['복지혜택','일자리 정보'],'도시정보':['공영주차장','우리 동네 초록 쉼터','재난안전'],'행정정보':['조직도','직원검색','부서안내'],'종로소개':['종로에 오신 것을 환영합니다','종로 문화 산책','오시는 길']};
const dialog=$('#detail-dialog');
let currentTab='공지사항', guideMode=false;
function openDialog(title,content){$('#dialog-title').textContent=title;const body=$('#dialog-body');body.replaceChildren();if(typeof content==='string'){const p=document.createElement('p');p.textContent=content;body.append(p);}else body.append(content);if(!dialog.open)dialog.showModal();}
function officialLink(){const p=document.createElement('p'),a=document.createElement('a');a.href='https://www.jongno.go.kr/';a.target='_blank';a.rel='noopener';a.textContent='종로구 공식 홈페이지에서 확인하기 ↗';p.append(a);return p;}
function showInfo(title){openDialog(title,services[title]||'해당 정보는 공식 홈페이지에서 확인해 주세요.');$('#dialog-body').append(officialLink());}
function newsButton(item,featured=false){const b=document.createElement('button'),h=document.createElement('h3'),t=document.createElement('time');h.textContent=item[0];t.textContent=item[1];t.dateTime=item[1].replaceAll('.','-');b.append(h,t);b.addEventListener('click',()=>{const f=document.createDocumentFragment(),date=document.createElement('p'),p=document.createElement('p');date.textContent=`${currentTab} · ${item[1]} · 예시 게시물`;p.textContent=item[2];f.append(date,p,officialLink());openDialog(item[0],f);});return b;}
function renderNews(){const panel=$('#news-panel'),featured=document.createElement('div'),list=document.createElement('div'),badge=document.createElement('span');featured.className='featured-news';list.className='news-list';badge.className='new-dot';badge.textContent='N';featured.append(badge,...newsData[currentTab].slice(0,2).map(n=>newsButton(n,true)));list.append(...newsData[currentTab].slice(2).map(n=>newsButton(n)));panel.replaceChildren(featured,list);}
$$('[data-tab]').forEach((tab,i,tabs)=>{tab.id=tab.id||`tab-${i}`;tab.addEventListener('click',()=>{currentTab=tab.dataset.tab;tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});$('#news-panel').setAttribute('aria-labelledby',tab.id);renderNews();});tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();tabs[next].click();tabs[next].focus();});});
$$('[data-info]').forEach(b=>b.addEventListener('click',()=>showInfo(b.dataset.info)));
function allNews(){const f=document.createDocumentFragment();newsData[currentTab].forEach(n=>f.append(newsButton(n)));openDialog(`${currentTab} 전체 보기`,f);}
$('#all-news').addEventListener('click',allNews);
$('#close-dialog').addEventListener('click',()=>dialog.close());$('#dialog-ok').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
$('#mode-toggle').addEventListener('click',()=>{guideMode=!guideMode;$('#mode-toggle').setAttribute('aria-checked',String(guideMode));$('#mode-toggle').setAttribute('aria-label',guideMode?'일반 검색으로 전환':'서비스 안내 검색으로 전환');$('.search-chip').textContent=guideMode?'안내':'일반';$('#search').placeholder=guideMode?'찾고 싶은 생활 서비스를 입력해 주세요':'궁금한 종로의 소식을 검색해 보세요';$('#standard-label').style.color=guideMode?'#888':'#42358d';$('#guide-label').style.color=guideMode?'#42358d':'#888';$('#search').focus();});
function search(query){query=query.trim();if(!query){openDialog('검색어를 입력해 주세요','예: 주차, 문화, 민원, 복지. 페이지에 포함된 소식과 서비스 안내를 검색합니다.');return;}
 const f=document.createDocumentFragment(),intro=document.createElement('p');intro.textContent=guideMode?'서비스 안내에서 찾은 결과입니다.':'페이지에 포함된 예시 소식과 서비스 안내의 검색 결과입니다.';f.append(intro);let count=0;const terms=query.replaceAll('#','').split(/\s+/).filter(Boolean);const matches=s=>terms.every(t=>s.toLowerCase().includes(t.toLowerCase()));
 Object.entries(services).forEach(([name,description])=>{if(matches(name+' '+description)){const b=document.createElement('button'),tag=document.createElement('span');tag.className='result-type';tag.textContent='서비스';b.append(tag,document.createTextNode(name+' →'));b.addEventListener('click',()=>showInfo(name));f.append(b);count++;}});
 if(!guideMode)Object.entries(newsData).forEach(([category,items])=>items.forEach(item=>{if(matches(item[0]+' '+item[2])){const b=newsButton(item);b.insertAdjacentText('afterbegin',category+' · ');f.append(b);count++;}}));
 if(!count){const p=document.createElement('p');p.textContent='일치하는 결과가 없습니다. 더 짧은 검색어로 다시 검색하거나 공식 홈페이지를 이용해 주세요.';f.append(p,officialLink());}openDialog(`“${query}” 검색 결과 ${count}건`,f);
}
$('#search-form').addEventListener('submit',e=>{e.preventDefault();search($('#search').value);});$$('[data-search]').forEach(b=>b.addEventListener('click',()=>{$('#search').value=b.dataset.search;search(b.dataset.search);}));
function guide(){const f=document.createDocumentFragment(),p=document.createElement('p');p.textContent='궁금한 주제를 선택해 주세요. 이 안내는 미리 작성된 정보를 보여주는 기능입니다.';f.append(p);['민원서류 안내','공영주차장','복지혜택','일자리 정보','쓰레기 배출 안내','오시는 길'].forEach(name=>{const b=document.createElement('button');b.textContent=name+' →';b.addEventListener('click',()=>showInfo(name));f.append(b);});openDialog('종로 생활 안내',f);}
$('#open-guide').addEventListener('click',guide);$('.floating-guide').addEventListener('click',guide);
function closeMenu(){$('#mega-menu').hidden=true;$$('[data-menu]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-expanded','false');});$('.mobile-menu').setAttribute('aria-expanded','false');}
$$('[data-menu]').forEach(b=>{b.setAttribute('aria-expanded','false');b.addEventListener('click',()=>{const was=b.classList.contains('active');closeMenu();if(was)return;const menu=$('#mega-menu'),heading=document.createElement('h2'),links=document.createElement('div');heading.textContent=b.dataset.menu;menus[b.dataset.menu].forEach(name=>{const child=document.createElement('button');child.textContent=name+' ↗';child.addEventListener('click',()=>{closeMenu();showInfo(name);});links.append(child);});menu.replaceChildren(heading,links);menu.hidden=false;b.classList.add('active');b.setAttribute('aria-expanded','true');});});
$('.mobile-menu').addEventListener('click',()=>{const menu=$('#mega-menu');if(!menu.hidden){closeMenu();return;}const h=document.createElement('h2'),links=document.createElement('div');h.textContent='전체 메뉴';Object.keys(menus).forEach(category=>{const b=document.createElement('button');b.textContent=category;b.addEventListener('click',()=>{closeMenu();openDialog(category,menus[category].join(' · '));$('#dialog-body').append(officialLink());});links.append(b);});menu.replaceChildren(h,links);menu.hidden=false;$('.mobile-menu').setAttribute('aria-expanded','true');});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});renderNews();
