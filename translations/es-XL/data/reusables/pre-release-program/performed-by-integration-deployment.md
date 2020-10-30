{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota:** Si se crea un despliegue a través de una {% data variables.product.prodname_github_app %}, la respuesta incluirá el objeto `performed_via_github_app` con información acerca de dicha {% data variables.product.prodname_github_app %}. Para obtener más información, consulta la [publicación del blog relacionada](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access).

Para recibir el objeto `performed_via_github_app` en la respuesta, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.machine-man-preview
```

{% endnote %}
{% endif %}
