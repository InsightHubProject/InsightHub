from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load the environment variables from the .env file
load_dotenv()

mongodb_uri = os.getenv('MONGODB_CONNECTION_STRING')
client = MongoClient(mongodb_uri)

db = client['insight-hub']

collection = db['tweets']

word = 'tesla'.lower()

# List of dictionaries
tweets_list = []

for doc in collection.find():
    if word in doc['content'].lower():
        # Create a new dictionary for each document
        tweets_dict = {}
        tweets_dict["id"] = doc['_id']
        tweets_dict["tweet"] = doc['content']
        tweets_dict["date"] = doc['date']
        # Add the dictionary to the list
        tweets_list.append(tweets_dict)

# Print the list of dictionaries
print(tweets_list)