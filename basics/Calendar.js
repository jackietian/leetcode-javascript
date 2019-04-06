class Calendar {
    constructor(month = new Date().getMonth(), year = new Date().getFullYear()) {
        // month: 0 - 11
        this.month = month;
        // full year
        this.year = year;
        // day of the month
        this.date = new Date().getDate();
        // 0 - 7: 0 : sunday, 7 Saturday
        this.weekday = new Date().getDay();
    }

    print() {
        this.printHeader();
        const daysInMonth = this.getDaysInMonth();
        const firstDay = this.getFirstDay();
        let row = [];
        let date = 1;
        let breakLoop = false;
        for(let i = 0; i < 6; i++) {
            row[i] = [];
            for(let j = 0; j < 7; j++) {
                if(i === 0 && j < firstDay) {
                    row[i][j] = '';
                } else if(date > daysInMonth) {
                    breakLoop = true;
                    break;
                } else {
                    if(date == (new Date()).getDate()) {
                        row[i][j] = '**' + date + '**';
                    } else {
                        row[i][j] = date;
                    }
                    date++;
                }
            }
            if(breakLoop) break;
        }
        console.log(row);
    }

    printHeader() {
        const header = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        console.log(header);
    }

    getFirstDay() {
        return (new Date(this.year, this.month)).getDay();
    }

    getDaysInMonth() { 
        return new Date(this.year, this.month, 0).getDate();
    }
}

const cal = new Calendar();
cal.print();