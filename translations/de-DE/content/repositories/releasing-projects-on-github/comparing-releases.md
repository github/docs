---
title: Releases vergleichen
intro: 'Du kannst die Release-Tags vergleichen, um Änderungen an Deinem Repository zwischen verschiedenen Releases zu sehen.'
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
3. Klicke neben dem Release, den Du als Basis verwenden möchtest, auf **Compare** (Vergleichen).
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Menü „Compare release tags" (Vergleiche Release-Tags)](/assets/images/help/releases/refreshed-compare-tags.png)
  {% else %}
  ![Menü „Compare release tags" (Vergleiche Release-Tags)](/assets/images/help/releases/compare-tags-menu.png)
  {% endif %}
4. Benutze das Dropdownmenü „Compare" (Vergleichen) und wähle die Tags, die Du vergleichen willst.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Menü „Compare release tags" (Vergleiche Release-Tags)](/assets/images/help/releases/refreshed-compare-tags-menu-options.png)
  {% else %}
  ![Menüoptionen „Compare release tags" (Vergleiche Release-Tags)](/assets/images/help/releases/compare-tags-menu-options.png)
  {% endif %}
