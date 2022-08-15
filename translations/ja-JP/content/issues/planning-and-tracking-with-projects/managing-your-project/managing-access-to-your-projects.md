---
title: '{% data variables.projects.projects_v2 %}へのアクセスの管理'
shortTitle: '{% data variables.projects.project_v2 %}のアクセスの管理'
intro: '{% data variables.projects.project_v2 %}のTeam及び個人のアクセス管理の方法を学んでください。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---


## プロジェクトへのアクセスについて

Organizationレベルのプロジェクトの管理者は、Organization全体、Team、個々のOrganizationのメンバー、外部のコラボレータのアクセスを管理できます。

ユーザレベルのプロジェクトの管理者は、個々のコラボレータを招待し、そのアクセスを管理できます。

プロジェクトの管理者は、インターネット上のすべての人々に対するプロジェクトの可視性も制御できます。 詳しい情報については「[プロジェクトの可視性の管理](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)」を参照してください。

## Organizationレベルのプロジェクトのアクセス管理

### Organization内の全員に対するアクセス管理

デフォルトの基本ロールは`write`であり、これはOrganization内の誰もがプロジェクトを見て編集できるということです。 この基本ロールを変更すれば、Organizationの全員に対するプロジェクトのアクセスを変更できます。 基本ロールへの変更は、Organizationのオーナーではなく、個別にアクセス権を付与されていないOrganizaitonのメンバーにだけ影響します。

{% data reusables.projects.project-settings %}
1. **Manage access（アクセス管理）**をクリックしてください。 !["Manage access"アイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
2. **Base role（基本ロール）**の下で、デフォルトロールを選択してください。 ![ベースロールメニューを表示しているスクリーンショット](/assets/images/help/projects-v2/base-role.png)
   - **No access（アクセス無し）**: Organizationのオーナーと、個別にアクセス権を付与されたユーザだけがプロジェクトを見ることができます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **Read（読み取り）**: Organizationの全員がプロジェクトを見ることができます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **Write（書き込み）**: Organizationの全員がプロジェクトを見て編集できます。 Organizationのオーナーは、プロジェクトの管理者でもあります。
   - **Admin（管理）**: Organizationの全員がプロジェクトの管理者です。

### Team及びOrganizationの個々のメンバーのアクセス管理

Organizationレベルのプロジェクトには、Team、外部のコラボレータ、個々のOrganizationのメンバーをコラボレータとして追加することもできます。 詳細は「[Team について](/organizations/organizing-members-into-teams/about-teams)」を参照してください。

個人ユーザが既にOrganizationのメンバーになっているか、Organizationの少なくとも1つのリポジトリで外部のコラボレータになっている場合にのみ、Organizationレベルのプロジェクトに共同作業をするように招待できます。

{% data reusables.projects.project-settings %}
1. **Manage access（アクセス管理）**をクリックしてください。 !["Manage access"アイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
2. **Invite collaborators（コラボレータの招待）**の下で、招待したいTeamもしくは個人ユーザを検索してください。 ![コラボレータの検索を表示しているスクリーンショット](/assets/images/help/projects-v2/access-search.png)
3. コラボレータのロールを選択してください。 ![ロールの選択を表示しているスクリーンショット](/assets/images/help/projects-v2/access-role.png)
   - **Read（読み取り）**: Teamあるいは個人はプロジェクトを見ることができます。
   - **Write（書き込み）**: Teamあるいは個人はプロジェクトを編集できます。
   - **Admin（管理）**: Teamあるいは個人はプロジェクトを見て編集でき、新しいコラボレータを追加できます。
4. **Invite（招待）**をクリックしてください。 ![招待ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/access-invite.png)

### プロジェクトの既存のコラボレータのアクセス管理

{% data reusables.projects.project-settings %}
1. **Manage access（アクセス管理）**をクリックしてください。 !["Manage access"アイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
1. **Manage access（アクセス管理）**の下で、権限を変更したいコラボレータを見つけてください。

   **Type（タイプ）**及び**Role（ロール）**ドロップダウンメニューを使って、アクセスリストをフィルタリングできます。 ![コラボレータを表示しているスクリーンショット](/assets/images/help/projects-v2/access-find-member.png)

1. コラボレータのロールを編集してください。 ![コラボレータのロールの変更を表示しているスクリーンショット](/assets/images/help/projects-v2/access-change-role.png)
1. あるいは、**Remove（削除）** をクリックしてコラボレータを削除してください。 ![コラボレータの削除を表示しているスクリーンショット](/assets/images/help/projects-v2/access-remove-member.png)

## ユーザレベルプロジェクトのアクセス管理

### プロジェクトへのコラボレータのアクセスの付与

{% note %}

これはプロジェクトのコラボレータにのみ影響し、プロジェクトのリポジトリには影響しません。 プロジェクト上のアイテムを見るためには、ユーザはアイテムが属するリポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリのアイテムが含まれているなら、そのリポジトリのコラボレータではないユーザは、そのリポジトリのアイテムを見ることはできません。 詳しい情報については「[リポジトリの可視性の設定](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)」及び「[リポジトリにアクセスするTeams及びユーザの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)」を参照してください。

{% endnote %}

{% data reusables.projects.project-settings %}
1. **Manage access（アクセス管理）**をクリックしてください。 !["Manage access"アイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
2. **Invite collaborators（コラボレータの招待）**の下で、招待したいユーザを検索してください。 ![コラボレータの検索を表示しているスクリーンショット](/assets/images/help/projects-v2/access-search.png)
3. コラボレータのロールを選択してください。 ![ロールの選択を表示しているスクリーンショット](/assets/images/help/projects-v2/access-role.png)
   - **Read（読み取り）**: ユーザはプロジェクトを見ることができます。
   - **Write（書き込み）**: ユーザはプロジェクトを見て編集できます。
   - **Admin（管理）**: ユーザはプロジェクトを見て編集でき、新しいコラボレータを追加できます。
4. **Invite（招待）**をクリックしてください。 ![招待ボタンを表示しているスクリーンショット](/assets/images/help/projects-v2/access-invite.png)

### プロジェクトの既存のコラボレータのアクセス管理

{% data reusables.projects.project-settings %}
1. **Manage access（アクセス管理）**をクリックしてください。 !["Manage access"アイテムを表示しているスクリーンショット](/assets/images/help/projects-v2/manage-access.png)
1. **Manage access（アクセス管理）**の下で、権限を変更したいコラボレータを見つけてください。

   **Type（タイプ）**及び**Role（ロール）**ドロップダウンメニューを使って、アクセスリストをフィルタリングできます。 ![コラボレータを表示しているスクリーンショット](/assets/images/help/projects-v2/access-find-member.png)

1. コラボレータのロールを編集してください。 ![コラボレータのロールの変更を表示しているスクリーンショット](/assets/images/help/projects-v2/access-change-role.png)
1. あるいは、**Remove（削除）** をクリックしてコラボレータを削除してください。 ![コラボレータの削除を表示しているスクリーンショット](/assets/images/help/projects-v2/access-remove-member.png)
