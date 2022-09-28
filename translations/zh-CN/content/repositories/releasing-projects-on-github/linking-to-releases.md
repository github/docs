---
title: Linking to releases
intro: You can share every release you create on GitHub with a unique URL.
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
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
  ![Release title](/assets/images/help/releases/release-title.png)
{% else %}
  ![Release title](/assets/images/help/releases/release-title-old.png)
{% endif %}
1. Alternatively, right click **Latest Release** and copy the URL to share it. The suffix of this URL is always `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
   ![Compare release tags menu](/assets/images/help/releases/refreshed-release-latest.png)
   {% else %}
   ![Latest release tag](/assets/images/help/releases/release_latest_release_tag.png)
   {% endif %}
To link directly to a download of your latest release asset that was manually uploaded, link to `/owner/name/releases/latest/download/asset-name.zip`.
