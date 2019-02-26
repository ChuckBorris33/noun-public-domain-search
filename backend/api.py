import requests
import os

from flask import Flask, request, Response
from flask_cors import CORS
from requests_oauthlib import OAuth1

app = Flask(__name__)
cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

KEY = os.environ.get('NOUN_KEY')
SECRET = os.environ.get('NOUN_SECRET')

auth = OAuth1(KEY, SECRET)

BASE_URL = 'http://api.thenounproject.com'

@app.route('/api/search_icons/<string:term>', methods=['GET'])
def search_icons(term):
    endpoint = f"{BASE_URL}/icons/{term}"  
    params = {
      'limit_to_public_domain': 1
    }
    response = requests.get(endpoint, auth=auth, params=params)
    return Response(response.content, mimetype='application/json')
