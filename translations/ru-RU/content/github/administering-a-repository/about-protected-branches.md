---
title: About protected branches
intro: 'Protected branches ensure that collaborators on your repository cannot make irrevocable changes to branches. Enabling protected branches also allows you to enable other optional checks and requirements, like required status checks and required reviews.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.about-protected-branches %} You can choose to enforce restrictions on how a pull request is merged into your repository.

Repository owners and people with admin permissions for a repository can enforce certain workflows or requirements, before a collaborator can merge a branch in your repository by creating protected branch rules.

{% data reusables.repositories.branch-rules-example %} For more information, see "[Configuring protected branches](/articles/configuring-protected-branches/)."

### Prioritization of protected branch rules

If a repository has multiple protected branch rules that affect the same branches, the rules that include a specific branch name have the highest priority. If there is more than one protected branch rule that references the same specific branch name, then the branch rule created first will have higher priority.

Protected branch rules that mention a special character, such as `*`, `?`, or `]`, are applied in the order they were created, so older rules with these characters have a higher priority.

### Branch protection settings

When you create a branch protection rule in a repository, collaborators cannot force push to the protected branch or delete the branch{% if currentVersion == "free-pro-team@latest" %} by default{% endif %}. You can enable other branch protection settings. For information, see "[Defining the mergeability of pull requests](/github/administering-a-repository/defining-the-mergeability-of-pull-requests)."

### Дополнительная литература

- "[About required status checks](/articles/about-required-status-checks)"
- "[About required reviews for pull requests](/articles/about-required-reviews-for-pull-requests)"
- "[About required commit signing](/articles/about-required-commit-signing)"
