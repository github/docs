---
title: Sobre o enrijecimento de segurança com o OpenID Connect
shortTitle: Sobre o enrijecimento de segurança com o OpenID Connect
intro: O OpenID Connect permite que seus fluxos de trabalho troquem tokens de curta duração diretamente do seu provedor da nuvem.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral do OpenID Connect

Os fluxos de trabalho de {% data variables.product.prodname_actions %} são geralmente projetados para acessar um provedor de nuvem (como AWS, Azure, GCP, ou HashiCorp Vault) para implantar o software ou usar os serviços da nuvem. Antes que o fluxo de trabalho possa acessar esses recursos, ele fornecerá credenciais para o provedor da nuvem, como uma senha ou token. Estas credenciais geralmente são armazenadas como um segredo em {% data variables.product.prodname_dotcom %}, e o fluxo de trabalho apresenta esse segredo para o provedor da nuvem toda vez que é executado.

No entanto, usar segredos codificados exige que você crie credenciais no provedor de nuvem e, em seguida, duplique-as em {% data variables.product.prodname_dotcom %} como segredo.

Com o OpenID Connect (OIDC), você pode adotar uma abordagem diferente configurando seu fluxo de trabalho para solicitar um token de acesso de curta duração diretamente do provedor da nuvem. Seu provedor de nuvem também precisa ser compatível com OIDC na sua extremidade, e você deve configurar um relacionamento de confiança que controla quais fluxos de trabalho podem solicitar os tokens de acesso. Os provedores que atualmente são compatíveis com o OIDC incluem o Amazon Web Services, Azure, Google Cloud Platform e HashiCorp Vault, entre outros.

### Benefícios de usar o OIDC

Ao atualizar seus fluxos de trabalho para usar tokens do OIDC, você pode adotar as seguintes práticas recomendadas de segurança:

- **Sem segredos na nuvem**: Você não vai precisar duplicar suas credenciais da nuvem como segredos de {% data variables.product.prodname_dotcom %} de longa duração. Em vez disso, você pode configurar a confiança do OIDC no seu provedor de nuvem, e, em seguida, atualizar seus fluxos de trabalho para solicitar um token de acesso curto do provedor de nuvem por meio do OIDC.
- **Autenticação e gestão de autorização**: Você tem mais controle granular sobre como fluxos de trabalho podem usar credenciais, usando a autenticação de seu provedor de nuvem (authN) e ferramentas de autorização (authZ) para controlar o acesso a recursos na nuvem.
- **Girando credenciais**: Com o OIDC, seu provedor de nuvem emite um token de acesso de curta duração que só é válido para uma única execução de um trabalho e, posteriormente, vence automaticamente.

### Introdução ao OIDC

O diagrama a seguir fornece uma visão geral de como o provedor OIDC de {% data variables.product.prodname_dotcom %} integra-se aos seus fluxos de trabalho e provedor de nuvem:

![Diagrama do OIDC](/assets/images/help/images/oidc-architecture.png)

1. No seu provedor de nuvem, crie uma confiança do OIDC entre a sua função na nuvem e o(s) seu(s) fluxo(s) de trabalho {% data variables.product.prodname_dotcom %} que precisam acessar a nuvem.
2. Toda vez que o seu trabalho é executado, o provedor OIDC de {% data variables.product.prodname_dotcom %} gera um token de OIDC automaticamente. Esse token contém várias reivindicações para estabelecer uma identidade de segurança reforçada e verificável sobre o fluxo de trabalho específico que está tentando autenticar.
3. Você pode incluir um passo ou ação no seu trabalho para solicitar este token do provedor do OIDC de {% data variables.product.prodname_dotcom %}, e apresentá-lo ao provedor da nuvem.
4. Uma vez que o provedor de nuvem valida as reivindicações apresentadas no token, ele irá fornecer, posteriormente, um token de acesso à nuvem de curta duração que está disponível apenas para a duração do trabalho.

## Configurando a confiança do OIDC com a nuvem

Ao configurar sua nuvem para confiar no provedor do OIDC de {% data variables.product.prodname_dotcom %}, você **deve** adicionar condições para filtrar as solicitações de entrada, para que os repositórios ou fluxos de trabalho não confiáveis não possam solicitar acesso aos tokens para seus recursos na nuvem:

- Antes de conceder um token de acesso, o seu provedor da nuvem verifica se o [`assunto`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) e outras reivindicações usadas para definir condições nas suas configurações de confiança correspondem às do token web do JSON da solicitação (JWT). Como resultado, você deve ter cuidado para definir corretamente o _assunto_ e outras condições no seu provedor de nuvem.
- As etapas de configuração de confiança xo OIDC e a sintaxe para definir condições para as funções da nuvem (usando_Assunto_ e outras reivindicações) variarão dependendo do provedor de nuvem que você estiver usando. Para obter alguns exemplos, consulte "[Exemplo de reivindicações do assunto](#example-subject-claims)".

### Entendendo o token do OIDC

Cada trabalho solicita um token do OIDC de {% data variables.product.prodname_dotcom %}, que responde com um token web do JSON gerado automaticamente (JWT) que é único para cada trabalho de fluxo de trabalho em que é gerado. Quando o trabalho é executado, o token de OIDC é apresentado ao provedor de nuvem. Para validar o token, o provedor de nuvem verifica se o assunto do token do OIDC e outras reivindicações correspondem às condições que foram pré-configuradas na definição de confiança do OIDC da função da nuvem.

O exemplo a seguir do token do OIDC usa um assunto (`sub`) que faz referência a um ambiente de trabalho chamado `prod` no repositório `octo-org/octo-repo`.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repo_visibility": private,
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

Para ver todas as reivindicações compatíveis com o provedor do OIDC de {% data variables.product.prodname_dotcom %}, revise as entradas `claims_supported` em
{% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %}https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

O token inclui as reivindicações padrão de audiência, emissor e assunto:

| Reivindicação                                                                                                            | Descrição                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aud`                                                                                                                    | _(Audiência)_ por padrão, esta é a URL do proprietário do repositório, como a organização proprietária do repositório. Esta é a única reivindicação que pode ser personalizada. Você pode definir um público personalizado com um comando de conjunto de ferramentas: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0) |
| `iss`                                                                                                                    | _(Emissor)_ O emissor do token do OIDC:                                                                                                                                                                                                                                                                                                                  |
| {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %} |                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                          |
| `sub`                                                                                                                    | _(Assunto)_ Define o assunto indicado para ser validado pelo provedor da nuvem. Esta configuração é essencial para garantir que os tokens de acesso sejam apenas alocados de forma previsível.                                                                                                                                                           |

O token do OIDC também inclui reivindicações padrão adicionais:

| Reivindicação | Descrição                                                                    |
| ------------- | ---------------------------------------------------------------------------- |
| `alg`         | _(Algoritmo)_ O algoritmo usado pelo provedor do OIDC.                       |
| `exp`         | _(Vence em)_ identifica o tempo de validade do JWT.                          |
| `iat`         | _(Emitido em)_ O momento em que o JWT foi emitido.                           |
| `jti`         | _(Identificador do token JWT)_ identificador exclusivo para o token do OIDC. |
| `kid`         | _(Identificador da chave)_ Chave única para o token do OIDC.                 |
| `nbf`         | _(Não antes)_ O JWT não é válido para uso antes desta vez.                   |
| `typ`         | _(Tipo)_ Descreve o tipo de token. Este é um token web do JSON (JWT).        |

O token também inclui reivindicações personalizadas fornecidas por {% data variables.product.prodname_dotcom %}:

| Reivindicação         | Descrição                                                                                                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actor`               | A conta pessoal que iniciou a execução do fluxo de trabalho.                                                                                                                                                                                                                                       |
| `actor_id`            | O ID da conta pessoal que iniciou a execução do fluxo de trabalho.                                                                                                                                                                                                                                 |
| `base_ref`            | O branch de destino do pull request na execução de um fluxo de trabalho.                                                                                                                                                                                                                           |
| `ambiente`            | O nome do ambiente usado pelo trabalho.                                                                                                                                                                                                                                                            |
| `event_name`          | Nome do evento que acionou a execução do fluxo de trabalho.                                                                                                                                                                                                                                        |
| `head_ref`            | O branch de origem do pull request na execução de um fluxo de trabalho.                                                                                                                                                                                                                            |
| `job_workflow_ref`    | Este é o caminho ref para o fluxo de trabalho reutilizável usado por este trabalho. Para obter mais informações, consulte "["Usando o OpenID Connect com fluxos de trabalho reutilizáveis"](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows). |
| `ref`                 | _(Referência)_ A ref do git que acionou a execução do fluxo de trabalho.                                                                                                                                                                                                                           |
| `ref_type`            | O tipo de `ref`, por exemplo: "branch".                                                                                                                                                                                                                                                            |
| `repo_visibility`     | A visibilidade do repositório onde o fluxo de trabalho está em execução. Aceita os seguintes valores: `interno`, `privado` ou `público`.                                                                                                                                                           |
| `repositório`         | O repositório de onde o fluxo de trabalho está sendo executado.                                                                                                                                                                                                                                    |
| `repository_id`       | O ID do repositório de onde o fluxo de trabalho está sendo executado.                                                                                                                                                                                                                              |
| `repository_owner`    | O nome da organização em que o `repositório` é armazenado.                                                                                                                                                                                                                                         |
| `repository_owner_id` | O ID da organização em que o `repositório` é armazenado.                                                                                                                                                                                                                                           |
| `run_id`              | O ID da execução do fluxo de trabalho que acionou o fluxo de trabalho.                                                                                                                                                                                                                             |
| `run_number`          | O número de vezes que este fluxo de trabalho foi executado.                                                                                                                                                                                                                                        |
| `run_attempt`         | O número de vezes que este fluxo de trabalho foi executado.                                                                                                                                                                                                                                        |
| `fluxo de trabalho`   | Nome do fluxo de trabalho.                                                                                                                                                                                                                                                                         |

### Definir condições de confiança em funções de nuvem usando as reivindicações do OIDC

Com o OIDC, um fluxo de trabalho de {% data variables.product.prodname_actions %} exige que um token acesse os recursos do provedor da nuvem. O fluxo de trabalho solicita um token de acesso do seu provedor de nuvem, que verifica os detalhes apresentados pelo JWT. Se a configuração de confiança no JWT tiver correspondência, o seu provedor de nuvem responderá emitindo um token temporário para o fluxo de trabalho, que poderá ser usado para acessar os recursos do seu provedor de nuvem. Você pode configurar seu provedor de nuvem para responder apenas a solicitações originárias de um repositório de uma organização específica. Você também pode especificar condições adicionais, descritas abaixo.

As reivindicações de Audiência e Assunto são normalmente usadas em combinação, ao definir as condições da função/recursos em nuvem para definir o escopo do seu acesso aos fluxos de trabalho do GitHub.
- **Audiência**: Por padrão, esse valor usa a URL do proprietário da organização ou do repositório. Isto pode ser usado para definir uma condição para que apenas os fluxos de trabalho na organização específica possam acessar a função da nuvem.
- **Assunto**: Por padrão, tem um formato predefinido e é uma concatenação de alguns dos metadados da chave sobre o fluxo de trabalho como, por exemplo, a organização, repositório, branch de {% data variables.product.prodname_dotcom %} ou [`trabalho`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) associado. Consulte "[Exemplo de assunto reivindica](#example-subject-claims)" para ver como a reivindicação de assunto é montada a partir de metadados concatenados.

Se você precisa de mais condições de confiança granulares, você pode personalizar o emissor (`iss`) e as reivindicações do assunto (`sub`) que estão incluídas no JWT. Para obter mais informações, consulte "[Personalizando as reivindicações do token](#customizing-the-token-claims)".

Há também muitas reivindicações adicionais compatíveis com o token do OIDC que podem ser usadas para definir essas condições. Além disso, seu provedor de nuvem poderia permitir que você atribuísse uma função aos tokens de acesso, permitindo que você especifique ainda mais permissões granulares.

{% note %}

**Observação**: Para controlar como seu provedor de nuvem emite tokens de acesso, você **deve** definir pelo menos uma condição, para que os repositórios não confiáveis não possam solicitar tokens de acesso para seus recursos na nuvem.

{% endnote %}

### Exemplo de reivindicações de assunto

Os exemplos a seguir demonstram como usar "Assunto" como condição e explicam como o "Assunto" é montado a partir de metadados concatenados. O [assunto](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) usa informações do contexto [trabalho`` trabalho da execução do fluxo de trabalho](/actions/learn-github-actions/contexts#job-context) e orienta o seu provedor na nuvem que as solicitações do token de acesso só podem ser concedidas para solicitações de fluxos de trabalho em execução em branches e ambientes específicos. As seguintes secções descrevem alguns assuntos comuns que você pode usar.

#### Filtragem para um ambiente específico

A reivindicação de assunto inclui o nome do ambiente quando o trabalho fizer referência a um ambiente.

Você pode configurar um assunto que filtra um nome de [ambiente](/actions/deployment/using-environments-for-deployment) específico. Neste exemplo, a execução do fluxo de trabalho deve ter sido originada de um trabalho que com um ambiente denominado `Produção`, em um repositório denominado `octo-repo` que pertence à organização `octo-org`:

|          |                                                                     |
| -------- | ------------------------------------------------------------------- |
| Sintaxe: | `repo:<orgName/repoName>:environment:<environmentName>` |
| Exemplo: | `repo:octo-org/octo-repo:environment:Production`                    |

#### Filtrando eventos `pull_request`

A reivindicação do titular inclui a string `pull_request` quando o fluxo de trabalho é acionado por um evento de pull request, mas apenas se o trabalho não fizer referência a um ambiente.

Você pode configurar um assunto que filtra o evento [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request). Neste exemplo, a execução do fluxo de trabalho deve ter sido acionada por um evento `pull_request` em um repositório denominado `octo-repo` que pertence à organização `octo-org`:

|          |                                              |
| -------- | -------------------------------------------- |
| Sintaxe: | `repo:<orgName/repoName>:pull_request` |
| Exemplo: | `repo:octo-org/octo-repo:pull_request`       |

#### Filtrando um branch específico

A reivindicação de assunto inclui o nome do branch do fluxo de trabalho, mas somente se o trabalho não fizer referência a um ambiente e se o fluxo de trabalho não for acionado por um evento de pull request.

Você pode configurar um assunto que filtra para um nome de branch específico. Neste exemplo, a execução do fluxo de trabalho deve sido originada de um branch denominado `demo-branch`, em um repositório denominado `octo-repo` que pertence à organização `octo-org`:

|          |                                                           |
| -------- | --------------------------------------------------------- |
| Sintaxe: | `repo:<orgName/repoName>:ref:refs/heads/branchName` |
| Exemplo: | `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtrando uma tag específica

A reivindicação de assunto inclui o nome da tag do fluxo de trabalho, mas somente se o trabalho não fizer referência a um ambiente e se o fluxo de trabalho não for acionado por um evento de pull request.

Você pode criar um assunto que filtra uma tag específica. Neste exemplo, a execução do fluxo de trabalho deve ter sido originada com uma tag denominada `demo-tag` em um repositório denominado `octo-repo` que pertence à organização `octo-org`:

|          |                                                               |
| -------- | ------------------------------------------------------------- |
| Sintaxe: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>` |
| Exemplo: | `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`              |

### Configurando o assunto no seu provedor de nuvem

Para configurar o assunto no relacionamento de confiança do seu provedor de nuvem, você deve adicionar a string de assunto à sua configuração de confiança. Os exemplos a seguir demonstram como vários provedores de nuvem podem aceitar o mesmo assunto `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` de diferentes maneiras:

|                       |                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Amazon Web Services   | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |
| Azure                 | `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`                                                                                                               |
| Google Cloud Platform | `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`                                                                                            |
| HashiCorp Vault       | `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`                                                                                               |

Para obter mais informações, consulte os guias listados em "[Habilitando o OpenID Connect para o seu provedor de nuvem](#enabling-openid-connect-for-your-cloud-provider)".

## Atualizando suas ações para o OIDC

Para atualizar suas ações personalizadas e efetuar a autenticação usando o OIDC, você pode usar `getIDToken()` no kit de ferramentas de ações para solicitar um JWT do provedor OIDC de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "Token do OIDC" na [documentação de pacote npm](https://www.npmjs.com/package/@actions/core/v/1.6.0).

Você também pode usar um comando `curl` para solicitar o JWT, usando as seguintes variáveis de ambiente:

|                                  |                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------ |
| `ACTIONS_ID_TOKEN_REQUEST_URL`   | A URL para o provedor do OIDC de {% data variables.product.prodname_dotcom %}. |
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Token portador para a solicitação para o provedor do OIDC.                     |


Por exemplo:

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Adicionando configurações de permissões

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## Personalizando as reivindicações de token

Você pode garantir a segurança da sua configuração do OIDC personalizando as reivindicações incluídas com a JWT. Essas personalizações permitem que você defina mais condições de confiança granulares nas suas funções de nuvem ao permitir que seus fluxos de trabalho acessem os recursos hospedados na nuvem:

{% ifversion ghec %} - Para uma camada adicional de segurança, é possível acrescentar a url do `emissor` ao slug da sua empresa. Isso permite que você defina condições na reivindicação do emissor (`iss`), configurando-o para aceitar apenas tokens JWT de uma URL única de `emissor` que deve incluir o slug corporativo.{% endif %}
- Você pode padronizar sua configuração do OIDC definindo condições na reivindicação do assunto (`sub`) que exigem que os tokens do JWT se originem a partir de um repositório específico, fluxo de trabalho reutilizável ou outra fonte.
- Você pode definir políticas granulares do OIDC usando reivindicações adicionais de token do OIDC, como `repository_id` e `repo_visibility`. Para obter mais informações, consulte "[Compreendendo o token do OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)".

Para personalizar estes formatos de reivindicação, os administradores da organização e do repositório podem usar os pontos de extremidade da API REST descritos nas seguintes seções.

{% ifversion ghec %}

### Mudando para um URL único de token

Por padrão, o JWT é emitido pelo provedor de OIDC de {% data variables.product.prodname_dotcom %} em `https://token.actions.githubusercontent.com`. Esse caminho é apresentado ao seu provedor de nuvem usando o valor de `iss` no JWT.

Os administradores da empresa podem fortalecer a configuração do OIDC, configurando as suas empresas para receber tokens de um URL único em `https://api. ithub.com/enterprises/<enterpriseSlug>/actions/oidc/customization/issuer`. Substitua `<enterpriseSlug>` pelo valor slug da sua empresa.

Essa configuração significa que sua empresa receberá o token do OIDC de uma URL exclusiva, e você poder, a em seguida, configurar seu provedor de nuvem para aceitar apenas tokens dessa URL. Isso ajuda a garantir que apenas os repositórios da empresa podem acessar seus recursos na nuvem usando OIDC.

Para ativar essa configuração para sua empresa, um administrador da empresa deve usar o ponto de extremidade `/enterprises/{enterprise}/actions/oidc/customization/issuer` e especificar `"include_enterprise_slug": true` no texto da solicitação. Para obter mais informações, consulte "[Definir a política do emissor personalizado do OIDC de {% data variables.product.prodname_actions %} para uma empresa](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)".

Depois que esta configuração for aplicada, o JWT conterá o valor atualizado de `iss`. No exemplo a seguir, a chave `iss` usa `octocat-inc` como seu valor de `enterpriseSlug`:

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://api.github.com/enterprises/octocat-inc/actions/oidc/customization/issuer",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### Personalizando as reivindicações de assunto para uma organização

Para configurar a segurança, conformidade e padronização em toda a organização, você pode personalizar as reivindicações padrão que atendem às suas condições de acesso necessárias. Se seu provedor de nuvem é compatível com condições para reivindicações de objetos, você pode criar uma condição que verifica se o valor `sub` corresponde ao caminho do fluxo de trabalho reutilizável, como `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`. O formato exato irá variar dependendo da configuração do OIDC do seu provedor de nuvem. Para configurar a condição de correspondência em {% data variables.product.prodname_dotcom %}, você pode usar a API REST para exigir que a reivindicação do `sub` deva sempre incluir uma reivindicação personalizada, como `job_workflow_ref`. Para obter mais informações, consulte "[Definir o modelo de personalização para uma reivindicação de assunto do OIDC para uma organização](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization)".

A personalização das reivindicações resulta em um novo formato para toda a reivindicação `sub`, que substitui o formato padrão `sub` no token descrito em "[Exemplo de reivindicações de assunto](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)".

Os modelos de exemplo a seguir demonstram várias maneiras de personalizar a reivindicação de assunto. Para configurar estas configurações em {% data variables.product.prodname_dotcom %}, os administradores da organização usam a API REST para especificar uma lista de reclamações que devem ser incluídas no assunto (`sub`) da reclamação. {% data reusables.actions.use-request-body-api %}

Para personalizar suas reivindicações de assunto, você deve primeiro criar uma condição de correspondência na configuração do OIDC do seu provedor de nuvem, antes de personalizar a configuração usando a API REST. Uma vez que a configuração estiver concluída, cada vez que um novo trabalho for executado, o token do OIDC gerado durante aquele trabalho seguirá o novo modelo de personalização. Se a condição de correspondência não existir na configuração do OIDC do provedor de nuvem antes de o trabalho ser executado, o token gerado poderá não ser aceito pelo provedor da nuvem, já que as condições da nuvem podem não ser sincronizadas.

{% note %}

**Observação**: Quando o modelo de organização é aplicado, ele não afetará nenhum repositório existente que já usa o OIDC. Para os repositórios existentes e para os novos criados depois que o modelo for aplicado, o proprietário do repositório deverá optar por receber esta configuração. Para obter mais informações, consulte "[Definir o sinalizador da opção de participação da personalização da reivindicação de assunto do OIDC para um repositório](/rest/actions/oidc#set-the-opt-in-flag-of-an-oidc-subject-claim-customization-for-a-repository)".

{% endnote %}

#### Exemplo: Permitir o repositório com base na visibilidade e no proprietário

Este modelo de exemplo permite que a reivnidicação do `sub` tenha um novo formato, usando `repository_owner` e `repository_visibility`:

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

Na configuração OIDC do seu provedor de nuvem, configure a condição `sub` para exigir que as reivindicações inculam valores específicos para `repository_owner` e `repository_visibility`. Por exemplo: `"repository_owner: "monalisa":repository_visibility:private"`. A abordagem permite restringir o acesso a funções na nuvem apenas a repositórios privados de uma organização ou empresa.

#### Exemplo: Permitir acesso a todos os repositórios com um proprietário específico

Este modelo de exemplo permite que a reivindicação do `sub` tenha um novo formato com apenas o valor de `repository_owner`. {% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

Na configuração OIDC do seu provedor de nuvem, configure a condição `sub` para exigir que as reivindicações incluam um valor específico para `repository_owner`. Por exemplo: `"repository_owner: "monalisa""`

#### Exemplo: Exigindo um fluxo de trabalho reutilizável

Este modelo de exemplo permite que a reivindicação do `sub` tenha um novo formato que contenha o valor da reivindicação `job_workflow_ref`. Isso permite que uma empresa use [fluxos de trabalho reutilizáveis](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) para aplicar implantações consistentes em suas organizações e repositórios.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

Na configuração OIDC do seu provedor de nuvem, configure a condição `sub` para exigir que as reivindicações incluam um valor específico para `job_workflow_ref`. Por exemplo: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`.

#### Exemplo: Exigindo um fluxo de trabalho reutilizável e outras reivindicações

O modelo de exemplo a seguir combina a exigência de um fluxo de trabalho reutilizável específico com reivindicações adicionais. {% data reusables.actions.use-request-body-api %}

Este exemplo também demonstra como usar `"contexto"` para definir suas condições. Essa é a parte que segue o repositório no formato [padrão `sub` padrão](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims). Por exemplo, quando o trabalho faz referência a um ambiente, o contexto contém: ambiente `:<environmentName>`.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

Na configuração OIDC do seu provedor de nuvem, configure a condição `sub` para exigir que as reivindicações inculam valores específicos para `repo`, `context` e `job_workflow_ref`.

Este modelo de personalização exigue que o `sub` use o seguinte formato: `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`. Por exemplo: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Exemplo: Conceder acesso a um repositório específico

Este modelo de exemplo permite conceder acesso na nuvem a todos os fluxos de trabalho em um repositório específico, em todos os branches, tags e ambientes. Para ajudar a melhorar a segurança, combine este modelo com a URL do emissor personalizado descrita em "[Personalizando a URL do token para uma empresa](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)."

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

Na configuração do OIDC do seu provedor de nuvem, configure a condição `sub` para exigir uma reivindicação de `repositório` que corresponda ao valor necessário.

#### Exemplo: Usando GUIDs gerados pelo sistema

Este modelo de exemplo habilita as reivindicações previsíveis do OIDC com GUIDs geradas pelo sistema que não mudam entre renomeações de entidades (como renomear um repositório). {% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

Na configuração do OIDC do seu provedor de nuvem, configure a condição `sub` para exigir a reivindicação de `repository_id` que corresponde ao valor necessário.

ou:

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

Na configuração do OIDC do seu provedor de nuvem, configure a condição `sub` para exigir uma reivindicação de `repository_owner_id` que corresponde ao valor necessário.

#### Redefinindo suas personalizações

Este modelo de exemplo redefine as reivindicações de assunto para o formato padrão. {% data reusables.actions.use-request-body-api %} Este modelo efetivamente opta por não participar de qualquer política de personalização no nível da organização.

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

Na configuração do OIDC do seu provedor de nuvem, configure a condição `sub` para exigir que as reivindicações incluam valores específicos para `repo` e `contexto`.

#### Usando as reivindicações de assunto padrão

Para repositórios que podem receber uma política de reivindicação de assuntos da sua organização, o proprietário do repositório pode optar por não participar e, em vez disso, usar o formato padrão `sub` para solicitação. Para configurar isso, o administrador do repositório deve usar o ponto de extremidade da API REST em"[Definir o sinalizador para não participar da personalização da reivindicação de assunto do OIDC para um repositório](/rest/actions/oidc#set-the-opt-out-flag-of-an-oidc-subject-claim-customization-for-a-repository)" com o seguinte texto de solicitação:

```json
{
   "use_default": true
}
```

{% endif %}

## Atualizando seus fluxos de trabalho para o OIDC

Agora você pode atualizar seus fluxos de trabalho do YAML para usar tokens de acesso do OIDC em vez de segredos. Os provedores de nuvem populares publicaram suas ações de login oficiais que facilitam o seu início de sessão com o OIDC. Para obter mais informações sobre a atualização dos seus fluxos de trabalho, consulte os guias específicos da nuvem listados abaixo em "[Habilitando o OpenID Connect para o seu provedor de nuvem](#enabling-openid-connect-for-your-cloud-provider)".


## Habilitnado o OpenID Connect para o seu provedor de nuvem

Para habilitar e configurar o OIDC para seu provedor de nuvem específico, veja os seguintes guias:

- ["Configurando o OpenID Connect no Amazon Web Services"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- ["Configurando o OpenID Connect no Azure"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- ["Configurando OpenID Connect na Google Cloud Platform"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- ["Configurando o OpenID Connect no Hashicorp Vault"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

Para habilitar e configurar o OIDC para outro provedor de nuvem, consulte o guia a seguir:

- ["Configurando OpenID Connect em provedores da nuvem"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
