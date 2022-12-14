---
title: 学習管理システムをGitHub Classroomに接続する
intro: LTI準拠の学習管理システム (LMS) を{% data variables.product.prodname_classroom %}に接続するよう設定することで、クラスルームの名簿をインポートできます。
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: e97a90ee822e779ecdf6ca94b7d35c29ddab5e5e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717830"
---
## LMSの設定について

学習管理システム (LMS) を{% data variables.product.prodname_classroom %}に接続でき、{% data variables.product.prodname_classroom %}はLMSから学生の名簿をインポートできます。 LMSを{% data variables.product.prodname_classroom %}に接続するには、LMSで{% data variables.product.prodname_classroom %}の構成認証情報を入力する必要があります。

## 前提条件

LMSを{% data variables.product.prodname_classroom %}に接続するよう構成するには、まずクラスルームを作成する必要があります。 詳細については、「[Classroom の管理](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)」を参照してください。

## サポートするLMS

{% note %}

**注:** {% data variables.product.prodname_classroom %} では、以前、Learning Tools Interoperability (LTI) バージョン 1.0 および 1.1 を実装する LMS からの名簿データのインポートがサポートされていました。 2022 年 6 月 30 日、教育管理システム (IMS) グローバル ラーニング コンソーシアムでは、[LTI バージョン 1.0 と 1.1 のサポートを終了しました](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule)。 機密性の高い学生情報の安全とセキュリティを保つために、{% data variables.product.company_short %} では、LTI 準拠の LMS からの名簿データのインポートを一時的に無効にしています。<br><br>

最新バージョンの Learning Tools 相互運用性 [(LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability)) のサポートが現在進行中であり、すぐに {% data variables.product.prodname_classroom %} で利用できるようになります。

{% endnote %}

LTIは業界標準のプロトコルであり、GitHub ClassroomによるLTIの使用は、教育管理システム (IMS) グローバル・ラーニング・コンソーシアムにより認定されています。 詳細については、IMS Global Learning Consortium の Web サイトで、「[学習ツールの相互運用性](https://www.imsglobal.org/activity/learning-tools-interoperability)」と「[IMS Global Learning Consortium について](http://www.imsglobal.org/aboutims.html)」を参照してください。

{% data variables.product.company_short %}は、以下のLMSから{% data variables.product.prodname_classroom %}への名簿のインポートを確認しています。

- Google Classroom


## Google Classroom への接続

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. クラスルームに既に名簿がある場合は、その名簿を更新するか、その名簿を削除して新しい名簿を作成できます。
    - 名簿の削除と作成の詳細については、「[クラスルームの名簿を削除する](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)」および「[クラスルームの名簿を作成する](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)」を参照してください。
    - 名簿の更新の詳細については、「[クラスルームの名簿に学生を追加する](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)」を参照してください。
1. LMS のリストの中から、[Google Classroom] をクリックします。
  ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Google にサインインして、リンク先の Classroom を選びます。


## Canvas、Moodle、Sakai などの LMS に接続する

他の LMS への接続は、{% data variables.product.company_short %} が Learning Tools 相互運用性 (LTI) バージョン 1.3 に更新されるため、一時的に使用できません。 詳しくは、「[サポートされている LMS](#supported-lmses)」を参照してください。

それまでは、クラスの名簿を手動で入力できます。 LMS から {% data variables.product.prodname_classroom %} に名簿を手動でインポートする方法について詳しくは、「[クラスルームの管理](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)」を参照してください。

## LMSを切断する

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. [学習管理システム (LMS) に接続する] で、 **[接続の設定]** をクリックします。
  ![クラスルームの設定の [接続の設定] リンク](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. [学習管理システムへの接続の削除] の下にある **[学習管理システムから切断する]** をクリックします。
  ![クラスルームの接続設定にある [学習管理システムから切断する] ボタン](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
