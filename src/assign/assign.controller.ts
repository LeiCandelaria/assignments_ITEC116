import { Controller, Get, Param } from '@nestjs/common';

@Controller('assign')
export class AssignController {
  
  @Get('primecheck/:number')
  checkPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2 || num === 3) return true; // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }
}