export default function Card({ title, description, image}) {
  return (
    <div className="border rounded-xl p-4 shadow-md max-w-sm">
      <img src={image} alt={title} className="rounded-md mb-3" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
};
