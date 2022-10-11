---
title: GitHub Pages サイトの Jekyll ビルドエラーに関するトラブルシューティング
intro: 'Jekyll ビルドエラーのメッセージを利用して、{% data variables.product.prodname_pages %} サイトの問題をトラブルシューティングすることができます。'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder
  - /articles/page-build-failed-invalid-submodule
  - /articles/page-build-failed-missing-submodule
  - /articles/page-build-failed-markdown-errors
  - /articles/page-build-failed-config-file-error
  - /articles/page-build-failed-unknown-tag-error
  - /articles/page-build-failed-tag-not-properly-terminated
  - /articles/page-build-failed-tag-not-properly-closed
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory
  - /articles/page-build-failed-file-is-a-symlink
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded
  - /articles/page-build-failed-invalid-post-date
  - /articles/page-build-failed-invalid-sass-or-scss
  - /articles/page-build-failed-invalid-highlighter-language
  - /articles/page-build-failed-relative-permalinks-configured
  - /articles/page-build-failed-syntax-error-in-for-loop
  - /articles/page-build-failed-invalid-yaml-in-data-file
  - /articles/page-build-failed-date-is-not-a-valid-datetime
  - /articles/troubleshooting-github-pages-builds
  - /articles/troubleshooting-jekyll-builds
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot Jekyll errors
ms.openlocfilehash: 224f626df144ad249a799767984118778202e7b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883466'
---
## ビルドエラーのトラブルシューティング

{% data variables.product.prodname_pages %} サイトをローカルで、または {% data variables.product.product_name %} 上でビルドしているときに Jekyll でエラーが発生した場合、そのエラーメッセージをトラブルシューティングに利用できます。 エラー メッセージとその表示方法の詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルド エラーについて](/articles/about-jekyll-build-errors-for-github-pages-sites)」を参照してください。

一般的なエラーメッセージが表示された場合は、よくある問題をチェックします。
- サポートされていないプラグインを使用している。 詳細については、「[{% data variables.product.prodname_pages %} と Jekyll について](/articles/about-github-pages-and-jekyll#plugins)」を参照してください。{% ifversion fpt or ghec %}
- リポジトリがリポジトリサイズの制限を超えている。 詳細については、[ディスク クォータの概要](/articles/what-is-my-disk-quota)に関するページを参照してください。{% endif %}
- *_config.yml* ファイルの `source` 設定を変更しました。 {% ifversion pages-custom-workflow %}ブランチからサイトを発行している場合、この設定はビルド プロセス中に {% endif %}{% data variables.product.prodname_pages %} によってオーバーライドされます。
- 公開元のファイル名にコロン (`:`) が含まれていますが、これはサポートされていません。

具体的なエラーメッセージが表示された場合は、エラーメッセージに関する以下のトラブルシューティング情報を確認してください。

{% ifversion pages-custom-workflow %}エラーを修正したら、サイトのソース ブランチにその変更をプッシュするか (ブランチから公開する場合)、またはカスタムの {% data variables.product.prodname_actions %} ワークフローをトリガーして ({% data variables.product.prodname_actions %} を使用して公開する場合)、別のビルドをトリガーします。{% else %}エラーを修正したら、サイトの公開元にその変更をプッシュして、{% data variables.product.product_name %} 上で別のビルドをトリガーします。{% endif %}

## Config file error

このエラーは、 *_config.yml* ファイルに構文エラーが含まれているため、サイトのビルドに失敗したことを意味します。

トラブルシューティングを行うには、 *_config.yml* ファイルが次のルールに従っていることを確認します。

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

## Date is not a valid datetime

このエラーは、サイトのいずれかのページに無効な日付データが含まれていることを意味します。

トラブルシューティングするには、エラーメッセージで示されたファイルおよびファイルのレイアウトで、日付関連の Liquid フィルタをコールしている箇所を探します。 日付関連の Liquid フィルターに渡される変数には、すべてのケースで値が含まれていることを確認し、`nil` や `""` を渡さないようにしてください。 詳細については、Liquid ドキュメントの「[Liquid filters](https://help.shopify.com/en/themes/liquid/filters)」(Liquid フィルター) を参照してください。

## File does not exist in includes directory

このエラーは、 *_includes* ディレクトリに存在しないファイルをコードが参照していることを意味します。

{% data reusables.pages.search-for-includes %} 参照したファイルのいずれかが *_includes* ディレクトリにない場合は、ファイルを *_includes* ディレクトリにコピーするか、移動します。

## File is a symlink

このエラーは、サイトの公開されたファイル内に存在しないシンボリックリンクされたファイルをコードで参照していることを意味します。

{% data reusables.pages.search-for-includes %} 参照したファイルのいずれかがシンボリック リンクされている場合は、ファイルを *_includes* ディレクトリにコピーするか、移動します。

## File is not properly UTF-8 encoded

このエラーは、これらの記号を期待するようコンピューターに伝えずに、`日本語`などのラテン文字以外の文字を使用したことを意味します。

トラブルシューティングを行うには、 *_config.yml* ファイルに次の行を追加して UTF-8 エンコードを強制します。
```yaml
encoding: UTF-8
```

## Invalid highlighter language

このエラーは、構成ファイルで [Rouge](https://github.com/jneen/rouge) または [Pygments](http://pygments.org/) 以外の構文ハイライターを指定したことを意味します。

トラブルシューティングを行うには、 *_config.yml* ファイルを更新して、[Rouge](https://github.com/jneen/rouge) または [Pygments](http://pygments.org/) を指定します。 詳細については、「[{% data variables.product.product_name %} と Jekyll について](/articles/about-github-pages-and-jekyll#syntax-highlighting)」を参照してください。

## Invalid post date

このエラーメッセージは、サイトでの投稿で、ファイル名または YAML フロントマターに無効な日付が含まれていることを意味します。

トラブルシューティングするには、日付がすべて YYYY-MM-DD HH:MM:SS 形式の UTC 時間で、実際のカレンダー日付であることを確認します。 UTC からのオフセットがあるタイム ゾーンを指定するには、`2014-04-18 11:30:00 +0800` のような YYYY-MM-DD HH:MM:SS +/-TTTT 形式を使用します。

*_config.yml* ファイルで日付形式を指定する場合は、形式が正しいことを確認してください。

## Invalid Sass or SCSS

このエラーは、リポジトリに無効な内容の Sass または SCSS ファイルが含まれていることを意味します。

トラブルシューティングするには、エラーメッセージに含まれている行番号を確認して、無効な Sass または SCSS を探します。 今後のエラーを防ぐために、お好みのテキストエディター用の Sass または SCSS 文法チェッカーをインストールします。

## Invalid submodule

このエラーは、適切に初期化されていないサブモジュールがリポジトリに含まれていることを意味します。

{% data reusables.pages.remove-submodule %}

サブ モジュールを使用する場合は、サブモジュールを参照するときに `https://` を使用し (`http://` ではなく)、サブモジュールがパブリック リポジトリにあることを確認してください。

## Invalid YAML in data file

このエラーは、 *_data* フォルダー内のいずれかのファイルに無効な YAML が含まれていることを意味します。

トラブルシューティングを行うには、 *_data* フォルダー内の YAML ファイルが次のルールに従っていることを確認します。

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Jekyll データ ファイルの詳細については、Jekyll ドキュメントの「[Data Files](https://jekyllrb.com/docs/datafiles/)」(データ ファイル) を参照してください。

## Markdown errors

このエラーは、リポジトリ Markdown エラーがあることを意味します。

トラブルシューティングするには、必ずサポートされている Markdown プロセッサを使用するようにします。 詳細については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトの Markdown プロセッサを設定する](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)」を参照してください。

次に、エラーメッセージで示されているファイルが有効な Markdown 構文を使っていることを確認します。 詳細については、Daring Fireball の「[Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax)」(Markdown: 構文) を参照してください。

## Missing docs folder

このエラーは、ブランチ上の `docs` フォルダーを発行元として選択したが、そのブランチのリポジトリのルートに `docs` フォルダーがないことを意味します。

トラブルシューティングを行うには、`docs` フォルダーが誤って移動された場合は、発行元用に選択したブランチのリポジトリのルートに `docs` フォルダーを戻してみてください。 `docs` フォルダーが誤って削除された場合は、次のいずれかを実行できます。
- Git を使用して削除を revert する、つまり取り消す。 詳細については、Git ドキュメントの「[git-revert](https://git-scm.com/docs/git-revert.html)」を参照してください。
- 発行元用に選択したブランチのリポジトリのルートに新しい `docs` フォルダーを作成し、このフォルダーにサイトのソース ファイルを追加する。 詳細については、「[新しいファイルの作成](/articles/creating-new-files)」を参照してください。
- 公開ソースを変更する。 詳細については、「[{% data variables.product.prodname_pages %} の発行元を作成する](/articles/configuring-a-publishing-source-for-github-pages)」を参照してください。

## Missing submodule

このエラーは、存在しない、または適切に初期化されていないサブモジュールがリポジトリに含まれていることを意味します。

{% data reusables.pages.remove-submodule %}

サブモジュールを使用する必要がある場合は、そのサブモジュールを初期化します。 詳細については、_Pro Git_ ブックの「[Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)」(Git ツール - サブモジュール) を参照してください。

## Relative permalinks configured

このエラーは、 *_config.yml* ファイルに {% data variables.product.prodname_pages %} でサポートされていない相対固定リンクがあることを意味します。

パーマリンクとは、サイトの特定ページを参照している恒久的な URL です。 絶対パーマリンクはサイトのルートから始まり、相対パーマリンクは参照先ページを含むフォルダで始まります。 {% data variables.product.prodname_pages %} と Jekyll では、相対パーマリンクがサポートされなくなっています。 固定リンクの詳細については、Jekyll ドキュメントの「[Permarinks](https://jekyllrb.com/docs/permalinks/)」(固定リンク) を参照してください。

トラブルシューティングを行うには、`relative_permalinks`_config.yml *ファイルから* 行を削除し、サイト内の相対固定リンクを絶対固定リンクで再フォーマットします。 詳細については、「[ファイルの編集](/repositories/working-with-files/managing-files/editing-files)」を参照してください。

## Symlink does not exist within your site's repository

このエラーは、サイト用の公開されたファイル内に存在しないシンボリック リンク (symlink) が、そのサイトに含まれていることを意味します。 シンボリックリンクの詳細については、ウィキペディアの「[ソフト リンク](https://en.wikipedia.org/wiki/Symbolic_link)」を参照してください。

トラブルシューティングするには、エラーメッセージで示されているファイルがサイトのビルドに使われているかどうかを確認します。 使われていない場合、またはファイルをシンボリックリンクにしたくない場合は、ファイルを削除します。 サイトのビルドにシンボリック ファイルが必要な場合は、そのシンボリック リンクで参照されているファイルまたはディレクトリが、サイト用の公開されたファイルにあることを確認してください。 外部アセットを含めるには、{% ifversion fpt or ghec %}`git submodule` または {% endif %}[Bower](https://bower.io/) などのサード パーティ製パッケージ マネージャーの使用を検討してください。{% ifversion fpt or ghec %} 詳細については、「[{% data variables.product.prodname_pages %} でサブモジュールを使用する](/articles/using-submodules-with-github-pages)」を参照してください。{% endif %}

## Syntax error in 'for' loop

このエラーは、コードの Liquid `for` ループ宣言に無効な構文が含まれていることを意味します。

トラブルシューティングを行うには、エラー メッセージ内のファイル内のすべての `for` ループに適切な構文があることを確認します。 `for` ループの適切な構文の詳細については、Liquid ドキュメントの「[Iteration tags](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)」(反復タグ) を参照してください。

## Tag not properly closed

このエラーメッセージは、コードに含まれる論理タグが正しく閉じていないことを意味します。 たとえば、{% raw %}`{% capture example_variable %}` は `{% endcapture %}`{% endraw %} で閉じる必要があります。

トラブルシューティングするには、エラーメッセージで示されているファイルの論理タグがすべて適切に閉じられていることを確認します。 詳細については、Liquid ドキュメントの「[Liquid tags](https://help.shopify.com/en/themes/liquid/tags)」(Liquid タグ) を参照してください。

## Tag not properly terminated

このエラーは、正しく閉じられていない出力タグがコードに含まれていることを意味します。 たとえば、{% raw %}`{{ page.title }}` ではなく `{{ page.title }`{% endraw %} です。

トラブルシューティングを行うには、エラー メッセージ内のファイル内のすべての出力タグが `}}` で終了していることを確認します。 詳細については、Liquid ドキュメントの「[Liquid objects](https://help.shopify.com/en/themes/liquid/objects)」(Liquid オブジェクト) を参照してください。

## Unknown tag error

このエラーは、コードに認識されない Liquid タグが含まれていることを意味します。

トラブルシューティングするには、エラーメッセージで示されているファイルの Liquid タグがすべて Jekyll のデフォルトの変数に一致し、タグ名に誤入力がないことを確認します。 既定の変数の一覧については、Jekyll ドキュメントの「[Variables](https://jekyllrb.com/docs/variables/)」(変数) を参照してください。

認識されないタグの主な原因は、サポート対象外のプラグインです。 サイトをローカルで生成し、静的なファイルを {% data variables.product.product_name %} にプッシュすることで、サポート対象外のプラグインを使用している場合は、そのプラグインで Jekyll のデフォルトの変数と異なるタグが使われていないかどうか確認してください。 サポートされているプラグインの一覧については、「[{% data variables.product.prodname_pages %} と Jekyll について](/articles/about-github-pages-and-jekyll#plugins)」を参照してください。
