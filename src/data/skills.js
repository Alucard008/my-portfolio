// Material-UI Icons
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ApiIcon from '@mui/icons-material/Api';
import SmartToyIcon from '@mui/icons-material/SmartToy';

// React Icons - Font Awesome
import {
  FaDatabase,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaDocker,
  FaAws,
  FaGoogle,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

// React Icons - Simple Icons
import {
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiHuggingface,
  SiOpenai,
  SiApachespark,
  SiJupyter,
  SiPostman,
  SiJenkins,
} from 'react-icons/si';

// React Icons - Bootstrap Icons
import {
  BiBrain,
  BiTargetLock,
  BiGroup,
  BiTrendingUp,
  BiMessageRoundedDetail,
  BiAnalyse,
  BiData,
} from 'react-icons/bi';

const skillsData = {
  'Programming Languages': [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
    { name: 'SQL', icon: <FaDatabase />, level: 85 },
  ],
  'Web Development': [
    { name: 'React.js', icon: <FaReact />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'FastAPI', icon: <SiFastapi />, level: 80 },
    { name: 'Django', icon: <SiDjango />, level: 80 },
    { name: 'NestJS', icon: <SiNestjs />, level: 75 },
    { name: 'REST APIs', icon: <ApiIcon />, level: 85 },
    { name: 'GraphQL', icon: <ApiIcon />, level: 75 },
  ],
  'ML & Data Analysis': [
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
    { name: 'PyTorch', icon: <SiPytorch />, level: 80 },
    { name: 'Pandas', icon: <SiPandas />, level: 90 },
    { name: 'NumPy', icon: <SiNumpy />, level: 85 },
    { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 85 },
    { name: 'Hugging Face', icon: <SiHuggingface />, level: 80 },
    { name: 'OpenAI API', icon: <SiOpenai />, level: 85 },
    { name: 'NLP', icon: <BiBrain />, level: 80 },
    { name: 'Computer Vision', icon: <BiTargetLock />, level: 75 },
    { name: 'RAG Systems', icon: <SmartToyIcon />, level: 85 },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', icon: <FaAws />, level: 75 },
    { name: 'GCP', icon: <FaGoogle />, level: 70 },
    { name: 'Docker', icon: <FaDocker />, level: 75 },
    { name: 'Jenkins', icon: <SiJenkins />, level: 70 },
    { name: 'CI/CD', icon: <BuildIcon />, level: 75 },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'Redis', icon: <SiRedis />, level: 75 },
    { name: 'MySQL', icon: <SiMysql />, level: 80 },
  ],
  'Big Data & Analytics': [
    { name: 'Apache Spark', icon: <SiApachespark />, level: 75 },
    { name: 'Hadoop', icon: <DataObjectIcon />, level: 70 },
    { name: 'Data Visualization', icon: <BiAnalyse />, level: 80 },
    { name: 'ETL Pipelines', icon: <BiData />, level: 75 },
  ],
  'Tools & Version Control': [
    { name: 'Git & GitHub', icon: <FaGithub />, level: 90 },
    { name: 'VS Code', icon: <CodeIcon />, level: 85 },
    { name: 'Jupyter Notebooks', icon: <SiJupyter />, level: 90 },
    { name: 'Postman', icon: <SiPostman />, level: 80 },
  ],
  'Soft Skills': [
    { name: 'Strategic Mindset', icon: <BiTargetLock />, level: 90 },
    { name: 'Collaboration', icon: <BiGroup />, level: 85 },
    { name: 'Ownership', icon: <FaLightbulb />, level: 90 },
    { name: 'Fast Learning', icon: <FaRocket />, level: 95 },
    { name: 'Communication', icon: <BiMessageRoundedDetail />, level: 85 },
    { name: 'Critical Thinking', icon: <BiBrain />, level: 90 },
    { name: 'Problem Solving', icon: <BiTrendingUp />, level: 90 },
    { name: 'Leadership', icon: <FaUsers />, level: 80 },
  ],
  Languages: [
    { name: 'English (C1)', icon: <LanguageIcon />, level: 90 },
    { name: 'Urdu (Native)', icon: <LanguageIcon />, level: 100 },
    { name: 'Punjabi (Native)', icon: <LanguageIcon />, level: 100 },
    { name: 'French (A1)', icon: <LanguageIcon />, level: 30 },
  ],
};

export default skillsData;
