---
title: IDE와 GitHub 클래스룸 통합
shortTitle: Integrate with an IDE
intro: '{% data variables.product.prodname_classroom %}에서 만든 할당에 대해 지원되는 IDE(통합 개발 환경)를 미리 구성할 수 있습니다.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110508'
---
## IDE와의 통합 정보

{% data reusables.classroom.about-online-ides %} 

학생이 IDE를 사용하여 과제를 수락하면 학생의 과제 리포지토리에 있는 README 파일에 IDE에서 과제를 여는 단추가 포함됩니다. 학생은 즉시 작업을 시작할 수 있으며 추가 구성이 필요하지 않습니다.

## 지원되는 IDE

{% data variables.product.prodname_classroom %}은 다음 IDE를 지원합니다. 각 IDE에 대한 학생 경험에 대해 자세히 알아볼 수 있습니다.

| IDE | 추가 정보 |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | "[{% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)" |
| Microsoft MakeCode Arcade | "[{% data variables.product.prodname_classroom %}에서 MakeCode Arcade 사용 정보](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| {% data variables.product.prodname_vscode %} | Visual Studio Marketplace의 [{% data variables.product.prodname_classroom %} 확장](http://aka.ms/classroom-vscode-ext) |

클라우드 IDE 통합이 클래스룸에 중요하다는 것을 알고 있으며 더 많은 옵션을 제공하기 위해 노력하고 있습니다. 

## 할당에 대한 IDE 구성

할당을 만들 때 할당에 사용할 IDE를 선택할 수 있습니다. IDE를 사용하는 새 할당을 만드는 방법을 알아보려면 "[개별 할당 만들기](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" 또는 "[그룹 할당 만들기"](/education/manage-coursework-with-github-classroom/create-a-group-assignment)를 참조하세요.

## 새 IDE에서 할당 설정

다른 IDE를 사용하여 할당을 처음 구성할 때는 할당이 올바르게 설정되었는지 확인해야 합니다.

{% data variables.product.prodname_codespaces %}를 사용하지 않는 한, 조직의 IDE에 대한 OAuth 앱에 권한을 부여해야 합니다. 모든 리포지토리의 경우 앱에 메타데이터, 관리 및 코드에 대한 **읽기** 액세스 권한을 부여하고 관리 및 코드에 대한 **쓰기** 액세스 권한을 부여합니다. 자세한 내용은 “[OAuth 앱 권한 부여](/github/authenticating-to-github/authorizing-oauth-apps)”를 참조하세요.

{% data variables.product.prodname_codespaces %}에는 OAuth 앱이 필요하지 않지만 조직에서 {% data variables.product.prodname_codespaces %}를 사용하여 할당을 구성할 수 있도록 {% data variables.product.prodname_codespaces %}를 사용하도록 설정해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_codespaces %} 사용](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)”을 참조하세요.

## 추가 참고 자료

- "[추가 정보 파일 정보](/github/creating-cloning-and-archiving-repositories/about-readmes)"
