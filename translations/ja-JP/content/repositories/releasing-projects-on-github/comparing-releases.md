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
ms.openlocfilehash: 12ec28717e8de8575a58487b02d5665044f471eb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132097'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. ベースとして使用するリリースの横にある **[比較]** をクリックします。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![[リリース タグの比較]](/assets/images/help/releases/refreshed-compare-tags.png) メニュー {% else %} ![[リリース タグの比較] メニュー](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. [Compare] ドロップダウンメニューを使用して、比較するタグを選択します。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![[リリース タグの比較] メニュー](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![[リリース タグの比較] メニュー オプション](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
