import LinkPreview from "../utils/LinkPreview";
import Section from "./Section";

const links = [
  {
    link: "https://cegepgranby.ca/2019/04/08/au-quart-de-tour-a-la-finale-locale-de-science-on-tourne",
  },
  {
    link: "https://scienceontourne.com/archives/defi-2019",
    description:
      "Build a gravitational propulsion device capable of rotating in a circle.",
  },
];

const description = [
  "Qualification 6th place out of 27 teams",
  "Interview on Canal Savoir",
];

export default function Science() {
  return (
    <Section title="Science, on tourne !">
      <div>
        <div className="flex justify-center">
          <ul className="list-disc text-left">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-4">
          <div>
            <iframe
              className="w-full aspect-video rounded-xl shadow-lg mb-5"
              src="https://www.youtube.com/embed/Qtej_VmtWyc?si=ufRWo0HqoIlkd_wO"
              title="Science, on tourne ! 2019 - Cégep de Granby"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
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
