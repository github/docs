---
title: GitHub CLI で GitHub Codespaces を使用する
shortTitle: GitHub CLI
intro: '{% data variables.product.product_name %} コマンド ライン インターフェイスの `gh` を使うと、コマンド ラインから直接 {% data variables.product.prodname_github_codespaces %} を操作できます。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163498'
---
## {% data variables.product.prodname_cli %} について 

{% data reusables.cli.about-cli %} 詳細については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

{% data variables.product.prodname_cli %} 内の {% data variables.product.prodname_github_codespaces %} を操作すると、次のことができます。
  - [すべての codespaces を一覧表示する](#list-all-of-your-codespaces)
  - [新しい codespace を作成する](#create-a-new-codespace)
  - [codespace を停止する](#stop-a-codespace)
  - [codespace を削除する](#delete-a-codespace)
  - [codespace の名前を変更する](#rename-a-codespace)
  - [codespace に SSH 接続する](#ssh-into-a-codespace)
  - [{% data variables.product.prodname_vscode %} で codespace を開く](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [JupyterLab で codespace を開く](#open-a-codespace-in-jupyterlab)
  - [codespace 間でのファイルのコピー](#copy-a-file-tofrom-a-codespace)
  - [codespace 内のポートの変更](#modify-ports-in-a-codespace)
  - [codespace ログにアクセスする](#access-codespace-logs)
  - [リモート リソースにアクセスする](#access-remote-resources)
  - [codespace のマシンの種類を変更する](#change-the-machine-type-of-a-codespace)

## {% data variables.product.prodname_cli %} のインストール

{% data reusables.cli.cli-installation %}
 
## {% data variables.product.prodname_cli %} の使用

まだの場合は、{% data variables.product.prodname_dotcom %} アカウントで `gh auth login` を実行して認証を行います。 

`gh` を {% data variables.product.prodname_github_codespaces %} の操作に使用するには、`gh codespace SUBCOMMAND` またはそのエイリアス `gh cs SUBCOMMAND` を入力します。

{% data variables.product.prodname_github_codespaces %} を操作するために使用できる一連のコマンドの例として、次の操作を行うことができます。 

* 現在の codespaces を一覧表示して、特定のリポジトリの codespace があるかどうかを確認します。<br>
  `gh codespace list`
* 必要なリポジトリ ブランチの新しい codespace を作成します。<br>
  `gh codespace create -r github/docs -b main`
* 新しい codespace に SSH 接続します。<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* ローカル コンピューターにポートを転送します。<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## {% data variables.product.prodname_github_codespaces %} 用の `gh` コマンド

以下のセクションでは、使用可能な各操作のコマンドの例を示します。

各コマンドで使用可能なすべてのオプションの詳細を含む {% data variables.product.prodname_github_codespaces %} の `gh` コマンドの完全なリファレンスについては、「[gh codespace](https://cli.github.com/manual/gh_codespace)」の {% data variables.product.prodname_cli %} オンライン ヘルプを参照してください。 または、コマンド ラインで `gh codespace --help` (一般的なヘルプ) または `gh codespace SUBCOMMAND --help` (特定のサブコマンドのヘルプ) を使用できます。

{% note %}

**注**: 多数のコマンドで使用される `-c CODESPACE_NAME` フラグは省略可能です。 省略すると、選択できる codespaces の一覧が表示されます。

{% endnote %}

### すべての codespaces を一覧表示する

```shell
gh codespace list
```

リストには、他の `gh codespace` コマンドで使用できる各 codespace の一意の名前が含まれています。

codespace のブランチ名の末尾にあるアスタリスクは、その codespace にコミットされていない、またはプッシュされていない変更があることを示します。

### 新しい codespace を作成する

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」を参照してください。

### codespace を停止する

```shell
gh codespace stop -c CODESPACE-NAME
```

詳しくは、「[{% data variables.product.prodname_github_codespaces %} の詳細](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)」をご覧ください。

### codespace を削除する

```shell
gh codespace delete -c CODESPACE-NAME
```

詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace)」を参照してください。

### codespace の名前を変更する

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

詳細については、「[codespace の名前を変更する](/codespaces/customizing-your-codespace/renaming-a-codespace)」を参照してください。

### codespace に SSH 接続する

リモート codespace コンピューターでコマンドを実行するには、ターミナルから codespace に SSH 接続できます。

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**注**: {% data reusables.codespaces.ssh-server-installed %}

<br>`devcontainer.json` ファイルと既定のコンテナー イメージについては詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」を参照してください。

{% endnote %}

{% data variables.product.prodname_github_codespaces %} では、シームレスな認証エクスペリエンスを実現するために、作成時に GitHub SSH キーを codespace にコピーします。 SSH キーのパスフレーズの入力を求められる場合があります。その後、リモート codespace コンピューターからコマンド プロンプトが表示されます。

SSH キーがない場合は、「[新しい SSH キーを生成して ssh-agent に追加する](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」の手順に従います。

### {% data variables.product.prodname_vscode %} で codespace を開く

```shell
gh codespace code -c CODESPACE-NAME
```

ローカル コンピューターに {% data variables.product.prodname_vscode_shortname %} がインストールされている必要があります。 詳細については、「[{% data variables.product.prodname_vscode %} での {% data variables.product.prodname_github_codespaces %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)」を参照してください。

### JupyterLab で codespace を開く

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### codespace 間でのファイルのコピー

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

ファイル名またはディレクトリ名のプレフィックス `remote:` を使用して、codespace 上にあることを示します。 UNIX `cp` コマンドと同様に、最初の引数はコピー元を指定し、最後の引数はコピー先を指定します。 コピー先がディレクトリの場合は、複数のコピー元を指定できます。 いずれかのコピー元がディレクトリの場合は、`-r` (再帰) フラグを使用します。

codespace 上のファイルとディレクトリの場所は、リモート ユーザーのホーム ディレクトリに対して相対的です。

#### 例

* ローカル コンピューターから codespace の `$HOME` ディレクトリにファイルをコピーします。

   `gh codespace cp myfile.txt remote:`

* codespace でリポジトリがチェックアウトされているディレクトリにファイルをコピーします。

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* codespace からローカル コンピューター上の現在のディレクトリにファイルをコピーします。

   `gh codespace cp remote:myfile.txt .`

* 次の 3 つのローカル ファイルを codespace の `$HOME/temp` ディレクトリにコピーします。

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* codespace からローカル コンピューター上の現在の作業ディレクトリに次の 3 つのファイルをコピーします。

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* 次のローカル ディレクトリを codespace の `$HOME` ディレクトリにコピーします。

   `gh codespace cp -r mydir remote:`

* codespace からローカル コンピューターにディレクトリをコピーし、ディレクトリ名を変更します。

   `gh codespace cp -r remote:mydir mydir-localcopy`

使用できる追加フラグなど、`gh codespace cp` コマンドの詳細については、[{% data variables.product.prodname_cli %} マニュアル](https://cli.github.com/manual/gh_codespace_cp)を参照してください。

### codespace 内のポートの変更

codespace 上のポートをローカル ポートに転送できます。 プロセスが実行されている限り、ポートは転送されたままです。 ポートの転送を停止するには、<kbd>Control</kbd>+<kbd>C</kbd> キーを押します。

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

転送されたポートの詳細を表示するには、`gh codespace ports` を入力して codespace を選択します。

転送されたポートの可視性を設定できます。 {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

1 つのコマンドを使用して、複数のポートの可視性を設定できます。 次に例を示します。

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

### codespace ログにアクセスする

codespace の作成ログを確認できます。 このコマンドを入力すると、SSH キーのパスフレーズを入力するように求められます。

```shell
gh codespace logs -c CODESPACE-NAME
```

作成ログについて詳しくは、「[{% data variables.product.prodname_github_codespaces %} ログ](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)」をご覧ください。

### リモート リソースにアクセスする 
{% data variables.product.prodname_cli %} 拡張機能を使用すると、codespace とご自分のローカル コンピューターの間にブリッジを作成し、コンピューターからアクセスできるあらゆるリモート リソースに codespace がアクセスできるようにすることができます。 拡張機能の使用方法について詳しくは、[{% data variables.product.prodname_cli %} を使用してリモート リソースにアクセスする](https://github.com/github/gh-net#codespaces-network-bridge)方法に関するページを参照してください。

{% note %}

**注:** {% data variables.product.prodname_cli %} 拡張機能は現在ベータ段階であり、変更されることがあります。 

{% endnote %}

### codespace のマシンの種類を変更する

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

詳しくは、「[codespace のマシンの種類を変更する](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」の [{% data variables.product.prodname_cli %}] タブを参照してください。
