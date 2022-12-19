---
title: Web コミット署名を構成する
shortTitle: Configure web commit signing
intro: '{% data variables.product.product_name %} の Web インターフェイスで行われるコミットの自動署名を有効にすることができます。'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.product.product_location %}.'
ms.openlocfilehash: 759b158235e5727b474441d10b33016b58277c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068035'
---
## Web コミット署名について

Web コミット署名を有効にした場合、{% data variables.product.product_name %} は、ユーザーが {% data variables.product.product_location %} の Web インターフェイスで行ったコミットに、GPG を使って自動的に署名します。 {% data variables.product.product_name %} によって署名されたコミットは、確認済みの状態になります。 詳細については、「[コミット署名の検証について](/authentication/managing-commit-signature-verification/about-commit-signature-verification)」を参照してください。

Web コミット署名を有効にし、Web コミット署名に使われる秘密キーをローテーションして、Web コミット署名を無効にすることができます。

## Web コミット署名を有効にする

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - {% data variables.enterprise.management_console %} で定義された no-reply メール アドレスがある場合は、そのメール アドレスを使います。 ない場合は、`web-flow@my-company.com` のような任意のメール アドレスを使います。 メール アドレスは有効である必要はありません。
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Web コミット署名を有効にします。

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. 構成を適用した後、構成の実行が終わるまで待ちます。

   ```bash{:copy}
   ghe-config-apply
   ```
1. 組み込みの認証または外部認証を使って、{% data variables.product.product_location %} で新しいユーザーを作成します。 詳しくは、「[Enterprise の認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」をご覧ください。
   - ユーザーのユーザー名は、`web-flow` でなければなりません。
   - ユーザーのメール アドレスは、PGP キーに使ったものと同じアドレスでなければなりません。 {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. [no-reply メール アドレス] に、PGP キーに使ったものと同じメール アドレスを入力します。 

   {% note %}

   **注:** [no-reply メール アドレス] フィールドは、{% data variables.product.product_location %} のメールを有効にしてある場合にのみ表示されます。 詳しくは、「[通知のためのメール設定](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)」をご覧ください。

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## Web コミット署名に使用される秘密キーをローテーションする

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - {% data variables.enterprise.management_console %} で定義されている no-reply メール アドレスを使います。これは、`web-flow` ユーザーのメール アドレスと同じである必要があります。
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Web コミット署名を無効にする

{% data variables.product.product_location %} の Web コミット署名を無効にすることができます。

1. 管理シェルで、次のコマンドを実行します。

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. 構成を適用します。

   ```bash{:copy}
   ghe-config-apply
   ```
