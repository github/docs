---
title: Uploading a project to GitHub
shortTitle: Upload a project to GitHub
intro: 'Learn how to upload the files for your project to {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Repositories
type: tutorial
---

## Introduction

This tutorial will show you how to upload a group of files to a {% data variables.product.prodname_dotcom %} repository.

Uploading your files to a {% data variables.product.prodname_dotcom %} repository lets you:
- **Apply version control** when you make edits to the files, so your project's history is protected and manageable.
- **Back up** your work{% ifversion fpt or ghec%}, because your files are now stored in the cloud{% endif %}.
- **Pin** the repository to your personal profile, so that others can see your work.
- **Share** and discuss your work with others, either publicly or privately.

If you're already familiar with Git, and you're looking for information on how to upload a locally-stored Git repository to {% data variables.product.prodname_dotcom %}, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git)."

## Prerequisites

- You must have a {% data variables.product.prodname_dotcom %} account. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/get-started/quickstart/creating-an-account-on-github)."{% endif %}
- You should have a group of files you'd like to upload.

## Step 1: Create a new repository for your project

It's a good idea to create a new repository for each individual project you're working on. If you're writing a software project, grouping all the related files in a new repository makes it easier to maintain and manage the codebase over time.

{% data reusables.repositories.create_new %}
1. In the "Repository name" box, type a name for your project. For example, type "my-first-project."
{% data reusables.repositories.add-description %}. For example, type "This is my first project on GitHub."
{% data reusables.repositories.select-public-or-private %} Select "Public" if you want others to be able to see your project.
{% data reusables.repositories.add-readme %} You will edit this file in a later step.
{% data reusables.repositories.click-create %}

## Step 2: Upload files to your project's repository

So far, you should only see one file listed in the repository, the `README.md` file you created when you initialized the repository. Now, we'll upload some of your own files.

1. To the right of the page, select the **Add file** dropdown menu.
1. From the dropdown menu, click **Upload files**.
1. On your computer, open the folder containing your work, then drag and drop all files and folders into the browser.
1. At the bottom of the page, under "Commit changes", select "Commit directly to the `main` branch, then click **Commit changes**.

## Step 3: Edit the README file for your project's repository

In Step 1, we selected to add a README file when creating your new repository. This file is typically the first item someone will see when visiting your repository and it usually contains information on what your project is about and why your project is useful. For example, if you're working on a software project, you will include information on how to install and use your software.

As we learned in the "Hello world" tutorial, the README file (`README.md`) is written in Markdown syntax. {% data reusables.getting-started.what-is-markdown %}

In this step, we'll edit your project's `README.md` using Markdown so that it includes some basic information about your project.

1. From the list of files, click `README.md` to view the file.
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   - You will see that some information about your project has been pre-filled for you. For example, you should see the repository name and repository description you completed in Step 1 displayed on line 1 and line 2.
1. On line 1, delete the existing text apart from `#`, then type a title for your project. In Markdown, `#` formats a first-level heading.
   - Example: `# About my first project on GitHub`.
1. On the next line, we'll write a short sentence that describes what your project is about.
   - Example: `This repository contains files that showcase my first project on GitHub.`
1. On the following line, format a second-level heading by starting the line with `##`.
   - Example: `## Installation`.
1. For the following lines, we'll format a numbered list by starting each new line with `1.`.
   - Example:

     ```text
     1. Download the files for this project.
     1. Install the software.
     1. Run the software.
     ```

{% data reusables.files.preview_change %}
1. Take a look at how the file will render once we save our changes, then toggle back to "Edit".
1. Continue to edit and preview the text until you're happy with the content of your README.
1. In the top right, click **Commit changes**.
1. In the dialog box that opens, a commit message has been pre-filled for you ("Update README.md") and, by default, the option to "Commit directly to the `main` branch" has been selected. Leave these options as they are and go ahead and click **Commit changes**.

## Conclusion

You have now created a new repository, uploaded some files to it, and added a project README.

{% ifversion fpt or ghec %}

If you set your repository visibility to "Public," the repository will be displayed on your personal profile and you can share the URL of your repository with others.

{% endif %}

As you add, edit or delete files directly in the browser on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} will track these changes ("commits"), so you can start to manage your project's history and evolution.

## Next steps

- Take a look at the README files of other repositories on {% data variables.product.product_name %} to get a sense of what information to include in your own README.

- To apply more sophisticated formatting to your README using Markdown, see "[AUTOTITLE](/get-started/writing-on-github)."

- Most people want to keep working on their files locally (i.e. on their own computer) and then continually sync these locally-made changes with this "remote" {% ifversion fpt or ghec %}(in the cloud){% endif %} repository on {% data variables.product.product_name %}. There are plenty of tools that let you do this, such as GitHub Desktop. For more information, see "[AUTOTITLE](/desktop/overview/getting-started-with-github-desktop)" and "[AUTOTITLE](/get-started/using-github/connecting-to-github)."

## Further reading

- [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [AUTOTITLE](/repositories/working-with-files/managing-files)
