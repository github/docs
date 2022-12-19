---
title: 学習管理システムを GitHub Classroom に登録する
intro: '{% data variables.product.prodname_classroom %} を使用して、LTI 準拠の学習管理システム (LMS) を構成できます。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: 408126833cbf7fa8cd4a71d172f6550e82f795a2
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185170'
---
## クラスルームへの LMS の登録について

LMS をクラスルームに接続する前に、LMS インスタンスの管理者は、{% data variables.product.prodname_classroom %} を許可するように LMS を構成してから、LMS を {% data variables.product.prodname_classroom %} に登録して OAuth ハンドシェイクを開始する必要があります。 管理者は、この登録プロセスを 1 回行うだけでよく、その後は、LMS インスタンスを使用するすべての教師が LMS コースをクラスルームに同期できます。 LMS コースをクラスルームに接続する方法の詳細については、「[学習管理システム コースをクラスルームに接続する](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)」を参照してください。

{% note %}

**注:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

## サポートするLMS

{% data reusables.classroom.supported-lmses %}

## {% data variables.product.prodname_classroom %} 用に Canvas を構成する

Canvas のインストールを {% data variables.product.prodname_classroom %} に登録すると、教師が名簿データをクラスルームにインポートできるようになります。 Canvas の詳細については、[Canvas の Web サイト](https://www.instructure.com/canvas/)を参照してください。

### 1. {% data variables.product.prodname_classroom %} 開発者キーを Canvas に登録する

1. [Canvas](https://www.instructure.com/canvas/#login) にサインインします。
2. ホーム ページの左側のサイド バーで、 **[管理]** をクリックし、 **[サイト管理]** をクリックします。
3. **[開発者キー]** をクリックします。
4. [開発者キー] の **[+ 開発者キー]** ボタンをクリックし、ドロップダウン メニューから **[+ LTI キー]** を選びます。
5. [キー設定] 構成画面で、フィールドを次の値に設定します。 

    | Canvasアプリケーション構成のフィールド | 値または設定 |
    | :- | :- |
    | **方法** | `Manual Entry` |
    | **Title** | `GitHub Classroom` <br/><br/>**注**: 任意の名前を使用できますが、これを他の設定にした場合は、必ず教師に伝えてください。  |
    | **説明** | `Sync Canvas course rosters to GitHub Classroom` (または同様のもの) |
    | **ターゲット リンク URI** | `https://classroom.github.com/context-link` |
    | **OpenID Connect の開始 URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **JWK メソッド** | `Public JWK URL` |
    | **パブリック JWK URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **リダイレクト URI** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **LTI Advantage Services** ドロップダウン | [ツールがインストールされているコンテキストに関連付けられているユーザー データを取得できる] チェック ボックスをオンにします。 |
    | **[その他の設定]** ドロップダウン | [プライバシー レベル] で [`Public`] を選びます。 |
    | **配置** | [`Course Settings Sub Navigation`] を選択します。 <br/><br/>**注**: 配置を他の設定にした場合は、教師に伝える必要があります。 このドキュメントでは、これがボタンの配置であると想定しています。 |
6. **[保存]** をクリックします。
7. [開発者キー] ページの表で、GitHub Classroom 開発者キーの行にある [詳細] 列のクライアント ID の値をメモします。セットアップを完了できるように、これを教師に伝える必要があります。 
8. [開発者キー] ページの表にある [状態] 列で、キーの状態を [オン] に切り替えます。

### 2. 開発者キーを {% data variables.product.prodname_classroom %} に登録する

1. https://classroom.github.com/register-lms にアクセスします。 
2. 次の情報を入力します。
   - [LMS の種類] で、ドロップダウン メニューから [Canvas] を選びます。 
   - [発行者識別子]: `https://canvas.instructure.com`
   - [ドメイン]: Canvas インスタンスのベース URL
   - [クライアント ID]: 作成した開発者キーの [詳細] にある [クライアント ID]
   - [OIDC 認可エンドポイント]: Canvas インスタンスのベース URL の末尾に `/api/lti/authorize_redirect` が追加されたもの。
   - [OAuth 2.0 トークン取得 URL]: Canvas インスタンスのベース URL の末尾に `/login/oauth2/token` が追加されたもの。
   - [キー セット URL]: Canvas インスタンスのベース URL の末尾に `/api/lti/security/jwks` が追加されたもの。

  ![GitHub Classroom に Canvas インスタンスを登録する](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. **[登録]** をクリックします。 
4. 画面の上部に "LMS を正常に登録しました" というバナーが表示されます。これは、LMS インスタンスの登録が完了し、教師がクラスルームをリンクできるようになったことを意味します。

## {% data variables.product.prodname_classroom %} 用に Moodle を構成する

Moodle のインストールを {% data variables.product.prodname_classroom %} に登録すると、教師が名簿データをクラスルームにインポートできるようになります。 Moodle の詳細については、[Moodle の Web サイト](https://moodle.org)を参照してください。

Moodleのバージョンは3.0以上である必要があります。

### 1. Moodle で LTI ツールとしての発行を有効にする

1. [Moodle](https://moodle.org/login/) にサインインします。
2. トップ レベル メニューの [サイト管理] タブをクリックします。
3. [サイト管理] ページで、[プラグイン] タブをクリックし、[認証] セクションまで下にスクロールして、 **[認証の管理]** をクリックします。
4. [LTI] フィールドの横にあるトグル ボタンをクリックして LTI を有効にします。
5. もう一度 [プラグイン] タブをクリックし、[登録] まで下にスクロールして、 **[登録プラグインの管理]** をクリックします。
6. [LTI ツールとして発行] フィールドの横にあるトグル ボタンをクリックして、LTI ツールとしての発行を有効にします。
7. トップ レベル メニューの [サイト管理] タブをクリックして [サイト管理] ページに戻り、[セキュリティ] セクションまで下にスクロールして、 **[HTTP セキュリティ]** をクリックします。
8. [フレーム埋め込みを許可する] の横にあるチェック ボックスをオンにしてフレーム埋め込みを有効にし、 **[変更の保存]** をクリックします。

### 2. {% data variables.product.prodname_classroom %} を外部ツールとして登録する

1. トップ レベル メニューの [サイト管理] タブをクリックして、Moodle の [サイト管理] ページに戻ります。 
2. [プラグイン] タブをクリックし、[アクティビティ モジュール] セクションの横の [外部ツール] の下にある **[ツールの管理]** をクリックします。
3. **[ツールを手動で構成する]** をクリックします。 
4. フィールドに次の値を入力します。

    | Moodleアプリケーション設定のフィールド | 値または設定 |
    | :- | :- |
    | **ツール名** | `GitHub Classroom` <br/><br/>**注**: 任意の名前を使用できますが、これを他の設定にした場合は、必ず教師に伝えてください。 |
    | **Tool URL (ツールの URL)** | `https://classroom.github.com` |
    | **LTI version (LTI のバージョン)** | `LTI 1.3` |
    | **公開キーの種類** | `Keyset URL` |
    | **公開キーセット** | `https://classroom.github.com/.well-known/jwks.json` |
    | **ログイン開始 URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **リダイレクト URI** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **Default launch container (既定の起動コンテナー)** | `New window` |

5. **[ディープ リンク (コンテンツ アイテム メッセージ) をサポートする]** チェック ボックスをオンにします。
6. [サービス] ドロップダウンの [IMS LTI 名とロール プロビジョニング] の横にあるドロップダウン メニューから [このサービスを使用してプライバシー設定に従ってメンバーの情報を取得する] を選びます。 
7. **[変更を保存]** をクリックします。 
8. これで GitHub Classroom が外部ツールとして登録されました。 [ツール] の [GitHub Classroom] ボックスで、メニュー アイコンをクリックして [ツールの構成の詳細] 画面を表示します。 この画面には、以下にある {% data variables.product.prodname_classroom %} にインスタンスを登録する最後の手順で入力する必要がある重要な情報が含まれています。 

### 3. Moodle インスタンスを {% data variables.product.prodname_classroom %} に登録する

1. https://classroom.github.com/register-lms にアクセスします。 
2. 次の情報を入力します。
   - [LMS の種類] で、ドロップダウン メニューから [Moodle] を選びます。 
   - [発行者識別子]: Moodle で作成した外部ツールの [ツール構成の詳細] での [プラットフォーム ID]
   - [ドメイン]: Moodle インスタンスのベース URL
   - [クライアント ID]: Moodle で作成した外部ツールの [ツール構成の詳細] での [クライアント ID]
   - [認証要求 URL]: Moodle で作成した外部ツールの [ツール構成の詳細] での [認証要求 URL]
   - [アクセス トークン URL]: Moodle で作成した外部ツールの [ツール構成の詳細] での [アクセス トークン URL]
   - [キー セット URL]: Moodle で作成した外部ツールの [ツール構成の詳細] での [公開キーセット URL]
  
  ![Moodle インスタンスを GitHub Classroom に登録する](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. **[登録]** をクリックします。
4. 画面の上部に "LMS を正常に登録しました" というバナーが表示されます。これは、LMS インスタンスの登録が完了し、教師がクラスルームをリンクできるようになったことを意味します。

## {% data variables.product.prodname_classroom %} 用に Sakai を構成する

### 1. {% data variables.product.prodname_classroom %} を外部ツールとして登録する

1. Sakai に移動してログインします。
2. [管理ワークスペース] に移動し、左側のサイド バーで **[外部ツール]** を選びます。 
3. **[LTI 1.x ツールのインストール]** をクリックします。
4. フィールドに次の値を入力します。

    | Sakai アプリ構成のフィールド | 値または設定 |
    | :- | :- |
    | **ツール名** | GitHub Classroom - [コース名] <br/><br/>**注**: 任意の名前を使用できますが、これを他の設定にした場合は、必ず教師に伝えてください。 |
    | **ボタン テキスト** (ツール メニューのテキスト) | {% data variables.product.prodname_classroom %} を起動するボタン上に教師に対して表示される内容。 たとえば、`sync` のような値になります。 |
    | **URL の起動** | `https://classroom.github.com/context-link` |
    | **外部ツールにユーザー名を送信する** | このチェック ボックスをオンにします。 |
    | **外部ツールに名簿を提供する** | このチェック ボックスをオンにします。 |
    | **ツールは LTI 1.3 をサポートする** | このチェック ボックスをオンにします。 |
    | **LTI 1.3 ツール キーセット URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **LTI 1.3 ツール OpenID Connect/初期化エンドポイント** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **LTI 1.3 ツール リダイレクト エンドポイント** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. 送信すると、Sakai インスタンスを {% data variables.product.prodname_classroom %} に登録するために必要な情報が Sakai によって表示されます。

### 2. Sakai インスタンスを {% data variables.product.prodname_classroom %} に登録する

1. https://classroom.github.com/register-lms にアクセスします。
2. 次の情報を入力します。
   - [LMS の種類] で、ドロップダウン メニューから [Sakai] を選びます。 
   - [LTI 1.3 プラットフォーム発行者]: Sakai によって提供される [LTI 1.3 プラットフォーム発行者] フィールド
   - [ドメイン]: Sakai インスタンスのベース URL
   - [LTI 1.3 クライアント ID]: Sakai によって提供される [LTI 1.3 クライアント ID] フィールド
   - [LTI 1.3 プラットフォーム OIDC 認証 URL]: Sakai によって提供される [LTI 1.3 プラットフォーム OIDC 認証 URL] フィールド
   - [LTI 1.3 プラットフォーム OAuth2 ベアラー トークン取得 URL]: Sakai によって提供される [LTI 1.3 プラットフォーム OAuth2 ベアラー トークン取得 URL] フィールド
   - [LTI 1.3 プラットフォーム OAuth2 既知の/キーセット URL]: Sakai によって提供される [LTI 1.3 プラットフォーム OAuth2 既知の/キーセット URL] フィールド
  
  ![Sakai インスタンスを GitHub Classroom に登録する](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. **[登録]** をクリックします。 
4. 画面の上部に "LMS を正常に登録しました" というバナーが表示されます。これは、LMS インスタンスの登録が完了し、教師がクラスルームをリンクできるようになったことを意味します。
