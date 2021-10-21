---
title: ユーザ アカウントのプロジェクトボードに対するアクセスを管理する
intro: プロジェクトボードのオーナーは、コラボレーターを追加または削除して、そのプロジェクトボードに対する権限をカスタマイズすることができます。
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization/
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

コラボレーターは、あなたが所有しているプロジェクトボードにアクセスを許可されているユーザです。 コラボレーターの権限は、デフォルトでは読み取りアクセスになります。 詳細は「[ユーザ所有のプロジェクトボードの権限レベル](/articles/permission-levels-for-user-owned-project-boards)」を参照してください。

### ユーザ所有のプロジェクトボードにコラボレーターを招待する

1. アプリケーションを追加したいプロジェクトボードに移動します。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
5. [Search by username, full name or email address] で、コラボレーターの名前、ユーザ名、または {% data variables.product.prodname_dotcom %} メールを入力します。 ![Octocat のユーザ名が検索フィールドに入力されているコラボレーターセクション](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
7. 新しいコラボレーターは、デフォルトで読み取り権限を持ちます。 オプションで、新しいコラボレータの名前の隣にあるドロップダウン メニューを使って、権限レベルを変更することもできます。 ![[Collaborators] セクションで [Permissions] ドロップダウン メニューを選択](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

### ユーザ所有のプロジェクトボードからコラボレーターを削除する

{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
