---
title: GitHub Educatorsのクイックスタート
intro: 'およそ15分で、教師は割引を適用して{% data variables.product.company_short %}に取りかかり、トレーニングを受け、ツールを獲得し、{% data variables.product.prodname_classroom %}を使用してソフトウェア開発のコースで学生用のクラスルームを作成できます。'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
---

### はじめに

ソフトウェア開発コースで教える教育者は、{% data variables.product.prodname_education %}からの割引、パートナーシップ、トレーニング、およびツールを活用して、重要なスキルを学生に対して効果的に教えることができます。

このガイドでは、{% data variables.product.product_name %}を使い始めて、アカウントと{% data variables.product.prodname_education %}を通じた割引にサインアップし、{% data variables.product.prodname_classroom %}.でコースと課題のためのスペースを作成します。

{% tip %}

**ヒント**: アカデミック割引を利用したい学生の方は、「 [学生向け開発者パックに応募する](/github/teaching-and-learning-with-github-education/applying-for-a-student-developer-pack)」を参照してください。

{% endtip %}

### {% data variables.product.product_name %}でアカウントを作成する

まず、{% data variables.product.product_name %}で無料ユーザアカウントを作成する必要があります。

{% data reusables.accounts.create-account %}
1. プロンプトに従って、無料ユーザアカウントを作成します。

ユーザアカウントを作成した後は、無料Organizationアカウントを作成します。 {% data variables.product.prodname_classroom %}でクラスルームを作成および管理するには、Organizationアカウントを使用します。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. プロンプトに従って無料Organizationを作成します。

詳しい情報については、「[{% data variables.product.prodname_dotcom %}アカウントの種類](/github/getting-started-with-github/types-of-github-accounts)」を参照してください。"

### 教育者割引に応募する

次に、{% data variables.product.company_short %}からの割引およびサービスにサインアップします。 {% data reusables.education.educator-requirements %}

{% tip %}

**ヒント** 個別の割引の他に、{% data variables.product.company_short %}では{% data variables.product.prodname_campus_program %}を通じて教育機関との提携も行っています。 詳しい情報については、 [{% data variables.product.prodname_campus_program %}](https://education.github.com/schools)のウェブサイトを参照してください。

{% endtip %}

{% data reusables.education.benefits-page %}
{% data reusables.education.click-get-teacher-benefits %}
{% data reusables.education.select-email-address %}
{% data reusables.education.upload-proof-status %}
{% data reusables.education.school-name %}
{% data reusables.education.plan-to-use-github %}
{% data reusables.education.submit-application %}

### {% data variables.product.prodname_classroom %}をセットアップする

ユーザアカウントとOrganizationアカウントがあれば、{% data variables.product.prodname_classroom %}に取りかかる準備が整っています。 {% data variables.product.prodname_classroom %}の使用は無料です。 課題の追跡および管理、課題の自動採点、および学生へのフィードバックを行うことができます。

{% data reusables.classroom.sign-into-github-classroom %}
1. {% data variables.product.prodname_classroom %}を認可して{% data variables.product.prodname_dotcom %}のユーザアカウントにアクセスするには、表示されている情報を確認してから、[**Authorize {% data variables.product.prodname_classroom %}**] をクリックします。 ![ユーザアカウント用の [Authorize {% data variables.product.prodname_classroom %}] ボタン](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. 情報を確認します。 {% data variables.product.prodname_classroom %}を認可して{% data variables.product.prodname_dotcom %}のOrganizationアカウントにアクセスするには、[**Allow**] をクリックします。 ![Organization用の [Grant] ボタン](/assets/images/help/classroom/setup-click-grant.png)

  {% tip %}

  **ヒント**: [**Grant**] ボタンではなく [**Request**] ボタンが表示されている場合、あなたはOrganizationのメンバーであり、オーナーではありません。 オーナーは、あなたの{% data variables.product.prodname_classroom %}へのリクエストを承認する必要があります。 {% data variables.product.prodname_classroom %}でクラスルームや課題を作成および管理するには、Organizationのオーナーである必要があります。 詳しい情報については、「[OAuth App を認証する](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations)」を参照してください。

  {% endtip %}

1. [**Authorize github**] をクリックします。 ![Organization用の [Authorize] ボタン](/assets/images/help/classroom/setup-click-authorize-github.png)

### クラスルームを作成する

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. [**Create your first classroom**] または [**New classroom**] をクリックします。
{% data reusables.classroom.guide-create-new-classroom %}

### 次のステップ

クラスルームが作成できました。これで{% data variables.product.product_name %}と{% data variables.product.prodname_classroom %}を使ってコースを充実させる準備が整いました！  🎉

- {% data variables.product.prodname_classroom %}についてのビデオを見てみましょう。 詳しい情報については、「[{% data variables.product.prodname_classroom %}のセットアップの基本](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)」を参照してください。
- クラスルームおよびクラスルームの管理者を管理し、クラスルームの学生名簿を作成しましょう。 詳しい情報については、「[クラスルームの管理](/education/manage-coursework-with-github-classroom/manage-classrooms)」を参照してください。
- Use the Git and {% data variables.product.company_short %} starter assignment to give students an overview of Git and {% data variables.product.product_name %} fundamentals. For more information, see "[Use the Git and {% data variables.product.company_short %} starter assignment](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)."
- 個々の学生またはチームの課題を作成しましょう。 {% data reusables.classroom.for-more-information-about-assignment-creation %}
- 課題リポジトリで直接、学生へのフィードバックをすみやかに行うため、自動テストを作成して実装しましょう。 詳しい情報については「[自動採点の利用](/education/manage-coursework-with-github-classroom/use-autograding)」を参照してください。
- {% data variables.product.prodname_education_community_with_url %}に参加しましょう。
