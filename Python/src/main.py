from TweetFetcher import TweetFetcher
from TweetAnalyzer import TweetAnalyzer

def main():

    word = "tesla"

    # Used to fetch tweets from the database
    fetcher = TweetFetcher()
    tweets = fetcher.get_tweets(word)

    # Used to analyze the tweets
    analyzer = TweetAnalyzer()
    data = analyzer.analyze_tweets(tweets)
    data = analyzer.convert_date(data)
    grouped_data = analyzer.group_data_table(data)
    grouped_data_list = analyzer.group_data_list(data)

    print()
    print(f"-----------------Table of {word} Tweets-----------------")
    print(grouped_data, end="\n\n")

    print(f"-----------------List of {word} Tweets-----------------")
    print(grouped_data_list)

if __name__ == "__main__":
    main()