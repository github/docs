---
title: Wiki へのアクセス権限の変更
intro: 'Only repository collaborators can edit a {% ifversion fpt or ghec or ghes %}public{% endif %} repository''s wiki by default, but you can allow anyone with an account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to edit your wiki.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: アクセス許可の変更
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] の下で、[**Restrict edits to collaborators only**] の選択を解除します。 ![Wiki の編集制限](/assets/images/help/wiki/wiki_restrict_editing.png)

## 参考リンク

- "[Wiki の無効化](/communities/documenting-your-project-with-wikis/disabling-wikis)"
