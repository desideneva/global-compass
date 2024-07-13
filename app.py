from flask import Flask, render_template

app = Flask('__name__')
@app.route('/')
def index():
    return render_template("index.html")

@app.route("/actions")
def actions():
    return render_template("actions.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/story")
def story():
    return render_template("story.html")

@app.route("/browseStories")
def browseStories():
    return render_template("browseStories.html")   

if __name__ == '__main__':
    app.run(debug=True)










