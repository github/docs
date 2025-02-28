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

We recommend you follow the quickstart guide for {% data variables.product.prodname_copilot %} while setting up {% data variables.product.prodname_copilot %} on your machine. For more information, see [AUTOTITLE](/copilot/quickstart).

The {% data variables.product.prodname_copilot %} extension is frequently updated to fix bugs and add new features. It's important to keep your extension up to date because older clients cannot communicate with the {% data variables.product.prodname_copilot %} servers. Update your {% data variables.product.prodname_copilot %} extension on all the machines you have it installed.

{% data reusables.copilot.sign-in-ghecom %} See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

For more information about configuring {% data variables.product.prodname_copilot %} in a supported IDE, see [AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment).

## {% data variables.product.prodname_copilot %} not working in some files

If you're using {% data variables.product.prodname_copilot %} with a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} license, you may not see code completion suggestions in your editor for some files. This happens when a file is excluded from being used by {% data variables.product.prodname_copilot %}. Content exclusion can be configured by a repository administrator, or by an organization owner.

When a file is affected by a content exclusion setting, {% data variables.product.prodname_copilot %} will not suggest code completion in that file, and the content of that file will not be used to inform code completion suggestions in other files.

{% data reusables.copilot.content-exclusion-tooltip %}

## {% data variables.product.prodname_copilot %} content exclusions are not being applied

Content exclusion can be configured at the repository{% ifversion ghec %}, organization, and enterprise{% else %} and organization{% endif %} level. The scope of the exclusion is determined by the level at which the rule is set:

{% data reusables.copilot.content-exclusions-scope %}

{% data reusables.copilot.content-exclusions-delay %} For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide#propagating-content-exclusion-changes-to-your-ide).

> [!NOTE]
> {% data reusables.copilot.content-exclusion-limitations %}

## Error: "{% data variables.product.prodname_copilot %} could not connect to server. Extension activation failed"

This error indicates that you do not have a {% data variables.product.prodname_copilot %} subscription, or there was an error connecting to the {% data variables.product.prodname_dotcom %} API to request a token to use {% data variables.product.prodname_copilot %}.

To request another token from api.github.com, try signing in and out of {% data variables.product.prodname_copilot %} from your IDE. Once you've logged out, {% data variables.product.prodname_copilot %} will prompt you to sign back in.

If you cannot connect to the server, you can create a discussion in our [discussion forum](https://github.com/orgs/community/discussions/categories/copilot). You can include log files from your IDE to help us troubleshoot the issue. For more information on obtaining log files from your specific IDE, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment).

## {% data variables.product.prodname_copilot %} not suggesting multiple lines of code

This is a known issue and our team is working towards a fix. For more information, see this comment on a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/40522#discussioncomment-4701470).

## Error: "No valid OAuth token detected" in {% data variables.product.prodname_copilot_cli %}

This error suggests that a classic or fine-grained {% data variables.product.pat_generic %} might be in use, either via the `GITHUB_TOKEN` or `GH_TOKEN` environment variables, or during a `gh auth login` attempt. {% data variables.product.prodname_copilot_cli %} currently only supports using the {% data variables.product.prodname_cli %} OAuth app.

For more information, see the [{% data variables.product.prodname_copilot_cli_short %} extension repository](https://github.com/github/gh-copilot).

## Error: "Sorry, your request was rate-limited."

This error suggests that you have exceeded the rate limit for {% data variables.product.prodname_copilot_short %} requests. {% data variables.product.github %} uses rate limits to ensure everyone has fair access to the {% data variables.product.prodname_copilot_short %}  service and to protect against abuse.

Most people see rate limiting for preview models, like OpenAI’s o1 and o3-mini, which are rate-limited due to limited capacity.

Service-level request rate limits ensure high service quality for all {% data variables.product.prodname_copilot_short %}  users and should not affect typical or even deeply engaged {% data variables.product.prodname_copilot_short %} usage. We are aware of some use cases that are affected by it. {% data variables.product.github %} is iterating on {% data variables.product.prodname_copilot_short %}’s rate-limiting heuristics to ensure it doesn’t block legitimate use cases.

In case you experience repeated rate-limiting in {% data variables.product.prodname_copilot_short %}, contact {% data variables.contact.contact_support_page %}.

## Further reading

* [AUTOTITLE](/free-pro-team@latest/site-policy/other-site-policies/github-and-trade-controls)
