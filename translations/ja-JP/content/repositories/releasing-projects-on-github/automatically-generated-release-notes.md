---
title: Automatically generated release notes
intro: You can automatically generate release notes for your GitHub releases
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
topics:
  - Repositories
shortTitle: Automated release notes
---

{% note %}

**注釈:** {% data reusables.repositories.auto-gen-release-public-beta %}

{% endnote %}

## About automatically generated release notes

Automatically generated release notes provide an automated alternative to manually writing release notes for your {% data variables.product.prodname_dotcom %} releases. With automatically generated release notes, you can quickly generate an overview of the contents of a release. You can also customize your automated release notes, using labels to create custom categories to organize pull requests you want to include, and exclude certain labels and users from appearing in the output.

## Creating automatically generated release notes for a new release

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. [**Draft a new release**] をクリックします。 ![新しいリリースのドラフトを作成するボタン](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. Alternatively, select an existing tag.
  {% ifversion fpt %}
  ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
5. If you are creating a new tag, click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![タグ付きバージョンのリリース](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.
  {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![タグ付きブランチのリリース](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
7. To the top right of the description text box, click **Auto-generate release notes**. ![Auto-generate release notes](/assets/images/help/releases/auto-generate-release-notes.png)
8. Check the generated notes to ensure they include all (and only) the information you want to include.
9. オプションで、コンパイルされたプログラムなどのバイナリファイルをリリースに含めるには、ドラッグアンドドロップするかバイナリボックスで手動で選択します。 ![リリースに DMG ファイルを含める](/assets/images/help/releases/releases_adding_binary.gif)
10. リリースが不安定であり、運用準備ができていないことをユーザに通知するには、[**This is a pre-release**] を選択します。 ![リリースをプレリリースとしてマークするチェックボックス](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
11. 必要に応じて、[**Create a discussion for this release**] を選択し、[**Category**] ドロップダウンメニューを選択してリリースディスカッションのカテゴリをクリックします。 ![リリースディスカッションを作成するためのチェックボックスと、カテゴリを選択するドロップダウンメニュー](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. リリースを公開する準備ができている場合は、[**Publish release**] をクリックします。 リリースの作業を後でする場合は、[**Save draft**] をクリックします。 ![[Publish release] と [Save draft] ボタン](/assets/images/help/releases/release_buttons.png)


## Creating a template for automatically generated release notes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type `.github/release.yml` to create the `release.yml` file in the `.github` directory. ![Create new file](/assets/images/help/releases/release-yml.png)
4. In the file, specify the pull request labels and authors you want to exclude from this release. You can also create new categories and list the pull request labels to be included in each of them. 詳しい情報については、「[ラベルを管理する](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください。

## 設定例

{% raw %}
**release.yml**
```yaml{:copy}
# release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

## Release template syntax

| Parameter | 説明                                                                                                                                                                               | 必須                                                                           | 値                                                                         |
|:--------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------- |:------------------------------------------------------------------------- |
| `変更履歴`    | Defines the contents within it as the custom template for your release notes.                                                                                                    | 必須.                                                                          | No value accepted.                                                        |
| `除外`      | Creates a category of pull requests to be excluded from the release. Can be set at the top-level of the changelog to apply to all categories or applied on a per-category basis. | 任意                                                                           | No value accepted.                                                        |
| `authors` | Specifies authors to be excluded from the release.                                                                                                                               | Optional for `exclude` category.                                             | Accepts usernames and bots as values.                                     |
| `カテゴリ`    | Defines the nested contents as custom categories to be included in the template.                                                                                                 | 任意                                                                           | No value accepted.                                                        |
| `title`   | Creates an individual category.                                                                                                                                                  | Required if `categories` parameter exists.                                   | Takes the category name as its value.                                     |
| `labels`  | Specifies labels to be used by the enclosing category.                                                                                                                           | Required if `categories` parameter exists, optional for `exclude` parameter. | Accepts any labels, whether currently existing or planned for the future. |
| `"*"`     | Catchall for any pull request not included within a category *above*. If used, it must be added at the end of the file.                                                          | 任意                                                                           | No value accepted.                                                        |
