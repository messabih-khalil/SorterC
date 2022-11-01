from crypt import methods
from unittest import result
from flask import Flask , render_template, request , send_from_directory , jsonify

import os

from lib.handle import SortArray

template_dir = os.path.abspath('./templates')

app = Flask(__name__, template_folder=template_dir)


# home route
@app.route('/')
def home():
    return render_template('home.html')

# * ////

@app.route('/sort' , methods=["POST"])
def sortFunc():
    # [['bubble', 'selection'], [1, 4, 0, 5]]
    responseResult = []
    if request.method == "POST":
        request_result = request.get_json()
        result = SortArray(request_result[1] , request_result[0][0]).sortFunc()
        sorted_list = result[0]
        
        for i in request_result[0]:
            print(i)
            result = SortArray(request_result[1] , i).sortFunc()
            execution_time = "{:.6f}".format(float(result[1]))
            objectResult = {
                f"{i}" : [sorted_list , execution_time]
            }
            responseResult.append(objectResult)
        
    return jsonify(responseResult)


if __name__ == "__main__":
    app.run(debug=False)