---
title: 사전 수신 후크 스크립트 만들기
intro: 사전 수신 후크 스크립트를 사용하여 내용에 따라 푸시를 수락 또는 거부하기 위한 요구 사항을 만듭니다.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook scripts
ms.openlocfilehash: ec0ccda77a2bb1a02ffcc3c53d22c3bff5ee3833
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093531'
---
[`github/platform-samples` 리포지토리](https://github.com/github/platform-samples/tree/master/pre-receive-hooks)에서 {% data variables.product.prodname_ghe_server %}에 대한 사전 수신 후크의 예를 볼 수 있습니다.

## 사전 수신 후크 스크립트 작성
{% 데이터 variables.location.product_location %}의 사전 수신 후크 환경에서 사전 수신 후크 스크립트가 실행됩니다. 사전 수신 후크 스크립트를 만들 때 사용 가능한 입력, 출력, 종료 상태 및 환경 변수를 고려합니다.

### 입력(`stdin`)
푸시가 발생하고 원격 리포지 `git-receive-pack` 토리에 대한 참조가 업데이트되기 전에 {% 데이터 variables.location.product_location %}의 프로세스가 사전 수신 후크 스크립트를 호출합니다. 스크립트에 대한 표준 입력 `stdin`은 업데이트할 각 참조에 대한 줄을 포함하는 문자열입니다. 각 줄에는 ref의 이전 개체 이름, ref의 새 개체 이름 및 ref의 전체 이름이 포함됩니다.

```
<old-value> SP <new-value> SP <ref-name> LF
```

이 문자열은 다음 인수를 나타냅니다.

| 인수 | 설명     |
| :------------- | :------------- |
| `<old-value>` | ref에 저장된 이전 개체 이름입니다.<br> 새 ref를 만들 때 값은 40개의 0입니다. |
| `<new-value>` | ref에 저장할 새 개체 이름입니다.<br> ref를 삭제하면 값은 40개의 0입니다. |
| `<ref-name>`  | ref의 전체 이름입니다. |

`git-receive-pack`에 대한 자세한 내용은 Git 설명서에서 “[git-receive-pack](https://git-scm.com/docs/git-receive-pack)”을 참조하세요. ref에 대한 자세한 내용은 *Pro Git* 의 “[Git 참조](https://git-scm.com/book/en/v2/Git-Internals-Git-References)”를 참조하세요.

### 출력(`stdout`)

스크립트에 대한 표준 출력 `stdout`은 클라이언트에 다시 전달됩니다. 명령줄 또는 사용자 인터페이스에서 모든 `echo` 문이 사용자에게 표시됩니다.

### 종료 상태

사전 수신 스크립트의 종료 상태는 푸시가 수락되는지 여부를 결정합니다.

| 종료 상태 값 | 작업 |
| :- | :- |
| 0 | 푸시가 수락됩니다. |
| 0이 아닌 값 | 푸시가 거부됩니다. |

### 환경 변수

사전 수신 후크 스크립트에 대한 표준 입력 `stdin` 외에도 {% data variables.product.prodname_ghe_server %}는 스크립트 실행을 위해 Bash 환경에서 다음 변수를 사용할 수 있도록 합니다. 사전 수신 후크 스크립트의 `stdin`에 대한 자세한 내용은 “[입력(`stdin`)](#input-stdin)”을 참조하세요.

스크립트를 실행할 트리거에 따라 사전 수신 후크 스크립트에 다양한 환경 변수를 사용할 수 있습니다.

- [항상 사용 가능](#always-available)
- [웹 인터페이스 또는 API의 푸시에 사용 가능](#available-for-pushes-from-the-web-interface-or-api)
- [끌어오기 요청 병합에 사용 가능](#available-for-pull-request-merges)
- [SSH 인증을 사용하여 푸시에 사용 가능](#available-for-pushes-using-ssh-authentication)

#### 항상 사용 가능 여부

다음 변수는 항상 사전 수신 후크 환경에서 사용할 수 있습니다.

| 변수 | 설명 | 예제 값 |
| :- | :- | :- |
|  <pre>$GIT_DIR</pre> | 인스턴스의 원격 리포지토리 경로 | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
|  <pre>$GIT_PUSH_OPTION_COUNT</pre> | `--push-option`이 있는 클라이언트에서 보낸 푸시 옵션 수입니다. 자세한 내용은 Git 설명서의 “[git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt)”를 참조하세요. | 1 |
| <pre>$GIT\_PUSH\_OPTION\_N</pre> | _N_ 이 0부터 시작하는 정수인 경우 이 변수에는 클라이언트에서 보낸 푸시 옵션 문자열이 포함됩니다. 전송된 첫 번째 옵션은 `GIT_PUSH_OPTION_0`에 저장되고, 전송된 두 번째 옵션은 `GIT_PUSH_OPTION_1`에 저장되는 식입니다. 푸시 옵션에 대한 자세한 내용은 Git 설명서의 “[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)”를 참조하세요. | abcd |{% ifversion ghes %}
|  <pre>$GIT_USER_AGENT</pre> | 변경 내용을 푸시한 Git 클라이언트에서 보낸 사용자 에이전트 문자열 | git/2.0.0{% endif %}
|  <pre>$GITHUB_REPO_NAME</pre> | _NAME_/_OWNER_ 형식으로 업데이트되는 리포지토리의 이름 | octo-org/hello-enterprise |
|  <pre>$GITHUB_REPO_PUBLIC</pre> | 업데이트되는 리포지토리가 퍼블릭인지 여부를 나타내는 부울 | <ul><li>true: 리포지토리의 표시 여부가 퍼블릭임</li><li>false: 리포지토리의 표시 여부가 프라이빗 또는 내부임</li></ul>
|  <pre>$GITHUB_USER_IP</pre> | 푸시를 시작한 클라이언트의 IP 주소 | 192.0.2.1 |
|  <pre>$GITHUB_USER_LOGIN</pre> | 푸시를 시작한 계정의 사용자 이름 | octocat |

#### 웹 인터페이스 또는 API의 푸시에 사용 가능

`$GITHUB_VIA` 변수는 웹 인터페이스 또는 {% data variables.product.prodname_ghe_server %}에 대한 API를 통해 후크를 트리거하는 ref 업데이트가 발생할 때 사전 수신 후크 환경에서 사용할 수 있습니다. 값은 ref를 업데이트한 작업을 설명합니다.

| 값 | 작업 | 추가 정보 |
| :- | :- | :- |
| <pre>auto-merge deployment api</pre> | API를 사용하여 만든 배포를 통해 기본 분기 자동 병합 | REST API 설명서의 “[배포 만들기](/rest/reference/deployments#create-a-deployment)” |
| <pre>blob#save</pre> | 웹 인터페이스에서 파일의 콘텐츠로 변경 | “[파일 편집](/repositories/working-with-files/managing-files/editing-files)” |
| <pre>branch merge api</pre> | API를 통해 분기 병합 | REST API 설명서의 “[분기 병합](/rest/reference/branches#merge-a-branch)” |
| <pre>branches page delete button</pre> | 웹 인터페이스에서 분기 삭제 | “[리포지토리 내에서 분기 만들기 및 삭제](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)” |
| <pre>git refs create api</pre> | API를 통해 ref 만들기 | REST API 설명서의 “[Git 데이터베이스](/rest/reference/git#create-a-reference)” |
| <pre>git refs delete api</pre> | API를 통해 ref 삭제 | REST API 설명서의 “[Git 데이터베이스](/rest/reference/git#delete-a-reference)” |
| <pre>git refs update api</pre> | API를 통한 ref 업데이트 | REST API 설명서의 “[Git 데이터베이스](/rest/reference/git#update-a-reference)” |
| <pre>git repo contents api</pre> | API를 통해 파일의 콘텐츠로 변경 | REST API 설명서의 “[파일 콘텐츠 만들기 또는 업데이트](/rest/reference/repos#create-or-update-file-contents)” |
{%- ifversion ghes %} | `merge ` | 자동 병합을 사용하여 끌어오기 요청 병합 | “[끌어오기 요청 자동 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)” | {%- endif %} | <pre>merge base into head</pre> | 기본 분기에 엄격한 상태 검사가 필요한 경우(예: 끌어오기 요청의 **업데이트 분기** 를 통해) | “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)” | | <pre>pull request branch delete button</pre> | 웹 인터페이스의 끌어오기 요청에서 토픽 분기 삭제 | “[끌어오기 요청에서 분기 삭제 및 복원](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)” | | <pre>pull request branch undo button</pre> | 웹 인터페이스의 끌어오기 요청에서 토픽 분기 복원 | “[끌어오기 요청에서 분기 삭제 및 복원](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch)” | | <pre>pull request merge api</pre> | API를 통해 끌어오기 요청 병합 | REST API 설명서의 “[끌어오기](/rest/reference/pulls#merge-a-pull-request)” | | <pre>pull request merge button</pre> | 웹 인터페이스 끌어오기 요청 병합 | “[끌어오기 요청 병합](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github)” | | <pre>pull request revert button</pre> | 끌어오기 요청 되돌리기 | “[끌어오기 요청 되돌리기](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request)” | | <pre>releases delete button</pre> | 릴리스 삭제 | “[리포지토리에서 릴리스 관리](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release)” | | <pre>stafftools branch restore</pre> | 사이트 관리자 대시보드에서 분기 복원 | “[사이트 관리자 대시보드](/admin/configuration/site-admin-dashboard#repositories)”| | <pre>tag create api</pre> | API를 통해 태그 만들기 | REST API 설명서의 “[Git 데이터베이스](/rest/reference/git#create-a-tag-object)” | | <pre>slumlord (#SHA)</pre> | Subversion을 통해 커밋 | “[Subversion 클라이언트 지원](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion)” | | <pre>web branch create</pre> | 웹 인터페이스를 통해 분기 만들기 | “[리포지토리 내에서 분기 만들기 및 삭제](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)” |

#### 끌어오기 요청 병합에 사용 가능

다음 변수는 후크를 트리거하는 푸시가 끌어오기 요청의 병합으로 인한 푸시인 경우 사전 수신 후크 환경에서 사용할 수 있습니다.

| 변수 | 설명 | 예제 값 |
| :- | :- | :- |
|  <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | 끌어오기 요청을 작성한 계정의 사용자 이름 | octocat |
|  <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | 끌어오기 요청 토픽 분기의 이름(`USERNAME:BRANCH` 형식) | <nobr>octocat:fix-bug</nobr> |
|  <pre>$GITHUB_PULL_REQUEST_BASE</pre> | 끌어오기 요청 기본 분기의 이름(`USERNAME:BRANCH` 형식) | octocat:main |

#### SSH 인증을 사용하여 푸시에 사용 가능

| 변수 | 설명 | 예제 값 |
| :- | :- | :- |
|  <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | 변경 내용을 푸시한 사용자의 퍼블릭 키 지문 | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

## 권한 설정 및 {% data variables.product.prodname_ghe_server %}에 사전 수신 후크 푸시

{% 데이터 variables.location.product_location %}의 리포지토리에 사전 수신 후크 스크립트가 포함되어 있습니다. 사이트 관리자는 리포지토리 권한을 고려하고 적절한 사용자만 액세스할 수 있도록 해야 합니다.

후크를 단일 리포지토리에 통합하는 것이 좋습니다. 통합 후크 리포지토리가 퍼블릭인 경우 정책 적용을 설명하는 데 `README.md`를 사용할 수 있습니다. 또한 끌어오기 요청을 통해 기여를 수락할 수 있습니다. 그러나 사전 수신 후크는 기본 분기에서만 추가할 수 있습니다. 테스트 워크플로의 경우 구성이 있는 리포지토리의 포크를 사용해야 합니다.

1. Mac 사용자의 경우 스크립트에 다음 실행 권한이 있는지 확인합니다.

   ```shell
   $ sudo chmod +x SCRIPT_FILE.sh
   ```
   Windows 사용자의 경우 스크립트에 다음 실행 권한이 있는지 확인합니다.

   ```shell
   git update-index --chmod=+x SCRIPT_FILE.sh
   ```

2. {% 데이터 variables.location.product_location %}에서 사전 수신 후크를 위해 지정된 리포지토리에 커밋하고 푸시합니다.

   ```shell
   $ git commit -m "YOUR COMMIT MESSAGE"
   $ git push
   ```

3. {% data variables.product.prodname_ghe_server %} 인스턴스에 [사전 수신 후크를 만듭니다](/enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks).

## 로컬에서 사전 수신 스크립트 테스트
{% 데이터 variables.location.product_location %}에서 만들거나 업데이트하기 전에 사전 수신 후크 스크립트를 로컬로 테스트할 수 있습니다. 한 가지 방법은 사전 수신 후크를 실행할 수 있는 원격 리포지토리 역할을 하는 로컬 Docker 환경을 만드는 것입니다.

{% data reusables.linux.ensure-docker %}

2. 다음을 포함하는 `Dockerfile.dev`라는 파일을 만듭니다.

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. `always_reject.sh`라는 테스트 사전 수신 스크립트를 만듭니다. 이 예제 스크립트는 리포지토리를 잠그는 데 유용한 모든 푸시를 거부합니다.

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. `always_reject.sh` 스크립트에 실행 권한이 있는지 확인합니다.

   ```shell
   $ chmod +x always_reject.sh
   ```

5. `Dockerfile.dev`를 포함하는 디렉터리에서 이미지를 빌드합니다.

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. 생성된 SSH 키가 포함된 데이터 컨테이너를 실행합니다.

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. 테스트 사전 수신 후크 `always_reject.sh`를 데이터 컨테이너에 복사합니다.

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. `sshd` 및 후크를 실행하는 애플리케이션 컨테이너를 실행합니다. 반환되는 컨테이너 ID를 기록해 둡니다.

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. 생성된 SSH 키를 데이터 컨테이너에서 로컬 컴퓨터로 복사합니다.

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. 테스트 리포지토리의 원격을 수정하고 Docker 컨테이너 내의 `test.git` 리포지토리로 푸시합니다. 이 예제에서는 `git@github.com:octocat/Hello-World.git`을 사용하지만 원하는 리포지토리를 사용할 수 있습니다. 이 예제에서는 로컬 컴퓨터(127.0.0.1)가 포트 52311을 바인딩하는 것으로 가정하지만, docker가 원격 머신에서 실행되는 경우 다른 IP 주소를 사용할 수 있습니다.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   사전 수신 후크를 실행하고 스크립트의 출력을 에코한 후 푸시가 거부되었습니다.

## 추가 참고 자료
 - [Pro Git 웹 사이트](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)의 “*Git 사용자 지정 - Git 적용 정책 예제*”
