---
title: Creating a codespace from a template
intro: If you're starting a new project, you can create a codespace from a blank template or choose a template specially designed for the type of work you want to do.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
---

## About templates for {% data variables.product.prodname_github_codespaces %}

If you're starting a new project, you can get started with development work quickly by creating a codespace from a template. You'll be able to work on your project in a cloud-based development environment, save your files in the cloud, and publish your work to a new remote repository that you can share with others or clone to your local machine.

{% note %}

**Note**: Codespaces created from a template, rather than from a repository, are always billed to your personal account. For more information, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% endnote %}

You can start from a blank template, choose from templates maintained by {% data variables.product.company_short %} for popular technologies such as React or Jupyter Notebook, or launch a codespace from any template repository on {% data variables.product.prodname_dotcom %}. With a blank template, you'll start with an empty directory, with access to cloud-based compute resources and the tools, languages, and runtime environments that come preinstalled with the default codespace image. With other templates, you'll get starter files for the technology you're working with, plus typically some extra files such as a README file, a `.gitignore` file, and dev container configuration files containing some custom environment configuration. For more information on dev containers and the default image, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)."

As an example, if you create a codespace from {% data variables.product.company_short %}'s React template, you'll arrive in a workspace containing template files for a simple application, such as `index.js`, `app.js`, and `package.json`. Shortly after the codespace opens, a development server will start up automatically, and you will be able to view the running application in a simple browser tab within the {% data variables.product.prodname_vscode_shortname %} web client.

![Screenshot of the React template running in a codespace](/assets/images/help/codespaces/react-template.png)

The files and configuration included in templates are defined in template repositories. The template repository is cloned into your codespace when you create the codespace. After that, the link is severed, and your codespace won't be linked to a remote repository until you publish to one. 

{% tip %}

**Tip:** To help people get started with your framework, library, or other project, you can set up a template repository for use with {% data variables.product.prodname_github_codespaces %}. For more information, see "[Setting up a template repository for {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)."

{% endtip %}

## Creating a codespace from a {% data variables.product.company_short %} template

Templates maintained by {% data variables.product.company_short %}, including the blank template, are available from the "Your codespaces" page.

{% data reusables.codespaces.your-codespaces-procedure-step %}
{% data reusables.codespaces.view-all-templates-step %}
1. Optionally, to view the template repository containing the files for a template, click the name of the template.

   ![Screenshot of the "Explore quick start templates" section, with "React" highlighted](/assets/images/help/codespaces/react-template-name.png)

1. Under the template you want to launch, click **Use this template**.
   
   ![Screenshot of the quick start templates, with the "Use this template" button highlighted under the React template](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## Creating a codespace from a template repository

You can create a codespace from any template repository, then publish your work to a new repository when you are ready. For more information on template repositories, see "[Creating a repository from a template](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **Note:** If you're a maintainer of the template repository, and want to commit changes to the template repository itself, you should create a codespace from the **{% octicon "code" aria-label="The code icon" %} Code** dropdown. For more information, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## Publishing to a repository on {% data variables.product.product_name %}

{% data reusables.codespaces.about-publishing-templates %}

### Publishing from {% data variables.product.prodname_vscode_shortname %} 

{% data reusables.codespaces.publishing-template-codespaces %}

When a codespace is published, you have access to a greater range of options to customize your {% data variables.product.prodname_github_codespaces %} experience. For example, you can:

- Change the machine type of your codespace to make sure you're using resources appropriate for the work you're doing (see "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)").
- Allow {% data variables.product.prodname_dotcom %} to automatically use GPG to sign commits you make in your codespace (see "[Managing GPG verification for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)").
- Share encrypted secrets with your codespace (see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)").

### Publishing from {% data variables.product.prodname_dotcom_the_website %} 

You can publish an unpublished codespace from the "Your codespaces" page on {% data variables.product.prodname_dotcom_the_website %}. This is useful if you want to publish a codespace that you don't currently have open in your browser. If you do this, your work will be preserved in a repository, but there won't be a link between your existing codespace and the new repository. However, you can navigate to the new repository and create a codespace from there, and this codespace will be connected to the repository.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Next to the unpublished codespace, click the ellipsis (**...**), then select **Publish to a new repository**.

   ![Screenshot of the "Publish to a new repository" button](/assets/images/help/codespaces/publish-to-new-repository.png)
1. Choose a name for your new repository, set it as **Public** or **Private**, and click **Create repository**.

   ![Screenshot of the "Publish to a new repository" dropdown](/assets/images/help/codespaces/template-new-repository-settings.png)
1. Optionally, to view the new repository, click **See repository**.

## Further reading

- "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)"
- "[The codespace lifecycle](/codespaces/getting-started/the-codespace-lifecycle)"
- "[Using source control in your codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"