import "@testing-library/jest-dom";
import FirstApp from "../FirstApp";
import { shallow } from 'enzyme';

describe('First App tests', () => {
    /*test('should shows message "Hola soy Miguel"', () => {
        const message = "Hola soy Miguel";
        const { getByText } = render(<FirstApp title={message}/>);

        expect(getByText(message)).toBeInTheDocument();
    })*/

    test('should shows FirstApp correctly', () => {

        const title = "Hola Soy Miguel";
        const wrapper = shallow(<FirstApp title={title} />);

        expect(wrapper).toMatchSnapshot();

    })

    test('should shows subtitle by props', () => {
        const title = "Hola Soy Miguel";
        const subtitle = "New subtitle";
        const wrapper = shallow(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );

        const text = wrapper.find('p').text();

        expect(text).toBe(subtitle);
    });


})
