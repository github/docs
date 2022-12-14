---
ms.openlocfilehash: c7f50dff20f3a2f67b65c4f1b0bf660205b4b207
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509235"
---
{% data variables.product.prodname_pages %} API は、{% data variables.product.prodname_pages %} の設定や、ビルドのステータスについての情報を取得します。 サイトとビルドに関する情報は、{% ifversion not ghae %}Webサイトがパブリックの場合であっても{% endif %}認証を受けたユーザだけがアクセスできます。 詳細については、「[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)」 ({% data variables.product.prodname_pages %} の概要) を参照してください。

応答に `status` キーがある {% data variables.product.prodname_pages %} API エンドポイントの値は、以下のいずれかになります。
* `null`: サイトはまだビルドされていません。
* `queued`: ビルドがリクエストされたが、まだ開始していません。
* `building`: ビルド中です。
* `built`: サイトがビルドされました。
* `errored`: ビルド中にエラーが発生したことを示します。

GitHub Pages サイトの情報を返す {% data variables.product.prodname_pages %} API エンドポイントにおいては、JSON のレスポンスには以下が含まれます。
* `html_url`: レンダリングされた Pages サイトの絶対 URL (スキームを含む)。 たとえば、`https://username.github.io` のように指定します。
* `source`: レンダリングされた Pages サイトのソース ブランチおよびディレクトリを含むオブジェクト。 これには次のものが含まれます
   - `branch`: [サイトのソース ファイル](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)を発行するために使用されるリポジトリ ブランチ。 たとえば、_main_ または _gh-pages_ などです。
   - `path`: サイトの公開元のリポジトリ ディレクトリ。 `/` または `/docs` のいずれかです。