---
title: Quickstart for writing on GitHub
intro: 'Learn advanced formatting features by creating a {% ifversion ghae %}gist to describe yourself{% else %}README for your {% data variables.product.prodname_dotcom %} profile{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
---

## Introduction

Markdown is an easy-to-read, easy-to-write language for formatting plain text. You can use Markdown syntax, along with some additional HTML tags, to format your writing on {% data variables.product.prodname_dotcom %}, in places like repository READMEs and comments on pull requests and issues. In this guide, you'll learn some advanced formatting features by creating {% ifversion ghae %}a gist{% else %}or editing a README for your {% data variables.product.prodname_dotcom %} profile{% endif %}.

If you're new to Markdown, you might want to start with "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax)" or the [Communicate using Markdown](https://github.com/skills/communicate-using-markdown) {% data variables.product.prodname_learning %} course.

{% ifversion not ghae %}

If you already have a profile README, you can follow this guide by adding some features to your existing README, or by creating a gist with a Markdown file called something like `about-me.md`. For more information, see "[Creating gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)."

{% endif %}

{% ifversion ghae %}

## Creating a gist

Gists let you store or share code snippets and other pieces of information with others on {% data variables.location.product_location %}. To use formatting features in gists, add a gist file with a `.md` extension.

1. Navigate to your {% data variables.gists.gist_homepage %}.
1. Optionally, type a description for the gist, such as "About me."
1. In the **Filename including extension...** field, type `about-me.md`.

For more information, see "[Creating gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)."

{% else %}

## Creating or editing your profile README

Your profile README lets you share information about yourself with the community on {% data variables.location.product_location %}. The README is displayed at the top of your profile page.

If you don't already have a profile README, you can add one.

1. Create a repository with the same name as your {% data variables.product.prodname_dotcom %} username, initializing the repository with a `README.md` file. For more information, see "[Managing your profile README](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)."
1. Edit the `README.md` file and delete the template text (beginning `### Hi there`) that is automatically added when you create the file.

If you already have a profile README, you can edit it from your profile page.

{% data reusables.profile.navigating-to-profile %}
1. Click the {% octicon "pencil" aria-label="The Pencil icon" %} next to your profile README.

   ![Screenshot of a profile page, with the pencil icon highlighted next to the profile README](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## Adding an image to suit your visitors

You can include images in your communication on {% data variables.product.prodname_dotcom %}. Here, you'll add a responsive image, such as a banner, to the top of your {% ifversion ghae %}gist{% else %}profile README{% endif %}. 

By using the HTML `<picture>` element with the `prefers-color-scheme` media feature, you can add an image that changes depending on whether a visitor is using light or dark mode. For more information, see "[Managing your theme settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)."

1. Copy and paste the following markup into your {% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %} file.
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. Replace the placeholders in the markup with the URLs of your chosen images. Alternatively, to try the feature first, you can copy the URLs from our example below.

   - Replace `YOUR-DARKMODE-IMAGE` with the URL of an image to display for visitors using dark mode.
   - Replace `YOUR-LIGHTMODE-IMAGE` with the URL of an image to display for visitors using light mode.
   - Replace `YOUR-DEFAULT-IMAGE` with the URL of an image to display in case neither of the other images can be matched, for example if the visitor is using a browser that does not support the `prefers-color-scheme` feature.
1. To make the image accessible for visitors who are using a screen reader, replace `YOUR-ALT-TEXT` with a description of the image.
1. To check the image has rendered correctly, click the **Preview** tab.

For more information on using images in Markdown, see "[Basic writing and formatting syntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)."

### Example

{% data reusables.getting-started.picture-element-example %}

### How it looks

![Screenshot of the Preview tab in light mode, with an image of a smiling sun displayed](/assets/images/help/profile/lightmode-image-example.png)

## Adding a table

You can use Markdown tables to organize information. Here, you'll use a table to introduce yourself by ranking something, such as your most-used programming languages or frameworks, the things you're spending your time learning, or your favorite hobbies. When a table column contains numbers, it's useful to right-align the column by using the syntax `--:` below the header row.

1. Return to the **Edit {% ifversion ghae %}new {% endif %}file** tab. 
1. To introduce yourself, two lines below the `</picture>` tag, add an `## About me` header and a short paragraph about yourself, like the following.
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. Two lines below this paragraph, insert a table by copying and pasting the following markup.
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. In the column on the right, replace `THING-TO-RANK` with "Languages," "Hobbies," or anything else, and fill in the column with your list of things.
1. To check the table has rendered correctly, click the **Preview** tab.

For more information, see "[Organizing information with tables](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)."

### Example

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### How it looks

![Screenshot of the Preview tab, showing an "About me" heading and a rendered table with a list of languages](/assets/images/help/profile/markdown-table-example.png)

## Adding a collapsed section

To keep your content tidy, you can use the `<details>` tag to create an expandible collapsed section. 

1. To create a collapsed section for the table you created, wrap your table in `<details>` tags like in the following example.
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. Between the `<summary>` tags, replace `THINGS-TO-RANK` with whatever you ranked in your table.
1. Optionally, to make the section display as open by default, add the `open` attribute to the `<details>` tag.

   ```HTML
   <details open>
   ```
1. To check the collapsed section has rendered correctly, click the **Preview** tab.

### Example

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### How it looks

![Screenshot of the Preview tab, with a collapsed section called "My top languages" marked by a dropdown arrow](/assets/images/help/profile/collapsed-section-example.png)

## Adding a quote

Markdown has many other options for formatting your content. Here, you'll add a horizontal rule to divide your page and a blockquote to format your favorite quote.

1. At the bottom of your file, two lines below the `</details>` tag, add a horizontal rule by typing three or more dashes.

   ```Markdown
   ---
   ```
1. Below the `---` line, add a quote by typing markup like the following.
   
   ```Markdown
   > QUOTE
   ```

   Replace `QUOTE` with a quote of your choice. Alternatively, copy the quote from our example below.
1. To check everything has rendered correctly, click the **Preview** tab.

### Example

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### How it looks

![Screenshot of the Preview tab, with an indented quote below a thick horizontal line](/assets/images/help/profile/markdown-quote-example.png)

## Adding a comment

You can use HTML comment syntax to add a comment that will be hidden in the output. Here, you'll add a comment to remind yourself to update your {% ifversion ghae %}gist{% else %}README{% endif %} later.

1. Two lines below the `## About me` header, insert a comment by using the following markup.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   Replace `COMMENT` with a "to-do" item you remind yourself to do something later (for example, to add more items to the table).
1. To check your comment is hidden in the output, click the **Preview** tab.

### Example

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## Saving your work

When you're happy with your changes, save your {% ifversion ghae %}gist. 

- To keep your gist hidden from search engines but visible to anyone you share the URL with, click **Create secret gist** 
- If you're happy for your gist to be visible to anyone on {% data variables.location.product_location %}, click **Create internal gist**

{% else %}profile README by clicking **Commit changes**. 

Committing directly to the `main` branch will make your changes visible to any visitor on your profile. If you want to save your work but aren't ready to make it visible on your profile, you can select **Create a new branch for this commit and start a pull request**.

![Screenshot of the "Commit changes" section](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## Next steps

- Continue to learn about advanced formatting features. For example, see {% ifversion fpt or ghec %}"[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)" and {% endif %}"[Creating and highlighting codeblocks](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)."
- Use your new skills as you communicate across GitHub, in issues, pull requests, and discussions. For more information, see "[Communicating on {% data variables.product.prodname_dotcom %}](/get-started/quickstart/communicating-on-github)."
