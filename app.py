import os
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, resource={r"/*":{"origins": "*"}})

@app.route("/")
def index():
    return "hello world"

@app.route("/deploy")    
def deploy():
    return "hello world"

def main():
    app.run()

if __name__ == "__main__":
    main()