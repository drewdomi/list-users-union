import { Meta, StoryObj } from "@storybook/react";
import Title from ".";

export default {
  title: "Components/Title",
  component: Title,
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "Some Title",
  }
}; 