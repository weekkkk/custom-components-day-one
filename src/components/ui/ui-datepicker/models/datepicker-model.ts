type NavDatesType = {
  From: Date,
  To: Date
}

export default class DatepickerModel {
  Date: Date;
  DropdownVisible: boolean = true;

  MinDate: Date;
  MaxDate: Date;

  NavDates: NavDatesType;

  get GetBackNoActive() {
    return this.NavDates.From.getFullYear() - 10 <= this.MinDate.getFullYear() - 10
  };
  get GetNextNoActive() {
    return this.NavDates.From.getFullYear() + 10 >= this.MaxDate.getFullYear()
  };

  Back() {
    let from = new Date((this.NavDates.From.getFullYear() - 10), this.NavDates.From.getMonth(), this.NavDates.From.getDate())
    let to = new Date((from.getFullYear() + 11), this.NavDates.To.getMonth(), this.NavDates.To.getDate())
    if(from.getFullYear() >= this.MinDate.getFullYear() - 10) {
      this.NavDates.From = from;
      this.NavDates.To = to;
    }
  }
  Next() {
    let from = new Date((this.NavDates.From.getFullYear() + 10), this.NavDates.From.getMonth(), this.NavDates.From.getDate())
    let to = new Date((from.getFullYear() + 11), this.NavDates.To.getMonth(), this.NavDates.To.getDate())
    if(to.getFullYear() <= this.MaxDate.getFullYear() + 10){
      this.NavDates.From = from;
      this.NavDates.To = to;
    }
  }

  GetNoActiveYear(year: number) {
    if(!(year >= this.MinDate.getFullYear()) || !(year < this.MaxDate.getFullYear())) return "no-active";
  }

  get GetVisibleYears() {
    let years: Array<number> = [];
    for(let i = this.NavDates.From.getFullYear(); i <= this.NavDates.To.getFullYear(); i++) {
      years.push(i);
    }
    return years;
  }

  DateFormating(date: Date) {
    let result: string = "";
    date.getDate() < 10 ? result += ("0" + date.getDate()) + "." : result += (date.getDate() + ".");
    date.getMonth() < 10 ? result += ("0" + date.getMonth() + ".") : result += (date.getMonth() + ".");
    result += date.getFullYear();
    return result;
  }

  SetDropdownVisible() {
    this.DropdownVisible = !this.DropdownVisible
  }

}