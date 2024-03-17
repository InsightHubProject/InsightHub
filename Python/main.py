from TweetFetcher import TweetFetcher
from TweetAnalyzer import TweetAnalyzer

def main():
    # Used to fetch tweets from the database
    fetcher = TweetFetcher()
    tweets = fetcher.get_tweets('tesla')

    # Used to analyze the tweets
    analyzer = TweetAnalyzer()
    data = analyzer.analyze_tweets(tweets)
    data = analyzer.convert_date(data)
    grouped_data = analyzer.group_data(data)

    print(grouped_data)

if __name__ == "__main__":
    main()