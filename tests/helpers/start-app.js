import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import { assertionInjector } from '../assertions';
const { merge, run } = Ember;

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  return run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    assertionInjector(application);
    return application;
  });
}
