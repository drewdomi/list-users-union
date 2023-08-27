import { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";
import { useState } from "react";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

type Story = StoryObj<PaginationProps>;

type PaginationProps = {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: (page: number) => void;
} & typeof Pagination;

export const Default: Story = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      postsPerPage={args.postsPerPage}
      totalPosts={args.totalPosts}
      setCurrentPage={setCurrentPage}
    />
  );
};

Default.args = {
  postsPerPage: 10,
  totalPosts: 50,
};
