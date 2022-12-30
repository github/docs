---
title: OrganizationでのPull Requestのレビューの管理
intro: OrganizationでPull Requestの承認や変更のリクエストを行えるユーザを制限できます。
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125718'
---
## コードレビューの制限について

デフォルトでは、パブリックなリポジトリにおいてはどのユーザもPull Requestの承認や変更リクエストをするレビューをサブミットできます。

Organizationが所有するパブリックリポジトリでは、Pull Requestの承認や変更リクエストを行える人を制限できます。 コードレビューの制限を有効化すると、パブリックリポジトリでPull Requestに湖面度することは誰でもできますが、Pull Requestの承認や変更リクエストができるのは、リポジトリに明示的なアクセスを持っている人に限られます。

個々のリポジトリでコードレビューの制限を有効化することもできます。 Organizationで制限を有効化すると、そのOrganizationが所有する個々のリポジトリに対する制限は上書きされます。 詳細については、「[リポジトリでの pull request レビューの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)」を参照してください。

## コードレビューの制限の有効化

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [アクセス] セクションで、 **[{% octicon "report" aria-label="The report icon" %} モデレーション]** をクリックします。
1. [{% octicon "report" aria-label="The report icon" %} モデレーション] で、 **[コード レビューの制限]** をクリックします。
![Organization のコード レビュー制限のサイドバー項目のスクリーンショット](/assets/images/help/organizations/code-review-limits-organizations.png)
1. 画面上の情報をレビューしてください。 **[すべてのリポジトリでレビューを制限する]** をクリックして、レビューを明示的なアクセス権を持つリポジトリに制限するか、 **[すべてのリポジトリからレビューの制限を削除]** をクリックして、Organization 内のすべてのパブリック リポジトリから制限を削除します。
![Organization のコード レビュー制限設定のスクリーンショット](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
