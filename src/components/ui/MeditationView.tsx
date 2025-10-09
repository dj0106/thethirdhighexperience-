export default function MeditationView() {
  return (
    <div className="relative z-10" style={{
      position: 'absolute',
      width: '1060px',
      height: '492px',
      left: 'calc(50% - 530px)',
      top: '207px'
    }}>

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
                <div style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(255, 220, 65, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
