{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Nota:** Ahora puedes utilizar la API de REST para agregar una razón cuando fijas un informe de problemas y verás las razones de haberlo fijado en las respuestas que incluyan informes de problemas o solicitudes de extracción. También verás las razones de haberlo fijado en los eventos que se muestren como `locked`. Esta característica se encuentra disponible actualmente para que los desarrolladores la previsualicen. Consulta la [publicación del blog](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview) para encontrar todos los detalles. Para acceder a esta característica, debes proprocionar un [tipo de medios](/v3/media) personalizado en el encabezado de `Accept`:

```
application/vnd.github.sailor-v-preview+json
```

{% endnote %}
{% endif %}
