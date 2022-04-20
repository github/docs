---
title: Organizationのプロフィールのカスタマイズ
intro: You can share information about your organization by customizing your organization's profile.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: Organizationのプロフィールのカスタマイズ
---

{% if org-profile-pin-private %}

## About your organization's profile page

You can customize your organization's Overview page to show content dedicated to public users or members of the organization. Members of your organization who are signed into {% data variables.product.prodname_dotcom %}, are shown a member view when they visit your organization's profile page. Users who are not members of your organization will be shown a public view.

![Image of an organization profile page](/assets/images/help/organizations/new_organization_page.png)
{% endif %}

### Pinned repositories

You can give users easy access to important or frequently used repositories, by choosing up to six repositories for public users and six repositories for members of the organization. Once you pin repositories to your organization profile, the "Pinned" section is shown above the "Repositories" section of the profile page.

Only organization owners can pin repositories. For more information, see "[Pinning repositories to your organization's profile](#pinning-repositories-to-your-organizations-profile)."

### Organization profile READMEs

You can share information about how to engage with your organization by creating an organization profile README for both public users and members of the organization. {% data variables.product.prodname_dotcom %}は、OrganizationのプロフィールのREADMEをOrgaizationの”Overview（概要）"タブに表示します。

You can choose what information to include in your organization profile README. Here are some examples of information that may be helpful.

- Organizationについて説明する"About"セクション
- Organization内で支援を受けるためのガイダンス

{% data variables.product.company_short %}フレーバーのMarkdownを使って、OrganizationのプロフィールのREADME内のテキストをフォーマットし、絵文字や画像、GIFを含めることができます。 詳細は「[{% data variables.product.prodname_dotcom %} で書き、フォーマットしてみる](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)」を参照してください。

## Adding a public organization profile README

1. Organizationがまだパブリックな`.github`リポジトリを持っていないなら、パブリックな`.github`リポジトリを作成してください。
2. Organizationの`.github`リポジトリ内で、`profile`フォルダに`README.md`ファイルを作成してください。
3. `README.md`ファイルへの変更をコミットしてください。 The content of the `README.md` will appear on your organization's public profile.

   ![Image of an organization's public README](/assets/images/help/organizations/org_public_readme.png)

{% if org-profile-pin-private %}

## Adding a member-only organization profile README

1. If your organization does not already have a `.github-private` repository, create a public `.github-private` repository. This action can be performed by any user that has write access to that repository.
2. In your organization's `.github-private` repository, create a `README.md` file in the `profile` folder.
3. `README.md`ファイルへの変更をコミットしてください。 The content of the `README.md` will be displayed in the member view of your organization's profile.

   ![Image of an organization's private README](/assets/images/help/organizations/org_member_readme.png)

## Pinning repositories to your organization's profile

You can pin repositories that you want to feature, such as those that are frequently used, to your organization's profile page. To choose which repositories to pin to your organization's profile, you must be an organization owner or administrator.

1. Navigate to your organization's profile page.
2. In the right sidebar of the page in the {% octicon "eye" aria-label="The eye octicon" %} "View as" link, choose the **Public** or **Member** profile view from the dropdown menu.

   ![Image of the organization profile view dropdown](/assets/images/help/organizations/org_profile_view.png)

3. In the pinned repositories section, select **Customize pins**.

   ![Image of the customize pins link](/assets/images/help/organizations/customize_pins_link.png)

   - If you haven't yet pinned any repositories to your organization's profile, you'll need to instead click **pin repositories** in the right sidebar of the profile page. ![Image of pin repositories link in right sidebar](/assets/images/help/organizations/pin_repositories_link.png)

4. In the "Edit pinned repositories" dialog box, select a combination of up to six public, {% ifversion not fpt %}private, or internal{% else %}or private{% endif %} repositories to display.

   ![Image of pinned repo dialog](/assets/images/help/organizations/pinned_repo_dialog.png)

5. [**Save pins**] をクリックします。

{% endif %}
