---
title: Redimensionamento automático com executores auto-hospedados
intro: Você pode dimensionar automaticamente seus executores auto-hospedados em resposta a eventos de webhooks.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae: issue-4462
type: overview
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre o dimensionamento automático

Você pode aumentar ou diminuir automaticamente o número de executores auto-hospedados no seu ambiente em resposta aos eventos do webhook que você recebe com uma determinada etiqueta. Por exemplo, você pode criar uma automação que adiciona um novo executor auto-hospedado cada vez que você receber um evento de webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) com a atividade [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job), que notifica você de que um novo trabalho está pronto para processamento. A carga do webhook inclui dados da etiqueta. Portanto, você pode identificar o tipo de executor que a tarefa está solicitando. Uma vez terminado o trabalho, você pode criar uma automação que remove o executor em resposta à atividade de `workflow_job` [`concluída`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job).

## Soluções de dimensionamento automático recomendadas

{% data variables.product.prodname_dotcom %} recomenda e faz parcerias estreitas com dois projetos de código aberto que você pode usar para dimensionar automaticamente os seus executores. Uma ou ambas as soluções podem ser adequadas, com base nas suas necessidades.

Os repositórios a seguir possuem instruções detalhadas para configurar esses dimensionadores automáticos:

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) - Um controlador do Kubernetes para executores auto-hospedados de {% data variables.product.prodname_actions %}.
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) - Um módulo do Terraform para executores de {% data variables.product.prodname_actions %} dimensionáveis no Amazon Web Services.

Cada solução tem certas especificações que podem ser importantes para considerar:

| **Funcionalidades**                        | **actions-runner-controller**                                                                 | **terraform-aws-github-runner**                                                      |
|:------------------------------------------ |:--------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------ |
| Tempo de execução                          | Kubernetes                                                                                    | VMs do Linux e do Windows                                                            |
| Nuvens compatíveis                         | Azure, Amazon Web Services, Google Cloud Platform, nos locais                                 | Amazon Web Services                                                                  |
| Onde os executores podem ser dimensionados | Níveis de empresa, organização e repositório. Por etiqueta do executor e grupo de executores. | Níveis de organização e repositório. Por etiqueta do executor e grupo de executores. |
| Como os executores podem ser dimensionados | Eventos de webhook, Programados, Baseados em extrações                                        | Eventos de Webhook, Programados (únicamente executores a nível de organização)       |

## Usaar executores efêmeros para dimensionamento automático

{% data variables.product.prodname_dotcom %} recomenda implementar o dimensionamento automático com executores auto-hospedados efêmeros. Nãose recomenda o dimensionamento automático com executores auto-hospedados persistentes. Em certos casos, {% data variables.product.prodname_dotcom %} não pode garantir que os trabalhos não sejam atribuídos a executores persistentes enquanto eles são desativados. Com executores efêmeros, é possível garantir iss, porque {% data variables.product.prodname_dotcom %} só atribui um trabalho a um executor.

Esta abordagem permite que você gerencie os seus executores como sistemas efêmeros, já que você pode usar automação para fornecer um ambiente limpo para cada trabalho. Isso ajuda a limitar a exposição de quaisquer recursos sensíveis de trabalhos anteriores e também ajuda a mitigar o risco de um executor comprometido receber novos trabalhos.

Para adicionar um executor efêmero ao seu ambiente, inclua o parâmetro `--ephemeral` ao registrar seu executor usando `config.sh`. Por exemplo:

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

O serviço {% data variables.product.prodname_actions %} irá cancelar o resgistro do runner automaticamente depois de ter processado um trabalho. Em seguida, você poderá criar a sua própria automação que limpa o runner depois que ele tiver seu registro cancelado.

{% note %}

**Observação:** Se um trabalho estiver etiquetado para um certo tipo de executor, mas nenhuma correspondência desse tipo estiver disponível, o trabalho não irá falhar imediatamente no momento da entrada na fila. Em vez disso, o trabalho permanecerá na fila até que o período de tempo limite de 24 horas expire.

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6143 %}

## Controlando atualizações de software dos executores em executores auto-hospedados

Por padrão, os executores auto-hospedados realizarão automaticamente uma atualização de software sempre que uma nova versão do executor estiver disponível.  Se você usar executoresefêmeros em contêineres, isso pode gerar a atualizações de software repetidas quando uma nova versão do executor for lançada.  A desabilitação das atualizações automáticas permite que você atualize a versão do executor na imagem do contêiner diretamente no seu próprio agendamento.

Para desabilitar a atualização automática de software e instalar atualizações, especifique o sinalizador `--disableupdate` quando registrar seu executor usando a configuração `config.sh`. Por exemplo:

```shell
./config.sh --url <em>https://github.com/octo-org</em> --token <em>example-token</em> --disableupdate
```

Se você desabilitar as atualizações automáticas, você ainda deverá atualizar sua versão do executor regularmente.  A nova funcionalidade em {% data variables.product.prodname_actions %} exige alterações no serviço de {% data variables.product.prodname_actions %} service _e_ no software do executor.  O executor pode não conseguir de processar corretamente os trabalhos que aproveitam novas funcioanlidades em {% data variables.product.prodname_actions %} sem a atualização de um software.

Se você desabilitar as atualizações automáticas, será necessário atualizar a versão do seu executor no prazo de 30 dias a contar da nova versão disponível.  Você deverá assinar para receber as notificações de versões no repositório [`actions/runner` repository](https://github.com/actions/runner/releases). Para obter mais informações, consulte “[Configurando notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)".

Para obter instruções sobre como instalar a versão mais recente do executor, consulte as instruções de instalação referentes [à última versão](https://github.com/actions/runner/releases).

{% note %}

**Observação:** Se você não executar uma atualização de software em 30 dias, o serviço de {% data variables.product.prodname_actions %} não irá colocar trabalhos na fila para o seu executor.  Além disso, se uma atualização crítica de segurança for necessária, o serviço de {% data variables.product.prodname_actions %} não colocará os trabalhos na fila do seu executor até que ele seja atualizado.

{% endnote %}

{% endif %}

## Usando webhooks para dimensionamento automático

Você pode criar seu próprio ambiente de dimensionamento automático usando cargas recebidas do webhook [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job). Este webhook está disponível no repositório, organização e níveis corporativos e a carga deste evento contém uma chave de `ação` que corresponde aos estágios do ciclo de vida do trabalho de um fluxo de trabalho. Por exemplo, quando as tarefas estão `queued`, `in_progress` e `completed`. Você deverá criar a sua própria automação de dimensionamento em resposta a estas cargas de webhook.

- Para obter mais informações sobre o webhook do `workflow_job`, consulte "[Eventos e cargas do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)".
- Para aprender como trabalhar com webhooks, consulte "[Criando webhooks](/developers/webhooks-and-events/webhooks/creating-webhooks)".

## Requisitos de autenticação

Você pode registrar e excluir executores auto-hospedados do repositório e organização usando [a API](/rest/reference/actions#self-hosted-runners). Para efetuar a autenticação na API, a implementação do seu dimensionamento automático pode usar um token de acesso ou um aplicativo de {% data variables.product.prodname_dotcom %}.

Seu token de acesso exigirá o seguinte escopo:

- Para repositórios privados, use um token de acesso com o escopo [`repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Para repositórios públicos, use um token de acesso com o escopo [`public_repo`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).
- Para as organizações, use um token de acesso com o escopo [`admin:org`](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes).

Para efetuar a autenticação usando um aplicativo de {% data variables.product.prodname_dotcom %}, este deverá ter as seguintes permissões:
- Para repositórios, atribua a permissão de `administração`.
- Para organizações, atribua a permissão `organization_self_hosted_runners`.

Você pode registrar e excluir executores auto-hospedados da empresa usando [a API](/rest/reference/actions#self-hosted-runners). Para efetuar a autenticação na API, sua implementação de dimensionamento automático pode usar um token de acesso.

Seu token de acesso irá exigir o escopo `manage_runners:enterprise`.
