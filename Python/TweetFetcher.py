from pymongo import MongoClient
from dotenv import load_dotenv
import os

class TweetFetcher:
    def __init__(self):
        load_dotenv()
        mongodb_uri = os.getenv('MONGODB_CONNECTION_STRING')
        client = MongoClient(mongodb_uri)
        self.db = client['insight-hub']
        self.collection = self.db['tweets']

    def get_tweets(self, word):
        word = word.lower()
        tweets_list = []
        for doc in self.collection.find():
            if word in doc['content'].lower():
                tweets_dict = {}
                tweets_dict["id"] = doc['_id']
                tweets_dict["tweet"] = doc['content']
                tweets_dict["date"] = doc['date']
                tweets_list.append(tweets_dict)
        return tweets_list