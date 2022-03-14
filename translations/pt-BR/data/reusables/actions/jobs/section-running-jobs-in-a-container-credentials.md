{% data reusables.actions.registry-credentials %}

#### Exemplo: Definindo credenciais para o registro de um contêiner

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.github_token }}
```
{% endraw %}
