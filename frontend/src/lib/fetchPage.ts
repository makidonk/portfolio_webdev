// fixa
export type Page = {
  title: string;
  slug: string;
  content: string;
};

export async function fetchPage(slug: string): Promise<Page> {
  const res = await fetch(
    `http://localhost:1337/api/pages?filters[slug][$eq]=${slug}`
  );

  if (!res.ok) throw new Error("Failed to fetch page");

  const json = await res.json();
  return json.data[0]?.attributes;
}
