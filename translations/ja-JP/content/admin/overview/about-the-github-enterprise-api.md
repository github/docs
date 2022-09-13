---
title: GitHub Enterprise API について
intro: '{% data variables.product.product_name %} は、REST および GraphQL API をサポートしています。'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api
  - /enterprise/admin/articles/using-the-api
  - /enterprise/admin/categories/api
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
  - /admin/overview/about-the-github-enterprise-server-api
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: GitHub Enterprise API
ms.openlocfilehash: d7228182a2dbccc856cb4030a3b08d1883eb266b
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '146331633'
---
API を使用すると、さまざまなタスクを自動化できます。 次に例をいくつか示します。

{% ifversion ghes %}
- {% data variables.enterprise.management_console %} に変更を加える。 詳細については、「[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)」を参照してください。
- LDAP 同期を構成します。詳細については、「[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)」を参照してください。{% endif %}
- 自分の Enterprise に関する統計を収集する。 詳細については、[管理者の統計](/rest/reference/enterprise-admin#admin-stats)に関する記事を参照してください。
- Enterpriseアカウントの管理。 詳細については、[エンタープライズ アカウント](/graphql/guides/managing-enterprise-accounts)に関するページを参照してください。

{% data variables.product.prodname_enterprise_api %} の完全なドキュメントについては、[{% data variables.product.prodname_dotcom %}REST API](/rest) および [{% data variables.product.prodname_dotcom%}GraphQL API](/graphql) を参照してください。 
