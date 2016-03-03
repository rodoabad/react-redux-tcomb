import { expect } from 'code';
import sinon from 'sinon';

import * as redux from 'redux';
import thunk from 'redux-thunk';

import * as storeConfiguratorService from '../../../src/services/store-configurator-service';

describe('Given the store configurator service', () => {

  let expectedReducer,
    expectedInitialState,
    middlewareStoreCreator,
    sandbox,
    stubStoreInstance,
    storeConstructor;

  beforeEach('Setup', () => {

    sandbox = sinon.sandbox.create();

    stubStoreInstance = sandbox.spy();
    middlewareStoreCreator = sandbox.mock().returns(stubStoreInstance);
    storeConstructor = sandbox.stub().returns(middlewareStoreCreator);

    sandbox.stub(redux, 'applyMiddleware').returns(storeConstructor);

  });

  afterEach('Clean Up', ()=> {

    sandbox.restore();

  });

  it('should use the thunk middleware to support async actions', () => {

    storeConfiguratorService.create(expectedReducer);

    sinon.assert.calledOnce(redux.applyMiddleware);
    sinon.assert.calledWith(redux.applyMiddleware, thunk);

  });

  it('should use the store with the thunk middleware', () => {

    storeConfiguratorService.create(expectedReducer);

    sinon.assert.calledOnce(storeConstructor);
    sinon.assert.calledWith(storeConstructor, redux.createStore);

  });

  it('should pass the reducers to the middleware store creator', () => {

    middlewareStoreCreator.once().withExactArgs(expectedReducer);

    storeConfiguratorService.create(expectedReducer, expectedInitialState);

    middlewareStoreCreator.verify();

  });

  it('should return the store instance', () => {

    expect(storeConfiguratorService.create(expectedReducer)).equals(stubStoreInstance);

  });

});
