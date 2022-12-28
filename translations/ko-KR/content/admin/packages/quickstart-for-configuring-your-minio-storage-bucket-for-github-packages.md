---
title: GitHub 패키지에 대한 MinIO 스토리지 버킷을 구성하기 위한 빠른 시작
intro: '{% data variables.product.prodname_registry %}에 사용할 사용자 지정 MinIO 스토리지 버킷을 구성합니다.'
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166555'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

{% data variables.location.product_location_enterprise %}에서 {% data variables.product.prodname_registry %}을(를) 사용하도록 설정하고 구성하려면 타사 스토리지 솔루션을 준비해야 합니다.

MinIO는 엔터프라이즈에서 S3 API 및 {% data variables.product.prodname_registry %}를 지원하는 개체 스토리지를 제공합니다.

이 빠른 시작에서는 {% data variables.product.prodname_registry %}와 함께 사용하기 위해 Docker를 사용하여 MinIO를 설정하는 방법을 보여 주지만 Docker 외에 MinIO를 관리하는 다른 옵션이 있습니다. MinIO에 대한 자세한 내용은 공식 [MinIO 문서](https://docs.min.io/)를 참조하세요.

## 1. 필요에 따라 MinIO 모드 선택

| MinIO 모드 | 최적화 기준 | 필요한 스토리지 인프라 |
|----|----|----|
| 독립 실행형 MinIO(단일 호스트) | 빠른 설정 |  해당 없음 |
| 클러스터형 MinIO(분산 MinIO라고도 함)|  데이터 보안 | 클러스터에서 실행되는 스토리지 서버 |

옵션에 대한 자세한 내용은 공식 [MinIO 문서를 참조하세요](https://docs.min.io/).

## 2. MinIO 설치, 실행, 로그인

1. MinIO에 대한 기본 설정 환경 변수를 설정합니다.

    예제에서는 `MINIO_DIR`을 사용합니다.
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. MinIO를 설치합니다.

    ```shell
    $ docker pull minio/minio
    ```
    자세한 내용은 공식 “[MinIO 빠른 시작 가이드](https://docs.min.io/docs/minio-quickstart-guide)”를 참조하세요.

3. MinIO 액세스 키 및 비밀을 사용하여 MinIO에 로그인합니다.

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

    환경 변수를 사용하여 MinIO 키에 액세스할 수 있습니다.

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. 선택한 모드에서 MinIO를 실행합니다.

   * 단일 호스트에서 Docker를 사용하여 MinIO를 실행합니다.

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     자세한 내용은 “[MinIO Docker 빠른 시작 가이드](https://docs.min.io/docs/minio-docker-quickstart-guide.html)”를 참조하세요.

   * Docker를 클러스터로 사용하여 MinIO를 실행합니다. MinIO 배포는 가장 강력한 데이터 보호를 위해 여러 호스트 및 MinIO의 지우기 코딩을 사용합니다. 클러스터 모드에서 MinIO를 실행하려면 “[분산 MinIO 빠른 시작 가이드](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)”를 참조하세요.

## 3. {% data variables.product.prodname_registry %}에 대한 MinIO 버킷 만들기

1. MinIO 클라이언트를 설치합니다.  

    ```shell
    $ docker pull minio/mc
    ```

2. {% data variables.product.prodname_ghe_server %}에서 액세스할 수 있는 호스트 URL을 사용하여 버킷을 만듭니다.

   * 로컬 배포 예제:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     이 예제는 MinIO 독립 실행형에 사용할 수 있습니다.

   * 클러스터형 배포 예제:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## 다음 단계

{% data variables.product.prodname_registry %}에 대한 스토리지 구성을 완료하려면 MinIO 스토리지 URL을 복사해야 합니다.

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

다음 단계는 “[MinIO를 사용하여 {% data variables.product.prodname_registry %} 사용](/admin/packages/enabling-github-packages-with-minio)”을 참조하세요.
