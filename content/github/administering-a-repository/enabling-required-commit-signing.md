---
title: Enabling required commit signing
intro: Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified.
product: '{{ site.data.reusables.gated-features.protected-branches }}'
redirect_from:
  - /articles/enabling-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Before enabling required commit signing on a branch, you must first set the branch up as a protected branch. For more information, see "[Configuring protected branches](/github/administering-a-repository/configuring-protected-branches)."

{{ site.data.reusables.repositories.protected-branches-options }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.repository-branches }}
{{ site.data.reusables.repositories.add-branch-protection-rules }}
5. Select **Require signed commits**.
![Require signed commits option](/assets/images/help/repository/require-signed-commits.png)
6. Optionally, select **Include administrators**. This enforces the required signed commits on the repository administrators.
![Include administrators checkbox](/assets/images/help/repository/include-admins-protected-branches.png)
7. Click **Create**.
