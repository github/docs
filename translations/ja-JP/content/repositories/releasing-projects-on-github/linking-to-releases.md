---
title: リリースにリンクする
intro: GitHub で作成する各リリースを、独自の URL で共有することができます。
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
1. または、[**Latest Release**] を右クリックし、URL をコピーして共有します。 この URL の最後は、常に `/releases/latest` です。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![リリースタグの比較メニュー](/assets/images/help/releases/refreshed-release-latest.png)
   {% else %}
   ![[Latest release] タグ](/assets/images/help/releases/release_latest_release_tag.png)
   {% endif %}
To link directly to a download of your latest release asset that was manually uploaded, link to `/owner/name/releases/latest/download/asset-name.zip`.
