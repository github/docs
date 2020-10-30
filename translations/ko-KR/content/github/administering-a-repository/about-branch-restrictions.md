---
title: About branch restrictions
intro: 'Branches within repositories that belong to organizations can be configured so that only certain users{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} or{% endif %} teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, or apps{% endif %} can push to the branch.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

When you enable branch restrictions, only users{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} or{% endif %} teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, or apps{% endif %} that have been given permission can push to the protected branch. For more information, see "[Enabling branch restrictions](/articles/enabling-branch-restrictions)" and "[About protected branches](/articles/about-protected-branches)." You can view and edit the users{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} or{% endif %} teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, or apps{% endif %} with push access to a protected branch in the protected branch's settings.

You can only give push access to a protected branch to users{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} or{% endif %} teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, or installed {% data variables.product.prodname_github_apps %}{% endif %} with `write` access to a repository.

People{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} and apps{% endif %} with admin permissions to a repository are always able to push to a protected branch.

{% tip %}

**Note:** If "Include administrators" is selected, you've enabled required status checks on the branch, and if any status checks fail, any attempt to push changes to the protected branch will also fail, even for people{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} and apps{% endif %} with admin permissions. For more information, see "[Enabling required status checks](/articles/enabling-required-status-checks)."

{% endtip %}

### 더 읽을거리

- "[About protected branches](/articles/about-protected-branches)"
- "[Configuring protected branches](/articles/configuring-protected-branches)"
- "[About required status checks](/articles/about-required-status-checks)"
- "[Enabling required status checks](/articles/enabling-required-status-checks)"
