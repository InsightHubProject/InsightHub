from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Initialize BERT tokenizer and model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')
model.eval()

def predict_sentiment(text):
    # Tokenize and encode the input text
    inputs = tokenizer(text, return_tensors="pt")
    # Forward pass
    outputs = model(**inputs)
    # Predict sentiment class
    predicted_class = torch.argmax(outputs.logits, dim=1).item()
    return predicted_class

# Static datasets
dataset1 = ["I love this product!", "Worst experience ever."]
dataset2 = ["This service is fantastic.", "Not worth the price."]

# Process datasets and store ML outputs
results_dataset1 = [predict_sentiment(text) for text in dataset1]
results_dataset2 = [predict_sentiment(text) for text in dataset2]

# Example of printing results
for i, text in enumerate(dataset1):
    print(f"Text: {text}, Predicted Sentiment: {results_dataset1[i]}")

for i, text in enumerate(dataset2):
    print(f"Text: {text}, Predicted Sentiment: {results_dataset2[i]}")
