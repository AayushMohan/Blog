import { Post } from "../typings";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
    </div>
  );
};

export default BlogList;
