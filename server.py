from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json  # Get JSON data from the request
    address = data.get('address')
    time = data.get('time')
    date = data.get('date')
    weight = data.get('weight')

    # Write data to a file
    with open('data.txt', 'a') as file:
        file.write(f"Address: {address}, Time: {time}, Date: {date}, Weight: {weight}\n")

    return 'Data received and written to file.'

if __name__ == '__main__':
    app.run(debug=True)
