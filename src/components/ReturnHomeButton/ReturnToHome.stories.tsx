import { Meta, StoryObj } from "@storybook/react";
import ReturnHomeButton from ".";

export default {
  title: "Components/ReturnHomeButton",
  component: ReturnHomeButton,
} as Meta<typeof ReturnHomeButton>;

type Story = StoryObj<typeof ReturnHomeButton>;

export const Default: Story = {
  args: {}
}; 