---
title: Responsible use of GitHub Copilot in GitHub Desktop
shortTitle: Copilot in GitHub Desktop
intro: 'Learn how to use {% data variables.copilot.copilot_desktop_short %} responsibly by understanding its purposes, capabilities, and limitations.'
product: '{% data reusables.gated-features.copilot-in-desktop %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-in-github-desktop
  - /copilot/responsible-use-of-github-copilot-features/copilot-in-github-desktop
contentType: rai
category: 
  - Responsible use
---

## About {% data variables.copilot.copilot_desktop_short %}

{% data variables.product.prodname_copilot_short %} commit message generation is an AI-powered feature that allows you to create a commit message summary (title) and description based on the changes you've selected to commit through {% data variables.product.prodname_desktop %}.

When users select specific lines of code, {% data variables.product.prodname_copilot_short %} scans through the code changes and provides a suggested summary (title) and description of the changes made in prose. You can review, edit, or regenerate suggestions before finalizing and manually pushing the commits to a branch.

The only supported language for {% data variables.product.prodname_copilot_short %}-generated commit messages in {% data variables.product.prodname_desktop %} is English.

{% data variables.product.prodname_copilot_short %} commit message generation uses a simple-prompt flow leveraging the {% data variables.product.prodname_copilot_short %} API, utilizing the generic large language model and no additional trained models.

When you click on the copilot button, a call is generated to the {% data variables.product.prodname_copilot_short %} API to generate suggested text to insert into the summary and description boxes. The text complete request includes information from the selected changes in the different files of the repository in a prompt that requests {% data variables.product.prodname_copilot_short %} to generate a suggestion for a commit message that accurately describes those changes. The response is then used to fill the summary and description boxes. You can then review the suggested message, edit it if needed, and then make a commit with it.

## Use cases for {% data variables.copilot.copilot_desktop_short %}

{% data variables.copilot.copilot_desktop_short %} aims to streamline the author workflow so that they can save time and maintain clear commit histories when summarizing their changes. For many users, this could be helpful for saving time when committing large changes.  Authors can review, edit, or regenerate suggestions before finalizing and manually pushing the commits to a branch. They can also select specific lines of code or files for better context understanding to increase accuracy. The feature is integrated seamlessly into the commit workflow for a smoother experience.

## Improving {% data variables.copilot.copilot_desktop_short %}

To enhance the experience and address some of the limitations of {% data variables.copilot.copilot_desktop_short %}, there are various measures that you can adopt. For more information about the limitations, see [Limitations of {% data variables.copilot.copilot_desktop_short %}](#limitations-of-copilot-in-github-desktop).

### Use {% data variables.copilot.copilot_desktop %} as a tool, not a replacement

The feature is intended to supplement rather than replace a human's work to draft commit messages. The quality of the commit message suggestions will depend on the quality of the code changes and the context in the changed files. We encourage you to select specific lines of code changes or files for better context understanding and increased accuracy. It remains your responsibility to review and assess the accuracy of information in the commits you create.

### Provide feedback

If you encounter any issues or limitations with {% data variables.copilot.copilot_desktop_short %}, you can provide feedback by creating an issue in the [{% data variables.product.prodname_desktop %} open source repository](https://github.com/desktop/desktop/issues/new?template=bug_report.yaml ). This can help the developers to improve the tool and address any concerns or limitations.

## Limitations of {% data variables.copilot.copilot_desktop_short %}

Depending on factors such as your operating system and input data, you may encounter different levels of accuracy when using {% data variables.copilot.copilot_desktop_short %}. The following information is designed to help you understand system limitations and key concepts about performance as they apply to {% data variables.copilot.copilot_desktop_short %}.

### Limited scope

{% data variables.copilot.copilot_desktop_short %} operates within defined boundaries and might struggle with intricate code changes, short diff windows, or recently developed programming languages. The quality of suggestions it provides can be influenced by the availability and diversity of training data. For instance, inquiries about well-documented languages like Python may yield more accurate responses compared to questions about less popular languages.

### Inaccurate responses

The more inputs and context that {% data variables.product.prodname_copilot_short %} can learn from, the better the outputs will become. However, since the feature is quite new, it will take time to reach exact precision with the summaries that are generated. In the meantime, there may be cases where a generated summary is less accurate and requires the user to make modifications before saving and publishing their pull request with this description. In addition, there is a risk of "hallucination," where {% data variables.product.prodname_copilot_short %} generates statements that are inaccurate. For these reasons, reviewing is a requirement, and careful review of the output is highly recommended by our team.

### Regenerating summaries

Commit messages are only created when users request them manually. When users submit updates or changes to repositories, the commit summary and description are not automatically updated. Users can ask {% data variables.product.prodname_copilot_short %} to generate a new message if required. Manual review of the updated {% data variables.product.prodname_copilot_short %} message is highly recommended. The updated message carries the same risks of inaccuracy as the original message.

### Replication of pull request content

Because a commit message is a summary of the changes that were made in a repository, there is potential for the summary to include harmful or offensive terms if any are within the content of the changes.

### Potential biases and errors

{% data variables.copilot.copilot_desktop %} training data is sourced from existing online sources. It’s important to note that these sources may include biases and errors of the individuals who contributed to the training data. {% data variables.copilot.copilot_desktop_short %} may inadvertently perpetuate these biases and errors.

## Further reading

* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page/)
