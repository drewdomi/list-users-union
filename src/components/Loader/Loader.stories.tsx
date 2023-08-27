import { Meta, StoryObj } from "@storybook/react";
import Loader from ".";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {}
}; 