{% ifversion fpt or ghec %}

{% note %}

**Observação:** Este artigo aplica-se a {% data variables.product.prodname_ghe_cloud %}. Para visualizar a versão de {% data variables.product.prodname_ghe_managed %} ou de {% data variables.product.prodname_ghe_server %}, use o menu suspenso **{% data ui.pages.article_version %}**.

{% endnote %}

{% endif %}

### URLs do ponto de extremidade

Pontos de extremidade da API REST{% ifversion ghes %}—exceto os pontos de extremidades da API REST do [Console de gerenciamento](#management-console) -{% endif %} são prefixados com a seguinte URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %}
Quando os pontos de extremidade incluirem `{enterprise}`, substitua `{enterprise}` pelo identificador da conta corporativa, que está incluído no URL das configurações da sua empresa. Por exemplo, se a sua conta corporativa estiver localizada em `https://github.com/enterprises/octo-enterprise`, substitua `{enterprise}` por `octo-enterprise`.
{% endif %}

{% ifversion ghes %}
Os endpoints de API [Console de gerenciamento](#management-console)  somente são prefixados com um nome de host:

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### Autenticação

Os endpoints de API da sua instalação do {% data variables.product.product_name %} aceitam [os mesmos métodos de autenticação](/rest/overview/resources-in-the-rest-api#authentication) da API do GitHub.com. Você pode efetuar a autenticação com **[tokens do OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(que podem ser criado usando a [API de Autorizações](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}ou **[autenticação básica](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% ifversion ghes %} Os tokens OAuth devem ter o `site_admin` [escopo OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) quando usados com endpoints específicos da Enterprise.{% endif %}

Os pontos de extremidade da API da administração da empresa podem ser acessados por administradores do site de {% data variables.product.product_name %}autenticados{% ifversion ghes %}, exceto a API do [Console de Gerenciamento](#management-console), que exige a [senha do console de gerenciamento](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Informações da versão

A versão atual da sua empresa é retornada no cabeçalho de resposta de cada API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` Você também pode ler a versão atual chamando o [ponto de extremidade de meta](/rest/reference/meta/).

{% endif %}