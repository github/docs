---
title: Migrar índices de ElasticSearch al servidor de GitHub Enterprise 2.14 o superior
intro: 'Para prepararte para una actualización a {% data variables.product.prodname_ghe_server %} 2.14, deberás migrar tus índices a Elasticsearch 5.6 con nuestro script de migración.'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-server-2-14-or-later
  - /enterprise/admin/installation/migrating-elasticsearch-indices-to-github-enterprise-server-214-or-later
versions:
  enterprise-server: '*'
---

El {% data variables.product.prodname_ghe_server %} 2.14 incluye una actualización a Elasticsearch 5.6. Antes de actualizar a {% data variables.product.prodname_ghe_server %} 2.14 o superior desde 2.12 o 2.13, te recomendamos que descargues, instales y ejecutes las herramientas de migración de Elasticsearch, así tus índices más grandes se migran en línea mientras tu aplicación todavía tiene acceso en línea.

### Índices buscar

El script de migración busca un índice `buscar` primero mientras el aparato está en línea. Migrar los índices `buscar` puede tomar desde unos minutos hasta unos días, según su tamaño. Para ejemplificar índices grandes, estos índices demoraron un par de días para migrar a nuestro entorno de prueba.

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

Los índices `buscar` comienzan con:

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
- usuarios-

### Índices Webhooks

Después de que el script de migración reconstruye los índices `buscar` necesarios en línea, el script verificará si algún índice `webhook` debe ser reconstruido. Si ejecutas tu aparato con el {% data variables.product.prodname_ghe_server %} 2.12 o 2.13 durante 14 días o más, entonces probablemente no necesitarás que tu índice `webhook` se reconstruya ya que los índices `webhook` tienen una política de retención predeterminada de siete días. Si estás actualizando tu aparato desde el {% data variables.product.prodname_enterprise %} 2.11 o inferior, entonces es posible que debas reconstruir los índices `webhook`.

Si algún índice `webhook` debe ser reconstruido, entonces se te pedirá habilitar el modo mantenimiento antes de que el script pueda reconstruir los índices `webhook`. A pesar de que migrar los índices `webhook` requiere algo de tiempo de inactividad, no se necesitan grandes ventanas de mantenimiento o tiempo de inactividad.

Los índices `webhook` comienzan con `hookshot-logs-`.

### Índices disponibles

Puedes ver los índices disponibles en tu aparato utilizando cURL.

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

### Preparar un aparato del {% data variables.product.prodname_ghe_server %} 2.12 o 2.13

Si actualizas a {% data variables.product.prodname_ghe_server %} 2.14 o superior sin ejecutar las herramientas de migración, los índices Elasticsearch existentes pueden ser inválidos y no funcionarán correctamente. Para ejecutar el script de migración de Elasticsearch, tu aparato del {% data variables.product.prodname_ghe_server %} debe estar ejecutando {% data variables.product.prodname_enterprise %} 2.12 o 2.13.

{% warning %}

**Advertencia:**
- Utilizar {% data variables.product.prodname_enterprise_backup_utilities %} destruirá los índices Elasticsearch antiguos no compatibles con 5.X después de la restauración. En este caso, es posible que sea necesaria una nueva indexación manual.
- Si {% data variables.product.prodname_ghe_server %} está configurado para alta disponibilidad, el script de migración **debe** ejecutarse mientras todavía se está ejecutando la replicación. Deben permitirse los cambios para replicar completamente al otro aparato antes de iniciar la actualización. Si la replicación no se está ejecutando mientras se ejecuta el script de migración, tus índices Elasticsearch pueden volverse inválidos.

{% endwarning %}

1. Autentícate en el aparato principal con alta disponibilidad habilitado utilizando SSH.
2. Descarga e instala el script de migración en el aparato:
   ```shell
   $ wget https://github-enterprise.s3.amazonaws.com/util/es-5x-transition-tools.tar.gz
   $ sudo tar -C / -xvf es-5x-transition-tools.tar.gz
   ```
   Si administras una Agrupación del {% data variables.product.prodname_ghe_server %}, autentica a uno de los nodos de servidores de Elasticsearch utilizando SSH e instala las herramientas de migración allí. Búscalos utilizando:
    ```shell
    $ ghe-cluster-each -r elasticsearch -p
    ghe-test-data-0
    ghe-test-data-1
    ghe-test-data-2
    ```
2. Ejecuta el script de migración:
   ```shell
   $ /usr/local/share/enterprise/ghe-es-5x-migration -r
   ```
 {% note %}

 **Nota:** Si tiene índices `webhook` para migrar, después de ejecutar las migraciones en línea, se te pedirá que habilites el modo mantenimiento.

 {% endnote %}
3. Si estás ejecutando una Agrupación {% data variables.product.prodname_ghe_server %}, sigue la documentación oficial de actualización para VM únicos o entornos de alta disponibilidad o la guía de actualización de agrupación. Para obtener más información, consulta "[Actualizar {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)" o "[Actualizar una agrupación](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)".
