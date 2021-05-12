---
title: Solucionar problemas no GitHub Actions para a sua empresa
intro: 'Solucionar problemas comuns que ocorrem ao usar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### Configurar executores auto-hospedados ao usar um certificado autoassinado por {% data variables.product.prodname_ghe_server %}

{% data reusables.actions.enterprise-self-signed-cert %} Para obter mais informações, consulte "[Configurar TLS](/admin/configuration/configuring-tls)".

#### Instalar o certificado na máquina do executor

Para um executor auto-hospedado conectar-se a um {% data variables.product.prodname_ghe_server %} usando um certificado autoassinado, você deverá instalar o certificado na máquina do executor para que a conexão seja mais rígida.

Para as etapas necessárias para instalar um certificado, consulte a documentação do sistema operacional do seu executor.

#### Configurar o Node.JS para usar o certificado

A maioria das ações são escritas em JavaScript e são executadas usando Node.js, que não usa o armazenamento de certificados do sistema operacional. Para o aplicativo runner auto-hospedado usar o certificado, você deve definir a variável de ambiente `NODE_EXTRA_CA_CERTS` na máquina do executor.

Você pode definir a variável de ambiente como uma variável de ambiente do sistema, ou declará-la em um arquivo denominado _.env_ no diretório do aplicativo do executor auto-hospedado.

Por exemplo:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

As variáveis de ambiente são lidas quando o aplicativo do executor auto-hospedado é iniciado. Portanto, você deve definir a variável de ambiente antes de configurar ou iniciar o aplicativo do executor auto-hospedado. Se a sua configuração de certificado for alterada, você deverá reiniciar o aplicativo do executor auto-hospedado.

#### Configurar contêineres do Docker para usar o certificado

Se você usa ações do contêiner do Docker ou contêineres de serviço nos seus fluxos de trabalho, você também deverá instalar o certificado na sua imagem do Docker, além de definir a variável de ambiente acima.

### Configurar as definições de proxy HTTP para {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-http-proxy %}

Se estas configurações não estiverem definidas corretamente, você poderá receber erros como `Recurso movido inesperadamente para https://<IP_ADDRESS>` ao definir ou mudar a configuração de {% data variables.product.prodname_actions %}.

### Os executores que não se conectam a {% data variables.product.prodname_ghe_server %} depois de mudar o hostname

Se você alterar o nome do host de {% data variables.product.product_location %}, os executores auto-hospedados não poderão conectar-se ao host antigo e não executarão nenhum trabalho.

Você precisará atualizar a configuração dos seus executores auto-hospedados para usar o novo nome de host para {% data variables.product.product_location %}. Cada executor auto-hospedado exigirá um dos seguintes procedimentos:

* No diretório de do aplicativo do executor auto-hospedado, edite os arquivos de `.runner` e `.credentials` para substituir todas as menções do nome de host antigo pelo novo nome de host. Em seguida, reinicie o aplicativo do executor auto-hospedado.
* Remova o executor de {% data variables.product.prodname_ghe_server %} usando a interface do usuário e adicione-o novamente. Para obter mais informações, consulte "[Removendo os executores auto-hospedados](/actions/hosting-your-own-runners/removing-self-hosted-runners)" e "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

### Trabalhos travados e limites de CPU e de memória das {% data variables.product.prodname_actions %}

{% data variables.product.prodname_actions %} é composto de vários serviços em execução em {% data variables.product.product_location %}. Por padrão, esses serviços são configurados com limites padrão de CPU e memória que devem funcionar para a maioria das instâncias. No entanto, usuários assíduos de {% data variables.product.prodname_actions %} talvez precisem para ajustar essas configurações.

É possível que você atinja o limite de CPU ou memória se você notar que os trabalhos não estão sendo iniciados (ainda que existam executores inativos), ou se o progresso do trabalho não estiver sendo atualizado ou alterando na interface do usuário.

#### 1. Verifique o uso total da CPU e memória no console de gerenciamento

Acesse o console de gerenciamento e use o painel do monitor para inspecionar os gráficos gerais de CPU e memória em "Saúde do Sistema". Para obter mais informações, consulte "[Acessar o painel do monitor](/admin/enterprise-management/accessing-the-monitor-dashboard)".

Se o uso geral de "Saúde do Sistema" da CPU estiver próximo a 100% ou não houver mais memória livre, {% data variables.product.product_location %} será executado na capacidade e precisará ser dimensionado. Para obter mais informações, consulte "[Increasing CPU or memory resources](/admin/enterprise-management/increasing-cpu-or-memory-resources)."

#### 2. Verifique o uso de CPU e a memória dos trabalhos Nomad no console de gerenciamento

Se a "Saúde do Sistema" para o uso total da CPU e da memória estiver OK, acesse a seção "Trabalhos Normad" na parte inferior do painel e observe os gráficos "Valor porcentual da CPU" e "Uso da memória".

Cada seção nesses gráficos corresponde a um serviço. Para os serviços de {% data variables.product.prodname_actions %}, busque:

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

Se qualquer um destes serviços estiver em ou perto de 100% de utilização da CPU ou se a memória estiver próxima do seu limite (2 GB por padrão), talvez seja necessário aumentar a atribuição de recursos para estes serviços. Tome nota de quais dos serviços acima estão no ou próximo do seu limite.

#### 3. Aumenta a alocação de recursos para serviços em seu limite

1. Efetue o login no shell administrativo usando SSH. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
1. Execute o comando a seguir para ver quais recursos estão disponíveis para alocação:

   ```shell
   nomad node status -self
   ```

   Na saída, encontre a seção "Recursos alocados". É algo parecido com o exemplo a seguir:

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   Para a memória e a CPU, isso mostra quanto é alocado para o **total** de **todos** serviços (o valor à esquerda) e quanto está disponível (o valor correto). No exemplo acima, há 23 GiB de memória alocado para um total de 32 GiB. Isto significa que há 9 GiB de memória disponíveis para atribuição.

   {% warning %}

   **Aviso:** Tenha cuidado para não alocar mais do que o total de recursos disponíveis, ou os serviços não poderão ser iniciados.

   {% endwarning %}
1. Mude o diretório para `/etc/consul-templates/etc/nomad-jobs/ações`:

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   Neste diretório existem três arquivos que correspondem aos serviços de {% data variables.product.prodname_actions %} descritos anteriormente:

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. Para os serviços que você identificou que precisam de ajuste, abra o arquivo correspondente e localize o grupo de `recursos` que se parece com o exemplo a seguir:

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
1. Salve e saia do arquivo.
1. Execute o `ghe-config-apply` para aplicar as alterações.

    Ao executar `ghe-config-apply`, se você vir a saída como `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`, a mudança provavelmente atribuiu muitos recursos de CPU ou memória. Se isso acontecer, edite os arquivos de configuração novamente e baixe a CPU ou memória alocados e execute `ghe-config-apply` novamente.
1. Depois que a configuração for aplicada, execute `ghe-actions-check` para verificar se os serviços {% data variables.product.prodname_actions %} estão operando.
