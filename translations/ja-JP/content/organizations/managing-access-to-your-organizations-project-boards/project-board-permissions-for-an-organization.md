---
title: 'Organizationの{% data variables.product.prodname_project_v1_caps %}の権限'
intro: 'Organizationのオーナーと{% data variables.projects.projects_v1_board %}の管理権限を持つユーザは、Organizationの{% data variables.projects.projects_v1_boards %}への読み取り、書き込み、管理権限を持つ人ををカスタマイズできます。'
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
shortTitle: '{% data variables.product.prodname_project_v1_caps %} の権限'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

## 権限の概要

人とTeamに対しては、{% data variables.projects.projects_v1_board %}に3つのレベルの権限があります。

{% data reusables.project-management.project-board-permissions %}

Organization のオーナーと、管理者権限を持つユーザーは、外部コラボレーターまたは Organization メンバーとして、またはTeamやOrganizationのメンバーシップを通じて、Organizationの{% data variables.projects.projects_v1_board %}に対するユーザーのアクセス権を個々に付与することができます。 外部コラボレーターとは、Organization のメンバーではないが、Organization でコラボレーションの権限を付与されたユーザーのことです。

Organizationのオーナーと{% data variables.projects.projects_v1_board %}の管理権限を持つユーザは、以下のこともできます。
- すべての Organization メンバーに対して、デフォルトのプロジェクトボード権限を設定する。
- Organization メンバー、Team、外部コラボレーターについてプロジェクトボードへのアクセスを管理する。 詳しい情報については「[Organizationの{% data variables.product.prodname_project_v1 %}へのTeamアクセスの管理](/articles/managing-team-access-to-an-organization-project-board)」、「[Organizationの{% data variables.product.prodname_project_v1 %}への個人のアクセス管理](/articles/managing-an-individual-s-access-to-an-organization-project-board)」、「[Organizationのメンバーの{% data variables.product.prodname_project_v1 %}へのアクセス管理](/articles/managing-access-to-a-project-board-for-organization-members)」を参照してください。
- プロジェクトボードの可視性を管理する。 詳しい情報については「[Organizationのメンバーの{% data variables.product.prodname_project_v1 %}へのアクセス管理](/articles/managing-access-to-a-project-board-for-organization-members)」を参照してください。

## {% data variables.projects.projects_v1_boards %}のカスケード権限

{% data reusables.project-management.cascading-permissions %}

たとえば、Organization のオーナーが、ある{% data variables.projects.projects_v1_board %}に対する読み取り権限をOrganizationのすべてのメンバーに付与しており、{% data variables.projects.projects_v1_board %}の管理者が同じボードに対する書き込み権限をOrganization のメンバーに個別のコラボレーターとして付与している場合、そのユーザーはその{% data variables.projects.projects_v1_board %}に対する書き込み権限を持つことになります。

## {% data variables.projects.projects_v1_board_caps %}の可視性

{% data reusables.project-management.project-board-visibility %}{% data variables.projects.projects_v1_board %}の可視性をプライベートから{% ifversion ghae %}インターナル{% else %}パブリック{% endif %}に変更したり、元に戻したりすることができます。 詳しい情報については「[{% data variables.product.prodname_project_v1 %}の可視性の変更](/articles/changing-project-board-visibility)」を参照してください。

## 参考リンク

- 「[{% data variables.product.prodname_project_v1 %}の可視性の変更](/articles/changing-project-board-visibility)」
- 「[Organizationの{% data variables.product.prodname_project_v1 %}への個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-project-board)」
- 「[Organizationの{% data variables.product.prodname_project_v1 %}へのTeamのアクセスの管理](/articles/managing-team-access-to-an-organization-project-board)」
- 「[Organizationのメンバーに対する{% data variables.product.prodname_project_v1 %}へのアクセス管理](/articles/managing-access-to-a-project-board-for-organization-members)」
