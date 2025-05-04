import Card from "../Card";
import Section from "./Section";

const languages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    alt: "Typescript",
  },
  {
    src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    alt: "Java",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
    alt: "C#",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-python-3628999-3030224.png?f=webp",
    alt: "Python",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    alt: "SQL",
  },
];

const frameworks = [
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
    src: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63064f1fedf422395124660e_e7d03466.png",
    alt: "ASP.NET",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png",
    alt: "Flask",
  },
];

export default function Coding() {
  return (
    <Section title="Programmation">
      <div className="grid grid-cols-3 gap-4">
        {languages.map((language) => (
          <Card
            key={language.alt}
            title={language.alt}
            logo={
              <img className="w-32" src={language.src} alt={language.alt} />
            }
          />
        ))}

        {frameworks.map((framework) => (
          <Card
            key={framework.alt}
            title={framework.alt}
            logo={
              <img className="w-32" src={framework.src} alt={framework.alt} />
            }
          />
        ))}
      </div>
    </Section>
  );
}
