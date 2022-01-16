---
title: Creating a commit with multiple authors
intro: 'You can attribute a commit to more than one author by adding one or more `Co-authored-by` trailers to the commit''s message. Co-authored commits are visible on {% data variables.product.product_name %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} and can be included in the profile contributions graph and the repository''s statistics{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Required co-author information

Before you can add a co-author to a commit, you must know the appropriate email to use for each co-author. For the co-author's commit to count as a contribution, you must use the email associated with their {% data variables.product.product_name %} account.

{% if currentVersion == "free-pro-team@latest" %}

If a person chooses to keep their email address private, you should use their {% data variables.product.product_name %}-provided `no-reply` email to protect their privacy. Otherwise, the co-author's email will be available to the public in the commit message. If you want to keep your email private, you can choose to use a {% data variables.product.product_name %}-provided `no-reply` email for Git operations and ask other co-authors to list your `no-reply` email in commit trailers.

For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address)."

  {% tip %}

  **Tip:** You can help a co-author find their preferred email address by sharing this information:
  - To find your {% data variables.product.product_name %}-provided `no-reply` email, navigate to your email settings page under "Keep my email address private."
  - To find the email you used to configure Git on your computer, run `git config user.email` on the command line.

  {% endtip %}

{% endif %}

### Creating co-authored commits using {% data variables.product.prodname_desktop %}

You can use {% data variables.product.prodname_desktop %} to create a commit with a co-author. For more information, see "[Write a commit message and push your changes](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)" and [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Add a co-author to the commit message](/assets/images/help/desktop/co-authors-demo-hq.gif)

### Creating co-authored commits on the command line

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add two empty lines.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Tip:** If you're using a text editor on the command line to type your commit message, ensure there are two newlines between the end of your commit description and the `Co-authored-by:` commit trailer.

  {% endtip %}

3. On the next line of the commit message, type `Co-authored-by: name <name@example.com>` with specific information for each co-author. After the co-author information, add a closing quotation mark.

  If you're adding multiple co-authors, give each co-author their own line and `Co-authored-by:` commit trailer.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

The new commit and message will appear on {% data variables.product.product_location %} the next time you push. For more information, see "[Pushing changes to a remote repository](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)."

### Creating co-authored commits on {% data variables.product.product_name %}

After you've made changes in a file using the web editor on {% data variables.product.product_name %}, you can create a co-authored commit by adding a `Co-authored-by:` trailer to the commit's message.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. After making your changes together, at the bottom of the page, type a short, meaningful commit message that describes the changes you made. ![Commit message for your change](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. In the text box below your commit message, add `Co-authored-by: name <name@example.com>` with specific information for each co-author. If you're adding multiple co-authors, give each co-author their own line and `Co-authored-by:` commit trailer.

  ![Commit message co-author trailer example in second commit message text box](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Click **Commit changes** or **Propose changes**.

The new commit and message will appear on {% data variables.product.product_location %}.

### 더 읽을거리
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- "[Viewing contributions on your profile](/articles/viewing-contributions-on-your-profile)"
- "[Why are my contributions not showing up on my profile?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"{% endif %}
- "[Viewing a summary of repository activity](/articles/viewing-a-summary-of-repository-activity)"
- "[Viewing a project's contributors](/articles/viewing-a-projects-contributors)"
- "[Changing a commit message](/articles/changing-a-commit-message)"
- "[Committing and reviewing changes to your project](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)" in the {% data variables.product.prodname_desktop %} documentation
