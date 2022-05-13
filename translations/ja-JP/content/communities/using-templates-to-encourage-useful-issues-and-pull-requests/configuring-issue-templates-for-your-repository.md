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
shortTitle: 設定
---

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}

## Issue テンプレートを作成する

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] セクションの [Issues] の下で、[**Set up templates**] をクリックします。 ![[Start template setup] ボタン](/assets/images/help/repository/set-up-templates.png)
4. [Add template] ドロップダウンメニューで、作成するテンプレートの種類をクリックします。 ![[Add template] ドロップダウンメニュー](/assets/images/help/repository/add-template-drop-down-menu.png)
5. テンプレートをリポジトリにコミットする前にプレビューまたは編集するには、[**Preview and edit**] をクリックします。 ![[Preview and edit] ボタン](/assets/images/help/repository/preview-and-edit-button.png)
6. テンプレートを編集するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックし、フィールドに入力してコンテンツを編集します。 ![[Issue template edit] ボタン](/assets/images/help/repository/issue-template-edit-button.png)
7. デフォルトの Issue タイトルを自動的に設定するには、リポジトリへの読み取りアクセスを持つ人に Issue を割り当てるか、ラベルを Issue テンプレートに適用し、こうした詳細な情報を [Optional additional information] の下に入力します。 このような詳細情報を Issue テンプレートに、`title`、`labels`、または `assignees` を YAML frontmatter フォーマットで使用して、追加することもできます。 ![Issue テンプレートの追加情報](/assets/images/help/repository/additional-issue-template-info.png)
8. テンプレートの編集とプレビューが終了したら、ページ右上隅にある [**Propose changes**] をクリックします。 ![[Propose changes] ボタン](/assets/images/help/repository/propose-changes-button.png)
9. 変更内容を説明するコミットメッセージを入力します。 ![Issue テンプレートコミットメッセージフィールド](/assets/images/help/repository/issue-template-commit-message-field.png)
10. コミットメッセージフィールドの下で、テンプレートを直接デフォルトブランチにコミットするか、新しいブランチを作成してプルリクエストを開くか判断します。 プルリクエストに関する詳しい情報については「[プルリクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。 ![Issue テンプレートの main へのコミットかプルリクエストを開くかの選択](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. **[Commit changes]** をクリックしてください。 変更がデフォルトブランチにマージされると、コントリビューターがリポジトリで新しい Issue を開くときにテンプレートを使用できるようになります。

{% ifversion fpt or ghec %}

## Issue フォームを作成する

{% data reusables.community.issue-forms-beta %}

Issue フォームを使用すると、カスタマイズ可能な Web フォームフィールドを持つ Issue テンプレートを作成できます。 リポジトリ内の Issue フォームを使用して、コントリビューターに特定の構造化された情報を含めるように促すことができます。 Issue フォームは、{% data variables.product.prodname_dotcom %} フォームスキーマを使用して YAML で記述されます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のフォームスキーマの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)」を参照してください。 {% data reusables.actions.learn-more-about-yaml %}

リポジトリで Issue フォームを使用するには、新しいファイルを作成して、リポジトリの `.github/ISSUE_TEMPLATE` フォルダに追加する必要があります。

Issue フォームの設定ファイルの例を次に示します。

{% data reusables.community.issue-forms-sample %}

Issueフォームのレンダリングバージョンは次のとおりです。  ![レンダリングされた Issue フォーム](/assets/images/help/repository/sample-issue-form.png)

1. Issue フォームを作成するリポジトリを選択します。 書き込みアクセス権を持つ既存のリポジトリを利用することも、新しいリポジトリを作成することもできます。 リポジトリの作成に関する詳細は「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。
2. リポジトリに `.github/ISSUE_TEMPLATE/FORM-NAME.yml` というファイルを作成し、`FORM-NAME` を Issue フォームの名前に置き換えます。 GitHub上での新しいファイルの作成に関する詳しい情報については「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
3. 新しいファイルの本文に、Issue フォームの内容を入力します。 詳しい情報については、「[Issue フォームの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)」を参照してください。
4. ファイルをリポジトリのデフォルトブランチにコミットします。 詳細は「[新しいファイルを作成する](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。

{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
## テンプレート選択画面を設定する

{% data reusables.repositories.issue-template-config %}

`blank_issues_enabled` を `false` に設定すると、コントリビューターに Issue テンプレートの使用を促すことができます。 `blank_issues_enabled` を `true` に設定すると、空白の Issue を開くこともできます。

{% note %}

**Note:** If you used the legacy workflow to manually create an `issue_template.md` file in the `.github` folder and enable blank issues in your *config.yml* file, the template in `issue_template.md` will be used when people chose to open a blank issue. 空白の Issue を無効にすると、テンプレートは使用されません。

{% endnote %}

{% data variables.product.product_name %}外で特定のレポートを受信する場合は、`contact_links` を使用して外部サイトにユーザを誘導できます。

*config.yml* ファイルの例は次のとおりです。

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.community/
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

設定ファイルでは、ファイルがリポジトリのデフォルトブランチにマージされるときにテンプレート選択画面をカスタマイズします。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドに `.github/ISSUE_TEMPLATE/config.yml` と入力します。 ![ファイル名の設定](/assets/images/help/repository/template-config-file-name.png)
4. 新しいファイルの本文に、設定ファイルのコンテンツを入力します。 ![ファイルコンテンツの設定](/assets/images/help/repository/template-config-file-content.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
{% endif %}

## 参考リンク

- [Issueとプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates)
- "[リポジトリ用の単一 Issue テンプレートを手動で作成する](/articles/manually-creating-a-single-issue-template-for-your-repository)"
