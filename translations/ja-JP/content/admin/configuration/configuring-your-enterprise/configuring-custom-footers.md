---
title: ユーザー設定のフッターの構成
intro: '{% data variables.product.product_name %} にカスタム フッターを追加することで、ユーザーがエンタープライズ固有のリンクに簡単にアクセスできるようにすることができます。'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120702'
---
エンタープライズ所有者は、最大 5 つの追加リンクを含むユーザー設定のフッターを表示するように {% data variables.product.product_name %} を構成できます。

![ユーザー設定のフッター](/assets/images/enterprise/custom-footer/octodemo-footer.png)

ユーザー設定のフッターは、{% data variables.product.prodname_dotcom %} フッターの上に、{% ifversion ghes or ghae %}{% data variables.product.product_name %} のすべてのページですべてのユーザーに対して{% elsif ghec %}エンタープライズに属するリポジトリおよび組織についてはすべてのリポジトリおよび組織のページですべてのエンタープライズ メンバーとコラボレーターに対して{% endif %}表示されます。

## エンタープライズ向けユーザー設定のフッターの構成

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. [設定] で **[プロファイル]** をクリックします。
{%- ifversion ghec %} ![エンタープライズ プロファイル設定](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![エンタープライズ プロファイル設定](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. [プロファイル] セクションの上部にある **[ユーザー設定のフッター]** をクリックします。
![ユーザー設定のフッター セクション](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. 表示されるフィールドに最大 5 つのリンクを追加します。
![フッター リンクを追加する](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. **[Update custom footer]\(ユーザー設定のフッターの更新\)** をクリックしてコンテンツを保存し、ユーザー設定のフッターを表示します。
![[Update custom footer]\(ユーザー設定のフッターの更新\)](/assets/images/enterprise/custom-footer/update-custom-footer.png)
