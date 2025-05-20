---
title: Handling API rate limits
shortTitle: Handle API rate limits
intro: '{% data variables.product.prodname_copilot_chat_short %} can help handle API  rate limits by suggesting code that detects implements retry logic.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/debugging-errors/handling-api-rate-limits
versions:
  feature: copilot
category:
  - 'Debugging code'
complexity:
  - Intermediate
octicon: bug
topics:
  - Copilot
---

When making requests to APIs, it's common to encounter rate limits that restrict the number of calls you can make within a certain time frame. {% data variables.product.prodname_copilot_chat %} can help you handle these limits by suggesting code to detect rate limit responses and automatically retry requests after a delay.

## Example scenario

The following Python code fetches weather data from an external API. If the API has rate limits, requests may fail when limits are exceeded, and your app may need a way to handle these responses gracefully by implementing retry logic.

```python
from flask import Flask, request
import requests

app = Flask(__name__)

WEATHER_API_URL = "https://api.example.com/weather"

@app.route('/get_weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    # Simulate an API request to the external weather service
    response = requests.get(WEATHER_API_URL, params={"city": city})
    weather_data = response.json()

    return weather_data
```

## Example prompt

`How can I handle API rate limits within get_weather().`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} might suggest code that implements a retry mechanism with exponential backoff to limit the frequency of retry attempts.

For example:

```python
import requests
from flask import Flask, request
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

app = Flask(__name__)

WEATHER_API_URL = "https://api.example.com/weather"

def requests_retry_session(
    retries=3,
    backoff_factor=0.3,
    status_forcelist=(500, 502, 504),
    session=None,
):
    session = session or requests.Session()
    retry = Retry(
        total=retries,
        read=retries,
        connect=retries,
        backoff_factor=backoff_factor,
        status_forcelist=status_forcelist,
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session

@app.route('/get_weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    try:
        response = requests_retry_session().get(WEATHER_API_URL, params={"city": city})
        response.raise_for_status()
        weather_data = response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}, 500

    return weather_data
```

In this example, {% data variables.product.prodname_copilot_short %}'s suggestions include setting up a retry session that allows the code to automatically retry requests if they fail due to specific status codes (500, 502, 504). The `backoff_factor` gradually increases the delay between retries, helping avoid exceeding the API's rate limit further.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
