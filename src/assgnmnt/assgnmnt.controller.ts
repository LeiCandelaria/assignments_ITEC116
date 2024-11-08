import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { get } from 'http';

@Controller('assgnmnt')
export class assgnmntController {

  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number } { //Calculates the factorial and returns it as JSON//
    const factorial = this.factorial(number);
    return { factorial }; // Calculates the factorial of the set number//
  }

  //Checks the number if it is factorable//
  public factorial(num: number): number {
    if (num < 0) throw new Error("Negative integers cannot be used in Factorial"); // Factorial of negative numbers is not defined//
    if (num === 0 || num === 1) return 1;
    let factorial_result = 1;
    for (let i = 2; i <= num; i++) {
      factorial_result *= i;
    }
    return factorial_result;
  }
}

