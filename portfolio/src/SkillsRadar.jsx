import { memo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts';

const skillsData = [
    { skill: 'JavaScript', value: 85 },
    { skill: 'React', value: 80 },
    { skill: 'Node.js', value: 65 },
    { skill: 'CSS/Tailwind', value: 85 },
    { skill: 'PostgreSQL', value: 65 },
    { skill: 'MongoDB', value: 70 },
    { skill: 'C#', value: 75 },
    { skill: 'TypeScript', value: 30 },
    { skill: 'Git', value: 70 },
];

const SkillsRadar = memo(() => (
    <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-[550px]">
            <p className="text-center font-mono text-xs text-[#00e676] border border-[#00e676]/30 bg-[#00e676]/5 px-4 py-1.5 rounded-full tracking-widest uppercase w-fit mx-auto mb-6">
                Skills Overview
            </p>


            <ResponsiveContainer width="100%" aspect={1.1}>
                <RadarChart
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    tabIndex={-1}
                >
                    <PolarGrid stroke="#00e676" opacity={0.15} />
                    <PolarAngleAxis
                        dataKey="skill"
                        tick={{ fill: '#9ca3af', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                    />
                    <Radar name="Skills" dataKey="value" stroke="#00e676" fill="#00e676" fillOpacity={0.15} />
                    <Tooltip
                        cursor={false}
                        contentStyle={{
                            background: '#0f1614',
                            border: '1px solid rgba(0,230,118,0.2)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontFamily: 'JetBrains Mono',
                            fontSize: '12px',
                        }}
                        formatter={(value) => [`${value}%`, 'Proficiency']}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    </div>
));

export default SkillsRadar;