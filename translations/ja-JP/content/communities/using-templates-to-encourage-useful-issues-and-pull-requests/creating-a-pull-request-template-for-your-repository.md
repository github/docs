---
title: リポジトリ用のプルリクエストテンプレートの作成
intro: リポジトリにプルリクエストのテンプレートを追加すると、プロジェクトのコントリビューターはプルリクエストの本体にテンプレートの内容を自動的に見ることになります。
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: fa4d3cf78b63af147c85b8f6d77d7cca74e3853a
ms.sourcegitcommit: 4daa156856e651cb3854ead40e35bd918e481ad6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190409'
---
詳細については、「[Issue と pull request テンプレートについて](/articles/about-issue-and-pull-request-templates)」を参照してください。

サポートしているどのフォルダーでも *PULL_REQUEST_TEMPLATE/* サブディレクトリを作成し、pull request テンプレートを複数含めることができます。また、`template` クエリ パラメーターで pull request の本文に使用するテンプレートを指定できます。 詳細については、「[クエリ パラメーターを使用して pull request を作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)」を参照してください。

{% ifversion fpt or ghes or ghec %}

ご自分の Organization {% ifversion fpt or ghes or ghec %}または個人用アカウント{% endif %}向けに既定の pull request を作成することができます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

## プルリクエストテンプレートの追加

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドで:
    -  pull request テンプレートをリポジトリのルート ディレクトリで表示するには、pull request テンプレートに `pull_request_template.md` という名前を付けます。
  ![ルート ディレクトリの新しい pull request テンプレート名](/assets/images/help/repository/pr-template-file-name.png)
    - pull request テンプレートをリポジトリの `docs` ディレクトリで表示するには、pull request テンプレートに `docs/pull_request_template.md` という名前を付けます。
  ![docs ディレクトリの新しい pull request テンプレート](/assets/images/help/repository/pr-template-file-name-docs.png)
    - ファイルを非表示のディレクトリに格納するには、pull request テンプレートを `.github/pull_request_template.md` という名前にします。
  ![非表示のディレクトリの新しい pull request テンプレート](/assets/images/help/repository/pr-template-hidden-directory.png)
    - pull request テンプレートを複数作成し、`template` クエリ パラメーターを使用して pull request の本文を埋めるテンプレートを指定するには、 *.github/PULL_REQUEST_TEMPLATE/* と入力し、続けてお使いの pull request テンプレートの名前を入力します。 たとえば、「 `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md` 」のように入力します。 ルートまたは `docs/` ディレクトリ内の `PULL_REQUEST_TEMPLATE` サブディレクトリに複数の pull request テンプレートを格納することもできます。 詳細については、「[クエリ パラメーターを使用して pull request を作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)」を参照してください。
  ![非表示ディレクトリ内の新しい複数の pull request テンプレート](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. 新しいファイルの本文にプルリクエストテンプレートを追加します。 そこに盛り込むべき項目として、以下のようなものがあります:
    - ご自分のリポジトリ内の [関連する Issue への参照](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests)。
    - プルリクエストで提案された変更の説明。
    - レビューを行っている提案された変更の責任を負う個人またはチームの [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} テンプレートがリポジトリの既定のブランチにマージされると、コラボレーターがテンプレートを使用できるようになります。
{% data reusables.files.propose_new_file %}

## 参考資料

- [Issue と pull request テンプレートについて](/articles/about-issue-and-pull-request-templates)
- [クエリ パラメーターを使用した Issue および pull request の自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [pull request の作成方法](/articles/creating-a-pull-request)
