---
title: Troubleshooting common issues with GitHub Copilot
intro: 'This guide describes the most common issues with {% data variables.product.prodname_copilot %} and how to resolve them.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Common issues with GitHub Copilot
---


For questions about the general use of {% data variables.product.prodname_copilot %}, product impact, human oversight, and privacy, see the comprehensive list of [{% data variables.product.prodname_copilot %} FAQs](https://github.com/features/copilot#:~:text=Frequently%20asked%C2%A0questions).

If {% data variables.product.prodname_copilot %} stops working, check {% data variables.product.prodname_dotcom %}'s [Status page](https://githubstatus.com) for any active incidents.

## Unable to use the {% data variables.product.prodname_copilot %} extension in the IDE

We recommend you follow the quickstart guide for {% data variables.product.prodname_copilot %} while setting up {% data variables.product.prodname_copilot %} on your machine. For more information, see "[AUTOTITLE](/copilot/quickstart)."

The {% data variables.product.prodname_copilot %} extension is frequently updated to fix bugs and add new features. It's important to keep your extension up to date because older clients cannot communicate with the {% data variables.product.prodname_copilot %} servers. Update your {% data variables.product.prodname_copilot %} extension on all the machines you have it installed.

For more information about configuring {% data variables.product.prodname_copilot %} in a supported IDE, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment)."

## Error: "{% data variables.product.prodname_copilot %} could not connect to server. Extension activation failed"

This error indicates that you either do not have a {% data variables.product.prodname_copilot %} subscription, or there was an error connecting to the {% data variables.product.prodname_dotcom %} API to request a token to use {% data variables.product.prodname_copilot %}.

To request another token from api.github.com, try signing in and out of {% data variables.product.prodname_copilot %} from your IDE. Once you've logged out, {% data variables.product.prodname_copilot %} will prompt you to sign back in.

If you still cannot connect to the server, you can create a discussion in our [discussion forum](https://github.com/orgs/community/discussions/categories/copilot). You can include log files from your IDE to help us troubleshoot the issue. For more information on obtaining log files from your specific IDE, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment)."

## {% data variables.product.prodname_copilot %} not suggesting multiple lines of code

This is a known issue and our team is working towards a fix. For more information, see this comment on a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/40522#discussioncomment-4701470).

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-and-trade-controls)"
