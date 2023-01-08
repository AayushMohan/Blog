import { previewData } from "next/headers";

const page = () => {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
};

export default page;
