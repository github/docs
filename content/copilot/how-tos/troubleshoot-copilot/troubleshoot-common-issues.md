---
title: Troubleshooting common issues with GitHub Copilot
intro: 'This guide describes the most common issues with {% data variables.product.prodname_copilot %} and how to resolve them.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Troubleshoot common issues
redirect_from:
  - /copilot/troubleshooting-github-copilot/troubleshooting-common-issues-with-github-copilot
  - /copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat-in-ides
  - /copilot/troubleshooting-github-copilot/troubleshooting-authentication-issues-with-github-copilot-chat
  - /copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat
  - /copilot/how-tos/troubleshoot/troubleshooting-issues-with-github-copilot-chat
  - /copilot/how-tos/troubleshoot/troubleshooting-common-issues-with-github-copilot
  - /copilot/how-tos/troubleshoot/troubleshoot-common-issues
contentType: how-tos
category:
  - Troubleshooting Copilot
---


For questions about the general use of {% data variables.product.prodname_copilot %}, product impact, human oversight, and privacy, see the comprehensive list of [{% data variables.product.prodname_copilot %} FAQs](https://github.com/features/copilot#:~:text=Frequently%20asked%C2%A0questions).

If {% data variables.product.prodname_copilot %} stops working, check {% data variables.product.prodname_dotcom %}'s [Status page](https://githubstatus.com) for any active incidents.

## Unable to use the {% data variables.product.prodname_copilot %} extension in the IDE

We recommend you follow the quickstart guide for {% data variables.product.prodname_copilot %} while setting up {% data variables.product.prodname_copilot %} on your machine. For more information, see [AUTOTITLE](/copilot/quickstart).

The {% data variables.product.prodname_copilot %} extension is frequently updated to fix bugs and add new features. It's important to keep your extension up to date because older clients cannot communicate with the {% data variables.product.prodname_copilot %} servers. Update your {% data variables.product.prodname_copilot %} extension on all the machines you have it installed.

{% data reusables.copilot.sign-in-ghecom %} See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

For more information about configuring {% data variables.product.prodname_copilot %} in a supported IDE, see [AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment).

## {% data variables.product.prodname_copilot %} not working in some files

If you're using {% data variables.product.prodname_copilot %} with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} license, you may not see inline suggestions in your editor for some files. This happens when a file is excluded from being used by {% data variables.product.prodname_copilot %}. Content exclusion can be configured by a repository administrator, or by an organization owner.

When a file is affected by a content exclusion setting, {% data variables.product.prodname_copilot %} will not suggest inline suggestions in that file, and the content of that file will not be used to inform inline suggestions in other files.

{% data reusables.copilot.content-exclusion-tooltip %}

## {% data variables.product.prodname_copilot %} content exclusions are not being applied

Content exclusion can be configured at the repository{% ifversion ghec %}, organization, and enterprise{% else %} and organization{% endif %} level. The scope of the exclusion is determined by the level at which the rule is set:

{% data reusables.copilot.content-exclusions-scope %}

{% data reusables.copilot.content-exclusions-delay %} For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide#propagating-content-exclusion-changes-to-your-ide).

> [!NOTE]
> {% data reusables.copilot.content-exclusion-limitations %}

## Error: "{% data variables.product.prodname_copilot %} could not connect to server. Extension activation failed"

This error indicates that you do not have a {% data variables.product.prodname_copilot_short %} plan, or there was an error connecting to the {% data variables.product.prodname_dotcom %} API to request a token to use {% data variables.product.prodname_copilot %}.

To request another token from api.github.com, try signing in and out of {% data variables.product.prodname_copilot_short %} from your IDE. Once you've logged out, {% data variables.product.prodname_copilot_short %} will prompt you to sign back in.

If you cannot connect to the server, you can create a discussion in our [discussion forum](https://github.com/orgs/community/discussions/categories/copilot). You can include log files from your IDE to help us troubleshoot the issue. For more information on obtaining log files from your specific IDE, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment).

## {% data variables.product.prodname_copilot_short %} not suggesting multiple lines of code

This is a known issue and our team is working towards a fix. For more information, see this comment on a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/40522#discussioncomment-4701470).

## Error: "Sorry, your request was rate-limited."

This error suggests that you have exceeded the rate limit for {% data variables.product.prodname_copilot_short %} requests. {% data variables.product.github %} uses rate limits to ensure everyone has fair access to the {% data variables.product.prodname_copilot_short %}  service and to protect against abuse.

Most people see rate limiting for preview models, due to limited capacity.

Service-level request rate limits ensure high service quality for all {% data variables.product.prodname_copilot_short %}  users and should not affect typical or even deeply engaged {% data variables.product.prodname_copilot_short %} usage. We are aware of some use cases that are affected by it. {% data variables.product.github %} is iterating on {% data variables.product.prodname_copilot_short %}’s rate-limiting heuristics to ensure it doesn’t block legitimate use cases.

In case you experience repeated rate-limiting in {% data variables.product.prodname_copilot_short %}, contact {% data variables.contact.contact_support_page %}.

## Can't find {% data variables.copilot.copilot_chat_short %} in my IDE

If you can't find {% data variables.copilot.copilot_chat_short %} in your editor, make sure you have checked the "Prerequisites" section of [AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide).

> [!NOTE]
> The linked article has tabs for various IDEs.

## Latest {% data variables.copilot.copilot_chat_short %} does not work in {% data variables.product.prodname_vscode %}

{% data reusables.copilot.vscode-version-compatibility %}

To use {% data variables.copilot.copilot_chat_short %}, make sure you are using the [latest version of {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/updates).

## Authentication problems with {% data variables.enterprise.prodname_managed_user %} accounts

{% data reusables.copilot.sign-in-ghecom %} See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## Authentication problems in {% data variables.product.prodname_vscode %}

If you are signed in to {% data variables.product.github %} but {% data variables.product.prodname_copilot_short %} is unavailable in {% data variables.product.prodname_vscode %}, it may be due to an authentication problem. Try the following steps to resolve the issue:

1. In the bottom left corner of the {% data variables.product.prodname_vscode %} window, click the **Accounts** icon, hover over your {% data variables.product.prodname_dotcom %} username, and click the **Sign out** button.
1. To reload {% data variables.product.prodname_vscode %}, press <kbd>F1</kbd> to open the command palette, and select **Developer: Reload Window**.
1. After {% data variables.product.prodname_vscode %} reloads, sign back in to your {% data variables.product.prodname_dotcom %} account.

## Authentication problems in {% data variables.product.prodname_vs %}

If you experience authentication issues when you try to use {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vs %}, you can try the following steps to resolve the issue.

1. Check that the {% data variables.product.prodname_dotcom %} ID you are signed into {% data variables.product.prodname_vs %} with is the same as the one you have been granted access to {% data variables.copilot.copilot_chat_short %} with.
1. Check whether your {% data variables.product.prodname_dotcom %} ID/credentials need refreshing in {% data variables.product.prodname_vs %}. For more information, see [Work with {% data variables.product.prodname_dotcom %} accounts in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022&ref_product=copilot&ref_type=engagement&ref_style=text) in the {% data variables.product.prodname_vs %} documentation.
1. Try removing and re-adding your {% data variables.product.prodname_dotcom %} ID to {% data variables.product.prodname_vs %} and restarting {% data variables.product.prodname_vs %}.
1. If the above steps don't work, click the **Share feedback** button and select **Report a problem** to report the issue to the {% data variables.product.prodname_vs %} team.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

## Interrupted chat responses on {% data variables.product.prodname_dotcom_the_website %}

If a chat response terminates unexpectedly, before the response is complete, try resubmitting the question.

In {% data variables.copilot.copilot_chat_short %} ([github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text)), you can resubmit your question by clicking the {% octicon "sync" aria-label="Retry" %} button under the chat response.

## Further reading

* [AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-and-trade-controls)
