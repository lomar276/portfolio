import { useEffect, useState } from "react";
import Spinner from "./Spinner";

interface LinkPreviewData {
  title: string;
  description: string;
  image: {
    url: string;
  };
  publisher: string;
}

const LINK_PREVIEW_API = "https://api.microlink.io";

export default function LinkPreview({ url }: { url: string }) {
  const [data, setData] = useState<LinkPreviewData | null>(null);

  useEffect(() => {
    fetch(`${LINK_PREVIEW_API}/?${new URLSearchParams({ url })}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const { data } = json;
        console.log("Link preview data:", data);
        setData(data);
      });
  }, [url]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="bg-gray-800/[.75] hover:bg-slate-700/[.75] shadow-sm hover:shadow-xl hover:cursor-pointer rounded-lg p-3 zoom"
    >
      <div className="justify-center items-center flex flex-col space-y-1">
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

        {data.description && (
          <div className="text-md text-slate-200">{data.description}</div>
        )}
      </div>
    </div>
  );
}
