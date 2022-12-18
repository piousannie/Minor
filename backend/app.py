from flask import Flask, request
from flask_cors import CORS, cross_origin
import smtplib

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route("/login", methods=["POST"])
def login():
    dict = request.json
    return str(response)


@app.route("/signup", methods=["POST"])
@cross_origin()
def signup():
    dict = request.json
    return "1" if response else "0"


@app.route("/doc-upload", methods=["POST"])      # user aploading a new document
def doc_upload():
    dict = request.json
    return 0


@app.route("/fetch-admin", methods=["GET"])
def fetch_admin():
    return 


@app.route("/file/<username>", methods=["GET"])
def user(username):
    return 0


@app.route("/status-update", methods=["POST"])
def admin_status_update():
    dict = request.json
    return '1'


@app.route("/")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run(debug=True)
