---
title: 変更したファイルの GitHub での表示方法をカスタマイズする
intro: 特定のファイルをデフォルトで diff に表示しない、またはリポジトリの言語として考えないようにするために、 *.gitattributes* ファイルで `linguist-generated` 属性を使ってマークできます。
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

*.gitattributes* ファイルを使って、特定の属性で指定した「パターン」と一致するファイルをマークします。 *.gitattributes* ファイルでは _.gitignore_ ファイルと同じマッチングルールが使用されます。 詳細は Git ドキュメント「[PATTERN FORMAT](https://www.git-scm.com/docs/gitignore#_pattern_format)」を参照してください。

1. *.gitattributes* ファイルが存在しない場合は、リポジトリのルートに *.gitattributes *ファイルを作成します。
2. `linguist-generated` 属性を使って、リポジトリの言語統計に含めず、デフォルトで diff で非表示にしたいパスをマークする、またはパスのマークを解除します。

  たとえば、`search/index.json` を自動生成されたファイルとしてマークするには、*.gitattributes* にこの行を追加します:

  ```
search/index.json linguist-generated=true
  ```

### 参考リンク
- Linguist ドキュメント内の「[生成されたコード](https://github.com/github/linguist/#generated-code)」
- "[新しいファイルの作成](/articles/creating-new-files/)"
