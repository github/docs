---
title: 'Organization の {% data variables.product.prodname_project_v1_caps %} へのアクセス許可'
intro: 'Organization オーナーと、{% data variables.projects.projects_v1_board %} の管理者アクセス許可を持つユーザーは、Organization の {% data variables.projects.projects_v1_boards %} への読み取り、書き込み、管理アクセス許可を持つユーザーをカスタマイズできます。'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614208'
---
{% data reusables.projects.project_boards_old %}

## アクセス許可の概要

ユーザーおよび Team の {% data variables.projects.projects_v1_board %} に対するアクセス許可には、次の 3 つのレベルがあります。

{% data reusables.project-management.project-board-permissions %}

Organization オーナーと、管理者アクセス許可を持つユーザーは、外部コラボレーターまたは Organization メンバーとして、または Team や Organization のメンバーシップを通じて、Organization の {% data variables.projects.projects_v1_board %} に対するアクセス権をユーザーに個別に付与できます。 外部コラボレーターとは、Organization のメンバーではないが、Organization でコラボレーションの権限を付与されたユーザーのことです。

Organization オーナーと、{% data variables.projects.projects_v1_board %} への管理者アクセス許可を持つユーザーは、次の操作を行うこともできます。
- すべての Organization メンバーに対して、デフォルトのプロジェクトボード権限を設定する。
- Organization メンバー、Team、外部コラボレーターについてプロジェクトボードへのアクセスを管理する。 詳しい情報については、「[Organization の {% data variables.product.prodname_project_v1 %} へのアクセスを管理する](/articles/managing-team-access-to-an-organization-project-board)」、「[Organization の {% data variables.product.prodname_project_v1 %} への個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-project-board)」、または「[Organization メンバーの {% data variables.product.prodname_project_v1 %} へのアクセスを管理する](/articles/managing-access-to-a-project-board-for-organization-members)」を参照してください。
- プロジェクトボードの可視性を管理する。 詳しい情報については、「[Organization メンバーの {% data variables.product.prodname_project_v1 %} へのアクセスを管理する](/articles/managing-access-to-a-project-board-for-organization-members)」を参照してください。

## {% data variables.projects.projects_v1_boards %} のアクセス許可のカスケード

{% data reusables.project-management.cascading-permissions %}

たとえば、Organization オーナーが {% data variables.projects.projects_v1_board %} への読み取りアクセス許可をすべての Organization メンバーに付与しており、{% data variables.projects.projects_v1_board %} 管理者が個別のコラボレーターとしてそのボードへの書き込みアクセス許可を Organization メンバーに付与した場合、そのメンバーは、{% data variables.projects.projects_v1_board %} への書き込みアクセス許可を持つことになります。

## {% data variables.projects.projects_v1_board_caps %} の可視性

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} {% data variables.projects.projects_v1_board %} の可視性をプライベートから{% ifversion ghae %}内部{% else %}パブリック{% endif %}に変更したり、元に戻したりすることができます。 詳しい情報については、「[{% data variables.product.prodname_project_v1 %} の可視性の変更](/articles/changing-project-board-visibility)」を参照してください。

## 参考資料

- 「[{% data variables.product.prodname_project_v1 %} の可視性の変更](/articles/changing-project-board-visibility)」
- 「[Organization の {% data variables.product.prodname_project_v1 %} への個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-project-board)」
- 「[Organization の {% data variables.product.prodname_project_v1 %} への Team のアクセスを管理する](/articles/managing-team-access-to-an-organization-project-board)」
- 「[Organization メンバーの {% data variables.product.prodname_project_v1 %} へのアクセスを管理する](/articles/managing-access-to-a-project-board-for-organization-members)」
