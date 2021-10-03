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
topics:
  - Repositories
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. リンクするリリースを見つけて、バージョン番号をクリックします。 ![リリース タグ情報](/assets/images/help/releases/release_tag_name.png)
3. または、[**Latest Release**] を右クリックし、URL をコピーして共有します。 この URL の最後は、常に `/releases/latest` です。 ![[Latest release] タグ](/assets/images/help/releases/release_latest_release_tag.png)

To link directly to a download of your latest release asset that was manually uploaded, link to `/owner/name/releases/latest/download/asset-name.zip`.
