export default function rate({ emoji, num }) {
  return (
    <div className="rounded-sm w-[250px] h-[200px] bg-transparent text-white bg-opacity-100 pt-8 ">
      <p className="text-5xl pb-10">{emoji}</p>
      <h1 className="text-3xl font-semibold">{num}</h1>
      <p>user</p>
    </div>
  );
}
