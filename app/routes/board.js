import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BoardRoute extends Route {
  @service store;
  @service userAuth;

  model() {
    return this.store.findAll('employee');
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
