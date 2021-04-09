---
title: Vistas previas del modelo
intro: 'Puedes obtener una vista previa de las características y cambios por venir para el modelo de GraphQL de {% data variables.product.prodname_dotcom %} antes de que se agreguen a la API de GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### Acerca de las vistas previas del modelo

Durante el periodo de vista previa, podríamos cambiar algunas características con base en la retroalimentación de los desarrolladores. Si realizamos cambios, lo anunciaremos en el [blog de desarrolladores](https://developer.github.com/changes/) sin aviso previo.

Para aceder a una vista previa de modelo, necesitamos que nos proporciones un [tipo de medios](/rest/overview/media-types) personalizado en el encabezado `Accept` para tus solicitudes. La documentación de características para cada vista previa especifica qué tipo de medios personalizados proporcionar.

{% note %}

**Nota:** En este momento no se puede acceder a los miembros de modelo de GraphQL bajo vista previa a través del explorador.

{% endnote %}

{% for preview in graphql.previewsForCurrentVersion %}
### {{ preview.title }}

{{ preview.description }}

Para alternar esta vista previa y acceder a los siguientes miembros de modelo, debes proporcionar un tipo de medios personalizado en el encabezado `Accept`:

```
{{ preview.accept_header }}
```

Miembros del modelo previstos:

{% for schemaMemberPath in preview.toggled_on %}
- `{{ schemaMemberPath }}`
{% endfor %}

{% if preview.announcement %}
**Anunciados:** [{{ preview.announcement.date }}]({{ preview.announcement.url }})
{% endif %}

{% if preview.updates %}
{% for update in preview.updates %}
**Actualizados:** [{{ update.date }}]({{ update.url }})
{% endfor %}
{% endif %}

{% endfor %}
