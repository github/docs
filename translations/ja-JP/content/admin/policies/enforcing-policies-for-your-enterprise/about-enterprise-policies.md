---
title: エンタープライズ ポリシーについて
intro: エンタープライズ ポリシーを使うと、エンタープライズが所有するすべての組織のポリシーを管理できます。
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: d452a6f24b3108b915e20b673ebd317a409ac8ae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718118'
---
ビジネス ルールと規制の順守を強化するために、ポリシーには、エンタープライズ アカウントが所有するすべての組織向けの 1 つの管理ポイントが用意されています。 

{% data reusables.enterprise.about-policies %}

たとえば、[Base permissions]\(基本的なアクセス許可\) ポリシーでは、組織所有者が自分の組織の [Base permissions]\(基本的なアクセス許可\) ポリシーを構成することを許可することや、エンタープライズ内のすべての組織に対して "読み取り" などの特定の基本的なアクセス許可レベルを適用することができます。

既定では、エンタープライズ ポリシーは適用されません。 ビジネス固有の要件を満たすために適用すべきポリシーを特定するには、リポジトリ管理ポリシーを始めとして、エンタープライズ アカウントで使用できるすべてのポリシーを確認することをお勧めします。 詳細については、「[エンタープライズでリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)」を参照してください。

エンタープライズ ポリシーの構成時には、各ポリシーを変更した場合の影響を把握するために、エンタープライズが所有する組織の現在の構成を表示できます。

{% ifversion ghes %}エンタープライズ内で標準を適用するもう 1 つの方法は、pre-receive フックを使うことです。これは、品質チェックを実装するために {% data variables.product.product_location %} 上で実行されるスクリプトです。 詳細については、「[pre-receive フックを使ってポリシーを適用する](/admin/policies/enforcing-policy-with-pre-receive-hooks)」を参照してください。
{% endif %}

## 参考資料

- "[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)"
