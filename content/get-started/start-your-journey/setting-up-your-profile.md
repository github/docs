---
title: Setting up your profile
shortTitle: Set up your profile
intro: Your profile tells people who you are and what you're interested in.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profile
  - Accounts
type: how_to
redirect_from:
  - /get-started/quickstart/setting-up-your-profile
---

## About your profile

Your profile page on {% data variables.product.prodname_dotcom %} is a place where people can find out more about you. You can use your profile to:

* **Share** your interests and skills.
* **Showcase** your projects and contributions.
* **Express** your identity{% ifversion fpt or ghec %} and show the {% data variables.product.prodname_dotcom %} community who you are{% endif %}.

In this tutorial, you'll learn how to personalize your profile by adding a profile picture, bio, and a profile README.

You'll also learn the basics of Markdown syntax, which is what you'll use to format any writing you do on {% data variables.product.prodname_dotcom %}.

### Prerequisites

* You must have a {% data variables.product.prodname_dotcom %} account. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)."{% endif %}

## Adding a profile picture and bio

First, we'll add a picture to your profile. Your profile picture helps identify you across {% data variables.product.product_name %}.

### Adding a profile picture

1. In the upper-right corner of any page, click your existing profile avatar, then, from the dropdown menu, click **Settings**.
{% data reusables.accounts.set-profile-picture %}

Next, we'll add some basic information about yourself to share with other {% data variables.product.product_name %} users. This information will display below your profile picture on your profile page.

### Adding a bio

1. On your profile page, under your profile picture, click **Edit profile**.
1. Under "Bio", write one or two sentences about yourself, such as who you are and what you do.

   {% note %}

   **Note:** Keep the bio short; we'll add a longer description of your interests in your profile README in the section below.

   {% endnote %}
1. To add an emoji to your bio, visit "[Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)" and copy and paste an emoji into the "Bio" dialog box.
1. Optionally, add your {% ifversion profile-pronouns %}preferred pronouns,{% endif %} workplace, location and timezone{% ifversion profile-social-links %}, and any links to your personal website and social accounts{% endif %}. {% ifversion profile-pronouns %}{% data reusables.profile.pronouns-visibility %}{% endif %}
1. Click **Save**.

## Adding a profile README

Next, we'll create a special repository and README file that will be displayed directly on your profile page.

Your profile README contains information such as your interests, skills, and background, and it can be a great way to introduce yourself to other people on {% data variables.product.product_name %} and showcase your work.

As we learned in the "[AUTOTITLE](/get-started/start-your-journey/hello-world)" tutorial, `README.md` files are written using Markdown syntax (note the `.md` file extension), which is just a way to format plain text.

In the following steps, we'll create and edit your profile README.

### Step 1: Create a new repository for your profile README

{% data reusables.profile.create-profile-readme %}

### Step 2: Edit the `README.md` file

{% data reusables.profile.edit-profile-readme %}
1. In the "Edit" view, you'll see some pre-populated text to get you started. On line 1, delete the text that says `### Hi there` and type `# About me`.
   * In Markdown syntax, `###` renders the plain text as a small ("third-level") heading, while `##` or `#` renders a second- and first-level heading respectively.
1. Toggle to "Preview" to see how the plain text now renders. You should see the new text displayed as a much larger heading.
1. Toggle back to the "Edit" view.
1. Delete line 3 and line 16.
   * This HTML syntax (e.g. ` <!-- `) is keeping the other lines hidden when you toggle to "Preview".
1. Complete some of the prompts on lines 8 to 15, and delete any lines you don't want. For example, add your interests, skills, hobbies, or a fun fact about yourself.
1. Now, toggle to "Preview". You should see your completed prompts render as a bulleted list.
1. Toggle back to "Edit" and remove any other lines of text that you don't want displayed on your profile.
1. Keep customizing and editing your profile README.
   * Use the "[Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)" to add emojis.
   * Use the "[Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)" to experiment with additional Markdown formatting.

### Step 3: Publish your changes to your profile

1. When you're happy with how your profile README looks in "Preview", and you're ready to publish it, click **Commit changes..**.
1. In the open dialog box, simply click again **Commit changes**.
1. Navigate back to your profile page. You will see your new profile README displayed on your profile.

## Next steps

* If you want to learn more Markdown syntax and add more sophisticated formatting to your profile README, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)."
* Alternatively, try the [{% data variables.product.prodname_learning %}](https://skills.github.com/) "Communicate using Markdown" course.
* In the next tutorial, "[AUTOTITLE](/get-started/start-your-journey/finding-inspiration-on-github)," we'll look at ways you can explore {% data variables.product.product_name %} to find projects and people that interest you.

## Further reading

* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile)"
* "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)"
