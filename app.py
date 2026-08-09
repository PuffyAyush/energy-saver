from flask import Flask, render_template, request
from calculator import calculate_energy

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():

    result = None
    error = None

    if request.method == "POST":

        appliance = request.form.get("appliance")

        try:
            power = float(request.form.get("power"))
            hours = float(request.form.get("hours"))
            cost_per_unit = float(request.form.get("rate"))

            if power <= 0:
                error = "Power must be greater than 0."

            elif hours < 0 or hours > 24:
                error = "Daily usage must be between 0 and 24 hours."

            elif cost_per_unit < 0:
                error = "Electricity rate cannot be negative."

            else:

                (
                    daily_usage,
                    monthly_usage,
                    monthly_bill,
                    estimated_saving
                ) = calculate_energy(
                    power,
                    hours,
                    cost_per_unit
                )

                result = {
                    "appliance": appliance,
                    "daily_usage": daily_usage,
                    "monthly_usage": monthly_usage,
                    "monthly_bill": monthly_bill,
                    "estimated_saving": estimated_saving
                }

        except (ValueError, TypeError):

            error = "Please enter valid numbers."

    return render_template(
        "index.html",
        result=result,
        error=error
    )


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )