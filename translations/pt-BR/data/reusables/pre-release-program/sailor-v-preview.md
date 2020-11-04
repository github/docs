{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Observação:** Agora você pode usar a API REST para adicionar um motivo ao bloquear um problema e você verá as razões de bloqueio nas respostas que incluem problemas ou pull requests. Você também verá razões de bloqueio em eventos `bloqueados`. Esse recurso está atualmente disponível para pré-visualização dos desenvolvedores. Consulte o [post do blogue](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview) para obter informações completas. Para acessar este recurso, você deve fornecer um [tipo de mídia](/v3/media) personalizado no cabeçalho `Aceitar`:

```
application/vnd.github.sailor-v-preview+json
```

{% endnote %}
{% endif %}
