---
title: Configuring protected branches
intro: 'If you''re a repository owner or have admin permissions in a repository, you can customize branch protections in the repository and enforce certain workflows, such as requiring more than one pull request review or requiring certain status checks to pass before allowing a pull request to merge.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% data reusables.repositories.branch-rules-example %}

You can also set up automatic branch protection for all branches in your repository with the wildcard syntax `*`. Because {% data variables.product.prodname_dotcom %} uses the `File::FNM_PATHNAME` flag for the `File.fnmatch` syntax, the wildcard does not match directory separators (`/`). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash. You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make it more inclusive. For more information about syntax options for branch rules, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

To create an exception to an existing branch rule, you can create a new branch protection rule that is higher priority, such as a branch rule for a specific branch name. For more information about the priority order and other settings for protected branch rules, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

{% note %}

**Note:** To create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Optionally, you can configure specific branch rule settings. ![Protected branch rule settings](/assets/images/help/branches/branch-rule-settings.png)
7. To confirm your branch protection rule, click **Create** or **Save changes.**

### 더 읽을거리

- "[About protected branches](/github/administering-a-repository/about-protected-branches)"
- "[About required status checks](/github/administering-a-repository/about-required-status-checks)"
- "[Enabling required status checks](/github/administering-a-repository/enabling-required-status-checks)"
- "[About branch restrictions](/github/administering-a-repository/about-branch-restrictions)"
- "[Enabling branch restrictions](/github/administering-a-repository/enabling-branch-restrictions)"
- "[About required commit signing](/github/administering-a-repository/about-required-commit-signing)"
