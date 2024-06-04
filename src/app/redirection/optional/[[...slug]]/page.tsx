function page({ params }: { params?: { slug: string[] } }) {
  return (
    <div>
      {params !== undefined && params.slug !== undefined ? (
        params.slug.map((item) => {
          return <div key={`${item}oirirrii`}>{item}</div>;
        })
      ) : (
        <div>default optional page</div>
      )}
    </div>
  );
}
export default page;
