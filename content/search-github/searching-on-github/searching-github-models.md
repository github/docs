---
title: Searching GitHub Models
intro: 'You can search for models that are available on {% data variables.product.prodname_github_models %}.'
versions:
  feature: github-models
topics:
  - GitHub search
shortTitle: Search GitHub Models
---

## About searching {% data variables.product.prodname_github_models %}

You can find models on {% data variables.product.prodname_github_models %} in two ways:

* Search from {% data variables.product.prodname_marketplace %}.
* Search across all of {% data variables.product.prodname_dotcom %} and then filter the results to Marketplace.

## Searching in {% data variables.product.prodname_marketplace %}

{% data reusables.marketplace.visit-marketplace %}
1. Type any keywords and `type:models` and press **Enter**.

## Searching across {% data variables.product.prodname_dotcom %}

Anytime you search across all of {% data variables.product.prodname_dotcom %}, you can filter the results to see matching models from {% data variables.product.prodname_marketplace %}.

1. Navigate to https://github.com/search.
1. Type any keywords and press **Enter**.
1. To see all available filters for your search, in the "Filter by" sidebar, click **More**.
1. To see results from {% data variables.product.prodname_github_models %}, click **Marketplace**.

## Searching within a specific field

The `in` qualifier used in conjunction with search text finds models that match the specified text in that field. Possible fields include `tags`, `license`, `name`, `description`, `transparency`, and `task`.

|Qualifier|Example|
|---|---|
|<code>in:<em>FIELD</em></code> | [**in:tags agents**](https://github.com/search?q=in:tags+agents&type=marketplace) matches models with the 'agents' tag.
|<code>in:<em>FIELD</em></code> | [**in:license distribute**](https://github.com/search?q=in:license+distribute&type=marketplace) matches models who mention 'distribute' in their license.
|<code>in:<em>FIELD</em></code> | [**in:transparency "responsible ai"**](https://github.com/search?q=in:transparency+%22responsible+ai%22&type=marketplace) matches models who mention 'responsible ai' in their transparency information.

## Search by category

The `category` qualifier finds models that are tagged with a specific term.

|Qualifier|Example|
|---|---|
|<code>category:<em>CATEGORY</em></code> | [**category:multilingual**](https://github.com/search?q=category:multilingual&type=marketplace) matches models in the multilingual category.
|<code>category:<em>CATEGORY</em></code> | [**category:"large context"**](https://github.com/search?q=category:%22large+context%22+&type=marketplace) matches models in the large context category.

## Search by input modality

The `input-modality` qualifier finds models that support a particular medium for providing input. Possible modalities include `text`, `image`, and `audio`.

|Qualifier|Example|
|---|---|
|<code>input-modality:<em>MODALITY</em></code> | [**input-modality:text**](https://github.com/search?q=input-modality:text&type=marketplace) matches models that support text input.

## Search by output modality

The `output-modality` qualifier finds models that support a particular medium for providing output. Possible modalities include `text` and `embeddings`.

|Qualifier|Example|
|---|---|
|<code>output-modality:<em>MODALITY</em></code> | [**output-modality:embeddings**](https://github.com/search?q=output-modality:embeddings&type=marketplace) matches models that support embedding output.

## Search by language

The `language` qualifier finds models that support a specified human language.

|Qualifier|Example|
|---|---|
|<code>language:<em>TWO_CHARACTER_CODE</em></code> | [**language:es**](https://github.com/search?q=language:es&type=marketplace) matches models that support Spanish.
|<code>language:<em>NAME</em></code> | [**language:arabic**](https://github.com/search?q=language:arabic&type=marketplace) matches models that support Arabic.

## Search by task

The `task` qualifier finds models that can be used to accomplish a specific task.

|Qualifier|Example|
|---|---|
|<code>task:<em>TASK</em></code> | [**task:embeddings**](https://github.com/search?q=task:embeddings&type=marketplace) matches models that support embedding.
|<code>task:<em>TASK</em></code> | [**task:chat-completion**](https://github.com/search?q=task:chat-completion&type=marketplace) matches models that support interaction via chat.

## Search by publisher

The `publisher` qualifier finds models released by a particular publisher.

|Qualifier|Example|
|---|---|
|<code>publisher:<em>PUBLISHER_NAME</em></code> | [**publisher:"Mistral AI"**](https://github.com/search?q=publisher:%22Mistral+AI%22&type=marketplace) matches models by Mistral AI.

## Search by input token limit

The `input-tokens` qualifier finds models with an input token limit above or below a particular value, or within a range.

|Qualifier|Example|
|---|---|
|<code>input-tokens:<em>VALUE</em></code> | [**input-tokens:>10000**](https://github.com/search?q=input-tokens:%3E10000&type=marketplace) matches models with an input token limit greater than 10,000.
|<code>input-tokens:<em>VALUE</em></code> | [**input-tokens:15000..20000**](https://github.com/search?q=input-tokens:15000..20000&type=marketplace) matches models with an input token limit between 15,000 and 20,000.

## Search by output token limit

The `output-tokens` qualifier finds models with an output token limit above or below a particular value, or within a range.

|Qualifier|Example|
|---|---|
|<code>output-tokens:<em>VALUE</em></code> | [**output-tokens:<8000**](https://github.com/search?q=output-tokens:%3C8000&type=marketplace) matches models with an output token limit less than 8,000.
|<code>output-tokens:<em>VALUE</em></code> | [**output-tokens:15000..20000**](https://github.com/search?q=output-tokens:15000..20000&type=marketplace) matches models with an output token limit between 15,000 and 20,000.

## Search by rate limit tier

The `rate-limit-tier` qualifier finds models with a particular tier of rate limit. Possible tiers include `low`, `high`, and `custom`.

|Qualifier|Example|
|---|---|
|<code>rate-limit-tier:<em>TIER</em></code> | [**rate-limit-tier:low**](https://github.com/search?q=rate-limit-tier:low&type=marketplace) matches models with a low rate limit tier.

## Search by license type

The `license` qualifier finds models that use a particular license.

|Qualifier|Example|
|---|---|
|<code>license:<em>LICENSE</em></code> | [**license:mit**](https://github.com/search?q=license:mit&type=marketplace) matches models that use the MIT license.
|<code>license:<em>LICENSE</em></code> | [**license:custom**](https://github.com/search?q=license:custom&type=marketplace) matches models that use a custom license.

## Sorting results

The `sort` qualifier is used to sort results. It can be used alone or combined with other qualifiers and search text.

|Qualifier|Example|
|---|---|
|<code>sort:<em>FIELD</em></code> | [**sort:created-desc publisher:meta**](https://github.com/search?q=sort:created-desc+publisher:meta&type=marketplace) matches models published by Meta, sorted with the most recently added first.
|<code>sort:<em>FIELD</em></code> | [**sort:name-asc in:task chat-completion**](https://github.com/search?q=sort:name-asc+in:task+chat-completion&type=marketplace) matches models that allow chat completion, sorted alphabetically.

## Further reading

* [AUTOTITLE](/search-github/getting-started-with-searching-on-github/sorting-search-results)
