---
title: Organization メンバーシップについて
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088815"
---
Organization のオーナーに招待してもらい、メンバー、支払いマネージャー、あるいはオーナーとして、その Organization に加わることができます。 Organization のオーナーあるいはリポジトリの管理権限を持つメンバーは、あなたを外部コラボレーターとして 1 つ以上のリポジトリでコラボレーションするよう招待できます。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

プロフィールページ上でメンバーになっている Organization には、アクセスできます。 詳細については、「[組織にアクセスする](/articles/accessing-an-organization)」を参照してください。

Organization への参加の招待を受諾すると、Organization のオーナーは以下を見ることができるようになります:

- あなたのパブリックなプロフィール情報
- メール アドレス
- あなたが 2 要素認証を有効化しているか
- あなたが Organization 内でアクセスできるリポジトリとアクセスレベル
- Organization 内での特定のアクティビティ
- リクエストの origin の国
- あなたの IP アドレス

詳細については、「<a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} プライバシー ステートメント</a>」を参照してください。

  {% note %}

  **注:** オーナーは Organization の Audit log でメンバーの IP アドレスを見ることはできません。 アカウントの侵害やセンシティブなデータの不注意な共有といったセキュリティのインシデントがあった場合、Organization のオーナーはプライベートリポジトリへのアクセスの詳細をリクエストすることがあります。 弊社が返す情報には、あなたの IP アドレスが含まれることがあります。

  {% endnote %}

デフォルトでは、Organization のメンバーシップの可視性は「プライベート」に設定されています。 プロフィール上の個々の Organization のメンバーシップは、「パブリック」にすることができます。 詳細については、「[Organization のメンバーシップを公開または非公開にする](/articles/publicizing-or-hiding-organization-membership)」を参照してください。

{% ifversion fpt or ghec %}

Organization が Enterprise アカウントに属している場合、あなたは自動的に Enterprise アカウントのメンバーになっており、Enterprise アカウントのオーナーから見えます。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの "[Enterprise アカウントについて](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" を参照してください。{% else %}."{% endif %}

{% endif %}

Organization はいつでも離れることができます。 詳細については、「[組織から自分自身を削除する](/articles/removing-yourself-from-an-organization)」を参照してください。

## <a name="further-reading"></a>参考資料

- "[Organization について](/articles/about-organizations)"
- "[Organization でメンバーシップを管理する](/articles/managing-your-membership-in-organizations)"
