You can allow all of the defined registries to be used by setting `registries` to `"*"`.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use all the defined registries

{% raw %}
version: 2
registries: "*"
{% endraw %}
```

Alternatively, you can list the registries that the update can use. To do this, use the name of the registry as defined in the top-level `registries` section of the `dependabot.yml` file.
