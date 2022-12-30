---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107342"
---
{% ifversion fpt or ghec %} {% note %}

**注:** {% data variables.product.company_short %} は、2022 年 3 月 15 日に古いセキュリティで保護されていないキーの種類を削除することでセキュリティを強化しました。

それ以降、DSA キー (`ssh-dss`) はサポートされなくなりました。 {% data variables.location.product_location %}の個人アカウントに新しい DSA キーを追加することはできません。

2021 年 11 月 2 日以前の `valid_after` を持つ RSA キー (`ssh-rsa`) では、任意の署名アルゴリズムを引き続き使用できます。 その日以降に生成される RSA キーは、SHA-2 署名アルゴリズムを使用する必要があります。 SHA-2 署名を使用するには、一部の古いクライアントをアップグレードする必要があります。

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**注**: 既定では、{% data variables.product.product_name %} 3.6 以降では、2022 年 8 月 1 日午前 0 時 (UTC) の期限の時点で、次の **両方** の条件を満たす SSH 接続は失敗します。

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 以降では、DSA、HMAC-SHA-1、または CBC 暗号を使用する SSH 接続もサポートされていません。 期限より前にアップロードされた RSA SSH キーは、キーが有効である限り、SHA-1 ハッシュ関数を使用して認証を続けることができます。 使用する {% data variables.product.product_name %} のバージョンの検索について詳しくは、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)」を参照してください。

サイト管理者は RSA-SHA-1 を使って接続の期限を調整でき、RSA-SHA-1 を使用するすべての接続をブロックできます。 詳しくは、サイト管理者にお問い合わせいただくか、「[インスタンスへの SSH 接続の構成](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)」をご覧ください。

{% endnote %}

{% endif %}
