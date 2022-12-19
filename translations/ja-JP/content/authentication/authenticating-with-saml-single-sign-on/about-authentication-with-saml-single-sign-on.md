---
title: SAMLのシングルサインオンでの認証について
intro: '{% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}SAML シングル サインオン (SSO) を使う組織{% endif %}にアクセスするには、ID プロバイダー (IdP) を介して{% ifversion ghae %} SAML シングル サインオン (SSO) で{% endif %}認証を行います。'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111514'
---
## SAML SSO での認証について

{% ifversion ghae %}

SAML SSO を使用すると、Enterprise のオーナーは、SAML IdP から {% data variables.product.product_name %} へのアクセスを一元的に制御して保護できます。 ブラウザーで {% data variables.location.product_location %} にアクセスすると、認証のために {% data variables.product.product_name %} によって IdP にリダイレクトされます。 IdP のアカウントで正常に認証されると、IdP によって {% data variables.location.product_location %} にリダイレクトされます。 {% data variables.product.product_name %} は、IdP からのレスポンスを検証してから、アクセスを許可します。

{% data reusables.saml.you-must-periodically-authenticate %}

{% data variables.product.product_name %} にアクセスできない場合は、担当の Enterprise のオーナーまたは管理者に {% data variables.product.product_name %} についてお問い合わせください。 {% data variables.product.product_name %} のページの下部にある **[サポート]** をクリックすると、Enterprise の連絡先情報を確認することができます。 {% data variables.product.company_short %} および {% data variables.contact.github_support %} は IdP にアクセスできず、認証の問題をトラブルシューティングできません。 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Organization のオーナーは、{% data variables.product.prodname_dotcom %}で個人アカウントを SAML SSO を使用する Organization に招待できます。これにより、Organization に貢献することができ、{% data variables.product.prodname_dotcom %}の既存の ID とコントリビューションを保持できます。

{% data variables.enterprise.prodname_emu_enterprise %} のメンバーである場合は、プロビジョニングされ、エンタープライズによって管理された新しいアカウントを代わりに使用します。 {% data reusables.enterprise-accounts.emu-more-info-account %}

SAML SSO を使用する組織内のプライベート リソースにアクセスすると、{% data variables.product.prodname_dotcom %} によって認証のために組織の SAML IdP にリダイレクトされます。 IdP でアカウントが正常に認証されると、IdP は{% data variables.product.prodname_dotcom %}に戻り、Organization のリソースにアクセスできます。

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

最近ブラウザで Organization の SAML IdP が認証された場合、SAML SSO を使う {% data variables.product.prodname_dotcom %} の Organization へのアクセスは自動的に認可されます。 最近ブラウザで Organization の SAML IdP が認証されていない場合は、Organization にアクセスする前に SAML IdP で認証を受ける必要があります。

{% data reusables.saml.you-must-periodically-authenticate %}

## リンクされた SAML ID

IdP アカウントで認証を行い、{% data variables.product.prodname_dotcom %} に戻ると、{% data variables.product.prodname_dotcom %} は、{% data variables.product.prodname_dotcom %} 個人アカウントとサインインした SAML ID の間の組織またはエンタープライズ内のリンクを記録します。  このリンク ID は、その組織のメンバーシップを検証するために使用されます。また、組織またはエンタープライズの設定に応じて、あなたがどの組織やチームのメンバーになっているかを判断するためにも使用されます。 各 {% data variables.product.prodname_dotcom %} アカウントは、組織ごとに 1 つの SAML ID にリンクできます。 同様に、各 SAML ID は、組織内の 1 つの {% data variables.product.prodname_dotcom %} アカウントにリンクできます。 

別の {% data variables.product.prodname_dotcom %} アカウントに既にリンクされている SAML ID でサインインすると、その SAML ID でサインインできないことを示すエラー メッセージが表示されます。 この状況は、組織内で新しい {% data variables.product.prodname_dotcom %} アカウントを使用しようとしている場合に発生する可能性があります。 その {% data variables.product.prodname_dotcom %} アカウントでその SAML ID を使用しない場合は、その SAML ID からサインアウトしてから、SAML ログインを繰り返す必要があります。 その SAML ID を {% data variables.product.prodname_dotcom %} アカウントで使用する場合は、新しいアカウントにリンクできるように、古いアカウントから SAML ID のリンクを解除するように管理者に依頼する必要があります。  組織またはエンタープライズの設定によっては、管理者が SAML プロバイダー内で ID を再割り当てする必要がある場合もあります。  詳細については、「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」を参照してください。

サインインする SAML ID が、現在 {% data variables.product.prodname_dotcom %} アカウントにリンクされている SAML ID と一致しない場合は、アカウントを再リンクしようとしているという警告が表示されます。 SAML ID はアクセスとチーム メンバーシップを管理するために使用されるため、新しい SAML ID を使用して続けると、{% data variables.product.prodname_dotcom %} 内のチームや組織にアクセスできなくなる可能性があります。 今後、その新しい SAML ID を認証に使用することがわかっている場合にのみ続けます。 

## SAML SSO を使った {% data variables.product.pat_generic %} と SSH キーの認可

SAML SSO を使用する資格組織内の保護されたコンテンツにアクセスするために API またはコマンドライン上の Git を利用するには、認可された {% data variables.product.pat_generic %} を HTTPS 経由で使うか、認可された SSH キーを使う必要があります。

{% data variables.product.pat_generic %} または SSH キーを持っていない場合は、コマンド ラインの {% data variables.product.pat_generic %} を作成するか、新しい SSH キーを生成することができます。 詳細については、「[{% data variables.product.pat_generic %} の作成](/github/authenticating-to-github/creating-a-personal-access-token)」または「[新しい SSH キーの生成と ssh-agent への追加](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

新しい、または既存の {% data variables.product.pat_generic %} か SSH キーを、SAML SSO を使用または要求する組織で利用するには、SAML SSO 組織で使うためにそのトークンや SSH キーを認可する必要があります。 詳細については、「[SAML シングル サインオンで利用するために {% data variables.product.pat_generic %} を承認する](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングル サインオンで利用するために SSH キーを承認する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。

## {% data variables.product.prodname_oauth_apps %}、{% data variables.product.prodname_github_apps %}、SAML SSO について

SAML SSO を使用または要求する Organization にアクセスする {% data variables.product.prodname_oauth_app %} または {% data variables.product.prodname_github_app %} を認証するたびにアクティブな SAML セッションが必要です。 ブラウザーで `https://github.com/orgs/ORGANIZATION-NAME/sso` に移動し、アクティブな SAML セッションを作成できます。

企業または組織の所有者が Organization の SAML SSO を有効にしたか、適用した後、SAML を使用して初めて認証した後、以前に Organization へのアクセスを許可した {% data variables.product.prodname_oauth_apps %} または {% data variables.product.prodname_github_apps %} を再認証する必要があります。 

認証した {% data variables.product.prodname_oauth_apps %} を表示するには、[{% data variables.product.prodname_oauth_apps %} ページ](https://github.com/settings/applications)にアクセスします。 認証した {% data variables.product.prodname_github_apps %} を表示するには、[{% data variables.product.prodname_github_apps %} ページ](https://github.com/settings/apps/authorizations)にアクセスします。

{% endif %}

## 参考資料

{% ifversion ghec %}- 「[SAML シングル サインオンを使用した ID およびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」{% endif %} {% ifversion ghae %}- 「[Enterprise の ID およびアクセス管理について](/admin/authentication/about-identity-and-access-management-for-your-enterprise)」{% endif %}
