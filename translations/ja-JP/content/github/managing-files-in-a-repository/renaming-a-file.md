---
title: ファイルの名前を変更する
intro: '{% data variables.product.product_name %}では、リポジトリにあるファイルの名前を直接変更できます。 ファイルの名前を変更することで、[ファイルを新しい場所に移動する](/articles/moving-a-file-to-a-new-location)機会も得られます。'
redirect_from:
  - /articles/renaming-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tips**:

- アクセスのないリポジトリにあるファイルの名前を変更しようとした場合は、変更をコミットした後に、プロジェクトがユーザアカウントへフォークされ、[プルリクエスト](/articles/about-pull-requests)を元のリポジトリへ送信できるようになります。
- Web インターフェイスを介して作成されるファイル名では英数字とハイフン (`-`) しか使用できません。 それ以外の文字を使用するには、ファイルをローカルで作成してコミットしてから、リポジトリへプッシュします。
- 一部のファイル (画像など) は、コマンドラインで名前を変更することが要求されます。 詳細は「[コマンドラインを使用してファイルの名前を変更する](/articles/renaming-a-file-using-the-command-line)」を参照してください。

{% endtip %}

1. リポジトリで、名前を変更するファイルを見つけます。
2. ファイルビューの右上の隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイルエディタを開きます。 ![ファイル編集アイコン](/assets/images/help/repository/edit-file-icon.png)
3. ファイル名フィールドで、ファイルの名前を新しいファイル名に変更します。 ファイルのコンテンツも同時に更新できます。 ![ファイル名を編集する](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
