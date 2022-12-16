---
title: 사전 수신 후크 환경 만들기
intro: 사전 수신 후크를 실행하려면 기본 사전 수신 환경을 사용하거나 사용자 지정 환경을 만듭니다.
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
ms.openlocfilehash: 2c2a31a4092b475170449ba138d6f0798424206b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116367'
---
{% data variables.product.prodname_ghe_server %}용 사전 수신 환경은 Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot) 환경입니다. 사전 수신 후크는 모든 푸시 이벤트에서 실행되므로 빠르고 간단해야 합니다. 이러한 검사에 필요한 환경은 일반적으로 최소화됩니다.

{% data variables.product.prodname_ghe_server %}는 다음 패키지가 포함된 기본 환경을 제공합니다. `awk`, `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

특정 언어에 대한 지원과 같이 이 환경에서 충족되지 않는 특정 요구 사항이 있는 경우 고유한 64비트 Linux `chroot` 환경을 만들고 업로드할 수 있습니다.

## Docker를 사용하여 사전 수신 후크 환경 만들기

Linux 컨테이너 관리 도구를 사용하여 사전 수신 후크 환경을 빌드할 수 있습니다. 이 예제에서는 [Alpine Linux](http://www.alpinelinux.org/) 및 [Docker](https://www.docker.com/)를 사용합니다.

{% data reusables.linux.ensure-docker %}
2. 다음 정보를 포함하는 `Dockerfile.alpine-3.3` 파일을 만듭니다.

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. `Dockerfile.alpine-3.3` 파일이 포함된 작업 디렉터리에서 이미지를 빌드합니다.

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```
4. 컨테이너를 만듭니다.

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Docker 컨테이너를 `gzip` 압축 `tar` 파일로 내보냅니다.

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   이 `alpine-3.3.tar.gz` 파일은 {% data variables.product.prodname_ghe_server %} 어플라이언스로 업로드할 준비가 되었습니다.

## chroot를 사용하여 사전 수신 후크 환경 만들기

1. Linux `chroot` 환경을 만듭니다.
2. `chroot` 디렉터리의 `gzip` 압축 `tar` 파일을 만듭니다.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **참고:**
   - tar 보관 파일 내에 있는 파일의 선행 디렉터리 경로(예: `/path/to/chroot`)를 포함하지 마세요.
   - `/bin/sh`가 chroot 환경의 진입점으로 존재하고 실행 가능해야 합니다.
   - 기존의 chroot와 달리, 사전 수신 후크용 chroot 환경에서는 `dev` 디렉터리가 필요하지 않습니다.

   {% endnote %}

chroot 환경을 만드는 방법에 대한 자세한 내용은 *Debian Wiki* 의 "[Chroot](https://wiki.debian.org/chroot)", *Ubuntu Community Help Wiki* 의 "[BasicChroot](https://help.ubuntu.com/community/BasicChroot)" 또는 *Alpine Linux Wiki* 의 "[chroot에 Alpine Linux 설치](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)"를 참조하세요.

## {% data variables.product.prodname_ghe_server %}에 사전 수신 후크 업로드

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. **환경 관리** 를 클릭합니다.
![환경 관리](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. **환경 추가** 를 클릭합니다.
![환경 추가](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. **환경 이름** 필드에 원하는 이름을 입력합니다.
![환경 이름](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. 환경이 포함된 `*.tar.gz` 파일의 URL을 입력합니다.
![URL에서 환경 업로드](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. **환경 추가** 를 클릭합니다.
![환경 추가 단추](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## 관리 셸을 통해 사전 수신 후크 환경 업로드
1. 환경이 포함된 읽기 가능한 `*.tar.gz` 파일을 웹 호스트에 업로드하고 URL을 복사하거나 `scp`를 통해 파일을 {% data variables.product.prodname_ghe_server %} 어플라이언스로 전송합니다. `scp`를 사용할 때 `*.tar.gz` 파일을 읽을 수 있도록 파일 권한을 조정해야 할 수 있습니다.
1.  관리 셸에 연결합니다.
2.  `ghe-hook-env-create` 명령을 사용하여 원하는 환경 이름을 첫 번째 인수로 입력하고 환경이 포함된 `*.tar.gz` 파일의 전체 로컬 경로 또는 URL을 두 번째 인수로 입력합니다.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
