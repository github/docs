---
title: Monitoramento e resolução de problemas dos executores auto-hospedados
intro: Você pode monitorar seus executores auto-hospedados para visualizar sua atividade e diagnosticar problemas comuns.
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Verificar o status de um executor auto-hospedado usando {{ site.data.variables.product.prodname_dotcom }}

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

{% data reusables.github-actions.self-hosted-runner-navigate-repo-and-org %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Em "Executores auto-hospedados", você pode ver uma lista de executores registrados, incluindo o nome, etiqueta e status do executor.

    ![Lista de executores](/assets/images/help/settings/actions-runner-list.png)

    Pode haver os seguintes status:

    * **Inativo**: O executor está conectado a {% data variables.product.product_name %} e está pronto para executar trabalhos.
    * **Ativo**: O executor está executando uma tarefa no momento.
    * **Off-line**: O executor não está conectado a {% data variables.product.product_name %}. Isto pode ser porque a máquina está off-line, o aplicativo do executor auto-hospedado não está funcionando na máquina, ou o aplicativo do executor auto-hospedado não pode comunicar-se com {% data variables.product.product_name %}.


### Revisar os arquivos de registro do aplicativo do executor auto-hospedado

Você pode monitorar o status do aplicativo do executor auto-hospedado e suas atividades. Os arquivos de registro são mantidos no diretório `_diag` e um novo é gerado toda vez que o aplicativo é iniciado. O nome do arquivo começa com *Runner_*, e é seguido por uma marca de tempo de UTC para quando o aplicativo foi iniciado.

Para obter registros detalhados sobre as execuções do fluxo de trabalho, consulte a próxima seção que escreve os arquivos *Worker_*.

### Revisar o arquivo de registro de um trabalho

O aplicativo do executor auto-hospedado cria um arquivo de registro detalhado para cada trabalho que processa. Esses arquivos são armazenados no diretório `_diag` e o nome do arquivo começa com *Worker_*.

{% linux %}

### Usar journalctl para verificar o serviço do aplicativo do executor auto-hospedado

Para os executores auto-hospedados baseados no Linux que executam o aplicativo usando um serviço, você pode usar o `journalctl` para monitorar a sua atividade em tempo real. O serviço-padrão baseado no sistema usa a seguinte convenção de nomes: `actions.runner.<org>-<repo>.<runnerName>.service`. Esse nome será truncado se exceder 80 caracteres. Portanto, a forma preferida de encontrar o nome do serviço é selecionar o arquivo _.service_. Por exemplo:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Você pode usar o `journalctl` para monitorar a atividade em tempo real do executor auto-hospedado:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

Neste exemplo de saída, você pode ver o início `runner01`, receber um trabalho denominado`testAction` e, em seguida, exibir o status resultante:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Iniciando o ouvinte do executor com o tipo de inicialização: serviço
Feb 11 14:57:07 runner01 runsvc.sh[962]: Processo do ouvinte iniciado
Feb 11 14:57:07 runner01 runsvc.sh[962]: Serviço de execução iniciado
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Conectado ao GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Escuta para Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Trabalho em execução: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Trabalho testAction concluído com o resultado: Aprovado
```

Para visualizar a configuração do systemd, você pode localizar o arquivo de serviço aqui: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`. Se você desejar personalizar o serviço de aplicação do executor auto-hospedado, não modifique esse arquivo diretamente. Siga as instruções descritas em "[Configurar o aplicativo do executor auto-hospedado como um serviço](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)".

{% endlinux %}

{% mac %}

### Usar o launchd para verificar o serviço do aplicativo do executor auto-hospedado

Para executores auto-hospedados baseados em macOS que executam o aplicativo como um serviço, você pode usar o `launchctl` para monitorar suas atividades em tempo real. O serviço-padrão baseado no launchd usa a seguinte convenção de nomes: `actions.runner.<org>-<repo>.<runnerName>`. Esse nome será truncado se exceder 80 caracteres. Portanto, a forma preferida de encontrar o nome do serviço será selecionar o arquivo _.service_ no diretório do executor:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

O script `svc.sh` usa `launchctl` para verificar se o aplicativo está sendo executado. Por exemplo:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

A saída resultante inclui o ID do processo e o nome do serviço de launchd do aplicativo.

Para visualizar a configuração do launchd, você pode localizar o arquivo de serviço aqui: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`. Se você desejar personalizar o serviço de aplicação do executor auto-hospedado, não modifique esse arquivo diretamente. Siga as instruções descritas em "[Configurar o aplicativo do executor auto-hospedado como um serviço](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)".

{% endmac %}


{% windows %}

### Usar PowerShell para verificar o serviço do aplicativo do executor auto-hospedado

Para executores auto-hospedados baseados no Windows que executam o aplicativo como um serviço, você pode usar o PowerShell para monitorar suas atividades em tempo real. O serviço usa a convenção de nome `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. Você também pode encontrar o nome do serviço, verificando o arquivo _.service_ no diretório do executor:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Você pode visualizar o status do executor no aplicativo _Services_ no Windows (`services.msc`). Você também pode usar o PowerShell para verificar se o serviço está sendo executado:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Nome                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Em execução
```

Você pode usar o PowerShell para verificar a atividade recente do executor auto-hospedado. Neste exemplo de saída, você pode ver o início do aplicativo, receba um trabalho denominado `testAction` e, em seguida, exiba o status resultante:

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Índice temporal          Tipo de entrada   Fonte                 ID da instância Mensagem
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Informação ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Saudação concluída com o resultado: Aprovado
     135 Mar 17 13:45  Informação ActionsRunnerService          100 2020-03-17 13:45:34Z: Trabalho em execução: testAction
     134 Mar 17 13:41  Informação ActionsRunnerService          100 2020-03-17 13:41:54Z: Escuta para trabalhos
     133 Mar 17 13:41  Informação ActionsRunnerService          100 û conectado ao GitHub
     132 Mar 17 13:41  Informação ActionsRunnerService            0 Service iniciado com sucesso.
     131 Mar 17 13:41  Informação ActionsRunnerService          100 Iniciando ações do ouvinte do executor
     130 Mar 17 13:41  Informação ActionsRunnerService          100 Iniciando ações do serviço do executor
     129 Mar 17 13:41  Informação ActionsRunnerService          100 criar fonte de rastreamento de registro de evento para o serviço actions-runner
```

{% endwindows %}

### Monitorar o processo de atualização automática

Recomendamos que você verifique regularmente o processo de atualização automática, uma vez que o executor auto-hospedado não será capaz de processar os trabalhos se estiver abaixo de um determinado limite de versão. O aplicativo do executor auto-hospedado atualiza-se, mas mas observe que este processo não inclui atualizações do sistema operacional ou de outro software. Será necessário que você gerencie essas atualizações separadamente.

Você pode ver as atividades de atualização nos arquivos de registro *Runner_*. Por exemplo:

```shell
[Fevb 12 12:37:07 INFO SelfUpdater] Uma atualização está disponível.
```

Além disso, você pode encontrar mais informações nos arquivos de registro _SelfUpdate_ localizados no diretório `_diag`.

{% linux %}

### Resolução de problemas de contêineres em executores auto-hospedados

#### Verificar se o Docker está instalado

Se seus trabalhos exigirem contêineres, o executor auto-hospedado deverá ser baseado no Linux e deverá ter o Docker instalado. Verifique se o seu executor auto-hospedado tem o Docker instalado e se o serviço está em execução.

Você pode usar o `systemctl` para verificar o status do serviço:

```shell
$ sudo systemctl is-active docker.service
ativo
```

Se o Docker não estiver instalado, ações dependentes irão falhar com as seguintes mensagens de erro:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Não encontrado.
[2020-02-13 16:56:10Z ERR  StepsRunner] Capturou exceção da etapa: System.IO.FileNotFoundException: Arquivo não encontrado: 'docker'
```

#### Verificar as permissões do Docker

Se seu trabalho falhar com o seguinte erro:

```shell
discar unix /var/run/docker.sock: conexão: permissão negada
```

Verifique se a conta de serviço do executor auto-hospedado tem permissão para usar o serviço do Docker. Você pode identificar esta conta verificando a configuração do executor auto-hospedado no systemd. Por exemplo:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}
