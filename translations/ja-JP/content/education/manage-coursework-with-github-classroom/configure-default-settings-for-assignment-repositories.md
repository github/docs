---
title: 課題リポジトリのデフォルト設定の構成
shortTitle: 課題リポジトリのデフォルトの構成
intro: Probot Settings アプリケーションを使って、{% data variables.product.prodname_classroom %}で課題用に作成したリポジトリのデフォルト設定を構成できます。
permissions: Organizationのオーナーは、Organizationに対し{% data variables.product.prodname_github_app %}をインストールすることで、課題リポジトリのデフォルト設定を構成できます。
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/probot-settings
---

### 課題リポジトリのデフォルトの構成について

{% data variables.product.prodname_classroom %}は、課題を受ける各学生またはチームに属するリポジトリを作成します。 このリポジトリは、{% data variables.product.prodname_classroom %}で使用するOrganizationに属します。 課題リポジトリは空か、テンプレートリポジトリを使用できます。 詳しい情報については、「[テンプレートリポジトリからの課題の作成](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)」を参照してください。

{% data reusables.classroom.you-may-want-to-predefine-repository-settings %}

Probot Settingsアプリケーションを使用すると、リポジトリの設定リストが含まれる、_.github/settings.yml_という名前のファイルをリポジトリ内に作成でき、その後、その設定をリポジトリに対して自動的に設定した{% data variables.product.prodname_github_app %}をOrganization用にインストールできます。

{% data variables.product.prodname_classroom %}で課題に使用するテンプレートリポジトリには、_.github/settings.yml_を含めることができます。 個人またはチームが課題を受け入れると、{% data variables.product.prodname_classroom %}は課題リポジトリを作成し、Settingsアプリケーションは_.github/settings.yml_から自動的に設定を適用します。

Probotは、{% data variables.product.product_name %}を自動化するための、プロジェクト、フレームワーク、および無料アプリケーションを集めたものです。 Probotアプリケーションは、新しいコミット、コメント、およびIssueの作成といったリポジトリのイベントをリッスンし、そのイベントに自動的に応答できます。

詳しい情報については、[Probotのウェブサイト](https://probot.github.io)および[「Settings」アプリケーションのウェブサイト](https://probot.github.io/apps/settings/)を参照してください。 {% data variables.product.prodname_github_apps %}の詳細については、「[アプリケーションについて](/developers/apps/about-apps)」を参照してください。

### SettingsアプリケーションをOrganizationに追加する

Probot SettingsアプリケーションをOrganizationに対してインストールした後、アプリケーションは_.github/settings.yml_ で定義した設定を、{% data variables.product.prodname_classroom %}が作成した新しい課題を含めてOrganizationのあらゆるリポジトリに適用します。

1. [アプリケーションの設定](https://github.com/apps/settings)ページに移動します。
1. [**Install**]をクリックし、{% data variables.product.prodname_classroom %}で使うOrganizationをクリックします。 Organizationが所有するすべてのリポジトリに対し、アプリケーションに完全なアクセスを与えてください。 ![Probot Settingsアプリケーションをインストールする](/assets/images/help/classroom/probot-settings.gif)

### 課題リポジトリのデフォルト設定を構成する

1. _.github/settings.yml_ファイルを含むテンプレートリポジトリを作成します。 設定の完全なリストについては、`probot/settings`リポジトリの[README](https://github.com/probot/settings#github-settings)を参照してください。 {% data variables.product.prodname_classroom %}の、スターターコードにテンプレートリポジトリを用いることに関する詳細については、「[テンプレートリポジトリから課題を作成する](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)」を参照してください。

    {% warning %}

    **警告:** テンプレートリポジトリ用の_.github/settings.yml_ファイルでは、`collaborators`を定義しないでください。 {% data variables.product.prodname_classroom %}は、教師およびティーチングアシスタントに、課題リポジトリへのアクセス権を自動的に付与します。

    {% endwarning %}

1. スターターコードとして_.github/settings.yml_を含んだテンプレートリポジトリを使用し、課題を作成します。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

OrganizationのProbot Settingsアプリケーションは、{% data reusables.classroom.you-may-want-to-predefine-repository-settings %}が学生またはチーム用に作成したすべての課題リポジトリに対し、テンプレートリポジトリの_.github/settings.yml_で定義した設定を適用します。

### 参考リンク

- [Probotアプリケーション](https://probot.github.io/apps/)
- [Probotドキュメント](https://probot.github.io/docs/)
