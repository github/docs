---
title: セルフホステッド ランナーによる自動スケーリング
shortTitle: Autoscale self-hosted runners
intro: Webhook イベントに応答して、セルフホステッド ランナーを自動的にスケーリングできます。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
ms.openlocfilehash: 2fe0c197ac122ea9cd976c2718a492bd80c073fe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107558'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 自動スケーリングについて

特定のラベルで受信した Webhook イベントに応答して、環境内のセルフホステッド ランナーの数を自動的に増減できます。 たとえば、[`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) アクティビティを含む [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) Webhook イベントを受信するたびに、新しいセルフホステッド ランナーを追加するオートメーションを作成できます。このイベントは、新しいジョブが処理できる状態であることを通知します。 Webhook のペイロードにはラベル データが含まれているため、ジョブが要求しているランナーの種類を識別できます。 ジョブが完了したら、`workflow_job` の [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) アクティビティに応答してランナーを削除するオートメーションを作成できます。 

## 推奨される自動スケーリング ソリューション

{% data variables.product.prodname_dotcom %} は、ランナーの自動スケーリングに使用できる 2 つのオープンソース プロジェクトを推奨し、それらと密接に連携しています。 ニーズに応じて、一方または両方のソリューションが適している可能性があります。 

これらの自動スケーラーを設定する詳しい手順については、次のリポジトリをご覧ください。 

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) - {% data variables.product.prodname_actions %} のセルフホステッド ランナー用の Kubernetes コントローラー。
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) - アマゾン ウェブ サービス上のスケーラブルな {% data variables.product.prodname_actions %} ランナー用の Terraform モジュール。

各ソリューションには、考慮すべき重要な特定の詳細が含まれる場合があります。

| **機能** | **actions-runner-controller** | **terraform-aws-github-runner** |
| :--- | :--- | :--- |
| ランタイム | Kubernetes | Linux と Windows VM |
| サポートされているクラウド | Azure、アマゾン ウェブ サービス、Google Cloud Platform、オンプレミス | アマゾン ウェブ サービス |
| ランナーをスケーリングできる場所 | Enterprise、Organization、リポジトリのレベル。 ランナー ラベルとランナー グループ別。 | Organization とリポジトリのレベル。 ランナー ラベルとランナー グループ別。 |
| ランナーをスケーリングする方法 | Webhook イベント、スケジュール、プル ベース | Webhook イベント、スケジュール (Organization レベルのランナーのみ) |

## 自動スケーリングにエフェメラル ランナーを使用する

{% data variables.product.prodname_dotcom %} は、エフェメラル セルフホステッド ランナーで自動スケーリングを実装することをお勧めします。永続的なセルフホステッド ランナーでの自動スケーリングはお勧めしません。 特定のケースでは、{% data variables.product.prodname_dotcom %} は、ジョブがシャットダウン中に永続的ランナーに割り当てられないことを保証できません。 エフェメラル ランナーであれば、{% data variables.product.prodname_dotcom %} はランナーに 1 つのジョブしか割り当てないため、これを保証できます。

この方法では、オートメーションを使ってジョブごとにクリーンな環境を提供できるため、ランナーをエフェメラル システムとして管理できます。 これは、以前のジョブから機密リソースが公開されるのを制限する役に立ち、侵害されたランナーが新しいジョブを受け取るリスクを軽減するのにも役立ちます。  

環境にエフェメラル ランナーを追加するには、`config.sh` を使ってランナーを登録するときに `--ephemeral` パラメーターを指定します。 たとえば次のような点です。

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

その後、ランナーが 1 つのジョブを処理すると、{% data variables.product.prodname_actions %} サービスによって自動的に登録解除されます。 その場合、登録解除後にランナーをワイプする独自のオートメーションを作成できます。

{% note %}

**注:** ジョブに特定の種類のランナー用のラベルが付いていて、その種類に一致するものを使用できない場合、ジョブがキューに入れられてすぐに失敗することはありません。 そうではなく、24 時間のタイムアウト期間が切れるまで、ジョブはキューに残ります。

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae %}

## セルフホステッド ランナーでランナー ソフトウェアの更新を制御する

既定では、ランナー ソフトウェアの新しいバージョンが利用可能になると、セルフホステッド ランナーは自動的にソフトウェアの更新を実行します。  コンテナーでエフェメラル ランナーを使用している場合は、新しいランナー バージョンがリリースされたときに、ソフトウェアの更新が繰り返される可能性があります。  自動更新をオフにすると、コンテナー イメージのランナー バージョンを独自のスケジュールで直接更新できます。

ソフトウェアの自動更新をオフにして、ソフトウェアの更新プログラムを自分でインストールするには、`config.sh` を使ってランナーを登録するときに、`--disableupdate` フラグを指定します。 たとえば次のような点です。

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

自動更新を無効にした場合でも、自分でランナーのバージョンを定期的に更新する必要があります。  {% data variables.product.prodname_actions %} に新機能がある場合は、{% data variables.product.prodname_actions %} サービスとランナー ソフトウェアの _両方_ で変更する必要があります。  ソフトウェアを更新しないと、{% data variables.product.prodname_actions %} の新機能を利用するジョブをランナーで正しく処理できない場合があります。

自動更新を無効にする場合は、ランナーの新しいバージョンが利用可能になってから 30 日以内に、バージョンを更新する必要があります。  [`actions/runner` リポジトリ](https://github.com/actions/runner/releases)でリリースの通知にサブスクライブすることもできます。 詳細については、「[通知の設定](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)」を参照してください。

ランナーの最新バージョンをインストールする方法については、[最新リリース](https://github.com/actions/runner/releases)のインストール手順をご覧ください。

{% note %}

**注:** 30 日以内にソフトウェアを更新しないと、{% data variables.product.prodname_actions %} サービスはランナーへのジョブをキューに入れなくなります。  さらに、重要なセキュリティ更新プログラムが必要な場合、{% data variables.product.prodname_actions %} サービスは、更新されるまで、ランナーへのジョブをキューに入れません。

{% endnote %}

{% endif %}

## 自動スケーリングに Webhook を使用する

[`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) Webhook から受信したペイロードを使って、独自の自動スケーリング環境を作成できます。 この Webhook は、リポジトリ、Organization、Enterprise のレベルで使用でき、このイベントのペイロードには、ワークフロー ジョブのライフサイクルのステージに対応する `action` キーが含まれています (たとえば、ジョブが `queued`、`in_progress`、`completed` のとき)。 その場合、これらの Webhook ペイロードに応答して独自のスケーリング オートメーションを作成する必要があります。

- `workflow_job` Webhook について詳しくは、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)」をご覧ください。
- Webhook の使用方法については、「[Webhook の作成](/developers/webhooks-and-events/webhooks/creating-webhooks)」をご覧ください。

## 認証の要件

[API](/rest/reference/actions#self-hosted-runners) を使って、リポジトリと Organization のセルフホステッド ランナーを登録および削除できます。 自動スケーリングの実装で、API の認証を行うには、アクセス トークンまたは {% data variables.product.prodname_dotcom %} アプリを使用できます。 

アクセス トークンには、次のスコープが必要です。

- プライベート リポジトリの場合は、[`repo` スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)でアクセス トークンを使います。
- パブリック リポジトリの場合は、[`public_repo` スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)でアクセス トークンを使います。
- Organization の場合は、[`admin:org` スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)でアクセス トークンを使います。

{% data variables.product.prodname_dotcom %} アプリを使って認証を行うには、次のアクセス許可を割り当てる必要があります。
- リポジトリの場合は、`administration` アクセス許可を割り当てます。
- Organization の場合は、`organization_self_hosted_runners` アクセス許可を割り当てます。

[API](/rest/reference/actions#self-hosted-runners) を使って、Enterprise のセルフホステッド ランナーを登録および削除できます。 自動スケーリングの実装で API の認証を行うには、アクセス トークンを使用できます。

アクセス トークンには、`manage_runners:enterprise` スコープが必要です。
