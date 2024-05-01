from flask import render_template, request, redirect, url_for
from . import app, db
from .models import User, Transportation

# Define routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        # Process search form data
         from_city = request.form.get('from_city')
        to_city = request.form.get('to_city')
        departure_date = request.form.get('departure_date')
        
        # Perform database query to fetch transportation options based on search criteria
        transportation_options = Transportation.query.filter_by(from_city=from_city, to_city=to_city, departure_date=departure_date).all()
        
        # Render search results template with transportation options
        return render_template('search_results.html', transportation_options=transportation_options)
    
    return render_template('search.html')

