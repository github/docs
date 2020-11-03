---
title: Pré-visualizações de esquema
intro: 'Você pode visualizar os próximos recursos e alterações para o esquema do GraphQL do {% data variables.product.prodname_dotcom %} antes de eles serem adicionados à API do GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre pré-visualizações de esquemas

Durante o período de pré-visualização, poderemos alterar alguns recursos com base no feedback do desenvolvedor. Se fizermos alterações, iremos anunciá-las no [blogue do desenvolvedor](https://developer.github.com/changes/) sem aviso prévio.

Para acessar uma pré-visualização de esquema, você deverá fornecer um [tipo de mídia personalizado](/v3/media) no cabeçalho `Aceitar` para as suas solicitações. A documentação dos recursos para cada pré-visualização especifica qual tipo de mídia personalizado deve ser fornecido.

{% note %}

**Observação:** Os integrantes do esquema do GraphQL na pré-visualização não podem ser acessados pelo Explorador no momento.

{% endnote %}

{% for preview in graphql.previewsForCurrentVersion %}
### {{ preview.title }}

{{ preview.description }}

Para alternar essa visualização e acesso aos seguintes integrantes do esquema, você deve fornecer um tipo de mídia personalizada no cabeçalho `Aceitar`:

```
{{ preview.accept_header }}
```

Integrantes do esquema pré-visualizados:

{% for schemaMemberPath in preview.toggled_on %}
- `{{ schemaMemberPath }}`
{% endfor %}

{% if preview.announcement %}
**Anunciado:** [{{ preview.announcement.date }}]({{ preview.announcement.url }})
{% endif %}

{% if preview.updates %}
{% for update in preview.updates %}
**Atualizado:** [{{ update.date }}]({{ update.url }})
{% endfor %}
{% endif %}

{% endfor %}
