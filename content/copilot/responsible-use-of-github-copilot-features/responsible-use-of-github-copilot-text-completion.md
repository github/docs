---
title: Responsible use of GitHub Copilot text completion
shortTitle: Copilot text completion
intro: 'Learn how to use {% data variables.product.prodname_copilot_autocomplete_pr %} responsibly by understanding its purposes, capabilities, and limitations.'
versions:
  feature: copilot
permissions: 'Members of an enterprise with a subscription to {% data variables.product.prodname_copilot_enterprise %}'
topics:
  - Copilot
type: rai
---

{% ifversion fpt %}

{% data reusables.rai.copilot.enterprise-fpt-link %}

{% endif %}

## About {% data variables.product.prodname_copilot_autocomplete_pr %}

{% data variables.product.prodname_copilot_autocomplete_pr %} is an AI-powered feature that allows users to more easily write pull request descriptions by suggesting text as you type.

When you pause briefly while typing a summary, {% data variables.product.prodname_copilot_short %} scans through the pull request and provides suggested prose, attempting to finish your thought.

The only supported language for {% data variables.product.prodname_copilot_autocomplete_pr %} is English.

{% data variables.product.prodname_copilot_autocomplete_pr %} uses a simple-prompt flow leveraging the {% data variables.product.prodname_copilot_short %} API, utilizing the generic large language model, with no additional trained models.

When you pause during typing the pull request description, a call is generated to the {% data variables.product.prodname_copilot_short %} API to generate suggested text to insert into the description at the current cursor position. The text complete request includes information from the pull request, including the pull request title, any text already in the description, the pull request commit titles, partial raw diffs, and recently viewed pull request and issue titles in a prompt that requests {% data variables.product.prodname_copilot_short %} to generate a suggestion for the next words you are likely to type. The response is then displayed as grayed out text following the cursor. You can accept the suggested text by pressing the tab key, or reject the suggestion by simply continuing to type, or moving the cursor focus out of the description field.

## Use case for pull request text complete

The goal of {% data variables.product.prodname_copilot_autocomplete_pr %} is to help the pull request author to quickly provide context to the human reviewers of the pull request. When reviewing a pull request it is valuable to understand context such as why changes are being requested and how the pull request makes those changes. It may help increase developer productivity by reducing the time taken to open a pull request.

## Improving the performance of pull request text complete

The feature is intended to supplement rather than replace a human's work adding context to pull requests. The quality of the text complete suggestions will depend on the quality of the title, the commit messages, and the text already added to the description. We encourage you to continue adding useful context and let {% data variables.product.prodname_copilot_short %} suggest as you go. It remains your responsibility to review and assess the accuracy of information in the pull requests you create.

## Limitations of pull request text complete

Currently, our team is aware that there are limitations to this feature. Many of them are expected in leveraging our {% data variables.product.prodname_copilot_short %} API; however, there are a few that are specific to {% data variables.product.prodname_copilot_autocomplete_pr %} which pertain to limited scope for very large pull requests, and potentially inaccurate responses. We also note that users should expect terms used in their pull request to appear in the AI-generated suggestions.

This feature has been subject to RAI Red Teaming and we will continue to monitor the efficacy and safety of the feature over time. For more information, see "[Microsoft AI Red Team building future of safer AI](https://www.microsoft.com/en-us/security/blog/2023/08/07/microsoft-ai-red-team-building-future-of-safer-ai/)" on the Microsoft security blog.

### Limited scope

It is possible for very large pull requests, that some of the pull request content that the {% data variables.product.prodname_copilot_short %} API relies upon for automatically suggesting text will not fit into the API call, and so for very large pull requests, some of the suggestions you might expect may not occur.

### Inaccurate responses

The more inputs and context that {% data variables.product.prodname_copilot_short %} has to work from, the better the text complete suggestions will be. However, since the feature is quite new, it will take time to reach exact precision with the text complete suggestions that are generated. In the meantime, there may be cases where a generated text complete is less accurate and requires the user to make modifications before saving and publishing their pull request with this description. In addition, there is a risk of "hallucination," where {% data variables.product.prodname_copilot_short %} generates statements that are inaccurate. For these reasons, reviewing is a requirement, and careful review of the output is highly recommended.

### Replication of pull request content

Because a text complete suggestion is drawn from changes that were made in a pull request, if harmful or offensive terms are within the content of the pull request, there is potential for the suggestion to also include those terms.

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center/)
