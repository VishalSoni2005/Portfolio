import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa';

// Skill data
const skills = [
  { name: 'React', icon: <FaReact size={42} color="#61DBFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={42} color="#68A063" /> },
  { name: 'HTML5', icon: <FaHtml5 size={42} color="#E34C26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={42} color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={42} color="#F0DB4F" /> },
];

// Example coding data
const codingData = [
  { date: '2025-01-01', count: 3 },
  { date: '2025-01-05', count: 5 },
  { date: '2025-01-10', count: 2 },
  { date: '2025-02-05', count: 4 },
  { date: '2025-02-15', count: 6 },
  { date: '2025-03-01', count: 1 },
  { date: '2025-03-10', count: 7 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Profile Section */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Hi, I am{' '}
            <span className="font-semibold text-purple-600">Vishal Soni</span> —
            a passionate developer specializing in building modern and scalable
            web applications.
          </p>
        </header>

        {/* Skill Cloud Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200"
              >
                {skill.icon}
                <span className="text-lg font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Heatmap Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            My Coding Activity
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <CalendarHeatmap
              startDate={
                new Date(new Date().setFullYear(new Date().getFullYear() - 1))
              }
              endDate={new Date()}
              values={codingData}
              classForValue={value => {
                if (!value) return 'color-empty';
                if (value.count >= 7) return 'color-github-4';
                if (value.count >= 4) return 'color-github-3';
                if (value.count >= 2) return 'color-github-2';
                return 'color-github-1';
              }}
              tooltipDataAttrs={value => {
                return {
                  'data-tip': value.date
                    ? `${value.date} — ${value.count} commits`
                    : 'No commits',
                };
              }}
              gutterSize={3}
              showWeekdayLabels={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
