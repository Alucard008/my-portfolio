// React Icons - Font Awesome
import { FaPython, FaJs, FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';

// React Icons - Simple Icons
import {
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiFastapi,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiPytorch,
  SiOpenai,
  SiLangchain,
  SiTerraform,
  SiGithubactions,
  SiAmazon,
} from 'react-icons/si';

import { BiGitCompare } from 'react-icons/bi';
import ApiIcon from '@mui/icons-material/Api';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HubIcon from '@mui/icons-material/Hub';
import PsychologyIcon from '@mui/icons-material/Psychology';

const skillsData = {
  'AI & LLM': [
    { name: 'Agentic AI Systems', icon: <SmartToyIcon /> },
    { name: 'Multi-Agent Workflows', icon: <HubIcon /> },
    { name: 'RAG', icon: <PsychologyIcon /> },
    { name: 'LangChain', icon: <SiLangchain /> },
    { name: 'LangGraph', icon: <HubIcon /> },
    { name: 'Prompt Engineering', icon: <SmartToyIcon /> },
    { name: 'LLM Evaluation & Monitoring', icon: <PsychologyIcon /> },
    { name: 'Fine-tuning & Embeddings', icon: <SiPytorch /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'LLM APIs (OpenAI, Anthropic, Bedrock)', icon: <SiOpenai /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'NestJS', icon: <SiNestjs /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'REST APIs', icon: <ApiIcon /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
  ],
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js (SSR)', icon: <SiNextdotjs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'FAISS (vector search)', icon: <PsychologyIcon /> },
    { name: 'SQL Schema Design', icon: <BiGitCompare /> },
  ],
  'Cloud & DevOps': [
    { name: 'AWS (Lambda, Bedrock)', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'GitHub Actions / CI/CD', icon: <SiGithubactions /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Microservices', icon: <SiAmazon /> },
  ],
};

export default skillsData;
