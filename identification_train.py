import os
import cv2
import numpy as np
from keras._tf_keras.keras.models import Sequential
from keras._tf_keras.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from keras._tf_keras.keras.utils import to_categorical
from sklearn.model_selection import train_test_split

img_height = 30
img_width = 30

train_dir = 'E:/pet_expression_identifier/identification_examples/PetImages/train'
test_dir = 'E:/pet_expression_identifier/identification_examples/PetImages/test'

images = []
labels = []

def load_images_from_directory(directory, label):
    for filename in os.listdir(directory):
        img_path = os.path.join(directory, filename)
        
        if filename.endswith('.jpg') or filename.endswith('.png'):
            img = cv2.imread(img_path)
            
            if img is None:
                print(f"Warning: Unable to load image {img_path}")
                continue  
            
            img_resized = cv2.resize(img, (img_height, img_width))
            
            img_resized = img_resized / 255.0
            
            images.append(img_resized)
            labels.append(label)

load_images_from_directory(os.path.join(train_dir, 'Cat'), 0)  
load_images_from_directory(os.path.join(train_dir, 'Dog'), 1)  

X = np.array(images)
y = np.array(labels)

y = to_categorical(y, num_classes=2)

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(img_height, img_width, 3)),
    MaxPooling2D((2, 2)),
    
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    
    Flatten(),
    Dense(512, activation='relu'),
    Dropout(0.5),
    
    Dense(2, activation='softmax') 
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

model.fit(
    X_train, 
    y_train, 
    epochs=10, 
    batch_size=32, 
    validation_data=(X_val, y_val)
)

val_loss, val_acc = model.evaluate(X_val, y_val)
print(f"Validation Accuracy: {val_acc*100:.2f}%")
