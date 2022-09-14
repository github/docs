---
title: Organization 内のリポジトリのディスカッション作成を管理する
intro: Organization が所有するリポジトリで、メンバーがディスカッションを作成するために必要な権限レベルを選択できます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-discussion-creation-for-repositories-in-your-organization
permissions: Organization owners can manage discussion creation for repositories owned by the organization.
versions:
  feature: discussions
topics:
  - Organizations
  - Teams
shortTitle: Manage repository discussions
ms.openlocfilehash: 0fba2cb5ad49411d8027cef61202cabe9d37d2b3
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878951'
---
## 読み取りアクセス権を持つユーザがディスカッションを作成することを許可または禁止する

デフォルト設定では、リポジトリ管理者または Organization のオーナーが Organization が所有するリポジトリのディスカッションを有効にすると、読み取りアクセス権を持つ Organization のメンバーがディスカッションを作成できます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [Repository discussions]\(リポジトリ ディスカッション\) で、 **[Allow users with read access to create discussions]\(読み取りアクセス権を持つユーザーにディスカッションの作成を許可する\)** を選択または選択解除します。
  ![読み取りアクセス権を持つユーザーがディスカッションを作成できるようにするチェックボックス](/assets/images/help/discussions/toggle-allow-users-with-read-access-checkbox.png)
6. **[保存]** をクリックします。
  ![ディスカッションの設定の [保存] ボタン](/assets/images/help/discussions/click-save.png)

## 参考資料

- 「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」
- 「[コミュニティのディスカッションを管理する](/discussions/managing-discussions-for-your-community)」
- [Organization の GitHub ディスカッションを有効または無効にする](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)
