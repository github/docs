---
title: リポジトリ用の単一 Issue テンプレートを手動で作成する
intro: 手動で作成した Issue テンプレートをリポジトリに追加すると、プロジェクトのコントリビューターは自動的に Issue の本体でテンプレートの内容が見えるようになります。
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090178'
---
{% data reusables.repositories.legacy-issue-template-tip %}

サポートされている任意のフォルダー内に *ISSUE_TEMPLATE/* サブディレクトリを作成すると、複数の Issue テンプレートを含めることができます。また、`template` クエリ パラメーターを使用すると、Issue の本文に使用するテンプレートを指定することができます。 詳細については、[クエリ パラメーターを使用した Issue と pull request の自動化](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)に関するページを参照してください。

YAML frontmatter を各 Issue テンプレートに追加して、Issue のタイトルを事前に入力したり、ラベルおよびアサインされた人を自動追加したり、リポジトリに新しい Issue を作成するときに表示されるテンプレート選択画面に表示されるテンプレートの名前と説明を指定したりすることができます。

YAML front matter の例は次のとおりです。

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**注:** Front matter 値に、`:` などの YAML 予約文字が含まれている場合は、値全体を引用符で囲む必要があります。 たとえば、`":bug: Bug"` または `":new: triage needed, :bug: bug"` です。

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Issue テンプレートを追加する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドで:
    -  Issue テンプレートをリポジトリのルート ディレクトリ内に表示するには、*issue_template* の名前を入力します。 たとえば、`issue_template.md` のようにします。
  ![ルート ディレクトリの新しい Issue テンプレート名](/assets/images/help/repository/issue-template-file-name.png)
    - Issue テンプレートをリポジトリの `docs` ディレクトリ内に表示するには、「*docs/* 」、*issue_template* の名前の順に入力します。 たとえば、`docs/issue_template.md`、![docs ディレクトリの新しい Issue テンプレート](/assets/images/help/repository/issue-template-file-name-docs.png)などです
    - ファイルを隠しディレクトリ内に格納するには、「*github/* 」、*issue_template* の名前の順に入力します。 たとえば、`.github/issue_template.md` のようにします。
  ![隠しディレクトリの新しい Issue テンプレート](/assets/images/help/repository/issue-template-hidden-directory.png)
    - 複数の Issue テンプレートを作成したり、`template` クエリ パラメーターを使用して、Issue 本文に使用するテンプレートを指定したりするには、「 *.github/ISSUE_TEMPLATE/* 」、Issue テンプレートの名前の順に入力します。 たとえば、`.github/ISSUE_TEMPLATE/issue_template.md` のようにします。 ルートまたは `docs/` ディレクトリ内の `ISSUE_TEMPLATE` サブディレクトリに、複数の Issue テンプレートを格納することもできます。 詳細については、[クエリ パラメーターを使用した Issue と pull request の自動化](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)に関するページを参照してください。
  ![隠しディレクトリの複数の新しい Issue テンプレート](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. 新しいファイルの本文に Issue テンプレートを追加します。 そこに盛り込むべき項目として、以下のようなものがあります:
    - YAML frontmatter
    - 予測される動作と実際の動作
    - 問題を再現する手順
    - 仕様 (プロジェクトのバージョン、オペレーティング システム、またはハードウェアなど) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} コラボレーターがテンプレートを利用できるのは、テンプレートがリポジトリのデフォルトのブランチにマージされる場合です。
{% data reusables.files.propose_new_file %}

## 参考資料

- [Issue と pull request テンプレートについて](/articles/about-issue-and-pull-request-templates)
- 「[リポジトリ用に Issue テンプレートを構成する](/articles/configuring-issue-templates-for-your-repository)」
- [クエリ パラメーターを使用した Issue および pull request の自動化について](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Creating an issue (issue の作成)](/articles/creating-an-issue)
