1. KEY-IDを自分のPGPキーIDに置き換えて、以下のコマンドを実行してください。

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. `-----BEGIN PGP PUBLIC KEY BLOCK-----`で始まり`-----END PGP PUBLIC KEY BLOCK-----`で終わる自分のPGPキーをコピーしてください。
1. {% data variables.product.prodname_ghe_server %}に`web-flow`ユーザとしてサインインしてください。
1. 公開PGPキーをユーザプロフィールに追加してください。 詳しい情報については「[{% data variables.product.prodname_dotcom %}アカウントへのGPGキーの追加](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)」を参照してください。

   {% note %}

   **ノート:** GPGキーのリストから他の公開鍵を削除しないでください。 公開鍵が削除されると、対応する秘密鍵で署名されたコミットは、検証済みとしてマークされなくなります。

   {% endnote %}
