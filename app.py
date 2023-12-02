from flask import Flask, render_template, request
from random import shuffle, randint


app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    elif request.method == "POST":
        passList = []
        
        # Garantee 2 uppercase character
        for i in range(2):
            passList.append(chr(randint(65,90)))
        # Garantee 2 lowercase character
        for i in range(2):
            passList.append(chr(randint(97,122)))
        # Garantee 2 digits
        for i in range(2):
            passList.append(chr(randint(48,57)))
        # Garantee 2 punctuation symbols
        for i in range(2):
            passList.append(chr(randint(33,47)))

        # Ask for a length between 8 and 16
        passLength = request.form.get("length", type=int)
        if type(passLength) != int:
            passLength = 8

        if passLength > 8 and passLength <= 16:
            for i in range(passLength - 8):
                passList.append(chr(randint(33,126)))

        shuffle(passList)
        password = "".join(passList)

        return render_template("password.html", passwordSpace=password)
