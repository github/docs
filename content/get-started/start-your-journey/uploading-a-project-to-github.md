---
title: Uploading a project to GitHub
shortTitle: Upload a project
intro: 'Learn how to upload the files for your project to {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Repositories
type: tutorial
redirect_from:
  - /get-started/quickstart/uploading-a-project-to-github
---

## Introduction

This tutorial will show you how to upload a group of files to a {% data variables.product.prodname_dotcom %} repository.

Uploading your files to a {% data variables.product.prodname_dotcom %} repository lets you:
* **Apply version control** when you make edits to the files, so your project's history is protected and manageable.
* **Back up** your work{% ifversion fpt or ghec%}, because your files are now stored in the cloud{% endif %}.
* **Pin** the repository to your personal profile, so that others can see your work.
* **Share** and discuss your work with others, either publicly or privately.

If you're already familiar with Git, and you're looking for information on how to upload a locally-stored Git repository to {% data variables.product.prodname_dotcom %}, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git)."

## Prerequisites

* You must have a {% data variables.product.prodname_dotcom %} account. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)."{% endif %}
* You should have a group of files you'd like to upload.

## Step 1: Create a new repository for your project

It's a good idea to create a new repository for each individual project you're working on. If you're writing a software project, grouping all the related files in a new repository makes it easier to maintain and manage the codebase over time.

{% data reusables.repositories.create_new %}
1. In the "Repository name" box, type a name for your project. For example, type "my-first-project."
{% data reusables.repositories.add-description %} For example, type "This is my first project on GitHub."
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

Your repository's README file is typically the first item someone will see when visiting your repository. It usually contains information on what your project is about and why your project is useful.

As we learned in the "[AUTOTITLE](/get-started/start-your-journey/hello-world)" tutorial, the README file (`README.md`) is written in Markdown syntax. {% data reusables.getting-started.what-is-markdown %}

In this step, we'll edit your project's `README.md` using Markdown so that it includes some basic information about your project.

1. From the list of files, click `README.md` to view the file.
1. In the upper right corner of the file view, click {% octicon "pencil" aria-label="Edit file" %} to open the file editor.
   * You will see that some information about your project has been pre-filled for you. For example, you should see the repository name and repository description you completed in Step 1 displayed on line 1 and line 2.
1. Delete the existing text apart from `#`, then type a proper title for your project.
   * Example: `# About my first project on GitHub`.
1. Next, add some information about your project, such as a description of the project's purpose or its main features.
   {% note %}

   **Note:** If you're not sure what to write, take a look at other repositories on {% data variables.product.product_name %} to see how other people describe their projects.

   To apply more sophisticated formatting, such as adding images, links, and footnotes, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)."

   {% endnote %}
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

When making changes, remember that you can create a new branch from the `main` branch of your repository, so that you can experiment without affecting the main copy of files. Then, when you're happy with a set of a changes, open a pull request to merge the changes into your `main` branch. For a reminder of how to do this, see "[AUTOTITLE](/get-started/start-your-journey/hello-world)."

## Next steps

* Most people want to keep working on their files locally (i.e. on their own computer), and then continually sync these locally-made changes with this "remote" {% ifversion fpt or ghec %}(in the cloud){% endif %} repository on {% data variables.product.product_name %}. There are plenty of tools that let you do this, such as GitHub Desktop. To get started, you'd need to:
   * **Install** GitHub Desktop. For more information, see "[AUTOTITLE](/desktop/overview/getting-started-with-github-desktop)."
   * **Clone** the remote repository, so you have a copy of it on your own computer. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)."
   * Continually **sync** your local changes with this remote repository. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop)."

* To learn more about other tools available for working with repositories hosted on {% data variables.product.product_name %}, see "[AUTOTITLE](/get-started/using-github/connecting-to-github)."

## Further reading

* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)"
* "[AUTOTITLE](/repositories/working-with-files/managing-files)"
* "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)"
