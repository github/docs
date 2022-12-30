---
ms.openlocfilehash: 005667bae249af732a73e5afc53e7dcd7ae436fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088488"
---
{% ifversion ghes %}
### 2FAをサポートする認証方式

| 認証方法 | 説明  | 2要素認証のサポート |
|-----------------------|--------------|-----------------------------------|
| 組み込み | 認証は {% data variables.product.prodname_ghe_server %} アプライアンスに保存されている個人アカウントに対して行われます。 | {% data variables.product.prodname_ghe_server %}アプライアンスでサポートされ、管理されます。 Organizationの管理者は、Organizationのメンバーに対して2FAの有効化を要求できます。 |{% ifversion ghes %}
| アイデンティティプロバイダ付きのビルトイン認証| 認証は、ID プロバイダーに保存されているアカウントに対して行われます。 | アイデンティティプロバイダに依存します。{% endif %}
| LDAP | 会社のディレクトリサービスとの認証のインテグレーションができます。 | {% data variables.product.prodname_ghe_server %}アプライアンスでサポートされ、管理されます。 Organizationの管理者は、Organizationのメンバーに対して2FAの有効化を要求できます。 |
| SAML | 認証は外部のアイデンティティプロバイダに対して行われます。 | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| CAS | 外部のサーバーによってシングルサインオンサービスが提供されます。 | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
