---
title: Zu Releases verknüpfen
intro: 'Du kannst jeden Release, den Du auf GitHub erstellst, mit einer eindeutigen URL teilen.'
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. To copy a unique URL to your clipboard, find the release you want to link to, right click the title, and copy the URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Release title](/assets/images/help/releases/release-title.png)
{% else %}
  ![Release title](/assets/images/help/releases/release-title-old.png)
{% endif %}
1. Klicke alternativ mit der rechten Maustaste auf **Latest Release** (Aktueller Release) und kopiere die URL, um sie zu teilen. Das Suffix dieser URL ist immer `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![Menü „Compare release tags" (Vergleiche Release-Tags)](/assets/images/help/releases/refreshed-release-latest.png)
   {% else %}
   ![Tag für neuesten Release](/assets/images/help/releases/release_latest_release_tag.png)
   {% endif %}
To link directly to a download of your latest release asset that was manually uploaded, link to `/owner/name/releases/latest/download/asset-name.zip`.
