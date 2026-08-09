#Made by Ayush,
#Note for other team members: This is a simple calculator that calculates the energy consumption and cost based on the power rating of an appliance, 
# the number of hours it is used per day, and the cost per unit of electricity.
def calculate_energy(power, hours, cost_per_unit):

    daily_usage = (power * hours) / 1000

    monthly_usage = daily_usage * 30

    monthly_bill = monthly_usage * cost_per_unit

    estimated_saving = monthly_bill * 0.20

    return (
        daily_usage,
        monthly_usage,
        monthly_bill,
        estimated_saving
    )