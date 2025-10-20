---
title: Triaging an issue with AI
intro: 'Use AI to triage new issues and determine whether the issue is actionable or needs more information.'
permissions: 'Anyone on {% data variables.product.prodname_dotcom_the_website %} can configure AI triaging in any repository they have admin access to.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Triage an issue
---

## About the AI-powered issue intake tool

The AI-powered issue intake tool helps you automate the triage process for new issues in your repository. Open source maintainers and project managers are often inundated with new issues, many of which may lack necessary information, or are not actionable. This tool leverages AI to analyze incoming issues and provide suggestions for triaging them, helping you manage your issue backlog more effectively.

## Enabling the AI-powered issue intake tool

The AI-powered issue intake tool is a {% data variables.product.github %} action that you can enable in your repository. For more information about {% data variables.product.github %} actions, see [AUTOTITLE](/actions/get-started/understand-github-actions).

1. Visit the [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).
1. Search for and select "AI assessment comment labeler."
1. On the action's {% data variables.product.prodname_marketplace %} page, follow the setup instructions to install the action in your repository.
1. Optionally, customize the action's configuration file based on the guidance provided on the action's {% data variables.product.prodname_marketplace %} page.

## Using the AI-powered issue intake tool

If you are using the default configuration of the AI-powered issue intake tool, the action will be triggered when the `request ai review` label is applied to an issue. For information on creating a label, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label). Once triggered, the tool will analyze the issue and provide suggestions for triaging it.

1. Navigate to the "Issues" tab in your repository.
1. Open a new or existing issue that you want to triage.
1. Add the AI labels that map to the analyses you want the tool to perform.
1. Apply the `request ai review` label to the issue.
1. Wait for the action to complete. You can monitor the progress in the "Actions" tab of your repository.
1. Once the action is complete, check the issue for comments or labels added by the AI-powered issue intake tool. The tool may suggest actions such as requesting more information, or marking it as actionable.
1. Review the suggestions provided by the tool and take appropriate action on the issue.
