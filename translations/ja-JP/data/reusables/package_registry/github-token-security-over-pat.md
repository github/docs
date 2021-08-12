{% data variables.product.prodname_container_registry %}は、ワークフロー内での容易でセキュアな認証のために`GITHUB_TOKEN`をサポートするようになりました。 ワークフローが`ghcr.io`での認証のために個人アクセストークン（PAT）を使っているなら、`GITHUB_TOKEN`を使うようにワークフローを更新することを強くおすすめします。

`GITHUB_TOKEN`に関する詳しい情報については「[ワークフロー中の認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。
