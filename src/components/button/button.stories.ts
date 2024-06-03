import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./index.js";

type ButtonProps = {};
const meta = {
  title: "Component/Button",
  tags: ["autodocs"],
  render: (props: ButtonProps) => {
    return html`<da-button></da-button>`;
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {};
