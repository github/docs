---
title: GitHub Advisory Database でのセキュリティ アドバイザリの編集
intro: '{% data variables.product.prodname_advisory_database %} で公開したアドバイザリに対する改善を送信することができます。'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 062779bfb9a39a651b10501c523047f3ae2805b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409412'
---
## {% data variables.product.prodname_advisory_database %} でのアドバイザリの編集について
[github.com/advisories](https://github.com/advisories) で、{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリは、グローバル アドバイザリと見なされます。 {% data variables.product.prodname_advisory_database %} のグローバル セキュリティ アドバイザリに対する改善は、誰でも提案することができます。 影響を受けるエコシステム、重大度レベル、または影響を受けるユーザーの説明など、任意の詳細を編集または追加できます。 {% data variables.product.prodname_security %} キュレーション チームは、送信された改善を確認し、受け入れられた場合は {% data variables.product.prodname_advisory_database %} にそれらを発行します。
{% ifversion fpt or ghec %}リポジトリ レベルのセキュリティ アドバイザリを編集できるのは、リポジトリの所有者と管理者だけです。 詳しくは、「[リポジトリ セキュリティ アドバイザリの編集](/code-security/security-advisories/editing-a-security-advisory)」を参照してください。{% endif %}

## GitHub Advisory Database でのアドバイザリの編集

1. https://github.com/advisories に移動します。
2. コントリビュートするセキュリティ アドバイザリを選びます。
3. ページの右側にある **[この脆弱性に対する改善の提案]** リンクをクリックします。
   ![改善の提案のリンク](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. コントリビューション フォームに必要な改善を記入します。 任意の詳細を編集または追加できます。
5. アドバイザリの編集が完了したら、 **[改善の送信]** をクリックします。
6. 改善を送信すると、{% data variables.product.prodname_security %} キュレーション チームによって、[github/advisory-database](https://github.com/github/advisory-database) でその変更を含む pull request がレビュー用に作成されます。 アドバイザリが {% data variables.product.prodname_dotcom %} リポジトリから作成された場合は、元の発行元にオプションの注釈のタグも付けられます。 pull request を表示し、それが更新またはクローズされたときに通知を受け取ることができます。

[github/advisory-database](https://github.com/github/advisory-database) リポジトリのアドバイザリ ファイルで pull request を直接開くこともできます。 詳しくは、[コントリビューション ガイドライン](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md)に関するページをご覧ください。 

{% ifversion security-advisories-ghes-ghae %}
## {% data variables.product.product_location %}からのアドバイザリの編集

{% data variables.product.prodname_github_connect %} が {% data variables.product.product_location %}に対して有効になっている場合は、インスタンス URL に `/advisories` を追加することでアドバイザリを確認できます。 

1. `https://HOSTNAME/advisories` に移動します。
2. コントリビュートするセキュリティ アドバイザリを選びます。
3. ページの右側にある **[Github.com のこの脆弱性に対する改善の提案]** リンクをクリックします 。 {% data variables.product.prodname_dotcom_the_website %} で同じセキュリティ アドバイザリが表示された新しいタブが開きます。
![改善の提案のリンク](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. 上記の「[GitHub アドバイザリ データベースでのアドバイザリの編集](#editing-advisories-in-the-github-advisory-database)」の手順 4 から 6 に従って、アドバイザリを編集します。
{% endif %}
