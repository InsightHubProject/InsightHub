from transformers import BertTokenizer, BertForSequenceClassification
import torch
import matplotlib.pyplot as plt

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

def visualize_predictions(results_dataset1, results_dataset2):
    # Count the occurrences of each sentiment in the datasets
    sentiments1 = [result for result in results_dataset1]
    sentiments2 = [result for result in results_dataset2]

    # Data for plotting
    labels = ['Dataset 1', 'Dataset 2']
    positive_counts = [sentiments1.count(1), sentiments2.count(1)]
    negative_counts = [sentiments1.count(0), sentiments2.count(0)]

    x = range(len(labels))  # the label locations
    width = 0.35  # the width of the bars

    fig, ax = plt.subplots()
    rects1 = ax.bar(x, positive_counts, width, label='Positive')
    rects2 = ax.bar(x, negative_counts, width, bottom=positive_counts, label='Negative')

    # Add some text for labels, title, and custom x-axis tick labels, etc.
    ax.set_ylabel('Counts')
    ax.set_title('Sentiment counts by dataset')
    ax.set_xticks(x)
    ax.set_xticklabels(labels)
    ax.legend()

    # Function to attach a text label above each bar, displaying its height
    def autolabel(rects):
        for rect in rects:
            height = rect.get_height()
            ax.annotate('{}'.format(height),
                        xy=(rect.get_x() + rect.get_width() / 2, height),
                        xytext=(0, 3),  # 3 points vertical offset
                        textcoords="offset points",
                        ha='center', va='bottom')

    autolabel(rects1)
    autolabel(rects2)

    fig.tight_layout()

    plt.show()

# Example usage with your sentiment prediction results
visualize_predictions(results_dataset1, results_dataset2)
