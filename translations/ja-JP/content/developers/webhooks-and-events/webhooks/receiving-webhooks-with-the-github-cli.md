---
title: GitHub CLI を使った Webhook の受信
intro: '{% data variables.product.prodname_cli %} を使うと、複雑なポート転送やサードパーティ製ツールがなくても、お使いの開発環境で Webhook をテストすることができます。'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 11bc5b476a191a61594cb73f1e6ce1be5bb6cf9b
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160665'
---
## {% data variables.product.prodname_cli %} を使った Webhook の受信について

{% note %}

**注**: {% data variables.product.prodname_cli %} を使った Webhook の受信は、現在限定パブリック ベータ版であり、変更される可能性があります。 ベータ版にサインアップするには、GitHub Community の[ディスカッション](https://github.com/orgs/community/discussions/38261)に返信してください。 すぐには追加されない場合があります。 ベータ版に追加されると、メールの通知が届きます。

{% endnote %}

統合コードを変更するときに、ローカル環境でコードを実行すると、コードをデプロイせずにすばやくテストと反復処理を行うことができます。 {% data variables.product.prodname_cli %} を使って、Webhook をローカル環境に転送できます。

{% note %}

**メモ:** {% data variables.product.prodname_cli %} の Webhook 転送は、リポジトリと Organization の Webhook でのみ機能します。 スポンサーシップ、GitHub App、Enterprise、または Marketplace Webhook をローカルでテストする場合は、手動で行う必要があります。 詳細については、「[webhook の作成](/developers/webhooks-and-events/webhooks/creating-webhooks)」を参照してください。

{% endnote %}

## {% data variables.product.prodname_cli %} を使った Webhook の受信

{% data reusables.cli.cli-learn-more %}

1. {% data variables.product.prodname_cli %} 拡張機能をインストールして Webhook 転送を有効にするには、`extension install` サブコマンドを使います。 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. アプリケーションをローカルで起動し、Webhook を受信する予定の URL をメモします。 このガイドでは、アプリケーションが `http://localhost:3000/webhook` で Webhook イベントをリッスンしていることを前提としています。

1. Webhook がアプリケーションに配信されるように設定するには、`webhook forward` サブコマンドを実行します。 `REPOSITORY` をリポジトリの名前に置き換えます。 たとえば、「 `monalisa/octocat` 」のように入力します。 `EVENTS` を、受信するイベントのコンマ区切りのリストに置き換えます。 たとえば、「 `issues,pull_request` 」のように入力します。 `URL` を、アプリケーションで Webhook を受け取ることが想定されているローカル URL に置き換えます。 たとえば、「 `"http://localhost:3000/webhook"` 」のように入力します。  リポジトリ Webhook ではなく Organization の Webhook をリッスンするには、`--repo` フラグを `--org` フラグに置き換えます。 たとえば、「 `--org="octo-org"` 」のように指定します。


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  コマンドはバックグラウンドで実行したままにします。 これにより、指定したリポジトリに対して指定されたすべてのイベントが受信され、指定した URL で実行されている Webhook ハンドラーに転送されます。
