from TweetFetcher import TweetFetcher
from TweetAnalyzer import TweetAnalyzer

def main():

    word = "tesla"

    # Used to fetch tweets from the database (MongoDB)
    fetcher = TweetFetcher()
    tweets = fetcher.get_tweets(word)

    # Used to analyze the tweets
    analyzer = TweetAnalyzer()

    # Used to analyze the tweets
    data = analyzer.analyze_tweets(tweets)

    # Used to convert the date to a datetime object
    data = analyzer.convert_date(data)

    # Used to group the data in a table
    grouped_data = analyzer.group_data_table(data)

    # Used to group the data in a list
    grouped_data_list = analyzer.group_data_list(data)

    # Print the data
    print()
    print(f"-----------------Table of {word} Tweets-----------------")
    print(grouped_data, end="\n\n")

    print(f"-----------------List of {word} Tweets-----------------")
    print(grouped_data_list)

if __name__ == "__main__":
    main()