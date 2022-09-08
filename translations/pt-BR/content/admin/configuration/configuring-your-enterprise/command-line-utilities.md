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
ms.openlocfilehash: fbc378d84c74187fe3e38ea340b0f06e21410669
ms.sourcegitcommit: da73949b8f8bd71d40247f1f9c49f8f4c362ecd0
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/28/2022
ms.locfileid: '147432053'
---
Depois de entrar como usuário administrador com SSH, você pode executar esses comandos de qualquer lugar na VM. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".

## <a name="general"></a>Geral

### <a name="ghe-announce"></a>ghe-announce

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

### <a name="ghe-aqueduct"></a>ghe-aqueduct

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
$ ghe-aqueduct queue_depth --queue <em>QUEUE</em>
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue <em>QUEUE</em>
# pauses the specified queue
$ ghe-aqueduct resume --queue <em>QUEUE</em>
# resumes the specified queue
```
{% endif %}

### <a name="ghe-check-disk-usage"></a>ghe-check-disk-usage

Este utilitário verifica se há arquivos grandes ou arquivos excluídos no disco, mas que ainda têm identificadores abertos. Deve ser executado para liberar espaço na partição raiz.

```shell
ghe-check-disk-usage
```

### <a name="ghe-cleanup-caches"></a>ghe-cleanup-caches

Este utilitário limpa uma série de caches que podem vir a ocupar espaço extra em disco no volume raiz. Se você perceber que o uso do espaço em disco do volume raiz aumenta muito ao longo do tempo, talvez seja uma boa ideia executar este utilitário e verificar se ele ajuda a reduzir o uso geral.

```shell
ghe-cleanup-caches
```
### <a name="ghe-cleanup-settings"></a>ghe-cleanup-settings

Este utilitário apaga todas as configurações do {% data variables.enterprise.management_console %}.

{% tip %}

**Dica**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### <a name="ghe-config"></a>ghe-config

Com este utilitário, você pode recuperar e modificar as definições de configuração da {% data variables.product.product_location %}.

```shell
$ ghe-config <em>core.github-hostname</em>
# Gets the configuration value of `core.github-hostname`
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# Sets the configuration value of `core.github-hostname` to `example.com`
$ ghe-config -l
# Lists all the configuration values
```
Permite encontrar o UUID (identificador universalmente exclusivo) do seu nó em `cluster.conf`.

```shell
  $ ghe-config <em>HOSTNAME</em>.uuid
```

{% ifversion ghes %} Permite isentar uma lista de usuários dos limites de taxa da API REST. Um limite rígido de 120.000 solicitações ainda será aplicado a esses usuários. Para obter mais informações, confira "[Recursos da API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "<em>hubot</em> <em>github-actions</em>"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### <a name="ghe-config-apply"></a>ghe-config-apply

Este utilitário aplica configurações do {% data variables.enterprise.management_console %}, recarrega os serviços do sistema, prepara um dispositivo de armazenamento, recarrega os serviços de aplicativos e executa as migrações pendentes de banco de dados. Isso é equivalente a clicar em **Salvar configurações** na interface do usuário da Web do {% data variables.enterprise.management_console %} ou a enviar uma solicitação POST [ao ponto de extremidade `/setup/api/configure`](/enterprise/user/rest/reference/enterprise-admin#management-console).

É provável que você não precise executar essa ação manualmente, mas é possível fazer isso caso você queira automatizar o processo de salvar suas configurações via SSH.

```shell
ghe-config-apply
```

### <a name="ghe-console"></a>ghe-console

Este utilitário abre o console do GitHub Rails no appliance do {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### <a name="ghe-dbconsole"></a>ghe-dbconsole

Este utilitário abre uma sessão do banco de dados MySQL no appliance do {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### <a name="ghe-es-index-status"></a>ghe-es-index-status
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

### <a name="ghe-legacy-github-services-report"></a>ghe-legacy-github-services-report

Este utilitário lista os repositórios no appliance que usam o {% data variables.product.prodname_dotcom %} Services, um método de integração que será descontinuado em 1 de outubro de 2018. Os usuários do seu appliance podem ter configurado o {% data variables.product.prodname_dotcom %} Services para criar notificações de pushes em determinados repositórios. Para obter mais informações, confira "[Comunicado sobre a reprovação do {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" no {% data variables.product.prodname_blog %} ou "[Substituição do {% data variables.product.prodname_dotcom %} Services](/developers/overview/replacing-github-services)". Para saber mais sobre este comando ou ver opções adicionais, use o sinalizador `-h`.

```shell
ghe-legacy-github-services-report

```

### <a name="ghe-logs-tail"></a>ghe-logs-tail

Este utilitário permite registrar todos os arquivos de log relevantes da sua instalação. Você pode passar as opções para limitar os logs a conjuntos específicos. Para consultar opções adicionais, use o sinalizador -h.

```shell
ghe-logs-tail
```

### <a name="ghe-maintenance"></a>ghe-maintenance

Este utilitário permite controlar o estado do modo de manutenção da instalação. Ele foi desenvolvido para uso principalmente nos bastidores do {% data variables.enterprise.management_console %}, mas também pode ser usado diretamente. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

```shell
ghe-maintenance -h
```

### <a name="ghe-motd"></a>ghe-motd

Este utilitário exibe novamente a mensagem do dia (MOTD) que os administradores veem quando acessam a instância através do shell administrativo. A saída contém uma visão geral do estado da instância.

```shell
ghe-motd
```

### <a name="ghe-nwo"></a>ghe-nwo

Este utilitário retorna o nome e o proprietário de um repositório com base no ID do repositório.  

```shell
ghe-nwo <em>REPOSITORY_ID</em>
```

### <a name="ghe-org-admin-promote"></a>ghe-org-admin-promote

Use este comando para conceder privilégios de proprietário da organização a usuários com privilégios de administrador do site no appliance ou a qualquer usuário em uma única organização. Você deve especificar um usuário e/ou organização. O comando `ghe-org-admin-promote` sempre solicitará a confirmação antes da execução, a menos que você use o sinalizador `-y` para ignorar a confirmação.

É possível usar estas opções com o utilitário:

- O sinalizador `-u` especifica um nome de usuário. Use este sinalizador para conceder privilégios de proprietário da organização a um usuário. Omita o sinalizador `-u` para promover todos os administradores do site à organização especificada.
- O sinalizador `-o` especifica uma organização. Use este sinalizador para conceder privilégios de proprietário em uma organização. Omita o sinalizador `-o` para conceder permissões de proprietário em todas as organizações a um administrador do site especificado.
- O sinalizador `-a` concede privilégios de proprietário em todas as organizações a todos os administradores do site.
- O sinalizador `-y` ignora a confirmação manual.

Este utilitário não pode promover um administrador externo a proprietário de todas as organizações. Você pode promover uma conta de usuário comum a administrador do site com [ghe-user-promote](#ghe-user-promote).

Conceder privilégios de proprietário da organização em uma organização específica para um administrador específico do site

```shell
ghe-org-admin-promote -u <em>USERNAME</em> -o <em>ORGANIZATION</em>
```

Conceder privilégios de proprietário da organização a um administrador do site em todas as organizações

```shell
ghe-org-admin-promote -u <em>USERNAME</em>
```

Conceder privilégios de proprietário da organização a todos os administradores do site em uma organização específica

```shell
ghe-org-admin-promote -o <em>ORGANIZATION</em>
```

Conceder privilégios de proprietário da organização a todos os administradores do site em todas as organizações

```shell
ghe-org-admin-promote -a
```

### <a name="ghe-reactivate-admin-login"></a>ghe-reactivate-admin-login

Use este comando para desbloquear imediatamente o {% data variables.enterprise.management_console %} após 10 tentativas de login com falha no período de 10 minutos.

```shell
$ ghe-reactivate-admin-login
```


### <a name="ghe-saml-mapping-csv"></a>ghe-saml-mapping-csv

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

### <a name="ghe-service-list"></a>ghe-service-list

Este utilitário lista todos os serviços iniciados ou parados (em execução ou em espera) no appliance.

```shell
$ ghe-service-list
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
```

### <a name="ghe-set-password"></a>ghe-set-password

Com `ghe-set-password`, você pode definir uma nova senha para se autenticar no [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

### <a name="ghe-setup-network"></a>ghe-setup-network

Esse utilitário permite que você configure o adaptador de rede primário.

Para inserir o modo visual, que orientará você nas configurações de rede:

```shell
$ ghe-setup-network -v
```

Para consultar opções adicionais, use o sinalizador -h.

### <a name="ghe-ssh-check-host-keys"></a>ghe-ssh-check-host-keys

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

### <a name="ghe-ssh-roll-host-keys"></a>ghe-ssh-roll-host-keys

Este utilitário acumula as chaves do host SSH e as substitui por chaves recém-geradas.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### <a name="ghe-ssh-weak-fingerprints"></a>ghe-ssh-weak-fingerprints

Este utilitário retorna um relatório de chaves SSH fracas conhecidas armazenadas no appliance do {% data variables.product.prodname_enterprise %}. Você também pode revogar as chaves do usuário como uma ação em lote. O utilitário relatará as chaves fracas do sistema, que você precisará revogar manualmente no [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### <a name="ghe-ssl-acme"></a>ghe-ssl-acme

Este utilitário permite instalar um certificado Let's Encrypt no seu appliance do {% data variables.product.prodname_enterprise %}. Para obter mais informações, confira "[Como configurar o TLS](/enterprise/admin/guides/installation/configuring-tls)".

Use o sinalizador `-x` para remover a configuração ACME.

```shell
ghe-ssl-acme -e
```

### <a name="ghe-ssl-ca-certificate-install"></a>ghe-ssl-ca-certificate-install

Este utilitário permite instalar um certificado CA personalizado de raiz no seu appliance do {% data variables.product.prodname_enterprise %}. O certificado deve estar no formato PEM. Além disso, se o provedor de certificado incluir vários certificados de AC em um só arquivo, você precisará separá-los em arquivos que serão transmitidos individualmente para `ghe-ssl-ca-certificate-install`.

Execute este utilitário para adicionar uma cadeia de certificados para verificação de assinatura de commits S/MIME. Para obter mais informações, confira "[Sobre a verificação de assinatura de commit](/enterprise/user/articles/about-commit-signature-verification/)".

Execute este utilitário quando a {% data variables.product.product_location %} não conseguir se conectar a outro servidor por estar usando um certificado SSL autoassinado ou um certificado SSL para o qual não há o pacote da AC necessário. Uma forma de confirmar isso é executar `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` na {% data variables.product.product_location %}. Se o certificado SSL do servidor remoto puder ser verificado, a `SSL-Session` terá um código de retorno igual a 0, conforme mostrado abaixo.

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
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

### <a name="ghe-ssl-certificate-setup"></a>ghe-ssl-certificate-setup

Este utilitário permite atualizar um certificado SSL para {% data variables.product.product_location %}. 

Para saber mais sobre este comando ou ver opções adicionais, use o sinalizador `-h`.

```shell
ghe-ssl-certificate-setup
```

### <a name="ghe-ssl-generate-csr"></a>ghe-ssl-generate-csr

Com este utilitário, você pode gerar uma chave privada e uma solicitação de assinatura de certificado (CSR, Certificate Signing Request) a ser compartilhada com uma autoridade certificada comercial ou privada para obter um certificado válido na sua instância. Para obter mais informações, confira "[Como configurar o TLS](/enterprise/admin/guides/installation/configuring-tls)".

Para saber mais sobre este comando ou ver opções adicionais, use o sinalizador `-h`.

```shell
ghe-ssl-generate-csr
```

### <a name="ghe-storage-extend"></a>ghe-storage-extend

Algumas plataformas exigem este script para aumentar o volume de usuários. Para obter mais informações, confira "[Como aumentar a capacidade de armazenamento](/enterprise/admin/guides/installation/increasing-storage-capacity/)".

```shell
$ ghe-storage-extend
```

### <a name="ghe-version"></a>ghe-version

Este utilitário imprime a versão, a plataforma e a compilação de {% data variables.product.product_location %}.

```shell
$ ghe-version
```

### <a name="ghe-webhook-logs"></a>ghe-webhook-logs

Este utilitário retorna logs de entrega de webhook para os administradores revisarem e identificarem problemas.

```shell
ghe-webhook-logs
```

Para mostrar todas as entregas de gancho com falha no último dia: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a <em>YYYY-MM-DD</em>
```

O formato de data deve ser `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` ou `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```
{% endif %}

Para mostrar a carga total do gancho, o resultado e as exceções da entrega: {% ifversion ghes %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em>
```
{% else %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```
{% endif %}

## <a name="clustering"></a>Clustering

### <a name="ghe-cluster-status"></a>ghe-cluster-status

Verifique a saúde dos seus nós e serviços em uma implantação de clustering de {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### <a name="ghe-cluster-support-bundle"></a>ghe-cluster-support-bundle

Este utilitário cria um pacote de suporte tarball com logs importantes de cada nó em configurações de replicação geográfica ou de cluster.

Por padrão, o comando cria o tarball em */tmp*, mas você também pode executar `cat` no tarball para `STDOUT` a fim de facilitar o streaming via SSH. Isso é útil caso a interface da Web não responda ou caso o download de um pacote de suporte de */setup/support* não funcione. Você precisa usar este comando caso deseje gerar um pacote *estendido*, contendo logs mais antigos. Também é possível usá-lo para fazer upload do pacote de suporte de cluster diretamente para o suporte do {% data variables.product.prodname_enterprise %}.

Para criar um pacote padrão:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Para criar um pacote estendido:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Para enviar um pacote para {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -u'
```

Para enviar um pacote para {% data variables.contact.github_support %} e associar o pacote a um tíquete:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -t <em>ticket-id</em>'
```

{% ifversion ghes %}
### <a name="ghe-cluster-failover"></a>ghe-cluster-failover

Falha ao sair de nós de cluster ativos para nós de cluster passivo. Para obter mais informações, confira "[Como iniciar um failover no cluster de réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)".

```shell
ghe-cluster-failover
```
{% endif %}

### <a name="ghe-dpages"></a>ghe-dpages

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
ghe-dpages evacuate pages-server-<em>UUID</em>
```

### <a name="ghe-spokes"></a>ghe-spokes

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
ghe-spokes server evacuate git-server-<em>UUID</em>
```

### <a name="ghe-storage"></a>ghe-storage

Este utilitário permite remover todos os serviços de armazenamento antes de remover um nó de cluster.

```shell
ghe-storage evacuate storage-server-<em>UUID</em>
```

## <a name="git"></a>Git

### <a name="ghe-btop"></a>ghe-btop

Uma interface do tipo `top` para as operações atuais do Git.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### <a name="ghe-governor"></a>ghe-governor

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

### <a name="ghe-repo"></a>ghe-repo

Este utilitário permite alterar para o diretório de um repositório e abrir um shell interativo como o usuário do `git`. Você pode fazer a inspeção ou a manutenção manual de um repositório usando comandos como `git-*` ou `git-nw-*`.

```shell
ghe-repo <em>username</em>/<em>reponame</em>
```

### <a name="ghe-repo-gc"></a>ghe-repo-gc

Este utilitário reempacota manualmente uma rede de repositórios para otimizar o armazenamento do pacote. Se você tem um repositório muito grande, esse comando pode ajudar a reduzir o tamanho. O {% data variables.product.prodname_enterprise %} executa automaticamente este comando durante toda a sua interação com uma rede de repositórios.

Adicione o argumento opcional `--prune` para remover objetos do Git inacessíveis que não são referenciados em um branch, uma marca ou em nenhuma outra referência. Isso é particularmente útil para remover de imediato as [informações confidenciais já eliminadas](/enterprise/user/articles/remove-sensitive-data/).

{% warning %}

**Aviso**: para usar o argumento `--prune` para remover objetos Git inacessíveis, coloque o {% data variables.product.product_location %} no modo de manutenção ou confirme se o repositório está offline. Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)".

{% endwarning %}

```shell
ghe-repo-gc <em>username</em>/<em>reponame</em>
```

## <a name="-data-variablesproductprodname_actions-"></a>{% data variables.product.prodname_actions %}

### <a name="ghe-actions-check"></a>ghe-actions-check

Este utilitário verifica se todos os serviços para {% data variables.product.prodname_actions %} são saudáveis. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)" e "[Solução de problemas do {% data variables.product.prodname_actions %} para sua empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)".

```shell
ghe-actions-check
```

### <a name="ghe-actions-precheck"></a>ghe-actions-precheck

Este utilitário testa a configuração de armazenamento do blob para {% data variables.product.prodname_actions %} em {% data variables.product.product_location %}. Você pode usar o utilitário para verificar sua configuração de armazenamento antes de habilitar o {% data variables.product.prodname_actions %} para sua instância.

Para obter mais informações sobre a configuração do {% data variables.product.prodname_actions %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

```shell
ghe-actions-precheck -p [<em>provider</em>] -cs ["<em>connectionstring</em>"]
```

Se o sistema de armazenamento estiver configurado corretamente, você verá a seguinte saída.

```
All Storage tests passed
```

## <a name="import-and-export"></a>Importação e exportação

### <a name="ghe-migrator"></a>ghe-migrator

O `ghe-migrator` é uma ferramenta de alta fidelidade que ajuda a fazer migrações de uma instância do GitHub para outra. Você pode consolidar suas instâncias ou mover a organização, os usuários, as equipes e os repositórios do GitHub.com para o {% data variables.product.prodname_enterprise %}.

Para obter mais informações, confira nossos guias sobre [como migrar dados na sua empresa](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### <a name="git-import-detect"></a>git-import-detect

Em uma URL, detecta qual tipo de sistema de gerenciamento de controle de origem está na outra extremidade. Provavelmente esse processo já é conhecido nas importações manuais, mas pode ser muito útil em scripts automatizados.
```shell
git-import-detect
```

### <a name="git-import-hg-raw"></a>git-import-hg-raw

Este utilitário importa um repositório Mercurial para este repositório Git. Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-hg-raw
```

### <a name="git-import-svn-raw"></a>git-import-svn-raw

Este utilitário importa histórico do Subversion e dados de arquivos para um branch do Git. Trata-se de uma cópia direta da árvore, ignorando qualquer distinção de trunk ou branch. Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-svn-raw
```

### <a name="git-import-tfs-raw"></a>git-import-tfs-raw

Este utilitário faz a importação a partir do Controle de Versão da Fundação da Equipe (TFVC). Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-tfs-raw
```

### <a name="git-import-rewrite"></a>git-import-rewrite

Este utilitário reescreve o repositório importado. Isso dá a você a oportunidade de renomear autores e, para o Subversion e TFVC, produz branches Git baseados em pastas. Para obter mais informações, confira "[Como importar dados de sistemas de controle de versão de terceiros](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)".
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## <a name="security"></a>Segurança

### <a name="ghe-find-insecure-git-operations"></a>ghe-find-insecure-git-operations

Esse utilitário pesquisa os logs da instância e identifica as operações do Git por SSH que usam algoritmos inseguros ou funções de hash, incluindo criptografias DSA, RSA-SHA-1, HMAC-SHA-1 e CBC. Você pode usar a saída para dar suporte à transição de cada cliente para uma conexão SSH mais segura. Para obter mais informações, confira [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}.{% elsif ghes > 3.5 %} e "[Como configurar conexões SSH cmo a sua instância](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)."{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## <a name="support"></a>Suporte

### <a name="ghe-diagnostics"></a>ghe-diagnostics

Este utilitário faz uma série de verificações e reúne informações sobre a instalação que você pode enviar ao suporte para ajudar a diagnosticar problemas.

No momento, a saída do utilitário é semelhante ao download das informações de diagnóstico no {% data variables.enterprise.management_console %}, mas ele pode ter melhorias adicionais ao longo do tempo que não estão disponíveis na interface da web. Para obter mais informações, confira "[Como criar e compartilhar arquivos de diagnóstico](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)".

```shell
ghe-diagnostics
```

### <a name="ghe-support-bundle"></a>ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} Este utilitário cria um pacote de suporte tarball com logs importantes da sua instância.

Por padrão, o comando cria o tarball em */tmp*, mas você também pode executar `cat` no tarball para `STDOUT` a fim de facilitar o streaming via SSH. Isso é útil caso a interface da Web não responda ou caso o download de um pacote de suporte de */setup/support* não funcione. Você precisa usar este comando caso deseje gerar um pacote *estendido*, contendo logs mais antigos. Também é possível usá-lo para fazer upload do pacote de suporte diretamente para o suporte do {% data variables.product.prodname_enterprise %}.

Para criar um pacote padrão:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Para criar um pacote estendido:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Para enviar um pacote para {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
```

Para enviar um pacote para {% data variables.contact.github_support %} e associar o pacote a um tíquete:

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -t <em>ticket-id</em>'
```

### <a name="ghe-support-upload"></a>ghe-support-upload

Este utilitário envia informações do seu appliance para o suporte do {% data variables.product.prodname_enterprise %}. Você pode especificar um arquivo local ou fornecer um fluxo de até 100 MB de dados por meio de `STDIN`. Os dados carregados também podem ser associados a um tíquete de suporte.

Para enviar um arquivo para {% data variables.contact.github_support %} e associar o arquivo a um tíquete:
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

Para carregar dados por meio de `STDIN` e associá-los a um tíquete:
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

Neste exemplo, `ghe-repl-status -vv` envia informações de status detalhadas em um dispositivo de réplica. Substitua `ghe-repl-status -vv` pelos dados específicos que deseja transmitir para `STDIN` e `Verbose Replication Status` por uma breve descrição dos dados. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## <a name="upgrading--data-variablesproductprodname_ghe_server-"></a>Atualização do {% data variables.product.prodname_ghe_server %}

### <a name="ghe-upgrade"></a>ghe-upgrade

Este utilitário instala ou verifica um pacote de atualização. Também é possível usá-lo para voltar a uma versão de patch em casos de falha ou interrupção de uma atualização. Para obter mais informações, confira "[Como atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

Para verificar um pacote de atualização:
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

Para instalar um pacote de atualização:
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### <a name="ghe-upgrade-scheduler"></a>ghe-upgrade-scheduler

Este utilitário gerencia a instalação programada de pacotes de atualização. Você pode exibir, criar ou remover instalações programadas. Crie as programações usando expressões cron. Para obter mais informações, confira a [entrada do Cron na Wikipédia](https://en.wikipedia.org/wiki/Cron#Overview).

Para agendar uma nova instalação para um pacote:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" <em>UPGRADE-PACKAGE-FILENAME</em>
```

Para exibir instalações programadas para um pacote:
```shell
$ ghe-upgrade-scheduler -s <em>UPGRADE PACKAGE FILENAME</em>
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s <em>UPGRADE-PACKAGE-FILENAME</em> > /data/user/common/<em>UPGRADE-PACKAGE-FILENAME</em>.log 2>&1
```

Para remover instalações programadas para um pacote:
```shell
$ ghe-upgrade-scheduler -r <em>UPGRADE PACKAGE FILENAME</em>
```

### <a name="ghe-update-check"></a>ghe-update-check

Este utilitário verificará se uma nova versão do patch do {% data variables.product.prodname_enterprise %} está disponível. Se estiver e se houver espaço disponível na sua instância, ele baixará o pacote. Por padrão, ele é salvo em */var/lib/ghe-updates*. Em seguida, um administrador pode [executar a atualização](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Um arquivo contendo o status do download fica disponível em */var/lib/ghe-updates/ghe-update-check.status*.

Para verificar a última versão do {% data variables.product.prodname_enterprise %}, use a opção `-i`.

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

## <a name="user-management"></a>Gerenciamento de Usuários

### <a name="ghe-license-usage"></a>ghe-license-usage

Este utilitário exporta uma lista de usuários da instalação em formato JSON. Se sua instância estiver conectada ao {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} usa essa informação para reportar informações de licenciamento ao {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Como conectar sua conta corporativa ao {% data variables.product.prodname_ghe_cloud %} ](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

Por padrão, a lista de usuários no arquivo JSON resultante é criptografada. Use o sinalizador `-h` para ver mais opções.

```shell
ghe-license-usage
```

### <a name="ghe-org-membership-update"></a>ghe-org-membership-update

Este utilitário aplicará a configuração padrão de visibilidade da associação da organização a todos os integrantes da sua instância. Para obter mais informações, confira "[Como configurar a visibilidade da associação à organização](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)". As opções de configuração são `public` ou `private`.

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

### `ghe-user-csv`

Este utilitário exporta uma lista de todos os usuários na instalação em formato CSV. O arquivo CSV inclui o endereço de email, o tipo de usuário (por exemplo, administrador, usuário), a quantidade de repositórios, chaves SSH e associações a uma organização, o último endereço IP registrado etc. Use o sinalizador `-h` para ver mais opções.

```shell
ghe-user-csv -o > users.csv
```

### <a name="ghe-user-demote"></a>ghe-user-demote

Este utilitário rebaixa o usuário especificado do status de administrador para o status de usuário regular. Recomendamos usar a interface do usuário da Web para executar esta ação, mas forneça esse utilitário em caso de erro na execução do utilitário `ghe-user-promote` e se você precisar rebaixar um usuário novamente por meio da CLI.

```shell
ghe-user-demote <em>some-user-name</em>
```

### <a name="ghe-user-promote"></a>ghe-user-promote

Este utilitário promove a conta de usuário especificada a administrador do site.

```shell
ghe-user-promote <em>some-user-name</em>
```

### <a name="ghe-user-suspend"></a>ghe-user-suspend

Este utilitário suspende o usuário especificado, impedindo-o de fazer login, push ou pull nos seus repositórios.

```shell
ghe-user-suspend <em>some-user-name</em>
```

### <a name="ghe-user-unsuspend"></a>ghe-user-unsuspend

Este utilitário cancela a suspensão do usuário especificado, liberando o acesso para fazer login, push ou pull nos seus repositórios.

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
