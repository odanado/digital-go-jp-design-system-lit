import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import tokens from "@digital-go-jp/design-tokens";

export class DAButton extends LitElement {
  static override styles = css`
    :host {
      color: blue;
    }

    :host([variant="primary"]) {
      --background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["900"]["value"]
      )};
      --color: ${unsafeCSS(tokens["Color"]["Neutral"]["White"]["value"])};
      --hover-background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["1000"]["value"]
      )};
      --hover-color: ${unsafeCSS(tokens["Color"]["Neutral"]["White"]["value"])};
      --active-background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["1200"]["value"]
      )};
      --active-color: ${unsafeCSS(
        tokens["Color"]["Neutral"]["White"]["value"]
      )};
    }
    :host([variant="secondary"]) {
      --background-color: ${unsafeCSS(
        tokens["Color"]["Neutral"]["White"]["value"]
      )};
      --color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["900"]["value"]
      )};
      --hover-background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["200"]["value"]
      )};
      --hover-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["1000"]["value"]
      )};
      --active-background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["300"]["value"]
      )};
      --active-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["1200"]["value"]
      )};

      --border: 1px solid
        ${unsafeCSS(tokens["Color"]["Primitive"]["Blue"]["900"]["value"])};
      --hover-border: 1px solid
        ${unsafeCSS(tokens["Color"]["Primitive"]["Blue"]["1000"]["value"])};
      --active-border: 1px solid
        ${unsafeCSS(tokens["Color"]["Primitive"]["Blue"]["1200"]["value"])};
    }
    :host([variant="tertiary"]) {
      --background-color: ${unsafeCSS(
        tokens["Color"]["Neutral"]["White"]["value"]
      )};
      --color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["900"]["value"]
      )};
      --hover-background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["50"]["value"]
      )};
      --hover-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["1000"]["value"]
      )};
      --active-background-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["100"]["value"]
      )};
      --active-color: ${unsafeCSS(
        tokens["Color"]["Primitive"]["Blue"]["1200"]["value"]
      )};
    }

    .button {
      display: inline-block;
      border: var(--border, none);
      border-radius: ${unsafeCSS(tokens["BorderRadius"]["8"]["value"])};
      background-color: var(--background-color);
      color: var(--color);

      &:hover {
        background-color: var(--hover-background-color);
        color: var(--hover-color);
        text-decoration: underline;
      }

      &:active {
        background-color: var(--active-background-color);
        color: var(--active-color);
        text-decoration: underline;
      }
    }

    :host([size="lg"]) > button {
      height: 56px;
      min-width: 136px;
    }
    :host([size="md"]) > button {
      height: 48px;
      min-width: 96px;
    }
    :host([size="sm"]) > button {
      height: 36px;
      min-width: 80px;
    }
    :host([size="xs"]) > button {
      height: 28px;
      min-width: 72px;
    }
  `;

  @property() accessor variant: "primary" | "secondary" | "tertiary" =
    "primary";
  @property() accessor size: "lg" | "md" | "sm" | "xs" = "md";

  override render() {
    return html`<button class="button"><slot></slot></button>`;
  }
}
