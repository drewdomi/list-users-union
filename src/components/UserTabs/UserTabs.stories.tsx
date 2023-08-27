import { Meta, StoryObj } from "@storybook/react";
import UserTab from ".";
// import { useState } from "react";

export default {
  title: "Components/UserTab",
  component: UserTab,
} as Meta<typeof UserTab>;

type Story = StoryObj<typeof UserTab>;

const userInfo = {
  login: {
    uuid: "string",
    username: "string",
    password: "string"
  },
  email: "string",
  name: {
    title: "string",
    first: "string",
    last: "string"
  },
  id: {
    name: "string",
    value: "string"
  },
  phone: "string",
  cell: "string",
  dob: {
    date: "string",
    age: 1,
  },
  nat: "string",
  location: {
    street: {
      number: 1,
      name: "string"
    },
    city: "string",
    state: "string",
    country: "string"
  },
  picture: {
    large: "string"
  }
};

export const Default: Story = () => {

  return (
    <UserTab
      userInfo={userInfo}
      key={1}
    />
  );
};

Default.args = {};