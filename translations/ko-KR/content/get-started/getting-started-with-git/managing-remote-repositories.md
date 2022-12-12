---
title: 원격 리포지토리 관리
intro: '{% data variables.product.product_name %}에서 호스트되는 컴퓨터 및 원격 리포지토리에서 로컬 리포지토리를 사용해 작업하는 방법을 알아봅니다.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185053'
---
## 원격 리포지토리 추가

새 원격을 추가하려면 리포지토리가 저장된 터미널의 디렉터리에서 `git remote add` 명령을 사용합니다.

`git remote add` 명령은 다음 두 개의 인수를 사용합니다.
* 원격 이름(예: `origin`)
* 원격 URL(예: `https://{% data variables.command_line.backticks %}/user/repo.git`)

예를 들면 다음과 같습니다.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

사용할 URL에 대한 자세한 내용은 “[원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)”를 참조하세요.

### 문제 해결: 원격 원본이 이미 있음

이 오류는 로컬 리포지토리에 이미 있는 이름의 원격을 추가하려고 했음을 의미합니다.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

문제를 해결하기 위해 다음을 수행할 수 있습니다.
* 새 원격에 다른 이름을 사용합니다.
* 새 원격을 추가하기 전에 기존 원격 리포지토리의 이름을 바꿉니다. 자세한 내용은 아래의 “[원격 리포지토리 이름 바꾸기](#renaming-a-remote-repository)”를 참조하세요.
* 새 원격을 추가하기 전에 기존 원격 리포지토리를 삭제합니다. 자세한 내용은 아래의 “[원격 리포지토리 제거](#removing-a-remote-repository)”를 참조하세요.

## 원격 리포지토리의 URL 변경

`git remote set-url` 명령은 기존 원격 리포지토리 URL을 변경합니다.

{% tip %}

**팁:** HTTPS와 SSH URL 간의 차이점에 대한 자세한 내용은 “[원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)”를 참조하세요.

{% endtip %}

`git remote set-url` 명령은 다음 두 개의 인수를 사용합니다.

* 기존 원격 이름. 예를 들어 일반적으로 선택하는 두 가지는 `origin` 또는 `upstream`입니다.
* 새 원격 URL. 예를 들면 다음과 같습니다.
  * HTTPS를 사용하도록 업데이트하는 경우 URL은 다음과 같을 수 있습니다.
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * SSH를 사용하도록 업데이트하는 경우 URL은 다음과 같을 수 있습니다.
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### 원격 URL을 SSH에서 HTTPS로 전환

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
3. 변경하려는 원격의 이름을 얻기 위해 기존 원격을 나열합니다.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. `git remote set-url` 명령을 사용하여 원격의 URL을 SSH에서 HTTPS로 변경합니다.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. 원격 URL이 변경되었는지 확인합니다.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

다음에 원격 리포지토리에 `git fetch`, `git pull` 또는 `git push`할 때 GitHub 사용자 이름 및 암호를 묻는 메시지가 표시됩니다. {% data reusables.user-settings.password-authentication-deprecation %}

GitHub와 대화할 때마다 GitHub 사용자 이름 및 {% data variables.product.pat_generic %}을(를) 기억할 수 있도록 [자격 증명 도우미를 사용할](/github/getting-started-with-github/caching-your-github-credentials-in-git) 수 있습니다.

### 원격 URL을 HTTPS에서 SSH로 전환

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
3. 변경하려는 원격의 이름을 얻기 위해 기존 원격을 나열합니다.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. `git remote set-url` 명령을 사용하여 원격의 URL을 HTTPS에서 SSH로 변경합니다.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. 원격 URL이 변경되었는지 확인합니다.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### 문제 해결: ‘[name]’ 원격이 없음

이 오류는 변경하려는 원격이 없음을 의미합니다.

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

원격 이름을 올바르게 입력했는지 확인합니다.

## 원격 리포지토리 이름 바꾸기

`git remote rename` 명령을 사용하여 기존 원격의 이름을 바꿉니다.

`git remote rename` 명령은 다음 두 개의 인수를 사용합니다.
* 기존 원격 이름(예: `origin`)
* 새 원격 이름(예: `destination`)

## 예제

예제에서는 [HTTPS를 사용하여 복제](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)(권장)한다고 가정합니다.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### 문제 해결: 구성 섹션의 이름을 ‘remote.[old name]’에서 ‘remote.[new name]’으로 바꿀 수 없음

이 오류는 입력한 이전 원격 이름이 없음을 의미합니다.

`git remote -v` 명령을 사용하여 현재 있는 원격을 확인할 수 있습니다.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### 문제 해결: [new name] 원격이 이미 있음

이 오류는 사용하려는 원격 이름이 이미 있음을 의미합니다. 문제를 해결하려면 다른 원격 이름을 사용하거나 원래 원격의 이름을 바꿉니다.

## 원격 리포지토리 제거 

`git remote rm` 명령을 사용하여 리포지토리에서 원격 URL을 제거합니다.

`git remote rm` 명령은 다음 한 개의 인수를 사용합니다.
* 원격 이름(예: `destination`)

리포지토리에서 원격 URL을 제거하는 경우 로컬 및 원격 리포지토리의 연결만 해제됩니다. 원격 리포지토리가 삭제되지는 않습니다.

## 예제

예제에서는 [HTTPS를 사용하여 복제](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)(권장)한다고 가정합니다.

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**참고**: `git remote rm`은 서버에서 원격 리포지토리를 삭제하지 않습니다. 로컬 리포지토리에서 원격 및 해당 참조를 제거하기만 합니다.

{% endwarning %}

### 문제 해결: ‘remote.[name]’ 구성 섹션을 제거할 수 없음

이 오류는 삭제하려는 원격이 없음을 의미합니다.

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

원격 이름을 올바르게 입력했는지 확인합니다.

## 추가 참고 자료

- [_Pro Git_ 설명서의 “원격 작업”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
