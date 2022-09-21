---
title: Monitorar e solucionar problemas de executores auto-hospedados
intro: Você pode monitorar seus executores auto-hospedados para visualizar sua atividade e diagnosticar problemas comuns.
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Monitor & troubleshoot
ms.openlocfilehash: 57ca9cad51c1936171fcadd73497cf313dd86dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065631'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Como verificar o status de um executor auto-hospedado

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. Em "Executores", você pode ver uma lista de executores registrados, incluindo o nome, etiqueta e status do executor.

    O status pode ser um dos seguintes:

    * **Ocioso**: o executor está conectado ao {% data variables.product.product_name %} e está pronto para executar trabalhos.
    * **Ativo**: o executor está executando um trabalho no momento.
    * **Offline**: o executor não está conectado ao {% data variables.product.product_name %}. Isto pode ser porque a máquina está off-line, o aplicativo do executor auto-hospedado não está funcionando na máquina, ou o aplicativo do executor auto-hospedado não pode comunicar-se com {% data variables.product.product_name %}.

## Solução de problemas da conectividade de rede

### Verificando conectividade de rede do executor auto-hospedado

Use o script `run` do aplicativo do executor auto-hospedado com o parâmetro `--check` para verificar se um executor auto-hospedado pode acessar todos os serviços de rede necessários no {% data variables.product.product_location %}.

Além de `--check`, você precisa fornecer dois argumentos para o script:

* `--url` pela URL para o repositório do repositório, da organização ou da empresa do {% data variables.product.company_short %}. Por exemplo, `--url https://github.com/octo-org/octo-repo`.
* `--pat` pelo valor de um token de acesso pessoal, que precisa ter o escopo `workflow`. Por exemplo, `--pat ghp_abcd1234`. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Por exemplo:

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url <em>https://github.com/octo-org/octo-repo</em> --pat <em>ghp_abcd1234</em>
```

{% endwindows %}

O script testa cada serviço e gera um `PASS` ou um `FAIL` para cada um. Se você tiver alguma verificação com falha, você pode ver mais detalhes sobre o problema no arquivo de registro para a verificação. Os arquivos de log estão localizados no diretório `_diag` em que você instalou o aplicativo do executor, e o caminho do arquivo de log para cada verificação é mostrado na saída do console do script.

Se você tiver alguma verificação com falha, você deve também verificar se a sua máquina de executores auto-hospedada cumpre todos os requisitos de comunicação. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements)".

### Desabilitando verificação de certificado TLS
{% ifversion ghes %} Por padrão, o aplicativo do executor auto-hospedado verifica o certificado TLS do {% data variables.product.product_name %}.  Se o seu {% data variables.product.product_name %} tiver um certificado autoassinado ou emitido internamente, você deverá desabilitar a verificação de certificado TLS para fins de teste.
{% else %} Por padrão, o aplicativo do executor auto-hospedado verifica o certificado TLS do {% data variables.product.product_name %}.  Se você encontrar problemas de rede, você deverá desabilitar a verificação de certificado TLS para fins de teste.
{% endif %}

Para desabilitar a verificação de certificação TLS no aplicativo do executor auto-hospedado, defina a variável de ambiente `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` como `1` antes de configurar e executar o aplicativo do executor auto-hospedado.

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url <em>https://github.com/octo-org/octo-repo</em> --token
./run.sh
```

{% warning %}

**Aviso**: não recomendamos desabilitar a verificação do TLS, pois o TLS fornece privacidade e integridade de dados entre o aplicativo do executor auto-hospedado e o {% data variables.product.product_name %}. Recomendamos que você instale o certificado {% data variables.product.product_name %} no armazenamento de certificados do sistema operacional para o seu executor auto-hospedado. Para orientação sobre como instalar o certificado de {% data variables.product.product_name %}, verifique junti ao seu fornecedor de sistema operacional.

{% endwarning %}

## Revisar os arquivos de registro do aplicativo do executor auto-hospedado

Você pode monitorar o status do aplicativo do executor auto-hospedado e suas atividades. Os arquivos de log são mantidos no diretório `_diag` em que você instalou o aplicativo do executor, e um novo log é gerado sempre que o aplicativo é iniciado. O nome do arquivo começa com *Runner_* e é seguido de um carimbo de data/hora UTC da inicialização do aplicativo.

Para obter logs detalhados sobre as execuções do trabalho de fluxo de trabalho, confira a próxima seção que descreve os arquivos *Worker_* .

## Revisar o arquivo de registro de um trabalho

O aplicativo do executor auto-hospedado cria um arquivo de registro detalhado para cada trabalho que processa. Esses arquivos são armazenados no diretório `_diag` em que você instalou o aplicativo do executor, e o nome do arquivo começa com *Worker_* .

{% linux %}

## Usar journalctl para verificar o serviço do aplicativo do executor auto-hospedado

Para executores auto-hospedados baseados em Linux que executam o aplicativo usando um serviço, use `journalctl` para monitorar sua atividade em tempo real. O serviço padrão baseado em sistema usa a seguinte convenção de nomenclatura: `actions.runner.<org>-<repo>.<runnerName>.service`. Esse nome será truncado se exceder 80 caracteres, ou seja, a maneira preferencial de localizar o nome do serviço é verificando o arquivo _.service_. Por exemplo:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

Se isso falhar devido ao serviço que está sendo instalado em outro lugar, você poderá encontrar o nome do serviço na lista de serviços em execução. Por exemplo, na maioria dos sistemas Linux, você pode usar o comando `systemctl`:

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

Use `journalctl` para monitorar a atividade em tempo real do executor auto-hospedado:

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

Neste exemplo de saída, você pode ver `runner01` ser iniciado, receber um trabalho chamado `testAction` e exibir o status resultante:

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

Para ver a configuração `systemd`, localize o arquivo de serviço aqui: `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`.
Se você desejar personalizar o serviço de aplicação do executor auto-hospedado, não modifique esse arquivo diretamente. Siga as instruções descritas em "[Como configurar o aplicativo do executor auto-hospedado como um serviço](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)".

{% endlinux %}

{% mac %}

## Como usar `launchd` para verificar o serviço de aplicativo do executor auto-hospedado

Para executores auto-hospedados baseados em macOS que executam o aplicativo como um serviço, use `launchctl` para monitorar sua atividade em tempo real. O serviço padrão baseado em inicialização usa a seguinte convenção de nomenclatura: `actions.runner.<org>-<repo>.<runnerName>`. Esse nome será truncado se exceder 80 caracteres, ou seja, a maneira preferencial de localizar o nome do serviço é verificando o arquivo _.service_ no diretório do executor:

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

O script `svc.sh` usa `launchctl` para verificar se o aplicativo está em execução. Por exemplo:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

A saída resultante inclui a ID do processo e o nome do serviço `launchd` do aplicativo.

Para ver a configuração `launchd`, localize o arquivo de serviço aqui: `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`.
Se você desejar personalizar o serviço de aplicação do executor auto-hospedado, não modifique esse arquivo diretamente. Siga as instruções descritas em "[Como configurar o aplicativo do executor auto-hospedado como um serviço](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)".

{% endmac %}

{% windows %}

## Usar PowerShell para verificar o serviço do aplicativo do executor auto-hospedado

Para executores auto-hospedados baseados no Windows que executam o aplicativo como um serviço, você pode usar o PowerShell para monitorar suas atividades em tempo real. O serviço usa a convenção de nomenclatura `GitHub Actions Runner (<org>-<repo>.<runnerName>)`. Você também pode encontrar o nome do serviço verificando o arquivo _.service_ no diretório do executor:

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Veja o status do executor no aplicativo _Serviços_ do Windows (`services.msc`). Você também pode usar o PowerShell para verificar se o serviço está sendo executado:

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

Você pode usar o PowerShell para verificar a atividade recente do executor auto-hospedado. Neste exemplo de saída, você pode ver o aplicativo ser iniciado, receber um trabalho chamado `testAction` e exibir o status resultante:

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

{% endwindows %}

## Monitorar o processo de atualização automática

Recomendamos que você verifique regularmente o processo de atualização automática, uma vez que o executor auto-hospedado não será capaz de processar os trabalhos se estiver abaixo de um determinado limite de versão. O aplicativo do executor auto-hospedado atualiza-se, mas mas observe que este processo não inclui atualizações do sistema operacional ou de outro software. Será necessário que você gerencie essas atualizações separadamente.

Veja as atividades de atualização nos arquivos de log *Runner_* . Por exemplo:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

Além disso, encontre mais informações nos arquivos de log _SelfUpdate_ localizados no diretório `_diag` em que você instalou o aplicativo do executor.

{% linux %}

## Resolução de problemas de contêineres em executores auto-hospedados

### Verificar se o Docker está instalado

Se seus trabalhos exigirem contêineres, o executor auto-hospedado deverá ser baseado no Linux e deverá ter o Docker instalado. Verifique se o seu executor auto-hospedado tem o Docker instalado e se o serviço está em execução.

Use `systemctl` para verificar o status do serviço:

```shell
$ sudo systemctl is-active docker.service
active
```

Se o Docker não estiver instalado, ações dependentes irão falhar com as seguintes mensagens de erro:

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Verificar as permissões do Docker

Se seu trabalho falhar com o seguinte erro:

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

Verifique se a conta de serviço do executor auto-hospedado tem permissão para usar o serviço do Docker. Identifique essa conta verificando a configuração do executor auto-hospedado em `systemd`. Por exemplo:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## Resolvendo executores que estão offline após uma atualização de {% data variables.product.product_location %}

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

Se os executores estiverem offline por esse motivo, atualize-os manualmente. Para saber mais, confira as instruções de instalação para [a versão mais recente](https://github.com/actions/runner/releases/latest) no repositório ações/executor.
{% endif %}
