---
title: About required commit signing
intro: Required commit signing ensures that collaborators can only push verified signed commits to a protected branch.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

If you've enforced branch protections in your repository, you can set up required commit signing. For more information, see "[Configuring protected branches](/articles/configuring-protected-branches/)."

When you enable required commit signing on a branch, contributors {% if currentVersion == "free-pro-team@latest" %}and bots{% endif %} can only push commits that have been signed and verified to the branch. For more information, see "[About commit signature verification](/articles/about-commit-signature-verification)."

You can always push local commits to the branch if the commits are signed and verified. {% if currentVersion == "free-pro-team@latest" %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% if currentVersion == "free-pro-team@latest" %}squash and {% endif %}merge pull requests locally. For more information, see "[Checking out pull requests locally](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

{% note %}

**Note:** Enabling required commit signing on a branch will make it more difficult to contribute. If a collaborator pushes an unsigned commit to a branch that has required commit signing enabled, they will need to rebase their commit to include a verified signature and force push the rewritten commit to the branch.

{% endnote %}

Administrators of a repository can push local commits that have not been signed and verified, however you can require administrators to be subject to required commit signing. For more information, see "[Enabling required commit signing](/articles/enabling-required-commit-signing)."

### 더 읽을거리

- "[About protected branches](/articles/about-protected-branches)"
