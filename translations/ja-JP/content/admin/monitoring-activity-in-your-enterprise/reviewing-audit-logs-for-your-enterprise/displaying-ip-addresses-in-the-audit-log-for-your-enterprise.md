---
title: Enterprise の監査ログに IP アドレスを表示する
intro: Enterprise の監査ログにイベントの発信元 IP アドレスを表示できます。
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 7dad3642866b637432442591d8e5714e3db6f59f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508076'
---
## 監査ログ内の IP アドレスの表示について

既定では、{% data variables.product.product_name %} の Enterprise の監査ログには、イベントの発信元 IP アドレスは表示されません。 必要に応じて、コンプライアンスを確保し、脅威に対応するために、各イベントの原因となるアクターに関連付けられている完全な IP アドレスを表示できます。 通常、アクターはユーザーですが、アプリや統合の場合もあります。

Enterprise の監査ログに表示される IP アドレスの表示または保管に伴う法的義務は自身の責任で果たしてください。

IP アドレスの表示を選ぶと、IP アドレスは Enterprise の監査ログにのみ表示されます。 IP アドレスは、Enterprise が所有する個々の Organaization の監査ログのイベントには表示されません。 Organaization 監査ログの詳しい情報については、「[Organaization の監査ログを確認する](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)」をご覧ください。

{% data variables.product.product_location %} で Enterprise にどの認証方法を使っているかに関係なく、監査ログに IP アドレスを表示できます。 詳細については、「[エンタープライズの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」を参照してください。

{% data variables.product.product_location %} でアカウントを作成すると、{% data variables.product.company_short %} が {% data variables.product.company_short %} のサービスへの接続に関する基本情報 (発信元 IP アドレスなど) を収集することに同意することになります。 詳しい情報については、「[GitHub のプライバシーについての声明](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)」をご覧ください。

## 監査ログに IP アドレスを表示するイベント

{% data variables.product.product_name %} では、Enterprise のメンバーが Enterprise または Enterprise 内の Organaization が所有するリソースを操作すると、監査ログに IP アドレスが表示されます。 たとえば、Enterprise 内の Organaization が所有する内部またはプライベート リポジトリ、またはそれらのリポジトリに関連付けられているリソースが関係する監査イベント (issue、pull request、アクション、プロジェクトなど) の IP アドレスが表示されます。

Enterprise のメンバーが、管理する個人アカウントで {% data variables.product.product_location %} にアクセスする場合は、{% data variables.product.prodname_emus %} を使わないため、{% data variables.product.product_name %} の次のアクションの監査ログにイベントまたは IP アドレスは表示されません。
  
- {% data variables.product.product_location %} への認証
- リポジトリ、gist、またはプロジェクトなど、個人アカウントが所有するリソースの操作
- Enterprise 内の Organaization が所有するパブリック リポジトリの操作

## 監査ログ内の IP アドレスの表示を有効にする

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. [監査ログ] の **[送信元 IP の開示]** をクリックします。

   ![[送信元 IP の開示] タブのスクリーンショット](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. [監査ログでアクター IP アドレスを開示する] で、 **[発信元 IP 開示を有効にする]** を選びます。

   ![監査ログ内の IP アドレスの表示を有効にするチェックボックスのスクリーンショット](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. **[保存]** をクリックします。

この機能を有効にすると、監査ログにアクセスして、IP アドレスを含むイベントを表示できるようになります。 詳細については、「[企業の監査ログへのアクセス](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)」を参照してください。
