---
title: Remover réplica de alta disponibilidade
intro: 'É possível parar temporariamente a replicação de uma réplica do {% data variables.product.prodname_ghe_server %} ou remover a replicação permanentemente.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
versions:
  enterprise-server: '*'
---

### Parar a replicação temporariamente

1. Se necessário, interrompa o serviço da réplica de replicação geográfica no tráfego do usuário removendo as entradas de DNS de localização geográfica da réplica.
2. Na réplica em que você pretende parar a replicação temporariamente, execute ghe-repl-stop.
  ```shell
  $ ghe-repl-stop
  ```
3. Para iniciar a replicação novamente, execute `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```

### Remover replicação permanentemente

1. Se necessário, interrompa o serviço da réplica de replicação geográfica no tráfego do usuário removendo as entradas de DNS de localização geográfica da réplica.
2. Na réplica da qual você pretende remover a replicação, execute `ghe-repl-stop`.
  ```shell
  $ ghe-repl-stop
  ```
3. Na réplica, para destituir o estado de replicação, execute `ghe-repl-teardown`.
  ```shell
  $ ghe-repl-teardown
  ```
