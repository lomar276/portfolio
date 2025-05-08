import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import { CloudAlert, Image } from "lucide-react";
import { getLinkPreview, LinkPreviewResponse } from "../../api/linkPreview";

export default function LinkPreview({
  url,
  description,
}: {
  url: string;
  description?: string;
}) {
  const [linkPreview, setLinkPreview] = useState<LinkPreviewResponse | null>(
    null
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    getLinkPreview(url)
      .then((data) => {
        setLinkPreview(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="bg-gray-800/[.75] hover:bg-slate-700/[.75] shadow-sm hover:shadow-xl hover:cursor-pointer rounded-lg p-3 duration-500"
    >
      <div className="justify-center items-center flex flex-col space-y-1">
        {error ? (
          <CloudAlert size={150} />
        ) : !linkPreview ? (
          <Spinner />
        ) : (
          <>
            <div className="xl:flex justify-between w-full">
              <div className="flex-1 text-xl text-slate-50 text-center">
                {linkPreview.title}
              </div>

              <div className="flex items-center justify-center space-x-2">
                <div className="text-sm text-slate-400">
                  {linkPreview.publisher}
                </div>
                {linkPreview.logo && (
                  <img
                    className="w-6 h-auto max-w-full object-cover rounded-full"
                    draggable={false}
                    src={linkPreview.logo.url}
                    alt={linkPreview.publisher}
                  />
                )}
              </div>
            </div>

            {linkPreview.image ? (
              <img
                draggable={false}
                src={linkPreview.image.url}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <Image size={150} />
            )}

            {(description || linkPreview.description) && (
              <div className="text-md text-slate-200">
                {description ? description : linkPreview.description}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
