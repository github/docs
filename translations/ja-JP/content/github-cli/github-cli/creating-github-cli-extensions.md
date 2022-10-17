---
title: GitHub CLI 拡張機能の作成
intro: '{% data variables.product.prodname_cli %} のカスタム拡張機能を作成して、新しい {% data variables.product.prodname_cli %} コマンドを他のユーザーと共有する方法について学びます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: e0f2979beca9a430f5afabf3a4f58fa5ea48ad30
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068548'
---
## {% data variables.product.prodname_cli %} 拡張機能について

{% data reusables.cli.cli-extensions %} {% data variables.product.prodname_cli %} 拡張機能の使用方法の詳細については、「[{% data variables.product.prodname_cli %} 拡張機能の使用](/github-cli/github-cli/using-github-cli-extensions)」を参照してください。

作成する拡張機能ごとにリポジトリが必要です。 リポジトリ名は `gh-` で始まる必要があります。 リポジトリ名の残りの部分は拡張機能の名前です。 リポジトリのルートには、リポジトリと同じ名前の実行可能ファイル、またはリリースにアタッチされたプリコンパイル済みバイナリ実行可能ファイルのセットが必要です。

{% note %}

**注**: 実行可能スクリプトに依存する場合は、bash スクリプトを使用することをお勧めします。bash は広く利用できるインタープリターであるためです。 bash 以外のスクリプトを使用できますが、拡張機能を使用するには、ユーザーに必要なインタープリターがインストールされている必要があります。 インタープリターがインストールされているユーザーに依存しない場合は、プリコンパイル済み拡張機能を検討してください。

{% endnote %}

## `gh extension create` で解釈される拡張機能を作成する

{% note %}

**注**: 引数なしで `gh extension create` を実行すると、対話型ウィザードが開始されます。

{% endnote %}

`gh extension create` コマンドを使用して、いくつかのスタート コードを含む bash スクリプトを含む拡張機能のプロジェクトを作成できます。

1. `gh extension create` サブコマンドを使用して、新しい拡張機能を設定します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. 表示された指示に従って、拡張機能を最終処理し、必要に応じて公開します。

## `gh extension create` を使用して Go でプリコンパイル済み拡張機能を作成する

`--precompiled=go` 引数を使用すると、Go スキャフォールディング、ワークフロー スキャフォールディング、スタート コードなど、拡張機能の Go ベースのプロジェクトを作成できます。

1. `gh extension create` サブコマンドを使用して、新しい拡張機能を設定します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えて、`--precompiled=go` を指定します。

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. 表示された指示に従って、拡張機能を最終処理し、必要に応じて公開します。

## `gh extension create` を使用して Go 以外のプリコンパイル済み拡張機能を作成する

`--precompiled=other` 引数を使用すると、ワークフロー スキャフォールディングなど、Go 以外のプリコンパイル済み拡張機能のプロジェクトを作成できます。

1. `gh extension create` サブコマンドを使用して、新しい拡張機能を設定します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えて、`--precompiled=other` を指定します。

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. 選択したコンパイル済み言語に拡張機能の初期コードをいくつか追加します。

1. 拡張機能を自動的にビルドできるように、`script/build.sh` に拡張機能をビルドするコードを入力します。

1. 表示された指示に従って、拡張機能を最終処理し、必要に応じて公開します。

## 解釈される拡張機能を手動で作成する

1. `gh-EXTENSION-NAME` というローカル ディレクトリを作成し、拡張機能用に使用します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。 たとえば、`gh-whoami` のようにします。

1. 作成したディレクトリに、ディレクトリと同じ名前の実行可能ファイルを追加します。

  {% note %}

  **注:** ファイルが実行可能であることを確認します。 UNIX では、コマンド ラインで `chmod +x file_name` を実行して、`file_name` を実行可能にできます。 Windows では、`git init -b main`、`git add file_name`、そして `git update-index --chmod=+x file_name` を実行できます。

  {% endnote %}

1. 実行可能ファイルにスクリプトを記述します。 たとえば次のような点です。

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. ディレクトリから、拡張機能をローカル拡張機能としてインストールします。

   ```shell
   gh extension install .
   ```

1. 拡張機能が機能することを確認します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。 たとえば、`whoami` のようにします。

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. ディレクトリから、拡張機能を公開するリポジトリを作成します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. 必要に応じて、他のユーザーが拡張機能を検出できるように、リポジトリ トピック `gh-extension` を追加します。 これにより、拡張機能が[`gh-extension`トピック ページ](https://github.com/topics/gh-extension)に表示されます。 リポジトリ トピックを追加する方法の詳細については、「[トピックを使用したリポジトリの分類](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)」を参照してください。

## 解釈された {% data variables.product.prodname_cli %} 拡張機能を記述するためのヒント

### 引数とフラグの処理

`gh my-extension-name` コマンドに続くすべてのコマンド ライン引数は、拡張機能スクリプトに渡されます。 bash スクリプトでは、引数を`$1`、`$2` などで参照することができます。引数を使用して、ユーザーによる入力を取得したり、スクリプトの動作を変更したりできます。

たとえば、このスクリプトは複数のフラグを処理します。 スクリプトが `-h` または `--help` フラグで呼び出されると、スクリプトは実行を続行する代わりにヘルプ テキストを出力します。 スクリプトが `--name` フラグで呼び出されると、スクリプトはフラグの次の値を `name_arg` に設定します。 スクリプトが `--verbose` フラグで呼び出されると、スクリプトは別のあいさつ文を出力します。

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### 非対話型モードでのコア コマンドの呼び出し

一部の {% data variables.product.prodname_cli %} コア コマンドは、ユーザーに入力を求めます。 これらのコマンドを使用してスクリプトを作成する場合、プロンプトが望ましくないことがよくあります。 プロンプトが表示されないようにするには、引数を使用して必要な情報を明示的に指定します。

たとえば、プログラムで問題を作成するには、タイトルと本文を指定します。

```shell
gh issue create --title "My Title" --body "Issue description"
```

### プログラムによるデータのフェッチ

多くのコア コマンドでは、プログラムでデータをフェッチするための `--json` フラグがサポートされています。 たとえば、pull request の数、タイトル、マージ可能性の状態を一覧表示する JSON オブジェクトを返すには、次のようにします。

```shell
gh pr list --json number,title,mergeStateStatus
```

GitHub から特定のデータをフェッチするコア コマンドがない場合は、[`gh api`](https://cli.github.com/manual/gh_api) コマンドを使用して GitHub API にアクセスできます。 たとえば、現在のユーザーに関する情報をフェッチするには、次のようにします。

```shell
gh api user
```

JSON データを出力するすべてのコマンドには、そのデータをスクリプトですぐに使用できるものにフィルター処理するオプションもあります。 たとえば、現在のユーザーの名前を取得するには、次のようにします。

```shell
gh api user --jq '.name'
```

詳細については、「[`gh help formatting`](https://cli.github.com/manual/gh_help_formatting)」を参照してください。

## プリコンパイル済み拡張機能を手動で作成する

1. `gh-EXTENSION-NAME` というローカル ディレクトリを作成し、拡張機能用に使用します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。 たとえば、`gh-whoami` のようにします。

1. 作成したディレクトリにソース コードを追加します。 たとえば次のような点です。

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. ディレクトリから、拡張機能をローカル拡張機能としてインストールします。

    ```shell
    gh extension install .
    ```

1. コードをビルドします。 たとえば、Go を使用して、`YOUR-USERNAME` を GitHub ユーザー名に置き換えます。

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. 拡張機能が機能することを確認します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。 たとえば、`whoami` のようにします。

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. ディレクトリから、拡張機能を公開するリポジトリを作成します。 `EXTENSION-NAME` は、お使いの拡張機能の名前に置き換えます。

  {% note %}

  **注:** コンパイル ステップによって生成されたバイナリをバージョン コントロールにコミットしないように注意してください。

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. プリコンパイル済み拡張機能を他のユーザーと共有するリリースを作成します。 サポートするプラットフォームごとにコンパイルし、各バイナリを資産としてリリースにアタッチします。 リリースにアタッチされるバイナリ実行可能ファイルは、名前付け規則に従い、<em>OS-ARCHITECTURE\[EXTENSION\]</em> のサフィックスを持つ必要があります。

  たとえば、Windows 64 ビット用にコンパイルされた `whoami` という拡張機能の名前は `gh-whoami-windows-amd64.exe` になり、Linux 32 ビット用にコンパイルされた同じ拡張機能の名前は `gh-whoami-linux-386` になります。 `gh` で認識される OS とアーキテクチャの組み合わせの完全なリストについては、[このソース コード](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696)を参照してください。

  {% note %}

  **注:** Windows で拡張機能を正常に実行するには、その資産ファイルの拡張子が `.exe` である必要があります。 他のオペレーティング システムでは拡張子は必要ありません。

  {% endnote %}

  リリースはコマンド ラインから作成できます。 次に例を示します。

  ```shell
  git tag v1.0.0
  git push origin v1.0.0
  GOOS=windows GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-windows-amd64.exe
  GOOS=linux GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-linux-amd64
  GOOS=darwin GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-darwin-amd64
  gh release create v1.0.0 ./*amd64*

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."


## Tips for writing precompiled {% data variables.product.prodname_cli %} extensions

### Automating releases

Consider adding the [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) action to a workflow in your project. This action will automatically produce cross-compiled Go binaries for your extension and supplies build scaffolding for non-Go precompiled extensions.

### Using {% data variables.product.prodname_cli %} features from Go-based extensions

Consider using [go-gh](https://github.com/cli/go-gh), a Go library that exposes pieces of `gh` functionality for use in extensions.

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).
