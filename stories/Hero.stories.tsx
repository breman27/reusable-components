// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "../packages/ui-components/src";

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  args: {
    title: "Hello, world!",
    subtitle: "This is a subtitle",

    backgroundImage:
      "https://images.unsplash.com/photo-1731432248531-819b94ee2dcd?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    primaryButtonText: "Get Started",
    primaryButtonLink: "",
    secondaryButtonText: "About"
  },
};
