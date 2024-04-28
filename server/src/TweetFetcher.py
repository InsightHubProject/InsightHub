from pymongo import MongoClient
from dotenv import load_dotenv
import os
import re

class TweetFetcher:
    def __init__(self):
        load_dotenv()
        mongodb_uri = os.getenv('MONGODB_CONNECTION_STRING')
        client = MongoClient(mongodb_uri)
        self.db = client['insight-hub']
        self.collection = self.db['tweets']

    def get_tweets(self, brand):
        brand = brand.lower()
        regex_pattern = r"\b" + re.escape(brand) + r"\b"
        query = {"content": {"$regex": regex_pattern, "$options": "i"}}
        result = self.collection.find(query)
        if result.count() == 0:
            return None  # Return None if no tweets found
        tweets_list = []
        for doc in result:
            tweets_dict = {
                "id": doc['_id'],
                "tweet": doc['content'],
                "date": doc['date']
            }
            tweets_list.append(tweets_dict)
        return tweets_list