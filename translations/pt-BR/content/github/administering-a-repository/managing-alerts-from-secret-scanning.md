---
title: Gerenciando alertas do escaneamento secreto
intro: Você pode visualizar e fechar alertas de segredos verificados para seu repositório.
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### Gerenciando alertas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. Na barra lateral esquerda, clique em **Segredos detectados**. ![Aba "Segredos detectados" ](/assets/images/help/repository/sidebar-secrets.png)
4. Em "Escaneamento de segredos", clique no alerta que desejar visualizar. ![Lista de alertas do escaneamento secreto](/assets/images/help/repository/secret-scanning-click-alert.png)
5. Opcionalmente, use o menu suspenso "Resolver" e clique em um motivo para resolver um alerta. ![Menu suspenso para resolver um alerta do escaneamento de segredo](/assets/images/help/repository/secret-scanning-resolve-alert.png)

### Protegendo segredos comprometidos

Uma vez que um segredo tenha sido committed a um repositório, você deve considerar o segredo comprometido. O {% data variables.product.prodname_dotcom %} recomenda as seguintes ações para segredos comprometidos:

- Para um token de acesso pessoal do {% data variables.product.prodname_dotcom %}, exclua o token comprometido, crie outro token e atualize os serviços que usam o token antigo. Para obter mais informações, consulte "[Criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
- Para todos os outros segredos, primeiro, verifique se o segredo commited para {% data variables.product.prodname_dotcom %} é válido. Se sim, crie um novo segredo, atualize quaisquer serviços que utilizam o segredo antigo, e depois exclua o segredo antigo.
