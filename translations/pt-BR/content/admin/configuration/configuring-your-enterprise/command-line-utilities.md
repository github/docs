---
title: Utilitários de linha de comando
intro: 'O {% data variables.product.prodname_ghe_server %} tem uma série de utilitários que ajudam a resolver problemas específicos ou a executar determinadas tarefas.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services/
  - /enterprise/admin/articles/command-line-utilities/
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - SSH
---

Depois de entrar como usuário administrador com SSH, você pode executar esses comandos de qualquer lugar na VM. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)".

### Geral

#### ghe-announce

Este utilitário insere um banner no topo de cada página do {% data variables.product.prodname_enterprise %}. Você pode usá-lo para enviar uma comunicação a todos os usuários.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Você também pode definir um banner de anúncio usando as configurações empresariais no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Personalizar mensagens de usuário na instância](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)".
{% endif %}

```shell
# Configura uma mensagem visível para todos
$ ghe-announce -s MESSAGE
> Mensagem de anúncio configurada
# Remove uma mensagem já configurada
$ ghe-announce -u
> Mensagem de anúncio removida
```

#### ghe-check-disk-usage

Este utilitário verifica se há arquivos grandes ou arquivos excluídos no disco, mas que ainda têm identificadores abertos. Deve ser executado para liberar espaço na partição raiz.

```shell
ghe-check-disk-usage
```

#### ghe-cleanup-caches

Este utilitário limpa uma série de caches que podem vir a ocupar espaço extra em disco no volume raiz. Se você perceber que o uso do espaço em disco do volume raiz aumenta muito ao longo do tempo, talvez seja uma boa ideia executar este utilitário e verificar se ele ajuda a reduzir o uso geral.

```shell
ghe-cleanup-caches
```
#### ghe-cleanup-settings

Este utilitário apaga todas as configurações do {% data variables.enterprise.management_console %}.

{% tip %}

**Dica**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

#### ghe-config

Com este utilitário, você pode recuperar e modificar as definições de configuração da {% data variables.product.product_location %}.

```shell
$ ghe-config <em>core.github-hostname</em>
# Gera o valor de configuração de `core.github-hostname`
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# Define o valor de configuração de `core.github-hostname` como `example.com`
$ ghe-config -l
# Lista todos os valores de configuração
```
Permite encontrar o identificador universalmente exclusivo (UUID) do seu nó em `cluster.conf`.

```shell
  $ ghe-config <em>HOSTNAME</em>.uuid
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Permite isentar uma lista de usuários do limite de taxa de da API. Para obter mais informações, consulte "[Recursos na API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "<em>hubot</em> <em>github-actions</em>"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

#### ghe-config-apply

Este utilitário aplica configurações do {% data variables.enterprise.management_console %}, recarrega os serviços do sistema, prepara um dispositivo de armazenamento, recarrega os serviços de aplicativos e executa as migrações pendentes de banco de dados. Ele equivale a clicar em **Save settings** (Salvar configurações) na IU da web do {% data variables.enterprise.management_console %} ou a enviar uma solicitação POST [ao endpoint `/setup/api/configure`](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console).

É provável que você não precise executar essa ação manualmente, mas é possível fazer isso caso você queira automatizar o processo de salvar suas configurações via SSH.

```shell
ghe-config-apply
```

#### ghe-console

Este utilitário abre o console do GitHub Rails no appliance do {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

#### ghe-dbconsole

Este utilitário abre uma sessão do banco de dados MySQL no appliance do {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

#### ghe-es-index-status
Este utilitário retorna um resumo dos índices do Elasticsearch no formato CSV.

Imprimir um resumo do índice com uma linha de header em `STDOUT`:
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

Imprimir um resumo do índice e os resultados em `column` para facilitar a leitura:

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

#### ghe-legacy-github-services-report

Este utilitário lista os repositórios no appliance que usam o {% data variables.product.prodname_dotcom %} Services, um método de integração que será descontinuado em 1 de outubro de 2018. Os usuários do seu appliance podem ter configurado o {% data variables.product.prodname_dotcom %} Services para criar notificações de pushes em determinados repositórios. Para obter mais informações, consulte "[Anunciar a depreciação dos serviços de {% data variables.product.prodname_dotcom %}](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" em {% data variables.product.prodname_blog %} ou "[Substituir serviços de {% data variables.product.prodname_dotcom %}](/developers/overview/replacing-github-services)". Para saber mais sobre este comando ou consultar opções adicionais, use o sinalizador `-h`.

```shell
ghe-legacy-github-services-report

```

#### ghe-logs-tail

Este utilitário permite registrar todos os arquivos de log relevantes da sua instalação. Você pode passar as opções para limitar os logs a conjuntos específicos. Para consultar opções adicionais, use o sinalizador -h.

```shell
ghe-logs-tail
```

#### ghe-maintenance

Este utilitário permite controlar o estado do modo de manutenção da instalação. Ele foi desenvolvido para uso principalmente nos bastidores do {% data variables.enterprise.management_console %}, mas também pode ser usado diretamente.

```shell
ghe-maintenance -h
```

#### ghe-motd

Este utilitário exibe novamente a mensagem do dia (MOTD) que os administradores veem quando acessam a instância através do shell administrativo. A saída contém uma visão geral do estado da instância.

```shell
ghe-motd
```

#### ghe-nwo

Este utilitário retorna o nome e o proprietário de um repositório com base no ID do repositório.

```shell
ghe-nwo <em>REPOSITORY_ID</em>
```

#### ghe-org-admin-promote

Use este comando para conceder privilégios de proprietário da organização a usuários com privilégios de administrador do site no appliance ou a qualquer usuário em uma única organização. Você deve especificar um usuário e/ou organização. O comando `ghe-org-admin-promote` sempre solicitará a confirmação antes da execução, a menos que você use o sinalizador `-y` para ignorar essa etapa.

É possível usar estas opções com o utilitário:

- O sinalizador `-u` especifica um nome de usuário. Use este sinalizador para conceder privilégios de proprietário da organização a um usuário. Omita o sinalizador `-u` para promover todos os administradores do site à organização especificada.
- O sinalizador `-o` especifica uma organização. Use este sinalizador para conceder privilégios de proprietário em uma organização. Omita o sinalizador `-o` para conceder permissões de proprietário em todas as organizações a um administrador do site.
- O sinalizador `-a` concede privilégios de proprietário em todas as organizações a todos os administradores do site.
- O sinalizador `-y` ignora a confirmação manual.

Este utilitário não pode promover um administrador externo a proprietário de todas as organizações. Para promover uma conta de usuário comum a administrador do site, use [ghe-user-promote](#ghe-user-promote).

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

#### ghe-reactivate-admin-login

Use este comando para desbloquear imediatamente o {% data variables.enterprise.management_console %} após 10 tentativas de login com falha no período de 10 minutos.

```shell
$ ghe-reactivate-admin-login
```

#### ghe-resque-info

Este utilitário exibe informações sobre trabalhos em segundo plano, ativos e em fila. Ele fornece os mesmos números de contagem de trabalhos que a barra de estatísticas de administração, na parte superior de todas as páginas.

Este utilitário pode ajudar a identificar se o servidor Resque está tendo problemas ao processar trabalhos em segundo plano. Quaisquer dos cenários a seguir podem indicar problemas com o Resque:

* O número de trabalhos em segundo plano está aumentando, e os trabalhos ativos continuam iguais.
* Os feeds de evento não estão sendo atualizados.
* Webhooks não estão sendo acionados.
* A interface web não atualiza após um push do Git.

Se você desconfiar de falha no Resque, entre em contato com o {% data variables.contact.contact_ent_support %}.

Com este comando, também é possível pausar ou retomar trabalhos na fila.

```shell
$ ghe-resque-info
# lista filas e o número de trabalhos em fila
$ ghe-resque-info -p <em>QUEUE</em>
# pausa a fila especificada
$ ghe-resque-info -r <em>QUEUE</em>
# retoma a fila especificada
```

#### ghe-saml-mapping-csv

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

#### ghe-service-list

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

{% tip %}

Os nomes de serviço retornados deste comando podem ser usados com comandos "[`systemctl`](https://www.freedesktop.org/software/systemd/man/systemctl.html)" para interromper, iniciar ou reiniciar esses serviços manualmente, se necessário. Por exemplo:

```shell
$ sudo systemctl restart github-resqued
```

A interrupção dos serviços causará tempo de inatividade na instalação. Portanto, é recomendável entrar em contato com o {% data variables.contact.contact_ent_support %} antes de parar ou reiniciar qualquer serviço.

{% endtip %}

#### ghe-set-password

Com `ghe-set-password`, você pode definir uma nova senha para autenticação no [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

#### ghe-ssh-check-host-keys

Este utilitário verifica as chaves do host SSH atuais para identificar chaves vazadas conhecidas.

```shell
$ ghe-ssh-check-host-keys
```

Se houver alguma chave vazada, o utilitário exibirá o status `1` e a seguinte mensagem:
```shell
> Uma ou mais chaves do host SSH foram encontradas na lista de bloqueio.
> Redefina suas chaves de host usando ghe-ssh-roll-host-keys.
```

Se não houver chaves de host vazadas, o utilitário exibirá o status `0` e a seguinte mensagem:
```shell
> As chaves de host SSH não foram encontradas na lista de bloqueio.
> No momento, nenhuma etapa adicional é necessária/recomendada.
```

#### ghe-ssh-roll-host-keys

Este utilitário acumula as chaves do host SSH e as substitui por chaves recém-geradas.

```shell
$ sudo ghe-ssh-roll-host-keys
Continuar para acumular chaves de host SSH? Esta ação excluirá as
chaves atuais em /etc/ssh/ssh_host_* para gerar chaves novas. [y/N]

# Pressione 'Y' para confirmar a exclusão ou use o switch -y para ignorar esta solicitação

> chaves de host SSH foram acumuladas com êxito.
```

#### ghe-ssh-weak-fingerprints

Este utilitário retorna um relatório de chaves SSH fracas conhecidas armazenadas no appliance do {% data variables.product.prodname_enterprise %}. Você também pode revogar as chaves do usuário como uma ação em lote. O utilitário relatará as chaves de sistema fracas, que você deve revogar manualmente no [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console).

```shell
# Imprimir um relatório de chaves SSH fracas do usuário e do sistema
$ ghe-ssh-weak-fingerprints

# Revogar todas as chaves fracas de usuário
$ ghe-ssh-weak-fingerprints --revoke
```

#### ghe-ssl-acme

Este utilitário permite instalar um certificado Let's Encrypt no seu appliance do {% data variables.product.prodname_enterprise %}. Para obter mais informações, consulte "[Configurar o TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)".

Você pode usar o sinalizador `-x` para remover a configuração ACME.

```shell
ghe-ssl-acme -e
```

#### ghe-ssl-ca-certificate-install

Este utilitário permite instalar um certificado CA personalizado de raiz no seu appliance do {% data variables.product.prodname_enterprise %}. O certificado deve estar no formato PEM. Além disso, se o seu provedor de certificados incluir vários certificados CA em um só arquivo, você deverá separá-los em arquivos a serem passados individualmente para ` ghe-ssl-ca-certificate-install`.

Execute este utilitário para adicionar uma cadeia de certificados para verificação de assinatura de commits S/MIME. Para obter mais informações, consulte "[Sobre a verificação de assinatura de commit](/enterprise/{{ currentVersion }}/user/articles/about-commit-signature-verification/)".

Execute este utilitário quando a {% data variables.product.product_location %} não conseguir se conectar a outro servidor por ele estar usando um certificado SSL autoassinado ou um certificado SSL para o qual não há o pacote CA necessário. Uma forma de confirmar essa questão é executar `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` na {% data variables.product.product_location %}. Se o certificado SSL do servidor remoto puder ser verificado, sua `SSL-Session` deverá ter um código de retorno 0, conforme mostrado abaixo.

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

Por outro lado, se o certificado SSL do servidor remoto *não* puder ser verificado, sua `SSL-Session` deverá ter um código de retorno diferente de zero:

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
- O sinalizador `-r` permite desinstalar um certificado CA;
- O sinalizador `-h` exibe mais informações de uso.

```shell
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

#### ghe-ssl-generate-csr

Com este utilitário, você pode gerar uma chave privada e uma solicitação de assinatura de certificado (CSR, Certificate Signing Request) a ser compartilhada com uma autoridade certificada comercial ou privada para obter um certificado válido na sua instância. Para obter mais informações, consulte "[Configurar o TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)".

Para saber mais sobre este comando ou consultar opções adicionais, use o sinalizador `-h`.

```shell
ghe-ssl-generate-csr
```

#### ghe-storage-extend

Algumas plataformas exigem este script para aumentar o volume de usuários. Para obter mais informações, consulte "[Aumentar a capacidade de armazenamento](/enterprise/admin/guides/installation/increasing-storage-capacity/)".

```shell
$ ghe-storage-extend
```

#### ghe-version

Este utilitário imprime a versão, a plataforma e a compilação da {% data variables.product.product_location %}.

```shell
$ ghe-version
```

#### ghe-webhook-logs

Este utilitário retorna logs de entrega de webhook para os administradores revisarem e identificarem problemas.

```shell
ghe-webhook-logs
```

Para exibir todas as entregas de hook falhas do último dia:
{% if currentVersion ver_gt "enterprise-server@2.22" %}
```shell
ghe-webhook-logs -f -a <em>YYYY-MM-DD</em>
```

O formato da data deve ser `AAAA-MM-DD`, `AAAA-MM-DD HH:MM:SS`, ou `AAAA-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```
{% endif %}

Para exibir a carga útil total do hook, o resultado e quaisquer exceções para a entrega:
{% if currentVersion ver_gt "enterprise-server@2.22" %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em>
```
{% else %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```
{% endif %}

### Clustering

#### ghe-cluster-status

Verifique a saúde dos seus nós e serviços em uma implantação de clustering de {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

#### ghe-cluster-support-bundle

Este utilitário cria um pacote de suporte tarball com logs importantes de cada nó em configurações de replicação geográfica ou de cluster.

O comando cria o tarball em */tmp* por padrão, mas você também pode criar em `cat` para `STDOUT` a fim de facilitar a transmissão por SSH. Fazer isso é útil caso a interface da web não responda ou baixe um pacote de suporte de */setup/support* que não funcione. Você deve usar este comando se quiser gerar um pacote *estendido*, com logs mais antigos. Também é possível usá-lo para fazer upload do pacote de suporte de cluster diretamente para o suporte do {% data variables.product.prodname_enterprise %}.

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

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### ghe-cluster-failover

Falha ao sair de nós de cluster ativos para nós de cluster passivo. Para obter mais informações, consulte "[Iniciar um failover para seu cluster de réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)".

```shell
ghe-cluster-failover
```
{% endif %}

#### ghe-dpages

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

#### ghe-spokes

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

#### ghe-storage

Este utilitário permite remover todos os serviços de armazenamento antes de remover um nó de cluster.

```shell
ghe-storage evacuate storage-server-<em>UUID</em>
```

### Git

#### ghe-btop

Interface do tipo `top` para as operações atuais do Git.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-repo

Este utilitário permite mudar para o diretório de um repositório e abrir um shell interativo como usuário do `git`. Você pode fazer a inspeção ou manutenção manual de um repositório usando comandos como `git-*` ou `git-nw-*`.

```shell
ghe-repo <em>username</em>/<em>reponame</em>
```

#### ghe-repo-gc

Este utilitário empacota manualmente uma rede de repositórios para otimizar o armazenamento do pacote. Se você tem um repositório muito grande, esse comando pode ajudar a reduzir o tamanho. O {% data variables.product.prodname_enterprise %} executa automaticamente este comando durante toda a sua interação com uma rede de repositórios.

Você pode adicionar o argumento opcional `--prune` para remover objetos inacessíveis do Git que não são referenciados em um branch, tag ou qualquer outra referência. Fazer isso é útil principalmente para remover de imediato [informações confidenciais já eliminadas](/enterprise/user/articles/remove-sensitive-data/).

```shell
ghe-repo-gc <em>username</em>/<em>reponame</em>
```

### Importação e exportação

#### ghe-migrator

O `ghe-migrator` é uma ferramenta de alta fidelidade que ajuda a fazer migrações de uma instância do GitHub para outra. Você pode consolidar suas instâncias ou mover a organização, os usuários, as equipes e os repositórios do GitHub.com para o {% data variables.product.prodname_enterprise %}.

Para obter mais informações, consulte nosso guia sobre [como migrar dados de usuário, organização e repositório](/enterprise/admin/guides/migrations/).

#### git-import-detect

Em uma URL, detecta qual tipo de sistema de gerenciamento de controle de origem está na outra extremidade. Provavelmente esse processo já é conhecido nas importações manuais, mas pode ser muito útil em scripts automatizados.
```shell
git-import-detect
```

#### git-import-hg-raw

Este utilitário importa um repositório Mercurial para este repositório Git. Para obter mais informações, consulte [Importar dados de sistemas de controle de versões de terceiros](/enterprise/{}/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-hg-raw
```

#### git-import-svn-raw

Este utilitário importa histórico do Subversion e dados de arquivos para um branch do Git. Trata-se de uma cópia direta da árvore, ignorando qualquer distinção de trunk ou branch. Para obter mais informações, consulte [Importar dados de sistemas de controle de versões de terceiros](/enterprise/{}/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-svn-raw
```

#### git-import-tfs-raw

Este utilitário faz a importação a partir do Controle de Versão da Fundação da Equipe (TFVC). Para obter mais informações, consulte [Importar dados de sistemas de controle de versões de terceiros](/enterprise/{}/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-tfs-raw
```

#### git-import-rewrite

Este utilitário reescreve o repositório importado. Isso dá a você a oportunidade de renomear autores e, para o Subversion e TFVC, produz branches Git baseados em pastas. Para obter mais informações, consulte [Importar dados de sistemas de controle de versões de terceiros](/enterprise/{}/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-rewrite
```

### Suporte

#### ghe-diagnostics

Este utilitário faz uma série de verificações e reúne informações sobre a instalação que você pode enviar ao suporte para ajudar a diagnosticar problemas.

No momento, a saída do utilitário é semelhante ao download das informações de diagnóstico no {% data variables.enterprise.management_console %}, mas ele pode ter melhorias adicionais ao longo do tempo que não estão disponíveis na interface da web. Para obter mais informações, consulte "[Criar e compartilhar arquivos de diagnóstico](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)".

```shell
ghe-diagnostics
```

#### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
Esse utilitário cria um tarball do pacote de suporte com logs importantes da sua instância.

O comando cria o tarball em */tmp* por padrão, mas você também pode criar em `cat` para `STDOUT` a fim de facilitar a transmissão por SSH. Fazer isso é útil caso a interface da web não responda ou baixe um pacote de suporte de */setup/support* que não funcione. Você deve usar este comando se quiser gerar um pacote *estendido*, com logs mais antigos. Também é possível usá-lo para fazer upload do pacote de suporte diretamente para o suporte do {% data variables.product.prodname_enterprise %}.

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

#### ghe-support-upload

Este utilitário envia informações do seu appliance para o suporte do {% data variables.product.prodname_enterprise %}. Você pode especificar um arquivo local ou fornecer um fluxo de até 100 MB de dados via `STDIN`. Os dados carregados também podem ser associados a um tíquete de suporte.

Para enviar um arquivo para {% data variables.contact.github_support %} e associar o arquivo a um tíquete:
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

Para fazer upload de dados via `STDIN` e associá-los a dados de um tíquete:
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

Neste exemplo, `ghe-repl-status -vv` envia informações detalhadas do status de um appliance réplica. Substitua `ghe-repl-status -vv` pelos dados que você deseja transmitir a `STDIN` e faça uma breve descrição dos dados em `Verbose Replication Status`. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

### Atualização do {% data variables.product.prodname_ghe_server %}

#### ghe-upgrade

Este utilitário instala ou verifica um pacote de atualização. Também é possível usá-lo para voltar a uma versão de patch em casos de falha ou interrupção de uma atualização. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)".

Para verificar um pacote de atualização:
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

Para instalar um pacote de atualização:
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

#### ghe-upgrade-scheduler

Este utilitário gerencia a instalação programada de pacotes de atualização. Você pode exibir, criar ou remover instalações programadas. Crie as programações usando expressões cron. Para obter mais informações, leia mais sobre [Cron na Wikipedia](https://en.wikipedia.org/wiki/Cron#Overview).

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

#### ghe-update-check

Este utilitário verificará se uma nova versão do patch do {% data variables.product.prodname_enterprise %} está disponível. Se estiver e se houver espaço disponível na sua instância, ele baixará o pacote. Por padrão, a versão fica salva em */var/lib/ghe-updates*. Um administrador pode [realizar a atualização](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Um arquivo contendo o status do download fica disponível em */var/lib/ghe-updates/ghe-update-check.status*.

Para verificar a versão mais recente do {% data variables.product.prodname_enterprise %}, use o switch `-i`.

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

### Gerenciamento de usuários

#### ghe-license-usage

Este utilitário exporta uma lista de usuários da instalação em formato JSON. Se sua instância estiver conectada ao {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} usa essa informação para reportar informações de licenciamento ao {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Conctando {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

Por padrão, a lista de usuários no arquivo JSON resultante é criptografada. Use o sinalizador `-h` para ver mais opções.

```shell
ghe-license-usage
```

#### ghe-org-membership-update

Este utilitário aplicará a configuração padrão de visibilidade da associação da organização a todos os integrantes da sua instância. Para obter mais informações, consulte "[Configurar a visibilidade da associação à organização](/enterprise/{{ currentVersion }}/admin/guides/user-management/configuring-visibility-for-organization-membership)". As opções de configuração são `públicas` ou `privadas`.

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

#### ghe-user-csv

Este utilitário exporta uma lista de todos os usuários na instalação em formato CSV. O arquivo CSV inclui o endereço de e-mail, o tipo de usuário (por exemplo, administrador), a quantidade de repositórios, chaves SSH e associações os usuários têm na organização, o endereço IP mais recente e outras informações. Use o sinalizador `-h` para ver mais opções.

```shell
ghe-user-csv -o > users.csv
```

#### ghe-user-demote

Este utilitário rebaixa o usuário especificado do status de administrador para o status de usuário regular. É recomendável usar a IU da web para executar esta ação, mas informe esse utilitário em caso de erro na execução do utilitário `ghe-user-promotion` se você precisar rebaixar um usuário novamente da CLI.

```shell
ghe-user-demote <em>some-user-name</em>
```

#### ghe-user-promote

Este utilitário promove a conta de usuário especificada a administrador do site.

```shell
ghe-user-promote <em>some-user-name</em>
```

#### ghe-user-suspend

Este utilitário suspende o usuário especificado, impedindo-o de fazer login, push ou pull nos seus repositórios.

```shell
ghe-user-suspend <em>some-user-name</em>
```

#### ghe-user-unsuspend

Este utilitário cancela a suspensão do usuário especificado, liberando o acesso para fazer login, push ou pull nos seus repositórios.

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
