---
title: コンテナーの完全なリビルドの実行
intro: ディスク領域が不足している場合、または開発コンテナーの構成が新しい codespace で機能することを確認する場合は、コンテナーの完全なリビルドを実行できます。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180853'
---
## コンテナーのリビルドについて

codespace で作業する場合、開発環境は仮想マシン上で実行される Docker コンテナーです。 codespace 内から開発コンテナー構成に変更を加え、それらの変更を現在の codespace に適用する場合は、コンテナーをリビルドする必要があります。

既定では、コンテナーをリビルドすると、{% data variables.product.prodname_github_codespaces %} によって、コンテナーの以前のビルドからキャッシュされたイメージを再利用することでビルド プロセスが高速化されます。 これは通常、次の理由により、開発コンテナー構成に対する変更を実装する最も簡単な方法です。
- {% data variables.product.prodname_github_codespaces %} では、コンテナー レジストリから再度プルするのではなく、キャッシュ内のイメージを再利用できます。
- 開発コンテナーの機能や Dockerfile 命令など、コンテナーの構築方法を定義する開発コンテナー構成の一部が、キャッシュ内のイメージ レイヤーに既に実装されている可能性があるため、これらのプロセスが再度実行されるのを待つ必要はありません。 (ただし、`onCreateCommand` など、コンテナーの構築後に実行される構成内のコマンドは、再度実行されます。)

場合によっては、コンテナーの完全なリビルドを実行することが必要になる場合があります。 完全なリビルドにより、{% data variables.product.prodname_github_codespaces %} はキャッシュからすべての Docker コンテナー、イメージ、ボリュームをクリーンアップし、新しくプルされたイメージを使用してコンテナーを再構築します。 構成で定義されているすべてのセットアップが再度実行され、新しいイメージ レイヤーが生成されます。 次のような状況で、キャッシュされたイメージを使用してコンテナーを何度もリビルドした後、完全なリビルドを実行できます。

- 構成で定義されているセットアップがキャッシュされたイメージに依存しないようにし、構成に基づいて新しい codespace が作成されるときに必要に応じて実行されるようにしたい。 たとえば、依存関係が最後に codespace にプルされてから、基本イメージから削除されている可能性があります。
- たとえば、ディスク領域が不足している場合や、ストレージ料金を最小限に抑える場合など、キャッシュで使用されるディスク領域を解放したい。 基本イメージを複数回変更した場合、構成に対して多数の反復的な変更を行った場合、または Docker Compose を使って複数のコンテナーを実行している場合は、イメージ キャッシュで大量のディスク領域が使用されている可能性があります。

## 完全なリビルドの実行

{% data variables.product.prodname_vscode %} で完全なリビルドを実行できます。

{% data reusables.codespaces.command-pallette %}
1. 「Rebuild」と入力し、 **[Codespaces: Full Rebuild Container]\(Codespaces: コンテナーの完全なリビルド\)** を選択します。

   ![コマンド パレットのコンテナーの完全リビルド コマンドのスクリーンショット](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## 完全なリビルドでのデータの保持

codespace の `/workspaces` ディレクトリに含まれるすべてのファイルとフォルダーは、常に再構築時に保持されます。 完全なリビルドでこのディレクトリの内容を保持するために、設定を変更したり、構成を追加したりする必要はありません。

完全なリビルドで `/workspaces` ディレクトリの外部にファイルを保持したい場合は、コンテナー内の目的の場所に、持続させるディレクトリへのシンボリック リンクを作成できます。 たとえば、`/workspaces/.devcontainer` ディレクトリ内に、再構築先でも持続される `config` ディレクトリを作成できます。 その後、`config` ディレクトリとその内容を `devcontainer.json` ファイルの `postCreateCommand` としてシンボリック リンクすることができます。

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

以下の例の `postCreate.sh` ファイルでは、`config` ディレクトリの内容がホーム ディレクトリにシンボリック リンクされています。

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## 参考資料
- 「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」
