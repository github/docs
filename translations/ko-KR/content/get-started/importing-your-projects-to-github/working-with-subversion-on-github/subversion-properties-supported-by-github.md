---
title: GitHub에서 지원되는 Subversion 속성
intro: '{% data variables.product.product_name %}의 기존 기능과 유사한 여러 Subversion 워크플로 및 속성이 있습니다.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135742'
---
## 실행 파일(`svn:executable`)

Git 리포지토리에 추가하기 전에 파일 모드를 직접 업데이트하여 `svn:executable` 속성을 변환합니다.

## MIME 형식(`svn:mime-type`)

{% data variables.product.product_name %}는 파일의 mime-type 속성과 속성을 추가한 커밋을 내부적으로 추적합니다.

## 버전이 지정되지 않은 항목 무시(`svn:ignore`)

Subversion에서 파일 및 디렉터리가 무시되도록 설정한 경우 {% data variables.product.product_name %}에서 내부적으로 추적합니다. Subversion 클라이언트에서 무시되는 파일과 *.gitignore* 파일의 항목은 완전히 별개입니다.

## 현재 지원되지 않는 속성

{% data variables.product.product_name %}는 현재 사용자 지정 속성을 포함하여 `svn:externals`, `svn:global-ignores` 또는 위에 나열되지 않은 속성을 지원하지 않습니다.
