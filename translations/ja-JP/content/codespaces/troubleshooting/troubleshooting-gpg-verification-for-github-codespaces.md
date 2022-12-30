---
title: GitHub Codespaces の GPG 検証のトラブルシューティング
shortTitle: GPG verification
intro: この記事では、codespace でのコミットの署名に関連するエラーのトラブルシューティングに関するアドバイスを提供します。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167118'
---
GPG 検証を有効にすると、{% data variables.product.prodname_github_codespaces %} は、選んだリポジトリから作成した codespace でコミットに自動的に署名します。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の GPG 検証を管理する](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)」を参照してください。

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% data variables.product.prodname_github_codespaces %} でコミットに署名できない場合は、次のようなエラーが表示されることがあります。

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

このエラーは次の場合に発生することがあります。 

- GPG 検証を無効にし、既存の codespace で通常の署名なしのコミットを行おうとしている。
- GPG 検証を有効にしたが、{% data variables.product.prodname_github_codespaces %} がコミットに署名するために必要な Git 構成を、{% data variables.product.prodname_github_codespaces %} を Git 構成ファイルを含むドットファイル リポジトリにリンクするなどしてオーバーライドしている。

## GPG 検証を無効にした後のエラー

GPG 検証を有効にすると、{% data variables.product.prodname_github_codespaces %} は、codespace で行ったすべてのコミットに既定で署名します。 これは、`commit.gpgsign` Git 構成値を `true` に設定することによって行われます。

GPG 検証を無効にしていて、既存の codespace で作業している場合、この値は引き続き `true` に設定されます。 つまり、{% data variables.product.prodname_github_codespaces %} はコミットに署名しようとしますが、GPG 検証設定を無効にしているため、それができません。

codespace で通常の署名なしのコミットを続ける場合は、ターミナルで次のコマンドを入力して、`commit.gpgsign` を `false` の既定値にリセットします。

```Shell{:copy}
git config --unset commit.gpgsign
```

値が構成から正しく削除されたことを確認するには、「`git config --list`」と入力します。 `commit.gpgsign` の値は一覧に表示されないはずです。

## 構成の競合によって発生するエラー

コミットに自動的に署名するために、{% data variables.product.prodname_github_codespaces %} は codespace に特定の Git 構成値を設定します。 {% data variables.product.prodname_github_codespaces %} によって設定された値をオーバーライドすると、コミットに署名できない可能性があります。 

{% data variables.product.prodname_github_codespaces %} を Git 構成ファイルを含むドットファイル リポジトリにリンクしている場合、これらの値を誤ってオーバーライドしている可能性があります。 {% data variables.product.prodname_github_codespaces %} でドットファイルを使用する方法について詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} のカスタマイズ](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)」を参照してください。

### 構成の競合の確認

GPG でコミットに署名するために、{% data variables.product.prodname_github_codespaces %} はシステム レベルで次の Git 構成値を自動的に設定します。

| 構成設定 | 必須値 |
| --------------------- | -------------- |
| `user.name` | {% data variables.product.prodname_dotcom %} プロファイルに設定されているフル ネームと一致する必要があります |
| `credential.helper` | `/.codespaces/bin/gitcredential_github.sh` に設定されている必要があります。 |
| `gpg.program` | `/.codespaces/bin/gh-gpgsign` に設定されている必要があります。 |

これらの値が codespace で正しく設定されていることを確認するには、`git config --list --show-origin` コマンドを使用します。 {% data variables.product.prodname_github_codespaces %} はシステム レベルでこの構成を設定するため、必要な構成設定は `/usr/local/etc/gitconfig` から行う必要があります。

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

上記の値に加えて、codespace で使用されているドットファイルに次のいずれかの値が含まれていると、エラーが発生する可能性があります。

- `user.signingkey` の Git 構成値
- `commit.gpgsign` の Git 構成値
- 手動で設定された `GITHUB_TOKEN`

### 構成の競合の削除

{% data variables.product.prodname_github_codespaces %} の自動 GPG 検証を有効にしたままにするには、codespace で使用されているドットファイルから競合する構成を削除する必要があります。

たとえば、ローカル コンピューター上のグローバル `.gitconfig` ファイルに `gpg.program` の値が含まれており、このファイルを {% data variables.product.prodname_github_codespaces %} にリンクされているドットファイル リポジトリにプッシュした場合、代わりにこのファイルから `gpg.program` を削除し、ローカル コンピューターのシステム レベルで設定することができます。

{% note %}

**メモ:** ドットファイル リポジトリに対する変更は、作成した新しい codespace には適用されますが、既存の codespace には適用されません。

{% endnote %}

1. ローカル コンピューターでターミナルを開きます。
2. 競合する値を `~/.gitconfig` (Mac/Linux) または `C:\Users\YOUR-USER\.gitconfig` (Windows) から削除するには、`git config --global --unset` コマンドを使用します。

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. 変更を {% data variables.product.prodname_dotcom %} のドットファイル リポジトリにプッシュします。
4. 必要に応じて、ローカル構成を保持するには、ドットファイル リポジトリにプッシュしない Git 構成ファイルで値をもう一度設定します。 

   たとえば、`--system` フラグを使用して、`PATH/etc/gitconfig` のシステム レベル ファイルで構成を設定でます。ここで、`PATH` は Git がシステムにインストールされているディレクトリです。
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

または、ドットファイル リポジトリに `install.sh` などの認識されたファイルのインストール スクリプトが含まれている場合は、`$CODESPACES` 環境変数を使用して、codespace にいない場合にのみ `gpg.program` を設定するなどの条件付きロジックを追加できます。 次の例では、codespace にいない場合、`-z "$CODESPACES"` が `true` を返します。

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## 参考資料
- 「[コミット署名の検証について](/authentication/managing-commit-signature-verification/about-commit-signature-verification)」
- Git の公式ドキュメントの [`git config`](https://git-scm.com/docs/git-config)
