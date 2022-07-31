---
title: Configurando um cache de repositório
intro: 'Você pode configurar um cache de repositório criando um novo dispositivo, conectando o cache do repositório ao dispositivo primário e configurando a replicação das redes de repositórios no cache do repositório.'
versions:
  ghes: '>=3.3'
type: how_to
topics:
  - Enterprise
---

{% data reusables.enterprise.repository-caching-release-phase %}

## Sobre a configuração para cache de repositório

{% data reusables.enterprise.repository-caching-config-summary %} Em seguida, você pode definir as políticas de localização de dados que regem quais redes de repositório são replicadas no cache do repositório.

O cache de repositório não é compatível com clustering.

## DNS para caches de repositório

A instância primária e o cache do repositório devem ter nomes de DNS diferentes. Por exemplo, se a sua instância principal for `github.example.com`, você poderá decidir nomear um cache `europe-ci.github.exemple.com` ou `github.asia.exemple.com`.

Para fazer com que as suas máquinas de CI busquem o cache do repositório em vez da instância principal, você pode usar a configuração `url.<base>.insteadOf`. Para obter mais informações, consulte [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) na documentação do Git.

Por exemplo, o `.gitconfig` global para a máquina de CI incluiria essas linhas.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Em seguida, quando for dito para buscar `https://github.example.com/myorg/myrepo`, o Git irá buscar de `https://europe-ci.github.example.com/myorg/myrepo`.

## Configurando um cache de repositório

{% ifversion ghes = 3.3 %}
1. No seu dispositivo primário de {% data variables.product.prodname_ghe_server %}, habilite o sinalizador do recurso para o cache do repositório.

   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Configure um novo appliance do {% data variables.product.prodname_ghe_server %} na plataforma desejada. Este dispositivo será o cache do repositório. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)".
{% data reusables.enterprise_installation.replica-steps %}
1. Conecte ao endereço IP do repositório utilizando o SSH.

   ```shell
   $ ssh -p 122 admin@<em>REPLICA IP</em>
   ```
{%- ifversion ghes = 3.3 %}
1. Na réplica do seu cache, habilite o sinalizador do recurso para o cache do repositório.

   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
{% data reusables.enterprise_installation.generate-replication-key-pair %}
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para verificar a conexão com o primário e habilitar o modo de réplica no cache do repositório, execute `ghe-repl-setup` novamente.

   ```shell
   $ ghe-repl-setup <em>PRIMARY IP</em>
   ```

1. Defina um `cache_location` para o cache do repositório, substituindo *CACHE-LOCATION* por um identificador alfanumérico, como a região onde o cache é implantado. Também defina um nome de centro de dados para este cache; novos caches tentarão semear de outro cache no mesmo centro de dados.

   ```shell
   $ ghe-repl-node --cache <em>CACHE-LOCATION</em> --datacenter <em>REPLICA-DC-NAME</em>
   ```

{% data reusables.enterprise_installation.replication-command %}
{% data reusables.enterprise_installation.verify-replication-channel %}
1. Para habilitar a replicação de redes de repositórios no cache do repositório, defina uma política de localização de dados. Para obter mais informações, consulte "[Políticas de localização de dados de](#data-location-policies)".

## Políticas de localização de dados

Você pode controlar a localidade de dados configurando as políticas de localização de dados para seus repositórios com o comando `spokesctl cache-policy` As políticas de localização de dados determinam quais redes de repositório são replicadas em quais caches de repositório. Por padrão, nenhuma rede de repositório será replicada em todos os caches de repositórios até que uma política de localização de dados seja configurada.

As políticas de localização de dados afetam apenas o conteúdo do Git. O conteúdo no banco de dados, como problemas e comentários de pull request, serão replicados em todos os nós independentemente da política.

{% note %}

**Observação:** As políticas de localização de dados não são as mesmas que o controle de acesso. Você deve usar as funções do repositório para controlar quais usuários podem acessar um repositório. Para obter mais informações sobre as funções do repositório, consulte "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% endnote %}

Você pode configurar uma política para replicar todas as redes com o sinalizador `--default`. Por exemplo, este comando irá criar uma política de replicação de uma única cópia de cada rede de repositório no conjunto de caches de repositórios cujo `cache_location` é "kansas".

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

Para configurar a replicação de uma rede de repositório, especifique o repositório que é a raiz da rede. A rede de um repositório inclui um repositório e todas as bifurcações do repositório. Você não pode replicar parte de uma rede sem replicar toda a rede.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

Você pode substituir uma política que replica todas as redes e excluir as redes específicas, especificando uma contagem de réplica de zero para a rede. Por exemplo, este comando especifica que qualquer cache de repositórios no local "kansas" não pode conter cópias dessa rede.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

As contagens de réplica superiores a um em um determinado local de cache não são compatíveis.
