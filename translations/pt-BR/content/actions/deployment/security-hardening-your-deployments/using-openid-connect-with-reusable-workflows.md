---
title: Usando o OpenID Connect com fluxos de trabalho reutilizáveis
shortTitle: Usando o OpenID Connect com fluxos de trabalho reutilizáveis
intro: Você pode usar fluxos de trabalho reutilizáveis com o OIDC para padronizar e melhorar as suas etapas de implantação.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/using-oidc-with-your-reusable-workflows
versions:
  fpt: '*'
  ghae: issue-4757
  ghec: '*'
  ghes: '>=3.5'
type: how_to
topics:
  - Workflows
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre fluxos de trabalho reutilizáveis

Em vez de copiar e colar trabalhos de implantação de um fluxo de trabalho para outro, é possível criar um fluxo de trabalho reutilizável que executa as etapas de implantação. Um fluxo de trabalho reutilizável pode ser usado por outro fluxo de trabalho se ele cumprir um dos requisitos de acesso descritos em "[Reutilizando os fluxos de trabalho](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows)".

Quando combinado com o OpenID Connect (OIDC), os fluxos de trabalho reutilizáveis permitem que você aplique implantações consistentes no seu repositório, organização ou empresa. Você pode fazer isso definindo condições de confiança nas funções da nuvem com base em fluxos de trabalho reutilizáveis.

Para criar condições de confiança com base em fluxos de trabalho reutilizáveis, o seu provedor de nuvem deve ser compatível com reivindicações personalizadas para `job_workflow_ref`. Isso permite que seu provedor de nuvem identifique de qual repositório veio originalmente. Se o seu provedor de nuvem é compatível apenas as reivindicações padrão (_audiência_ e _assunto_), não poderá determinar que o trabalho teve origem no repositório do fluxo de trabalho reutilizável. Os provedores de nuvem que sao compatíveis com `job_workflow_ref` incluem Google Cloud Platform e HashiCorp Vault.

Antes de prosseguir, você deve estar familiarizado com os conceitos de [fluxos de trabalho reutilizáveis](/actions/learn-github-actions/reusing-workflows) e [OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).

## Como o token funciona com fluxos de trabalho reutilizáveis

Durante uma execução de um fluxo de trabalho, o provedor do OIDC de {% data variables.product.prodname_dotcom %} apresenta um token de OIDC para o provedor de nuvem que contém informações sobre o trabalho. Se esse trabalho faz parte de um fluxo de trabalho reutilizável, o token incluirá as reclamações padrão que contêm informações sobre o fluxo de trabalho de chamadas e também incluirá uma reivindicação personalizada denominada `job_workflow_ref` que contém informações sobre o fluxo de trabalho chamado.

Por exemplo, o token do OIDC a seguir é para um trabalho que fazia parte de um fluxo de trabalho chamado. O `workflow`, `ref` e outros atributos descrevem o fluxo de trabalho da chamada, enquanto `job_workflow_ref` refere-se ao fluxo de trabalho chamado:

```yaml{:copy}
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
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

Se o seu fluxo de trabalho reutilizável executa etapas de implantação, ele, de modo geral, irá precisar de acesso a um função de nuvem específica, e você deverá permitir que qualquer repositório da sua organização chame esse fluxo de trabalho reutilizável. Para permitir isso, você criará uma condição de confiança que permite qualquer repositório e fluxo de trabalho de chamadas, e, em seguida, irá filtrar a organização e o fluxo de trabalho chamado. Veja a próxima seção para obter alguns exemplos.

## Exemplos

**Filtragem para fluxos de trabalho reutilizáveis dentro de um repositório específico**

É possível configurar uma reivindicação personalizada que filtra para qualquer fluxo de trabalho reutilizável em um repositório específico. Neste exemplo, a execução do fluxo de trabalho deve ter sido originada de um trabalho definido em um fluxo de trabalho reutilizável no repositório `octo-org/octo-automation`, e em qualquer repositório que pertença à organização `octo-org`.

- **Assunto**:
  - Sintaxe: `repo:ORG_NAME/*`
  - Exemplo: `repo:octo-org/*`

- **Reivindicação personalizada**:
  - Sintaxe: `job_workflow_ref:ORG_NAME/REPO_NAME`
  - Exemplo: `job_workflow_ref:octo-org/octo-automation@*`

**Filtrando um fluxo de trabalho específico reutilizável em um ref específico**

Você pode configurar uma reivindicação personalizada que filtra um fluxo de trabalho específico reutilizável. Neste exemplo, a execução do fluxo de trabalho deve ter origem em um trabalho definido no fluxo de trabalho reutilizável `octo-org/octo-automation/.github/workflows/deployment.yml` e em qualquer repositório que pertença à organização `octo-org`.

- **Assunto**:
  - Sintaxe: `repo:ORG_NAME/*`
  - Exemplo: `repo:octo-org/*`

- **Reivindicação personalizada**:
  - Syntax: `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref`
  - Examplo: `job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`
