import LinkPreview from "../utils/LinkPreview";
import Section from "./Section";

const c = 1.5;
const width = 560 * c;
const height = 315 * c;

const links = [
  {
    link: "https://cegepgranby.ca/2019/04/08/au-quart-de-tour-a-la-finale-locale-de-science-on-tourne",
  },
  {
    link: "https://scienceontourne.com/archives/defi-2019",
    description:
      "Construire un engin à propulsion gravitationnelle capable de tourner autour d’un cercle.",
  },
];

export default function Science() {
  return (
    <Section title="Science, on tourne !">
      <div>
        <div className="flex justify-center">
          <ul className="list-disc text-left">
            <li>
              Qualification 6<sup>ième</sup> place sur les 27 équipes
            </li>

            <li>Entrevue sur Canal Savoir</li>
          </ul>
        </div>

        <div className="flex justify-center mt-4">
          <div>
            <div className="text-center text-2xl mb-2">Notre bolide</div>
            <iframe
              className="w-full aspect-video rounded-xl shadow-lg mb-5"
              width={width}
              height={height}
              src="https://www.youtube.com/embed/Qtej_VmtWyc?si=ufRWo0HqoIlkd_wO"
              title="Science, on tourne ! 2019 - Cégep de Granby"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {links.map(({ link, description }) => (
                <LinkPreview key={link} url={link} description={description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
