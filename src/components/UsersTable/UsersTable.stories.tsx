import { Meta, StoryObj } from "@storybook/react";
import UsersTable from ".";
import { useState } from "react";
import api from "../../services/api";
import { IGetResponse, IUsersTable } from "../../services/models/IUserData";

export default {
  title: "Components/UsersTable",
  component: UsersTable,
} as Meta<typeof UsersTable>;

type Story = StoryObj<typeof UsersTable>;

export const Default: Story = () => {
  const [users, setUsers] = useState<IUsersTable[]>([]);

  api.get<IGetResponse>("").then(res => {
    setUsers(res.data.results)
  });

  return (
    <UsersTable
      users={users}
    />
  );
};

Default.args = {};