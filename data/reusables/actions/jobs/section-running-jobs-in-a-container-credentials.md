{% data reusables.actions.registry-credentials %}

#### Example: Defining credentials for a container registry

{% raw %}

```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.github_token }}
```

{% endraw %}
