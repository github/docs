{% data variables.product.prodname_pages %} API は、{% data variables.product.prodname_pages %} の設定や、ビルドのステータスについての情報を取得します。 サイトとビルドに関する情報は、{% ifversion not ghae %}Webサイトがパブリックの場合であっても{% endif %}認証を受けたユーザだけがアクセスできます。 詳しい情報については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages)」を参照してください。

レスポンスに `status` キーを持つ {% data variables.product.prodname_pages %} API エンドポイントにおいては、値は以下のいずれかになります。
* `null`: サイトはまだビルドされていません。
* `queued`: ビルドがリクエストされたが、まだ開始していません。
* `building`: ビルドが進行中です。
* `built`: サイトがビルドされています。
* `errored`: ビルド中にエラーが発生したことを示します。

GitHub Pages サイトの情報を返す {% data variables.product.prodname_pages %} API エンドポイントにおいては、JSON のレスポンスには以下が含まれます。
* `html_url`: レンダリングされた Pages サイトの絶対 URL (スキームを含む) 。 たとえば、`https://username.github.io` などです。
* `source`: レンダリングされた Pages サイトのソースブランチおよびディレクトリを含むオブジェクト。 これは以下のものが含まれます。
   - `branch`: [サイトのソースファイル](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)を公開するために使用するリポジトリのブランチ。 たとえば、_main_ or _gh-pages_ などです。
   - `path`: サイトの公開元のリポジトリディレクトリ。 `/` または `/docs` のどちらかとなります。