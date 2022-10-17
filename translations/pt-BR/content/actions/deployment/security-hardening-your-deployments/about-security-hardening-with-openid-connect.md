---
title: Sobre o enrijecimento de segurança com o OpenID Connect
shortTitle: About security hardening with OpenID Connect
intro: O OpenID Connect permite que seus fluxos de trabalho troquem tokens de curta duração diretamente do seu provedor da nuvem.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 23c541fa3c99b706877fc29c52174c404d5fca3d
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710264'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral do OpenID Connect

Os fluxos de trabalho de {% data variables.product.prodname_actions %} são geralmente projetados para acessar um provedor de nuvem (como AWS, Azure, GCP, ou HashiCorp Vault) para implantar o software ou usar os serviços da nuvem. Antes que o fluxo de trabalho possa acessar esses recursos, ele fornecerá credenciais para o provedor da nuvem, como uma senha ou token. Estas credenciais geralmente são armazenadas como um segredo em {% data variables.product.prodname_dotcom %}, e o fluxo de trabalho apresenta esse segredo para o provedor da nuvem toda vez que é executado. 

No entanto, usar segredos codificados exige que você crie credenciais no provedor de nuvem e, em seguida, duplique-as em {% data variables.product.prodname_dotcom %} como segredo. 

Com o OpenID Connect (OIDC), você pode adotar uma abordagem diferente configurando seu fluxo de trabalho para solicitar um token de acesso de curta duração diretamente do provedor da nuvem. Seu provedor de nuvem também precisa ser compatível com OIDC na sua extremidade, e você deve configurar um relacionamento de confiança que controla quais fluxos de trabalho podem solicitar os tokens de acesso. Os provedores que atualmente são compatíveis com o OIDC incluem o Amazon Web Services, Azure, Google Cloud Platform e HashiCorp Vault, entre outros.

### Benefícios de usar o OIDC

Ao atualizar seus fluxos de trabalho para usar tokens do OIDC, você pode adotar as seguintes práticas recomendadas de segurança:

- **Sem segredos na nuvem**: você não vai precisar duplicar suas credenciais da nuvem como segredos de longa duração do {% data variables.product.prodname_dotcom %}. Em vez disso, você pode configurar a confiança do OIDC no seu provedor de nuvem, e, em seguida, atualizar seus fluxos de trabalho para solicitar um token de acesso curto do provedor de nuvem por meio do OIDC. 
- **Gerenciamento de autenticação e de autorização**: você tem um mais controle granular sobre como os fluxos de trabalho podem usar as credenciais usando a autenticação do seu provedor de nuvem (authN) e as ferramentas de autorização (authZ) para controlar o acesso aos recursos na nuvem.
- **Rotação de credenciais**: com o OIDC, seu provedor de nuvem emite um token de acesso de curta duração que só é válido para uma execução de trabalho individual e, posteriormente, vence de modo automático.

### Introdução ao OIDC

O diagrama a seguir fornece uma visão geral de como o provedor OIDC de {% data variables.product.prodname_dotcom %} integra-se aos seus fluxos de trabalho e provedor de nuvem:

![Diagrama do OIDC](/assets/images/help/images/oidc-architecture.png)

1. No seu provedor de nuvem, crie uma confiança do OIDC entre a sua função na nuvem e o(s) seu(s) fluxo(s) de trabalho {% data variables.product.prodname_dotcom %} que precisam acessar a nuvem.
2. Toda vez que o seu trabalho é executado, o provedor OIDC de {% data variables.product.prodname_dotcom %} gera um token de OIDC automaticamente. Esse token contém várias reivindicações para estabelecer uma identidade de segurança reforçada e verificável sobre o fluxo de trabalho específico que está tentando autenticar.
3. Você pode incluir um passo ou ação no seu trabalho para solicitar este token do provedor do OIDC de {% data variables.product.prodname_dotcom %}, e apresentá-lo ao provedor da nuvem.
4. Uma vez que o provedor de nuvem valida as reivindicações apresentadas no token, ele irá fornecer, posteriormente, um token de acesso à nuvem de curta duração que está disponível apenas para a duração do trabalho.

## Configurando a confiança do OIDC com a nuvem

Ao configurar sua nuvem para confiar no provedor OIDC do {% data variables.product.prodname_dotcom %}, você **precisa** adicionar condições para filtrar as solicitações de entrada, de modo que os repositórios ou os fluxos de trabalho não confiáveis não possam solicitar tokens de acesso para seus recursos na nuvem:

- Antes de conceder um token de acesso, o provedor de nuvem verifica se as declarações de [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) e outras usadas para definir as condições nas respectivas configurações da relação de confiança correspondem àquelas do JWT (Token Web JSON) da solicitação. Como resultado, você precisa ter cautela para definir corretamente a _entidade_ e outras condições no provedor de nuvem.
- As etapas de configuração da relação de confiança do OIDC e a sintaxe para definir as condições para as funções de nuvem (usando a _Entidade_ e outras declarações) poderão variar dependendo do provedor de nuvem que estiver sendo usado. Para ver alguns exemplos, confira "[Exemplos de declarações de entidade](#example-subject-claims)".
 
### Entendendo o token do OIDC

Cada trabalho solicita um token do OIDC de {% data variables.product.prodname_dotcom %}, que responde com um token web do JSON gerado automaticamente (JWT) que é único para cada trabalho de fluxo de trabalho em que é gerado. Quando o trabalho é executado, o token de OIDC é apresentado ao provedor de nuvem. Para validar o token, o provedor de nuvem verifica se o assunto do token do OIDC e outras reivindicações correspondem às condições que foram pré-configuradas na definição de confiança do OIDC da função da nuvem.

O exemplo de token OIDC a seguir usa uma entidade (`sub`) que referencia um ambiente de trabalho chamado `prod` no repositório `octo-org/octo-repo`.

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

Para ver todas as declarações compatíveis com o provedor OIDC do {% data variables.product.prodname_dotcom %}, revise as entradas `claims_supported` em {% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %} https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

O token inclui as reivindicações padrão de audiência, emissor e assunto:

|    Declaração    | Descrição            |
| ----------- | ---------------------- |
| `aud`| _(Público-alvo)_ Por padrão, esta é a URL do proprietário do repositório, como a organização proprietária do repositório. Esta é a única reivindicação que pode ser personalizada. Defina um público-alvo personalizado com um comando de kit de ferramentas: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)          | 
| `iss`| _(Emissor)_ O emissor do token OIDC: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(Entidade)_ Define a declaração de entidade que deve ser validada pelo provedor de nuvem. Esta configuração é essencial para garantir que os tokens de acesso sejam apenas alocados de forma previsível.|

O token do OIDC também inclui reivindicações padrão adicionais:

|    Declaração    | Descrição            |
| ----------- | ---------------------- |
| `alg`| _(Algoritmo)_ O algoritmo usado pelo provedor OIDC.                    | 
| `exp`| _(Vence em)_ Identifica o tempo de validade do JWT.                    | 
| `iat`| _(Emitido em)_ A hora em que o JWT foi emitido.                   | 
| `jti`| _(Identificador do token JWT)_ Identificador exclusivo do token OIDC.                   | 
| `kid`| _(Identificador de chave)_ Chave exclusiva para o token OIDC.                   | 
| `nbf`| _(Não antes de)_ O JWT não é válido para uso antes deste horário.                   | 
| `typ`| _(Tipo)_ Descreve o tipo de token. Este é um token web do JSON (JWT).                   | 

O token também inclui reivindicações personalizadas fornecidas por {% data variables.product.prodname_dotcom %}:

|    Declaração    | Descrição            |
| ----------- | ---------------------- |
| `actor`| A conta pessoal que iniciou a execução do fluxo de trabalho.                   | 
| `actor_id`| A ID da conta pessoal que iniciou a execução do fluxo de trabalho.             |
| `base_ref`| O branch de destino do pull request na execução de um fluxo de trabalho.                   | 
| `environment`| O nome do ambiente usado pelo trabalho.                    | 
| `event_name`| Nome do evento que acionou a execução do fluxo de trabalho.                    | 
| `head_ref`| O branch de origem do pull request na execução de um fluxo de trabalho.                   | 
| `job_workflow_ref`| Este é o caminho ref para o fluxo de trabalho reutilizável usado por este trabalho. Para obter mais informações, confira "[Como usar o OpenID Connect com fluxos de trabalho reutilizáveis"](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows).                  | 
| `ref`| _(Referência)_ A referência do Git que disparou a execução de fluxo de trabalho.                   | 
| `ref_type`| O tipo de `ref`, por exemplo: "branch".                  | 
| `repo_visibility` | A visibilidade do repositório em que o fluxo de trabalho está sendo executado. Aceita os seguintes valores: `internal`, `private`, ou `public`.                   | 
| `repository`| O repositório de onde o fluxo de trabalho está sendo executado.                   | 
| `repository_id`| A ID do repositório do qual o fluxo de trabalho está sendo executado.  |
| `repository_owner`| O nome da organização na qual o `repository` é armazenado.                   | 
| `repository_owner_id`| A ID da organização na qual o `repository` é armazenado.            |
| `run_id`| O ID da execução do fluxo de trabalho que acionou o fluxo de trabalho.                   | 
| `run_number`| O número de vezes que este fluxo de trabalho foi executado.                   | 
| `run_attempt`| O número de vezes que este fluxo de trabalho foi executado.                    | 
| `workflow`| Nome do fluxo de trabalho.                   | 

### Definir condições de confiança em funções de nuvem usando as reivindicações do OIDC

Com o OIDC, um fluxo de trabalho de {% data variables.product.prodname_actions %} exige que um token acesse os recursos do provedor da nuvem. O fluxo de trabalho solicita um token de acesso do seu provedor de nuvem, que verifica os detalhes apresentados pelo JWT. Se a configuração de confiança no JWT tiver correspondência, o seu provedor de nuvem responderá emitindo um token temporário para o fluxo de trabalho, que poderá ser usado para acessar os recursos do seu provedor de nuvem. Você pode configurar seu provedor de nuvem para responder apenas a solicitações originárias de um repositório de uma organização específica. Você também pode especificar condições adicionais, descritas abaixo.

As reivindicações de Audiência e Assunto são normalmente usadas em combinação, ao definir as condições da função/recursos em nuvem para definir o escopo do seu acesso aos fluxos de trabalho do GitHub.
- **Público-alvo**: por padrão, esse valor usa a URL do proprietário da organização ou do repositório. Isto pode ser usado para definir uma condição para que apenas os fluxos de trabalho na organização específica possam acessar a função da nuvem.
- **Entidade**: por padrão, tem um formato predefinido e é uma concatenação de alguns dos principais metadados sobre o fluxo de trabalho, como a organização do {% data variables.product.prodname_dotcom %}, o repositório, o branch ou o ambiente [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) associado. Confira "[Exemplos de declarações de entidade](#example-subject-claims)" para ver como a declaração de entidade é montada com base em metadados concatenados.

Se você precisar de condições de confiança mais granulares, poderá personalizar as declarações do emissor (`iss`) e do assunto (`sub`) incluídas no JWT. Para obter mais informações, confira "[Personalizando as declarações de token](#customizing-the-token-claims)".

Há também muitas reivindicações adicionais compatíveis com o token do OIDC que podem ser usadas para definir essas condições. Além disso, seu provedor de nuvem poderia permitir que você atribuísse uma função aos tokens de acesso, permitindo que você especifique ainda mais permissões granulares.

{% note %}

**Observação**: para controlar como o provedor de nuvem emite os tokens de acesso, você **precisa** definir, pelo menos, uma condição, para que os repositórios não confiáveis não possam solicitar tokens de acesso aos seus recursos de nuvem.

{% endnote %}

### Exemplo de reivindicações de assunto

Os exemplos a seguir demonstram como usar "Assunto" como condição e explicam como o "Assunto" é montado a partir de metadados concatenados. A [entidade](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) usa as informações do [contexto `job`](/actions/learn-github-actions/contexts#job-context) e instrui o provedor de nuvem sobre o fato de as solicitações de token de acesso só poderem ser concedidas para solicitações de fluxos de trabalho em execução em branches e ambientes específicos. As seguintes secções descrevem alguns assuntos comuns que você pode usar.

#### Filtragem para um ambiente específico

A reivindicação de assunto inclui o nome do ambiente quando o trabalho fizer referência a um ambiente.

Você pode configurar uma entidade que filtra um nome de [ambiente](/actions/deployment/using-environments-for-deployment) específico. Neste exemplo, a execução de fluxo de trabalho precisa ter se originado de um trabalho que tenha um ambiente chamado `Production`, em um repositório chamado `octo-repo` que pertence à organização `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxe: | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| Exemplo:| `repo:octo-org/octo-repo:environment:Production`       |

#### Filtragem de eventos `pull_request`

A declaração de entidade inclui a cadeia de caracteres `pull_request` quando o fluxo de trabalho é disparado por um evento de solicitação de pull, mas apenas se o trabalho não referencia um ambiente.

Você pode configurar uma entidade que filtra o evento [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request). Neste exemplo, a execução de fluxo de trabalho precisa ter sido disparada por um evento `pull_request` em um repositório chamado `octo-repo` que pertence à organização `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxe: | `repo:<orgName/repoName>:pull_request`      | 
| Exemplo:| `repo:octo-org/octo-repo:pull_request`      |

#### Filtrando um branch específico

A reivindicação de assunto inclui o nome do branch do fluxo de trabalho, mas somente se o trabalho não fizer referência a um ambiente e se o fluxo de trabalho não for acionado por um evento de pull request.

Você pode configurar um assunto que filtra para um nome de branch específico. Neste exemplo, a execução de fluxo de trabalho precisa ter se originado de um branch chamado `demo-branch`, em um repositório chamado `octo-repo` que pertence à organização `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxe: | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| Exemplo:| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtrando uma tag específica

A reivindicação de assunto inclui o nome da tag do fluxo de trabalho, mas somente se o trabalho não fizer referência a um ambiente e se o fluxo de trabalho não for acionado por um evento de pull request.

Você pode criar um assunto que filtra uma tag específica. Neste exemplo, a execução de fluxo de trabalho precisa ter se originado com uma marca chamada `demo-tag`, em um repositório chamado `octo-repo` que pertence à organização `octo-org`:

|        |             |
| ------ | ----------- |
| Sintaxe: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| Exemplo:| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### Configurando o assunto no seu provedor de nuvem

Para configurar o assunto no relacionamento de confiança do seu provedor de nuvem, você deve adicionar a string de assunto à sua configuração de confiança. Os seguintes exemplos demonstram como vários provedores de nuvem podem aceitar a mesma entidade `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` de diferentes maneiras:

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| Cofre HashiCorp| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

Para obter mais informações, confira os guias listados em "[Como habilitar o OpenID Connect para seu provedor de nuvem](#enabling-openid-connect-for-your-cloud-provider)".

## Atualizando suas ações para o OIDC

Para atualizar as ações personalizadas e se autenticar usando o OIDC, use `getIDToken()` no kit de ferramentas do Actions para solicitar um JWT do provedor OIDC do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "Token OIDC" na [documentação do pacote npm](https://www.npmjs.com/package/@actions/core/v/1.6.0).

Use também um comando do `curl` para solicitar o JWT usando as seguintes variáveis de ambiente:

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | A URL para o provedor do OIDC de {% data variables.product.prodname_dotcom %}.      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Token portador para a solicitação para o provedor do OIDC.      |


Por exemplo:

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Adicionando configurações de permissões

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## Personalizando as declarações de token

Você pode proteger a segurança da configuração do OIDC personalizando as declarações incluídas no JWT. Essas personalizações permitem definir condições de confiança mais granulares em suas funções de nuvem ao permitir que seus fluxos de trabalho acessem recursos hospedados na nuvem:

{% ifversion ghec %} – Para uma camada adicional de segurança, você pode acrescentar a URL `issuer` com seu campo de dados dinâmico corporativo. Isso permite que você defina condições na declaração do emissor (`iss`), configurando-a para aceitar apenas tokens JWT de uma URL exclusiva `issuer` que deve incluir seu campo de dados dinâmico corporativo.{% endif %}
- Você pode padronizar a configuração do OIDC definindo as condições na declaração de assunto (`sub`) que exigem que os tokens JWT sejam originados de um repositório específico, fluxo de trabalho reutilizável ou de outra origem.
- Você pode definir políticas OIDC granulares usando declarações de token OIDC adicionais, como `repository_id` e `repo_visibility`. Para obter mais informações, confira "[Noções básicas sobre o token OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)".

Para personalizar esses formatos de declaração, os administradores de organização e repositório podem usar os pontos de extremidade da API REST descritos nas seções a seguir.

{% ifversion ghec %}

### Como alternar para uma URL de token exclusiva

Por padrão, o JWT é emitido pelo provedor OIDC do {% data variables.product.prodname_dotcom %} em `https://token.actions.githubusercontent.com`. Esse caminho é apresentado ao provedor de nuvem usando o valor `iss` no JWT.

Os administradores corporativos podem proteger a definição de OIDC deles configurando a empresa para receber tokens de uma URL exclusiva em `https://api.github.com/enterprises/<enterpriseSlug>/actions/oidc/customization/issuer`. Substitua `<enterpriseSlug>` pelo valor de campo de dados dinâmico da sua empresa. 

Essa configuração significa que sua empresa receberá o token OIDC de uma URL exclusiva e você poderá configurar seu provedor de nuvem para aceitar apenas tokens dessa URL. Isso ajuda a garantir que apenas os repositórios da empresa possam acessar seus recursos de nuvem usando o OIDC.

Para ativar essa configuração para sua empresa, um administrador corporativo deve usar o ponto de extremidade `/enterprises/{enterprise}/actions/oidc/customization/issuer` e especificar `"include_enterprise_slug": true` no corpo da solicitação. Para obter mais informações, confira "[Definir a política de emissor personalizada do OIDC de {% data variables.product.prodname_actions %} para uma empresa](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)".

Depois que essa configuração for aplicada, o JWT conterá o valor `iss` atualizado. No seguinte exemplo, a chave `iss` usa `octocat-inc` como o valor `enterpriseSlug`:

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

### Personalizando as declarações de assunto para uma organização

Para configurar a segurança, a conformidade e a padronização em toda a organização, você pode personalizar as declarações padrão para atender às condições de acesso necessárias. Se o provedor de nuvem der suporte a condições em declarações de assunto, você poderá criar uma condição que verifique se o valor `sub` corresponde ao caminho do fluxo de trabalho reutilizável, como `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`. O formato exato variará dependendo da configuração do OIDC do provedor de nuvem. Para configurar a condição correspondente no {% data variables.product.prodname_dotcom %}, você pode usar a API REST para exigir que a declaração `sub` sempre inclua uma declaração personalizada específica, como `job_workflow_ref`. Para obter mais informações, confira "[Definir o modelo de personalização para uma declaração de entidade OIDC para uma organização](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization)".

Personalizar as declarações resulta em um novo formato para toda a declaração `sub`, que substitui o formato predefinido padrão `sub` no token descrito em "[Declarações de entidade de exemplo](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)".

Os modelos de exemplo a seguir demonstram várias maneiras de personalizar a declaração de assunto. Para definir essas configurações no {% data variables.product.prodname_dotcom %}, os administradores da organização usam a API REST para especificar uma lista de declarações que devem ser incluídas na declaração de assunto (`sub`). {% data reusables.actions.use-request-body-api %}

Para personalizar suas declarações de assunto, primeiro você deve criar uma condição correspondente na configuração OIDC do provedor de nuvem, antes de personalizar a configuração usando a API REST. Depois que a configuração for concluída, cada vez que um novo trabalho for executado, o token OIDC gerado durante esse trabalho seguirá o novo modelo de personalização. Se a condição correspondente não existir na configuração OIDC do provedor de nuvem antes da execução do trabalho, o token gerado poderá não ser aceito pelo provedor de nuvem, pois as condições de nuvem podem não ser sincronizadas.

{% note %}

**Observação**: quando o modelo da organização é aplicado, ele não afetará nenhum repositório existente que já use o OIDC. Para repositórios existentes, bem como quaisquer novos repositórios criados após a aplicação do modelo, o proprietário do repositório precisará aceitar para receber essa configuração. Para obter mais informações, confira "[Definir o sinalizador de aceitação de uma personalização de declaração de entidade OIDC para um repositório](/rest/actions/oidc#set-the-opt-in-flag-of-an-oidc-subject-claim-customization-for-a-repository)".

{% endnote %}

#### Exemplo: permitir repositório com base na visibilidade e no proprietário

Este modelo de exemplo permite que a declaração `sub` tenha um novo formato, usando `repository_owner` e `repository_visibility`:

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

Na configuração do OIDC do provedor de nuvem, configure a `sub` condição para exigir que as declarações incluam valores específicos para `repository_owner` e `repository_visibility`. Por exemplo: `"repository_owner: "monalisa":repository_visibility:private"`. A abordagem permite restringir o acesso de função de nuvem a apenas repositórios privados em uma organização ou empresa.

#### Exemplo: permitindo acesso a todos os repositórios com um proprietário específico

Este modelo de exemplo permite que a declaração `sub` tenha um novo formato apenas com o valor de `repository_owner`. {% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

Na configuração do OIDC do provedor de nuvem, configure a condição `sub` para exigir que as declarações incluam um valor específico para `repository_owner`. Por exemplo: `"repository_owner: "monalisa""`

#### Exemplo: exigir um fluxo de trabalho reutilizável

Este modelo de exemplo permite que a declaração `sub` tenha um novo formato que contenha o valor da `job_workflow_ref` declaração. Isso permite que uma empresa use [fluxos de trabalho reutilizáveis](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) para impor implantações consistentes em nas organizações e nos repositórios dela.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

Na configuração do OIDC do provedor de nuvem, configure a condição `sub` para exigir que as declarações incluam um valor específico para `job_workflow_ref`. Por exemplo: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`.

#### Exemplo: exigir um fluxo de trabalho reutilizável e outras declarações

O modelo de exemplo a seguir combina o requisito de um fluxo de trabalho reutilizável específico com declarações adicionais. {% data reusables.actions.use-request-body-api %}

Este exemplo também demonstra como usar `"context"` para definir suas condições. Essa é a parte que segue o repositório no [formato `sub` padrão](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims). Por exemplo, quando o trabalho faz referência a um ambiente, o contexto traz: `environment:<environmentName>`.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

Na configuração do OIDC do provedor de nuvem, configure a condição `sub` para exigir que as declarações incluam valores específicos para `repo`, `context` e `job_workflow_ref`.

Este modelo de personalização exige que `sub` adote o seguinte formato: `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`. Por exemplo: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Exemplo: conceder acesso a um repositório específico

Este modelo de exemplo permite conceder acesso à nuvem a todos os fluxos de trabalho em um repositório específico, em todos os branches/marcas e ambientes. Para ajudar a melhorar a segurança, combine este modelo com a URL do emissor personalizada descrita em "[Personalizando a URL do token para uma empresa](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)". 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

Na configuração do OIDC do provedor de nuvem, configure a `sub` condição para exigir uma `repo` declaração que corresponda ao valor necessário.

#### Exemplo: usando GUIDs gerados pelo sistema

Este modelo de exemplo permite declarações OIDC previsíveis com GUIDs gerados pelo sistema que não mudam entre renomeações de entidades (como renomear um repositório). {% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

Na configuração do OIDC do provedor de nuvem, configure a `sub` condição para exigir uma declaração `repository_id` que corresponda ao valor necessário.

ou:

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

Na configuração do OIDC do provedor de nuvem, configure a `sub` condição para exigir uma declaração `repository_owner_id` que corresponda ao valor necessário.

#### Redefinindo suas personalizações

Este modelo de exemplo redefine as declarações de assunto para o formato padrão. {% data reusables.actions.use-request-body-api %} Esse modelo aceita efetivamente qualquer política de personalização no nível da organização.

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

Na configuração do OIDC do provedor de nuvem, configure a condição `sub` para exigir que as declarações incluam valores específicos para `repo` e `context`.

#### Como usar as declarações de entidade padrão

Para repositórios que podem receber uma política de declaração de assunto da sua organização, o proprietário do repositório pode optar por recusar e, em vez disso, usar o formato de declaração padrão `sub`. Para configurar isso, o administrador do repositório deve usar o ponto de extremidade da API REST em "[Definir o sinalizador de opt-out de uma personalização de declaração de entidade OIDC para um repositório](/rest/actions/oidc#set-the-opt-out-flag-of-an-oidc-subject-claim-customization-for-a-repository)" com o seguinte corpo da solicitação:

```json
{
   "use_default": true
}
```

{% endif %}

## Atualizando seus fluxos de trabalho para o OIDC

Agora você pode atualizar seus fluxos de trabalho do YAML para usar tokens de acesso do OIDC em vez de segredos. Os provedores de nuvem populares publicaram suas ações de login oficiais que facilitam o seu início de sessão com o OIDC. Para obter mais informações sobre como atualizar seus fluxos de trabalho, confira os guias específicos de nuvem listados abaixo em "[Como habilitar o OpenID Connect para seu provedor de nuvem](#enabling-openid-connect-for-your-cloud-provider)".


## Habilitnado o OpenID Connect para o seu provedor de nuvem

Para habilitar e configurar o OIDC para seu provedor de nuvem específico, veja os seguintes guias:

- ["Como configurar o OpenID Connect no Amazon Web Services"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- ["Como configurar o OpenID Connect no Azure"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- ["Como configurar o OpenID Connect no Google Cloud Platform"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- ["Como configurar o OpenID Connect no Hashicorp Vault"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

Para habilitar e configurar o OIDC para outro provedor de nuvem, consulte o guia a seguir:

- ["Como configurar o OpenID Connect em provedores da nuvem"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
