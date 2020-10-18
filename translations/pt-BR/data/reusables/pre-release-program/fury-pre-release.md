{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Observação:** Os manifestos de {% data variables.product.prodname_github_app %} estão atualmente disponíveis para pré-visualização dos desenvolvedores. Para acessar essa API durante o período de pré-visualização, você deve fornecer um [tipo de mídia](/v3/media) personalizado no cabeçalho `Aceitar`:

```
application/vnd.github.fury-preview+json
```

{% endnote %}
{% endif %}
