---
title: 他のユーザーのリポジトリ内のファイルを編集する
intro: '他のユーザーのリポジトリ内のファイルを編集する際は、自動で[リポジトリがフォーク](/articles/fork-a-repo)され、[プルリクエストがオープン](/articles/creating-a-pull-request)されます。'
redirect_from:
  - /articles/editing-files-in-another-users-repository/
  - /articles/editing-files-in-another-user-s-repository
  - /articles/editing-files-in-another-users-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

1. 他のユーザーのリポジトリで、編集するファイルが含まれるフォルダに移動します。 編集するファイルの名前をクリックします。
2. ファイルの中身の上にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。 この時点で、リポジトリが自動でフォークされます。
3. ファイルに必要な変更を加えます。 ![ファイル内の新しいコンテンツ](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. [**Propose file change**] をクリックします。 ![変更のコミットボタン](/assets/images/help/repository/propose_file_change_button.png)
7. プルリクエストのタイトルと説明を入力します。 ![プルリクエストの説明ページ](/assets/images/help/pull_requests/pullrequest-description.png)
8. **Create pull request**をクリックします。 ![プルリクエストボタン](/assets/images/help/pull_requests/pullrequest-send.png)

### 参考リンク

* "[リポジトリのファイルを編集する](/articles/editing-files-in-your-repository)"
