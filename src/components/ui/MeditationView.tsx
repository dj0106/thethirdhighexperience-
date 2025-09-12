export default function MeditationView() {
  return (
    <div className="relative z-10" style={{
      position: 'absolute',
      width: '1060px',
      height: '492px',
      left: 'calc(50% - 530px)',
      top: '207px'
    }}>
      {/* MahaShivratri 2026 Title */}
      <h1 style={{
        position: 'absolute',
        width: '584px',
        height: '92px',
        left: 'calc(50% - 292px)',
        top: '0px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '60px',
        lineHeight: '92px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        MahaShivratri 2026
      </h1>

      {/* Meditation Image with Concentric Circles */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        left: 'calc(50% - 200px)',
        top: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Outermost Circle */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 220, 65, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Second Circle */}
          <div style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'rgba(255, 220, 65, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Third Circle */}
            <div style={{
              position: 'absolute',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'rgba(255, 220, 65, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Fourth Circle */}
              <div style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'rgba(255, 220, 65, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Inner Circle */}
                <div style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(255, 220, 65, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Meditation Silhouette */}
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    {/* Shiva meditation silhouette */}
                    <g fill="rgba(16, 33, 43, 1)">
                      {/* Head with hair/crown */}
                      <ellipse cx="50" cy="25" rx="12" ry="15"/>
                      <path d="M38 20 Q42 15 46 18 Q50 12 54 18 Q58 15 62 20 Q58 25 54 22 Q50 28 46 22 Q42 25 38 20"/>

                      {/* Body/torso */}
                      <ellipse cx="50" cy="50" rx="15" ry="20"/>

                      {/* Arms in meditation pose */}
                      <ellipse cx="35" cy="45" rx="8" ry="15" transform="rotate(-30 35 45)"/>
                      <ellipse cx="65" cy="45" rx="8" ry="15" transform="rotate(30 65 45)"/>

                      {/* Legs in lotus position */}
                      <ellipse cx="40" cy="70" rx="12" ry="8" transform="rotate(-15 40 70)"/>
                      <ellipse cx="60" cy="70" rx="12" ry="8" transform="rotate(15 60 70)"/>

                      {/* Hands in mudra */}
                      <circle cx="42" cy="55" r="4"/>
                      <circle cx="58" cy="55" r="4"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
