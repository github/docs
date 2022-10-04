---
title: Removing yourself from a collaborator's repository
intro: 'If you no longer want to be a collaborator on someone else''s repository, you can remove yourself.'
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
---
{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
2. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "repo" aria-label="The repo icon" %} Repositories**.
{% else %}
2. In the left sidebar, click **Repositories**.
  ![Repositories tab](/assets/images/help/settings/settings-sidebar-repositories.png)
{% endif %}
3. Next to the repository you want to leave, click **Leave**.
  ![Leave button](/assets/images/help/repository/repo-leave.png)
4. Read the warning carefully, then click "I understand, leave this repository."
  ![Dialog box warning you to leave](/assets/images/help/repository/repo-leave-confirmation.png)
