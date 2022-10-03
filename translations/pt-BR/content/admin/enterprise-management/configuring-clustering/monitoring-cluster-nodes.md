---
title: Monitorar nós de cluster
intro: 'Um cluster do {% data variables.product.prodname_ghe_server %} é formado por serviços redundantes distribuídos em dois ou mais nós. Em caso de falha de um serviço ou de um nó inteiro, a falha não será aparente de imediato para os usuários do cluster. No entanto, como o desempenho e a redundância são afetados, é importante monitorar a integridade de um cluster do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: a5cab340f84d572a0a8e549d942b7b52ef522733
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095948'
---
## Verificar o status do cluster manualmente

O {% data variables.product.prodname_ghe_server %} tem um utilitário integrado de linha de comando para monitorar a integridade do cluster. No shell administrativo, a execução do comando `ghe-cluster-status` executa uma série de verificações de integridade em cada nó, incluindo verificação de conectividade e status do serviço. A saída mostra todos os resultados do teste, incluindo o texto `ok` ou `error`. Por exemplo, para exibir somente os testes com falha, execute:

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Observação:** se não houver nenhum teste com falha, esse comando não produzirá nenhuma saída. Nesse caso, a integridade do cluster terá sido preservada.

{% endnote %}

## Monitorar o status do cluster com o Nagios

Configure o [Nagios](https://www.nagios.org/) para monitorar o {% data variables.product.prodname_ghe_server %}. Além de monitorar a conectividade básica de cada um dos nós de cluster, você pode verificar o status do cluster configurando o Nagios para usar o comando `ghe-cluster-status -n`. Fazer isso gera uma saída em um formato que o Nagios consegue interpretar.

### Pré-requisitos
* Host Linux com Nagios;
* Acesso de rede ao cluster do {% data variables.product.prodname_ghe_server %}.

### Configurar o host do Nagios
1. Gere uma chave SSH com a frase secreta em branco. O Nagios usa essa informação para fazer a autenticação ao cluster do {% data variables.product.prodname_ghe_server %}.
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t ed25519</em>
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **Aviso de segurança:** uma chave SSH sem uma frase secreta pode representar um risco de segurança se autorizada para acesso total a um host. Limite o acesso desse tipo de chave a comandos de somente leitura.

  {% enddanger %} {% note %}

  **Observação:** se você estiver usando uma distribuição do Linux que não dê suporte ao algoritmo Ed25519, use o comando:
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Copie a chave privada (`id_ed25519`) para a pasta base `nagios` e defina a propriedade apropriada.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. Para autorizar a chave pública a executar *apenas* o comando `ghe-cluster-status -n`, use um prefixo `command=` no arquivo `/data/user/common/authorized_keys`. No shell administrativo de qualquer nó, modifique esse arquivo para incluir a chave pública gerada na etapa 1. Por exemplo: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Valide e copie a configuração de cada nó no cluster executando `ghe-cluster-config-apply` no nó em que você modificou o arquivo `/data/user/common/authorized_keys`.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Para testar se o plugin do Nagios consegue executar o comando, execute-o de forma interativa no host do Nagios.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Crie uma definição de comando na sua configuração do Nagios.
  ###### Definição de exemplo

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Adicione este comando a uma definição de serviço para um nó no cluster do {% data variables.product.prodname_ghe_server %}.

  ###### Definição de exemplo

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

Depois de adicionar a definição ao Nagios, a verificação de serviço será executada conforme a sua configuração. Você deve conseguir ver o serviço recém-configurado na interface da web do Nagios.

![Exemplo Nagios](/assets/images/enterprise/cluster/nagios-example.png)
