# Events

We record events from the browser into our data pipeline to aggregate anonymous data about how folks are using the Docs.

## Why events

Data helps us to understand where our Docs are successful, and where we need to improve.

## How to view events

1. We send a `POST /events` request from the browser.
2. Any data sent we check against our JSON schema.
3. After passing the schema check, we send the data along the path to the warehouse.

## How to work on event

When adding or changing properties, make sure to update the schema in both the JS file as well as the schema for the warehouse.

## How to get help for events

For hubbers, see the internal docs in the internal engineering repository.
