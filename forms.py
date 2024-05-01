from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField
from wtforms.validators import DataRequired

class SearchForm(FlaskForm):
    from_city = StringField('From City', validators=[DataRequired()])
    to_city = StringField('To City', validators=[DataRequired()])
    departure_date = DateField('Departure Date', format='%Y-%m-%d', validators=[DataRequired()])
    submit = SubmitField('Search')
