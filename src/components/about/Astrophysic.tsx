import LinkPreview from "../utils/LinkPreview";
import Section from "./Section";

const links = [
  {
    link: "https://www.lavoixdelest.ca/2019/11/12/les-as-un-trio-pas-comme-les-autres-video-4e63fd45c91a24a17c169ea5bf1dac10",
  },
  {
    link: "https://cegepgranby.ca/2018/10/23/club-dastrophysique-une-initiative-etudiante-pour-echanger-des-idees/",
  },
];

export default function Astrophysic() {
  return (
    <Section title="Astrophysic">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {links.map(({ link }) => (
          <LinkPreview key={link} url={link} />
        ))}
      </div>
    </Section>
  );
}
