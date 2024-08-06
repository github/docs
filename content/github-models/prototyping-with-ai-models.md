---
title: Prototyping with AI models
intro: 'Find and experiment with AI models for free.'
versions:
  feature: github-models
---

If you want to develop a generative AI application, you can use {% data variables.product.prodname_github_models %} to find and experiment with AI models for free. Once you are ready to bring your application to production, you can switch to a token from a paid Azure account. See the [Azure AI](https://ai.azure.com/github/model/docs) documentation.

See also "[AUTOTITLE](/github-models/responsible-use-of-github-models)."

## Finding AI models

To find AI models, go to [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/models), then click {% octicon "ai-model" aria-hidden="true" %} **Models** in the sidebar.

To view details about a model, click on the model's name.

## Experimenting with AI models in the playground

>[!NOTE]
>
> The playground is in limited public beta and subject to change. To request access, [join the waitlist](https://github.com/marketplace/models/waitlist).

{% data variables.product.prodname_marketplace %} provides a free playground where you can adjust model parameters and submit prompts to see how the model responds.

To open the playground, go to [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/models), then click {% octicon "ai-model" aria-hidden="true" %} **Models** in the sidebar. Click on a model's name, then click {% octicon "command-palette" aria-hidden="true" %} **Playground**.

To adjust parameters for the model, select the **Parameters** tab in the sidebar. To see code that corresponds to the parameters that you selected, switch from the **Chat** tab to the **Code** tab.

The playground is rate limited. See [Rate limits](#rate-limits) below.

## Experimenting with AI models using the API

>[!NOTE]
>
> The free API usage is in limited public beta and subject to change. To request access, [join the waitlist](https://github.com/marketplace/models/waitlist).

{% data variables.product.company_short %} provides free API usage so that you can experiment with AI models in your own application.

To learn how to use a model in your application, go to [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/models), then click {% octicon "ai-model" aria-hidden="true" %} **Models** in the sidebar. Click on a model's name, then click {% octicon "code" aria-hidden="true" %} **Code**.

The steps to use each model are similar. In general, you will need to:

1. Optionally, use the language dropdown to select the programming language.
1. Optionally, use the SDK dropdown to select which SDK to use.

   All models can be used with the Azure AI Inference SDK, and some models support additional SDKs. If you want to easily switch between models, you should select "Azure AI Inference SDK". If you selected "REST" as the language, you won't use an SDK. Instead, you will use the API endpoint directly.
1. Either open a codespace, or set up your local environment:
   * To run in a codespace, click {% octicon "codespaces" aria-hidden="true" %} **Run codespace**, then click **Create new codespace**.
   * To run locally:
      * Create a {% data variables.product.company_short %} {% data variables.product.pat_generic %}. The token should not have any scopes or permissions. See "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."
      * Save your token as an environment variable.
      * Install the dependencies for the SDK, if required.
1. Use the example code to make a request to the model.

The free API usage is rate limited. See [Rate limits](#rate-limits) below.

## Going to production

The rate limits for the playground and free API usage are intended to help you experiment with models and develop your AI application. Once you are ready to bring your application to production, you can use a token from a paid Azure account instead of your {% data variables.product.company_short %} {% data variables.product.pat_generic %}. You don't need to change anything else in your code. For more information, see the [Azure AI](https://ai.azure.com/github/model/docs) documentation.

## Rate limits

The playground and free API usage are rate limited by requests per minute, requests per day, tokens per request, and concurrent requests. If you get rate limited, you will need to wait for the rate limit that you hit to reset before you can make more requests.

Low, high, and embedding models have different rate limits. To see which type of model you are using, refer to the model's information in {% data variables.product.prodname_marketplace %}.

<table>
  <tr>
    <th scope="col" style="width:15%"><b>Rate limit tier</b></th>
    <th scope="col" style="width:25%"><b>Rate limits</b></th>
    <th scope="col" style="width:20%"><b>Free and Copilot Individual</b></th>
    <th scope="col" style="width:20%"><b>Copilot Business</b></th>
    <th scope="col" style="width:20%"><b>Copilot Enterprise</b></th>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Low</b></th>
    <th style="padding-left: 0"><b>Requests per minute</b></th>
    <td>15</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <th><b>Requests per day</b></th>
    <td>150</td>
    <td>300</td>
    <td>450</td>
  </tr>
  <tr>
    <th><b>Tokens per request</b></th>
    <td>8000 in, 4000 out</td>
    <td>8000 in, 4000 out</td>
    <td>8000 in, 8000 out</td>
  </tr>
  <tr>
    <th><b>Concurrent requests</b></th>
    <td>5</td>
    <td>5</td>
    <td>8</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>High</b></th>
    <th style="padding-left: 0"><b>Requests per minute</b></th>
    <td>10</td>
    <td>10</td>
    <td>15</td>
  </tr>
  <tr>
    <th><b>Requests per day</b></th>
    <td>50</td>
    <td>100</td>
    <td>150</td>
  </tr>
  <tr>
    <th><b>Tokens per request</b></th>
    <td>8000 in, 4000 out</td>
    <td>8000 in, 4000 out</td>
    <td>16000 in, 8000 out</td>
  </tr>
  <tr>
    <th><b>Concurrent requests</b></th>
    <td>2</td>
    <td>2</td>
    <td>4</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup" style="box-shadow: none"><b>Embedding</b></th>
    <th style="padding-left: 0"><b>Requests per minute</b></th>
    <td>15</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <th><b>Requests per day</b></th>
    <td>150</td>
    <td>300</td>
    <td>450</td>
  </tr>
  <tr>
    <th><b>Tokens per request</b></th>
    <td>64000</td>
    <td>64000</td>
    <td>64000</td>
  </tr>
  <tr>
    <th><b>Concurrent requests</b></th>
    <td>5</td>
    <td>5</td>
    <td>8</td>
  </tr>
</table>

These limits are subject to change without notice.

## Leaving feedback

To leave feedback about {% data variables.product.prodname_github_models %}, start a new discussion or comment on an existing discussion in the [GitHub Community](https://github.com/orgs/community/discussions/categories/models).
