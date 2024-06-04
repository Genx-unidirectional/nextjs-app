function page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      {params.slug.map((item) => {
        return <div key={`${item}sdfioifjjfi`}>This is {item}</div>;
      })}
    </div>
  );
}
export default page;
