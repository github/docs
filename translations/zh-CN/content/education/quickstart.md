---
title: GitHub Educators 快速入门
intro: '大约 15 分钟后，教师就可以开始享受 {% data variables.product.company_short %} 的优惠、培训和工具，然后使用 {% data variables.product.prodname_classroom %} 在软件开发课程中为学生创建教室。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: 快速入门
---

## 简介

教授软件开发课程的教育工作者可以使用 {% data variables.product.prodname_education %} 的折扣、伙伴关系、培训和工具有效地向学生传授相关技能。

在本指南中，您将从 {% data variables.product.product_name %} 开始，通过 {% data variables.product.prodname_education %} 注册帐户和折扣服务，并在 {% data variables.product.prodname_classroom %} 上为您的课程和作业创建空间。

{% tip %}

**Tip**: If you're a student and you'd like to take advantage of an academic discount, see "[Apply to {% data variables.product.prodname_global_campus %} as a student](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)."

{% endtip %}

## 在 {% data variables.product.product_name %} 上创建帐户

首先，您需要在 {% data variables.product.product_name %} 上创建免费个人帐户。

{% data reusables.accounts.create-account %}
1. 按照提示创建免费个人帐户。

创建个人帐户后，创建一个免费的组织帐户。 您将使用此组织帐户创建和管理教室 {% data variables.product.prodname_classroom %}。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
{% data reusables.organizations.new-organization %}
4. 按照提示创建免费组织。

更多信息请参阅“[{% data variables.product.prodname_dotcom %} 帐户的类型](/github/getting-started-with-github/types-of-github-accounts)”。

## Applying for teacher benefits

Next, you'll sign up for teacher benefits and resources from {% data variables.product.company_short %} by applying to {% data variables.product.prodname_global_campus %}, a portal that allows you to access your education benefits all in one place.  {% data reusables.education.educator-requirements %}

{% tip %}

**提示** 除了个人折扣外，{% data variables.product.company_short %} 还通过 {% data variables.product.prodname_campus_program %} 与教育机构合作。 更多信息请参阅 [{% data variables.product.prodname_campus_program %}](https://education.github.com/schools) 网站。

{% endtip %}

{% data reusables.education.benefits-page %}
{% data reusables.education.click-get-teacher-benefits %}
{% data reusables.education.select-email-address %}
{% data reusables.education.upload-proof-status %}
{% data reusables.education.school-name %}
{% data reusables.education.plan-to-use-github %}
{% data reusables.education.submit-application %}

Once you are a verified {% data variables.product.prodname_global_campus %} educator, you can access {% data variables.product.prodname_global_campus %} anytime by going to the [{% data variables.product.prodname_education %} website](https://education.github.com).

## 设置 {% data variables.product.prodname_classroom %}

通过个人帐户和组织帐户便可开始使用 {% data variables.product.prodname_classroom %}。 {% data variables.product.prodname_classroom %} 免费使用。 您可以跟踪和管理作业，自动对工作进行评分，并为学生提供反馈。

{% data reusables.classroom.sign-into-github-classroom %}
1. 要授权 {% data variables.product.prodname_classroom %} 访问您在 {% data variables.product.prodname_dotcom %} 上的个人帐户，请查阅信息，然后单击**授权 {% data variables.product.prodname_classroom %}**。 ![个人帐户的"授权 {% data variables.product.prodname_classroom %}"按钮](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. 查看信息。 要授权 {% data variables.product.prodname_classroom %} 访问您在 {% data variables.product.prodname_dotcom %} 上的组织帐户，请单击 **Grant（授予）**。 ![组织的"授予"按钮](/assets/images/help/classroom/setup-click-grant.png)

  {% tip %}

  **提示**：如果您看到 **Request（请求）** 按钮而不是 **Grant（授予）**按钮，则表明您是组织的成员，而不是所有者。 所有者必须批准您的 {% data variables.product.prodname_classroom %} 请求。 您必须是组织所有者才能在 {% data variables.product.prodname_classroom %} 中创建和管理教室和作业。 更多信息请参阅“[授权 OAuth 应用程序](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations)”。

  {% endtip %}

1. 单击 **Authorize GitHub（授权 GitHub）**。 ![单击组织的"Authorize（授权）"按钮](/assets/images/help/classroom/setup-click-authorize-github.png)

## 创建教室

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. 单击 **Create your first classroom（创建第一个教室）**或 **New classroom（新教室）**。
{% data reusables.classroom.guide-create-new-classroom %}

## 后续步骤

您已经创建了教室，可以开始使用 {% data variables.product.product_name %} 和 {% data variables.product.prodname_classroom %} 丰富您的课程！  🎉

- 观看一些关于 {% data variables.product.prodname_classroom %} 的视频。 更多信息请参阅“[设置 {% data variables.product.prodname_classroom %} 的基本知识](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)”。
- 管理您的教室和教室管理员，并为您的教室创建学生名册。 更多信息请参阅“[管理教室](/education/manage-coursework-with-github-classroom/manage-classrooms)”。
- 使用 Git 和 {% data variables.product.company_short %} 起始作业，让学生全面了解 Git 和 {% data variables.product.product_name %} 基础知识。 更多信息请参阅“[使用 Git 和 {% data variables.product.company_short %} 起始作业](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)”。
- 为个别学生或团队创建作业。 {% data reusables.classroom.for-more-information-about-assignment-creation %}
- 编写并实施自动化测试，直接在作业仓库中为学生提供即时反馈。 更多信息请参阅“[使用自动分级](/education/manage-coursework-with-github-classroom/use-autograding)”。
- 参加 {% data variables.product.prodname_education_community_with_url %}。
