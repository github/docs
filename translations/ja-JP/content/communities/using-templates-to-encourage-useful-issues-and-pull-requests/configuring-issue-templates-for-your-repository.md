---
title: リポジトリ用に Issue テンプレートを設定する
intro: コントリビューターがリポジトリで新しい Issue を開くときに使用できるテンプレートをカスタマイズできます。
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431993'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Issue テンプレートを作成する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [Features] セクションの [Issue] の下で、 **[Set up templates]** をクリックします。
![[Start template setup] ボタン](/assets/images/help/repository/set-up-templates.png)
4. [Add template] ドロップダウンメニューで、作成するテンプレートの種類をクリックします。
![[Add template] ドロップダウン メニュー](/assets/images/help/repository/add-template-drop-down-menu.png)
5. テンプレートをリポジトリにコミットする前にプレビューまたは編集するには、 **[Preview and edit]** をクリックします。
![[Preview and edit] ボタン](/assets/images/help/repository/preview-and-edit-button.png)
6. テンプレートを編集するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックして、フィールドに入力してコンテンツを編集します。
![[Issue template edit] ボタン](/assets/images/help/repository/issue-template-edit-button.png)
7. デフォルトの Issue タイトルを自動的に設定するには、リポジトリへの読み取りアクセスを持つ人に Issue を割り当てるか、ラベルを Issue テンプレートに適用し、こうした詳細な情報を [Optional additional information] の下に入力します。 これらの詳細は、Issue テンプレートで YAML frontmatter 形式の `title`、`labels`、または `assignees` で追加することもできます。
![Issue テンプレートの追加情報](/assets/images/help/repository/additional-issue-template-info.png)
8. テンプレートの編集とプレビューが終了したら、ページ右上隅にある **[変更の提案]** をクリックします。
![[Propose changes] ボタン](/assets/images/help/repository/propose-changes-button.png)
9. 変更内容を説明するコミットメッセージを入力します。
![Issue テンプレートの [commit message] フィールド](/assets/images/help/repository/issue-template-commit-message-field.png)
10. コミットメッセージフィールドの下で、テンプレートを直接デフォルトブランチにコミットするか、新しいブランチを作成してプルリクエストを開くか判断します。 pull request の詳細については、「[pull requests について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。
![Issue テンプレートの main へのコミットか pull request を開くかの選択肢](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. **[Commit changes]** をクリックします。 変更がデフォルトブランチにマージされると、コントリビューターがリポジトリで新しい Issue を開くときにテンプレートを使用できるようになります。

{% ifversion fpt or ghec %}

## Issue フォームを作成する

{% data reusables.community.issue-forms-beta %}

Issue フォームを使用すると、カスタマイズ可能な Web フォームフィールドを持つ Issue テンプレートを作成できます。 リポジトリ内の Issue フォームを使用して、コントリビューターに特定の構造化された情報を含めるように促すことができます。 Issue フォームは、{% data variables.product.prodname_dotcom %} フォームスキーマを使用して YAML で記述されます。 詳細については、「[{% data variables.product.prodname_dotcom %} のフォーム スキーマの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)」を参照してください。 {% data reusables.actions.learn-more-about-yaml %}

リポジトリで Issue フォームを使用するには、新しいファイルを作成して、それをお使いのリポジトリの `.github/ISSUE_TEMPLATE` フォルダーに追加する必要があります。

Issue フォームの設定ファイルの例を次に示します。

{% data reusables.community.issue-forms-sample %}

Issueフォームのレンダリングバージョンは次のとおりです。
  ![レンダリングされた Issue フォーム](/assets/images/help/repository/sample-issue-form.png)

1. Issue フォームを作成するリポジトリを選択します。 書き込みアクセス権を持つ既存のリポジトリを利用することも、新しいリポジトリを作成することもできます。 リポジトリの作成の詳細については、「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。
2. リポジトリで、`FORM-NAME` を Issue フォームの名前に置き換えて、`.github/ISSUE_TEMPLATE/FORM-NAME.yml` という名前のファイルを作成します。 GitHub での新しいファイルの作成の詳細については、「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
3. 新しいファイルの本文に、Issue フォームの内容を入力します。 詳細については、「[Issue フォームの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)」を参照してください。
4. ファイルをリポジトリのデフォルトブランチにコミットします。 詳細については、「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。

{% endif %}

## テンプレート選択画面を設定する

{% data reusables.repositories.issue-template-config %}

`false` に `blank_issues_enabled` を設定して、コントリビューターに Issue テンプレートの使用を促すことができます。 `blank_issues_enabled` を `true` に設定すると、空の Issue を開くオプションがユーザーに表示されます。

{% note %}

**注:** 従来のワークフローを使用して`.github`フォルダーに`issue_template.md`ファイルを手動で作成し、*config.yml* ファイルで空の Issue を有効にした場合、`issue_template.md` のテンプレートは空の Issue を開くためにユーザーが選択したときに使用されます。 空白の Issue を無効にすると、テンプレートは使用されません。

{% endnote %}

{% data variables.product.product_name %} 外で特定のレポートを受信する場合は、`contact_links` を使用して外部サイトにユーザーを誘導できます。

*config.yml* ファイルの例を次に示します。

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

設定ファイルでは、ファイルがリポジトリのデフォルトブランチにマージされるときにテンプレート選択画面をカスタマイズします。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドに、`.github/ISSUE_TEMPLATE/config.yml` と入力します。
  ![ファイル名の構成](/assets/images/help/repository/template-config-file-name.png)
4. 新しいファイルの本文に、設定ファイルのコンテンツを入力します。
  ![構成ファイルの内容](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 参考資料

- [Issue と pull request テンプレートについて](/articles/about-issue-and-pull-request-templates)
- [リポジトリ用の単一 Issue テンプレートを手動で作成する](/articles/manually-creating-a-single-issue-template-for-your-repository)
