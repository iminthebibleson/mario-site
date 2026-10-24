
export default function Switch() {
  return (
    <div className="switch-wrapper">
      <div className="switch">
        <div className="body">
          <div className="volume" />
          <div className="screen">
            <div className="logo">
              <div className="icon">
                <div className="icon-part left" />
                <div className="icon-part right" />
              </div>
              <h1>
                <img src={'/HeroBanner.png'} className="select-none" ></img>    
              </h1>
            </div>
          </div>
        </div>

        <div className="joy-con left">
          <div className="button-group">
            <div className="button arrow up" />
            <div className="button arrow right" />
            <div className="button arrow down" />
            <div className="button arrow left" />
          </div>
          <div className="stick" />
          <div className="select-btn" />
          <div className="capture" />
          <div className="shoulder l" />
        </div>

        <div className="joy-con right font-sans">
          <div className="button-group">
            <div className="button letter" data-letter="X" />
            <div className="button letter" data-letter="A" />
            <div className="button letter" data-letter="B" />
            <div className="button letter" data-letter="Y" />
          </div>
          <div className="stick" />
          <div className="start" />
          <div className="home" />
          <div className="shoulder r" />
        </div>
      </div>
    </div>
  );
}