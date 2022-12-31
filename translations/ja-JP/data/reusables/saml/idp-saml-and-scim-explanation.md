---
ms.openlocfilehash: 3c0fb9aa9284d374a4d34c1241de5827917e9ecc
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193583"
---
{% data variables.product.product_name %} で IAM に IdP を使う場合、リポジトリ、issue、pull request などの Enterprise リソースへのアクセスは、SAML SSO によって制御やセキュリティ保護が行われます。 IdP に変更を加えると、ユーザー アカウントの作成と {% data variables.location.product_location %} へのアクセスの管理は SCIM によって自動的に行われます。 また、{% data variables.product.product_name %} 上の team を IdP 上のグループと同期することもできます。 詳細については、次の記事を参照してください。

- 「[Enterprise IAM の SAML について](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)」
- 「[Enterprise の SCIM を使ったユーザー プロビジョニングを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)」
- 「[team と ID プロバイダー グループとの同期](http://localhost:4000/github-ae@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)」
