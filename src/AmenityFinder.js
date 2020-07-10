import { css, html, LitElement } from 'lit-element';
import page from 'page';

import '@material/mwc-drawer';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

import { lazyLoad } from './utils/lazy-loading.js';

export class AmenityFinder extends LitElement {
  static get properties() {
    return {
      showSidebar: { type: Boolean },
      currentView: { type: String, attribute: false },
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
    this.currentView = 'home';

    this._initializeRoutes();

    this.addEventListener('MDCDrawer:closed', () => this._closeSidebar());
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
        <nav class="sidebar">
          <mwc-list>
            <mwc-list-item @request-selected="${() => this._navigateToUrl('/')}">Home</mwc-list-item>
            <mwc-list-item @request-selected="${() => this._navigateToUrl('/search')}">Search</mwc-list-item>
            <mwc-list-item @request-selected="${() => this._navigateToUrl('/results')}">Results</mwc-list-item>
            <mwc-list-item @request-selected="${() => this._navigateToUrl('/about')}">About</mwc-list-item>
            <mwc-list-item @request-selected="${() => this._navigateToUrl('/123')}">123</mwc-list-item>
          </mwc-list>
        </nav>
        <div slot="appContent">
          <mwc-top-app-bar-fixed>
            <mwc-icon-button icon="menu" slot="navigationIcon" @click="${this._toggleSidebar}"></mwc-icon-button>
            <div slot="title">Amenity Finder</div>
          </mwc-top-app-bar-fixed>
          <main class="container">
            ${this._renderCurrentView()}
          </main>
        </div>
      </mwc-drawer>
    `;
  }

  _renderCurrentView() {
    switch (this.currentView) {
      case 'home':
        return lazyLoad(import('./views/HomeView.js'), html`<home-view></home-view>`);
      case 'search':
        return lazyLoad(import('./views/SearchView.js'), html`<search-view></search-view>`);
      case 'results':
        return lazyLoad(import('./views/ResultsView.js'), html`<results-view></results-view>`);
      case 'about':
        return lazyLoad(import('./views/AboutView.js'), html`<about-view></about-view>`);
      default:
        return lazyLoad(import('./views/NotFoundView.js'), html`<not-found-view></not-found-view>`);
    }
  }

  _toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  _closeSidebar() {
    this.showSidebar = false;
  }

  /**
   *
   * @param e MouseEvent
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _navigateToUrlFromEventTarget(e) {
    e.preventDefault();
    const { target } = e;
    if (!target || !target.hasAttribute('href')) {
      return;
    }

    this._navigateToUrl(target.getAttribute('href'));
  }

  _navigateToUrl(url) {
    page(url);

    this._closeSidebar();
  }

  _initializeRoutes() {
    page('/', () => {
      this.currentView = 'home';
    });
    page('/about', () => {
      this.currentView = 'about';
    });
    page('/results', () => {
      this.currentView = 'results';
    });
    page('/search', () => {
      this.currentView = 'search';
    });
    page('*', () => {
      this.currentView = undefined;
    });
    page();
  }
}

customElements.define('amenity-finder', AmenityFinder);
