---
title: '{% data variables.product.prodname_project_v1_caps %} permissions for an organization'
intro: 'Organization owners and people with {% data variables.projects.projects_v1_board %} admin permissions can customize who has read, write, and admin permissions to your organization’s {% data variables.projects.projects_v1_boards %}.'
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

There are three levels of permissions to a {% data variables.projects.projects_v1_board %} for people and teams:

{% data reusables.project-management.project-board-permissions %}

Organization owners and people with admin permissions can give a person access to an organization {% data variables.projects.projects_v1_board %} individually, as an outside collaborator or organization member, or through their membership in a team or organization. 外部コラボレーターとは、Organization のメンバーではないが、Organization でコラボレーションの権限を付与されたユーザーのことです。

Organization owners and people with admin permissions to a {% data variables.projects.projects_v1_board %} can also:
- すべての Organization メンバーに対して、デフォルトのプロジェクトボード権限を設定する。
- Organization メンバー、Team、外部コラボレーターについてプロジェクトボードへのアクセスを管理する。 For more information, see "[Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)", "[Managing an individual’s access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)", or "[Managing access to a {% data variables.product.prodname_project_v1 %} for organization members](/articles/managing-access-to-a-project-board-for-organization-members)."
- プロジェクトボードの可視性を管理する。 For more information, see "[Managing access to a {% data variables.product.prodname_project_v1 %} for organization members](/articles/managing-access-to-a-project-board-for-organization-members)."

## Cascading permissions for {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

For example, if an organization owner has given all organization members read permissions to a {% data variables.projects.projects_v1_board %}, and a {% data variables.projects.projects_v1_board %} admin gives an organization member write permissions to that board as an individual collaborator, that person would have write permissions to the {% data variables.projects.projects_v1_board %}.

## {% data variables.projects.projects_v1_board_caps %} visibility

{% data reusables.project-management.project-board-visibility %} You can change the {% data variables.projects.projects_v1_board %}'s visibility from private to {% ifversion ghae %}internal{% else %}public{% endif %} and back again. For more information, see "[Changing {% data variables.product.prodname_project_v1 %} visibility](/articles/changing-project-board-visibility)."

## 参考リンク

- "[Changing {% data variables.product.prodname_project_v1 %} visibility](/articles/changing-project-board-visibility)"
- "[Managing an individual’s access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)"
- "[Managing access to a {% data variables.product.prodname_project_v1 %} for organization members](/articles/managing-access-to-a-project-board-for-organization-members)"
