---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145113606"
---
ユーザー単位の価格設定により、1 人あたり 1 ライセンスを使用します。 {% data variables.product.company_short %} は、プライマリ メール アドレスで個人を特定します。

{% data variables.product.company_short %} は、次のユーザーに課金します。

{%- ifversion ghec %}
- エンタープライズ内の少なくとも 1 つの組織のメンバーまたは所有者である Enterprise 所有者 {%- endif %}
- 所有者を含む組織のメンバー
- フォークを除く、組織が所有するプライベート{% ifversion ghec %}または内部{% endif %}のリポジトリでの外部コラボレーター
- 組織の所有者かメンバーになるための保留中の招待があるユーザー
- フォークを除く、組織が所有するプライベート{% ifversion ghec %}または内部{% endif %}のリポジトリで、外部コラボレーターになるための保留中の招待があるユーザー{%- ifversion ghec %}
- デプロイした {% data variables.product.prodname_ghe_server %} インスタンス上の各ユーザー{% endif %}

{% data variables.product.company_short %} は、次のどのユーザーに対しても課金しません。

{%- ifversion ghec %}
- エンタープライズ内の少なくとも 1 つの組織のメンバーまたは所有者でない Enterprise 所有者
- Enterprise 課金マネージャー{%- endif %}
- {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %} 上の個々の{% endif %}組織の課金マネージャー
- {% ifversion ghec %}エンタープライズまたは{% endif %}組織の課金マネージャーになるための保留中の招待があるユーザー
- 組織が所有するパブリック リポジトリの外部コラボレーターになるための保留中の招待があるユーザー

{% note %}

**注**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}
