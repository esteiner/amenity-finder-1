//

/**
 * Mixin for implementing the pending-state protocol (https://github.com/justinfagnani/pending-state-protocol)
 *
 * @param base
 * @returns {{readonly properties: {pendingCount: {type: NumberConstructor}, hasPendingChildren: {type: BooleanConstructor}}, new(): {}, prototype: {}}}
 * @constructor
 */
export const PendingContainer = base =>
  class extends base {
    pendingCount = 0;

    static get properties() {
      return {
        hasPendingChildren: { type: Boolean },
        pendingCount: { type: Number },
      };
    }

    constructor() {
      super();

      this.addEventListener('pending-state', async e => {
        this.hasPendingChildren = true;
        this.pendingCount += 1;
        await e.detail.promise;
        this.pendingCount -= 1;
        this.hasPendingChildren = this.pendingCount !== 0;
      });
    }
  };
