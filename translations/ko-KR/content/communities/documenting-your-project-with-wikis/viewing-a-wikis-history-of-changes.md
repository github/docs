---
title: 위키의 변경 기록 보기
intro: Wiki는 Git 리포지토리이므로 모든 변경은 볼 수 있는 커밋입니다.
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090314'
---
## 위키 기록 보기

Wiki 기록에는 다음이 포함됩니다.
- 변경을 수행한 사용자
- 제공한 커밋 메시지
- 변경이 이루어진 시기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. 위키 사이드바를 사용하여 기록을 보려는 페이지로 이동합니다.
4. wiki 맨 위에서 수정 링크를 클릭합니다.
   ![Wiki 수정 링크](/assets/images/help/wiki/wiki_revision_link.png)

## 이전 콘텐츠 보기

위키 기록 테이블에서 [SHA-1 해시](http://en.wikipedia.org/wiki/SHA-1)(맨 오른쪽에 있는 문자 및 숫자 시퀀스)를 클릭하여 특정 시점에 존재했던 대로 위키 페이지를 볼 수 있습니다.

![Wiki SHA 번호](/assets/images/help/wiki/wiki_sha_number.png)

## 두 개의 수정 버전 비교

1. 비교할 두 개의 행을 선택합니다.
2. 기록 테이블 맨 위에서 **수정 버전 비교** 를 클릭합니다.
   ![Wiki 수정 버전 비교 단추](/assets/images/help/wiki/wiki_compare_revisions.png)
3. 변경 내용의 차이에 추가, 제거 및 수정된 줄이 표시됩니다.

## 이전 변경 내용 되돌리기

wiki를 편집할 수 있는 권한이 있는 경우에만 변경 내용을 되돌릴 수 있습니다.

1. 되돌릴 행을 선택합니다.
2. 기록 테이블 맨 위에서 **수정 버전 비교** 를 클릭합니다.
   ![Wiki 수정 버전 비교 단추](/assets/images/help/wiki/wiki_compare_revisions.png)
3. 변경 내용의 차이에 추가, 제거 및 수정된 줄이 표시됩니다.
   ![Wiki 수정 버전 차이](/assets/images/help/wiki/wiki_revision_diff.png)
4. 최신 변경 내용을 되돌리려면 **변경 내용 되돌리기** 를 클릭합니다.
   ![Wiki 변경 내용 되돌리기 단추](/assets/images/help/wiki/wiki_revert_changes.png)
