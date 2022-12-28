---
title: エンタープライズのベスト プラクティス
shortTitle: Best practices
intro: 'エンタープライズ向けに {% data variables.product.company_short %} が推奨するプラクティスについて説明します。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163458'
---
{% ifversion ghec %}
## エンタープライズに最適な認証方法を特定する

{% data reusables.enterprise.ghec-authentication-options %}

ニーズに最適な認証方法を特定するためのサポートについては、「[エンタープライズの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」を参照してください。 {% endif %}

## ポリシーの使用

ポリシーを使って、ビジネス ルールと規制コンプライアンスを強制することをお勧めします。 

{% data reusables.enterprise.about-policies %} 詳細については、「[エンタープライズ ポリシーについて](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)」を参照してください。

## 組織の数を最小限に抑える

多くの場合、大規模なエンタープライズは複数の組織を必要としますが、最上位の企業部門を反映するように、その数はできるだけ少なくなるようにします。 組織の数が少なければ、インナーソースのプラクティスが促進され、より多くのユーザーがディスカッションに参加できるようになります。

代わりに、各組織内でチームを使用して、より詳細なレベルでリポジトリのアクセスとセキュリティ要件を管理できます。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

## ユーザー所有のリポジトリで大規模なコラボレーションを行わない

可能であれば組織所有のリポジトリでコラボレーションを行い、ユーザー所有のリポジトリでのコラボレーションは最小限に抑えることをおすすめします。 組織所有のリポジトリにはより高度なセキュリティと管理機能が備わっており、エンタープライズのメンバーシップが変更されても引き続きアクセスできます。

## 人間が判読できるユーザー名を使う

{% ifversion ghec %}エンタープライズ メンバーのユーザー名を制御する場合は、{% else %}{% endif %}人間が判読できるユーザー名を使い、マシンによって生成された人間が判読しにくい ID は使わないようにします。

エンタープライズのプライベート リポジトリ内でユーザー名の表示を管理できます。 詳細については、「[組織のメンバー名表示を管理する](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)」を参照してください。

## 参考資料

- [リポジトリのベスト プラクティス](/repositories/creating-and-managing-repositories/best-practices-for-repositories)
- [組織のベスト プラクティス](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)
