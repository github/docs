---
title: Azure AD を使用して Enterprise の認証とプロビジョニングを設定する
shortTitle: Azure AD を使用しての設定
intro: Azure Active Directory (Azure AD) のテナントをアイデンティティプロバイダ (IdP) として使用して、{% data variables.product.product_location %} の認証とユーザプロビジョニングを一元管理できます。
permissions: Enterprise のオーナーは、{% data variables.product.product_name %} で Enterprise の認証とプロビジョニングを設定できます。
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### Azure AD を使用した認証とユーザプロビジョニングについて

Azure Active Directory (Azure AD) は、ユーザアカウントと Web アプリケーションへのアクセスを一元管理できる Microsoft のサービスです。 詳しい情報については、Microsoft Docs の「[Azure Active Directory とは](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis)」を参照してください。

{% data variables.product.product_name %} のアイデンティティとアクセスを管理するために、Azure AD テナントを認証用の SAML IdP として使用できます。 アカウントを自動的にプロビジョニングし、SCIM でアクセスするように Azure AD を設定することもできます。 この設定により、Azure AD テナントのユーザアカウントに {% data variables.product.prodname_ghe_managed %} アプリケーションを割り当てたり、割り当てを解除したりして、{% data variables.product.product_name %} の対応するユーザアカウントを自動作成、アクセス許可、または非アクティブ化できます。

{% data variables.product.product_location %} での Enterprise のアイデンティティとアクセスの管理の詳細については、「[Enterprise のアイデンティティとアクセスを管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise)」を参照してください。

### 必要な環境

Azure AD を使用して {% data variables.product.product_name %} の認証とユーザプロビジョニングを設定するには、Azure AD アカウントとテナントが必要です。 詳しい情報については、「[Azure AD Web サイト](https://azure.microsoft.com/free/active-directory)」および Microsoft Docs の「[クイックスタート: Azure Active Directory テナントを作成する](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant)」を参照してください。

{% data reusables.saml.assert-the-administrator-attribute %} Azure AD からの SAML 要求に `administrator` 属性を含める方法について詳しくは、Microsoft Docs の「[方法: Enterprise アプリケーション向けに SAML トークンで発行された要求をカスタマイズする](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization)」を参照してください。

{% data reusables.saml.create-a-machine-user %}

### Azure AD を使用して認証とユーザプロビジョニングを設定する

{% if currentVersion == "github-ae@latest" %}

1. Azure AD で、{% data variables.product.ae_azure_ad_app_link %} をテナントに追加し、シングルサインオンを設定します。 詳しい情報については、Microsoft Docs の「[チュートリアル: Azure Active Directory シングルサインオン (SSO) と {% data variables.product.prodname_ghe_managed %} の統合](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial)」を参照してください。

1. {% data variables.product.prodname_ghe_managed %} に、Azure AD テナントの詳細を入力します。

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - 別の IdP を使用して {% data variables.product.product_location %} の SAML SSO を既に設定していて、代わりに Azure AD を使用する場合は、設定を編集できます。 詳しい情報については、「[Enterprise 向けのSAML シングルサインオンを設定する](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)」を参照してください。

1. {% data variables.product.product_name %} でユーザプロビジョニングを有効化し、Azure AD でユーザプロビジョニングを設定します。 詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)」を参照してください。

{% endif %}
