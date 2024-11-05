import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  private breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  getBreakpoint(name: keyof typeof this.breakpoints): number {
    return this.breakpoints[name];
  }

  getAllBreakpoints(): Record<string, number> {
    return this.breakpoints;
  }
}
