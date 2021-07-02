import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('CounterApp Tests', function () {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    })

    test('should shows CounterApp correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should shows CounterApp correctly sending a custom value', () => {
        const value = 5;
        const wrapper = shallow(
            <CounterApp value={value}/>
        );

        const valueText = wrapper.find('h2').text();

        expect(Number(valueText)).toBe(value);
        expect(valueText).toBe(String(value));
    });

    test('should increment with button +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('1');
    });

    test('should decrement with button -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('-1');

    });

    test('should set default value reset button', () => {
        const value = 105;
        const wrapper = shallow(
            <CounterApp value={value}/>
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const textValue = wrapper.find('h2').text();

        expect(textValue).toBe('105');
    });
});