---
title: プロジェクト（ベータ）の管理
intro: プロジェクトをクローズしたり再オープンしたり、あるいは完全に削除できます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

## プロジェクトの削除

プロジェクトを削除して、完全に除去できます。

{% data reusables.projects.project-settings %}
1. ページの下部で**Delete this project（このプロジェクトを削除）**をクリックしてください。 ![プロジェクトの削除ボタンが表示されているスクリーンショット](/assets/images/help/issues/delete-project-button.png)
1. 警告を読み、プロジェクト名をテキストボックスに入力してください。 ![プロジェクトの削除の確認が表示されているスクリーンショット](/assets/images/help/issues/project-delete-confirm.png)
1. **I understand the consequences, delete this project（生じることを理解したので、このプロジェクトを削除してください）**をクリックしてください。

## プロジェクトのクローズ

プロジェクトをクローズしてプロジェクトのリストから削除し、ただしその内容を残し、後に再オープンできるようにしておくことができます。

{% data reusables.projects.project-settings %}
1. ページの下部で**Close this project（このプロジェクトをクローズ）**をクリックしてください。 ![プロジェクトのクローズボタンが表示されているスクリーンショット](/assets/images/help/issues/close-project-button.png)

## Organizationプロジェクトの再オープン

以前にクローズしたプロジェクトを再オープンできます。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.reopen-a-project %}

## ユーザプロジェクトの再オープン

以前にクローズしたプロジェクトを再オープンできます。

{% data reusables.profile.access_profile %}
{% data reusables.projects.reopen-a-project %}
