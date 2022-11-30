---
title: Enabling anonymous Git read access for a repository
intro: 'As a repository administrator, you can enable or disable anonymous Git read access for public repositories that meet certain requirements.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
versions:
  enterprise-server: '*'
---

Repository administrators can change the anonymous Git read access setting for a specific repository if:
- A site administrator has enabled private mode and anonymous Git read access.
- The repository is public on the enterprise and is not a fork.
- A site administrator has not disabled anonymous Git read access for the repository.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Next to "Enable anonymous Git read access", click **Enable**. !["Enabled" button under "Anonymous Git read access"](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Review the changes. To confirm, type in the name of the repository and click **I understand, enable anonymous Git read access.**
