---
title: Building Copilot skillsets
intro: 'Learn the steps to build {% data variables.product.prodname_copilot_skillsets %} and integrate custom tools and functions into your Copilot environment.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Build {% data variables.product.prodname_copilot_skillsets_short %}
type: how_to
---

## Introduction

{% data variables.product.prodname_copilot_skillsets %} are a streamlined way to extend {% data variables.product.prodname_copilot %}'s functionality by defining API endpoints that {% data variables.product.prodname_copilot_short %} can call. When you create a skillset, {% data variables.product.prodname_copilot_short %} handles all the AI interactions while your endpoints provide the data or functionality. This guide walks you through configuring and deploying a skillset within your {% data variables.product.prodname_github_app %}.

## Prerequisites

Before you begin, make sure you have the following:

1. **A configured {% data variables.product.prodname_github_app %}:** You’ll need a {% data variables.product.prodname_github_app %} to act as the container for your skillset. If you haven’t already set one up, refer to [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension) and [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-extension).
1. **API endpoints:** You need one endpoint per skill. Each endpoint must:
    * Accept POST requests with the `application/json` MIME type
    * Be able to verify the signature of requests from {% data variables.product.github %} to authenticate their origin and prevent unauthorized access
    * Be publicly accessible via HTTPS

For more information about signature verification, see [Verifying that payloads are coming from {% data variables.product.github %}](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-github#verifying-that-payloads-are-coming-from-github).

## Configuration requirements

Each skillset is defined within a {% data variables.product.prodname_github_app %}. A single {% data variables.product.prodname_github_app %} can contain up to five skills. Each individual skill needs:
* **Name:** A clear and descriptive name (for example, "Get Issues").
* **Inference description:** A detailed explanation of what the skill does and when to use it (for example, "Searches for external issues matching specific criteria like status and labels").
* **API endpoint:** A POST endpoint that accepts JSON requests.
* **JSON schema:** The structure of data your endpoint expects.

### Example JSON schema

This example demonstrates a skill that requires two parameters: a status string and a label string. If no parameters are provided, an empty object with the type 'object' must be passed in as the request body.

```json
{
 "type": "object",
 "properties": {
   "status": {
     "type": "string",
     "description": "filter issues by status (open, closed)",
     "enum": ["open", "closed"]
   },
   "label": {
     "type": "string",
     "description": "filter issues by label"
   }
 }
}
```

This format lets users make natural-language requests like `find open security issues` and {% data variables.product.prodname_copilot_short %} will structure the appropriate API call.

## Using your skillset

To use your skillset:
1. Type `@` followed by your extension's name.
1. Type your prompt in natural language.

   For example:
   * `@skillset-example generate a lorem ipsum`
   * `@skillset-example give me sample data with 100 words`

Copilot interprets your request and calls the appropriate skill with the right parameters. There's no need to specify which skill to use—{% data variables.product.prodname_copilot_short %} determines this from your natural-language request and the inference descriptions provided.

## Setting up a skillset

{% data reusables.apps.settings-step-personal-orgs %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. In the list of {% data variables.product.prodname_github_apps %}, click the {% data variables.product.prodname_github_app %} you want to configure for your skillset.
1. In the navigation menu on the left, select **{% data variables.product.prodname_copilot_short %}**.
1. Under **App Type**, select **Skillset** from the dropdown menu.
1. Optionally, in the **Pre-authorization URL** field, enter the URL where users will be redirected to start the authentication process. This step is necessary if your API requires users to connect their GitHub account to access certain features or data.
{% data reusables.copilot.copilot-extensions.skillsets-configuration-steps %}
