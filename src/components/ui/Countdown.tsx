import { useCountdown } from '@/hooks/useCountdown';

export default function Countdown() {
  const timeLeft = useCountdown('2026-02-17T00:00:00');

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

      {/* Ellipse 1 - Right */}
      <div style={{
        position: 'absolute',
        width: '340px',
        height: '340px',
        left: 'calc(50% - 170px + 360px)',
        top: '152px',
        background: '#FFDC41',
        opacity: 0.3,
        borderRadius: '50%'
      }} />

      {/* Ellipse 2 - Left */}
      <div style={{
        position: 'absolute',
        width: '340px',
        height: '340px',
        left: 'calc(50% - 170px - 360px)',
        top: '152px',
        background: '#FFDC41',
        opacity: 0.5,
        borderRadius: '50%'
      }} />

      {/* Ellipse 3 - Center */}
      <div style={{
        position: 'absolute',
        width: '340px',
        height: '340px',
        left: 'calc(50% - 170px)',
        top: '152px',
        background: '#FFDC41',
        opacity: 0.7,
        borderRadius: '50%'
      }} />

      {/* Days - Number */}
      <div style={{
        position: 'absolute',
        width: '106px',
        height: '92px',
        left: 'calc(50% - 53px - 360px)',
        top: '242px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '60px',
        lineHeight: '92px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        {timeLeft.days}
      </div>

      {/* Hours - Number */}
      <div style={{
        position: 'absolute',
        width: '64px',
        height: '92px',
        left: 'calc(50% - 32px)',
        top: '242px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '60px',
        lineHeight: '92px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        {timeLeft.hours}
      </div>

      {/* Minutes - Number */}
      <div style={{
        position: 'absolute',
        width: '69px',
        height: '92px',
        left: 'calc(50% - 34.5px + 360.5px)',
        top: '242px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '60px',
        lineHeight: '92px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        {timeLeft.minutes}
      </div>

      {/* Days Label */}
      <div style={{
        position: 'absolute',
        width: '95px',
        height: '61px',
        left: 'calc(50% - 47.5px - 359.5px)',
        top: '324px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '61px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        Days
      </div>

      {/* Hours Label */}
      <div style={{
        position: 'absolute',
        width: '117px',
        height: '61px',
        left: 'calc(50% - 58.5px + 0.5px)',
        top: '324px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '61px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        Hours
      </div>

      {/* Mins Label */}
      <div style={{
        position: 'absolute',
        width: '91px',
        height: '61px',
        left: 'calc(50% - 45.5px + 360.5px)',
        top: '324px',
        fontFamily: 'Bodoni Moda, serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '61px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        Mins
      </div>
    </div>
  );
}
