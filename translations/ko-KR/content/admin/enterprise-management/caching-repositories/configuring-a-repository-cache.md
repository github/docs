---
title: 리포지토리 캐시 구성
intro: '새 인스턴스를 만들고, 리포지토리 캐시를 기본 인스턴스에 연결하고, 리포지토리 캐시에 리포지토리 네트워크의 복제를 구성하여 {% data variables.product.product_name %}에 대한 리포지토리 캐시를 구성할 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: 682e169c55ef7ded453934720bf47f8843bc4acc
ms.sourcegitcommit: 1d757a4f3e1947fdd3868208b63041de30c9f60c
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/03/2022
ms.locfileid: '148132381'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## 리포지토리 캐싱 구성 정보

{% data reusables.enterprise.repository-caching-config-summary %} 이제 리포지토리 캐시에 복제되는 리포지토리 네트워크를 결정하는 데이터 위치 정책을 설정할 수 있습니다.

리포지토리 캐싱은 클러스터링에서는 지원되지 않습니다.

## 리포지토리 캐시용 DNS

주 인스턴스와 리포지토리 캐시는 DNS 이름이 달라야 합니다. 예를 들어 주 인스턴스가 `github.example.com`에 있다면 캐시 이름을 `europe-ci.github.example.com`이나 `github.asia.example.com`으로 지정할 수 있습니다.

CI 머신이 주 인스턴스 대신 리포지토리 캐시에서 가져오게 하려면 Git의 `url.<base>.insteadOf` 구성 설정을 사용하면 됩니다. 자세한 내용은 Git 설명서의 [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf)를 참조하세요. 

예를 들어 CI 머신의 전역 `.gitconfig`는 이러한 줄을 포함합니다.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

이후 `https://github.example.com/myorg/myrepo`를 패치하라는 지시를 받으면 Git는 `https://europe-ci.github.example.com/myorg/myrepo`에서 가져오기를 수행합니다.

## 리포지토리 캐시 구성

{% ifversion ghes = 3.3 %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. 리포지토리 캐싱을 사용하도록 설정하려면 다음 명령을 실행합니다.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. 원하는 플랫폼에서 새 {% data variables.product.prodname_ghe_server %} 인스턴스를 설정합니다. 이 인스턴스는 리포지토리 캐시가 됩니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.
{% data reusables.enterprise_installation.replica-steps %}
1. SSH를 사용하여 리포지토리 캐시의 IP 주소에 연결합니다.

   ```shell
   $ ssh -p 122 admin@REPLICA-IP
   ```
{%- ifversion ghes = 3.3 %}
1. 캐시 복제본에서 리포지토리 캐싱에 기능 플래그를 사용하도록 설정합니다.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. 기본에 대한 연결을 확인하고 리포지토리 캐시에 대해 복제본 모드를 사용하도록 설정하려면 `ghe-repl-setup`을 다시 실행합니다.

   ```shell
   $ ghe-repl-setup PRIMARY-IP
   ```

{% ifversion ghes < 3.6 %}
1. 리포지토리 캐시에 `cache-location`을 설정하여 *CACHE-LOCATION* 을 영숫자 식별자(예: 캐시가 배포된 지역)로 대체합니다. 또한 이 캐시에 대한 데이터 센터 이름을 설정합니다. 새 캐시는 동일한 데이터 센터의 다른 캐시에서 시드를 시도합니다.

   ```shell
   $ ghe-repl-node --cache CACHE-LOCATION --datacenter REPLICA-DC-NAME
   ```
{% else %}
1. 리포지토리 캐시를 구성하려면 명령을 사용하고 `ghe-repl-node` 필요한 매개 변수를 포함합니다.
    - 리포지토리 캐시에 `cache-location`을 설정하여 *CACHE-LOCATION* 을 영숫자 식별자(예: 캐시가 배포된 지역)로 대체합니다.  *CACHE-LOCATION* 값은 또는 `media`와 같은 `assets` 하위 도메인 격리와 함께 사용하도록 예약된 하위 도메인이 아니어야 합니다.  예약된 이름 목록은 "[하위 도메인 격리 사용"을 참조하세요](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation).
    - `cache-domain` 리포지토리 캐시에 대해 를 설정하고 *EXTERNAL-CACHE-DOMAIN* 을 Git 클라이언트가 리포지토리 캐시에 액세스하는 데 사용할 호스트 이름으로 바꿉니다. 를 지정 `cache-domain`하지 않으면 {% data variables.product.product_name %}이(가) *CACHE-LOCATION* 값 앞에 인스턴스에 대해 구성된 호스트 이름에 하위 도메인으로 추가됩니다. 자세한 내용은 “[호스트 이름 구성](/admin/configuration/configuring-network-settings/configuring-a-hostname)”을 참조하세요.
    - 새 캐시는 동일한 데이터 센터의 다른 캐시에서 시드를 시도합니다. `datacenter` *REPLICA-DC-NAME* 을 노드를 배포하는 데이터 센터의 이름으로 바꿔 리포지토리 캐시에 대한 를 설정합니다.

    ```shell
    $ ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```
{% endif %}

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. 리포지토리 네트워크를 리포지토리 캐시로 복제할 수 있게 하려면 데이터 위치 정책을 설정해야 합니다. 자세한 내용은 "[데이터 위치 정책](#data-location-policies)"을 참조하세요.

## 데이터 위치 정책

`spokesctl cache-policy` 명령으로 리포지토리에 대한 데이터 위치 정책을 구성하면 데이터 지역성을 제어할 수 있습니다. 데이터 위치 정책은 어떤 리포지토리 네트워크가 어떤 리포지토리 캐시에 복제되는지를 결정합니다. 기본적으로 데이터 위치 정책이 구성되기 전에는 리포지토리 네트워크가 리포지토리 캐시에 복제되지 않습니다.

데이터 위치 정책은 Git 콘텐츠에만 영향을 미칩니다. 문제 및 끌어오기 요청 주석과 같은 데이터베이스의 콘텐츠는 정책에 관계없이 모든 노드에 복제됩니다.

{% note %}

**참고:** 데이터 위치 정책은 액세스 제어와 동일하지 않습니다. 리포지토리에 액세스할 수 있는 사용자를 리포지토리 역할을 이용해 제어해야 합니다. 리포지토리 역할에 대한 자세한 내용은 "[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"을 참조하세요.

{% endnote %} 

`--default` 플래그를 사용하여 모든 네트워크를 복제하도록 정책을 구성할 수 있습니다. 예를 들어 이 명령은 모든 리포지토리 네트워크의 단일 복사본을 `cache_location`이 "캔자스"인 리포지토리 캐시 집합에 복제하는 정책을 만듭니다.

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

리포지토리 네트워크에 대한 복제를 구성하려면 네트워크의 루트인 리포지토리를 지정합니다. 리포지토리 네트워크에는 리포지토리 및 리포지토리의 모든 포크가 포함됩니다. 전체 네트워크를 복제하지 않고 네트워크의 일부를 복제할 수를 없습니다.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

네트워크의 복제본 수를 0으로 지정하면 모든 네트워크를 복제하고 특정 네트워크를 제외하는 정책을 재정의할 수 있습니다. 예를 들어 이 명령은 "캔자스" 위치에 있는 모든 리포지토리 캐시에 해당 네트워크의 복사본이 포함될 수 없다고 지정합니다.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

해당 캐시 위치에는 복제본이 2개 이상 존재할 수 없습니다.
