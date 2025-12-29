---
title: Personalize your profile
intro: You can share information about yourself with other users by setting a profile picture and adding a bio to your profile.
redirect_from:
  - /articles/adding-a-bio-to-your-profile
  - /articles/setting-your-profile-picture
  - /articles/how-do-i-set-up-my-profile-picture
  - /articles/gravatar-problems
  - /articles/how-do-i-set-up-my-avatar
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
  - /account-and-profile/get-started/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Personalize your profile
contentType: tutorials
---

> [!NOTE]
> Your profile name for your is {% data variables.product.github %} account is **required**. All other profile information described in this article is **optional**.

## Changing your profile picture

Your profile picture helps identify you across {% data variables.product.github %} in pull requests, comments, contributions pages, and graphs.

### Setting a profile picture

{% data reusables.user-settings.access_settings %}
{% data reusables.accounts.set-profile-picture %}

### Resetting your profile picture to the identicon

{% data reusables.user-settings.access_settings %}
1. Under "Profile Picture", select **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**, then click **Remove photo** to revert to your identicon.

   If your email address is associated with a [Gravatar](https://en.gravatar.com/), you cannot revert to your identicon. Click **Revert to Gravatar** instead.

   ![Screenshot of the "Public profile" section of a user account's settings. A button, labeled with a pencil icon and "Edit", is outlined in dark orange.](/assets/images/help/profile/edit-profile-photo.png)

## Changing your profile name

Your {% data variables.product.github %} profile name **does not** need to correlate with your real-world identity.

{% data reusables.user-settings.access_settings %}
1. Under "Public profile", in the "Name" field, type the name you want to be displayed on your profile.

## Adding a bio to your profile

{% data reusables.user-settings.access_settings %}
1. Under "Public profile", in the "Bio" field, type the content that you want displayed on your profile. The bio field is limited to 160 characters.

   > [!TIP]
   > When you @mention an organization, only those that you're a member of will autocomplete. You can still @mention organizations that you're not a member of, like a previous employer, but the organization name won't autocomplete for you.

{% data reusables.profile.update-profile %}

{% ifversion profile-pronouns %}

## Adding pronouns to your profile

Add pronouns to your public user profile to share information about yourself with other {% data variables.product.github %} users.

{% data reusables.user-settings.access_settings %}

1. Under **Pronouns**, add the pronouns that you want displayed on your profile. You may add custom pronouns.

{% data reusables.profile.update-profile %}

{% endif %}

## Setting your location and time zone

{% data reusables.user-settings.access_settings %}
1. Under "Public profile", in the "Location" field, type the location you want to be displayed on your profile.
1. Optionally, display the current local time on your profile.
   * Select **Display current local time**.
   * Select the **Time zone** dropdown menu, then click your local time zone.
{% data reusables.profile.update-profile %}

{% ifversion profile-social-links %}

## Adding links to your social accounts

You can add up to four links to social accounts on your profile.

{% data reusables.user-settings.access_settings %}
1. Under "Social accounts", in a blank "Link to social profile" field, type the full URL of the social account. For example, for the `@GitHub` Twitter account, type `https://twitter.com/github`.
{% data reusables.profile.update-profile %}

{% endif %}

{% ifversion fpt or ghec %}

## Adding your ORCID iD to your profile

If you're a researcher with an ORCID iD, you can identify yourself by adding your ORCID iD to your profile.

{% data reusables.user-settings.access_settings %}
1. Under "ORCID iD", click **Connect your ORCID iD**.
1. Follow the steps to sign in to your ORCID account and then return to {% data variables.product.prodname_dotcom %}.

{% endif %}

## Setting a status

You can set a status to display information about your current availability.

1. In the top right corner of {% data variables.product.prodname_dotcom %}, click your profile picture, then click **{% octicon "smiley" aria-hidden="true" aria-label="smiley" %} Set status** or, if you already have a status set, click your current status.

   ![Screenshot of the dropdown menu under @octocat's profile picture. A smiley icon and "Set status" are outlined in dark orange.](/assets/images/help/profile/set-status-on-profile-global-nav-update.png)

1. In the "What's happening" field, type a status message.
1. Optionally, to set an emoji status, click {% octicon "smiley" aria-label="Choose an emoji" %}, then click an emoji from the list.
1. Optionally, if you'd like to share that you have limited availability, select "Busy."
1. Select the **Clear status** dropdown menu, then click when you want your status to expire. If you don't select a status expiration, you will keep your status until you clear or edit your status.
1. Select the **Visible to** dropdown menu, then click who you want your status visible to. If you don't select an organization, your status will be public.
1. Click **Set status**.

## Next steps

* To learn more about GitHub profiles, see [AUTOTITLE](/account-and-profile/concepts/about-your-profile).

* For reference information, see [AUTOTITLE](/account-and-profile/reference/profile-reference).

* For more detailed profile customizations, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-github-profile).
