---
title: 복제 오류 문제 해결
intro: 리포지토리를 복제하는 데 문제가 있는 경우 다음의 일반적인 오류를 확인합니다.
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 01ee7c0c1403100570c1fd8b990e6adfe8831f80
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094003'
---
## HTTPS 복제 오류

Git에서 HTTPS를 사용하는 경우 몇 가지 일반적인 오류가 있습니다. 이러한 오류는 일반적으로 이전 버전의 Git이 있거나 리포지토리에 액세스할 수 없음을 나타냅니다.

수신할 수 있는 HTTPS 오류의 예는 다음과 같습니다.

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/USER/REPO.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/USER/REPO.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/USER/REPO.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Git 버전 확인

{% data variables.product.product_name %}와(과) 상호 작용하는 데 필요한 최소 Git 버전은 없지만, 버전 1.7.10은 많은 플랫폼에서 사용할 수 있는 편안한 안정적인 버전으로 확인되었습니다. 항상 [Git 웹 사이트에서 최신 버전을 다운로드](https://git-scm.com/downloads)할 수 있습니다.

### 원격이 올바른지 확인

페치하려는 리포지토리는 {% 데이터 variables.location.product_location %}에 있어야 하며 URL은 대/소문자를 구분합니다.

명령줄을 열고 `git remote -v`를 입력하여 로컬 리포지토리의 URL을 찾을 수 있습니다.

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

또는 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 애플리케이션을 통해 URL을 변경할 수 있습니다.

### 액세스 토큰 제공

{% 데이터 variables.product.prodname_dotcom %}에 액세스하려면 암호 대신 {% 데이터 variables.product.pat_generic %}로 인증해야 합니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

{% data reusables.command_line.provide-an-access-token %}

### 권한 확인

사용자 이름 및 암호를 묻는 메시지가 표시되면 리포지토리에 대한 액세스 권한이 있는 계정을 사용해야 합니다.

{% tip %}

**팁**: 원격 리포지토리와 상호 작용할 때마다 자격 증명을 입력하지 않으려면 [자격 증명 캐싱](/github/getting-started-with-github/caching-your-github-credentials-in-git)을 설정할 수 있습니다. 자격 증명 캐싱을 이미 사용하고 있는 경우 컴퓨터에 올바른 자격 증명이 캐시되어 있는지 확인하세요. 올바르지 않거나 오래된 자격 증명으로 인해 인증이 실패합니다.

{% endtip %}

### 대신 SSH 사용

이전에 SSH 키를 설정한 경우 HTTPS 대신 SSH 복제 URL을 사용할 수 있습니다.  자세한 내용은 “[원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)”를 참조하세요.

## 오류: 리포지토리를 찾을 수 없음

{% ifversion fpt 또는 ghae 또는 ghec %} 리포지토리를 복제할 때 이 오류가 표시되면 리포지토리가 없거나 액세스할 수 있는 권한이 없음을 의미합니다. {% else %} 리포지토리를 복제할 때 이 오류가 표시되면 리포지토리가 없거나 액세스 권한이 없거나 {% 데이터 variables.location.product_location %}이(가) 프라이빗 모드에 있음을 의미합니다. {% endif %} 원인에 따라 이 오류에 대한 몇 가지 해결 방법이 있습니다.

### 맞춤법 검사 수행

오타가 발생하고 리포지토리 이름은 대/소문자를 구분합니다.  `git@{% data variables.command_line.codeblock %}:user/repo.git` 복제를 시도했지만 리포지토리의 이름이 실제로 `User/Repo`인 경우 이 오류가 발생합니다.

이 오류를 방지하려면 복제할 때 항상 리포지토리 페이지에서 복제 URL을 복사하여 붙여넣습니다. 자세한 내용은 “[리포지토리 복제](/articles/cloning-a-repository)”를 참조하세요.

기존 리포지토리에서 원격을 업데이트하려면 “[원격 리포지토리 관리](/github/getting-started-with-github/managing-remote-repositories)”를 참조하세요.

### 사용 권한 확인

프라이빗 리포지토리를 복제하려고 하지만 리포지토리를 볼 수 있는 권한이 없는 경우 이 오류가 발생합니다.

다음 방법 중 하나로 리포지토리에 액세스할 수 있는지 확인합니다.

* 리포지토리의 소유자
* 리포지토리의 [협력자](/articles/inviting-collaborators-to-a-personal-repository)
* 리포지토리에 액세스할 수 있는 [팀의 구성원](/articles/adding-organization-members-to-a-team)(리포지토리가 조직에 속한 경우)

### SSH 액세스 확인

드문 경우지만 리포지토리에 대한 적절한 SSH 액세스 권한이 없을 수 있습니다.

사용 중인 SSH 키가 {% data variables.product.product_name %}의 개인 계정에 연결되어 있는지 확인해야 합니다. 명령줄에 다음을 입력하여 이를 확인할 수 있습니다.

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} 리포지토리가 조직에 속하고 OAuth 앱에서 생성된 SSH 키를 사용하는 경우 OAuth 앱 액세스가 조직 소유자에 의해 제한되었을 수 있습니다. 자세한 내용은 “[OAuth 앱 액세스 제한 정보](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)”를 참조하세요.
{% endif %}

자세한 내용은 [GitHub 계정에 새 SSH 키 추가](/articles/adding-a-new-ssh-key-to-your-github-account)를 참조하세요.

{% ifversion ghes %}
### 인스턴스가 프라이빗 모드인지 확인

사이트 관리자가 GitHub Enterprise 인스턴스에서 프라이빗 모드를 사용하도록 설정한 경우 `git://`에 대한 익명 클론은 비활성화됩니다. 리포지토리를 복제할 수 없는 경우 사이트 관리자에게 문의하세요.
{% endif %}

### 리포지토리가 실제로 존재하는지 확인

다른 모든 작업이 실패하면 {% 데이터 variables.location.product_location %}에 리포지토리가 실제로 있는지 확인합니다.
존재하지 않는 리포지토리로 푸시하려는 경우 이 오류가 발생합니다.

## 오류: 원격 HEAD가 존재하지 않는 참조를 참조하여 체크 아웃할 수 없음

이 오류는 {% 데이터 variables.location.product_location %}에서 리포지토리의 기본 분기가 삭제된 경우에 발생합니다.

이 오류를 검색하는 것은 간단합니다. 리포지토리를 복제하려고 하면 Git에서 경고합니다.

```shell
$ git clone https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

오류를 해결하려면 {% 데이터 variables.location.product_location %}에서 리포지토리의 관리자여야 합니다.
리포지토리의 [기본 분기를 변경](/github/administering-a-repository/changing-the-default-branch)합니다.

그런 다음, 명령줄에서 사용 가능한 모든 분기 목록을 가져올 수 있습니다.

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

그런 다음, 새 분기로 전환할 수 있습니다.

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
