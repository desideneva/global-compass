from flask import Flask

app = Flask(_name_)
@app.route("/main")
def index():
    return 'hello world'
    
