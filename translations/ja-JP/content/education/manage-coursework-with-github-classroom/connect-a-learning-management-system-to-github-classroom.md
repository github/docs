---
title: 学習管理システムをGitHub Classroomに接続する
intro: LTI準拠の学習管理システム (LMS) を{% data variables.product.prodname_classroom %}に接続するよう設定することで、クラスルームの名簿をインポートできます。
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
---

### LMSの設定について

学習管理システム (LMS) を{% data variables.product.prodname_classroom %}に接続でき、{% data variables.product.prodname_classroom %}はLMSから学生の名簿をインポートできます。 LMSを{% data variables.product.prodname_classroom %}に接続するには、LMSで{% data variables.product.prodname_classroom %}の構成認証情報を入力する必要があります。

### 必要な環境

LMSを{% data variables.product.prodname_classroom %}に接続するよう構成するには、まずクラスルームを作成する必要があります。 詳しい情報については、「[クラスルームの管理](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)」を参照してください。

### サポートするLMS

{% data variables.product.prodname_classroom %}は、Learning Tools Interoperability (LTI) 規格を実装するLMSからの、名簿データのインポートをサポートしています。

- LTIバージョン1.0および1.1
- LTI Names and Roles Provisioning 1.X

LTIは、情報の安全性と機密性を保つために役立ちます。 LTIは業界標準のプロトコルであり、GitHub ClassroomによるLTIの使用は、教育管理システム (IMS) グローバル・ラーニング・コンソーシアムにより認定されています。 詳しい情報については、IMSグローバル・ラーニング・コンソーシアムのウェブサイト上にある[Learning Tools Interoperability (学習ツールの相互運用性) ](https://www.imsglobal.org/activity/learning-tools-interoperability)および[About IMS Global Learning Consortium (IMSグローバル・ラーニング・コンソーシアムについて) ](http://www.imsglobal.org/aboutims.html)を参照してください。

{% data variables.product.company_short %}は、以下のLMSから{% data variables.product.prodname_classroom %}への名簿のインポートを確認しています。

- Canvas
- Google Classroom
- Moodle
- Sakai

現在のところ、{% data variables.product.prodname_classroom %}はBlackboardおよびBrightspaceからの名簿のインポートはサポートしていません。

### クラスルームの構成認証情報を生成する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. クラスルームに既に名簿がある場合は、その名簿を更新するか、その名簿を削除して新しい名簿を作成できます。
    - 名簿の削除や作成に関する詳細については、「[クラスルームの名簿を削除する](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)」および「[クラスルームの名簿を作成する](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)」を参照してください。
    - 名簿の更新に関する詳細については、「[クラスルームの名簿に学生を追加する](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)」を参照してください。
1. LMSのリストの中から、お使いのLMSをクリックします。 お使いのLMSがサポートされていない場合、[**Other LMS**] をクリックします。 ![LMSのリスト](/assets/images/help/classroom/classroom-settings-click-lms.png)
1. LMSの接続について読み、[**Connect to _LMS_**] をクリックします。
1. クラスルームへの接続に用いる、[Consumer Key]、[Shared Secret]、および [Launch URL] をコピーします。 ![認証情報のコピー](/assets/images/help/classroom/classroom-copy-credentials.png)

### 一般的なLMSを設定する

外部ツールが名簿情報を受信できるよう、LMSのプライバシー設定を行う必要があります。

1. お使いのLMSに移動します。
1. 外部ツールを設定します。
1. {% data variables.product.prodname_classroom %}で生成された構成認証情報を入力します。
    - Consumer key
    - 共有シークレット
    - Launch URL (「ツールURL」などと呼ばれることもあります)

### Canvasを設定する

{% data variables.product.prodname_classroom %}をCanvasの外部アプリケーションとして設定し、クラスルームに名簿データをインポートできます。 Canvasに関する詳細は、[Canvasのウェブサイト](https://www.instructure.com/canvas/)を参照してください。

1. [Canvas](https://www.instructure.com/canvas/#login)にサインインします。
1. {% data variables.product.prodname_classroom %}と連携するCanvasのコースを選択します。
1. 左のサイドバーで、**Settings（設定）**をクリックしてください。
1. [**Apps**] タブをクリックします。
1. [**View app configurations**] をクリックします。
1. [**+App**] をクリックします。
1. [**Configuration Type**] ドロップダウンメニューで、[**By URL**] をクリックします。
1. {% data variables.product.prodname_classroom %}からコピーした構成認証情報を貼り付けます。 詳しい情報については、「[クラスルームの構成認証情報を生成する](#generating-configuration-credentials-for-your-classroom)」を参照してください。

    | Canvasアプリケーション構成のフィールド                                                    | 値または設定                                                          |
    |:------------------------------------------------------------------------- |:--------------------------------------------------------------- |
    | **Consumer Key**                                                          | {% data variables.product.prodname_classroom %}からのConsumer key  |
    | **Shared Secret**                                                         | {% data variables.product.prodname_classroom %}からのShared secret |
    | **Allow this tool to access the IMS Names and Role Provisioning Service** | 有効                                                              |
    | **Configuration URL**                                                     | {% data variables.product.prodname_classroom %}からのLaunch URL    |

    {% note %}

    **注釈**: [Allow this tool to access the IMS Names and Role Provisioning Service] というラベルのチェックボックスがCanvasで表示されていない場合、Canvasの管理者がCanvasサポートに連絡し、お使いのCanvasアカウントでメンバーシップサービス設定を有効化する必要があります。 この機能を有効化しないと、Canvasから名簿を同期できません。 詳しい情報については、Canvasウェブサイトの[How do I contact Canvas Support? (Canvasサポートに連絡する方法)](https://community.canvaslms.com/t5/Canvas-Basics-Guide/How-do-I-contact-Canvas-Support/ta-p/389767) を参照してください。

    {% endnote %}

1. **Submit（サブミット）**をクリックしてください。
1. 左のサイドバーで [**Home**] をクリックします。
1. 左のサイドバーで [**GitHub Classroom**] をクリックし、Canvasが確認メールを送信するようにします。 メールの指示に従い、{% data variables.product.prodname_classroom %}との連携を完了します。

### Moodleを設定する

{% data variables.product.prodname_classroom %}をMoodleのアクティビティとして設定し、クラスルームに名簿データをインポートできます。 Moodleに関する詳細は、[Moodleのウェブサイト](https://moodle.org)を参照してください。

Moodleのバージョンは3.0以上である必要があります。

1. [Moodle](https://moodle.org/login/index.php)にサインインします。
1. {% data variables.product.prodname_classroom %}と連携するMoodleのコースを選択します。
1. [**Turn editing on**] をクリックします。
1. Moodleで{% data variables.product.prodname_classroom %}を使用するところで、[**Add an activity or resource**] をクリックします。
1. [**External tool**] を選択し、[**Add**] をクリックします。
1. [Activity name] フィールドに、「GitHub Classroom」と入力します。
1. [**Preconfigured tool**] フィールドで、ドロップダウンメニューの右にある [**+**] をクリックします。
1. [External tool configuration] の下に、{% data variables.product.prodname_classroom %} からコピーしたした構成認証情報を貼り付けます。 詳しい情報については、「[クラスルームの構成認証情報を生成する](#generating-configuration-credentials-for-your-classroom)」を参照してください。

    | Moodleアプリケーション設定のフィールド       | 値または設定                                                                                                                            |
    |:---------------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
    | **Tool name**                | {% data variables.product.prodname_classroom %} - _あなたのクラスルーム名_<br/><br/>**注釈**: 任意の名前を設定できますが、わかりやすいよう、この値をお勧めします。 |
    | **Tool URL**                 | {% data variables.product.prodname_classroom %}からのLaunch URL                                                                      |
    | **LTI version**              | LTI 1.0/1.1                                                                                                                       |
    | **Default launch container** | 新規ウィンドウ                                                                                                                           |
    | **Consumer key**             | {% data variables.product.prodname_classroom %}からのConsumer key                                                                    |
    | **共有シークレット**                 | {% data variables.product.prodname_classroom %}からのShared secret                                                                   |

1. [**Services**] までスクロールしてクリックします。
1. [IMS LTI Names and Role Provisioning] の右にあるドロップダウンメニューを選択し、[**Use this service to retrieve members' information as per privacy settings**] をクリックします。
1. [**Privacy**] までスクロールしてクリックします。
1. [**Share launcher's name with tool**] と [**Share launcher's email with tool**] の右にあるドロップダウンメニューをそれぞれ選択し、[**Always**] をクリックします。
1. ページの下部で**Save changes（変更の保存）**をクリックしてください。
1. [**Preconfigure tool**] メニューで、[**GitHub Classroom - _あなたのクラスルーム名_**] をクリックします。
1. [Common module settings] で、[Availability] の右にあるドロップダウンメニューを選択し、[**Hide from students**] をクリックします。
1. ページの下部で、[**Save and return to course**] をクリックします
1. {% data variables.product.prodname_classroom %} を表示したい場所に移動し、{% data variables.product.prodname_classroom %}アクティビティをクリックします。

### LMSから名簿をインポートする

LMSから{% data variables.product.prodname_classroom %}への名簿のインポートに関する詳細については、「[クラスルームの管理](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)」を参照してください。

### LMSを切断する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. [Connect to a learning management system (LMS)] の下にある、[**Connection Settings**] をクリックします。 ![クラスルーム設定の [Connection settings]](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. [Delete Connection to your learning management system] の下にある、[**Disconnect from your learning management system**] をクリックします。 ![クラスルームへの接続設定にある [Disconnect from your learning management system] ボタン](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
