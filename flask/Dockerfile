FROM python:3.9
WORKDIR bosch
COPY ./ ./
RUN pip3 install -r requirements.txt
EXPOSE 6000
CMD ["python3", "app.py"]