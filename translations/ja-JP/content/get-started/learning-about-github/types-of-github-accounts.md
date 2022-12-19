---
title: GitHub アカウントの種類
intro: '{% data variables.product.product_name %} のアカウントを使用すると、コードへのアクセスを整理および制御できます。'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: 9316fcb8b069b0b596c89d10ac1f89d86f1a62b7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131180'
---
## {% data variables.product.product_name %} のアカウントについて

{% data variables.product.product_name %} では、コードを保存して、共同作業を行うことができます。 アカウントを使用して、そのコードを整理してアクセスを制御できます。 {% data variables.product.product_name %} には 3 種類のアカウントがあります。
- 個人用アカウント
- Organization アカウント
- Enterprise アカウント

{% data variables.product.product_name %} を使用するすべてのユーザーが、個人用アカウントにサインインします。 Organization アカウントは、複数の個人用アカウント間のコラボレーションを強化し、{% ifversion fpt or ghec %}Enterprise アカウント{% else %}{% data variables.product.product_location %} の Enterprise アカウント{% endif %}は、複数の Organization を一元管理できます。

## 個人用アカウント

{% data variables.product.product_location %} を使用するすべてのユーザーが、個人用アカウントにサインインします。 個人用アカウントは、{% data variables.product.product_location %} のご自分の ID であり、ユーザー名とプロフィールを持っています。 たとえば、[@octocat のプロフィール](https://github.com/octocat)を確認してください。

個人用アカウントは、リポジトリ、パッケージ、プロジェクトなどのリソースを所有できます。 issue の作成や pull request の確認など、{% data variables.product.product_location %} で何らかのアクションを実行すると、そのアクションはご自分の個人用アカウントに帰属します。

{% ifversion fpt or ghec %}個人用アカウントごとに、{% data variables.product.prodname_free_user %} または {% data variables.product.prodname_pro %} が使用されます。 すべての個人用アカウントは、パブリック リポジトリとプライベート リポジトリの数に制限なく所有でき、それらのリポジトリでコラボレーターの数に制限はありません。 {% data variables.product.prodname_free_user %} を使用する場合、ご自分の個人用アカウントが所有するプライベート リポジトリの機能セットは制限されます。 {% data variables.product.prodname_pro %} にアップグレードすると、プライベート リポジトリの完全な機能セットを取得できます。 詳細については、「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」を参照してください。 {% else %}個人用アカウントで所有するリポジトリは数に制限なく作成でき、それらのリポジトリにはコラボレーターの数にも制限はありません。{% endif %}

{% tip %}

**ヒント**: 個人用アカウントは人間が使用するものですが、{% data variables.product.product_name %} のアクティビティを自動化するアカウントを作成できます。 この種類のアカウントは、マシン ユーザーと呼ばれます。 たとえば、継続的インテグレーション (CI) ワークフローを自動化するマシン ユーザー アカウントを作成できます。

{% endtip %}

{% ifversion fpt or ghec %}ほとんどの人は、オープンソース プロジェクトでも、有給雇用時のどちらでも、{% data variables.product.prodname_dotcom_the_website %} のすべての作業に 1 つの個人用アカウントを使用します。 現在、自分で作成した個人用アカウントを複数使用している場合は、アカウントを結合することをお勧めします。 詳細については、「[複数の個人用アカウントをマージする](/articles/merging-multiple-user-accounts)」を参照してください。
{% endif %}

## Organization アカウント

Organization は、無制限の数の人が多くのプロジェクトで同時にコラボレーションできる共有アカウントです。 

個人用アカウントと同様に、Organization はリポジトリ、パッケージ、プロジェクトなどのリソースを所有できます。 ただし、Organization にサインインすることはできません。 代わりに、各ユーザーは自分の個人用アカウントにサインインし、そのユーザーが Organization のリソースに対して実行するアクションはすべて、その個人用アカウントに帰属します。 各個人用アカウントを複数の組織のメンバーにすることができます。

ある Organization 内の個人用アカウントには、その Organization の異なるロールを付与できるので、Organization とそのデータに異なるレベルのアクセス権を付与できます。 すべてのメンバーがリポジトリとプロジェクトで相互に共同作業を行うことができますが、Organization の設定を管理し、高度なセキュリティと管理機能を使用して Organization のデータへのアクセスを制御できるのは、Organization のオーナーとセキュリティ マネージャーだけです。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」と「[Organization を安全に保つ](/organizations/keeping-your-organization-secure)」を参照してください。

![Organization のリソースにアクセスするには、ユーザーが自分の個人用アカウントにサインインする必要があることを示す図](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %}所属する Organization が SAML シングル サインオンを使用する場合でも、{% data variables.product.prodname_dotcom_the_website %} では自分の個人用アカウントにサインインします。すると、その個人用アカウントから、Organization の ID プロバイダー (IdP) の ID にリンクされます。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}{% endif %}「[SAML シングル サインオンによる認証について](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」を参照してください。

ただし、{% data variables.product.prodname_emus %} を使用する企業のメンバーである場合は、作成した個人用アカウントを使用するのではなく、新しいアカウントが、その企業の IdP によってプロビジョニングされます。 その企業が所有するすべての Organization にアクセスするには、{% data variables.product.prodname_dotcom_the_website %} のユーザー名とパスワードではなく、IdP を使用して認証する必要があります。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}{% endif %}「[{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) について」を参照してください。{% endif %}

また、Organization メンバーの入れ子になったサブグループ (チームと呼びます) を作成して、グループの構造を反映させ、アクセス管理を簡素化することもできます。 詳細については、「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

{% data reusables.organizations.organization-plans %}

Organization の全機能の詳細については、「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。

## Enterprise アカウント

{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} には、管理者が複数の Organization のポリシーと課金を一元的に管理し、Organization 間の内部管理ができる Enterprise アカウントが含まれます。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Enterprise アカウントについて](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)」を参照してください。
{% elsif ghec %}Enterprise アカウントを使用すると、複数の Organization の一元的なポリシー管理と課金を行うことができます。 Enterprise アカウントを使用して、ポリシーと課金を一元的に管理できます。 Organization アカウントとは異なり、Enterprise アカウントは、リポジトリ、パッケージ、プロジェクトなどのリソースを直接所有することはできません。 これらのリソースは、代わりに Enterprise アカウント内の Organization が所有します。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。
{% elsif ghes or ghae %}Enterprise アカウントは、{% data variables.product.product_location %} が{% ifversion ghae %}所有する{% elsif ghes %}の{% endif %}すべての Organization のコレクションです。 Enterprise アカウントを使用して、ポリシーと課金を一元的に管理できます。 Organization アカウントとは異なり、Enterprise アカウントは、リポジトリ、パッケージ、プロジェクトなどのリソースを直接所有することはできません。 これらのリソースは、代わりに Enterprise アカウント内の Organization が所有します。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。
{% endif %}

## 参考資料

{% ifversion fpt or ghec %}
- [新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/articles/signing-up-for-a-new-github-account){% endif %}
- [新しい Organization アカウントを作成する](/articles/creating-a-new-organization-account)
- {% data variables.product.company_short %} リソース内の「[コラボレーションを成功させるためにユーザーを組織する](https://vimeo.com/333786093)」ビデオ
