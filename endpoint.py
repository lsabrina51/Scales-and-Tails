from fastapi import FastAPI, File, UploadFile
from tensorflow.python.keras.models import load_model
import numpy as np
import cv2
from io import BytesIO

app = FastAPI()

# Load the trained model
model = load_model("cat_emotion_model.h5")

# Define the emotion labels
EMOTION_LABELS = ["Happy", "Sad", "Angry", "Surprised", "Neutral"]

@app.post("/predict-emotion/")
async def predict_emotion(file: UploadFile = File(...)):
    """
    Endpoint to predict cat emotion from an uploaded image using OpenCV.
    """
    # Read the uploaded image file
    contents = await file.read()
    # Convert the file contents to a numpy array
    img_array = np.frombuffer(contents, np.uint8)
    # Decode the image using OpenCV
    img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)  # BGR image
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert to RGB

    # Preprocess the image (resize, normalize, expand dimensions)
    img_resized = cv2.resize(img, (128, 128))  # Resize to match model input size
    img_normalized = img_resized / 255.0  # Normalize pixel values to [0, 1]
    img_batch = np.expand_dims(img_normalized, axis=0)  # Add batch dimension

    # Predict emotion
    predictions = model.predict(img_batch)
    predicted_index = np.argmax(predictions)
    predicted_emotion = EMOTION_LABELS[predicted_index]

    return {"emotion": predicted_emotion, "confidence": float(predictions[0][predicted_index])}

# Run the FastAPI server with: uvicorn filename:app --reload
