---
title: Creating a commit on behalf of an organization
intro: 'You can create commits on behalf of an organization by adding a  trailer to the commit''s message. Commits attributed to an organization include an `on-behalf-of` badge on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** The ability to create a commit on behalf of an organization is currently in public beta and is subject to change.

{% endnote %}

To create commits on behalf of an organization:

- you must be a member of the organization indicated in the trailer
- you must sign the commit
- your commit email and the organization email must be in a domain verified by the organization
- your commit message must end with the commit trailer `on-behalf-of: @org <name@organization.com>`
  - `org` is the organization's login
  - `name@organization.com` is in the organization's domain

Organization's can use the `name@organization.com` email as a public point of contact for open source efforts.

### Creating commits with an `on-behalf-of` badge on the command line

1. Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add two empty lines.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Tip:** If you're using a text editor on the command line to type your commit message, ensure there are two newlines between the end of your commit description and the `on-behalf-of:` commit trailer.

  {% endtip %}

2. On the next line of the commit message, type `on-behalf-of: @org <name@organization.com>`, then a closing quotation mark.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

The new commit, message, and badge will appear on {% data variables.product.product_location %} the next time you push. For more information, see "[Pushing changes to a remote repository](/articles/pushing-commits-to-a-remote-repository/)."

### Creating commits with an `on-behalf-of` badge on {% data variables.product.product_name %}

After you've made changes in a file using the web editor on {% data variables.product.product_name %}, you can create a commit on behalf of your organization by adding an `on-behalf-of:` trailer to the commit's message.

1. After making your changes, at the bottom of the page, type a short, meaningful commit message that describes the changes you made. ![Commit message for your change](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. In the text box below your commit message, add `on-behalf-of: @org <name@organization.com>`.

  ![Commit message on-behalf-of trailer example in second commit message text box](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Click **Commit changes** or **Propose changes**.

The new commit, message, and badge will appear on {% data variables.product.product_location %}.

### 더 읽을거리

- "[Viewing contributions on your profile](/articles/viewing-contributions-on-your-profile)"
- "[Why are my contributions not showing up on my profile?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Viewing a summary of repository activity](/articles/viewing-a-summary-of-repository-activity)"
- "[Viewing a project’s contributors](/articles/viewing-a-projects-contributors)"
- "[Changing a commit message](/articles/changing-a-commit-message)"
