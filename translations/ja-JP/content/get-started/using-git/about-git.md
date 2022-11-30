---
title: Git について
intro: 'バージョン管理システム、Git、{% data variables.product.product_name %} での動作のしくみについて学びます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Git
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 595fc79c5a656a3d6da8b5589ed384b545a418ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145115982'
---
## バージョン管理と Git について

バージョン管理システム (VCS) は、人々とチームが一緒にプロジェクトで共同作業を行う際の変更履歴を追跡します。 開発者がプロジェクトに変更を加えると、そのプロジェクトの以前のバージョンはいつでも復元できます。

開発者は、プロジェクトの履歴を確認することで、次のことを知ることができます。

- どのような変更が行われたのか?
- 誰が変更したのか?
- いつ変更されたのか?
- なぜ変更が必要だったのか?

VCS により、各共同作成者にプロジェクトの統一された一貫性のあるビューが用意され、既に進行中の作業が表示されます。 誰が変更したか、どのようにプロジェクトの開発に協力したかという透明性のある変更履歴を見ることで、チーム メンバーは独立して作業しながら、足並みを揃えることができます。

分散バージョン管理システムでは、すべての開発者がプロジェクトとプロジェクト履歴の完全なコピーを持ちます。 かつて一般的だった集中型バージョン管理システムとは異なり、DVCS は中央リポジトリへの常時接続を必要としません。 Git は、最も一般的な分散型バージョン管理システムです。 Git は、オープンソースと商用ソフトウェア開発の両方で一般に使われており、個人、チーム、企業にとって大きな利点があります。

- Git を使うと、開発者は自分の変更、決定、あらゆるプロジェクトの進行のタイムライン全体を 1 か所で見ることができます。 開発者はプロジェクトの履歴にアクセスした時点から、必要なすべてのコンテキストが揃い、理解して共同作業を始めることができます。

- 開発者はあらゆるタイム ゾーンで作業します。 Git のような DVCS を使うと、ソース コードの整合性を維持しながら、いつでもコラボレーションを行うことができます。 ブランチを使うと、開発者は運用コードに対する変更を安全に提案することができます。

- Git を使っている企業は、チーム間のコミュニケーションの壁を取り払い、最高の仕事をすることに集中させることができます。 さらに、Git を使うことで、ビジネス全体でエキスパートを集めて、大きなプロジェクトで共同作業をすることが可能になります。

## リポジトリについて

リポジトリ (Git プロジェクト) には、プロジェクトに関連付けられたファイルやフォルダーのコレクション全体と、各ファイルのリビジョン履歴が含まれます。 ファイルの履歴は、コミットと呼ばれる時間的なスナップショットとして表示されます。 コミットは、ブランチという複数の開発ラインで構成されています。 Git は DVCS であるため、リポジトリは自己完結した単位であり、リポジトリのコピーを持っている人は誰でもコードベースとその履歴全体にアクセスできます。 Git リポジトリでは、コマンドラインや他の使いやすいインターフェイスを使うことで、履歴とのやりとり、リポジトリのクローン、ブランチの作成、コミット、マージ、コードのバージョン間での変更点の比較なども可能です。

{% data variables.product.product_name %} のようなプラットフォームを通じて、Git によりプロジェクトの透明性とコラボレーションのためのより多くの機会も得られます。 パブリック リポジトリは、チームが連携して可能な限り最高の最終製品を構築するのに役立ちます。

## {% data variables.product.product_name %} のしくみ

{% data variables.product.product_name %} は Git リポジトリをホストし、コマンド ライン機能、issue (スレッド形式の議論)、pull request、コード レビュー、または {% data variables.product.prodname_marketplace %} にある無料および有料アプリのコレクションを使って、よりよいコードを出荷するツールを開発者たちに提供します。 {% data variables.product.product_name %} フローのようなコラボレーション レイヤー、1,500 万人の開発者コミュニティ、何百もの統合を持つエコシステムにより、{% data variables.product.product_name %} でソフトウェア構築の方法が変わります。

{% data variables.product.product_name %} は、開発プロセスに直接コラボレーションを組み込みます。 作業はリポジトリにまとめられ、開発者は要件や方向性の概要を示し、チーム メンバーに期待することを設定できます。 その後、{% data variables.product.product_name %} フローを使って、開発者は更新作業を行うブランチを作成し、変更をコミットして保存し、変更を提案および議論する pull request を開き、全員が同じ見解になったら pull request をマージするだけです。 詳細については、「[GitHub のフロー](/get-started/quickstart/github-flow)」を参照してください。

## {% data variables.product.product_name %} とコマンド ライン

### Git の基本的なコマンド

Git の利用では、開発者は特定のコマンドを使って、コードのコピー、作成、変更、結合を行います。 これらのコマンドは、コマンド ラインから直接実行することも、{% data variables.product.prodname_desktop %} のようなアプリケーションを使うこともできます。 以下は、Git を使うための一般的なコマンドです。

- `git init` は、まったく新しい Git リポジトリを初期化し、既存のディレクトリの追跡を開始します。 既存のディレクトリの中に、バージョン管理に必要な内部データ構造を格納する非表示のサブフォルダーを追加します。

- `git clone` は、既にリモートで存在するプロジェクトのローカル コピーを作成します。 このクローンには、プロジェクトのすべてのファイル、履歴、ブランチが含まれます。

- `git add` は変更をステージします。 Git は開発者のコードベースへの変更を追跡しますが、プロジェクトの履歴に含めるためには、変更をステージしてスナップショットを作成する必要があります。 このコマンドは、その 2 段階のプロセスの最初の部分であるステージングを実行します。 ステージされた変更は、次のスナップショットの一部となり、プロジェクトの履歴の一部となります。 ステージングとコミットを別々に行うことで、開発者はコーディングや作業の方法を変えることなく、プロジェクトの履歴を完全に管理することができます。

- `git commit` はスナップショットをプロジェクトの履歴に保存し、変更追跡プロセスを完了させます。 簡単に言えば、コミットは写真を撮るような機能です。 `git add` でステージされたものは、`git commit` でスナップショットの一部となります。

- `git status` は、未追跡、変更、ステージされた変更の状態を表示します。

- `git branch` は、ローカルで作業しているブランチを表示します。

- `git merge` は、開発ラインを合わせてマージします。 通常、このコマンドは 2 つの異なるブランチで行われた変更を結合するために使われます。 たとえば、開発者が機能ブランチの変更をメイン ブランチにまとめてデプロイしたい場合、マージすることになります。

- `git pull` は、ローカルの開発ラインをリモートの対応するブランチからの更新により更新します。 開発者がこのコマンドを使うのは、チーム メイトがリモートのブランチにコミットし、その変更を自分のローカル環境に反映させたい場合です。

- `git push` は、ローカルで行われたブランチへのコミットでリモート リポジトリを更新します。

詳細については、[Git コマンドの完全なリファレンス ガイド](https://git-scm.com/docs)を参照してください。

### 例: 既存のリポジトリに寄与する

```bash
# download a repository on {% data variables.product.product_name %} to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### 例: 新しいリポジトリを開始し、{% data variables.product.product_name %} に公開する

まず、{% data variables.product.product_name %} に新しいリポジトリを作成する必要があります。 詳細については、「[Hello World](/get-started/quickstart/hello-world)」を参照してください。 README、.gitignore、またはライセンス ファイル付きでリポジトリを初期化 **しないでください**。 この空のリポジトリで、コードを管理します。

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```

### 例: {% data variables.product.product_name %} の既存のブランチに寄与する

この例では、マシン上に `repo` というプロジェクトが既にあり、ローカルで最後に変更が加えられてから新しいブランチが {% data variables.product.product_name %} にプッシュされたと仮定しています。

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## 共同開発のモデル

{% data variables.product.product_name %} で共同作業を行うには、主に 2 つの方法があります。

1. 共有リポジトリ
2. フォークとプル

共有リポジトリでは、個人とチームは、読み取り、書き込み、または管理者アクセス権を持つ共同作成者として明示的に指定されます。 この単純なアクセス許可構造と保護されたブランチなどの機能が組み合わされ、チームへの {% data variables.product.product_name %} の採用を促進するのに役立ちます。

オープンソース プロジェクトや、誰でも寄与できるプロジェクトでは、個々のアクセス許可の管理は困難です。ただし、フォークとプル モデルでは、プロジェクトを見ることができるユーザーは誰でも寄与することができます。 フォークとは、開発者の個人アカウントで行ったプロジェクトのコピーのことです。 すべての開発者は自分のフォークを完全にコントロールすることができ、修正や新しい機能を自由に実装できます。 フォークで完了した作業は、個別に保持されるか、pull request を介して元のプロジェクトに戻されて提示されます。 そこで、メンテナンス管理者はマージされる前に、提案された変更を確認できます。 詳細については、「[プロジェクトに貢献する](/get-started/quickstart/contributing-to-projects)」を参照してください。

## 参考資料

{% data variables.product.product_name %} チームは、ユーザーがスキルを伸ばし続け、より良いソフトウェアを構築できるよう、教育用ビデオとガイドのライブラリを作成しました。

- [探索のための初心者向けプロジェクト](https://github.com/showcases/great-for-new-contributors)
- [{% data variables.product.product_name %} ビデオ ガイド](https://youtube.com/githubguides)

Git のプラクティスの詳細については、次のビデオで Git コマンドのいくつかを最大限に活用する方法が示されています。

- [ローカルでの作業](https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git status`](https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3)
- [2 段階コミット](https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [[](https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4) および `git push`](https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
