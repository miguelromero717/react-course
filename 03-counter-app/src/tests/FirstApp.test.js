import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('First App tests', () => {
    test('should shows message "Hola soy Miguel"', () => {
        const message = "Hola soy Miguel";
        const { getByText } = render(<FirstApp title={message}/>);

        expect(getByText(message)).toBeInTheDocument();
    })
    
})
