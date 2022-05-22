---
title: リリースの比較
intro: リリースタグを比較して、異なるリリース間でのリポジトリの変更を確認できます。
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
3. ベースとして使用するリリースの横にある [**Compare**] をクリックします。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![リリースタグの比較メニュー](/assets/images/help/releases/refreshed-compare-tags.png)
  {% else %}
  ![リリースタグの比較メニュー](/assets/images/help/releases/compare-tags-menu.png)
  {% endif %}
4. [Compare] ドロップダウンメニューを使用して、比較するタグを選択します。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![リリースタグの比較メニュー](/assets/images/help/releases/refreshed-compare-tags-menu-options.png)
  {% else %}
  ![リリースタグの比較メニューオプション](/assets/images/help/releases/compare-tags-menu-options.png)
  {% endif %}
