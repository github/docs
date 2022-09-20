---
title: GitHub Educatorsのクイックスタート
intro: 'およそ15分で、教師は割引を適用して{% data variables.product.company_short %}に取りかかり、トレーニングを受け、ツールを獲得し、{% data variables.product.prodname_classroom %}を使用してソフトウェア開発のコースで学生用のクラスルームを作成できます。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: Quickstart
ms.openlocfilehash: 8ab34de6a7e2583fc2447fc01729ced7044b3fa7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573885'
---
## はじめに

ソフトウェア開発コースで教える教育者は、{% data variables.product.prodname_education %}からの割引、パートナーシップ、トレーニング、およびツールを活用して、重要なスキルを学生に対して効果的に教えることができます。

このガイドでは、{% data variables.product.product_name %}を使い始めて、アカウントと{% data variables.product.prodname_education %}を通じた割引にサインアップし、{% data variables.product.prodname_classroom %}.でコースと課題のためのスペースを作成します。

{% tip %}

**ヒント**: 学生割引を利用したい学生の皆さんは、「[学生として {% data variables.product.prodname_global_campus %} に応募する](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)」を参照してください。

{% endtip %}

## {% data variables.product.product_name %}でアカウントを作成する

まず、{% data variables.product.product_name %} で無料個人アカウントを作成する必要があります。

{% data reusables.accounts.create-account %}
1. プロンプトに従って、無料個人アカウントを作成します。

個人アカウントを作成した後は、無料 Organization アカウントを作成します。 {% data variables.product.prodname_classroom %}でクラスルームを作成および管理するには、Organizationアカウントを使用します。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. プロンプトに従って無料Organizationを作成します。

詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/github/getting-started-with-github/types-of-github-accounts)」を参照してください。

## 教員特典への申し込み

次に、{% data variables.product.company_short %} の教師特典とリソースに登録するには、教育特典をすべて 1 か所に集めたポータルである {% data variables.product.prodname_global_campus %} に応募します。  {% data reusables.education.educator-requirements %}

{% tip %}

**ヒント** 個別の割引の他に、{% data variables.product.company_short %} では {% data variables.product.prodname_campus_program %} を通じて教育機関との提携も行っています。 詳しくは、[{% data variables.product.prodname_campus_program %}](https://education.github.com/schools) の Web サイトをご覧ください。

{% endtip %}

{% data reusables.education.benefits-page %} {% data reusables.education.click-get-teacher-benefits %} {% data reusables.education.select-email-address %} {% data reusables.education.upload-proof-status %} {% data reusables.education.school-name %} {% data reusables.education.plan-to-use-github %} {% data reusables.education.submit-application %}

認証済み {% data variables.product.prodname_global_campus %} 教育者になると、[{% data variables.product.prodname_education %} website](https://education.github.com) にアクセスすることで、いつでも {% data variables.product.prodname_global_campus %} を利用できます。

## {% data variables.product.prodname_classroom %}をセットアップする

個人アカウントと Organization アカウントがあれば、{% data variables.product.prodname_classroom %} を始めることができます。 {% data variables.product.prodname_classroom %}の使用は無料です。 課題の追跡および管理、課題の自動採点、および学生へのフィードバックを行うことができます。

{% data reusables.classroom.sign-into-github-classroom %}
1. {% data variables.product.prodname_classroom %} を認可して {% data variables.product.prodname_dotcom %} で個人アカウントにアクセスするには、情報を確認してから、 **[{% data variables.product.prodname_classroom %} を承認する]** をクリックします。
  ![個人アカウント用の [{% data variables.product.prodname_classroom %} を承認する] ボタン](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. 情報を確認します。 {% data variables.product.prodname_classroom %} を承認して {% data variables.product.prodname_dotcom %} で Organization アカウントにアクセスするには、 **[Grant]\(許可する\)** をクリックします。
  ![Organization の [Grant]\(許可する\) ボタン](/assets/images/help/classroom/setup-click-grant.png)
  
  {% tip %}
  
  **ヒント**: **[Grant]\(許可する\)** ボタンではなく **[Request]\(要求する\)** ボタンが表示される場合、ユーザーは Organization の所有者ではなくメンバーです。 オーナーは、あなたの{% data variables.product.prodname_classroom %}へのリクエストを承認する必要があります。 {% data variables.product.prodname_classroom %}でクラスルームや課題を作成および管理するには、Organizationのオーナーである必要があります。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations)」を参照してください。
  
  {% endtip %}
  
1. **[Authorize github]\(GitHub の承認\)** をクリックします。
  ![Organization の [Authorize]\(承認\) ボタンをクリックします](/assets/images/help/classroom/setup-click-authorize-github.png)

## クラスルームを作成する

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. **[Create your first classroom]\(初めてのクラスルームの作成\)** または **[New classroom]\(新しいクラスルーム\)** をクリックします。
{% data reusables.classroom.guide-create-new-classroom %}

## 次の手順

クラスルームが作成できました。これで{% data variables.product.product_name %}と{% data variables.product.prodname_classroom %}を使ってコースを充実させる準備が整いました！  🎉

- {% data variables.product.prodname_classroom %}についてのビデオを見てみましょう。 詳しくは、「[{% data variables.product.prodname_classroom %} のセットアップの基本](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)」をご覧ください。
- クラスルームおよびクラスルームの管理者を管理し、クラスルームの学生名簿を作成しましょう。 詳細については、「[Classroom の管理](/education/manage-coursework-with-github-classroom/manage-classrooms)」を参照してください。
- Git と {% data variables.product.company_short %} の初心者用課題を使用して、Git と {% data variables.product.product_name %} の基礎の概要を学生に提供します。 詳しくは、「[Git と {% data variables.product.company_short %} の初心者用課題を使用する](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)」をご覧ください。
- 個々の学生またはチームの課題を作成しましょう。 {% data reusables.classroom.for-more-information-about-assignment-creation %}
- 課題リポジトリで直接、学生へのフィードバックをすみやかに行うため、自動テストを作成して実装しましょう。 詳しくは、「[自動採点を使用する](/education/manage-coursework-with-github-classroom/use-autograding)」をご覧ください。
- {% data variables.product.prodname_education_community_with_url %}に参加しましょう。
