---
title: About GitHub Copilot telemetry
intro: '{% data variables.product.prodname_dotcom %} Copilot collects and relies on additional telemetry data beyond what other {% data variables.product.prodname_dotcom %} products and services collect.'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## What data is collected
The {% data variables.product.prodname_dotcom %} Copilot collects activity from the user’s Visual Studio Code editor, tied to a timestamp, and metadata. This metadata consists of the extension settings and the standard metadata collected by the [Visual Studio Code extension telemetry package](https://www.npmjs.com/package/vscode-extension-telemetry):

* Visual Studio Code machine ID (pseudonymized identifier)
* Visual Studio Code session ID (pseudonymized identifier)
* Visual Studio Code version
* [Geolocation from IP address](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-collection?tabs=net) (country, state/province and city, but not the IP address itself)
* Operating system and version
* Extension version
* The VS Code UI (web or desktop)

The activity collected consists of events that are triggered when:

* An error occurs (it records the error kind and relevant background; e.g. if it’s an authentication error the key expiry date is recorded)
* Our models are accessed to ask for code suggestions (it records editor state like position of cursor and snippets of code)—this includes cases when the user takes an action to request code suggestions
* Code suggestions are received or displayed (it records the suggestions, post-processing, and metadata like model certainty and latency)
* Code suggestions are redacted due to filters that ensure AI safety
* The user acts on code suggestions (e.g. to accept or reject them)
* The user has acted on code suggestions and then it records whether or how they persisted in the code

## How the data is used
This data will only be used by {% data variables.product.company_short %} for:

* Directly improving the product, including assessing different strategies in processing and predicting which suggestions users may find helpful
* Directly evaluating the product, e.g. by measuring the positive impact it has on the user
* Improving the underlying code generation models, e.g. by providing positive and negative examples (but always so that your private code is not used as input to suggest code for other users of {% data variables.product.prodname_dotcom %} Copilot)
* Guiding closely related {% data variables.product.prodname_dotcom %} products
* Investigating and detecting potential abuse of the {% data variables.product.prodname_dotcom %} Copilot service
* Other purposes related to improving the {% data variables.product.prodname_dotcom %} Copilot service

## How the data is shared
The telemetry data is stored securely on {% data variables.product.prodname_dotcom %} systems, with appropriate encryption in place.

We know user edit actions and source code snippets are very sensitive data, and access is strictly controlled. The data can only be accessed by (1) named {% data variables.product.company_short %} personnel (employees and contractors) working on the {% data variables.product.company_short %} Copilot team or on the {% data variables.product.company_short %} platform health team, (2) select Microsoft personnel (employees and contractors) working on or with the {% data variables.product.company_short %} Copilot team, and (3) select employees of OpenAI who work on {% data variables.product.company_short %} Copilot.
