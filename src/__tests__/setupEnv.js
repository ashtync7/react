// @flow

import storage from 'local-storage-fallback';

// In case async/await syntax is used in a test.
import 'regenerator-runtime/runtime';

// DevTools stores preferences between sessions in localStorage
if (!global.hasOwnProperty('localStorage')) {
  global.localStorage = storage;
}
