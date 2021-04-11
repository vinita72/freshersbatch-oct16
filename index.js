let currentMonth = new Date().getMonth()
var month = ""
switch (currentMonth) {
    case 0:
        month = "january"
        break;
    case 1:
        month = "February"
        break;
    case 2:
        month = "March"
        break;
    case 3:
        month = "April"
        break;
    case 4:
        month = "May"
        break;
    case 5:
        month = "June"
        break;
    case 6:
        month = "july"
        break;
    case 7:
        month = "August"
        break;
    case 8:
        month = "September"
        break;
    case 9:
        month = "Octomber"
        break;
    case 10:
        month = "November"
        break;
    case 11:
        month = "December"
        break;
    default:
        break;
}
console.log(month)

