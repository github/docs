{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% warning %}

**Aviso de Depreciação:** O atributo `token` está obsoleto em algumas respostas da API de Autorizações OAuth:
* Listar suas autorizações
* Obter uma autorização única
* Obter ou criar uma autorização para um aplicativo específico - `token` ainda é devolvido para "criar"
* Obter ou criar uma autorização para um aplicativo específico e impressão digital - `token` ainda é devolvido para "criar"
* Atualizar uma autorização existente

Para reduzir o impacto de remover o valor de `token`, a API de Autorização de OAuth inclui agora um novo atributo de solicitação (`fingerprint`), três novos atributos de resposta (`token_last_eight`, `hashed_token`, and `fingerprint`), e também o ponto de extremidade [Get or create an authorization for a specific app and fingerprint](/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint).

Esta funcionalidade tornou-se o padrão para todas as solicitações no dia 20 de abril de 2015. Por favor, veja [the blog post](https://developer.github.com/changes/2015-04-20-authorizations-api-response-changes-are-now-in-effect/) para maiores detalhes.

{% endwarning %}
{% endif %}
