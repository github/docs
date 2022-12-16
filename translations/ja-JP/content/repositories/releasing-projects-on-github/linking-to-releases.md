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
ms.openlocfilehash: 9b07e71c6e6d35839d485e5e37c795ac3c663d0b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132091'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 一意の URL をクリップボードにコピーするには、リンク先のリリースを見つけ、タイトルを右クリックして URL をコピーします。
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![リリース タイトル](/assets/images/help/releases/release-title.png) {% else %} ![リリース タイトル](/assets/images/help/releases/release-title-old.png) {% endif %}
1. または、 **[最新リリース]** を右クリックし、URL をコピーして共有します。 この URL のサフィックスは常に `/releases/latest` です。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![[リリースタグの比較] メニュー](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![最新のリリースタグ](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} 手動でアップロードされた最新リリースアセットのダウンロードに直接リンクするには、`/owner/name/releases/latest/download/asset-name.zip` にリンクします。
