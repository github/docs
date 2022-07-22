{% data reusables.actions.registry-credentials %}

#### 示例：定义容器注册表的凭据

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.github_token }}
```
{% endraw %}
