---
title: プロジェクト（ベータ）の可視性の管理
intro: プロジェクトを見ることができるユーザを管理できます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## プロジェクトの可視性について

プロジェクト（ベータ）は、パブリックあるいはプライベートにできます。 パブリックプロジェクトでは、インターネット上の誰もがプロジェクトを見ることができます。 プライベートプロジェクトでは、最低でも読み取りアクセスを付与されたユーザだけがプロジェクトを見ることができます。

影響を受けるのはプロジェクトの可視性のみです。プロジェクト上のアイテムを見るには、アイテムが属する得リポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリからのアイテムが含まれている場合、そのリポジトリのコラボレータではないユーザは、そのリポジトリからのアイテムを見ることができません。

![非表示のアイテムを持つプロジェクト](/assets/images/help/projects/hidden-items.png)

プロジェクトの管理者だけが、プロジェクトの可視性を制御できます。

Organizationが所有するプライベートのプロジェクトでは、プロジェクトを現在更新しているユーザのアバターがプロジェクトのUIに表示されます。

プロジェクトの管理者は、プロジェクトに対する書き込み及び管理アクセスの管理と、個々のユーザの読み取りアクセスの制御もできます。 詳しい情報については「[プロジェクトのアクセス管理](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)」を参照してください。

## プロジェクトの可視性の変更

{% data reusables.projects.project-settings %}
1. **Visibility（可視性）**の下で、**Private（プライベート）**もしくは**Public（パブリック）**を選択してください。
