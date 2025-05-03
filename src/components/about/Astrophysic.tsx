import Section from "./Section";

const links = [
  {
    title: "La Voix de l'Est",
    link: "https://www.lavoixdelest.ca/2019/11/12/les-as-un-trio-pas-comme-les-autres-video-4e63fd45c91a24a17c169ea5bf1dac10",
  },
  {
    title: "Cégep de Granby",
    link: "https://cegepgranby.ca/2018/10/23/club-dastrophysique-une-initiative-etudiante-pour-echanger-des-idees/",
  },
];

export default function Astrophysic() {
  return (
    <Section title="Astrophysique">
      <div className="mt-5">
        <p>Voici quelques articles qui parlent de nous:</p>

        <div className="space-x-4">
          {links.map(({ title, link }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              className="text-secondary-hover-500 hover:underline"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
