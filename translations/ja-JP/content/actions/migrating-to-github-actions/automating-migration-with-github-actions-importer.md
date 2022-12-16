---
title: GitHub Actions Importer を使用した移行の自動化
intro: '{% data variables.product.prodname_actions_importer %} を使って、{% data variables.product.prodname_actions %} への移行を計画し自動化します。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160080'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[法的通知](#legal-notice)

{% note %}

**注**: {% data variables.product.prodname_actions_importer %} は現在、パブリック プレビューとしてお使いいただけます。 プレビューへのアクセスをリクエストする場合は、[サインアップ ページ](https://github.com/features/actions-importer/signup)にアクセスしてください。 アクセス権が付与されると、`gh-actions-importer` CLI 拡張機能をお使いいただけるようになります。

{% endnote %}

## {% data variables.product.prodname_actions_importer %} について

{% data variables.product.prodname_actions_importer %} を使用して、Azure DevOps、CircleCI、GitLab、Jenkins、Travis CI から CI/CD パイプラインを計画して {% data variables.product.prodname_actions %} に自動的に移行することができます。

{% data variables.product.prodname_actions_importer %} は Docker コンテナーとして配布され、[{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) 拡張機能を使用してコンテナーとやりとりします。

{% data variables.product.prodname_actions_importer %} によって変換されたワークフローは、運用ワークロードとして使用する前に、正確性を検査する必要があります。 目標は、すべてのワークフローで 80% の変換率を達成することですが、実際の変換率は、変換される各パイプラインの構成によって異なります。

## サポートされている CI プラットフォーム

{% data variables.product.prodname_actions_importer %} を使用すると、次のプラットフォームから移行することができます。

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

プレビューへのアクセス権が付与されると、サポートされている各プラットフォームの参照ドキュメントにアクセスできるようになります。

## 前提条件

{% data variables.product.prodname_actions_importer %} には、次の要件があります。

- {% data variables.product.prodname_actions_importer %} のパブリック プレビューへのアクセス権が付与されている必要があります。
{%- ifversion ghes < 3.5 or ghae %}
- `read:packages` スコープが有効になっている {% data variables.product.pat_generic %} を使用します。
{%- else %}
- {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} に対して認証するための資格情報が必要です。 詳しくは、「[コンテナー レジストリを操作する](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)」をご覧ください。
{% endif %}
- Linux ベースのコンテナーを実行し、必要なツールをインストールできる環境。
  - Docker が[インストールされていて](https://docs.docker.com/get-docker/)実行されていること。
  - [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) がインストールされていること。

  {% note %}

  **注**: {% data variables.product.prodname_actions_importer %} コンテナーと CLI は、CI プラットフォームと同じサーバーにインストールする必要はありません。

  {% endnote %}

### {% data variables.product.prodname_actions_importer %} CLI 拡張機能のインストール

1. {% data variables.product.prodname_actions_importer %} CLI 拡張機能のインストール

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. 拡張機能がインストールされていることを確認します。

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### {% data variables.product.prodname_actions_importer %} CLI の更新

最新バージョンの {% data variables.product.prodname_actions_importer %} を実行していることを確認するには、`update` コマンドを定期的に実行する必要があります。

```bash
$ gh actions-importer update
```

このコマンドを正常に実行するには、{% data variables.product.prodname_container_registry %} で認証する必要があります。 または、`--username` および `--password-stdin` パラメーターを使用して資格情報を指定することもできます。

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### コマンドラインで認証する

{% data variables.product.prodname_actions_importer %} が {% data variables.product.prodname_dotcom %} および現在の CI サーバーと通信できるようにする資格情報を構成する必要があります。 これらの資格情報は、環境変数または `.env.local` ファイルを使用して構成できます。 環境変数は、次のコマンドを実行して、対話型プロンプトで構成できます。

```bash
$ gh actions-importer configure
```

プレビューへのアクセス権が付与されると、環境変数の使用に関する参照ドキュメントにアクセスできるようになります。

## {% data variables.product.prodname_actions_importer %} CLI の使用

`gh actions-importer` のサブコマンドを使って、{% data variables.product.prodname_actions %} への移行を始めます。`audit`、`forecast`、`dry-run`、`migrate` が含まれます。

### 既存の CI パイプラインの監査

`audit` サブコマンドは、現在の CI/CD 占有領域を分析して、CI/CD の移行の計画に使用できます。 この解析を使用して、{% data variables.product.prodname_actions %} への移行のタイムラインを計画できます。

監査を実行するには、次のコマンドを使用して、使用可能なオプションを決定します。

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

プレビューへのアクセス権が付与されると、監査の実行に関する参照ドキュメントにアクセスできるようになります。

### 使用状況の予測

`forecast` サブコマンドは、パイプラインの使用状況の履歴を確認して、{% data variables.product.prodname_actions %} 使用量の予測を作成します。

予測を実行するには、次のコマンドを使用して、使用可能なオプションを決定します。

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

プレビューへのアクセス権が付与されると、予測の実行に関する参照ドキュメントにアクセスできるようになります。

### 移行プロセスのテスト

`dry-run` サブコマンドを使用して、パイプラインを同等の {% data variables.product.prodname_actions %} に変換し、ワークフローをローカル ファイルシステムに書き込むことができます。

ドライ ランを実行するには、次のコマンドを使用して、使用可能なオプションを決定します。

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

プレビューへのアクセス権が付与されると、ドライ ランの実行に関する参照ドキュメントにアクセスできるようになります。

### {% data variables.product.prodname_actions %} へのパイプラインの移行

`migrate` サブコマンドを使用して、パイプラインを同等の GitHub Actions に変換し、その内容を含む pull request を作成できます。

移行を実行するには、次のコマンドを使用して、使用可能なオプションを決定します。

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

プレビューへのアクセス権が付与されると、移行の実行に関する参照ドキュメントにアクセスできるようになります。

## 法的通知

MIT ライセンスのもとで https://github.com/github/gh-actions-importer/ から一部を引用しています。

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
