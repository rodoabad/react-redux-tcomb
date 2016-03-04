import { expect } from 'code';
import sinon from 'sinon';

import * as redux from 'redux';

import * as storeConfigurator from '../../src/services/store-configurator-service';
import * as storeFactory from '../../src/store-factory';

describe('Given the store factory', () => {

  let storeConfiguratorMock,
    combineReducersMock,
    expectedCreateStore,
    expectedReducer,
    sandbox;

  function mockStoreConfigurator() {

    expectedCreateStore = Object.freeze({});
    storeConfiguratorMock = sandbox.mock(storeConfigurator).expects('create');
    storeConfiguratorMock.returns(expectedCreateStore);

  }

  function mockCombineReducers() {

    expectedReducer = Object.freeze({});
    combineReducersMock = sandbox.mock(redux).expects('combineReducers');
    combineReducersMock.returns(expectedReducer);

  }

  beforeEach('Setup', () => {

    sandbox = sinon.sandbox.create();

    mockStoreConfigurator();
    mockCombineReducers();

  });

  afterEach('Clean Up', () => {

    sandbox.restore();

    storeFactory.destroyStore();

  });

  describe('when getting the store', () => {

    describe('and no store exist', () => {

      it('should return a new store create by the store configurator', () => {

        const createdStore = storeFactory.getStore();

        expect(createdStore).equals(expectedCreateStore);

      });

      it('should provide the store factory with combined reducers', () => {

        storeConfiguratorMock.once().withExactArgs(expectedReducer);

        storeFactory.getStore();

        storeConfiguratorMock.verify();

      });

    });

    describe('and a store already exist', () => {

      it('should return the existing store', () => {

        let returnedStore;

        storeFactory.getStore();

        returnedStore = storeFactory.getStore();

        expect(returnedStore).equals(expectedCreateStore);

      });

    });

  });

});
