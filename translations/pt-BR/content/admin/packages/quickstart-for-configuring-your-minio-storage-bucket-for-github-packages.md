---
title: Guia de início rápido para configurar o seu bucket de armazenamento de MinIO para o GitHub Packages
intro: 'Configure seu bucket de armazenamento do MinIO personalizado para uso com {% data variables.product.prodname_registry %}.'
versions:
  enterprise-server: '>=2.22'
type: quick_start
topics:
  - Packages
  - Enterprise
  - Storage
---

{% data reusables.package_registry.packages-ghes-release-stage %}

Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.product.product_location_enterprise %}, você deverá preparar sua solução de armazenamento de terceiros.

O MinIO oferece armazenamento de objetos com suporte para a API S3 e {% data variables.product.prodname_registry %} na sua empresa.

Este início rápido mostra como configurar o MinIO usando o Docker para uso com {% data variables.product.prodname_registry %}. No entanto, você tem outras opções para gerenciar o MinIO além do Docker. Para obter mais informações sobre o MinIO, consulte a [Documentação oficial do MinIO](https://docs.min.io/).

### 1. Escolha um modo MinIO para suas necessidades

| Modo MinIO                                           | Otimizado para              | Infraestrutura de armazenamento necessária            |
| ---------------------------------------------------- | --------------------------- | ----------------------------------------------------- |
| MinIO independente (em um único host)                | Configuração rápida         | N/A                                                   |
| MinIO como um gateway NAS                            | NAS (Armazenamento de rede) | Dispositivos NAS                                      |
| MinIO agrupado (também denominado MinIO Distribuído) | Segurança de dados          | Servidores de armazenamento em execução em um cluster |

Para obter mais informações sobre suas opções, consulte [Documentação oficial do MinIO](https://docs.min.io/).

### 2. Instalar, executar e efetuar o login no MinIO

1. Configure suas variáveis de ambiente preferidas para o MinIO.

    Estes exemplos usam `MINIO_DIR`:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Instalar MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    Para obter mais informações, consulte o "[Guia do início rápido do MinIO](https://docs.min.io/docs/minio-quickstart-guide)".

3. Efetue o login no MinIO usando sua chave e segredo de acesso do MinIO.

    {% linux %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endlinux %}

    {% mac %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endmac %}

    Você pode acessar suas chaves do MinIO usando as variáveis de ambiente:

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. Execute o MinIO no modo escolhido.

   * Execute o MinIO usando Docker em um único host:

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     Para obter mais informações, consulte "[Guia de início rápido do Docker do MinIO](https://docs.min.io/docs/minio-docker-quickstart-guide.html)".

   * Executar o MinIO usando Docker como um gateway NAS:

     Esta configuração é útil para implantações em que já existe um NAS que você deseja usar como armazenamento de backup para {% data variables.product.prodname_registry %}.

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio gateway nas /data
     ```

     Para obter mais informações, consulte "[Gateway do MinIO para NAS](https://docs.min.io/docs/minio-gateway-for-nas.html)".

   * Executar o MinIO usando Docker como um cluster. Esta implantação do MinIO usa vários hosts e a codificação de eliminação do MinIO para uma proteção de dados mais forte. Para executar o MinIO em um modo de cluster, consulte o "[Guia de início rápido do MinIO distribuído](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

### 3. Crie o seu bucket do MinIO para {% data variables.product.prodname_registry %}

1. Instalar o cliente do MinIO.

    ```shell
    $ docker pull minio/mc
    ```

2. Criar um bucket com uma URL de host que {% data variables.product.prodname_ghe_server %} pode acessar.

   * Exemplo de implantação local:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc <em>BUCKET-NAME</em>
     ```

     Este exemplo pode ser usado para MinIO independente ou MinIO como um gateway NAS.

   * Exemplo de implantações agrupadas:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

### Próximas etapas

Para concluir a configuração de armazenamento para {% data variables.product.prodname_registry %}, você precisará copiar a URL de armazenamento do MinIO:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

Para os próximos passos, consulte "[Habilitar {% data variables.product.prodname_registry %} com o MinIO](/admin/packages/enabling-github-packages-with-minio)".
