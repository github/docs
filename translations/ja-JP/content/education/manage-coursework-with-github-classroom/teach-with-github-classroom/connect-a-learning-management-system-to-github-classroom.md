---
title: 学習管理システムをGitHub Classroomに接続する
intro: 'LTI準拠の学習管理システム (LMS) を{% data variables.product.prodname_classroom %}に接続するよう設定することで、クラスルームの名簿をインポートできます。'
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
shortTitle: Connect an LMS
---

## LMSの設定について

学習管理システム (LMS) を{% data variables.product.prodname_classroom %}に接続でき、{% data variables.product.prodname_classroom %}はLMSから学生の名簿をインポートできます。 LMSを{% data variables.product.prodname_classroom %}に接続するには、LMSで{% data variables.product.prodname_classroom %}の構成認証情報を入力する必要があります。

## 必要な環境

LMSを{% data variables.product.prodname_classroom %}に接続するよう構成するには、まずクラスルームを作成する必要があります。 詳しい情報については、「[クラスルームの管理](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)」を参照してください。

## サポートするLMS

{% note %}

**Note:** {% data variables.product.prodname_classroom %} previously supported import of roster data from LMSes that implement Learning Tools Interoperability (LTI) versions 1.0 and 1.1. On June 30, 2022, the Instructional Management System (IMS) Global Learning Consortium [ended support for LTI versions 1.0 and 1.1](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). In the interest of keeping sensitive student information safe and secure, {% data variables.product.company_short %} has temporarily disabled importing roster data from LTI-compliant LMSes.<br><br>

Support for the latest version of Learning Tools Interoperability, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), is currently being worked on and will be made available in {% data variables.product.prodname_classroom %} very soon.

{% endnote %}

LTIは業界標準のプロトコルであり、GitHub ClassroomによるLTIの使用は、教育管理システム (IMS) グローバル・ラーニング・コンソーシアムにより認定されています。 詳しい情報については、IMSグローバル・ラーニング・コンソーシアムのウェブサイト上にある[Learning Tools Interoperability (学習ツールの相互運用性) ](https://www.imsglobal.org/activity/learning-tools-interoperability)および[About IMS Global Learning Consortium (IMSグローバル・ラーニング・コンソーシアムについて) ](http://www.imsglobal.org/aboutims.html)を参照してください。

{% data variables.product.company_short %}は、以下のLMSから{% data variables.product.prodname_classroom %}への名簿のインポートを確認しています。

- Google Classroom


## Connecting to Google Classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. クラスルームに既に名簿がある場合は、その名簿を更新するか、その名簿を削除して新しい名簿を作成できます。
    - 名簿の削除や作成に関する詳細については、「[クラスルームの名簿を削除する](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)」および「[クラスルームの名簿を作成する](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)」を参照してください。
    - 名簿の更新に関する詳細については、「[クラスルームの名簿に学生を追加する](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)」を参照してください。
1. In the list of LMSes, click Google Classroom. ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Sign in to Google, then select the Classroom to link to.


## Connecting to Canvas, Moodle, Sakai, and other LMSes

Connecting to other LMSes is temporarily unavailable as {% data variables.product.company_short %} updates to Learning Tools Interoperability (LTI) version 1.3. For more information, see "[Supported LMSes](#supported-lmses)."

In the meantime, you may manually input your roster for your class. For more information about manually importing the roster from your LMS into {% data variables.product.prodname_classroom %}, see "[Manage classrooms](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."

## LMSを切断する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. [Connect to a learning management system (LMS)] の下にある、[**Connection Settings**] をクリックします。 ![クラスルーム設定の [Connection settings]](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. [Delete Connection to your learning management system] の下にある、[**Disconnect from your learning management system**] をクリックします。 ![クラスルームへの接続設定にある [Disconnect from your learning management system] ボタン](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
