---
title: Atualizar tokens de acesso do usuário para servidor
intro: 'Para aplicar a rotação regular do token e reduzir o impacto de um token comprometido, você pode configurar seu {% data variables.product.prodname_github_app %} para usar tokens de acesso do usuário expirados.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - aplicativos github
---


{% data reusables.pre-release-program.expiring-user-access-tokens %}


### Sobre os tokens de acesso do usuário expirados

Para aplicar a rotação regular do token e reduzir o impacto de um token comprometido, você pode configurar seu {% data variables.product.prodname_github_app %} para usar tokens de acesso do usuário expirados. Para obter mais informações sobre como fazer solicitações de usuário para servidor, consulte "[Identificando e autorizando usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

Os tokens de usuário expiram após 8 horas. Ao receber um novo token de acesso do usuário para servidor, a resposta também conterá um token de atualização, que pode ser trocado por um novo token de usuário e token de atualização. Os tokens de atualização são válidos por 6 meses.

### Renovar um token de usuário com um token de atualização

Para renovar um token de acesso do usuário para servidor, você pode trocar o `refresh_token` por um novo token de acesso e por `refresh_token`.

  `POST https://github.com/login/oauth/access_token`

Esta solicitação de retorno de chamada enviará um novo token de acesso e um novo token de atualização.  Essa solicitação de retorno de chamada é semelhante à solicitação do OAuth que usaria para trocar um `código` temporário por um token de acesso. Para obter mais informações, consulte "[Identificando e autorizando usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)" e "[Princípios básicos da autenticação](/rest/guides/basics-of-authentication#providing-a-callback)".

#### Parâmetros

| Nome            | Tipo     | Descrição                                                                                                                                                                         |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refresh_token` | `string` | **Obrigatório.** O token gerado quando o proprietário do {% data variables.product.prodname_github_app %} habilita tokens expirados e emite um novo token de acesso do usuário. |
| `grant_type`    | `string` | **Obrigatório.** O valor deve ser `refresh_token` (exigido pela especificação do OAuth).                                                                                          |
| `client_id`     | `string` | **Obrigatório.** O ID do cliente para o seu {% data variables.product.prodname_github_app %}.                                                                                   |
| `client_secret` | `string` | **Obrigatório.** O segredo do cliente para o seu {% data variables.product.prodname_github_app %}.                                                                              |

#### Resposta

```json
{
  "access_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}",
  "expires_in": "28800",
  "refresh_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498{% else %}r1.c1b4a2e77838347a7e420ce178f2e7c6912e169246c34e1ccbf66c46812d16d5b1a9dc86a149873c{% endif %}",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
### Configurar tokens de usuário expirados para um aplicativo GitHub existente

Você pode habilitar ou desabilitar a expiração de tokens de autorização usuário para servidor nas suas configurações do {% data variables.product.prodname_github_app %}.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Clique em **Editar** próximo à sua escolha {% data variables.product.prodname_github_app %}. ![Configurações para edição de um aplicativo GitHub](/assets/images/github-apps/edit-test-app.png)
5. Na barra lateral esquerda, clique em **{% if currentVersion ver_lt "enterprise-server@3.1" %} Funcionalidades {% else %} Opcionais {% endif %} de Beta**.
  {% if currentVersion ver_lt "enterprise-server@3.1" %} ![Beta features tab](/assets/images/github-apps/beta-features-option.png) {% else %} ![Optional features tab](/assets/images/github-apps/optional-features-option.png) {% endif %}
6. Ao lado de "Expiração do token do usuário para o servidor", clique em **Participar** ou **Não participar**. Esta configuração pode levar alguns segundos para ser aplicada.

### Não participar dos tokens expirados para novos aplicativos do GitHub

Quando você cria um novo {% data variables.product.prodname_github_app %}, por padrão, seu aplicativo usará os tokens de acesso expirados do usuário para servidor.

Se você desejar que o seu aplicativo use tokens de acesso do usuário para servidor que não expiram, você pode desmarcar a opção "Expirar tokens de autorização do usuário" na página de configurações do aplicativo.

![Opção para expirar os tokens dos usuários durante a configuração dos aplicativos GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)

Os {% data variables.product.prodname_github_app %}s existentes que usam tokens de autorização de usuário para servidor são afetados apenas por este novo fluxo quando o proprietário do aplicativo habilita expirar tokens de usuário para seu aplicativo.

Habilitar a expiração de tokens de usuário para {% data variables.product.prodname_github_app %}s existentes exige o envio de usuários através do fluxo do OAuth para reemitir tokens de usuário que expirarão em 8 horas e fazer uma solicitação com o token de atualização para obter um novo token de acesso e token de atualização. Para obter mais informações, consulte "[Identificar e autorizar usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### Leia mais

- "[Sobre a autenticação em {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

{% endif %}
