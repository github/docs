---
title: Comparing releases
intro: You can compare release tags to see changes to your repository between different releases.
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Next to the release you want to use as your base, click **Compare**.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
  ![Compare release tags menu](/assets/images/help/releases/refreshed-compare-tags.png)
  {% else %}
  ![Compare release tags menu](/assets/images/help/releases/compare-tags-menu.png)
  {% endif %}
4. Use the "Compare" drop-down menu and select the tags you want to compare.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
  ![Compare release tags menu](/assets/images/help/releases/refreshed-compare-tags-menu-options.png)
  {% else %}
  ![Compare release tags menu options](/assets/images/help/releases/compare-tags-menu-options.png)
  {% endif %}
