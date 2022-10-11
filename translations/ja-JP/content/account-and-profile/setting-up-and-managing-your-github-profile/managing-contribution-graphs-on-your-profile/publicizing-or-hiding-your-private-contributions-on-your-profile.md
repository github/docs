---
title: プライベートコントリビューションをプロフィールで公開または非公開にする
intro: '{% data variables.product.product_name %} プロフィールには、過去 1 年間のリポジトリコントリビューションのグラフが表示されます。 You can choose to show anonymized activity from {% ifversion fpt or ghes %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes %} in addition to the activity from public repositories{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Profiles
shortTitle: Private contributions
---

プライベートコントリビューションを公開しても、あなたが作業しているプライベートリポジトリへのアクセス権がないユーザーがあなたのプライベートコントリビューションを見ることはできません。 かわりに、特定の日におけるプライベートコントリビューションの数だけを見ることができます。 パブリックコントリビューションには、詳細な情報が含まれます。 For more information, see "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Note:** {% ifversion fpt or ghes %}On {% ifversion fpt %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, public contributions on your profile are visible {% ifversion fpt %}to anyone in the world who can access {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}only to other users of {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}On {% data variables.product.prodname_ghe_managed %}, only other members of your enterprise can see the contributions on your profile.{% endif %}

{% endnote %}

## プライベートコントリビューションの可視性を変更する

{% data reusables.profile.access_profile %}
1. プライベートコントリビューションをプロフィールで公開または非公開にする
    - プライベートコントリビューションを公開するには、コントリビューショングラフの上で、[**Contribution settings**] ドロップダウンメニューから [**Private contributions**] を選択します。 訪問者には、プライベートコントリビューションの数だけが表示され、それ以上の詳細は表示されません。 ![[Contribution settings] メニューで、訪問者がプライベートコントリビューションを見られるようにする](/assets/images/help/profile/private-contributions-on.png)
    - プライベートコントリビューションを非公開にするには、コントリビューショングラフの上で、[**Contribution settings**] ドロップダウンメニューを使用し、[**Private contributions**] の選択を解除します。訪問者には、パブリックコントリビューションのみが表示されるようになります。 ![[Contribution settings] メニューで、訪問者がプライベートコントリビューションを見られるようにする](/assets/images/help/profile/private-contributions-off.png)

## 参考リンク

- [プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)
- [プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
