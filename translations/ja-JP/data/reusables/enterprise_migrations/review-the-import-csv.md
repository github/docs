1. `/PATH/REPO-NAME.git/git-import/raw-authors.csv`にあるカンマ区切り（CSV）ファイルをレビューしてください。 以下の列が含まれているはずです。
    - `ID`: オリジナルのリポジトリに保存されている作者で、ユニークな識別子が続きます。
    - `NAME`: オリジナルのリポジトリに保存されている作者です。

  オリジナルのリポジトリから作者をメールアドレスと名前にマップするには、 `ID,(ignored),GIT_EMAIL,GIT_NAME`という列を持つ新しいCSVファイルを作成してください。これは、"ID"による任意の作者の情報を"GIT_EMAIL"及び"GIT_NAME"で置き換えます。


  #### サンプル:

   - Original author ID: `octocat@111111-2222-3333-4444-55555555555`
   - New email address: `octocat@github.com`
   - New name: `The Octocat`

   オリジナルの作者を新しいGitユーザにマップするには、CSVファイルに以下の行が含まれていなければなりません。

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
