import pinecone
import os
import json
import requests


PINECONE_API_KEY = os.environ["PINECONE_API_KEY"]
index = pinecone.Index("coffee-beans")

def upsert_coffee_vector(bean_id, vector):
    url = "https://coffee-beans-8a723aa.svc.us-east-1-aws.pinecone.io/vectors/upsert"
    payload = {
        "vectors": [
        {
        "id": str(bean_id),
        "metadata": {},
        "values": vector
        }
        ],
        "namespace": ""
    }
    headers = {
        "Content-Type": "application/json",
        "Api-Key": f"{PINECONE_API_KEY}"
    }

    upsert_response = requests.post(url, data=json.dumps(payload), headers=headers)
    print(upsert_response)
    return True

def get_similar_vectors(bean_id):
    url = "https://coffee-beans-8a723aa.svc.us-east-1-aws.pinecone.io/query"
    payload = {
        "id": str(bean_id),
        "topK": 6,
        "includeMetadata": True,
        "includeValues": False,
        "namespace": ""
    }
    headers = {
        "Content-Type": "application/json",
        "Api-Key": f"{PINECONE_API_KEY}"
    }

    query_response = requests.post(url, data=json.dumps(payload), headers=headers)
    query_object = json.loads(query_response.text)
    matches = query_object["matches"]
    matches.pop(0)
    match_list = []
    for match in matches:
        match_list.append(int(match["id"]))

    return match_list
