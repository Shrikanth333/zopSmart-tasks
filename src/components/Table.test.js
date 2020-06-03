import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SimpleTables from './Table';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'
configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({rowsdata:[{'rows':[[0,0,0,0,0]]}]});

// let wrapped = shallow(
//     <Provider store={store}>
//         <SimpleTables />
//      </Provider>
// )

// console.log(wrapped)
describe("Table Component should render without any error", () => {
let component=renderer.create( <Provider store={store}>
    <SimpleTables />
 </Provider>)
    it("Table ", () => {
        expect(component.toJson()).toMatchSnapshot();
    });
});