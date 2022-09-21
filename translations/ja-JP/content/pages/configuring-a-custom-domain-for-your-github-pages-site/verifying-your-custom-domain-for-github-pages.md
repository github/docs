---
title: GitHub Pagesのカスタムドメインの検証
intro: ドメインを検証することで、カスタムドメインのセキュリティを高め、乗っ取り攻撃を回避できます。
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529672'
---
## GitHub Pagesのドメイン検証について

個人アカウントあるいは Organization でカスタム ドメインが検証されると、個人アカウントあるいは Organization が所有するリポジトリのみから検証済みのカスタム ドメインもしくはそのドメインの直下のサブドメインに {% data variables.product.prodname_pages %} サイトを公開できるようになります。

ドメインを検証すると、他のGitHubユーザがそのカスタムドメインを乗っ取り、そのユーザ自身の{% data variables.product.prodname_pages %}サイトの公開に使うことを止められます。 ドメインの乗っ取りは、{% data variables.product.prodname_pages %}用にドメインを残したままで検証せず、あなたが自分のリポジトリを削除したとき、支払いプランをダウングレードしたとき、あるいはカスタムドメインのリンクを解除するその他の変更や{% data variables.product.prodname_pages %}を無効化した後に生じます。

ドメインを検証すると、直接のサブドメインもその検証に含まれます。 たとえば、`github.com` カスタム ドメインが検証されると、`docs.github.com`、`support.github.com` およびその他の直下のサブドメインも乗っ取りから保護されます。

{% data reusables.pages.wildcard-dns-warning %}

Organization{% ifversion ghec %}あるいはEnterprise{% endif %}のドメインを検証することもできます。そうすると、「検証済み」バッジがOrganization{% ifversion ghec %}もしくはEnterprise{% endif %}のプロフィールに表示され{% ifversion ghec %}、{% data variables.product.prodname_ghe_cloud %}では検証済みドメインを使ってメールアドレスへの通知を制限できるようになり{% endif %}ます。 詳しい情報については、「[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}」および「[エンタープライズのドメインを検証または承認する](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}」を参照してください。

## ユーザサイトのドメインの検証

{% data reusables.user-settings.access_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **{% octicon "browser" aria-label="The pages icon" %} [ページ]** をクリックします。
{% data reusables.pages.settings-verify-domain-setup %}
1. DNS設定が変更されるまで待ちます。これはすぐに行われることも、最大で24時間かかることもあります。 DNS 設定への変更は、コマンドラインで `dig` コマンドを実行して確認できます。 次のコマンドで、`USERNAME` をユーザー名、`example.com` を検証しているドメインに置き換えます。 DNS設定が更新されていれば、出力中に新しいTXTレコードが表示されます。
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Organizationのサイトのドメインの検証

Organizationのオーナーは、自分のOrganizatinのカスタムドメインを検証できます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **{% octicon "browser" aria-label="The browser icon" %} [ページ]** をクリックします。
{% data reusables.pages.settings-verify-domain-setup %}
1. DNS設定が変更されるまで待ちます。これはすぐに行われることも、最大で24時間かかることもあります。 DNS 設定への変更は、コマンドラインで `dig` コマンドを実行して確認できます。 次のコマンドで、`ORGANIZATION` を Organization 名、`example.com` を検証しているドメインに置き換えます。 DNS設定が更新されていれば、出力中に新しいTXTレコードが表示されます。
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
