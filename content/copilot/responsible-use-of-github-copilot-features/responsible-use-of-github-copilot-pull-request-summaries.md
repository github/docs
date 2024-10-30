---
title: Responsible use of GitHub Copilot pull request summaries
shortTitle: Pull request summaries
intro: 'Learn how to use {% data variables.product.prodname_copilot_for_prs %} responsibly by understanding its purposes, capabilities, and limitations.'
versions:
  feature: copilot
permissions: 'Members of an enterprise with a subscription to {% data variables.product.prodname_copilot_enterprise %}'
topics:
  - Copilot
type: rai
redirect_from:
  - /copilot/github-copilot-enterprise/copilot-pull-request-summaries/about-copilot-pull-request-summaries
---

{% ifversion fpt %}

{% data reusables.rai.copilot.enterprise-fpt-link %}

{% endif %}

## About {% data variables.product.prodname_copilot_for_prs %}

{% data variables.product.prodname_copilot_for_prs %} is an AI-powered feature that allows you to create a summary of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review.

When a user requests a summary, {% data variables.product.prodname_copilot_short %} scans through the pull request and provides an overview of the changes made in prose, as well as a bulleted list of changes with the files that they impact.

The only supported language for {% data variables.product.prodname_copilot_for_prs %} is English.

{% data variables.product.prodname_copilot_for_prs %} uses a simple-prompt flow leveraging the {% data variables.product.prodname_copilot_short %} API, with no additional trained models. This utilizes the generic large language model.

### Response generation

The current process uses a large language model to initiate the auto-complete process and generate the pull request summary.

#### Pipeline approach

When a user requests a summary, a workflow is triggered. The workflow uses the code diffs to build a prompt call, which requests {% data variables.product.prodname_copilot_short %} to generate a summary of the pull request. The summary request initiates a pipeline process which includes raw diffs from summarizable files in a prompt and requests {% data variables.product.prodname_copilot_short %} to generate an overall summary for the pull request.

### Output formatting

You can initiate this feature when creating a pull request, by editing the pull request description after creation, or in a comment in the pull request thread. Upon initiation, {% data variables.product.prodname_copilot_short %} will generate a two part summary:

* A paragraph, written in prose, giving an overview of the changes in the pull request.
* A bulleted list of the key changes, linked to the respective lines of code where those changes occur.

Larger pull requests can take a couple minutes for {% data variables.product.prodname_copilot_short %} to generate. Depending on your enterprise settings, you can share your feedback on a summary directly from the UI after a summary is generated to help us continue to improve the feature.

## Use case for pull request summaries

The goal of {% data variables.product.prodname_copilot_for_prs %} is to help optimize an author's ability to quickly provide context when they request a human review that requires sharing context of the changes that were made. It may help increase developer productivity by reducing the time taken to open a pull request.

For many users, it could provide more helpful context for the changes that were made within a pull request than would normally be available.

## Improving performance of pull request summaries

### Use {% data variables.product.prodname_copilot_for_prs %} as a tool, not a replacement

The feature is intended to supplement rather than replace a human's work to add context, and we encourage you to continue adding useful context and let {% data variables.product.prodname_copilot_short %} do the busy work of parsing the code and linking to specific files. It remains your responsibility to review and assess the accuracy of information in a pull request that you create.

### Provide feedback

{% data reusables.rai.copilot-dotcom-feedback-collection %}

If you encounter any issues or limitations with {% data variables.product.prodname_copilot_for_prs %}, you can provide feedback by clicking the "Bad summary" button (a thumbs down icon), which is displayed below the text box after a summary is generated and before you click **Create pull request** or **Update comment**.

![Screenshot of the bottom of a pull request comment. The feedback icons, thumbs up and thumbs down, are highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-summary-feedback.png)

After you rate a summary as good or bad, you can provide written feedback by clicking the link that's displayed.

## Limitations of pull request summaries

Currently, our team is aware that there are limitations to this feature. Many of them are expected in leveraging our {% data variables.product.prodname_copilot_short %} API; however, there are a few that are specific to {% data variables.product.prodname_copilot_for_prs %} which pertain to limited scope, longer processing times, and inaccurate responses. We also note that users should expect terms used in their PR to appear in the AI-generated summary. This feature has been subject to RAI Red Teaming and we will continue to monitor the efficacy and safety of the feature over time. For more information, see [Microsoft AI Red Team building future of safer AI](https://www.microsoft.com/en-us/security/blog/2023/08/07/microsoft-ai-red-team-building-future-of-safer-ai/) on the Microsoft security blog.

### Limited scope

Because of capacity, we know that larger pull requests that reference 30 or more files will require more time to be processed thoroughly. We don't have an exact threshold currently, but have observed the first 30 files being accounted for and then any additional files being omitted from the summarization. We are working to address this current scope limitation.

### Processing time

In general, we expect a summary to be returned in 40 seconds or less after a user initiates the action. However, we have heard that this can take up to a minute, and in some cases a couple of minutes. We are working to decrease processing time and we know that users may not want to wait for this to finish before moving on to other parts of the pull request.

### Inaccurate responses

The more inputs and context that {% data variables.product.prodname_copilot_short %} can learn from, the better the outputs will become. However, since the feature is quite new, it will take time to reach exact precision with the summaries that are generated. In the meantime, there may be cases where a generated summary is less accurate and requires the user to make modifications before saving and publishing their pull request with this description. In addition, there is a risk of "hallucination," where {% data variables.product.prodname_copilot_short %} generates statements that are inaccurate. For these reasons, reviewing is a requirement, and careful review of the output is highly recommended by our team.

### Regenerating summaries

Pull request summaries are only created when users request them manually. When users submit updates or changes to their pull request, the summary is not automatically updated. Users can ask {% data variables.product.prodname_copilot_short %} to generate a new summary if required. Manual review of the updated {% data variables.product.prodname_copilot_short %} summary is highly recommended. The updated summary carries the same risks of inaccuracy as the original summary.

### Replication of pull request content

Because a summary is an outline of the changes that were made in a pull request, if harmful or offensive terms are within the content of the pull request, there is potential for the summary to also include those terms.

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center/)
{%- ifversion fpt %}
* "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-pull-request-summaries/creating-a-pull-request-summary-with-github-copilot)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{%- endif %}
