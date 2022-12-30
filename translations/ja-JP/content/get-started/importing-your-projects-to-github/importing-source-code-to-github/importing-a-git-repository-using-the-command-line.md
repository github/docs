---
title: コマンドラインを使った Git リポジトリのインポート
intro: '{% ifversion fpt %}[GitHub Importer](/articles/importing-a-repository-with-github-importer) が目的に適していない (既存のコードがプライベート ネットワークにホストされている、など) 場合には、コマンドライン ラインをお使いください。{% else %}既存のコードがプライベート ネットワークにホストされている場合には、コマンド ラインを使った Git プロジェクトのインポートが適しています。{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: bd3a5e5ffca38250a74851444f6cac4cbb06eb53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131255'
---
始める前に、以下をご確認ください:

- お使いの {% data variables.product.product_name %}ユーザ名
- 外部リポジトリのクローン URL (`https://external-host.com/user/repo.git`、`git://external-host.com/user/repo.git` など) (おそらく、`external-host.com` ドメイン名の前に `user@` が付いています)

{% tip %}

デモでは、以下の情報を使用します:

- **extuser** という名前の外部アカウント
- `https://external-host.com` という名前の外部 Git ホスト
- **ghuser** という名前の {% data variables.product.product_name %} 個人アカウント
- **repo.git** という名前の {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のリポジトリ

{% endtip %}

1. [{% data variables.product.product_name %} に新しいリポジトリを作成します](/articles/creating-a-new-repository)。 この新しいリポジトリに、外部 Git リポジトリをインポートします。
2. コマンドラインで、外部クローン URL を使用して、リポジトリの "ベア" クローンを作成します。 これはデータの完全なコピーですが、ファイル編集のためのワーキングディレクトリはコピーされず、古いデータすべてのクリーンな新しいエクスポートが作成されます。
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. "mirror" オプションを使用して、ローカルにクローンされたリポジトリを {% data variables.product.product_name %} にプッシュします。インポートされたリポジトリには、ブランチやタグなどすべての参照がコピーされます。
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. 一時ローカル リポジトリを削除します。
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
