import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SimpleTables from './Table';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'
import toJSON from 'enzyme-to-json'
configure({ adapter: new Adapter() });
const mockStore = configureMockStore();


  




describe("Table Component should render without any error", () => {
    let store;
    let wrapped;
    let props
beforeEach(()=>{
     props ={
        numberOfRows:4,
        numberOfColumns:3,
     rowsData:[[0,0,0,0,0]],
     
        //  fetchAllRows: jest.fn(),
     }
    store = mockStore({rowsData:[[0,0,0,0,0]]});
    store.dispatch = jest.fn();
    wrapped =mount(
        <Provider store={store}>
            <SimpleTables  {...props}/>
         </Provider>
    )
})
// const myContainer=wrapped.dive()

    it("Table ", () => {
        expect(wrapped).toMatchSnapshot();
    });
});
