from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
model = pickle.load(open('model/sgpa_cgpa_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Convert SGPA4 values to floats
    SGPA4 = np.array([float(sgpa) for sgpa in data['SGPA4']])
    SGPA4 = SGPA4.reshape(1, -1)  # Ensure the correct shape for prediction
    prediction = model.predict(SGPA4)
    
    # Round off the values to 2 decimal places
    predicted_sgpa = round(prediction[0], 2)
    cgpa = round((sum(SGPA4[0]) + prediction[0]) / 4, 2)
    
    response = {
        'predicted_sgpa': predicted_sgpa,
        'cgpa': cgpa
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
