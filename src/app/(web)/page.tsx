import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Mock data for news items
  const newsItems = [
    {
      id: 1,
      title: "New Season Launch!",
      excerpt: "Get ready for Season 3 with new maps, characters and challenges.",
      imageSrc: "/images/news-image1.jpg",
      link: "/news/1"
    },
    {
      id: 2,
      title: "Tournament Results",
      excerpt: "Check out who dominated in our latest championship series.",
      imageSrc: "/images/news-image2.jpg",
      link: "/news/2"
    },
    {
      id: 3,
      title: "Character Spotlight",
      excerpt: "Meet the newest addition to our roster: BoulderCube.",
      imageSrc: "/images/news-image3.jpg",
      link: "/news/3"
    }
  ];

  // Mock data for leaderboard
  const leaderboardItems = [
    { rank: 1, player: "CubeKing", score: 8750, change: "up" },
    { rank: 2, player: "BlockMaster", score: 8320, change: "up" },
    { rank: 3, player: "SquarePower", score: 7890, change: "down" },
    { rank: 4, player: "CubeCrusher", score: 7650, change: "up" },
    { rank: 5, player: "BoxBoss", score: 7540, change: "down" }
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="banner">
        <Image 
          src="/images/mainbanner.jpg" 
          alt="Banner Image"
          fill 
          priority
          className="banner-image"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div className="banner-content">
          <Link href="/play">
            <button 
              className='cta-button'
              style={{ fontFamily: "'Porkys', sans-serif" }}
            >
              PLAY NOW!
            </button>
          </Link>
        </div>
        <div className="down-arrow hidden md:block">
          <a className="arrow-icon smooth-scroll" href="#news">&#11015;</a>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* News Section */}
      <section className="news" id="news" style={{backgroundImage: "url('/images/news-bg.png')"}}>
        <div className="news-left">
          <h2 className="section-header">QUBE<br /> NEWS</h2>
          <button className="find-more">find more</button>
        </div>
        <div className="news-right">
          <div className="news-grid">
            {newsItems.map(item => (
              <div className="news-item" key={item.id}>
                <h3 className="news-subheader">{item.title}</h3>
                <div className="news-image-wrapper">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.title}
                    width={300}
                    height={160}
                    style={{objectFit: 'cover'}}
                  />
                </div>
                <button className="news-more">+</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Leaderboard Section */}
      <section className="leaderboard" id="leaderboard">
        <div className="leaderboard-wrapper">
          <div className="leaderboard-left">
            <div className="leaderboard-table">
              <div className="leaderboard-row">
                <div className="leaderboard-cell medal-gold cellsize1">1<sup>st</sup></div>
                <div className="leaderboard-cell medal-gold cellsize2">John Doe</div>
                <div className="leaderboard-cell medal-gold cellsize3">3,597</div>
                <div className="leaderboard-cell medal-gold arrow-up">▲12</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell medal-silver cellsize1">2<sup>nd</sup></div>
                <div className="leaderboard-cell medal-silver cellsize2">John Doe</div>
                <div className="leaderboard-cell medal-silver cellsize3">3,597</div>
                <div className="leaderboard-cell medal-silver arrow-up">▲8</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell medal-bronze cellsize1">3<sup>rd</sup></div>
                <div className="leaderboard-cell medal-bronze cellsize2">John Doe</div>
                <div className="leaderboard-cell medal-bronze cellsize3">3,597</div>
                <div className="leaderboard-cell medal-bronze arrow-up">▲5</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">4<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">5<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">6<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">7<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">8<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">9<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
              <div className="leaderboard-row">
                <div className="leaderboard-cell cellsize1">10<sup>th</sup></div>
                <div className="leaderboard-cell cellsize2">John Doe</div>
                <div className="leaderboard-cell cellsize3">3,597</div>
                <div className="leaderboard-cell arrow-up">▲3</div>
              </div>
            </div>
          </div>
          
          <div className="leaderboard-right">
            <h2 className="section-header">LEADERBOARD</h2>
            <div className="leaderboard-nav">
              <a href="#" className="active">GLOBAL</a>
              <span>/</span>
              <a href="#">LOCAL</a>
            </div>
            <div className="globe-container">
              <Image 
                src="/images/cubeglobe.png" 
                alt="world" 
                width={180} 
                height={180} 
                className="cubeglobe"
              />
            </div>
            <button className="find-more">find more</button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Discover Section */}
      <section className="discover footer-overlap" id="discover">
        <div className="discover-content">
          <div className="discover-image">
            <Image 
              src="/images/game-heroes.png"
              alt="Game Heroes"
              width={600}
              height={400}
            />
          </div>
          <div className="discover-text">
            <h2 className="section-header">SMASH! <br />BASH <br />& crASH!! <br />IN THIS QUBIC<br /> CLASH!</h2>
          </div>
        </div>
      </section>
    </>
  )
}
