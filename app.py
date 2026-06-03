from flask import Flask, render_template

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/evidence1')
def evidence1():
    return render_template('evidence1.html')

@app.route('/evidence2')
def evidence2():
    return render_template('evidence2.html')

@app.route('/evidence3')
def evidence3():
    return render_template('evidence3.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)