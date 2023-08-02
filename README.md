# TO-DOs Web Application - Backend Readme

## Overview

This repository contains the backend implementation of a TO-DOs web application using a microservices architecture with Node.js and MongoDB.
The application consists of two separate microservices - one for managing todos and another for handling notifications.

## Assumptions

1. Since there is no mention of user authentication, we assume that there is only a single user for this application.
2. The "sendNotification()" method is already implemented, and we only need to implement the logic for when to trigger notifications based on todo deadlines.

## System Architecture

The backend is built on a microservices architecture to ensure scalability, maintainability, and separation of concerns. The architecture consists of two main components:

## Todos Microservice

This microservice is responsible for managing todo notifications. It handles the CRUD operations for todos and stores them in the MongoDB database. The todos data structure could look something like this:

- ![model](https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/46174b6c-59d7-4c0e-9595-11887acd7935)

The Todos Microservice will run on port 8080.(you can change the ports as needed).

## Notification Microservice

This microservice is responsible for scheduling a reminder to be sent before the deadline expires. It takes the information from MongoDB by querying only the reminders that are in the time range from now to another hour ahead.
The Notifications Microservice will run on port 8000. (you can change the ports as needed)

## How to Run

To run the backend of the TO-DOs web application, follow these steps:

1. Set up the MongoDB database:
   Change the private database according to your user in the notification.yaml, todos.yaml documents

- <img width="214" alt="env" src="https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/0bcbbd7b-cea6-4806-a347-443bb895e3bd">

2. Install dependencies for both microservices, and do Kubernetes deployment:

- ![kubernetes](https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/3090852e-115b-4f59-9ee0-6341cdb71fc8)

3.  Take Url from todos-microservice to front and use RestAPI with axios:

- ![service](https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/0eb2bc45-d9ea-4581-8d99-847c6d39b54d)

- ![url](https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/02ef835f-b56c-47b0-94d7-b592a7bb4fca)


## How to Run without a Kubernetes

To run the backend of the TO-DOs web application, follow these steps:

1. Clone the git repository:

-<img width="203" alt="clone" src="https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/4ec42e40-bcf3-4607-9051-b94b957e933b">


2. Install dependencies for both microservices:

-![npm-install](https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/abb3671a-e407-42f9-9a07-26261d7ff173)

3. Set up the MongoDB database:

4. Start the microservices:

-![npm-start](https://github.com/eliyahu2323/Todos-Web-Application/assets/57942113/4b9da969-fc64-4768-9039-9be366bc7b90)

