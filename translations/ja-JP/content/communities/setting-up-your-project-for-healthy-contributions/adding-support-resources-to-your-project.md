---
title: プロジェクトへのサポートリソースの追加
intro: SUPPORT ファイルを作成して、プロジェクトについての支援を得る方法を知らせることができます。
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

人々を特定のサポートリソースに向かせるために、リポジトリのルート、`docs`、`.github` フォルダに SUPPORT ファイルを追加できます。 誰かがリポジトリに Issue を作成すると、その人はプロジェクトの SUPPORT ファイルへのリンクを見ることになります。

![サポートガイドライン](/assets/images/help/issues/support_guidelines_in_issue.png)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Organization またはユーザアカウントのデフォルトのサポートリソースを作成できます。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

{% tip %}

**ヒント:** サポートガイドラインを見つけやすくするために、[README ファイル](/articles/about-readmes/)などのリポジトリの他の場所から SUPPORT ファイルへリンクすることができます。

{% endtip %}

### プロジェクトへのサポートリソースの追加

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. ファイル名フィールドで、*SUPPORT.md* (すべて大文字) と入力します。
4. [**Edit new file**] (新規ファイルの編集) タブで、プロジェクトについてのサポートを得る方法に関する情報を追加してください。
5. SUPPORT ファイルをレビューするには [**Preview**] をクリックします。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
