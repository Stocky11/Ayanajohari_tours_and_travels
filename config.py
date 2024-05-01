import os

class Config:
    # Flask app secret key
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key'

    # Database configuration
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'mysql://username:password@localhost/tourism_transport'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

