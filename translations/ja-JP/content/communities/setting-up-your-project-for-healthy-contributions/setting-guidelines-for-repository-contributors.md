---
title: リポジトリコントリビューターのためのガイドラインを定める
intro: プロジェクトに人々がどのようにコントリビュートするべきかを伝えるガイドラインを作成できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: b418c5a3d10f8b8f7572f33b17a9ebfbb3de27d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578789'
---
## コントリビューションガイドラインについて
プロジェクトの共同作成者が適切な作業を行えるように、コントリビューション ガイドラインを含むファイルをプロジェクト リポジトリのルート、`docs`、または `.github` フォルダーに追加できます。 プルリクエストをオープンした場合や Issue を作成した場合、そのファイルへのリンクが表示されます。 コントリビューション ガイドラインへのリンクは、ご自分のリポジトリの `contribute` ページにも表示されます。 `contribute` ページの例については、[github/docs/contribute](https://github.com/github/docs/contribute) を参照してください。 

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

リポジトリのオーナーにとって、コントリビューションガイドラインとは、人々がどのようにコントリビュートするべきかを伝える方法です。

コントリビューターにとって、このガイドラインは、上手に構築されたプルリクエストの提出をしたり、有益な Issue をオープンすることの確認に役立ちます。

オーナーおよびコントリビューターの双方にとって、コントリビューションガイドラインは、プルリクエストや Issue のリジェクトや再提出の手間を未然に軽減するための有効な手段です。

{% ifversion fpt or ghes or ghec %}

ご自分の組織 {% ifversion fpt or ghes or ghec %} または、個人アカウント {% endif %} 向けに既定のコントリビューション ガイドラインを作成できます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

{% tip %}

**ヒント:** リポジトリの保守担当者は、リポジトリの Issue や pull request のテンプレートを作成して、Issue についての特定のガイドラインを設定できます。 詳細については、「[Issue と pull request テンプレートについて](/articles/about-issue-and-pull-request-templates)」を参照してください。

{% endtip %}

## *CONTRIBUTING* ファイルを追加する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. リポジトリのルート `docs` または `.github` のディレクトリにコントリビューション ガイドラインを保存するかどうかを決定します。 そして、ファイル名のフィールドに、ファイルの名前および拡張子を入力します。 コントリビューションガイドラインのファイル名では大文字と小文字は区別されません。 サポートされているファイル拡張子の場合、ファイルはリッチテキスト形式でレンダリングされます。 詳細については、「[非コード ファイルでの作業](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)」を参照してください。
  ![新しいファイル名](/assets/images/help/repository/new-file-name.png)
    - リポジトリのルート ディレクトリにコントリビューション ガイドラインが表示されるようにするには、「*CONTRIBUTING*」と入力します。
    - リポジトリの `docs` ディレクトリにコントリビューション ガイドラインが表示されるようにするには、「*docs/* 」と入力して新しいディレクトリを作成してから、「*CONTRIBUTING*」を入力します。
    - リポジトリに複数の *CONTRIBUTING* ファイルが含まれている場合、リンクに表示されるファイルは、`.github` ディレクトリ、リポジトリのルート ディレクトリ、最後に `docs` ディレクトリの順に選択されます。
4. 新しいファイルに、コントリビューションガイドラインを追加します。 このガイドラインには、次のことを含めましょう:
    - 有意義な Issue やプルリクエストの作成手順
    - \- 外部ドキュメント、メーリングリストや行動規範へのリンク
    - \- コミュニティや行動への期待
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## コントリビューションガイドラインの例

最初は悩むかもしれませんが、以下のコントリビューションガイドラインの例を役立ててください:

- Atom エディターの[コントリビューション ガイドライン](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)。
- Ruby on Rails の[コントリビューション ガイドライン](https://github.com/rails/rails/blob/main/CONTRIBUTING.md)。
- Open Government の[コントリビューション ガイドライン](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md)。

## 参考資料
- オープン ソース ガイドのセクション「[Starting an Open Source Project](https://opensource.guide/starting-a-project/)」(オープン ソース プロジェクトの開始){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- 「[リポジトリへのライセンスの追加](/articles/adding-a-license-to-a-repository)」{% endif %}
