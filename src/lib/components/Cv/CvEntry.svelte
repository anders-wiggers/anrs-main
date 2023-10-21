<script>
	export let item;

	function CalcTimeAtPlace(start, end) {
		const MONTHS_IN_YEAR = 12;

		const indate = start.split('-');

		// Parse the start date and check if it's a valid date
		const startDate = new Date(+indate[2], indate[1] - 1, +indate[0]);
		if (isNaN(startDate)) {
			return '';
		}

		// If end is 'Current', use the current date
		let endDate;
		if (end === 'Current') {
			endDate = new Date();
		} else {
			// Parse the end date and check if it's a valid date
			const outDate = end.split('-');
			endDate = new Date(+outDate[2], outDate[1] - 1, +outDate[0]);
			if (isNaN(endDate)) {
				return 'Invalid end date';
			}
		}

		// Calculate the time difference in months
		const monthsDifference =
			(endDate.getFullYear() - startDate.getFullYear()) * MONTHS_IN_YEAR +
			(endDate.getMonth() - startDate.getMonth());

		// Calculate the number of years and months
		const years = Math.floor(monthsDifference / MONTHS_IN_YEAR);
		const months = monthsDifference % MONTHS_IN_YEAR;

		const yearText = years > 0 ? `${years} year` : '';
		const monthText = months > 0 ? `${months + 1} months` : '';

		const result = `· ${yearText} ${monthText}`;
		return result;
	}

	function parseDateToShortMonthYear(dateString) {
		if (dateString === 'Current') return dateString;

		// Define an array to map month numbers to short month names
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];

		// Split the date string into day, month, and year components
		const [day, monthNumber, year] = dateString.split('-').map(Number);

		// Check if the provided date is valid
		if (isNaN(day) || isNaN(monthNumber) || isNaN(year)) {
			return dateString;
		}

		// Ensure monthNumber is within valid range (1-12)
		if (monthNumber < 1 || monthNumber > 12) {
			return 'Invalid month';
		}

		// Get the short month name based on the month number
		const shortMonthName = monthNames[monthNumber - 1];

		// Create the result string in the "ShortMonth Year" format
		const result = `${shortMonthName} ${year}`;

		return result;
	}
</script>

<div>
	<div class="block items-center sm:flex">
		<div class="pl-4 hidden sm:inline">
			<img class="rounded-md w-24 max-w-24" src={item.profilePic} />
		</div>
		<div>
			<header class="card-header">
				<h4 class="h4">
					{item.title}
				</h4>
			</header>
			<section class="p-4">
				<div>
					<span>{item.place} {item.position === undefined ? '' : `· ${item.position}`}</span>
				</div>
				<p>
					{parseDateToShortMonthYear(item.start)} - {parseDateToShortMonthYear(item.end)}
					{CalcTimeAtPlace(item.start, item.end)}
				</p>
				<span>{item.location !== undefined ? item.location : ''}</span>
			</section>
			<footer class="card-footer">{item.disc !== undefined ? item.disc : ''}</footer>
		</div>
	</div>
	<br />
</div>
