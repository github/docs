---
title: 분기 및 태그 이름에서 특수 문자 처리
intro: Git은 분기 및 태그 이름에 허용되는 문자에 대해 매우 허용적입니다. 명령줄 셸에서 Git을 사용하는 경우 특수 문자를 이스케이프하거나 인용해야 할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Special characters in names
ms.openlocfilehash: e03b6ba963cef465f775620d353f14f0f5d92d36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145115980'
---
## 분기 및 태그 이름 정보

대부분의 리포지토리는 간단한 분기 이름(예: `main` 또는 `update-icons`)을 사용합니다. 태그 이름은 일반적으로 버전 번호(예: `v1.2.3`)와 같은 기본 형식을 따릅니다. 분기 이름과 태그 이름 모두 구조에 경로 구분 기호(`/`)를 사용할 수도 있습니다(예: `area/item` 또는 `level-1/level-2/level-3`). 일부 예외(예: 이름을 슬래시로 시작 또는 끝나지 않거나 이름에 연속 슬래시 포함)를 제외하고 Git은 분기 및 태그 이름에 사용할 수 있는 문자에 대한 제한이 거의 없습니다. 자세한 내용은 Git 설명서의 “[git-check-ref-format](https://git-scm.com/docs/git-check-ref-format)”을 참조하세요.

## 특수 문자를 이스케이프해야 하는 이유

CLI를 사용할 때 셸 환경에 특별한 의미가 있는 특수 문자가 분기 또는 태그 이름에 포함된 경우가 있을 수 있습니다. Git 명령에서 이러한 문자를 안전하게 사용하려면 따옴표로 묶거나 이스케이프해야 합니다. 그러지 않으면 명령이 의도하지 않은 영향을 미칠 수 있습니다.

예를 들어 이 `$` 문자는 많은 셸에서 변수를 참조하는 데 사용됩니다. 대부분의 셸은 `hello-$USER`와 같은 유효한 분기 이름을 리터럴 문자열 `hello-$USER`로 해석하기보다는 단어 “hello”, 그 뒤에 하이픈, 그 뒤에 `USER` 변수의 현재 값과 동일한 것으로 해석합니다. 분기 이름에 `$` 문자가 포함된 경우 변수 참조로 확장되지 않도록 셸을 중지해야 합니다. 마찬가지로 분기 이름에 세미콜론(`;`)이 포함된 경우 대부분의 셸은 이를 명령 구분 기호로 해석하므로 따옴표로 묶거나 이스케이프해야 합니다.

## 분기 및 태그 이름에서 특수 문자를 이스케이프하는 방법

특수 문자가 있는 대부분의 분기 및 태그 이름은 작은따옴표에 이름을 포함하여 처리할 수 있습니다(예: `'hello-$USER'`).

* [Bash](https://www.gnu.org/software/bash/) 셸에서는 문자열을 작은따옴표로 묶으면 작은따옴표 안에 있는 문자의 리터럴 값이 유지됩니다.
* [Zsh](https://www.zsh.org/)는 Bash와 유사하게 동작합니다. 그러나 이 동작은 `RC_QUOTES` 옵션을 사용하여 구성할 수 있습니다.
* 또한 [PowerShell](https://microsoft.com/powershell)은 작은따옴표 안에 있는 문자를 있는 그대로 처리합니다.

이러한 셸의 경우 주된 예외는 분기 또는 태그 이름 자체에 작은따옴표가 포함된 경우입니다. 이 경우 셸에 대한 공식 설명서를 참조해야 합니다.

* [Bash 설명서](https://www.gnu.org/software/bash/manual/)
* [Zsh 설명서](https://zsh.sourceforge.io/Doc/)
* [Fish 설명서](https://fishshell.com/docs/current/)
* [PowerShell 설명서](https://docs.microsoft.com/en-gb/powershell/)

## 분기 및 태그 이름 지정

가능하면 특수 문자를 포함하지 않는 분기 및 태그 이름을 만드세요. 특수 문자는 이스케이프해야 하기 때문입니다. 분기 이름 및 태그 이름에 사용할 안전한 기본 문자 집합은 다음과 같습니다.

* 영어 알파벳(`a`~`z` 및 `A`~`Z`)
* 숫자(`0`~`9`)
* 제한된 문장 부호 문자 집합:
  * 마침표(`.`)
  * 하이픈(`-`)
  * 밑줄(`_`)
  * 슬래시(`/`)

혼동을 방지하려면 분기 이름을 문자로 시작해야 합니다.
