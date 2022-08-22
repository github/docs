1. プライマリGPG署名キーをGitで設定するには、使用したいGPGプライマリキーIDを置き換えて以下のテキストを貼り付けてください。 この例では、GPG キー ID は `3AA5C34371567BD2` です。
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```

   あるいは、`!`を含めてサブキーを設定する場合は以下のようにしてください。 この例では、GPGサブキーIDは`4BB6D45482678BE3`です:
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
