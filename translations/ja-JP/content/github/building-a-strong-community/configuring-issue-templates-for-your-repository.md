---
title: リポジトリ用に Issue テンプレートを設定する
intro: コントリビューターがリポジトリで新しい Issue を開くときに使用できるテンプレートをカスタマイズできます。
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

### Issue テンプレートを作成する

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
10. コミットメッセージフィールドの下で、テンプレートを直接デフォルトブランチにコミットするか、新しいブランチを作成してプルリクエストを開くか判断します。 プルリクエストに関する詳しい情報については「[プルリクエストについて](/articles/about-pull-requests)」を参照してください。 ![Issue テンプレートの main へのコミットかプルリクエストを開くかの選択](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. **[Commit changes]** をクリックしてください。 変更がデフォルトブランチにマージされると、コントリビューターがリポジトリで新しい Issue を開くときにテンプレートを使用できるようになります。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### テンプレート選択画面を設定する

{% data reusables.repositories.issue-template-config %}

`blank_issues_enabled` を `false` に設定すると、コントリビューターに Issue テンプレートの使用を促すことができます。 `blank_issues_enabled` を `true` に設定すると、空白の Issue を開くこともできます。

{% note %}

**注釈:** 従来のワークフローを使用して手動で `issue_template.md` ファイルを作成し、*config.yml* ファイルで空白の Issue を有効にした場合、空白の Issue を開くときに `issue_template.md` のテンプレートが使用されます。 空白の Issue を無効にすると、テンプレートは使用されません。

{% endnote %}

{% data variables.product.product_name %}外で特定のレポートを受信する場合は、`contact_links` を使用して外部サイトにユーザを誘導できます。

*config.yml* ファイルの例は次のとおりです。

```shell
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

### 参考リンク

- [Issueとプルリクエストのテンプレートについて](/articles/about-issue-and-pull-request-templates)
- "[リポジトリ用の単一 Issue テンプレートを手動で作成する](/articles/manually-creating-a-single-issue-template-for-your-repository)"
