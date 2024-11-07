import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibnacci(@Param('n', ParseIntPipe) n: number): { fibsequences: number[] } {
    const fibsequences = this.generateFibonacci(n);
    return {fibsequences };
  }

  private generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequences = [0, 1];
    for (let i = 2; i < n; i++) {
      sequences.push(sequences[i - 1] + sequences[i - 2]);
    }
    return sequences;
  }
}