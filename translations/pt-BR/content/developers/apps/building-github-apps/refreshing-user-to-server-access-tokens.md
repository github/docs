---
title: Atualizar tokens de acesso do usuário para servidor
intro: 'Para aplicar a rotação regular do token e reduzir o impacto de um token comprometido, você pode configurar seu {% data variables.product.prodname_github_app %} para usar tokens de acesso do usuário expirados.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Atualizar acesso do usuário-servidor
---

{% data reusables.pre-release-program.expiring-user-access-tokens %}

## Sobre os tokens de acesso do usuário expirados

Para aplicar a rotação regular do token e reduzir o impacto de um token comprometido, você pode configurar seu {% data variables.product.prodname_github_app %} para usar tokens de acesso do usuário expirados. Para obter mais informações sobre como fazer solicitações de usuário para servidor, consulte "[Identificando e autorizando usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

Os tokens de usuário expiram após 8 horas. Ao receber um novo token de acesso do usuário para servidor, a resposta também conterá um token de atualização, que pode ser trocado por um novo token de usuário e token de atualização. Os tokens de atualização são válidos por 6 meses.

## Renovar um token de usuário com um token de atualização

Para renovar um token de acesso do usuário para servidor, você pode trocar o `refresh_token` por um novo token de acesso e por `refresh_token`.

  `POST https://github.com/login/oauth/access_token`

Esta solicitação de retorno de chamada enviará um novo token de acesso e um novo token de atualização.  Essa solicitação de retorno de chamada é semelhante à solicitação do OAuth que usaria para trocar um `código` temporário por um token de acesso. Para obter mais informações, consulte "[Identificando e autorizando usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)" e "[Princípios básicos da autenticação](/rest/guides/basics-of-authentication#providing-a-callback)".

### Parâmetros

| Nome            | Tipo     | Descrição                                                                                                                                                                         |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refresh_token` | `string` | **Obrigatório.** O token gerado quando o proprietário do {% data variables.product.prodname_github_app %} habilita tokens expirados e emite um novo token de acesso do usuário. |
| `grant_type`    | `string` | **Obrigatório.** O valor deve ser `refresh_token` (exigido pela especificação do OAuth).                                                                                          |
| `client_id`     | `string` | **Obrigatório.** O ID do cliente para o seu {% data variables.product.prodname_github_app %}.                                                                                   |
| `client_secret` | `string` | **Obrigatório.** O segredo do cliente para o seu {% data variables.product.prodname_github_app %}.                                                                              |

### Resposta

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## Configurar tokens de usuário expirados para um aplicativo GitHub existente

Você pode habilitar ou desabilitar a expiração de tokens de autorização usuário para servidor nas suas configurações do {% data variables.product.prodname_github_app %}.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Clique em **Editar** próximo à sua escolha {% data variables.product.prodname_github_app %}. ![Configurações para edição de um aplicativo GitHub](/assets/images/github-apps/edit-test-app.png)
5. Na barra lateral esquerda, clique em **Funcionalidades opcionais**. ![Aba de funcionalidades opcionais](/assets/images/github-apps/optional-features-option.png)
6. Ao lado de "Expiração do token do usuário para o servidor", clique em **Participar** ou **Não participar**. Esta configuração pode levar alguns segundos para ser aplicada.

## Não participar dos tokens expirados para novos aplicativos do GitHub

Quando você cria um novo {% data variables.product.prodname_github_app %}, por padrão, seu aplicativo usará os tokens de acesso expirados do usuário para servidor.

Se você desejar que o seu aplicativo use tokens de acesso do usuário para servidor que não expiram, você pode desmarcar a opção "Expirar tokens de autorização do usuário" na página de configurações do aplicativo.

![Opção para expirar os tokens dos usuários durante a configuração dos aplicativos GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)

Os {% data variables.product.prodname_github_apps %} existentes que usa tokens de autorização de usuário para servidor só são afetados por este novo fluxo quando o proprietário do aplicativo habilita o vencimento de tokens de usuário para seu aplicativo.

Habilitar o vencimento de tokens de usuário para {% data variables.product.prodname_github_apps %} existentes exige o envio de usuários por meio do do fluxo do OAuth para reemitir tokens de usuário que vencerão em 8 horas e fazer uma solicitação com o token de atualização para obter um novo token de acesso e token de atualização. Para obter mais informações, consulte "[Identificar e autorizar usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

## Leia mais

- "[Sobre a autenticação em {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

