// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get references to the input elements for investment, interest rate, and time period
    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById("interest-rate");
    const timePeriodInput = document.getElementById("time-period");

    // Add event listeners to update displayed values when input values change

    // Listener for investment slider
    investmentInput.addEventListener("input", function() {
        updateInvestmentValue(this.value);
        // Call the function to update displayed investment value
    });

    // Listener for interest rate slider
    interestRateInput.addEventListener("input", function() {
        upadteInterestRateValue(this.value);
        // Call the function to update displayed interest rate
    });

    // Listener for time period slider
    timePeriodInput.addEventListener("input", function() {
        updateTimePeriodValue(this.value);
        // Call the function to update displayed time period
    });

    // Initialize the displayed values with default slider positions
    updateInvestmentValue(investmentInput.value);
    // Initial display for investment
    upadteInterestRateValue(interestRateInput.value);
    // Initial display for interest rate
    updateTimePeriodValue(timePeriodInput.value);
    // Initial display for time period
});

// Function to update the displayed investment value
function updateInvestmentValue(value) {
    // Update the span element with the formatted investment value
    document.getElementById("investment-value").innerText = `${parseFloat(value).toLocaleString('en-IN')}`;
}

// Function to update the displayed interest rate value
function upadteInterestRateValue(value) {
    // Update the span element with the formatted interest rate value, fixed to one decimal place
    document.getElementById("interest-rate-value").innerText = `${parseFloat(value).toFixed(1)}%`;
}

// Function to update the displayed time period value
function updateTimePeriodValue(value) {
    // Update the span element with the time period value
    document.getElementById("time-period-value").innerText = value;
}

// Function to calculate the fixed deposit (FD) details and display the results
function calculateFD() {

    // Retrieve and parse the input values from sliders
    const principal = parseFloat(document.getElementById("investment").value);
    // Principal amount
    const rateOfInterest = parseFloat(document.getElementById("interest-rate").value);
    // Annual interest rate
    const timePeriod = parseFloat(document.getElementById("time-period").value);
    // Time period in years

    const n = 4; // Number of compounding intervals per year (quarterly compounding)

    // Calculate the total maturity amount using compound interest formula
    const totalAmount = principal * Math.pow((1 + (rateOfInterest / 100) / n), n * timePeriod);

    // Calculate the interest earned by subtracting the principal from the total amount
    const interestEarned = totalAmount - principal;

    // Update the output section with formatted values

    // Display the invested amount (principal)
    document.getElementById("invested-amount").innerText = `₹${principal.toLocaleString('en-IN')}`;

    // Display the estimated returns (interest earned)
    document.getElementById("estimated-returns").innerText = `₹${Math.round(interestEarned).toLocaleString('en-IN')}`;

    // Display the total value (principal + interest)
    document.getElementById("total-value").innerText = `₹${Math.round(totalAmount).toLocaleString('en-IN')}`;
}
