#!/bin/bash

export FLASK_APP=backend/api.py
export FLASK_DEBUG=1

export NOUN_KEY="YOUR_KEY_HERE"
export NOUN_SECRET="YOUR_SECRET_HERE"

flask run