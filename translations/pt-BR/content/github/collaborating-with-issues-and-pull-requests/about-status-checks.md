---
title: Sobre verificações de status
intro: As verificações de status permitem que você saiba se seus commits atendem às condições definidas para o repositório com o qual está contribuindo.
redirect_from:
  - /articles/about-statuses/
  - /articles/about-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

As verificações de status se baseiam em processos externos, como compilações de integração contínua, que são executados para cada push que você faz em um repositório. Você pode ver o estado de *pendência*, *aprovação* ou *falha* das verificações de status ao lado de commits individuais em sua pull request.

![Lista de commits e status](/assets/images/help/pull_requests/commit-list-statuses.png)

Qualquer pessoa com permissão de gravação em um repositório pode configurar o estado de qualquer verificação de status no repositório.

É possível ver o estado geral do último commit em um branch na página de branches do seu repositório ou na lista de pull requests do seu repositório.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

### Tipos de verificação de status no {% data variables.product.product_name %}

Há dois tipos de verificação de status no {% data variables.product.product_name %}:

- Verificações
- Status

_Verificações_ são diferentes de _status_, pois elas fornecem anotações em linha, mensagens mais detalhadas e estão disponíveis apenas para uso com os {% data variables.product.prodname_github_app %}s.

Os proprietários da organização e usuários com acesso push a um repositório podem criar verificações e status com a API do {% data variables.product.product_name %}. Para obter mais informações, consulte "[Verificações](/v3/checks/)" e "[Status](/v3/repos/statuses/)".

### Verificações

Quando _verificações_ são configuradas em um repositório, as pull requests apresentam uma guia **Checks** (Verificações), onde é possível exibir o resultado detalhado da compilação de verificações de status e executar novamente as verificações com falha.

![Verificações de status em uma pull request](/assets/images/help/pull_requests/checks.png)

Quando uma linha específica em um commit causar a falha de uma verificação, você verá detalhes sobre a falha, o aviso ou a advertência ao lado do código relevante na guia **Files** (Arquivos) da pull request.

![Detalhes de uma verificação de status](/assets/images/help/pull_requests/checks-detailed.png)

Você pode navegar entre os resumos das verificações de vários commits em uma pull request usando o menu suspenso do commit na guia **Conversation** (Conversa).

![Resumos de verificação para diferentes commits em um menu suspenso](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

#### Ignorar e solicitar verificações para commits individuais

Quando um repositório é definido para solicitar verificações por pushes automaticamente, você pode optar por ignorar as verificações para um commit individual do qual fez push. Quando um repositório _não_ é definido para solicitar verificações por pushes automaticamente, você pode solicitar verificações para um commit individual do qual fez push. Para obter mais informações sobre essas configurações, consulte "[Conjuntos de verificações](/rest/reference/checks#update-repository-preferences-for-check-suites)".

Para ignorar ou solicitar verificações para seu commit, adicione uma das seguintes linhas de trailer ao fim da mensagem do commit:

- Para _ignorar verificações_ para um commit, digite a mensagem do commit e uma descrição breve e significativa das alterações. Após a descrição do commit, em vez de aspas de fechamento, adicione duas linhas vazias seguidas por `skip-checks: true`:
  ```shell
  $ git commit -m "Update README.
  >
  >
  skip-checks: true
  ```
  - Para _solicitar_ verificações para um commit, digite a mensagem do commit e uma descrição breve e significativa das alterações. Após a descrição do commit, em vez de aspas de fechamento, adicione duas linhas vazias seguidas por `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  request-checks: true
  ```
  
