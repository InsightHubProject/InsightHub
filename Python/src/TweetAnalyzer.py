import pandas as pd
from nltk.sentiment import SentimentIntensityAnalyzer
import nltk

class TweetAnalyzer:
    def __init__(self):
        nltk.download('vader_lexicon')
        self.sia = SentimentIntensityAnalyzer()

    def classify_sentiment(self, score):
        if score > 0.05:
            return 'Positive'
        elif score < -0.05:
            return 'Negative'
        else:
            return 'Neutral'

    def analyze_tweets(self, tweets_list):
        df = pd.DataFrame(tweets_list)
        df['sentiment'] = df['tweet'].apply(lambda x: self.classify_sentiment(self.sia.polarity_scores(x)['compound']))
        return df

    def convert_date(self, df):
        df['date'] = pd.to_datetime(df['date'])
        df['year'] = df['date'].dt.year
        return df

    def group_data(self, df):
        grouped_data = df.groupby(['year', 'sentiment']).size().unstack(fill_value=0)
        return grouped_data