---
title: Organization のプロジェクトボード権限
intro: 'Organization のオーナーと、プロジェクトボード管理者権限を持つユーザーは、Organization のプロジェクトボードに対する読み取り、書き込み、管理の各権限を誰が持つかをカスタマイズすることができます。'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### 権限の概要

ユーザーと Team のプロジェクトボードに対する権限には、次の 3 つのレベルがあります:

{% data reusables.project-management.project-board-permissions %}

Organization のオーナーと、管理者権限を持つユーザーは、外部コラボレーターまたは Organization メンバーとして、または Team や Organization のメンバーシップを通じて、Organization のプロジェクトボードに対するユーザーのアクセス権を個々に付与することができます。 外部コラボレーターとは、Organization のメンバーではないが、Organization でコラボレーションの権限を付与されたユーザーのことです。

Organization のオーナーと、プロジェクトボードに対する管理者権限を持つユーザーは、次の操作を実行できます:
- すべての Organization メンバーに対して、デフォルトのプロジェクトボード権限を設定する。
- Organization メンバー、Team、外部コラボレーターについてプロジェクトボードへのアクセスを管理する。 詳細は「[Organization のプロジェクトボードに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-project-board)」、「[Organization のプロジェクトボードに対する個々のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-project-board)」、「[Organization メンバーのプロジェクトボードへのアクセスを管理する](/articles/managing-access-to-a-project-board-for-organization-members)」を参照してください。
- プロジェクトボードの可視性を管理する。 詳細は「[Organization メンバーのプロジェクトボードへのアクセスを管理する](/articles/managing-access-to-a-project-board-for-organization-members)」を参照してください。

### プロジェクトボードに対するカスケード権限

{% data reusables.project-management.cascading-permissions %}

たとえば、Organization のオーナーが、あるプロジェクトボードに対する読み取り権限を Organization のすべてのメンバーに付与しており、プロジェクトボードの管理者が個別のコラボレーターとして、同じボードに対する書き込み権限を Organization のメンバーに付与している場合、そのユーザーはそのプロジェクトボードに対する書き込み権限を持つことになります。

### プロジェクトボードの可視性

{% data reusables.project-management.project-board-visibility %} You can change the project board's visibility from private to {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and back again. 詳細は「[プロジェクトボードの可視性を変更する](/articles/changing-project-board-visibility)」を参照してください。

### 参考リンク

- 「[プロジェクトボードの可視性を変更する](/articles/changing-project-board-visibility)」
- 「[Organization のプロジェクトボードに対する個々のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-project-board)」
- 「[Organization のプロジェクトボードに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-project-board)」
- [Organization メンバーのプロジェクトボードへのアクセスを管理する](/articles/managing-access-to-a-project-board-for-organization-members)
