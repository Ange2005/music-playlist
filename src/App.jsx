import "./style.css";

const songs = [
  ["Kalimutan Ka","Skusta Clee","https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021b463d79605f00026aa6bf1e"],
  ["Give Your Heart a Break","Demi Lovato","https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0283fc43cfc25d836e17f8cc30"],
  ["Give Me Everything","Pitbull, AFROJACK, Ne-Yo, Nayer","https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e021dc7483a9fcfce54822a2f19"],
  ["Middle","DJ Snake, Bipolar Sunshine","https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02212d776c31027c511f0ee3bc"],
  ["Va Va Voom","Nicki Minaj","https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ef9ad61e2a4f15606fd4ab15"],
  ["Talking Body","Tove Lo","https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025bb90a21a829668b348fa440"],
  ["Judas","Lady Gaga","https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a5d31644260279be8d0c46c0"],
  ["Die Young","Kesha","https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02edcab0fe7cf29d17751dad18"]
];

function App() {
  
  return (
    <div className="app">

      <aside>
        <h2>♫ MyMusic</h2>
        <p>⌂ Home</p>
        <p>⌕ Search</p>
        <p>♡ Liked Songs</p>
      </aside>

      <main>

        <header>
          <input placeholder="Search songs or artists..." />
          <span>Jaja ♡</span>
        </header>

        <section className="hero">
          <img src={songs[0][2]} />

          <div>
            <small>PLAYLIST</small>
            <h1>My Favorite Songs</h1>
            <p>A collection of songs I love.</p>
          </div>
        </section>

        <div className="controls">
          <div className="play">▶</div>
          <span>♡</span>
          <span>•••</span>
        </div>

        {songs.map((s, i) => (
          <div className="song" key={s[0]}>

            <span>{i + 1}</span>

            <div className="title">
              <img src={s[2]} />

              <div>
                <b>{s[0]}</b>
                <small>{s[1]}</small>
              </div>
            </div>

            <span>My Favorites</span>
            <span>♡</span>

          </div>
        ))}

      </main>
    </div>
  );
}

export default App;