from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load pre-trained BERT model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

# Set the model to evaluation mode
model.eval()


def predict_sentiment(text):
    # Tokenize input text
    inputs = tokenizer(text, return_tensors="pt")

    # Forward pass through the model
    outputs = model(**inputs)

    # Get the predicted sentiment (class with highest probability)
    predicted_class = torch.argmax(outputs.logits, dim=1).item()

    return predicted_class

# Sample tweet
tweet_text = "I love using InsightHub to analyze social media sentiments!"

# Predict sentiment
predicted_sentiment = predict_sentiment(tweet_text)

# Print output
print(f"Predicted Sentiment: {predicted_sentiment}")
