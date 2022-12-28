---
title: 리포지토리 보안 공지에 대한 권한 수준
intro: 리포지토리 보안 권고에서 수행할 수 있는 작업은 보안 권고에 대한 관리자 권한 또는 쓰기 권한이 있는지 여부에 따라 달라집니다.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
  - /code-security/repository-security-advisories/permission-levels-for-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
ms.openlocfilehash: f4195822de121780f1629fda3d646170d4c4e566
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114137'
---
이 문서는 리포지토리 수준 보안 공지에만 적용됩니다. 누구나 [github.com/advisories](https://github.com/advisories)의 {% data variables.product.prodname_advisory_database %}에서 전역 보안 공지에 기여할 수 있습니다. 전역 공지에 대한 편집은 리포지토리에 공지가 표시되는 방식을 변경하거나 이에 영향을 미치지 않습니다.  자세한 내용은 “[{% data variables.product.prodname_advisory_database %}에서 보안 공지 편집](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”을 참조하세요.

## 권한 개요

{% data reusables.repositories.security-advisory-admin-permissions %} 보안 공지에 협력자를 추가하는 방법에 대한 자세한 내용은 “[리포지토리 보안 공지에 협력자 추가](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”를 참조하세요.

작업 | 쓰기 권한 | 관리자 권한 |
------ | ----------------- | ----------------- |
보안 공지 초안 참조 | X | X |
보안 공지에 협력자 추가(“[리포지토리 보안 공지에 협력자 추가](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)” 참조) | | X |
보안 공지에서 주석 편집 및 삭제 | X | X |
보안 공지에 임시 프라이빗 포크 만들기(“[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)” 참조) | | X |
보안 공지의 임시 프라이빗 포크에 변경 내용 추가(“[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)” 참조) | X | X |
임시 프라이빗 포크에서 끌어오기 요청 만들기(“[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)” 참조) | X | X |
보안 공지에 변경 내용 병합(“[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)” 참조) | | X |
보안 공지에서 메타데이터 추가 및 편집(“[리포지토리 보안 공지 게시](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)” 참조) | X | X |
보안 공지에 기여 인정 추가 및 제거(“[리포지토리 보안 공지 사항 편집](/code-security/repository-security-advisories/editing-a-repository-security-advisory)” 참조) | X | X |
보안 공지 초안 닫기 | | X |
보안 공지 게시(“[리포지토리 보안 공지 게시](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)” 참조) | | X |

## 추가 참고 자료

- “[리포지토리 보안 공지에 협력자 추가](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”
- “[리포지토리 보안 취약성을 해결하기 위해 임시 프라이빗 포크에서 협업](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”
- “[리포지토리 보안 공지에서 협력자 제거](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)”
- “[리포지토리 보안 공지 철회](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)”
