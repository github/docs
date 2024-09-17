# Observability

Observability, for lack of simpler term, is our ability to collect data about how the Docs operates. These tools allow us to monitor the health of our systems, catch any errors, and get paged if a system stops working. 

In this directory we have files that connect us to our observability tools, as well as high-level error handling that helps keep our systems resilient.

We collect data in our observability systems to track the health of the Docs systems, not to track user behaviors. User behavior data collection is under the `src/events` directory.
