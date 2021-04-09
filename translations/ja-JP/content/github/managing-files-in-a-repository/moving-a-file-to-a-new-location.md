---
title: ファイルを新しい場所に移動する
intro: '編集中のファイルは、たとえディレクトリが存在していない場合でも、リポジトリ内のどこにでも移動することができます。'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

ファイルの場所を変えるだけでなく、同じコミットで[ファイルの内容を更新](/articles/editing-files-in-your-repository)したり、
ファイルの名前を変更したりすることもできます。</p> 

{% tip %}

**ヒント**:

- アクセス権のないリポジトリのファイルを移動しようとした場合は、プロジェクトがあなたのユーザー アカウントにフォークされ、変更のコミット後には元のリポジトリに[プル リクエスト](/articles/about-pull-requests)を送信できます。
- 画像など、ファイルによってはコマンドラインから移動しなければならない場合があります。 詳細は「[コマンドラインを使用してファイルを新しい場所へ移動する](/articles/moving-a-file-to-a-new-location-using-the-command-line)」を参照してください。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. リポジトリで、移動するファイルを見つけます。
2. ファイルビューの右上の隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイルエディタを開きます。 ![ファイル編集アイコン](/assets/images/help/repository/move-file-edit-file-icon.png)

3. ファイル名のフィールドで、以下のガイドラインに従ってファイルの名前を変更します。 ![ファイル名を編集する](/assets/images/help/repository/moving_files.gif)

    - ファイルを**サブフォルダに**移動するには、移動先のフォルダの名前を入力して、最後に `/` を入力します。 新しいフォルダ名が、ナビゲーション階層リンクで新しいアイテムになります。
    - **ファイルの現在位置より上位**のディレクトリにファイルを移動するには、ファイル名フィールドの先頭にカーソルを置いてから、`../` と入力して 1 階層完全に上に移動するか、親フォルダの名前を編集する場合は `Backspace` キーを押します。 
      
      {% data reusables.files.write_commit_message %}
      
      
      
      {% data reusables.files.choose_commit_branch %}
      
      
      
      {% data reusables.files.propose_file_change %}
