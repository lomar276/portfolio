import Section from "./Section";

const c = 1.5;
const width = 560 * c;
const height = 315 * c;

export default function Science() {
  return (
    <Section title="Science, on tourne !">
      <div>
        <ul className="list-disc">
          <li>
            Qualification 6<sup>ième</sup> place sur les 27 équipes
          </li>

          <li>Entrevue sur Canal Savoir</li>
        </ul>

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

            {/* TODO: Link preview */}
          </div>
        </div>
      </div>
    </Section>
  );
}
