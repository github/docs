---
title: 链接到发行版
intro: 您可以使用唯一 URL 共享在 GitHub 上创建的每个发行版。
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
3. 要将唯一 URL 复制到剪贴板，请找到要链接到的版本，右键单击标题，然后复制 URL。
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![版本标题](/assets/images/help/releases/release-title.png)
{% else %}
  ![版本标题](/assets/images/help/releases/release-title-old.png)
{% endif %}
1. 或者，右键单击 **Latest Release（最新发行版）**并复制 URL 以共享它。 此 URL 的后缀始终是 `/releases/latest`。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![比较发行版标记菜单](/assets/images/help/releases/refreshed-release-latest.png)
   {% else %}
   ![最新发行版标记](/assets/images/help/releases/release_latest_release_tag.png)
   {% endif %}
要直接链接到手动上传的最新版本资产的下载，请链接到 `/owner/name/releases/latest/download/asset-name.zip`。
