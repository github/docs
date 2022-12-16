---
title: Utilitários de linha de comando
intro: 'O {% data variables.product.prodname_ghe_server %} tem uma série de utilitários que ajudam a resolver problemas específicos ou a executar determinadas tarefas.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172802'
---
Depois de entrar como usuário administrador com SSH, você pode executar esses comandos de qualquer lugar na VM. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".

## Geral

### ghe-announce

Este utilitário insere um banner no topo de cada página do {% data variables.product.prodname_enterprise %}. Você pode usá-lo para enviar uma comunicação a todos os usuários.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} Para permitir que cada usuário ignore o anúncio por conta própria, use o sinalizador `-d`.
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} Você também pode definir um banner de anúncio usando as configurações da empresa no {% data variables.product.product_name %}. Para obter mais informações, confira "[Como personalizar as mensagens de usuário na sua instância](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)".
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

Este utilitário exibe informações sobre trabalhos em segundo plano, ativos e em fila. Ele fornece os mesmos números de contagem de trabalhos que a barra de estatísticas de administração, na parte superior de todas as páginas.

Este utilitário pode ajudar a identificar se o servidor de Aqueduct está tendo problemas no processamento de trabalhos em segundo plano. Qualquer dos seguintes cenários pode indicar um problema com o Aqueduct:

* O número de trabalhos em segundo plano está aumentando, e os trabalhos ativos continuam iguais.
* Os feeds de evento não estão sendo atualizados.
* Webhooks não estão sendo acionados.
* A interface web não atualiza após um push do Git.

Se você suspeitar que o Aqueduct tem uma falha, entre em contato com {% data variables.contact.contact_ent_support %} para obter ajuda.

Com este comando, também é possível pausar ou retomar trabalhos na fila.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

Este utilitário verifica se há arquivos grandes ou arquivos excluídos no disco, mas que ainda têm identificadores abertos. Deve ser executado para liberar espaço na partição raiz.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

Este utilitário limpa uma série de caches que podem vir a ocupar espaço extra em disco no volume raiz. Se você perceber que o uso do espaço em disco do volume raiz aumenta muito ao longo do tempo, talvez seja uma boa ideia executar este utilitário e verificar se ele ajuda a reduzir o uso geral.

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

Este utilitário apaga todas as configurações do {% data variables.enterprise.management_console %}.

{% tip %}

**Dica**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

Com esse utilitário, você pode recuperar e modificar as definições de configuração de {% data variables.location.product_location %}.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
Permite encontrar o UUID (identificador universalmente exclusivo) do seu nó em `cluster.conf`.

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} Permite isentar uma lista de usuários dos limites de taxa da API REST. Um limite rígido de 120.000 solicitações ainda será aplicado a esses usuários. Para obter mais informações, confira "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

Este utilitário aplica configurações do {% data variables.enterprise.management_console %}, recarrega os serviços do sistema, prepara um dispositivo de armazenamento, recarrega os serviços de aplicativos e executa as migrações pendentes de banco de dados. Isso é equivalente a clicar em **Salvar configurações** na interface do usuário da Web do {% data variables.enterprise.management_console %} ou a enviar uma solicitação POST [ao ponto de extremidade `/setup/api/configure`](/enterprise/user/rest/reference/enterprise-admin#management-console).

É provável que você não precise executar essa ação manualmente, mas é possível fazer isso caso você queira automatizar o processo de salvar suas configurações via SSH.

```shell
ghe-config-apply
```

### ghe-console

Este utilitário abre o console do GitHub Rails no appliance do {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

Este utilitário abre uma sessão do banco de dados MySQL no appliance do {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
Este utilitário retorna um resumo dos índices do Elasticsearch no formato CSV.

Imprima um resumo do índice com uma linha de cabeçalho em `STDOUT`:
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

Imprima um resumo do índice e encaminhe os resultados para `column` a fim de facilitar a leitura:

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

Este utilitário lista os repositórios no appliance que usam o {% data variables.product.prodname_dotcom %} Services, um método de integração que será descontinuado em 1 de outubro de 2018. Os usuários do seu appliance podem ter configurado o {% data variables.product.prodname_dotcom %} Services para criar notificações de pushes em determinados repositórios. Para obter mais informações, confira "[Comunicado sobre a reprovação do {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" no {% data variables.product.prodname_blog %} ou "[Substituição do {% data variables.product.prodname_dotcom %} Services](/developers/overview/replacing-github-services)". Para saber mais sobre este comando ou ver opções adicionais, use o sinalizador `-h`.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

Este utilitário permite registrar todos os arquivos de log relevantes da sua instalação. Você pode passar as opções para limitar os logs a conjuntos específicos. Para consultar opções adicionais, use o sinalizador -h.

```shell
ghe-logs-tail
```

### ghe-maintenance

Este utilitário permite controlar o estado do modo de manutenção da instalação. Ele foi desenvolvido para uso principalmente nos bastidores do {% data variables.enterprise.management_console %}, mas também pode ser usado diretamente. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

```shell
ghe-maintenance -h
```

### ghe-motd

Este utilitário exibe novamente a mensagem do dia (MOTD) que os administradores veem quando acessam a instância através do shell administrativo. A saída contém uma visão geral do estado da instância.

```shell
ghe-motd
```

### ghe-nwo

Este utilitário retorna o nome e o proprietário de um repositório com base no ID do repositório.  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

Use este comando para conceder privilégios de proprietário da organização a usuários com privilégios de administrador do site no appliance ou a qualquer usuário em uma única organização. Você deve especificar um usuário e/ou organização. O comando `ghe-org-admin-promote` sempre solicitará a confirmação antes da execução, a menos que você use o sinalizador `-y` para ignorar a confirmação.

É possível usar estas opções com o utilitário:

- O sinalizador `-u` especifica um nome de usuário. Use este sinalizador para conceder privilégios de proprietário da organização a um usuário. Omita o sinalizador `-u` para promover todos os administradores do site à organização especificada.
- O sinalizador `-o` especifica uma organização. Use este sinalizador para conceder privilégios de proprietário em uma organização. Omita o sinalizador `-o` para conceder permissões de proprietário em todas as organizações a um administrador do site especificado.
- O sinalizador `-a` concede privilégios de proprietário em todas as organizações a todos os administradores do site.
- O sinalizador `-y` ignora a confirmação manual.

Este utilitário não pode promover um administrador externo a proprietário de todas as organizações. Você pode promover uma conta de usuário comum a administrador do site com [ghe-user-promote](#ghe-user-promote).

Conceder privilégios de proprietário da organização em uma organização específica para um administrador específico do site

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

Conceder privilégios de proprietário da organização a um administrador do site em todas as organizações

```shell
ghe-org-admin-promote -u USERNAME
```

Conceder privilégios de proprietário da organização a todos os administradores do site em uma organização específica

```shell
ghe-org-admin-promote -o ORGANIZATION
```

Conceder privilégios de proprietário da organização a todos os administradores do site em todas as organizações

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Use este comando para desbloquear imediatamente o {% data variables.enterprise.management_console %} após {% ifversion enterprise-authentication-rate-limits %}um bloqueio de conta. Para configurar políticas de autenticação em {% data variables.location.product_location %}, confira "[Como configurar limites de taxa de política de autenticação](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)".{% else %}Dez tentativas de logon com falha no intervalo de dez minutos.{% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

Este utilitário pode ajudar a mapear os registros SAML.

Para criar um arquivo CSV contendo todo o mapeamento SAML para os seus usuários do {% data variables.product.product_name %}:
```shell
$ ghe-saml-mapping-csv -d
```

Para executar uma execução seca de atualização de mapeamentos SAML com novos valores:
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

Para atualizar os mapeamentos SAML com novos valores:
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

Este utilitário lista todos os serviços iniciados ou parados (em execução ou em espera) no appliance.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

Com `ghe-set-password`, você pode definir uma nova senha para se autenticar no [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

Esse utilitário permite que você configure o adaptador de rede primário.

Para inserir o modo visual, que orientará você nas configurações de rede:

```shell
$ ghe-setup-network -v
```

Para consultar opções adicionais, use o sinalizador -h.

### ghe-ssh-check-host-keys

Este utilitário verifica as chaves do host SSH atuais para identificar chaves vazadas conhecidas.

```shell
$ ghe-ssh-check-host-keys
```

Se for encontrada uma chave de host vazada, o utilitário sairá com o status `1` e a seguinte mensagem:
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

Se não forem encontradas chaves de host vazadas, o utilitário sairá com o status `0` e a seguinte mensagem:
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

Este utilitário acumula as chaves do host SSH e as substitui por chaves recém-geradas.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

Este utilitário retorna um relatório de chaves SSH fracas conhecidas armazenadas no appliance do {% data variables.product.prodname_enterprise %}. Você também pode revogar as chaves do usuário como uma ação em lote. O utilitário relatará as chaves fracas do sistema, que você precisará revogar manualmente no [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

Este utilitário permite instalar um certificado Let's Encrypt no seu appliance do {% data variables.product.prodname_enterprise %}. Para obter mais informações, confira "[Como configurar o TLS](/enterprise/admin/guides/installation/configuring-tls)".

Use o sinalizador `-x` para remover a configuração ACME.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

Este utilitário permite instalar um certificado CA personalizado de raiz no seu appliance do {% data variables.product.prodname_enterprise %}. O certificado deve estar no formato PEM. Além disso, se o provedor de certificado incluir vários certificados de AC em um só arquivo, você precisará separá-los em arquivos que serão transmitidos individualmente para `ghe-ssl-ca-certificate-install`.

Execute este utilitário para adicionar uma cadeia de certificados para verificação de assinatura de commits S/MIME. Para obter mais informações, confira "[Sobre a verificação de assinatura de commit](/enterprise/user/articles/about-commit-signature-verification/)".

Execute este utilitário quando a {% data variables.location.product_location %} não conseguir se conectar a outro servidor por estar usando um certificado SSL autoassinado ou um certificado SSL que não tem o pacote da AC necessário. Uma forma de confirmar isso é executar `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` em {% data variables.location.product_location %}. Se o certificado SSL do servidor remoto puder ser verificado, a `SSL-Session` terá um código de retorno igual a 0, conforme mostrado abaixo.

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

Por outro lado, se o certificado SSL do servidor remoto *não* puder ser verificado, a `SSL-Session` terá um código de retorno diferente de zero:

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

É possível usar estas opções adicionais com o utilitário:
- O sinalizador `-r` permite desinstalar um Certificado de Autoridade de Certificação.
- O sinalizador `-h` exibe mais informações de uso.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

Esse utilitário permite atualizar um certificado SSL para {% data variables.location.product_location %}. 

Para saber mais sobre este comando ou ver opções adicionais, use o sinalizador `-h`.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

Com este utilitário, você pode gerar uma chave privada e uma solicitação de assinatura de certificado (CSR, Certificate Signing Request) a ser compartilhada com uma autoridade certificada comercial ou privada para obter um certificado válido na sua instância. Para obter mais informações, confira "[Como configurar o TLS](/enterprise/admin/guides/installation/configuring-tls)".

Para saber mais sobre este comando ou ver opções adicionais, use o sinalizador `-h`.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Algumas plataformas exigem este script para aumentar o volume de usuários. Para obter mais informações, confira "[Como aumentar a capacidade de armazenamento](/enterprise/admin/guides/installation/increasing-storage-capacity/)".

```shell
$ ghe-storage-extend
```

### ghe-version

Esse utilitário imprime a versão, a plataforma e o build de {% data variables.location.product_location %}.

```shell
$ ghe-version
```

### ghe-webhook-logs

Este utilitário retorna logs de entrega de webhook para os administradores revisarem e identificarem problemas.

```shell
ghe-webhook-logs
```

Para mostrar todas as entregas de gancho com falha no último dia: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

O formato de data deve ser `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` ou `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

Para mostrar a carga total do gancho, o resultado e as exceções da entrega: {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## Clustering

### ghe-cluster-status

Verifique a saúde dos seus nós e serviços em uma implantação de clustering de {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

Este utilitário cria um pacote de suporte tarball com logs importantes de cada nó em configurações de replicação geográfica ou de cluster.

Por padrão, o comando cria o tarball em */tmp*, mas você também pode executar `cat` no tarball para `STDOUT` a fim de facilitar o streaming via SSH. Isso é útil caso a interface da Web não responda ou caso o download de um pacote de suporte de */setup/support* não funcione. Você precisa usar este comando caso deseje gerar um pacote *estendido*, contendo logs mais antigos. Também é possível usá-lo para fazer upload do pacote de suporte de cluster diretamente para o suporte do {% data variables.product.prodname_enterprise %}.

Para criar um pacote padrão:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Para criar um pacote estendido:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Para enviar um pacote para {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

Para enviar um pacote para {% data variables.contact.github_support %} e associar o pacote a um tíquete:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

Falha ao sair de nós de cluster ativos para nós de cluster passivo. Para obter mais informações, confira "[Como iniciar um failover no cluster de réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)".

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

Este utilitário permite que você gerencie o servidor distribuído {% data variables.product.prodname_pages %}.

```shell
ghe-dpages
```

Para mostrar um resumo da localização e saúde do repositório:
```shell
ghe-dpages status
```

Para evacuar um serviço de armazenamento {% data variables.product.prodname_pages %} antes de evacuar um nó de cluster:
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

Este utilitário permite gerenciar as três cópias de cada repositório nos servidores distribuídos do git.

```shell
ghe-spokes
```

Para mostrar um resumo da localização e saúde do repositório:

```shell
ghe-spokes status
```

Para mostrar os servidores em que o repositório está armazenado:

```shell
ghe-spokes route
```

Para evacuar os serviços de armazenamento em um nó de cluster:

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

Este utilitário permite remover todos os serviços de armazenamento antes de remover um nó de cluster.

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

Uma interface do tipo `top` para as operações atuais do Git.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

Este utilitário ajuda a analisar o tráfego do Git. Ele consulta arquivos de dados do _Governor_, localizados em `/data/user/gitmon`. {% data variables.product.company_short %} mantém uma hora de dados por arquivo, retidos por duas semanas. Para obter mais informações, confira [Como analisar o tráfego do Git usando o Governor](https://github.community/t/analyzing-git-traffic-using-governor/13516) no {% data variables.product.prodname_github_community %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

Este utilitário permite alterar para o diretório de um repositório e abrir um shell interativo como o usuário do `git`. Você pode fazer a inspeção ou a manutenção manual de um repositório usando comandos como `git-*` ou `git-nw-*`.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

Este utilitário reempacota manualmente uma rede de repositórios para otimizar o armazenamento do pacote. Se você tem um repositório muito grande, esse comando pode ajudar a reduzir o tamanho. O {% data variables.product.prodname_enterprise %} executa automaticamente este comando durante toda a sua interação com uma rede de repositórios.

Adicione o argumento opcional `--prune` para remover objetos do Git inacessíveis que não são referenciados em um branch, uma marca ou em nenhuma outra referência. Isso é particularmente útil para remover de imediato as [informações confidenciais já eliminadas](/enterprise/user/articles/remove-sensitive-data/).

{% warning %}

**Aviso**: ao usar o argumento `--prune` para remover objetos do Git inacessíveis, coloque a {% data variables.location.product_location %} no modo de manutenção ou verifique se todos os repositórios da mesma rede de repositórios estão bloqueados. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)".

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

Este utilitário verifica se todos os serviços para {% data variables.product.prodname_actions %} são saudáveis. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)" e "[Solução de problemas do {% data variables.product.prodname_actions %} para sua empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)".

```shell
ghe-actions-check
```

### ghe-actions-precheck

Esse utilitário testa a configuração do armazenamento do blobs do {% data variables.product.prodname_actions %} em {% data variables.location.product_location %}. Você pode usar o utilitário para verificar sua configuração de armazenamento antes de habilitar o {% data variables.product.prodname_actions %} para sua instância.

Para obter mais informações sobre a configuração do {% data variables.product.prodname_actions %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

Se o sistema de armazenamento estiver configurado corretamente, você verá a seguinte saída.

```
All Storage tests passed
```

## Importação e exportação

### ghe-migrator

O `ghe-migrator` é uma ferramenta de alta fidelidade que ajuda a fazer migrações de uma instância do GitHub para outra. Você pode consolidar suas instâncias ou mover a organização, os usuários, as equipes e os repositórios do GitHub.com para o {% data variables.product.prodname_enterprise %}.

Para obter mais informações, confira nossos guias sobre [como migrar dados na sua empresa](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### git-import-detect

Em uma URL, detecta qual tipo de sistema de gerenciamento de controle de origem está na outra extremidade. Provavelmente esse processo já é conhecido nas importações manuais, mas pode ser muito útil em scripts automatizados.
```shell
git-import-detect
```

### git-import-hg-raw

Este utilitário importa um repositório Mercurial para este repositório Git. Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-hg-raw
```

### git-import-svn-raw

Este utilitário importa histórico do Subversion e dados de arquivos para um branch do Git. Trata-se de uma cópia direta da árvore, ignorando qualquer distinção de trunk ou branch. Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-svn-raw
```

### git-import-tfs-raw

Este utilitário faz a importação a partir do Controle de Versão da Fundação da Equipe (TFVC). Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-tfs-raw
```

### git-import-rewrite

Este utilitário reescreve o repositório importado. Isso dá a você a oportunidade de renomear autores e, para o Subversion e TFVC, produz branches Git baseados em pastas. Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## Segurança

### ghe-find-insecure-git-operations

Esse utilitário pesquisa os logs da instância e identifica as operações do Git por SSH que usam algoritmos inseguros ou funções de hash, incluindo criptografias DSA, RSA-SHA-1, HMAC-SHA-1 e CBC. Você pode usar a saída para dar suporte à transição de cada cliente para uma conexão SSH mais segura. Para obter mais informações, confira [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}.{% elsif ghes > 3.5 %} e "[Como configurar conexões SSH cmo a sua instância](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)."{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## Suporte

### ghe-diagnostics

Este utilitário faz uma série de verificações e reúne informações sobre a instalação que você pode enviar ao suporte para ajudar a diagnosticar problemas.

No momento, a saída do utilitário é semelhante ao download das informações de diagnóstico no {% data variables.enterprise.management_console %}, mas ele pode ter melhorias adicionais ao longo do tempo que não estão disponíveis na interface da web. Para obter mais informações, confira "[Como criar e compartilhar arquivos de diagnóstico](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)".

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} Este utilitário cria um pacote de suporte tarball com logs importantes da sua instância.

Por padrão, o comando cria o tarball em */tmp*, mas você também pode executar `cat` no tarball para `STDOUT` a fim de facilitar o streaming via SSH. Isso é útil caso a interface da Web não responda ou caso o download de um pacote de suporte de */setup/support* não funcione. Você precisa usar este comando caso deseje gerar um pacote *estendido*, contendo logs mais antigos. Também é possível usá-lo para fazer upload do pacote de suporte diretamente para o suporte do {% data variables.product.prodname_enterprise %}.

Para criar um pacote padrão:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Para criar um pacote estendido:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Para enviar um pacote para {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

Para enviar um pacote para {% data variables.contact.github_support %} e associar o pacote a um tíquete:

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

Este utilitário envia informações do seu appliance para o suporte do {% data variables.product.prodname_enterprise %}. Você pode especificar um arquivo local ou fornecer um fluxo de até 100 MB de dados por meio de `STDIN`. Os dados carregados também podem ser associados a um tíquete de suporte.

Para enviar um arquivo para {% data variables.contact.github_support %} e associar o arquivo a um tíquete:
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

Para carregar dados por meio de `STDIN` e associá-los a um tíquete:
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

Neste exemplo, `ghe-repl-status -vv` envia informações de status detalhadas em um dispositivo de réplica. Substitua `ghe-repl-status -vv` pelos dados específicos que deseja transmitir para `STDIN` e `Verbose Replication Status` por uma breve descrição dos dados. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Atualização do {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

Este utilitário instala ou verifica um pacote de atualização. Também é possível usá-lo para voltar a uma versão de patch em casos de falha ou interrupção de uma atualização. Para obter mais informações, confira "[Como atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

Para verificar um pacote de atualização:
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

Para instalar um pacote de atualização:
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

Este utilitário gerencia a instalação programada de pacotes de atualização. Você pode exibir, criar ou remover instalações programadas. Crie as programações usando expressões cron. Para obter mais informações, confira a [entrada do Cron na Wikipédia](https://en.wikipedia.org/wiki/Cron#Overview).

O utilitário `ghe-upgrade-scheduler` é mais adequado para agendar atualizações de patch dinâmico, que não requerem modo de manutenção ou reinicialização na maioria dos casos. Esse utilitário não é prático para atualizações completas de pacote, que exigem que um administrador defina manualmente o modo de manutenção, reinicialize a instância e desinstale o modo de manutenção. Para obter mais informações sobre os diferentes tipos de atualizações, confira "[Como atualizar o {% data variables.product.product_name %}](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package)"

Para agendar uma nova instalação para um pacote:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

Para exibir instalações programadas para um pacote:
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

Para remover instalações programadas para um pacote:
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

Este utilitário verificará se uma nova versão do patch do {% data variables.product.prodname_enterprise %} está disponível. Se estiver e se houver espaço disponível na sua instância, ele baixará o pacote. Por padrão, ele é salvo em */var/lib/ghe-updates*. Em seguida, um administrador pode [executar a atualização](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Um arquivo contendo o status do download fica disponível em */var/lib/ghe-updates/ghe-update-check.status*.

Para verificar a última versão do {% data variables.product.prodname_enterprise %}, use a opção `-i`.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## Gerenciamento de Usuários

### ghe-license-usage

Este utilitário exporta uma lista de usuários da instalação em formato JSON. Se sua instância estiver conectada ao {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} usa essa informação para reportar informações de licenciamento ao {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Como conectar sua conta corporativa ao {% data variables.product.prodname_ghe_cloud %} ](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

Por padrão, a lista de usuários no arquivo JSON resultante é criptografada. Use o sinalizador `-h` para ver mais opções.

```shell
ghe-license-usage
```

### ghe-org-membership-update

Este utilitário aplicará a configuração padrão de visibilidade da associação da organização a todos os integrantes da sua instância. Para obter mais informações, confira "[Como configurar a visibilidade da associação à organização](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)". As opções de configuração são `public` ou `private`.

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

Este utilitário exporta uma lista de todos os usuários na instalação em formato CSV. O arquivo CSV inclui o endereço de email, o tipo de usuário (por exemplo, administrador, usuário), a quantidade de repositórios, chaves SSH e associações a uma organização, o último endereço IP registrado etc. Use o sinalizador `-h` para ver mais opções.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

Este utilitário rebaixa o usuário especificado do status de administrador para o status de usuário regular. Recomendamos usar a interface do usuário da Web para executar esta ação, mas forneça esse utilitário em caso de erro na execução do utilitário `ghe-user-promote` e se você precisar rebaixar um usuário novamente por meio da CLI.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

Este utilitário promove a conta de usuário especificada a administrador do site.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

Este utilitário suspende o usuário especificado, impedindo-o de fazer login, push ou pull nos seus repositórios.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

Este utilitário cancela a suspensão do usuário especificado, liberando o acesso para fazer login, push ou pull nos seus repositórios.

```shell
ghe-user-unsuspend USERNAME
```
