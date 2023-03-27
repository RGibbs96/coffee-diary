import json
import requests
import os

OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]



def get_coffee_bean_embedding_vector(coffee_object):
    """
    This function takes in a description string of a coffee bean. When a coffee bean is created, the description
    string will be created from the inputs and passed into this function. The function makes an API call to OPENAI
    and returns an embedding vector that encapsulates the meaning of the string.
    """
    bean_id = coffee_object.id
    # Single origin related logic
    if coffee_object.single_origin == False and coffee_object.origin2 is None:
        coffee_description = f"This coffee bean is called {coffee_object.name}. It was roasted by {coffee_object.roaster.name}. This is not a single origin coffee. This origins are an unlabelled {coffee_object.origin1.name}."
    elif coffee_object.single_origin == False and coffee_object.origin2 is not None and coffee_object.origin3 is None:
        coffee_description = f"This coffee bean is called {coffee_object.name}. It was roasted by {coffee_object.roaster.name}. This is not a single origin coffee. The countries of origin are {coffee_object.origin1.name} and {coffee_object.origin2.name}."
    elif coffee_object.single_origin == False and coffee_object.origin2 is not None and coffee_object.origin3 is not None:
        coffee_description = f"This coffee bean is called {coffee_object.name}. It was roasted by {coffee_object.roaster.name}. This is not a single origin coffee. The countries of origin are {coffee_object.origin1.name}, {coffee_object.origin2.name}, and {coffee_object.origin3.name}."
    if coffee_object.single_origin == True:
        coffee_description = f"This coffee bean is called {coffee_object.name}. It was roasted by {coffee_object.roaster.name}. This is a single origin coffee. The country of origin is {coffee_object.origin1.name}."
    # elevation related logic
    if coffee_object.elevation1 != None and coffee_object.elevation2 != None:
        coffee_description += f" This coffee was harvested from elevations of {coffee_object.elevation1} to {coffee_object.elevation2}."
    # process logic
    coffee_description += f" This coffee was processed using the {coffee_object.process} process and was roasted to a {coffee_object.roast_level}."
    # coffee tasting notes logic
    if coffee_object.note1 is not None and coffee_object.note2 is not None and coffee_object.note3 is not None:
        coffee_description += f" The tasting notes of this coffee are {coffee_object.note1}, {coffee_object.note2}, and {coffee_object.note3}."
    if coffee_object.note1 is not None and coffee_object.note2 is not None and coffee_object.note3 is None:
        coffee_description += f" The tasting notes of this coffee are {coffee_object.note1} and {coffee_object.note2}."
    if coffee_object.note1 is not None and coffee_object.note2 is None and coffee_object.note3 is None:
        coffee_description += f" The only provided tasting note of this coffee is {coffee_object.note1}."

    url = "https://api.openai.com/v1/embeddings"
    payload = {
        "input": coffee_description,
        "model": "text-embedding-ada-002"
    }
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_API_KEY}"
    }
    response = requests.post(url, data=json.dumps(payload), headers=headers)
    response_dict = json.loads(response.text)
    vector = response_dict["data"][0]["embedding"]

    return bean_id, vector
