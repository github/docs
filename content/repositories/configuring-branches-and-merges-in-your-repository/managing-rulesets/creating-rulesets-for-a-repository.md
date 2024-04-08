---
title: Creating rulesets for a repository
intro: 'You can add rulesets to a repository to control how people can interact with specific branches and tags.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
topics:
  - Repositories
shortTitle: Create a ruleset
---

## Introduction

You can create rulesets to control how users can interact with selected branches and tags in a repository. When you create a ruleset, you can allow certain users to bypass the rules in the ruleset. This can be users with certain permissions, specific teams, or {% data variables.product.prodname_github_apps %}. For more information on rulesets, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

To import one of the prebuilt rulesets by {% data variables.product.prodname_dotcom %}, see [`github/ruleset-recipes`](https://github.com/github/ruleset-recipes).

{% ifversion repo-rules-management %}
{% data reusables.repositories.import-a-ruleset-conceptual %} For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#using-ruleset-history)."{% endif %}

{% ifversion repo-rules-enterprise %}
You can also create rulesets for all repositories in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization)."{% endif %}

To create a ruleset, complete the following procedures:

- [Creating a branch or tag ruleset](#creating-a-branch-or-tag-ruleset)
- [Granting bypass permissions for your ruleset](#granting-bypass-permissions-for-your-ruleset)
- [Choosing which branches or tags to target](#choosing-which-branches-or-tags-to-target)
- [Selecting branch or tag protections](#selecting-branch-or-tag-protections){% ifversion repo-rules-enterprise %}
- [Adding metadata restrictions](#adding-metadata-restrictions)
- [Finalizing your ruleset and next steps](#finalizing-your-ruleset-and-next-steps){% endif %}

## About using enforcement statuses

While creating or editing your ruleset, you can use enforcement statuses to configure how your ruleset will be enforced.

{% ifversion repo-rules-enterprise %}

Using "Evaluate" mode is a great option for testing your ruleset without enforcing it. You can use the "Rule Insights" page to see if the action would have violated the rule. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."

{% endif %}

You can select any of the following enforcement statuses for your ruleset.

   - {% octicon "play" aria-hidden="true" %} **Active**: your ruleset will be enforced upon creation.{% ifversion repo-rules-enterprise %}
   - {% octicon "meter" aria-hidden="true" %} **Evaluate**: your ruleset will not be enforced, but you will be able to monitor which actions would or would not violate rules on the "Rule Insights" page.{% endif %}
   - {% octicon "skip" aria-hidden="true" %} **Disabled**: your ruleset will not be enforced{% ifversion repo-rules-enterprise %} or evaluated{% endif %}.

## Creating a branch or tag ruleset

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.create-ruleset-step %}
{% data reusables.repositories.rulesets-general-step %}

## Granting bypass permissions for your ruleset

{% data reusables.repositories.rulesets-bypass-step %}

## Choosing which branches or tags to target

{% data reusables.repositories.rulesets-target-branches %}

## Selecting branch or tag protections

{% data reusables.repositories.rulesets-protections-step %}
{% ifversion fpt %}
{% data reusables.repositories.rulesets-create-and-insights-step %}
{% else %}

## Adding metadata restrictions

{% data reusables.repositories.rulesets-metadata-step %}

## Finalizing your ruleset and next steps

{% data reusables.repositories.rulesets-create-and-insights-step %}
{% endif %}

## Using `fnmatch` syntax

{% data reusables.repositories.rulesets-fnmatch %}
{% ifversion repo-rules-enterprise %}

## Using regular expressions for commit metadata

{% data reusables.repositories.rulesets-commit-regex %}

{% endif %}
