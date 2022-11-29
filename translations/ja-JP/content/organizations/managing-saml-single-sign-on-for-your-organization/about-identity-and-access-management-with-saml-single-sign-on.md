---
title: SAML シングルサインオンを使うアイデンティティおよびアクセス管理について
intro: 'ユーザのアイデンティティとアプリケーションをアイデンティティプロバイダ (IdP) で集中管理する場合、Security Assertion Markup Language (SAML) シングルサインオン (SSO) を設定して {% data variables.product.prodname_dotcom %} での Organization のリソースを保護することができます。'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120618'
---
{% data reusables.saml.ghec-only %}

## SAML SSO について

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Organization のオーナーは、個々の Organization に SAML SSO を適用できます。または、Enterprise のオーナーは、Enterprise アカウント内のすべての Organization に SAML SSO を適用できます。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

Organization で SAML SSO を有効化する前に、IdP を Organization に接続する必要があります。 詳細については、「[ID プロバイダーを Organization に接続する](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)」を参照してください。

1 つの Organization に対して、SAML SSO は無効化、強制なしの有効化、強制ありの有効化ができます。 Organization に対して SAML SSO を有効にし、Organization のメンバーが IdP での認証に成功した後、SAML SSO 設定を強制できます。 {% data variables.product.prodname_dotcom %} Organization への SAML SSO の適用に関する詳細については、「[Organization に SAML シングル サインオンを適用する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

認証を受けて Organization のリソースにアクセスするために、メンバーは定期的に IdP の認証を受ける必要があります。 このログイン間隔は利用しているアイデンティティプロバイダ (IdP) によって指定されますが、一般的には 24 時間です。 このように定期的にログインしなければならないことから、アクセスの長さには制限があり、ユーザがアクセスを続行するには再認証が必要になります。

コマンドラインで API と Git を使用して、組織の保護されているリソースにアクセスするには、メンバーが {% data variables.product.pat_generic %} または SSH キーで認可および認証を受ける必要があります。 詳細については、「[SAML シングル サインオンで利用するために {% data variables.product.pat_generic %} を承認する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」と「[SAML シングル サインオンで利用するために SSH キーを承認する](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

組織へのアクセスにメンバーが初めて SAML SSO を使うと、{% data variables.product.prodname_dotcom %} により、組織、{% data variables.location.product_location %} 上のメンバーアカウント、IdP 上のメンバーのアカウントをリンクするレコードが自動的に作成されます。 Organization または Enterprise アカウントのメンバーについて、リンクされた SAML アイデンティティ、アクティブセッション、認可されたクレデンシャルの表示と取り消しが可能です。 詳細については、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」および「[Enterprise アカウントへのユーザーの SAML アクセスの表示および管理](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)」を参照してください。

新しいリポジトリを作成するときにメンバーが SAML SSO セッションでサインインする場合、そのリポジトリのデフォルトの可視性はプライベートになります。 それ以外の場合、デフォルトの可視性はパブリックです。 リポジトリの可視性の詳細については、「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。

{% data variables.product.prodname_oauth_app %}を認可するために、Organization メンバーにはアクティブな SAML セッションが必要です。 {% data variables.contact.contact_support %} に連絡すれば、この要件をオプトアウトできます。 ただし、この要件をオプトアウトすることを {% data variables.product.product_name %} はお勧めしません。Organization でアカウント乗っ取りやデータ漏えいのリスクが高くなるからです。

{% data reusables.saml.saml-single-logout-not-supported %}

## サポートされているSAMLサービス

{% data reusables.saml.saml-supported-idps %}

一部の IdPは、SCIM を介した {% data variables.product.prodname_dotcom %} Organization へのプロビジョニングアクセスをサポートしています。 詳細については、「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

{% data reusables.scim.enterprise-account-scim %} 

## SAML SSO で Organization にメンバーを追加する

SAML SSO を有効にした後、Organization に新しいメンバーを追加する方法は複数あります。 Organization のオーナーは、{% data variables.product.product_name %} で手作業または API を使って、新しいメンバーを招待できます。 詳細については、「[Organization に参加するようユーザーを招待する](/articles/inviting-users-to-join-your-organization)」および「[メンバー](/rest/reference/orgs#add-or-update-organization-membership)」を参照してください。

Organization のオーナーからの招待なしで新しいユーザーをプロビジョニングするには、URL `https://github.com/orgs/ORGANIZATION/sso/sign_up` を使用し、_ORGANIZATION_ を、ご自分の Organization の名前に置き換えます。 たとえば、あなたの IdP にアクセスできる人なら誰でも、IdP のダッシュボードにあるリンクをクリックして、あなたの {% data variables.product.prodname_dotcom %} Organization に参加できるよう、IdP を設定できます。

{% note %}

**注:** `https://github.com/orgs/ORGANIZATION/sso/sign_up` を使用した新しいユーザーのプロビジョニングは、SAML SSO が組織レベルで構成されている場合にのみサポートされ、SAML SSO がエンタープライズ アカウント レベルで構成されている場合はサポートされません。 エンタープライズ アカウント用の SAML SSO の詳細については、「[エンタープライズ IAM の SAML について](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)」を参照してください。

{% endnote %}

IdP が SCIM をサポートしている場合、{% data variables.product.prodname_dotcom %} は、IdP でアクセス権限が付与されたとき Organization に参加するよう自動的にメンバーを招待できます。 SAML IdP での メンバーの {% data variables.product.prodname_dotcom %} Organization へのアクセス権限を削除すると、そのメンバーは {% data variables.product.prodname_dotcom %} Organization から自動的に削除されます。 詳細については、「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## 参考資料

- 「[SAML 構成リファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)」
- 「[2 要素認証と SAML シングル サインオンについて](/articles/about-two-factor-authentication-and-saml-single-sign-on)」
- 「[SAML のシングル サインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」
