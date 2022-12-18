from flask import Flask, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route("/login", methods=["POST"])
@cross_origin()
def login():
    print(request.json)
    return "0"


@app.route("/upload", methods=["POST"])
@cross_origin()
def signup():
    print(request.json)
    return "0"


@app.route("/")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run(debug=True)
