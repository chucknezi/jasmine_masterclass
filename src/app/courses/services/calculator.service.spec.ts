import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

it('should add two numbers', () => {
    //Logger service doesn't have any 
    //dependencies so it can be passed to the service
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.add(2,2)
    expect(result).toBe(4)
            
})

it('should subtract two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2,2)
    expect(result).toBe(0, "unexpected subtraction result")
            
})

})