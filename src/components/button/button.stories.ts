import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./index.js";

type ButtonProps = {
  size: any;
  variant: any;
} & {
  text: string;
};

const meta = {
  title: "Component/Button",
  tags: ["autodocs"],
  render: (props: ButtonProps) => {
    console.log({ props });
    return html`<da-button variant=${props.variant} size=${props.size}
      >${props.text}</da-button
    >`;
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    size: {
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
    },
    text: {
      control: { type: "text" },
    },
  },
  args: {
    size: "md",
    variant: "primary",
    text: "ラベル",
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {};
export const List: Story = {
  render: () =>
    html`<div>
      <da-button variant="primary" size="md">Primary</da-button>
      <da-button variant="secondary" size="md">Secondary</da-button>
      <da-button variant="tertiary" size="md">Tertiary</da-button>
    </div>`,
};
