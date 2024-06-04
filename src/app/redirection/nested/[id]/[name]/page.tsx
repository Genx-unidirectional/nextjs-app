function page({ params }: { params: { id: string; name: string } }) {
  return (
    <div>
      <p>Id is {params.id}</p>
      <p>Name is {params.name}</p>
    </div>
  );
}
export default page;
