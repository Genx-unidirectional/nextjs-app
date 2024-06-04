import Modal from "./modal";

function page({ params }: { params: { id: string } }) {
  return <Modal>{params.id}</Modal>;
}
export default page;
