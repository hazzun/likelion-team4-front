import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import Sidebar from "../../components/NavigationBar/Sidebar";
import SidebarValue from "../../SidebarValue";

const Mainpage = () => {
  return (
    <SidebarValue.Consumer>
      {({ openSidebar }) => (
        <section id={openSidebar ? "mainSection" : "mainSectionSmall"}>
          <Sidebar />
          <div>
            <div class="main-top">
              <div class="video-container">
                <div class="video">
                  <Link to="./watch">
                    <img
                      src={process.env.PUBLIC_URL + "/images/afterlike.jpg"}
                      class="thumbnail"
                      alt="thumbnail"
                    />
                  </Link>
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/starship.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <Link to="./watch" style={{ textDecoration: "none" }}>
                        <h1 class="title">IVE 아이브 'After LIKE' MV</h1>
                      </Link>
                      <p class="channel-name">starshipTV</p>
                      <p class="channel-view">조회수 2.1억회 ⋅ 10개월 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-container2">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/btob.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/ootb.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        [EN] 결국 재입대했습니다 [육군3사관학교]ㅣ전과자 ep.26
                      </h1>
                      <p class="channel-name">ootb STUDIO</p>
                      <p class="channel-view">조회수 433만회 ⋅ 4주 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-container3">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/taeyeon.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/dingo.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        태연(TAEYEON)의 킬링보이스를 라이브로! - I,그대라는 시,
                        만약...
                      </h1>
                      <p class="channel-name">딩고 뮤직 / dingo music</p>
                      <p class="channel-view">조회수 3564만회 ⋅ 1년 전</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-mid">
              <div class="video-container">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/madang.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gomong.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        드디어 만난 김태희 임지연 출연작으로 난리난 초웰메이드
                        드라마, 짜장면도 ...
                      </h1>
                      <p class="channel-name">고몽</p>
                      <p class="channel-view">조회수 371만회 ⋅ 13일 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-container2">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/tiger.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/cha.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        [SUB] 드렁큰 호랑이🐯 어서오세요 ZOO정뱅이의 나라로🥂
                        [차린건 쥐 ...
                      </h1>
                      <p class="channel-name">차린건 쥐뿔도 없지만</p>
                      <p class="channel-view">조회수 1870만회 ⋅ 11개월 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-container3">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/elemental.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gimongcho.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 들으면 기분 좋아지는 픽사 OST 모음 🏰✨ | 𝘗𝘐𝘟𝘈𝘙
                        𝘖𝘚𝘛 | 엘리 ...
                      </h1>
                      <p class="channel-name">기몽초</p>
                      <p class="channel-view">조회수 17만회 ⋅ 3일 전</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-bot">
              <div class="video-container">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/earth.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/tvn.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        지락이들아, 아이돌이 되고 싶어? #highlight
                        #뿅뿅지구오락실2 EP.6
                      </h1>
                      <p class="channel-name">tvN</p>
                      <p class="channel-view">조회수 146만회 ⋅ 2주 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-container2">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/dangerously.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/ttaeing.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        이 노래는 진짜 전설이다...🔥🥹 : Charlie Puth (찰리 푸스)
                        - ...
                      </h1>
                      <p class="channel-name">때잉</p>
                      <p class="channel-view">조회수 2412만회 ⋅ 11개월 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="video-container3">
                <div class="video">
                  <img
                    src={process.env.PUBLIC_URL + "/images/runningman.jpg"}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                  <div class="content">
                    <img
                      src={process.env.PUBLIC_URL + "/images/starship.jpg"}
                      class="channel-icon"
                      alt="channelicon"
                    ></img>
                    <div class="info">
                      <h1 class="title2">
                        윤성빈 손끝에 양세찬 노출사고, 국민 MC 흠뻑쇼,
                        김종국까지..ㄷㄷ #런닝맨 ...
                      </h1>
                      <p class="channel-name">SBS NOW / SBS 공식 채널</p>
                      <p class="channel-view">조회수 98만회 ⋅ 3일 전</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </SidebarValue.Consumer>
  );
};

export default Mainpage;
