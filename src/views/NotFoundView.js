import { LitElement, html } from 'lit-element';

export class NotFoundView extends LitElement {
  render() {
    return html`
      <h1>Not found 😢</h1>
      <p>Unfortunately, we could not find the URL you were looking for.</p>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);
