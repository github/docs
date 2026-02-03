---
title: Responsible use of GitHub Copilot commit message generation
shortTitle: Commit message generation
allowTitleToDifferFromFilename: true
intro: 'Learn how to use {% data variables.product.prodname_copilot_short %} commit message generation responsibly by understanding its purposes, capabilities, and limitations.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: rai
category: 
  - Responsible use
---

## About {% data variables.product.prodname_copilot_short %} commit message generation

{% data variables.product.prodname_copilot_short %} commit message generation is an AI-powered feature that allows you to create a commit message summary (title) and description based on the changes you've selected to commit in {% data variables.product.prodname_dotcom_the_website %}. To learn about commit message generation in {% data variables.product.prodname_desktop %}, see [AUTOTITLE](/copilot/responsible-use/copilot-in-github-desktop).

When users commit changes to files using {% data variables.product.github %}'s web interface, {% data variables.product.prodname_copilot_short %} scans through the code changes and provides a suggested summary (title) and description of the changes made in prose. You can review and edit {% data variables.product.prodname_copilot_short %}'s suggested title and description **before** committing the changes to a branch.

The only supported language for {% data variables.product.prodname_copilot_short %}-generated commit messages in {% data variables.product.prodname_dotcom_the_website %} is English.

{% data variables.product.prodname_copilot_short %} commit message generation uses a simple-prompt flow leveraging the {% data variables.product.prodname_copilot_short %} API, utilizing the generic large language model and no additional trained models.

When you click on the **Commit changes** button in {% data variables.product.prodname_dotcom_the_website %}, a call is generated to the {% data variables.product.prodname_copilot_short %} API to generate suggested text to insert into the summary and description boxes. The text complete request includes information from the selected changes in the different files of the repository in a prompt that requests {% data variables.product.prodname_copilot_short %} to generate a suggestion for a commit message that accurately describes those changes. The response is then used to fill the summary and description boxes. You can then review the suggested message, edit it if needed, and then make a commit with it.

## Use cases for {% data variables.product.prodname_copilot_short %} commit message generation

{% data variables.product.prodname_copilot_short %} commit message generation aims to streamline the author workflow so that they can save time and maintain clear commit histories when summarizing their changes. For many users, this could be helpful for saving time when committing large changes.  Authors can review and edit suggestions before finalizing and manually committing the changes to a branch. The feature is integrated seamlessly into the commit workflow for a smoother experience.

## Improving {% data variables.product.prodname_copilot_short %} commit message generation

To enhance the experience and address some of the limitations of {% data variables.product.prodname_copilot_short %} commit message generation, there are various measures that you can adopt. For more information about the limitations, see [Limitations of {% data variables.product.prodname_copilot_short %} commit message generation](#limitations-of-copilot-commit-message-generation).

### Use {% data variables.product.prodname_copilot_short %} commit message generation as a tool, not a replacement

The feature is intended to supplement rather than replace a human's work to draft commit messages. The quality of the commit message suggestions will depend on the quality of the code changes and the context in the changed files. It remains your responsibility to review and assess the accuracy of information in the commits you create.

### Provide feedback

If you encounter any issues or limitations with {% data variables.product.prodname_copilot_short %} commit message generation, you can provide feedback via the [community discussion](https://github.com/orgs/community/discussions/categories/copilot-news-and-announcements). This can help the developers to improve the tool and address any concerns or limitations.

## Limitations of {% data variables.product.prodname_copilot_short %} commit message generation

Depending on factors such as your operating system and input data, you may encounter different levels of accuracy when using {% data variables.product.prodname_copilot_short %} commit message generation in {% data variables.product.prodname_dotcom_the_website %}. The following information is designed to help you understand system limitations and key concepts about performance as they apply to {% data variables.product.prodname_copilot_short %} commit message generation.

### Limited scope

{% data variables.product.prodname_copilot_short %} commit message generation operates within defined boundaries and might struggle with intricate code changes, short diff windows, or recently developed programming languages. The quality of suggestions it provides can be influenced by the availability and diversity of training data. For instance, inquiries about well-documented languages like Python may yield more accurate responses compared to questions about less popular languages.

### Inaccurate responses

The more inputs and context that {% data variables.product.prodname_copilot_short %} can learn from, the better the outputs will become. However, since the feature is quite new, it will take time to reach exact precision with the summaries that are generated. In the meantime, there may be cases where a generated summary is less accurate and requires the user to make modifications before saving and publishing their commit. In addition, there is a risk of "hallucination," where {% data variables.product.prodname_copilot_short %} generates statements that are inaccurate. For these reasons, reviewing is a requirement, and careful review of the output is highly recommended by our team.

### Replication of commit message content

Because a commit message is a summary of the changes that were made in a repository, there is potential for the summary to include harmful or offensive terms if any are within the content of the changes.

### Potential biases and errors

Training data for {% data variables.product.prodname_copilot_short %} commit message generation is sourced from existing online sources. It’s important to note that these sources may include biases and errors of the individuals who contributed to the training data. {% data variables.product.prodname_copilot_short %} commit message generation may inadvertently perpetuate these biases and errors.

## Opt out

Users wishing to opt out of {% data variables.product.prodname_copilot_short %} commit message generation can do so via the {% data variables.product.prodname_copilot_short %} [settings page](https://github.com/settings/copilot/features) in {% data variables.product.prodname_dotcom_the_website %}.

## Further reading

* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page/)
