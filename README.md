# SGPA & CGPA Prediction Web App

This project is a full-stack web application that predicts a student's 4th semester SGPA and overall CGPA based on their SGPA from the first three semesters. It uses a machine learning model (Linear Regression) trained on historical academic data.

## Features
- **Frontend:** React app for user input and displaying predictions.
- **Backend:** Flask API serving a trained ML model for predictions.
- **Model:** Linear Regression model trained on SGPA/CGPA data.

---

## Folder Structure
```
5SGP2 - Copy/
├── app.py                  # Flask backend API
├── model/
│   ├── model_training.ipynb  # Jupyter notebook for model training
│   └── sgpa_cgpa_model.pkl   # Trained ML model (pickle file)
├── src/
│   ├── App.jsx             # Main React component
│   ├── main.jsx            # React entry point
│   ├── App.css, index.css  # Styling
│   └── assets/             # Static assets
├── public/                 # Static files for frontend
├── package.json            # Frontend dependencies
├── index.html              # Frontend HTML entry
└── ...
```

---

## Getting Started

### 1. Backend (Flask API)
#### a. Install Python dependencies
Create a file named `requirements.txt` in the root with the following content:
```
flask
flask-cors
numpy
scikit-learn
```
Then install dependencies:
```bash
pip install -r requirements.txt
```

#### b. Model File
Ensure `model/sgpa_cgpa_model.pkl` exists. If not, run the Jupyter notebook in `model/model_training.ipynb` to train and export the model.

#### c. Run the Flask server
```bash
python app.py
```
The backend will start on `http://localhost:5000` by default.

---

### 2. Frontend (React App)
#### a. Install Node.js dependencies
```bash
npm install
```

#### b. Start the development server
```bash
npm run dev
```
The frontend will start on `http://localhost:5173` (or as shown in the terminal).

---

## Usage
1. Open the frontend in your browser (default: [http://localhost:5173](http://localhost:5173)).
2. Enter your SGPA for Semesters 1, 2, and 3.
3. Click **Predict SGPA**.
4. The app will display the predicted SGPA for Semester 4 and the calculated CGPA.

---

## Notes
- The frontend expects the backend to be running at `http://localhost:5000`.
- If you change backend port, update the fetch URL in `src/App.jsx`.
- The model was trained using the notebook in `model/model_training.ipynb`.

---

## License
This project is for educational/demo purposes.
