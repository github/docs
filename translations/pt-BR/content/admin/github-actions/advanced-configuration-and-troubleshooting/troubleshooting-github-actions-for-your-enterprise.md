---
title: Solucionar problemas no GitHub Actions para a sua empresa
intro: 'Solucionar problemas comuns que ocorrem ao usar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107298'
---
## Verificando a saúde de {% data variables.product.prodname_actions %}

Verifique a integridade do {% data variables.product.prodname_actions %} em {% data variables.location.product_location %} com o utilitário de linha de comando `ghe-actions-check`. Para obter mais informações, confira "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)" e "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

## Configurar executores auto-hospedados ao usar um certificado autoassinado por {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Para obter mais informações, confira "[Como configurar o TLS](/admin/configuration/configuring-tls)".

### Instalar o certificado na máquina do executor

Para um executor auto-hospedado conectar-se a um {% data variables.product.prodname_ghe_server %} usando um certificado autoassinado, você deverá instalar o certificado na máquina do executor para que a conexão seja mais rígida.

Para as etapas necessárias para instalar um certificado, consulte a documentação do sistema operacional do seu executor.

### Configurar o Node.JS para usar o certificado

A maioria das ações são escritas em JavaScript e são executadas usando Node.js, que não usa o armazenamento de certificados do sistema operacional. Para que o aplicativo do executor auto-hospedado use o certificado, você precisa definir a variável de ambiente `NODE_EXTRA_CA_CERTS` no computador do executor.

Defina a variável de ambiente como uma variável de ambiente do sistema ou declare-a em um arquivo chamado _.env_ no diretório do aplicativo do executor auto-hospedado.

Por exemplo:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

As variáveis de ambiente são lidas quando o aplicativo do executor auto-hospedado é iniciado. Portanto, você deve definir a variável de ambiente antes de configurar ou iniciar o aplicativo do executor auto-hospedado. Se a sua configuração de certificado for alterada, você deverá reiniciar o aplicativo do executor auto-hospedado.

### Configurar contêineres do Docker para usar o certificado

Se você usa ações do contêiner do Docker ou contêineres de serviço nos seus fluxos de trabalho, você também deverá instalar o certificado na sua imagem do Docker, além de definir a variável de ambiente acima.

## Configurar as definições de proxy HTTP para {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Se essas configurações não estiverem definidas corretamente, você poderá receber erros como `Resource unexpectedly moved to https://<IP_ADDRESS>` ao definir ou alterar sua configuração do {% data variables.product.prodname_actions %}.

## Os executores não se conectam a {% data variables.product.prodname_ghe_server %} com um novo nome de host

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

Se você implantar {% data variables.product.prodname_ghe_server %} no seu ambiente com um novo nome de host e o antigo nome de host não resolver mais a sua instância, os executores auto-hospedados não conseguirão conectar-se ao nome de host antigo e não executarão nenhum trabalho.

Você precisará atualizar a configuração dos executores auto-hospedados para usar o novo nome de host de {% data variables.location.product_location %}. Cada executor auto-hospedado exigirá um dos seguintes procedimentos:

* No diretório do aplicativo do executor auto-hospedado, edite os arquivos `.runner` e `.credentials` para substituir todas as menções do nome do host antigo pelo novo nome do host. Em seguida, reinicie o aplicativo do executor auto-hospedado.
* Remova o executor de {% data variables.product.prodname_ghe_server %} usando a interface do usuário e adicione-o novamente. Para obter mais informações, confira "[Como remover executores auto-hospedados](/actions/hosting-your-own-runners/removing-self-hosted-runners)" e "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Trabalhos travados e limites de CPU e de memória das {% data variables.product.prodname_actions %}

O {% data variables.product.prodname_actions %} é composto por vários serviços em execução em {% data variables.location.product_location %}. Por padrão, esses serviços são configurados com limites padrão de CPU e memória que devem funcionar para a maioria das instâncias. No entanto, usuários assíduos de {% data variables.product.prodname_actions %} talvez precisem para ajustar essas configurações.

É possível que você atinja o limite de CPU ou memória se você notar que os trabalhos não estão sendo iniciados (ainda que existam executores inativos), ou se o progresso do trabalho não estiver sendo atualizado ou alterando na interface do usuário.

### 1. Verificar o uso total da CPU e de memória no console de gerenciamento

Acesse o console de gerenciamento e use o painel do monitor para inspecionar os gráficos gerais de CPU e memória em "Saúde do Sistema". Para obter mais informações, confira "[Como acessar o painel do monitor](/admin/enterprise-management/accessing-the-monitor-dashboard)".

Se o uso da CPU geral em "Integridade do Sistema" estiver próximo a 100% ou se não houver mais memória disponível, a {% data variables.location.product_location %} será executada dentro da capacidade e precisará ser escalada verticalmente. Para obter mais informações, confira "[Como aumentar os recursos de CPU ou de memória](/admin/enterprise-management/increasing-cpu-or-memory-resources)".

### 2. Verificar o uso da CPU e de memória dos trabalhos do Nomad no console de gerenciamento

Se a "Saúde do Sistema" para o uso total da CPU e da memória estiver OK, acesse a seção "Trabalhos Normad" na parte inferior do painel e observe os gráficos "Valor porcentual da CPU" e "Uso da memória".

Cada seção nesses gráficos corresponde a um serviço. Para os serviços de {% data variables.product.prodname_actions %}, busque:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Se qualquer um destes serviços estiver em ou perto de 100% de utilização da CPU ou se a memória estiver próxima do seu limite (2 GB por padrão), talvez seja necessário aumentar a atribuição de recursos para estes serviços. Tome nota de quais dos serviços acima estão no ou próximo do seu limite.

### 3. Aumentar a alocação de recurso para serviços no limite

1. Efetue o login no shell administrativo usando SSH. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Execute o comando a seguir para ver quais recursos estão disponíveis para alocação:

   ```shell
   nomad node status -self
   ```

   Na saída, encontre a seção "Recursos alocados". Ele é semelhante ao exemplo a seguir:

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   Para a CPU e a memória, isso mostra a quantidade alocada ao **total** de **todos** os serviços (o valor à esquerda) e a quantidade que está disponível (o valor à direita). No exemplo acima, há 23 GiB de memória alocado para um total de 32 GiB. Isto significa que há 9 GiB de memória disponíveis para atribuição.

   {% warning %}

   **Aviso:** tenha cuidado para não alocar mais do que o total de recursos disponíveis ou os serviços não poderão ser iniciados.

   {% endwarning %}
1. Altere o diretório para `/etc/consul-templates/etc/nomad-jobs/actions`:

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   Neste diretório existem três arquivos que correspondem aos serviços de {% data variables.product.prodname_actions %} descritos anteriormente:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Para os serviços que você identificou que precisam de ajuste, abra o arquivo correspondente e localize o grupo `resources` que se parece com o seguinte:

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   Os valores estão em MHz para recursos de CPU e em MB para recursos de memória.

   Por exemplo, para aumentar os limites de recursos no exemplo acima para 1 GHz para a CPU e 4 GB de memória, altere-os para:

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. Salve e feche o arquivo.
1. Execute `ghe-config-apply` para aplicar as alterações.

    Ao executar `ghe-config-apply`, se você observar uma saída como `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, a alteração provavelmente terá recursos de CPU ou de memória alocados em excesso. Se isso acontecer, edite os arquivos de configuração novamente, reduza a CPU ou a memória alocada e execute `ghe-config-apply` novamente.
1. Depois que a configuração for aplicada, execute `ghe-actions-check` para verificar se os serviços do {% data variables.product.prodname_actions %} estão funcionando.

{% ifversion fpt or ghec or ghes %}
## Solucionar problemas de falhas quando {% data variables.product.prodname_dependabot %} dispara fluxos de trabalho existentes

{% data reusables.dependabot.beta-security-and-version-updates %}

Depois de configurar as atualizações do {% data variables.product.prodname_dependabot %} para {% data variables.location.product_location %}, você poderá ver as falhas quando os fluxos de trabalho existentes forem disparados por eventos do {% data variables.product.prodname_dependabot %}.

Por padrão, as execuções de fluxo de trabalho do {% data variables.product.prodname_actions %} disparadas pelo {% data variables.product.prodname_dependabot %} dos eventos `push`, `pull_request`, `pull_request_review` ou `pull_request_review_comment` são tratados como se eles fossem abertos de um fork do repositório. Ao contrário dos fluxos de trabalho disparados por outros atores, isso significa que eles recebem o `GITHUB_TOKEN` somente leitura e não têm acesso a nenhum segredo que esteja normalmente disponível. Isso fará com que quaisquer fluxos de trabalho que tentam gravar no repositório falhem quando forem acionados por {% data variables.product.prodname_dependabot %}.

Há três maneiras de resolver este problema:

1. Você pode atualizar seus fluxos de trabalho para que não sejam mais disparados pelo {% data variables.product.prodname_dependabot %} usando uma expressão como: `if: github.actor != 'dependabot[bot]'`. Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions)".
2. Modifique seus fluxos de trabalho para usar um processo de duas etapas que inclui `pull_request_target` que não tem essas limitações. Para obter mais informações, confira "[Como automatizar o {% data variables.product.prodname_dependabot %} com o {% data variables.product.prodname_actions %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events)".
3. Forneça fluxos de trabalho disparados pelo acesso do {% data variables.product.prodname_dependabot %} aos segredos e permita que o termo `permissions` aumente o escopo padrão do `GITHUB_TOKEN`. Para obter mais informações, confira "[Como fornecer fluxos de trabalho disparados pelo acesso do {% data variables.product.prodname_dependabot %} aos segredos e às permissões aumentadas](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions)" abaixo.

### Fornecendo fluxos de trabalho acionados pelo acesso de {% data variables.product.prodname_dependabot %} a segredos e permissões ampliadas

1. Efetue o login no shell administrativo usando SSH. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Para remover as limitações dos fluxos de trabalho disparados pelo {% data variables.product.prodname_dependabot %} em {% data variables.location.product_location %}, use o comando a seguir.
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. Aplicar a configuração.
    ```shell
    $ ghe-config-apply
    ```
1. Volte para o {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## Solucionando problemas das ações agrupadas em {% data variables.product.prodname_actions %}

Se você receber o erro a seguir ao instalar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, você poderá resolver o problema instalando as ações oficiais empacotadas e os fluxos de trabalho iniciais.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

Para instalar as ações oficiais empacotadas e fluxos de trabalho iniciais dentro de uma organização designada em {% data variables.product.prodname_ghe_server %}, siga este procedimento.

1. Identifique uma organização que armazenará as ações oficiais agrupadas e os fluxos de trabalho iniciais. Você pode criar uma nova organização ou reutilizar uma já existente. 
    - Para criar uma organização, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)". 
    - Para obter assistência com a escolha de um nome para esta organização, confira "[Nomes reservados](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names)". 

1. Efetue o login no shell administrativo usando SSH. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Para designar sua organização como o local para armazenar as ações agrupadas, use o comando `ghe-config`, substituindo `ORGANIZATION` pelo nome da sua organização.
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    e:
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  Para adicionar as ações empacotadas à sua organização, cancele a definição do SHA.
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. Aplicar a configuração.
    ```shell
    $ ghe-config-apply
    ```

Depois de concluir essas etapas, retome a configuração do {% data variables.product.prodname_actions %} em "[Como gerenciar as permissões de acesso do GitHub Actions na sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise)".

{% endif %}
