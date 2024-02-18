export default function Project({ title, description, status, link, image }) {
  return (
    <div className="relative whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-[2%] text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none mb-[3%]">
        <img src={image} alt={title} className="w-full h-auto mb-[2%] rounded-lg" />
        <div className="mb-[1%] flex items-center gap-[2%] no-underline">
            <a
                href={link}
                className="block text-[2vh] font-semibold leading-relaxed tracking-normal text-gray-900 antialiased transition-colors hover:text-pink-500">
                {title}
            </a>

            <div className="center relative inline-block select-none whitespace-nowrap rounded-full bg-purple-500 py-[1.7%] px-[3%] align-baseline text-[2vh] font-medium capitalize leading-none tracking-wide text-white">
                <div className="mt-[1%]">{status}</div>
            </div>
        </div>
        <div className="block font-normal leadig-normal text-gray-700 antialiased">
            {description}
        </div>
    </div>
  );
}