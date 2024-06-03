import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

// import tokens from "@digital-go-jp/design-tokens";

export class DAButton extends LitElement {
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  // @property() accessor size: "large" | "medium" | "small" | "x-small" =
  //   "medium";

  override render() {
    return html`<button>Click me</button>`;
  }
}
