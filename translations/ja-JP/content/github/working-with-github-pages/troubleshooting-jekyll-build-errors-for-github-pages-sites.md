---
title: GitHub Pages サイトの Jekyll ビルドエラーに関するトラブルシューティング
intro: 'Jekyll ビルドエラーのメッセージを利用して、{% data variables.product.prodname_pages %} サイトの問題をトラブルシューティングすることができます。'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder/
  - /articles/page-build-failed-invalid-submodule/
  - /articles/page-build-failed-missing-submodule/
  - /articles/page-build-failed-markdown-errors/
  - /articles/page-build-failed-config-file-error/
  - /articles/page-build-failed-unknown-tag-error/
  - /articles/page-build-failed-tag-not-properly-terminated/
  - /articles/page-build-failed-tag-not-properly-closed/
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory/
  - /articles/page-build-failed-file-is-a-symlink/
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository/
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded/
  - /articles/page-build-failed-invalid-post-date/
  - /articles/page-build-failed-invalid-sass-or-scss/
  - /articles/page-build-failed-invalid-highlighter-language/
  - /articles/page-build-failed-relative-permalinks-configured/
  - /articles/page-build-failed-syntax-error-in-for-loop/
  - /articles/page-build-failed-invalid-yaml-in-data-file/
  - /articles/page-build-failed-date-is-not-a-valid-datetime/
  - /articles/troubleshooting-github-pages-builds/
  - /articles/troubleshooting-jekyll-builds/
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### ビルドエラーのトラブルシューティング

{% data variables.product.prodname_pages %} サイトをローカルで、または {% data variables.product.product_name %} 上でビルドしているときに Jekyll でエラーが発生した場合、そのエラーメッセージをトラブルシューティングに利用できます。 エラーメッセージとその見方に関する詳しい情報は、「[{% data variables.product.prodname_pages %} サイトのJekyllビルドエラーについて](/articles/about-jekyll-build-errors-for-github-pages-sites)」を参照してください。

一般的なエラーメッセージが表示された場合は、よくある問題をチェックします。
- サポートされていないプラグインを使用している。 For more information, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll#plugins)."{% if currentVersion == "free-pro-team@latest" %}
- リポジトリがリポジトリサイズの制限を超えている。 詳しい情報については「[私のディスク容量はいくつですか？](/articles/what-is-my-disk-quota)」を参照してください。{% endif %}
- *_config.yml* ファイルで `source` の設定を変更した。 ビルドプロセス中に、この設定は {% data variables.product.prodname_pages %} によってオーバーライドされます。
- 公開ソースにあるファイル名にコロン (`:`) が含まれている。コロンは使用できません。

具体的なエラーメッセージが表示された場合は、エラーメッセージに関する以下のトラブルシューティング情報を確認してください。

エラーを修正したら、ソースを公開しているサイトにその変更をプッシュし、{% data variables.product.product_name %} でもう一度ビルドを実行します。

### Config file error

このエラーメッセージは、*_config.yml* ファイルに構文エラーがあるためにサイトのビルドに失敗したことを意味します。

トラブルシューティングの際は、*_config.yml* ファイルが次のルールに従っていることを確認してください。

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

### Date is not a valid datetime

このエラーは、サイトのいずれかのページに無効な日付データが含まれていることを意味します。

トラブルシューティングするには、エラーメッセージで示されたファイルおよびファイルのレイアウトで、日付関連の Liquid フィルタをコールしている箇所を探します。 日付関連の Liquid フィルタに渡される変数に、すべてのケースで値があることと、`nil`または `""` を渡していないことを確認します。 詳細は、Liquid のドキュメンテーションで「[Liquid フィルタ](https://help.shopify.com/en/themes/liquid/filters)」を参照してください。

### File does not exist in includes directory

このエラーは、*_includes* ディレクトリに存在していないファイルをコードで参照していることを意味します。

{% data reusables.pages.search-for-includes %} 参照していたファイルのいずれかが *_includes* ディレクトリに存在しない場合は、そのファイルを *_includes* ディレクトリにコピーまたは移動してください。

### File is a symlink

このエラーは、サイトの公開ソースに存在しないシンボリックリンクされたファイルをコードで参照していることを意味します。

{% data reusables.pages.search-for-includes %} 参照していたファイルのいずれかがシンボリックリンクされている場合は、そのファイルを *_includes* ディレクトリにコピーまたは移動してください。

### File is not properly UTF-8 encoded

このエラーは、`日本語`などアルファベット以外の文字を使用したことを意味します。

トラブルシューティングするには、*_config.yml* ファイルに次の行を追加して UTF-8 エンコーディングを指定します。
```yaml
encoding: UTF-8
```

### Invalid highlighter language

このエラーは、設定ファイルで [Rouge](https://github.com/jneen/rouge) または [Pygments](http://pygments.org/) 以外の構文ハイライターを指定したことを意味します。

トラブルシューティングするには、*_config.yml* ファイルを更新して [Rouge](https://github.com/jneen/rouge) または [Pygments](http://pygments.org/) を指定します。 詳しい情報については、「[{% data variables.product.product_name %} と Jekyll について](/articles/about-github-pages-and-jekyll#syntax-highlighting)」を参照してください。

### Invalid post date

このエラーメッセージは、サイトでの投稿で、ファイル名または YAML フロントマターに無効な日付が含まれていることを意味します。

トラブルシューティングするには、日付がすべて YYYY-MM-DD HH:MM:SS 形式の UTC 時間で、実際のカレンダー日付であることを確認します。 UTC との時差があるタイムゾーンを指定する場合は、YYYY-MM-DD HH:MM:SS +/-TTTT 形式を使用し、たとえば `2014-04-18 11:30:00 +0800` のように指定します。

*_config.yml* ファイルで日付形式を指定している場合は、その形式が正しいことを確認してください。

### Invalid Sass or SCSS

このエラーは、リポジトリに無効な内容の Sass または SCSS ファイルが含まれていることを意味します。

トラブルシューティングするには、エラーメッセージに含まれている行番号を確認して、無効な Sass または SCSS を探します。 今後のエラーを防ぐために、お好みのテキストエディター用の Sass または SCSS 文法チェッカーをインストールします。

### Invalid submodule

このエラーは、適切に初期化されていないサブモジュールがリポジトリに含まれていることを意味します。

{% data reusables.pages.remove-submodule %}

そのサブモジュールを使用する必要がある場合は、サブモジュールを参照するとき、必ず `https://` (`http://` ではなく) を使用し、そのサブモジュールをパブリックリポジトリに配置してください。

### Invalid YAML in data file

このエラーは、*_data* フォルダの 1 つ以上のファイルに無効な YAML が含まれていることを意味します。

トラブルシューティングするには、*_data* フォルダの YAML ファイルが次のルールに従っていることを確認します。

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Jekyll データファイルの詳細は、Jekyll のドキュメンテーションで「[データファイル](https://jekyllrb.com/docs/datafiles/)」を参照してください。

### Markdown errors

このエラーは、リポジトリ Markdown エラーがあることを意味します。

トラブルシューティングするには、必ずサポートされている Markdown プロセッサを使用するようにします。 詳細は、「[Jekyll を使用して、{% data variables.product.prodname_pages %} サイトの Markdown プロセッサを設定する](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)」を参照してください。

次に、エラーメッセージで示されているファイルが有効な Markdown 構文を使っていることを確認します。 詳細は、Daring Fireball の「[Markdown: 構文](https://daringfireball.net/projects/markdown/syntax)」を参照してください。

### Missing docs folder

This error means that you have chosen the `docs` folder on a branch as your publishing source, but there is no `docs` folder in the root of your repository on that branch.

To troubleshoot, if your `docs` folder was accidentally moved, try moving the `docs` folder back to the root of your repository on the branch you chose for your publishing source. `docs` フォルダを誤って削除した場合は、次のいずれかの方法が可能です。
- Git を使用して削除を revert する、つまり取り消す。 詳細は、Git のドキュメンテーションで「[git-revert](https://git-scm.com/docs/git-revert.html)」を参照してください。
- Create a new `docs` folder in the root of your repository on the branch you chose for your publishing source and add your site's source files to the folder. 詳細は「[新しいファイルを作成する](/articles/creating-new-files)」を参照してください。
- 公開ソースを変更する。 詳細は「[{% data variables.product.prodname_pages %} の公開ソースを設定する](/articles/configuring-a-publishing-source-for-github-pages)」を参照してください。

### Missing submodule

このエラーは、存在しない、または適切に初期化されていないサブモジュールがリポジトリに含まれていることを意味します。

{% data reusables.pages.remove-submodule %}

サブモジュールを使用する必要がある場合は、そのサブモジュールを初期化します。 詳細は、_Pro Git_ ブックで「[Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)」を参照してください。

### Relative permalinks configured

このエラーは、*_config.yml* ファイルで相対パーマリンクを使用していることを意味します。相対パーマリンクは {% data variables.product.prodname_pages %} でサポートされていません。

パーマリンクとは、サイトの特定ページを参照している恒久的な URL です。 絶対パーマリンクはサイトのルートから始まり、相対パーマリンクは参照先ページを含むフォルダで始まります。 {% data variables.product.prodname_pages %} と Jekyll では、相対パーマリンクがサポートされなくなっています。 詳細は、Jekyll のドキュメンテーションで「[パーマリンク](https://jekyllrb.com/docs/permalinks/)」を参照してください。

トラブルシューティングするには、*_config.yml* ファイルから `relative_permalinks` の行を削除し、サイトに相対パーマリンクがある場合は絶対パーマリンクに直します。 詳細は「[リポジトリのファイルを編集する](/articles/editing-files-in-your-repository)」を参照してください。

### Symlink does not exist within your site's repository

このエラーは、サイトの公開ソースに存在しないシンボリックリンク (symlink) がサイトに含まれていることを意味します。 シンボリックリンクの詳細は、Wikipedia で「[Symbolic link](https://en.wikipedia.org/wiki/Symbolic_link)」を参照してください。

トラブルシューティングするには、エラーメッセージで示されているファイルがサイトのビルドに使われているかどうかを確認します。 使われていない場合、またはファイルをシンボリックリンクにしたくない場合は、ファイルを削除します。 サイトのビルドにシンボリックファイルが必要な場合は、そのシンボリックリンクで参照されているファイルまたはディレクトリが、サイトの公開ソースにあることを確認してください。 To include external assets, consider using {% if currentVersion == "free-pro-team@latest" %}`git submodule` or {% endif %}a third-party package manager such as [Bower](https://bower.io/).{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Using submodules with {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages)."{% endif %}

### Syntax error in 'for' loop

このエラーは、 Liquid の `for` ループ宣言で無効な構文が含まれていることを意味します。

トラブルシューティングするには、エラーメッセージで示されているファイルですべての `for` ループの構文が正しいことを確認します。 `for` ループの正しい構文についての詳しい情報は、Liquid のドキュメンテーションで「[反復タグ](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)」を参照してください。

### Tag not properly closed

このエラーメッセージは、コードに含まれる論理タグが正しく閉じていないことを意味します。 たとえば、{% raw %}`{% capture example_variable %}` は `{% endcapture %}`{% endraw %} で閉じる必要があります。

トラブルシューティングするには、エラーメッセージで示されているファイルの論理タグがすべて適切に閉じられていることを確認します。 詳細は、Liquid のドキュメンテーションで「[Liquid タグ](https://help.shopify.com/en/themes/liquid/tags)」を参照してください。

### Tag not properly terminated

このエラーは、正しく閉じられていない出力タグがコードに含まれていることを意味します。 たとえば、{% raw %}`{{ page.title }}`{% endraw %} となるはずが {% raw %}`{{ page.title }`{% endraw %} となっているような場合です。

トラブルシューティングするには、エラーメッセージで示されているファイルの出力タグがすべて `}}` で適切に閉じられていることを確認します。 詳細は、Liquid のドキュメンテーションで「[Liquid オブジェクト](https://help.shopify.com/en/themes/liquid/objects)」を参照してください。

### Unknown tag error

このエラーは、コードに認識されない Liquid タグが含まれていることを意味します。

トラブルシューティングするには、エラーメッセージで示されているファイルの Liquid タグがすべて Jekyll のデフォルトの変数に一致し、タグ名に誤入力がないことを確認します。 For a list of default variables, see "[Variables](https://jekyllrb.com/docs/variables/)" in the Jekyll documentation.

認識されないタグの主な原因は、サポート対象外のプラグインです。 サイトをローカルで生成し、静的なファイルを {% data variables.product.product_name %} にプッシュすることで、サポート対象外のプラグインを使用している場合は、そのプラグインで Jekyll のデフォルトの変数と異なるタグが使われていないかどうか確認してください。 サポート対象のプラグインについては、「[{% data variables.product.prodname_pages %} と Jekyll について](/articles/about-github-pages-and-jekyll#plugins)」を参照してください。
