{% data reusables.actions.registry-credentials %}

#### 例: コンテナレジストリの認証情報の定義

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.github_token }}
```
{% endraw %}
