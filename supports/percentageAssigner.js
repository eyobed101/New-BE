const percentageAssigner =() =>  {
    let shopNumerAssigner = 20;
    if (getCurrentDayOfWeek() === 'Sunday') {
        shopNumerAssigner = 20;
    } else if (getCurrentDayOfWeek() === 'Monday') {
        shopNumerAssigner = 20;
    } else if (getCurrentDayOfWeek() === 'Tuesday') {
        shopNumerAssigner = 20;
    } else if (getCurrentDayOfWeek() === 'Wednesday') {
        shopNumerAssigner = 18;
    } else if (getCurrentDayOfWeek() === 'Thursday') {
        shopNumerAssigner = 15;
    } else if (getCurrentDayOfWeek() === 'Friday') {
        shopNumerAssigner = 10;
    } else if (getCurrentDayOfWeek() === 'Saturday') {
        shopNumerAssigner = 5;
    } else {
        shopNumerAssigner = 20;
    }
    return shopNumerAssigner;
}

export default percentageAssigner