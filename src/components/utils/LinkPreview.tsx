import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";

interface LinkPreviewData {
  title: string;
  description: string;
  image: {
    url: string;
  };
  publisher: string;
}

const LINK_PREVIEW_API = "https://api.microlink.io";

export default function LinkPreview({
  url,
  description,
}: {
  url: string;
  description?: string;
}) {
  const [data, setData] = useState<LinkPreviewData | null>(null);

  useEffect(() => {
    fetch(`${LINK_PREVIEW_API}/?${new URLSearchParams({ url })}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const { data } = json;
        setData(data);
      });
  }, [url]);

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="bg-gray-800/[.75] hover:bg-slate-700/[.75] shadow-sm hover:shadow-xl hover:cursor-pointer rounded-lg p-3 duration-500"
    >
      <div className="justify-center items-center flex flex-col space-y-1">
        {!data ? (
          <Spinner />
        ) : (
          <>
            <div className="flex justify-between w-full">
              <div className="flex-1 text-xl text-slate-50 text-center">
                {data.title}
              </div>
              <div className="text-sm text-slate-400">{data.publisher}</div>
            </div>

            <img
              draggable={false}
              src={data.image.url}
              alt={data.title}
              className="w-full h-auto rounded-lg"
            />

            {(description || data.description) && (
              <div className="text-md text-slate-200">
                {description ? description : data.description}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
