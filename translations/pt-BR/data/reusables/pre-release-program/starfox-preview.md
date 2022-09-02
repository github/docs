{% note %}

**Observação:** Os detalhes do cartão do projeto agora são mostrados em respostas da API REST para eventos relacionados ao projeto e da linha do tempo. Esse recurso agora está disponível para pré-visualização dos desenvolvedores. Para obter informações, consulte o [post do blogue](https://developer.github.com/changes/2018-09-05-project-card-events).

Para receber o atributo `project_card`, os quadros de projeto devem estar [habilitados](/articles/disabling-project-boards-in-a-repository) para um repositório e você deve fornecer um [tipo de mídia](/rest/overview/media-types) personalizado no cabeçalho `Aceitar`:

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
