import Card from "../Card";
import Section from "./Section";

const web = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    alt: "Typescript",
  },
  {
    src: "https://i.namu.wiki/i/X7RPRZJiL_bDk-b5yfaeCqEaINp3iwm7ngVhzN9LDg4hNjz0Bs3QTo7pgbCfGW3xp_sQZxMGUfnxBAXGNFwGKw.svg",
    alt: "NestJS",
  },
  {
    src: "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
    alt: "Next.js",
  },
  {
    src: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    alt: "React",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    alt: "React Native",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    alt: "Vue.js",
  },
  {
    src: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
    alt: "Tailwind CSS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    alt: "Bootstrap",
  },
  {
    src: "https://avatars.githubusercontent.com/u/103283236?v=4",
    alt: "Jest",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png",
    alt: "Vite",
  },
];

const java = [
  {
    src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    alt: "Java",
  },
  {
    src: "https://junit.org/junit4/images/junit5-banner.png",
    alt: "JUnit",
  },
];

const cSharp = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
    alt: "C#",
  },
  {
    src: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63064f1fedf422395124660e_e7d03466.png",
    alt: "ASP.NET",
  },
  {
    src: "https://avatars.githubusercontent.com/u/2092016?s=280&v=4",
    alt: "xUnit",
  },
];

const database = [
  {
    src: "https://images.icon-icons.com/2699/PNG/512/mongodb_logo_icon_170943.png",
    alt: "MongoDB",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    alt: "PostgreSQL",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    alt: "SQL",
  },
];

const python = [
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-python-3628999-3030224.png?f=webp",
    alt: "Python",
  },
];

const tools = web.concat(java, cSharp, python, database);

export default function Coding() {
  return (
    <Section title="Programming">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Card
            key={tool.alt}
            title={tool.alt}
            logo={
              <img
                className="w-24 aspect-3/2 object-contain"
                draggable={false}
                src={tool.src}
                alt={tool.alt}
              />
            }
          />
        ))}
      </div>
    </Section>
  );
}
