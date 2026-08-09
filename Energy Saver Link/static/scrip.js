function updateSuggestions(power, hours, dailyUsage, monthlyUsage) {

    const suggestions = document.getElementById("suggestions");

    let html = "";

    // -----------------------------
    // POWER USAGE WARNING
    // -----------------------------

    if (power <= 50) {

        html += `
            <div class="suggestion good">
                🟢 <strong>LOW POWER USAGE</strong><br>
                Your appliance is using a relatively low amount of power.
            </div>
        `;

    } else if (power <= 150) {

        html += `
            <div class="suggestion average">
                🟢 <strong>GOOD POWER USAGE</strong><br>
                Your appliance has a reasonable power consumption.
            </div>
        `;

    } else if (power <= 500) {

        html += `
            <div class="suggestion medium">
                🟡 <strong>AVERAGE POWER USAGE</strong><br>
                Your appliance is using a moderate amount of electricity.
                Try reducing its usage when it is not needed.
            </div>
        `;

    } else if (power <= 1000) {

        html += `
            <div class="suggestion warning">
                🟠 <strong>MEDIUM-HIGH POWER USAGE</strong><br>
                This appliance consumes a significant amount of electricity.
                Consider reducing its daily usage.
            </div>
        `;

    } else {

        html += `
            <div class="suggestion danger">
                🔴 <strong>⚠️ HIGH POWER USAGE</strong><br>
                This appliance is consuming a large amount of electricity.
                Try to reduce its operating time whenever possible.
            </div>
        `;
    }


    // -----------------------------
    // DAILY USAGE WARNING
    // -----------------------------

    if (dailyUsage <= 1) {

        html += `
            <div class="suggestion good">
                🟢 <strong>LOW DAILY CONSUMPTION</strong><br>
                Your estimated daily electricity consumption is low.
            </div>
        `;

    } else if (dailyUsage <= 3) {

        html += `
            <div class="suggestion average">
                🟢 <strong>GOOD DAILY CONSUMPTION</strong><br>
                Your daily electricity usage is at a reasonable level.
            </div>
        `;

    } else if (dailyUsage <= 6) {

        html += `
            <div class="suggestion medium">
                🟡 <strong>AVERAGE DAILY CONSUMPTION</strong><br>
                Your appliance is consuming a noticeable amount of electricity.
            </div>
        `;

    } else {

        html += `
            <div class="suggestion danger">
                🔴 <strong>⚠️ HIGH DAILY CONSUMPTION</strong><br>
                Your appliance is consuming a lot of electricity every day.
                Consider reducing the number of hours it is used.
            </div>
        `;
    }


    // -----------------------------
    // HOURS USED
    // -----------------------------

    if (hours >= 12 && hours <= 24) {

        html += `
            <div class="suggestion warning">
                🟠 <strong>LONG DAILY USAGE</strong><br>
                You are using this appliance for ${hours} hours per day.
                Turning it off when not needed can save electricity.
            </div>
        `;

    } else if (hours <= 4) {

        html += `
            <div class="suggestion good">
                🟢 <strong>GOOD USAGE TIME</strong><br>
                Your daily usage time is relatively low.
            </div>
        `;
    }


    // -----------------------------
    // ENERGY SAVING TIPS
    // -----------------------------

    html += `
        <div class="suggestion tip">
            💡 <strong>ENERGY SAVING TIP</strong><br>
            Turn off appliances when they are not being used.
        </div>
    `;

    suggestions.innerHTML = html;
}