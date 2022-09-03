---
title: 将学习管理系统连接到 GitHub Classroom
intro: '您可以配置 LTI 兼容的学习管理系统 (LMS) 连接到 {% data variables.product.prodname_classroom %}，以便导入用于课堂的名册。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
  - /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: 连接 LMS
---

## 关于 LMS 的配置

您可以将学习管理系统 (LMS) 连接到 {% data variables.product.prodname_classroom %}，然后 {% data variables.product.prodname_classroom %} 可以从 LMS 导入学生标识符名册。 若要将 LMS 连接到 {% data variables.product.prodname_classroom %}，必须在 LMS 中输入 {% data variables.product.prodname_classroom %} 的配置凭据。

## 基本要求

要配置 LMS 连接到 {% data variables.product.prodname_classroom %}，您必须先创建一个教室。 更多信息请参阅“[管理教室](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)”。

## 支持的 LMSes

{% note %}

**Note:** {% data variables.product.prodname_classroom %} previously supported import of roster data from LMSes that implement Learning Tools Interoperability (LTI) versions 1.0 and 1.1. On June 30, 2022, the Instructional Management System (IMS) Global Learning Consortium [ended support for LTI versions 1.0 and 1.1](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). In the interest of keeping sensitive student information safe and secure, {% data variables.product.company_short %} has temporarily disabled importing roster data from LTI-compliant LMSes.<br><br>

Support for the latest version of Learning Tools Interoperability, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), is currently being worked on and will be made available in {% data variables.product.prodname_classroom %} very soon.

{% endnote %}

LTI 是一个行业标准协议，GitHub Classroom 对 LTI 的使用得到了教学管理系统 (IMS) 全球学习联盟的认证。 更多信息请参阅[学习工具互操作性](https://www.imsglobal.org/activity/learning-tools-interoperability)和 IMS 全球学习联盟网站上的[关于 IMS 全球学习联盟](http://www.imsglobal.org/aboutims.html)。

{% data variables.product.company_short %} 测试了名册数据从以下 LMS 到 {% data variables.product.prodname_classroom %} 的导入。

- Google Classroom


## Connecting to Google Classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. 如果您的教室已有名册，您可以更新名册或删除名册并创建新的名册。
    - 有关删除和创建名册的更多信息，请参阅“[删除教室名册](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)”和“[创建教室名册](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)”。
    - 有关更新名册的更多信息，请参阅“[将学生添加到教室的名册](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)”。
1. In the list of LMSes, click Google Classroom. ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Sign in to Google, then select the Classroom to link to.


## Connecting to Canvas, Moodle, Sakai, and other LMSes

Connecting to other LMSes is temporarily unavailable as {% data variables.product.company_short %} updates to Learning Tools Interoperability (LTI) version 1.3. For more information, see "[Supported LMSes](#supported-lmses)."

In the meantime, you may manually input your roster for your class. For more information about manually importing the roster from your LMS into {% data variables.product.prodname_classroom %}, see "[Manage classrooms](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."

## 断开 LMS 连接

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. 在“Connect to a learning management system (LMS)（连接到学习管理系统 [LMS]）”下，单击 **Connection Settings（连接设置）**。 ![教室设置中的"连接设置"链接](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. 在“Delete Connection to your learning management system（删除与学习管理系统的连接）”下，单击 **Disconnect from your learning management system（断开与学习管理系统的连接）**。 ![教室连接设置中的"从学习管理系统断开连接"按钮](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
