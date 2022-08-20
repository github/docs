---
title: Organizationのプロフィールのカスタマイズ
intro: Organizationのプロフィールをカスタマイズすれば、Organizationの情報を共有できます。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: Organizationのプロフィールのカスタマイズ
---


## Organization のプロフィールページについて

{% ifversion org-profile-pin-private %}
Organizationの概要ページをカスタマイズして、一般ユーザもしくはOrganizationのメンバー専用のREADMEと固定リポジトリを表示させることができます。

![パブリックのOrganizationプロフィールページの画像](/assets/images/help/organizations/public_profile.png)

{% data variables.product.prodname_dotcom %}にサインインしたOrganizationのメンバーは、Organizationのプロフィールページにアクセスした際に、READMEと固定リポジトリの`member`もしくは`public`ビューを選択できます。

![パブリックのOrganizationプロフィールページのコンテキストスイッチャーの画像](/assets/images/help/organizations/profile_view_switcher_public.png)

メンバー専用のREADMEあるいはメンバー専用の固定リポジトリがある場合は`member`がデフォルトであり、そうでない場合は`public`がデフォルトになります。

![メンバー専用のOrganizationプロフィールページの画像](/assets/images/help/organizations/member_only_profile.png)

Organizationのメンバーではないユーザには、`public`ビューが表示されます。

### 固定リポジトリ

最大で一般ユーザに対し6つのリポジトリ、そしてOrganizationのメンバーに対して6つのリポジトリを選択することによって、ユーザに対して重要なリポジトリや頻繁に利用されるリポジトリへアクセスを容易にできます。 Organizationのプロフィールにリポジトリを固定すると、"Pinned（ピン止め）"セクションがプロフィールページの"Repositories（リポジトリ）"セクションの上部に表示されます。

リポジトリをピン留めできるのはOrganizationのオーナーだけです。 詳しい情報については「[Organizationのプロフィールへのリポジトリのピン止め](#pinning-repositories-to-your-organizations-profile)」を参照してください。

### OrganizationプロフィールのREADME

{% endif %}

一般ユーザとOrganizationのメンバーの双方に向けてOrganizationのプロフィールのREADMEを作成することで、Organizationとの関わり方に関する情報を共有できます。 {% data variables.product.prodname_dotcom %}は、OrganizationのプロフィールのREADMEをOrgaizationの”Overview（概要）"タブに表示します。

OrganizationのプロフィールのREADMEにどういった情報を含めるかは選択できます。 以下は、役に立つかも知れない情報の例です。

- Organizationについて説明する"About"セクション
- Organization内で支援を受けるためのガイダンス

{% data variables.product.company_short %}フレーバーのMarkdownを使って、OrganizationのプロフィールのREADME内のテキストをフォーマットし、絵文字や画像、GIFを含めることができます。 詳細は「[{% data variables.product.prodname_dotcom %} で書き、フォーマットしてみる](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)」を参照してください。

## 公開のOrganizationプロフィールのREADMEの追加

1. Organizationがまだパブリックな`.github`リポジトリを持っていないなら、パブリックな`.github`リポジトリを作成してください。
2. Organizationの`.github`リポジトリ内で、`profile`フォルダに`README.md`ファイルを作成してください。
3. `README.md`ファイルへの変更をコミットしてください。 `README.md`の内容が、Organizationの公開プロフィールに表示されるようになります。

   ![Organizationの公開READMEの画像](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## メンバーのみのOrganizationプロフィールのREADMEの追加

1. Organizationがまだ`.github-private`リポジトリを持っていないなら、プライベートな`.github-private`というリポジトリを作成してください。
2. Organizationの`.github-private`リポジトリで、`profile`フォルダ内に`README.md`というファイルを作成してください。
3. `README.md`ファイルへの変更をコミットしてください。 `README.md`の内容は、Organizationプロフィールのメンバービューに表示されます。

   ![Organizationのメンバー専用READMEの画像](/assets/images/help/organizations/org_member_readme.png)

## Organizationのプロフィールへのリポジトリの固定

頻繁に使われるようなリポジトリなど、強調したいリポジトリをOrganizationのプロフィールページに固定できます。 Organizaitonのプロフィールに固定するリポジトリを選択するには、Organizationのオーナーでなければなりません。

1. Organizationのプロフィールページにアクセスしてください。
2. ページの右のサイドバー内の{% octicon "eye" aria-label="The eye octicon" %} "View as"リンク内で、ドロップダウンメニューから**Public（公開）**もしくは**Member（メンバー）**プロフィールビューを選択してください。

   ![Organizationプロフィールビューのドロップダウンの画像](/assets/images/help/organizations/org_profile_view.png)

3. 固定リポジトリのセクションで、**Customize pins（固定のカスタマイズ）**を選択してください。

   ![ピン止めのカスタマイズリンクの画像](/assets/images/help/organizations/customize_pins_link.png)

   - まだOrganizationのプロフィールに固定リポジトリがないなら、代わりにプロフィールページの右のサイドバーにある**pin repositories（リポジトリの固定）**をクリックしなければなりません。 ![右のサイドバーにあるリポジトリのピン止めリンクの画像](/assets/images/help/organizations/pin_repositories_link.png)

4. "Edit pinned repositories（固定リポジトリの編集）"ダイアログボックスで、最大で6つの表示するパブリック、{% ifversion not fpt %}プライベート、もしくはインターナル{% else %}もしくはプライベート{% endif %}リポジトリの組み合わせを選択してください。

   ![ピン止めされたリポジトリダイアログの画像](/assets/images/help/organizations/pinned_repo_dialog.png)

5. [**Save pins**] をクリックします。

{% endif %}
