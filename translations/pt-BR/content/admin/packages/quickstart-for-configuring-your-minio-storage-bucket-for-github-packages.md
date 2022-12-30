---
title: Guia de início rápido para configurar o seu bucket de armazenamento de MinIO para o GitHub Packages
intro: 'Configure seu bucket de armazenamento do MinIO personalizado para uso com {% data variables.product.prodname_registry %}.'
versions:
  ghes: '*'
type: quick_start
topics:
  - Packages
  - Enterprise
  - Storage
shortTitle: Quickstart for MinIO
ms.openlocfilehash: 2d26aa879b0a59d8c6bd4d80a04ec2aa30f8c422
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166550'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.location.product_location_enterprise %}, você deverá preparar sua solução de armazenamento de terceiros.

O MinIO oferece armazenamento de objetos com suporte para a API S3 e {% data variables.product.prodname_registry %} na sua empresa.

Este início rápido mostra como configurar o MinIO usando o Docker para uso com {% data variables.product.prodname_registry %}. No entanto, você tem outras opções para gerenciar o MinIO além do Docker. Para obter mais informações sobre o MinIO, confira a [documentação oficial do MinIO](https://docs.min.io/).

## 1. Escolher um modo do MinIO para suas necessidades

| Modo MinIO | Otimizado para | Infraestrutura de armazenamento necessária |
|----|----|----|
| MinIO independente (em um único host) | Configuração rápida |  N/D |
| MinIO agrupado (também denominado MinIO Distribuído)|  Segurança de dados | Servidores de armazenamento em execução em um cluster |

Para obter mais informações sobre suas opções, confira a [documentação oficial do MinIO](https://docs.min.io/).

## 2. Instalar, executar e entrar no MinIO

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
    Para obter mais informações, confira o "[Guia de Início Rápido do MinIO](https://docs.min.io/docs/minio-quickstart-guide)" oficial.

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

     Para obter mais informações, confira "[Guia de Início Rápido do MinIO no Docker](https://docs.min.io/docs/minio-docker-quickstart-guide.html)".

   * Executar o MinIO usando Docker como um cluster. Esta implantação do MinIO usa vários hosts e a codificação de eliminação do MinIO para uma proteção de dados mais forte. Para executar o MinIO em um modo de cluster, confira o "[Guia de início rápido do MinIO distribuído](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)".

## 3. Criar seu bucket do MinIO para o {% data variables.product.prodname_registry %}

1. Instalar o cliente do MinIO.  

    ```shell
    $ docker pull minio/mc
    ```

2. Criar um bucket com uma URL de host que {% data variables.product.prodname_ghe_server %} pode acessar.

   * Exemplo de implantação local:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     Este exemplo pode ser usado para o MinIO autônomo.

   * Exemplo de implantações agrupadas:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## Próximas etapas

Para concluir a configuração de armazenamento para {% data variables.product.prodname_registry %}, você precisará copiar a URL de armazenamento do MinIO:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

Para ver as próximas etapas, confira "[Como habilitar o {% data variables.product.prodname_registry %} com o MinIO](/admin/packages/enabling-github-packages-with-minio)".
