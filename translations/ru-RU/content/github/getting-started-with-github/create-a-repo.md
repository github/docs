---
title: Create a repo
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
intro: 'To put your project up on {% data variables.product.product_location %}, you''ll need to create a repository for it to live in.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
  - issues
  - notifications
  - accounts
---

{% if currentVersion == "free-pro-team@latest" %}

You can store a variety of projects in {% data variables.product.product_name %} repositories, including open source projects. With [open source projects](http://opensource.org/about), you can share code to make better, more reliable software.

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

You can store a variety of projects in {% data variables.product.product_name %} repositories, including innersource projects. With innersource, you can share code to make better, more reliable software. For more information on innersource, see {% data variables.product.company_short %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Note:** You can create public repositories for an open source project. When creating your public repository, make sure to include a [license file](http://choosealicense.com/) that determines how you want your project to be shared with others. {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% data reusables.repositories.create_new %}
2. Type a short, memorable name for your repository. For example, "hello-world". ![Field for entering a repository name](/assets/images/help/repository/create-repository-name.png)
3. Optionally, add a description of your repository. For example, "My first repository on
{% data variables.product.product_name %}."
  ![Field for entering a repository description](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Congratulations! You've successfully created your first repository, and initialized it with a *README* file.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Tip**: You can also create repositories using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Commit your first change

A *[commit](/articles/github-glossary#commit)* is like a snapshot of all the files in your project at a particular point in time.

When you created your new repository, you initialized it with a *README* file. *README* files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your *README* file are automatically shown on the front page of your repository.

Let's commit a change to the *README* file.

1. In your repository's list of files, click ***README.md***. ![README file in file list](/assets/images/help/repository/create-commit-open-readme.png)
2. Above the file's content, click {% octicon "pencil" aria-label="The edit icon" %}.
3. On the **Edit file** tab, type some information about yourself. ![New content in file](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Review the changes you made to the file. You'll see the new content in green. ![File preview view](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Celebrate

Congratulations! You have now created a repository, including a *README* file, and created your first commit on {% data variables.product.product_location %}. What do you want to do next?

- "[Set up Git](/articles/set-up-git)"
- **Create a repository**
- "[Fork a repository](/articles/fork-a-repo)"
- "[Be social](/articles/be-social)"
- {% data reusables.support.connect-in-the-forum-bootcamp %}
