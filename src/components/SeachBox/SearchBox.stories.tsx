import { Meta, StoryObj } from "@storybook/react";
import SearchBox from ".";
import { ChangeEvent } from "react";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
} as Meta<typeof SearchBox>;

type Story = StoryObj<Props>;

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
} & typeof SearchBox;

export const Default: Story = () => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <SearchBox
      onChange={(e) => {
        handleSearch(e);
      }}
    />
  );
};

Default.args = {};
