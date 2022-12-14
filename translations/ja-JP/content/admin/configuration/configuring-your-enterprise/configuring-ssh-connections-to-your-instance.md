---
title: インスタンスへの SSH 接続の構成
shortTitle: Configure SSH connections
intro: '接続を確立するためにクライアントが使用できる SSH アルゴリズムを構成することで、{% data variables.location.product_location %}のセキュリティを強化できます。'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107542'
---
## インスタンスへの SSH 接続について

{% data reusables.enterprise.about-ssh-ports %}

環境内の SSH クライアントに対応するために、{% data variables.location.product_location %}で受け入れる接続の種類を構成できます。

## RSA キーを使用した SSH 接続の構成

ユーザーがポート 22 経由で SSH により {% data variables.location.product_location %}に対して Git 操作を実行する場合、クライアントは RSA キーを使用して認証できます。 クライアントは、SHA-1 ハッシュ関数を使用して試行に署名できます。 このコンテキストでは、SHA-1 ハッシュ関数はセキュリティで保護されなくなりました。 詳細については、Wikipedia の「[SHA-1](https://en.wikipedia.org/wiki/SHA-1)」を参照してください。

既定で{% ifversion ghes < 3.7 %} {% data variables.product.product_name %} 3.6 以降では{% endif %}、次の **両方** の条件を満たす SSH 接続は失敗します。

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

カットオフ日を調整できます。 ユーザーがカットオフ日より前に RSA キーをアップロードした場合、キーが有効である限り、クライアントは引き続き SHA-1 を使用して正常に接続できます。 または、クライアントが SHA-1 ハッシュ関数を使用して接続に署名する場合、RSA キーを使用して認証されたすべての SSH 接続を拒否できます。

インスタンスに対して選択した設定に関係なく、引き続きクライアントは、SHA-2 ハッシュ関数で署名された RSA キーを使用して接続できます。

SSH 証明機関を使用する場合に、証明書の `valid_after` 日付がカットオフ日より後であれば、接続は失敗します。 詳細については、「[SSH 証明機関について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)」を参照してください。

詳細については、[{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server)を参照してください。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. `ghe-find-insecure-git-operations` ユーティリティを使用して、セキュリティで保護されていないアルゴリズムまたはハッシュ関数を使用する接続に対して、インスタンスのログを監査します。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)」を参照してください。
1. 接続が SHA-1 ハッシュ関数によって署名されている場合に、カットオフ日を構成して、その日付の後にアップロードされた RSA キーを使用するクライアントからの接続を {% data variables.location.product_location %}で拒否するようにするには、次のコマンドを入力します。 _**RFC-3399-UTC-TIMESTAMP**_ を有効な RFC 3399 UTC タイムスタンプに置き換えます。 たとえば、既定値の 2022 年 8 月 1 日は `2022-08-01T00:00:00Z` のように表されます。 詳細については、IETF Web サイトの「[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)」を参照してください。

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. または、SHA-1 ハッシュ関数で署名された RSA キーを使用して SSH 接続を完全に無効にするには、次のコマンドを入力します。

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
