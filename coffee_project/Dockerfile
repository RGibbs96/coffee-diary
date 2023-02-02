# Select the base image that is best for our application
FROM python:3

# Set the working directory to copy stuff to
WORKDIR /app

COPY coffee_project coffee_project
COPY manage.py manage.py
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

CMD gunicorn --bind 0.0.0.0:8000 coffee_project.wsgi
