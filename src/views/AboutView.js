import { LitElement, html } from 'lit-element';

export class AboutView extends LitElement {
  render() {
    return html`About…`;
  }
}

customElements.define('about-view', AboutView);
