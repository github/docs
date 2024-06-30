---
title: Customizing your organization's profile
intro: You can share information about your organization by customizing your organization's profile.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Organizations
shortTitle: Customize organization profile
---


## About your organization's profile page

{% ifversion org-profile-pin-private %}
You can customize your organization's Overview page to show a README and pinned repositories dedicated to public users or members of the organization.

Members of your organization who are signed into {% data variables.product.prodname_dotcom %}, can select a `member` or `public` view of the README and pinned repositories when they visit your organization's profile page.

![Screenshot of an organization's profile page. In the right sidebar, a dropdown menu, labeled "View as: Public", is outlined in dark orange.](/assets/images/help/organizations/profile-view-switcher-public.png)

The view defaults to `member` if either a members-only README or members-only pinned repositories are present, and `public` otherwise.

Users who are not members of your organization will be shown a `public` view.

### Pinned repositories

You can give users easy access to important or frequently used repositories, by choosing up to six repositories for public users and six repositories for members of the organization. Once you pin repositories to your organization profile, the "Pinned" section is shown above the "Repositories" section of the profile page.

Only organization owners can pin repositories. For more information, see "[Pinning repositories to your organization's profile](#pinning-repositories-to-your-organizations-profile)."

### Organization profile READMEs

{% endif %}

You can share information about how to engage with your organization by creating an organization profile README for both public users and members of the organization. {% data variables.product.prodname_dotcom %} shows your organization profile README in the "Overview" tab of your organization.

You can choose what information to include in your organization profile README. Here are some examples of information that may be helpful.

* An "About" section that describes your organization
* Guidance for getting help in the organization

You can format text and include emoji, images, and GIFs in your organization profile README by using {% data variables.product.company_short %} Flavored Markdown. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)."

{% ifversion enterprise-readme %}
If you manage multiple organizations with an enterprise account, you can help members learn about the different organizations in the enterprise by creating an enterprise README. For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise)."
{% endif %}

## Adding a public organization profile README

The content of public `README.md` will appear on your organization's public profile.

1. If your organization does not already have a public `.github` repository, create a public `.github` repository.
1. In your organization's `.github` repository, create a `README.md` file in the `profile` folder.
1. Commit the changes to the `README.md` file.

{% ifversion org-profile-pin-private %}

## Adding a member-only organization profile README

The content of a member-only `README.md` will be displayed in the member view of your organization's profile.

1. If your organization does not already have a `.github-private` repository, create a private repository called `.github-private`.
1. In your organization's `.github-private` repository, create a `README.md` file in the `profile` folder.
1. Commit the changes to the `README.md` file.

## Pinning repositories to your organization's profile

You can pin repositories that you want to feature, such as those that are frequently used, to your organization's profile page. To choose which repositories to pin to your organization's profile, you must be an organization owner.

1. Navigate to your organization's profile page.
1. In the right sidebar of the page, select the **{% octicon "eye" aria-hidden="true" %} View as** dropdown menu, then click **Public** or **Member**.

   ![Screenshot of an organization's profile page. In the left sidebar, a dropdown menu, labeled "View as: public" is outlined in dark orange.](/assets/images/help/organizations/org-profile-view.png)
1. Navigate to the settings for pinned repositories.

   * If you already have pinned repositories, in the "Pinned" section, click **Customize pins**.

   ![Screenshot of an organization's profile page. In the top-right corner of the "Pinned" section, "Customize pins" is outlined in dark orange.](/assets/images/help/organizations/customize-pins-link.png)

   * If you haven't yet pinned any repositories, in the right sidebar, click **pin repositories**.

   ![Screenshot of an organization's profile page. In the right sidebar, a link, labeled "pin repositories," is outlined in dark orange.](/assets/images/help/organizations/pin-repositories-org-link.png)

1. In the "Edit pinned repositories" dialog box, select a combination of up to six public, {% ifversion not fpt %}private, or internal{% else %}or private{% endif %} repositories to display.
1. Click **Save pins**.

{% endif %}

## Changing your organization's profile picture

When you create an organization, {% data variables.product.product_name %} provides you with a randomly generated "identicon." The identicon is generated from a hash of your organization's user ID, so there's no way to control its color or pattern.

You can replace the identicon with an image that represents your organization. To replace the image, you can upload a new image or use a Gravatar image.

### Uploading an image

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Under your profile picture, click **Upload new picture**, then select an image.

### Using a Gravatar image

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Gravatar email (Private)" field, enter the email address associated with your Gravatar image.
1. Click **Update profile**.

## Further reading

* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)"
