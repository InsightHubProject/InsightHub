from flask import Flask, request, jsonify
from flask_cors import CORS

# Assuming TweetFetcher and TweetAnalyzer are in the correct path
from TweetFetcher import TweetFetcher
from TweetAnalyzer import TweetAnalyzer

app = Flask(__name__)
CORS(app)

@app.route('/process_word', methods=['POST'])
def process_word():
    data = request.json
    word = data.get('word')
    if not word:
        return jsonify({'error': 'No word provided'}), 400

    # Used to fetch tweets from the database (MongoDB)
    fetcher = TweetFetcher()
    tweets = fetcher.get_tweets(word)

    # Used to analyze the tweets
    analyzer = TweetAnalyzer()

    # Analyze the tweets
    data = analyzer.analyze_tweets(tweets)

    # Convert the date to a datetime object
    data = analyzer.convert_date(data)

    # Group the data in a list
    grouped_data_list = analyzer.group_data_list(data)

    # # Group the data in a table
    # grouped_data_table = analyzer.group_data_table(data)

    # # Print the data
    # print()
    # print(f"-----------------Table of {word} Tweets-----------------")
    # print(grouped_data, end="\n\n")
    #
    # print(f"-----------------List of {word} Tweets-----------------")
    # print(grouped_data_list)

    return jsonify(grouped_data_list)

if __name__ == '__main__':
    app.run(debug=True)
