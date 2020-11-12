---
title: Monitorar nós de cluster
intro: 'Um cluster do {% data variables.product.prodname_ghe_server %} é formado por serviços redundantes distribuídos em dois ou mais nós. Em caso de falha de um serviço ou de um nó inteiro, a falha não será aparente de imediato para os usuários do cluster. No entanto, como o desempenho e a redundância são afetados, é importante monitorar a integridade de um cluster do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
versions:
  enterprise-server: '*'
---

### Verificar o status do cluster manualmente

O {% data variables.product.prodname_ghe_server %} tem um utilitário integrado de linha de comando para monitorar a integridade do cluster. No shell administrativo, acionar o comando `ghe-cluster-status` executa uma série de verificações de integridade em cada nó, verificando também o status do serviço e da conectividade. A saída mostra todos os resultados de teste, inclusive o texto `ok` ou `erro`. Por exemplo, para exibir somente os testes com falha, execute:

```shell
admin@ghe-data-node-0:~$ <em>status-ghe-cluster | grep erro</em>
> mysql-replicacao no-dados-ghe-0: erro Parado
> mysql cluster: erro
```
{% note %}

**Observação:** se não houver testes com falha, o comando não vai gerar saída. Nesse caso, a integridade do cluster terá sido preservada.

{% endnote %}

### Monitorar o status do cluster com o Nagios

É possível configurar o [Nagios](https://www.nagios.org/) para monitorar o {% data variables.product.prodname_ghe_server %}. Além de monitorar a conectividade básica para cada nó do cluster, você pode verificar o status do cluster configurando o Nagios para usar o comando `ghe-cluster-status -n`. Fazer isso gera uma saída em um formato que o Nagios consegue interpretar.

#### Pré-requisitos
* Host Linux com Nagios;
* Acesso de rede ao cluster do {% data variables.product.prodname_ghe_server %}.

#### Configurar o host do Nagios
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

  **Aviso de segurança:** chaves SSH sem senha podem representar um risco de segurança se tiverem permissão de acesso total a um host. Limite o acesso desse tipo de chave a comandos de somente leitura.

  {% enddanger %}
  {% note %}

  **Note:** If you're using a distribution of Linux that doesn't support the Ed25519 algorithm, use the command:
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Copy the private key (`id_ed25519`) to the `nagios` home folder and set the appropriate ownership.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. Para autorizar a chave pública a executar *somente* o comando `ghe-cluster-status-n`, use o prefixo `command=` no arquivo `/data/user/common/authorized_keys`. No shell administrativo de qualquer nó, modifique esse arquivo para incluir a chave pública gerada na etapa 1. For example: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Valide e copie a configuração para cada nó do cluster executando `ghe-cluster-config-apply` no nó em que você modificou o arquivo `/data/user/common/authorized_keys`.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validando a configuração
  > ...
  > Configuração de cluster concluída
  ```

5. Para testar se o plugin do Nagios consegue executar o comando, execute-o de forma interativa no host do Nagios.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - Nenhum erro detectado
  ```

6. Crie uma definição de comando na sua configuração do Nagios.

  ###### Definição de exemplo

  ```
  definir comando {
        nome_comando    verificar_ssh_ghe_cluster
        linha_comando    $USER1$/verificar_por_ssh -H $HOSTADDRESS$ -C "status-cluster-ghe -n" -l admin -p 122 -t 30
  }
  ```
7. Adicione este comando a uma definição de serviço para um nó no cluster do {% data variables.product.prodname_ghe_server %}.


  ###### Definição de exemplo

  ```
  definir host{
        uso                     host-genérico
        nome_host               nó-dados-ghe-0
        alias                   nó-dados-ghe-0
        endereço                 10.11.17.180
        }

  definir serviço{
          uso                             serviço-genérico
          nome_host                       nó-dados-ghe-0
          descrição_serviço             Status GitHub Cluster
          verificar_comando                   verificar_cluster_ssh_ghe
          }
  ```

Depois de adicionar a definição ao Nagios, a verificação de serviço será executada conforme a sua configuração. Você deve conseguir ver o serviço recém-configurado na interface da web do Nagios.

![Exemplo Nagios](/assets/images/enterprise/cluster/nagios-example.png)
