// Fixed star positions for consistent layout
const FIXED_STAR_POSITIONS = [
  { left: '10%', top: '15%', size: 1 },
  { left: '25%', top: '8%', size: 2 },
  { left: '45%', top: '12%', size: 1 },
  { left: '65%', top: '18%', size: 2 },
  { left: '80%', top: '10%', size: 1 },
  { left: '15%', top: '35%', size: 1 },
  { left: '35%', top: '28%', size: 2 },
  { left: '55%', top: '32%', size: 1 },
  { left: '75%', top: '30%', size: 2 },
  { left: '90%', top: '25%', size: 1 },
  { left: '8%', top: '55%', size: 2 },
  { left: '28%', top: '48%', size: 1 },
  { left: '48%', top: '52%', size: 2 },
  { left: '68%', top: '45%', size: 1 },
  { left: '85%', top: '50%', size: 2 },
  { left: '12%', top: '75%', size: 1 },
  { left: '32%', top: '68%', size: 2 },
  { left: '52%', top: '72%', size: 1 },
  { left: '72%', top: '65%', size: 2 },
  { left: '88%', top: '70%', size: 1 },
  { left: '5%', top: '85%', size: 2 },
  { left: '22%', top: '88%', size: 1 },
  { left: '42%', top: '82%', size: 2 },
  { left: '62%', top: '85%', size: 1 },
  { left: '82%', top: '88%', size: 2 },
  { left: '18%', top: '22%', size: 1 },
  { left: '38%', top: '38%', size: 1 },
  { left: '58%', top: '58%', size: 1 },
  { left: '78%', top: '78%', size: 1 },
  { left: '95%', top: '35%', size: 1 },
  { left: '3%', top: '65%', size: 1 },
  { left: '93%', top: '85%', size: 1 },
  { left: '7%', top: '5%', size: 1 },
  { left: '50%', top: '5%', size: 1 },
  { left: '50%', top: '95%', size: 1 },
  { left: '95%', top: '50%', size: 1 },
  { left: '5%', top: '50%', size: 1 },
  { left: '30%', top: '15%', size: 1 },
  { left: '70%', top: '35%', size: 1 },
  { left: '20%', top: '60%', size: 1 },
  { left: '60%', top: '20%', size: 1 },
  { left: '40%', top: '75%', size: 1 },
  { left: '75%', top: '55%', size: 1 },
  { left: '25%', top: '40%', size: 1 },
  { left: '85%', top: '15%', size: 1 },
  { left: '15%', top: '80%', size: 1 },
  { left: '55%', top: '85%', size: 1 },
  { left: '35%', top: '5%', size: 1 },
  { left: '65%', top: '90%', size: 1 },
  { left: '90%', top: '60%', size: 1 }
];

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fixed positioned stars */}
      {FIXED_STAR_POSITIONS.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full opacity-60"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            background: 'rgba(16, 33, 43, 1)'
          }}
        />
      ))}
    </div>
  );
}
