---
title: Git 정보
intro: '버전 제어 시스템, Git 및 {% data variables.product.product_name %}에서 작동하는 방법에 대해 알아봅니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Git
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 595fc79c5a656a3d6da8b5589ed384b545a418ac
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888124'
---
## 버전 제어 및 Git 정보

버전 제어 시스템(VCS)은 사용자와 팀이 함께 프로젝트에서 협업할 때 발생하는 변경 기록을 추적합니다. 개발자가 프로젝트를 변경해도 언제든지 이전 버전의 프로젝트를 복구할 수 있습니다.

개발자는 프로젝트 기록을 검토하여 다음을 확인할 수 있습니다.

- 변경된 내용
- 변경한 사람
- 변경된 시기
- 변경이 필요한 이유

VCS는 각 기여자에게 프로젝트의 통합되고 일관된 보기를 제공하여 이미 진행 중인 작업을 보여 줍니다. 변경 내용의 투명한 기록, 변경한 사람 및 프로젝트 개발에 기여하는 방식을 확인하면 팀 구성원이 독립적으로 작업하는 동안 보조를 맞추는 데 도움이 됩니다.

분산 버전 제어 시스템에서 모든 개발자는 프로젝트 및 프로젝트 기록의 전체 복사본을 이용합니다. 한때 널리 사용되었던 중앙 버전 제어 시스템과 달리 DVCS에는 중앙 리포지토리에 대한 지속적인 연결이 필요하지 않습니다. Git은 배포된 버전 제어 시스템 중 가장 인기가 많은 시스템입니다. Git은 일반적으로 오픈 소스 및 상용 소프트웨어 개발에 사용되며 개인, 팀 및 비즈니스에 상당한 이점이 있습니다.

- Git을 사용하면 개발자가 모든 프로젝트의 변경 내용, 결정 및 진행 상황에 대한 전체 타임라인을 한 곳에서 볼 수 있습니다. 프로젝트 기록에 액세스하는 순간부터 개발자는 프로젝트 기록을 이해하고 기여를 시작하는 데 필요한 모든 컨텍스트를 확보합니다.

- 개발자는 모든 표준 시간대에서 작업합니다. Git 같은 DVCS를 사용하면 소스 코드 무결성을 유지하면서 언제든지 협업할 수 있습니다. 개발자는 분기를 사용하여 프로덕션 코드에 대한 변경 내용을 안전하게 제안할 수 있습니다.

- Git을 사용하는 기업은 팀 간의 커뮤니케이션 장벽을 허물고 최고의 성과를 내는 데 집중할 수 있습니다. 또한 Git을 사용하면 비즈니스 전반의 다양한 전문가와 보조를 맞춰 주요 프로젝트에 대한 협업을 수행할 수 있습니다.

## 리포지토리 정보

리포지토리 또는 Git 프로젝트는 각 파일의 수정 기록과 함께 프로젝트와 연결된 파일 및 폴더의 전체 컬렉션을 아우릅니다. 파일 기록은 커밋이라는 시간의 스냅샷으로 표시됩니다. 커밋은 분기라는 여러 개발 라인으로 구성될 수 있습니다. Git은 DVCS이므로 리포지토리는 자체 포함 단위이며 리포지토리의 복사본을 가진 모든 사용자는 전체 코드베이스 및 해당 기록에 액세스할 수 있습니다. Git 리포지토리에서는 명령줄 또는 기타 사용 편의성 인터페이스를 사용하므로 기록과의 상호 작용, 리포지토리 복제, 분기 만들기, 커밋, 병합, 코드 버전 간 변경 내용 비교 등이 가능합니다.

{% data variables.product.product_name %} 같은 플랫폼을 통해 Git은 프로젝트 투명성과 협업을 위한 더 많은 기회를 제공합니다. 퍼블릭 리포지토리에서 팀은 협력을 통해 최고의 최종 제품을 빌드할 수 있습니다.

## {% data variables.product.product_name %}의 작동 방식

{% data variables.product.product_name %}은 Git 리포지토리를 호스트하고, 개발자가 명령줄 기능, 문제(스레드 토론), 끌어오기 요청, 코드 검토 또는 {% data variables.product.prodname_marketplace %}의 무료 및 유료 앱 컬렉션 사용 등을 통해 더 나은 코드를 제공할 수 있도록 도구를 제공합니다. {% data variables.product.product_name %} 흐름, 1,500만 명의 개발자 커뮤니티, 수백 가지 통합을 갖춘 에코시스템 등의 협업 계층을 통해 {% data variables.product.product_name %}는 소프트웨어 빌드 방식을 바꾸어 놓습니다.

{% data variables.product.product_name %}에서는 협업이 개발 프로세스 중에 바로 이루어집니다. 작업은 개발자가 요구 사항 또는 방향을 간략하게 설명하고 팀 구성원에 대한 기대치를 설정할 수 있는 리포지토리에 구성됩니다. 그러면 개발자는 {% data variables.product.product_name %} 흐름을 사용하여 업데이트 작업을 수행할 분기를 만들고, 변경 내용을 저장하도록 커밋하며, 끌어오기 요청을 열어 변경 내용을 제안 및 논의하고, 모든 사용자가 동일한 단계에 있을 때 끌어오기 요청을 병합하기만 하면 됩니다. 자세한 내용은 “[GitHub 흐름](/get-started/quickstart/github-flow)”을 참조하세요.

## {% data variables.product.product_name %} 및 명령줄

### 기본 Git 명령

Git을 사용하려면 개발자는 특정 명령을 사용하여 코드를 복사, 만들기, 변경 및 결합합니다. 해당 명령은 명령줄에서 직접 실행하거나 {% data variables.product.prodname_desktop %} 같은 애플리케이션을 사용하여 실행할 수 있습니다. 다음은 Git을 사용하기 위한 몇 가지 일반적인 명령입니다.

- `git init`은 새 Git 리포지토리를 초기화하고 기존 디렉터리 추적을 시작합니다. 버전 제어에 필요한 내부 데이터 구조를 포함하는 기존 디렉터리 내에서 숨겨진 하위 폴더를 추가합니다.

- `git clone`은 이미 원격으로 존재하는 프로젝트의 로컬 복사본을 만듭니다. 복제본에는 프로젝트의 모든 파일, 기록 및 분기가 포함됩니다.

- `git add`는 변경을 스테이징합니다. Git은 개발자 코드베이스의 변경 내용을 추적하지만, 프로젝트 기록에 포함하려면 변경 내용을 스테이징하고 스냅샷을 생성해야 합니다. 이 명령은 2단계 프로세스의 첫 번째 부분인 스테이징을 수행합니다. 스테이징된 모든 변경 내용은 다음 스냅샷의 일부이자 프로젝트 기록의 일부가 됩니다. 별도로 스테이징 및 커밋하면 개발자가 코드 및 작업 방식을 변경하지 않고도 프로젝트의 기록을 완전히 제어할 수 있습니다.

- `git commit`은 스냅샷을 프로젝트 기록에 저장하고 변경 내용 추적 프로세스를 완료합니다. 즉, 커밋은 사진 촬영과 같은 기능을 합니다. `git add`로 스테이징된 모든 항목은 `git commit`을 통해 스냅샷의 일부가 됩니다.

- `git status`는 변경 상태를 추적되지 않음, 수정됨 또는 스테이징됨으로 표시합니다.

- `git branch`는 로컬에서 작업 중인 분기를 보여 줍니다.

- `git merge`는 개발 라인을 함께 병합합니다. 이 명령은 일반적으로 두 개의 고유한 분기에 대한 변경 내용을 결합하는 데 사용됩니다. 예를 들어 개발자는 기능 분기의 변경 내용을 배포를 위해 주 분기로 결합하려는 경우 병합합니다.

- `git pull`은 로컬 개발 라인을 원격 대응 업데이트로 업데이트합니다. 개발자는 팀 동료가 원격에 있는 분기에 커밋한 경우 이 명령을 사용하며 로컬 환경에서 변경 내용을 반영하려고 합니다.

- `git push`가 로컬에서 만든 커밋으로 원격 리포지토리를 분기에 업데이트합니다.

자세한 내용은 [Git 명령에 대한 전체 참조 가이드](https://git-scm.com/docs)를 참조하세요.

### 예: 기존 리포지토리에 기여

```bash
# download a repository on {% data variables.product.product_name %} to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### 예: 새 리포지토리를 시작하고 {% data variables.product.product_name %}에 게시

먼저 {% data variables.product.product_name %}에서 새 리포지토리를 만들어야 합니다. 자세한 내용은 “[Hello World](/get-started/quickstart/hello-world)”를 참조하세요. README, .gitignore 또는 라이선스 파일을 사용하여 리포지토리를 초기화 **하지 마세요**. 이 빈 리포지토리는 코드를 기다립니다.

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```

### 예: {% data variables.product.product_name %}의 기존 분기에 기여

이 예제에서는 컴퓨터에 `repo`라는 프로젝트가 이미 있고 마지막으로 로컬에서 변경된 이후 새 분기가 {% data variables.product.product_name %}에 푸시되었다고 가정합니다.

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## 협업 개발을 위한 모델

{% data variables.product.product_name %}에서 협업하는 방법으로는 기본적으로 두 가지가 있습니다.

1. 공유 리포지토리
2. 포크 및 풀

공유 리포지토리를 사용하면 개인 및 팀이 읽기, 쓰기 또는 관리자 액세스 권한이 있는 참가자로 명시적으로 지정됩니다. 보호된 분기 같은 기능과 결합된 이 간단한 권한 구조는 팀이 {% data variables.product.product_name %}를 채택할 때 빠르게 진행하는 데 도움이 됩니다.

오픈 소스 프로젝트 또는 누구나 참여할 수 있는 프로젝트의 경우 개별 사용 권한을 관리하는 것은 어려울 수 있지만 포크 및 끌어오기 모델을 사용하면 프로젝트를 볼 수 있는 모든 사용자가 참여할 수 있습니다. 포크는 개발자의 개인 계정에 있는 프로젝트의 복사본입니다. 모든 개발자는 포크를 완전히 제어할 수 있으며 수정 또는 새 기능을 자유롭게 구현할 수 있습니다. 포크에서 완료된 작업은 별도로 유지되거나 끌어오기 요청을 통해 원래 프로젝트로 다시 표시됩니다. 이 경우 유지 관리자는 제안된 변경 내용을 병합하기 전에 검토할 수 있습니다. 자세한 내용은 “[프로젝트에 기여](/get-started/quickstart/contributing-to-projects)”를 참조하세요.

## 추가 참고 자료

{% data variables.product.product_name %} 팀은 사용자가 계속해서 기술을 개발하고 더 나은 소프트웨어를 빌드할 수 있도록 교육용 비디오 및 가이드 라이브러리를 만들었습니다.

- [살펴볼 초보자 프로젝트](https://github.com/showcases/great-for-new-contributors)
- [{% data variables.product.product_name %} 동영상 가이드](https://youtube.com/githubguides)

Git 사례를 자세히 살펴보려면 아래 비디오에서 일부 Git 명령을 최대한 활용하는 방법을 볼 수 있습니다.

- [로컬로 작업](https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git status`](https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3)
- [2단계 커밋](https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git pull` 및 `git push`](https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
