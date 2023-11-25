import { Inject, Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {

  public constructor(@Inject(String) public matDateLocale:string) {
    super(matDateLocale);
    this.matDateLocale = matDateLocale;
  }

  public override format(date: Date, displayFormat:any): string {
    switch (displayFormat) {
      case 'YYYY':
        return date.toLocaleDateString(this.matDateLocale, {
          year: 'numeric'
        });
      default:
        return super.format(date, displayFormat);
    }
  }
}
