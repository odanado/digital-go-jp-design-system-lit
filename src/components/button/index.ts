import { DAButton } from "./button.js";

if (!customElements.get("da-button")) {
  customElements.define("da-button", DAButton);
}
