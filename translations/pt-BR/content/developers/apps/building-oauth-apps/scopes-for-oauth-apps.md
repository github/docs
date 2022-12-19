---
title: Escopos para aplicativos OAuth
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164361'
---
Ao configurar um aplicativo OAuth no GitHub, os escopos solicitados são exibidos para o usuário no formulário de autorização.

{% note %}

**Observação:** se você estiver criando um Aplicativo no GitHub, não precisará fornecer escopos na sua solicitação de autorização. Para obter mais informações sobre isso, confira "[Como identificar e autorizar usuários para Aplicativos do GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

{% endnote %}

Se seu {% data variables.product.prodname_oauth_app %} não tiver acesso a um navegador, como uma ferramenta de CLI, você não precisará especificar um escopo para que os usuários efetuem a autenticação no seu aplicativo. Para obter mais informações, confira "[Como autorizar Aplicativos OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

Verifique os cabeçalhos para ver quais escopos do OAuth você tem e o que a ação da API aceita:

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` lista os escopos autorizados pelo token.
* `X-Accepted-OAuth-Scopes` lista os escopos verificados pela ação.

## Escopos disponíveis

Nome   Descrição ----- ----------- {% ifversion not ghae %} **`(no scope)`**   Concede acesso somente leitura a informações públicas (incluindo informações de perfil do usuário, informações do repositório e gists){% endif %}{% ifversion ghes or ghae %} **`site_admin`**   Concede aos administradores do site acesso aos pontos de extremidade da API de Administração do [{% data variables.product.prodname_ghe_server %}](/rest/reference/enterprise-admin).{% endif %} **`repo`**   Concede acesso completo a repositórios públicos{% ifversion ghec or ghes or ghae %}, internos{% endif %} e privados, incluindo acesso de leitura e gravação a códigos, status de commit, convites de repositório, colaboradores, status de implantação e webhooks de repositório. **Observação**: além dos recursos relacionados ao repositório, o escopo do `repo` também concede acesso para gerenciar recursos de propriedade da organização, incluindo projetos, convites, associações de equipe e webhooks. Esse escopo também concede a capacidade de gerenciar projetos pertencentes aos usuários.
&emsp;`repo:status`| Permite o acesso de leitura/gravação para fazer commit de status em {% ifversion fpt %}repositórios públicos e privados{% elsif ghec or ghes %}público, privados e internos{% elsif ghae %}privados e internos{% endif %}. Esse escopo só é necessário para permitir a outros usuários ou serviços acesso aos status de commit de repositórios privados *sem* permitir acesso ao código.
&emsp;`repo_deployment`| Permite o acesso aos [status de implantação](/rest/reference/repos#deployments) de repositórios {% ifversion not ghae %}públicos{% else %}internos{% endif %} e privados. Esse escopo só é necessário para permitir a outros usuários ou serviços acesso aos status de implantação *sem* permitir acesso ao código.{% ifversion not ghae %} &emsp;`public_repo`| Limita o acesso aos repositórios públicos. Isso inclui acesso de leitura/gravação em código, status de commit, projetos de repositório, colaboradores e status de implantação de repositórios e organizações públicos. Também é necessário para os repositórios públicos marcados com estrela.{% endif %} &emsp;`repo:invite` | Permite a capacidade de aceitação/recusa de convites para colaboração em um repositório. Esse escopo só é necessário para permitir a outros usuários ou serviços acesso a convites *sem* permitir acesso ao código.{% ifversion fpt or ghes or ghec %} &emsp;`security_events` | Permite: <br/> acesso de leitura e gravação a eventos de segurança na [API de {% data variables.product.prodname_code_scanning %}](/rest/reference/code-scanning) {%- ifversion ghec %}<br/> acesso de leitura e gravação a eventos de segurança na [API de {% data variables.product.prodname_secret_scanning %}](/rest/reference/secret-scanning){%- endif %} <br/> Esse escopo só é necessário para permitir a outros usuários ou serviços acesso a eventos de segurança *sem* permitir acesso ao código.{% endif %} **`admin:repo_hook`** | Permite o acesso de leitura, gravação, ping e exclusão a ganchos de repositório em repositórios {% ifversion fpt %}públicos ou privados{% elsif ghec or ghes %}públicos, privados ou internos{% elsif ghae %}privados ou internos{% endif %}. Os escopos do `repo` {% ifversion fpt or ghec or ghes %}e do `public_repo` permitem{% else %}O escopo deles permite{% endif %} o acesso completo aos repositórios, incluindo ganchos de repositório. Use o escopo `admin:repo_hook` para limitar o acesso apenas aos ganchos de repositório.
&emsp;`write:repo_hook` | Permite o acesso de leitura, gravação e ping aos ganchos em repositórios {% ifversion fpt %}públicos ou privados{% elsif ghec or ghes %}públicos, privados ou internos{% elsif ghae %}privados ou internos{% endif %}.
&emsp;`read:repo_hook`| Permite o acesso de leitura e ping aos ganchos em repositórios {% ifversion fpt %}públicos ou privados{% elsif ghec or ghes %}públicos, privados ou internos{% elsif ghae %}privados ou internos{% endif %}.
**`admin:org`** | Gerencia por completo a organização e as respectivas equipes, projetos e associações.
&emsp;`write:org`| Acesso de leitura e gravação à associação à organização, aos projetos da organização e à associação à equipe.
&emsp;`read:org`| Acesso somente leitura à associação à organização, aos projetos da organização e à associação à equipe.
**`admin:public_key`** | Gerenciar por completo as chaves públicas.
&emsp;`write:public_key`| Criar, listar e ver detalhes das chaves públicas.
&emsp;`read:public_key`| Listar e ver detalhes das chaves públicas.
**`admin:org_hook`** | Permite o acesso de leitura, gravação, ping e exclusão de ganchos da organização. **Observação:** os tokens OAuth só poderão executar essas ações nos ganchos da organização que foram criados pelo Aplicativo OAuth. Os {% data variables.product.pat_generic_caps %} só poderão realizar essas ações nos hooks da organização criados por um usuário.
**`gist`** | Permite o acesso de gravação nos gists.
**`notifications`** | Permite: <br/>* o acesso de leitura às notificações de um usuário <br/>* acesso de marcação como lido em threads <br/>* acesso de inspeção e cancelamento de inspeção em um repositório e <br/>* acesso de leitura, gravação e exclusão em assinaturas de thread.
**`user`** | Permite o acesso de leitura/gravação apenas nas informações do perfil.  Observe que esse escopo inclui `user:email` e `user:follow`.
&emsp;`read:user`| Permite o acesso para ler as informações do perfil de um usuário.
&emsp;`user:email`| Permite o acesso de leitura nos endereços de email de um usuário.
&emsp;`user:follow`| Permite acesso para seguir ou deixar de seguir outros usuários.{% ifversion projects-oauth-scope %} **`project`** | Permite acesso de leitura/gravação a {% data variables.projects.projects_v2 %} de usuário e da organização (beta).
&emsp;`read:project`| Permite acesso somente leitura a {% data variables.projects.projects_v2 %} de usuário e da organização (beta).{% endif %} **`delete_repo`** | Permite acesso para excluir repositórios administráveis.
**`write:discussion`** | Permite o acesso de leitura e gravação para discussões em equipe.
&emsp;`read:discussion` | Permite o acesso de leitura para discussões em equipe.
**`write:packages`** | Concede acesso ao para fazer o upload ou publicação de um pacote no {% data variables.product.prodname_registry %}. Para obter mais informações, confira "[Como publicar um pacote](/github/managing-packages-with-github-packages/publishing-a-package)".
**`read:packages`** | Permite o acesso para baixar ou instalar pacotes do {% data variables.product.prodname_registry %}. Para obter mais informações, confira "[Como instalar um pacote](/github/managing-packages-with-github-packages/installing-a-package)".
**`delete:packages`** | Permite o acesso para excluir pacotes do {% data variables.product.prodname_registry %}. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)".
**`admin:gpg_key`** | Gerenciar completamente as chaves GPG.
&emsp;`write:gpg_key`| Criar, listar e ver detalhes das chaves GPG.
&emsp;`read:gpg_key`| Listar e ver detalhes das chaves GPG.{% ifversion fpt or ghec %} **`codespace`** | Permite a capacidade de criar e gerenciar codespaces. Os codespaces podem expor um GITHUB_TOKEN que pode ter um conjunto diferente de escopos. Para obter mais informações, confira "[Segurança nos {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)".{% endif %} **`workflow`** | Concede a capacidade de adicionar e atualizar arquivos de fluxo de trabalho do {% data variables.product.prodname_actions %}. Os arquivos do fluxo de trabalho podem ser confirmados sem este escopo se o mesmo arquivo (com o mesmo caminho e conteúdo) existir em outro branch no mesmo repositório. Os arquivos de fluxo de trabalho podem expor o `GITHUB_TOKEN` que pode ter um conjunto diferente de escopos. Para obter informações, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."{% ifversion not fpt %} **`admin:enterprise`** | Fornece controle completo de funcionalidade corporativo. Para obter mais informações, confira "[Gerenciar contas corporativas](/graphql/guides/managing-enterprise-accounts)" na documentação da API do GraphQL.<br><br>Inclui `manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}, `manage_billing:enterprise`,{% endif %} e `read:enterprise`. &emsp;`manage_runners:enterprise` | Fornece controle total sobre os corredores auto-hospedados dentro da empresa. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)". {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | Leia e grave dados de cobrança corporativos. Para obter mais informações, confira "[Cobrança](/rest/billing)" na documentação da API REST. {% endif %} &emsp;`read:enterprise` | Ler todos os dados em um perfil corporativo. Não inclui dados de perfil de organizações ou membros da empresa.{% endif %}{% ifversion read-audit-scope %} **`read:audit_log`** | Leia os dados do log de auditoria.{% endif %} {% note %}

**Observação:** seu Aplicativo OAuth pode solicitar os escopos no redirecionamento inicial. Você pode especificar vários escopos separando-os com um espaço usando `%20`:

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## Escopos solicitados e escopos concedidos

O atributo `scope` lista os escopos anexados ao token que foram concedido pelo usuário. Normalmente, estes escopos são idênticos aos que você solicitou.
No entanto, os usuários podem editar os respectivos escopos, permitindo, efetivamente, ao seu aplicativo menos acesso do que você solicitou originalmente. Além disso, os usuários podem editar os escopos do token depois que o fluxo do OAuth for concluído.
Você deve estar ciente dessa possibilidade e ajustar o comportamento do seu aplicativo de acordo.

É importante lidar com casos de erro em que um usuário opta por permitir menos acesso do que você solicitou originalmente. Por exemplo, os aplicativos podem alertar ou comunicar os usuários de que eles terão a funcionalidade reduzida ou não poderão realizar algumas ações.

Além disso, os aplicativos sempre podem enviar os usuários novamente por meio do fluxo para obter permissão adicional, mas não se esqueça de que os usuários sempre podem recusar isso.

Confira o [guia Conceitos básicos sobre autenticação](/guides/basics-of-authentication/), que fornece dicas sobre como lidar com escopos de token modificáveis.

## Escopos normalizados

Quando vários escopos são solicitados, o token é salvo com uma lista normalizada de escopos, descartando aqueles que estão implicitamente incluídos pelo escopo solicitado. Por exemplo, a solicitação de `user,gist,user:email` resultará em um token somente com os escopos `user` e `gist`, pois o acesso permitido com o escopo `user:email` está incluído no escopo `user`.
