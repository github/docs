---
title: Showing your private contributions and achievements on your profile
intro: 'Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
---

プライベートコントリビューションを公開しても、あなたが作業しているプライベートリポジトリへのアクセス権がないユーザーがあなたのプライベートコントリビューションを見ることはできません。 かわりに、特定の日におけるプライベートコントリビューションの数だけを見ることができます。 パブリックコントリビューションには、詳細な情報が含まれます。 For more information, see "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Note:** {% ifversion fpt or ghes or ghec %}On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, public contributions on your profile are visible {% ifversion fpt or ghec %}to anyone in the world who can access {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}only to other users of {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}On {% data variables.product.prodname_ghe_managed %}, only other members of your enterprise can see the contributions on your profile.{% endif %}

{% endnote %}

## プライベートコントリビューションの可視性を変更する

{% data reusables.profile.access_profile %}
1. プライベートコントリビューションをプロフィールで公開または非公開にする
    - プライベートコントリビューションを公開するには、コントリビューショングラフの上で、[**Contribution settings**] ドロップダウンメニューから [**Private contributions**] を選択します。 訪問者には、プライベートコントリビューションの数だけが表示され、それ以上の詳細は表示されません。 ![[Contribution settings] メニューで、訪問者がプライベートコントリビューションを見られるようにする](/assets/images/help/profile/private-contributions-on.png)
    - プライベートコントリビューションを非公開にするには、コントリビューショングラフの上で、[**Contribution settings**] ドロップダウンメニューを使用し、[**Private contributions**] の選択を解除します。訪問者には、パブリックコントリビューションのみが表示されるようになります。 ![[Contribution settings] メニューで、訪問者がプライベートコントリビューションを見られるようにする](/assets/images/help/profile/private-contributions-off.png)

## Changing the visibility of Achievements

{% data reusables.user-settings.access_settings %}
1. Show or hide Achievements on your profile:
    - To show Achievements on your profile, navigate to **Profile settings**, and select the checkbox next to **Show Achievements on my profile.** ![Enable visitors to see Achievements from profile settings](/assets/images/achievements-profile-settings-off.png)
    - To hide Achievements from your profile, navigate to **Profile settings**, and unselect the checkbox next to **Show Achievements on my profile.** ![Hide Achievements from visitors in profile settings](/assets/images/achievements-profile-settings-on.png)

## 参考リンク

- [プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)
- [プロフィール上でコントリビューションが表示されない理由](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
