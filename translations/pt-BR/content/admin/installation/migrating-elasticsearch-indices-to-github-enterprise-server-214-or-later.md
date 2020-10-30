---
title: Migrar índices do Elasticsearch para o GitHub Enterprise Server 2.14 ou mais recente
intro: 'Ao se preparar para atualizar para o {% data variables.product.prodname_ghe_server %} 2.14, você terá que migrar seus índices para o Elasticsearch 5.6 com nosso script de migração.'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-server-2-14-or-later
  - /enterprise/admin/installation/migrating-elasticsearch-indices-to-github-enterprise-server-214-or-later
versions:
  enterprise-server: '*'
---

O {% data variables.product.prodname_ghe_server %} 2.14 inclui a atualização para o Elasticsearch 5.6. Antes de atualizar para o {% data variables.product.prodname_ghe_server %} 2.14 ou mais recente partindo da versão 2.12 ou 2.13, é recomendável baixar, instalar e executar as ferramentas de migração do Elasticsearch para que os maiores índices sejam migrados online enquanto o appliance ainda tem acesso online.

### Índices de pesquisa

O script de migração verifica qualquer índice `search` enquanto o appliance está online. A migração dos índices `search` pode levar de minutos a dias, dependendo do tamanho dos índices. Para ver um exemplo de índices grandes, a migração desses índices levou alguns dias em nosso ambiente de teste.

```
admin@ip-172-31-2-141:~$ curl -s http://localhost:9200/_cat/indices?v | sort -n -k 6
green  open   blog-1                     1   0          0            0       144b           144b
green  open   projects-1                 1   0          0            0       144b           144b
green  open   registry-packages-1        1   0          0            0       144b           144b
green  open   showcases-1                1   0          0            0       144b           144b
health status index                    pri rep docs.count docs.deleted store.size pri.store.size
green  open   pull-requests-1            1   0          1            0      9.3kb          9.3kb
green  open   wikis-1                    1   0          2            0        5kb            5kb
green  open   hookshot-logs-2018-05-29   5   0         25            0    124.2kb        124.2kb
green  open   repos-1                    1   0       1638            1      1.4mb          1.4mb
green  open   gists-1                    1   0       3531           64    291.9kb        291.9kb
green  open   audit_log-1-2018-06-1      1   0      11108            0        3mb            3mb
green  open   users-1                    1   0      19866           56      2.7mb          2.7mb
green  open   hookshot-logs-2018-05-31   5   0      20000            0     33.4mb         33.4mb
green  open   hookshot-logs-2018-06-04   5   0      20000            0     32.6mb         32.6mb
green  open   issues-1                   1   0      26405            6     82.8mb         82.8mb
green  open   hookshot-logs-2018-05-30   5   0     119744            0    196.8mb        196.8mb
green  open   audit_log-1-2018-05-1      1   0     191664            0       50mb           50mb
green  open   code-search-1              1   0    6932626           44     42.9gb         42.9gb
green  open   commits-1                  1   0   63753587         1485     45.4gb         45.4gb
```

Os índices `search` começam por:

- blog-
- code-search-
- commits-
- gists-
- issues-
- labels-
- marketplace-listings-
- non-marketplace-listings-
- projects-
- pull-requests-
- registry-packages-
- repos-
- showcases-
- topics-
- users-

### Índices de webhook

Depois que o script de migração recriar online os índices `search` necessários, o script verificará se algum índice `webhook` precisa ser recompilado. Se executou seu appliance com o {% data variables.product.prodname_ghe_server %} 2.12 ou 2.13 por 14 dias ou mais, provavelmente você não precisará dos índices `webhook` recompilados, já que os índices `webhook` têm uma política de retenção padrão de sete dias. Se você estiver atualizando seu appliance a partir do {% data variables.product.prodname_enterprise %} 2.11 ou anterior, talvez seja necessário recompilar os índices `webhook`.

Se algum índice `webhook` tiver que ser recompilado, você receberá uma solicitação para habilitar o modo de manutenção antes que o script possa recompilar os índices `webhook`. Embora a migração dos índices `webhook` cause algum tempo de inatividade, não é necessário programar longos períodos de manutenção ou inatividade.

Os índices `webhook` começam por `hookshot-logs-`.

### Índices disponíveis

Veja os índices disponíveis no seu appliance usando curl.

```
admin@ip-172-31-2-141:~$ curl -s http://localhost:9200/_cat/indices?v | sort -n -k 6
green  open   blog-1                     1   0          0            0       144b           144b
green  open   projects-1                 1   0          0            0       144b           144b
green  open   registry-packages-1        1   0          0            0       144b           144b
green  open   showcases-1                1   0          0            0       144b           144b
health status index                    pri rep docs.count docs.deleted store.size pri.store.size
green  open   pull-requests-1            1   0          1            0      9.3kb          9.3kb
green  open   wikis-1                    1   0          2            0        5kb            5kb
green  open   hookshot-logs-2018-05-29   5   0         25            0    124.2kb        124.2kb
green  open   repos-1                    1   0       1638            1      1.4mb          1.4mb
green  open   gists-1                    1   0       3531           64    291.9kb        291.9kb
green  open   audit_log-1-2018-06-1      1   0      11108            0        3mb            3mb
green  open   users-1                    1   0      19866           56      2.7mb          2.7mb
green  open   hookshot-logs-2018-05-31   5   0      20000            0     33.4mb         33.4mb
green  open   hookshot-logs-2018-06-04   5   0      20000            0     32.6mb         32.6mb
green  open   issues-1                   1   0      26405            6     82.8mb         82.8mb
green  open   hookshot-logs-2018-05-30   5   0     119744            0    196.8mb        196.8mb
green  open   audit_log-1-2018-05-1      1   0     191664            0       50mb           50mb
green  open   code-search-1              1   0    6932626           44     42.9gb         42.9gb
green  open   commits-1                  1   0   63753587         1485     45.4gb         45.4gb
```

### Preparar um appliance do {% data variables.product.prodname_ghe_server %} 2.12 ou 2.13

Se você atualizar para o {% data variables.product.prodname_ghe_server %} 2.14 ou mais recente sem executar as ferramentas de migração, os índices do Elasticsearch podem ficar inválidos e não funcionar corretamente. Para executar o scripts de migração do Elasticsearch, seu appliance do {% data variables.product.prodname_ghe_server %} deve estar executando o {% data variables.product.prodname_enterprise %} 2.12 ou o 2.13.

{% warning %}

**Aviso:**
- Usar o {% data variables.product.prodname_enterprise_backup_utilities %} destruirá índices antigos do Elasticsearch não compatíveis com as versões 5.X após a restauração. Nesse caso, talvez seja necessário fazer a reindexação manual.
- Se o {% data variables.product.prodname_ghe_server %} estiver configurado para alta disponibilidade, o script de migração **deve** ser executado ainda durante a execução da replicação. Antes de iniciar a atualização, é necessário permitir que as alterações sejam replicadas totalmente no outro appliance. Se a replicação não estiver em execução enquanto o script de migração for executado, os índices do Elasticsearch poderão ficar inválidos.

{% endwarning %}

1. Autentique para o appliance primário com a Alta Disponibilidade habilitada usando SSH.
2. Baixe e instale o script de migração para o appliance:
   ```shell
   $ wget https://github-enterprise.s3.amazonaws.com/util/es-5x-transition-tools.tar.gz
   $ sudo tar -C / -xvf es-5x-transition-tools.tar.gz
   ```
   Se você gerenciar um cluster do {% data variables.product.prodname_ghe_server %}, autentique em um dos nós do servidor Elasticsearch usando SSH e instale as ferramentas de migração nele. Localize usando o seguinte:
    ```shell
    $ ghe-cluster-each -r elasticsearch -p
    ghe-test-data-0
    ghe-test-data-1
    ghe-test-data-2
    ```
2. Execute o script de migração:
   ```shell
   $ /usr/local/share/enterprise/ghe-es-5x-migration -r
   ```
 {% note %}

 **Observação:** se tiver índices `webhook` para migrar, você receberá uma solicitação para ativar o modo de manutenção após executar as migrações online.

 {% endnote %}
3. Se você estiver executando um cluster do {% data variables.product.prodname_ghe_server %}, siga a documentação oficial da atualização para ambientes únicos de VMs ou alta disponibilidade, ou consulte o guia de atualização do cluster. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)" ou "[Atualizar um cluster](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)".
