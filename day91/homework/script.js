<<<<<<< HEAD
function calculateDifference() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').innerText = 'Please select both dates.';
        return;
    }

    if (endDate < startDate) {
        document.getElementById('result').innerText = 'End date must be after start date.';
        return;
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth() - 1, startDate.getDate());
        days += (new Date(endDate.getFullYear(), endDate.getMonth(), 0)).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerText = `${years} years, ${months} months, ${days} days`;
}
=======
function calculateDifference() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').innerText = 'Please select both dates.';
        return;
    }

    if (endDate < startDate) {
        document.getElementById('result').innerText = 'End date must be after start date.';
        return;
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth() - 1, startDate.getDate());
        days += (new Date(endDate.getFullYear(), endDate.getMonth(), 0)).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerText = `${years} years, ${months} months, ${days} days`;
}
>>>>>>> e527c5236f3cd9407964202a860dcba7fed54f25
