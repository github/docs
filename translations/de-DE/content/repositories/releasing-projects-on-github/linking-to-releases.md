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
topics:
  - Repositories
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Finde den Release, den Du verknüpfen willst und klicke auf die Versionsnummer. ![Informationen zu Release-Tags](/assets/images/help/releases/release_tag_name.png)
3. Klicke alternativ mit der rechten Maustaste auf **Latest Release** (Aktueller Release) und kopiere die URL, um sie zu teilen. Das Suffix dieser URL ist immer `/releases/latest`. ![Tag für neuesten Release](/assets/images/help/releases/release_latest_release_tag.png)

To link directly to a download of your latest release asset that was manually uploaded, link to `/owner/name/releases/latest/download/asset-name.zip`.
