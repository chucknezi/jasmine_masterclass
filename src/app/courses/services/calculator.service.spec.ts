import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    let calculator: CalculatorService,
    loggerSpy: any; 

    beforeEach(() => {
        const logger = jasmine.createSpyObj('LoggerService', ['log'])
    })


it('should add two numbers', () => {
    //Logger service doesn't have any 
    //dependencies so it can be passed to the service
    const logger = jasmine.createSpyObj('LoggerService', ["log"])
    
    // spyOn(logger, 'log')
    //takes in service then method or methods
    const calculator = new CalculatorService(logger);

    const result = calculator.add(2,2)
    expect(result).toBe(4)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)


            
})

it('should subtract two numbers', () => {
    const logger = jasmine.createSpyObj('LoggerService', ["log"])
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2,2)
    expect(result).toBe(0, "unexpected subtraction result")
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)        
})

})