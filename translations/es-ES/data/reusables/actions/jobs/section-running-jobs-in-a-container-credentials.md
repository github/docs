{% data reusables.actions.registry-credentials %}

#### Ejemplo: definir las credenciales para un registro de contenedores

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.github_token }}
```
{% endraw %}
