import { IPosts } from "../api/museumApi";

export default function Post({ data }: { data: IPosts }) {
  const { id, author, width, height, url, download_url } = data;

  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
    >
      <img
        src={download_url}
        className="w-full h-48 object-cover"
        alt={url}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{author}</h2>
        <p className="text-gray-600">Width: {width}px</p>
        <p className="text-gray-600">Height: {height}px</p>
      </div>
    </div>
  );
}
