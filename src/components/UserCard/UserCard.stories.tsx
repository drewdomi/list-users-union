import { Meta, StoryObj } from "@storybook/react";
import UserCard from ".";

export default {
  title: "Components/UserCard",
  component: UserCard,
} as Meta<typeof UserCard>;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    altImage: "Nian Cat Photo",
    image: "https://media.tenor.com/CcOypZMhDS8AAAAM/nyan-cat-pizza-nyan-cat.gif",
    name: "Nian Cat",
    title: "Mr"
  }
}; 