import os
from flask import Flask, render_template, request, jsonify

app = Flask('__name__')

stories = []  # Temporary storage for stories, use a database in production

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
def browse_stories():
    return render_template("browseStories.html", stories=stories)

@app.route('/submitStory', methods=['POST'])
def submit_story():
    data = request.get_json()
    countryVisited = data.get('countryVisited')
    storyText = data.get('storyText')
    if countryVisited and storyText:
        stories.append({
            'countryVisited': countryVisited,
            'storyText': storyText
        })
        return jsonify(success=True)
    return jsonify(success=False)

@app.route('/getStories', methods=['GET'])
def get_stories():
    return jsonify(stories=stories)

if __name__ == '__main__':
    app.run(debug=True)















