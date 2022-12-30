---
title: Codespaces のシステム災害復旧
intro: この記事では、大規模な自然災害や広範囲にわたるサービスの中断により、地域全体で障害が発生した場合のシステム災害復旧シナリオのガイダンスについて説明します。
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
shortTitle: Disaster recovery
ms.openlocfilehash: d33c9e5f1af8775ae5f8f097ba3911edd348dd1a
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149349"
---
当社は、ユーザが {% data variables.product.prodname_codespaces %} をいつでも確実にご利用いただけるよう努力しています。 しかし、当社の管理できる範囲を超えてサービスに影響を及ぼし、計画外のサービスの中断を引き起こす不可抗力が発生する可能性があります。

システム災害復旧シナリオはまれにしか発生しませんが、リージョン全体にわたる停止が発生する可能性に備えておくことをお勧めします。 リージョン全体でサービスが中断した場合、ローカルで冗長化されたデータのコピーは一時的に利用できなくなります。

次のガイダンスでは、codespace がデプロイされているリージョン全体へのサービスの中断を処理する方法を説明します。

{% note %}

**注:** リモート リポジトリに頻繁にプッシュすることで、サービス全体の停止による潜在的な影響を減らすことができます。

{% endnote %}

## <a name="option-1-create-a-new-codespace-in-another-region"></a>オプション 1: 別のリージョンに新しい codespace を作る

リージョンが停止した場合、影響を受けていないリージョンで codespace を再び作り、作業を続けることをお勧めします。 この新しい codespace には、{% data variables.product.prodname_dotcom %} への最後のプッシュ時点までのすべての変更が含まれます。 別のリージョンを手動で設定する方法については、「[Codespaces 用の既定のリージョンを設定する](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)」を参照してください。

プロジェクトのリポジトリで、開発環境を自動的に復元するために必要なツール、ランタイム、フレームワーク、エディター設定、機能拡張、その他の設定を定義できる `devcontainer.json` を設定することで、リカバリ時間を最適化できます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)に関するページをご覧ください。

## <a name="option-2-wait-for-recovery"></a>オプション 2: 復旧を待つ

この場合、ユーザーによる操作は必要ありません。 サービスを利用できるようにするために鋭意取り組んでいることをご理解ください。 

現在のサービスの状態は、[ステータス ダッシュボード](https://www.githubstatus.com/)で確認できます。

## <a name="option-3-clone-the-repository-locally-or-edit-in-the-browser"></a>オプション 3: リポジトリをローカルでクローンする、またはブラウザーで編集する

{% data variables.product.prodname_codespaces %} では事前構成された開発者環境を利用できるメリットがありますが、ソースコードは常に {% data variables.product.prodname_dotcom_the_website %} でホストされているリポジトリからアクセス可能である必要があります。 {% data variables.product.prodname_codespaces %} が停止した場合でも、リポジトリをローカルでクローンしたり、{% data variables.product.company_short %} ブラウザエディタでファイルを編集したりすることができます。 詳細については、「[ファイルの編集](/repositories/working-with-files/managing-files/editing-files)」を参照してください。

このオプションでは開発環境を設定しませんが、サービスの中断が解決するのを待つ間、必要に応じてソースコードを変更できます。

## <a name="option-4-use-remote-containers-and-docker-for-a-local-containerized-environment"></a>オプション 4: ローカルのコンテナ化された環境にリモート コンテナーと Docker を使う

リポジトリに `devcontainer.json` がある場合、{% data variables.product.prodname_vscode %} で [リモート コンテナーの拡張機能](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume)を使って、ビルドしてリポジトリ用のローカル開発コンテナーにアタッチすることを検討してください。 このオプションのセットアップ時間は、ローカル仕様と開発コンテナセットアップの複雑さによって異なります。

{% note %}

**注:** このオプションを試す前に、ローカルのセットアップが [最小要件](https://code.visualstudio.com/docs/remote/containers#_system-requirements)を満たしていることを確認してください。

{% endnote %}
