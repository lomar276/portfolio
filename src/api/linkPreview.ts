interface LinkPreviewResponse {
  title: string;
  description: string;
  image: {
    url: string;
  } | null;
  logo: {
    url: string;
  } | null;
  publisher: string;
}

const LINK_PREVIEW_API = "https://api.microlink.io";

async function getLinkPreview(url: string): Promise<LinkPreviewResponse> {
  const searchParams = new URLSearchParams({ url });
  const response = await fetch(`${LINK_PREVIEW_API}/?${searchParams}`);
  const { data }: { data: LinkPreviewResponse } = await response.json();

  return data;
}

export { getLinkPreview };
export type { LinkPreviewResponse };
