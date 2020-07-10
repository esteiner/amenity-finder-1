import { LitElement, html, css } from 'lit-element';

import '@material/mwc-drawer';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar-fixed';

export class AmenityFinder extends LitElement {
  static get properties() {
    return {
      showSidebar: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      .container {
        padding: 1rem;
      }
    `;
  }

  constructor() {
    super();

    this.showSidebar = false;

    this.addEventListener('MDCDrawer:closed', () => {
      this.showSidebar = false;
    });
  }

  render() {
    return html`
      <mwc-drawer
        hasHeader
        type="modal"
        .open="${this.showSidebar}"
        @MDCDrawer:closed="${() => {
          this.showSidebar = false;
        }}"
      >
        <span slot="title">Menu</span>
        <div class="container">
          <p>Drawer content!</p>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar-fixed>
            <mwc-icon-button icon="menu" slot="navigationIcon" @click="${this._toggleSidebar}"></mwc-icon-button>
            <div slot="title">Amenity Finder</div>
          </mwc-top-app-bar-fixed>
          <main class="container">
            <h1>Hello, stranger!</h1>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with
              the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing
              has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
              decided to
            </p>
          </main>
        </div>
      </mwc-drawer>
    `;
  }

  _toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}

customElements.define('amenity-finder', AmenityFinder);
