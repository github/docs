---
title: Enterprise の認証について
shortTitle: About authentication
intro: '{% ifversion ghec %}{% data variables.product.product_name %} 上にある Enterprise のリソース{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %} 上にある Enterprise {% endif %}にユーザーがアクセスできるように{% ifversion ghae %} SAML シングル サインオン (SSO) を構成する必要があります{% else %}ユーザーを認証する方法を選ぶことができます{% data variables.product.product_name %}{% endif %}。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164373'
---
## Enterprise の認証について

{% ifversion ghec %}

{% data variables.product.product_name %} の Enterprise 所有者は、Enterprise のリソースに対する認証とアクセスに関する要件を制御できます。 

{% data reusables.enterprise.ghec-authentication-options %}

これらのオプションの詳しい情報を学習した後、Enterprise に最適な方法を決定するには、「[Enterprise に最適な認証方法を特定する](#identifying-the-best-authentication-method-for-your-enterprise)」を参照してください。

## {% data variables.product.product_name %} の認証方法

{% data variables.product.product_name %} のアカウント管理と認証には、次のオプションを使用できます。

- [{% data variables.location.product_location %} による認証](#authentication-through-githubcom)
- [追加の SAML アクセス制限を使用した {% data variables.location.product_location %} による認証](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [{% data variables.product.prodname_emus %} とフェデレーションを使用した認証](#authentication-with-enterprise-managed-users-and-federation)

### {% data variables.location.product_location %} による認証

既定では、各メンバーは {% data variables.location.product_location %} に個人アカウントを作成する必要があります。 Enterprise へのアクセス権を付与すると、メンバーは {% data variables.location.product_location %} のアカウントにサインインした後、Enterprise のリソースにアクセスできます。 メンバーはアカウントを管理し、{% data variables.location.product_location %} の他の Enterprise、Organization、リポジトリに投稿できます。

### 追加の SAML アクセス制限を使用した {% data variables.location.product_location %} による認証

追加の SAML アクセス制限を構成する場合は、各メンバーが {% data variables.location.product_location %} の個人アカウントを作成して管理する必要があります。 Enterprise へのアクセス権を付与すると、メンバーは {% data variables.location.product_location %} のアカウントにサインインし、SAML ID プロバイダー (IdP) で正常に認証した後に、Enterprise のリソースにアクセスできます。 メンバーは個人アカウントを使用して、{% data variables.location.product_location %} の他の Enterprise、Organization、リポジトリに投稿できます。 Enterprise のリソースへのすべてのアクセスに SAML 認証を要求する方法について詳しくは、「[Enterprise IAM の SAML について](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)」を参照してください。

{% data variables.product.product_name %} でスタンドアロン Organization を使用する場合、または Enterprise 内のすべての Organization に対して SAML 認証を使用しない場合は、個々の Organization に対して SAML を構成できます。 詳細については、「[SAML シングル サインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

### {% data variables.product.prodname_emus %} とフェデレーションを使用した認証

{% data variables.location.product_location %} の Enterprise メンバーのアカウントをより細かく制御する必要がある場合は、{% data variables.product.prodname_emus %} を使用できます。 {% data variables.product.prodname_emus %} では、IdP を使用し、{% data variables.location.product_location %} の Enterprise メンバーのアカウントをプロビジョニングして管理します。 作成されたアカウントに各メンバーがサインインすると、Enterprise でそのアカウントが管理されます。 {% data variables.product.prodname_dotcom_the_website %} の残りの部分への投稿は制限されています。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)」を参照してください。

## Enterprise に最適な認証方法を特定する

SAML SSO と {% data variables.product.prodname_emus %} の両方で、Enterprise のリソースのセキュリティが強化されます。 さらに、{% data variables.product.prodname_emus %} を使用すると、Enterprise メンバーのユーザー アカウントを管理し、アカウントで実行できる操作を制限できます。 ただし、これらの制限によって開発者のワークフローが妨げられる場合、Enterprise ではそれらを受け入れられないことがあります。

Enterprise が SAML SSO と {% data variables.product.prodname_emus %} のどちらから、より多くのメリットを得られるかを判断するには、これらの質問を自問してください。

- [ユーザーのユーザー アカウントを自分で管理したいか?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Enterprise でどの ID プロバイダーを使用するか?](#which-identity-provider-does-your-enterprise-use)
- [開発者はパブリック リポジトリ、gist、{% data variables.product.prodname_pages %} サイトのどれで作業するか?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [開発者は Enterprise 外部のコラボレーションに依存しているか?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Enterprise は外部のコラボレーターに依存しているか?](#does-your-enterprise-rely-on-outside-collaborators)
- [会社が移行コストを許容できるか?](#can-your-enterprise-tolerate-migration-costs)

### ユーザーのユーザー アカウントを自分で管理したいか?

{% data variables.product.prodname_emus %} は、Enterprise メンバーが {% data variables.product.prodname_dotcom_the_website %} で自分の個人アカウントを使って Enterprise のリソースにアクセスすることを望まない場合に、適している可能性があります。 

SAML SSO を使用すると、開発者は自分の個人アカウントを作成して管理でき、各アカウントは IdP の SAML ID にリンクされます。 {% data variables.product.prodname_emus %} は、ご自身でユーザーのアカウントをプロビジョニングするため、他の使い慣れた SSO ソリューションと同様に機能します。 また、ユーザー名とアカウントに関連付けられるメール アドレスを管理することで、ユーザー アカウントが会社の ID に準拠していることを確実にすることもできます。 

現在、ユーザーに対して、{% data variables.product.prodname_dotcom_the_website %} で新しいアカウントを作成して Enterprise でのみ使用するように要求している場合は、{% data variables.product.prodname_emus %} が適している可能性があります。 ただし、IdP をユーザー向けの信頼できるソースとして使用し、アクセス管理が複雑すぎる場合は、SAML SSO の方が適切なオプションである可能性があります。 たとえば、IdP で新しいユーザーをオンボードするための確立されたプロセスが Enterprise にない場合があります。

### Enterprise でどの ID プロバイダーを使用するか?

{% data variables.product.prodname_emus %} がサポートされている IdP の数は限られています。SAML SSO を使用すると、多数の IdP に対する完全なサポートと、SAML 2.0 標準を実装しているすべての IdP に対する制限付きサポートが提供されます。 各オプションでサポートされている IdP の一覧については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)」および「[Enterprise IAM の SAML について](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)」を参照してください。

サポートされていない IdP で {% data variables.product.prodname_emus %} を使用できるのは、サポートされていない IdP をサポートされている IdP にフェデレーションして統合ポイントとして使用する場合のみです。 このような余分な複雑さを避けたい場合は、SAML SSO の方が優れたソリューションになる可能性があります。

### 開発者はパブリック リポジトリ、gist、{% data variables.product.prodname_pages %} サイトのどれで作業するか?

Enterprise メンバーが誤って {% data variables.product.prodname_dotcom_the_website %} で Enterprise 所有のコンテンツを一般に漏洩させることがないように、{% data variables.product.prodname_emus %} では、ユーザーが実行できる操作に対して強力な制限が課されます。 たとえば、{% data variables.enterprise.prodname_managed_users %} では、パブリック リポジトリ、任意の可視性を持つ gist、または Enterprise 外部で閲覧できる {% data variables.product.prodname_pages %} サイトを作成することはできません。 制限の完全な一覧については、「[{% data variables.enterprise.prodname_managed_users %} の機能と制限](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)」を参照してください。

これらの制限が受け入れらない Enterprise もあります。 {% data variables.product.prodname_emus %} がご自身に適しているかどうかを判断するには、開発者と共に制限事項を確認し、いずれかの制限によって既存のワークフローが妨げられるかどうかを確認します。 該当する場合は、お使いの Enterprise には SAML SSO が適している可能性があります。

### 開発者は Enterprise 外部のコラボレーションに依存しているか?

{% data variables.enterprise.prodname_managed_users_caps %} では、Enterprise 内部のリポジトリにのみ投稿できます。 開発者がプライベート リポジトリを含め、エンタープライズ内と外部の両方のリポジトリに投稿する必要がある場合、{% data variables.product.prodname_emus %}はエンタープライズに適していない可能性があります。 SAML SSO の方が優れたソリューションになる可能性があります。

一部の会社では、{% data variables.location.product_location %} に SAML SSO を使用して既存の Enterprise 内のリポジトリを保持し、{% data variables.enterprise.prodname_emu_enterprise %}も作成します。 1 つのワークステーションから両方の Enterprise によって所有されるリポジトリに投稿する開発者は、1 つのブラウザー内で {% data variables.location.product_location %} のアカウントを切り替えるか、アカウントごとに異なるブラウザーを使用する必要があります。 開発者は、2 つのアカウントに対応するようにワークステーションの Git 構成をカスタマイズする必要がある場合もあります。 このワークフローの複雑さは、内部コードを誤って一般に漏洩させるリスクを高める可能性があります。

{% data variables.enterprise.prodname_emu_enterprise %}を作成する場合に、開発者が 1 つのワークステーションから Enterprise 外のリソースに投稿する必要がある場合は、開発者のローカル Git 構成でアカウントを切り替えるためのサポートを提供できます。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)」を参照してください。

### Enterprise は外部のコラボレーターに依存しているか?

SAML SSO を使用すると、外部コラボレーター ロールを使用して、IdP のディレクトリのメンバーではないユーザーに特定のリポジトリへのアクセスを許可できます。 これは、社外のコラボレーター (請負業者など) に対して特に役立ちます。 詳しい情報については、「[外部のコラボレーターを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」を参照してください。

{% data variables.product.prodname_emus %} の場合、外部コラボレーター ロールは存在しません。 Enterprise のリソースには、常に IdP によってプロビジョニングされる {% data variables.enterprise.prodname_managed_users %} のみがアクセスできます。 外部コラボレーターに Enterprise へのアクセスを許可するには、IdP でゲスト アカウントを使用する必要があります。 {% data variables.product.prodname_emus %} に関心がある場合は、開発者に、これによって既存のワークフローが妨げられるかどうかを確認してください。 該当する場合は、SAML SSO の方が優れたソリューションになる可能性があります。

### 会社が移行コストを許容できるか?

会社で {% data variables.product.prodname_dotcom_the_website %} を初めて使用する場合、SAML SSO と {% data variables.product.prodname_emus %} は同じように簡単に導入できます。

既に {% data variables.product.prodname_dotcom_the_website %} を使用していて、開発者が各自のユーザー アカウントを管理している場合は、{% data variables.product.prodname_emus %} を導入するには、新しい Enterprise アカウントに移行する必要があります。 詳しい情報については、「[{% data variables.enterprise.prodname_managed_users %} を含む Enterprise について](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)」を参照してください。

{% data variables.product.prodname_emus %} は無料ですが、移行プロセスにはチームの時間またはコストが必要になる場合があります。 この移行プロセスが、ご自身のビジネスと開発者に許容されることを確認してください。 そうでない場合は、SAML SSO が適している可能性があります。

{% elsif ghes %}

サイト管理者は、ユーザーが {% data variables.product.product_name %} インスタンスにアクセスするための認証方法を決定できます。 {% data variables.product.product_name %} のビルトイン認証を使用することができます。チームで使用される Web アプリケーションの ID とアクセス管理を一元化する場合は、外部認証方法を構成できます。

## {% data variables.product.product_name %} の認証方法

{% data variables.product.product_name %} では、次の認証方法を使用できます。

- [ビルトイン認証](#built-in-authentication)
- [外部認証](#external-authentication)

### ビルトイン認証

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} インスタンスにアクセスするために、ユーザーはアカウントの資格情報を使用して認証します。 詳しくは、「[ビルトイン認証の設定](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)」を参照してください。

### 外部認証

外部ディレクトリまたは ID プロバイダー (IdP) を使用して複数の Web アプリケーションへのアクセスを一元化する場合は、{% data variables.location.product_location %} の外部認証を構成できる可能性があります。 詳細については、次の記事を参照してください。

- [Enterprise IAM での CAS の使用](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- 「[Enterprise IAM での LDAP の使用](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)」
- [Enterprise IAM での SAML の使用](/admin/identity-and-access-management/using-saml-for-enterprise-iam)

外部認証を使用することにした場合は、外部認証プロバイダーにアカウントを持っていないユーザーのフォールバック認証を構成することもできます。 たとえば、請負業者またはコンピューター ユーザーにアクセス権を付与できます。 詳しくは、「[プロバイダー外のユーザーのためのビルトイン認証の許可](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)」を参照してください。

{% ifversion scim-for-ghes %}

認証に SAML SSO を使用する場合は、SCIM を使用してユーザーをプロビジョニングし、IdP グループをチームにマップすることもできます。 詳しくは、「[Enterprise 用の SCIM を使用したユーザーのプロビジョニングを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)」を参照してください。

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %}では認証に SAML SSO が使用されます。 Enterprise 所有者は、初期化中に SAML ID プロバイダー (IdP) で SAML SSO を構成する必要があります。 詳しくは、「[Enterprise IAM の SAML について](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)」を参照してください。

{% endif %}

## 参考資料

- [{% data variables.product.company_short %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)
- [Enterprise アカウントについて](/admin/overview/about-enterprise-accounts){%- ifversion ghec %}
- [私の Organization に所属する人のためにアカウントを作成できますか?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)
{% endif %}
