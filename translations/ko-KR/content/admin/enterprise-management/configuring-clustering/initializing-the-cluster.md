---
title: 클러스터 초기화
intro: '{% data variables.product.prodname_ghe_server %} 클러스터는 라이선스를 사용하여 설정하고 SSH(관리 셸)를 사용하여 초기화해야 합니다.'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 91394d1d39301f77bc49a87012e04c3d5e9c3b60
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167086'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## {% data variables.product.prodname_ghe_server %} 설치

1. 각 클러스터 노드에서 {% data variables.product.prodname_ghe_server %}를 프로비저닝하고 설치합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.
2. 관리 셸 또는 DHCP를 사용하여 각 노드의 IP 주소 **만** 구성합니다. 다른 설정은 구성하지 마세요.

## 첫 번째 노드 구성

1. `cluster.conf`에서 MySQL 기본으로 지정될 노드에 연결합니다. 자세한 내용은 “[클러스터 구성 파일 정보](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)”를 참조하세요.
2. 웹 브라우저에서 `https://<ip address>:8443/setup/`으로 이동합니다.
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## 클러스터 초기화

클러스터를 초기화하려면 클러스터 구성 파일(`cluster.conf`)이 필요합니다. 자세한 내용은 “[클러스터 구성 파일 정보](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)”를 참조하세요.

1. 구성된 첫 번째 노드에서 `ghe-cluster-config-init`를 실행합니다.  구성되지 않은 클러스터 구성 파일에 노드가 있는 경우 클러스터가 초기화됩니다.
2. `ghe-cluster-config-apply`을 실행합니다. 그러면 `cluster.conf` 파일의 유효성이 검사되고, 각 노드 파일에 구성이 적용되고, 각 노드에서 구성된 서비스를 불러옵니다.

실행 중인 클러스터의 상태를 확인하려면 `ghe-cluster-status` 명령을 사용합니다.

## 클러스터 구성 파일 정보

클러스터 구성 파일(`cluster.conf`)은 클러스터의 노드 및 해당 노드가 실행하는 서비스를 정의합니다.
자세한 내용은 “[클러스터 노드 정보](/enterprise/admin/guides/clustering/about-cluster-nodes)”를 참조하세요.

이 예제 `cluster.conf` 에서는 노드가 11개인 클러스터를 정의합니다.

  - 클라이언트 요청에 응답하는 역할을 하는 run services라는 `ghes-front-end-node-\*` 두 개의 노드.
  - 데이터베이스 데이터의 스토리지, 검색 및 복제를 담당하는 실행 서비스라는 `ghes-database-node-\*` 세 개의 노드.
  - 검색 기능을 담당하는 run services라는 `ghes-search-node-\*` 세 개의 노드.
  - 데이터 스토리지, 검색 및 복제를 담당하는 실행 서비스라는 `ghes-storage-node-\*` 세 개의 노드.

노드 이름은 선택한 유효한 호스트 이름일 수 있습니다. 이름은 각 노드의 호스트 이름으로 설정되며, 각 노드의 `/etc/hosts`에 추가되어 로컬에서 노드를 서로 확인할 수 있습니다.

`mysql-server` 및 `mysql-master`를 통해 구성한 첫 번째 클러스터 노드를 MySQL 기본으로 지정합니다.

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

구성된 첫 번째 노드에 `/data/user/common/cluster.conf` 파일을 만듭니다. 예를 들어 `vim`를 사용하는 경우

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
