/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
	var day1 = parseInt(dates[0].split('.')[0]);
	var month1 = parseInt(dates[0].split('.')[1]);
	var year1 = parseInt(dates[0].split('.')[2]);
	
	var day2 = parseInt(dates[1].split('.')[0]);
	var month2 = parseInt(dates[1].split('.')[1]);
	var year2 = parseInt(dates[1].split('.')[2]);
	
	var date1 = new Date(year1,month1-1,day1);
	var date2 = new Date(year2,month2-1,day2);
	
	var diff = date2.getTime()-date1.getTime(); // diff in Milliseconds
	var diffInMonth = diff/2629800000; // 2629800000 milisecond for 1 month
	var diffInYears = diff/31536000000; // 31536000000 milisecond for 1 year
	var years = (diffInYears < 1) ? 0 : Math.round(diffInMonth/12); // if difference between dates are less that 1 year, so no year
	var months = (diffInMonth < 1) ? 0 : Math.round(diffInMonth%12); // if difference between dates are less that 1 month, so no month. The rest of the division act as the remaining months
	var days = Math.round(diff/86400000) // 86400000 milisecond for 1 day
	var result = "total "+days+" days";
	
	var plural ="";
	if(months > 0 && days != 365) // if the diff is exactly 1 year. Show it as a Year not as Months
	{
		(months > 1) ? plural="s" : plural = "";
		result = months+" month"+plural+", "+result;
	}
	if(years > 0)
	{
		(years > 1) ? plural="s" : plural = "";
		result = years+" year"+plural+", "+result;
	}
	
	return result;
}