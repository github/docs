---
title: About GitHub Copilot telemetry
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## What data is collected

Data collected is described in the "[{% data variables.product.prodname_copilot %} Telemetry Terms](/github/copilot/github-copilot-telemetry-terms)." In addition, the {% data variables.product.prodname_copilot %} extension/plugin collects activity from the user's Integrated Development Environment (IDE), tied to a timestamp, and metadata collected by the extension/plugin telemetry package. When used with Visual Studio Code, IntelliJ, NeoVIM, or other IDEs, {% data variables.product.prodname_copilot %} collects the standard metadata provided by those IDEs. 

## How the data is used by {% data variables.product.company_short %}

{% data variables.product.company_short %} will use this data for:

- Directly improving the product, including assessing different strategies in processing and predicting which suggestions users may find helpful
- Evaluating the product, e.g. by measuring the positive impact it has on the user
- Improving the underlying code generation models, e.g. by providing positive and negative examples (but always so that your private code is not used as input to suggest code for other users of {% data variables.product.prodname_copilot %})
- Guiding closely related {% data variables.product.company_short %} products
- Investigating and detecting potential abuse of the {% data variables.product.prodname_copilot %} service
- Other purposes related to improving the {% data variables.product.prodname_copilot %} service, including sharing as described in the next section

## How the data is shared

The telemetry data is stored securely on {% data variables.product.company_short %} systems, with appropriate encryption in place. We know user edit actions,  source code snippets, and URLs of repositories and file paths  are sensitive data. Consequently, access is strictly controlled. The data can only be accessed by (1) named {% data variables.product.company_short %} personnel (employees and contractors) working on the {% data variables.product.prodname_copilot %} team or on the {% data variables.product.company_short %} platform health team, (2) Microsoft personnel (employees and contractors) working on or with the Azure and/or {% data variables.product.prodname_copilot %} teams, and (3) employees of OpenAI who work on {% data variables.product.prodname_copilot %}.

