function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>hello user {id}</div>;
}
export default page;
