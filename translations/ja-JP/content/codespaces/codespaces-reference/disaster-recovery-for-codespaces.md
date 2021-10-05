---
title: Codespaces のシステム災害復旧
intro: この記事では、大規模な自然災害や広範囲にわたるサービスの中断により、地域全体で障害が発生した場合のシステム災害復旧シナリオのガイダンスについて説明します。
versions:
  free-pro-team: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
shortTitle: Disaster recovery
---

当社は、ユーザが {% data variables.product.prodname_codespaces %} をいつでも確実にご利用いただけるよう努力しています。 しかし、当社の管理できる範囲を超えてサービスに影響を及ぼし、計画外のサービスの中断を引き起こす不可抗力が発生する可能性があります。

システム災害復旧シナリオはまれにしか発生しませんが、リージョン全体にわたる停止が発生する可能性に備えておくことをお勧めします。 リージョン全体でサービスが中断した場合、ローカルで冗長化されたデータのコピーは一時的に利用できなくなります。

次のガイダンスでは、codespace がデプロイされているリージョン全体へのサービスの中断を処理する方法を説明します。

{% note %}

**注釈:** リモートリポジトリに頻繁にプッシュすることで、サービス全体の停止による潜在的な影響を減らすことができます。

{% endnote %}

## Option 1: Create a new codespace in another region

In the case of a regional outage, we suggest you recreate your codespace in an unaffected region to continue working. この新しい codespace には、{% data variables.product.prodname_dotcom %} への最後のプッシュ時点までのすべての変更が含まれます。 For information on manaully setting another region, see "[Setting your default region for Codespaces](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)."

You can optimize recovery time by configuring a `devcontainer.json` in the project's repository, which allows you to define the tools, runtimes, frameworks, editor settings, extensions, and other configuration necessary to restore the development environment automatically. 詳しい情報については、「[プロジェクトの Codespaces を設定する](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。

## オプション 2: リカバリを待つ

この場合、ユーザ側でのアクションは必要ありません。 当社がサービスの可用性をリストアするために作業を行います。

You can check the current service status on the [Status Dashboard](https://www.githubstatus.com/).

## オプション 3: リポジトリをローカルでクローンする、またはブラウザで編集する

{% data variables.product.prodname_codespaces %} では事前構成された開発者環境を利用できるメリットがありますが、ソースコードは常に {% data variables.product.prodname_dotcom_the_website %} でホストされているリポジトリからアクセス可能である必要があります。 {% data variables.product.prodname_codespaces %} が停止した場合でも、リポジトリをローカルでクローンしたり、{% data variables.product.company_short %} ブラウザエディタでファイルを編集したりすることができます。 For more information, see "[Editing files](/repositories/working-with-files/managing-files/editing-files)."

このオプションでは開発環境を設定しませんが、サービスの中断が解決するのを待つ間、必要に応じてソースコードを変更できます。

## オプション 4: ローカルのコンテナ化された環境にリモートコンテナとDockerを使用する

リポジトリに `devcontainer.json` がある場合は、Visual Studio Code の [Remote-Containers 機能拡張](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume)を使用して、リポジトリのローカル開発コンテナをビルドしてアタッチすることを検討してください。 このオプションのセットアップ時間は、ローカル仕様と開発コンテナセットアップの複雑さによって異なります。

{% note %}

**注釈:** このオプションを試す前に、ローカル設定が[最小要件](https://code.visualstudio.com/docs/remote/containers#_system-requirements)を満たしていることを確認してください。

{% endnote %}
