---
title: 'Deploying your website automatically'
shortTitle: 'Deploy automatically'
intro: 'Automate your code deployment with {% data variables.product.prodname_actions %} and {% data variables.product.prodname_pages %} to publish updates to a live site with every push to the main branch.'
category:
  - Learn to code
contentType: get-started
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

Your feature is merged, so now you can share it. In this tutorial, you'll set up automatic deployment so every push to `main` publishes your software project to a live website.

> [!NOTE]
> The URL of your {% data variables.product.prodname_pages %} site depends on which version of {% data variables.product.github %} you use.
> * On {% data variables.product.prodname_dotcom_the_website %}, your site is published at `YOUR-USERNAME.github.io/REPOSITORY`.
> * If you use {% data variables.product.github %} with data residency on {% data variables.enterprise.data_residency_site %}, your site is published at `pages.SUBDOMAIN.ghe.com/YOUR-USERNAME/REPOSITORY`, where `SUBDOMAIN` is your enterprise's subdomain.
> * On {% data variables.product.prodname_ghe_server %}, your site is published at `pages.HOSTNAME/YOUR-USERNAME/REPOSITORY`, where `HOSTNAME` is the hostname of your {% data variables.product.prodname_ghe_server %} instance.

## Prerequisites

* A `stargazers-log` repository with your merged feature. If you haven't merged it yet, see [AUTOTITLE](/get-started/start-your-journey/reviewing-your-proposed-changes).

## Enabling {% data variables.product.prodname_pages %}

Set up {% data variables.product.prodname_pages %} to host your site, and use {% data variables.product.prodname_actions %} to build and publish it.

1. On {% data variables.product.github %}, navigate to your `stargazers-log` repository.
1. Under your repository name, click **Settings**.
1. In the sidebar, in the "Code and automation" section, click **Pages**.
1. Under "Build and deployment", from the **Source** dropdown, select **{% data variables.product.prodname_actions %}**.

Leave the other settings at their defaults. Next, you'll create **your own workflow** to build and deploy your site automatically.

## Creating a deployment workflow

A workflow is a set of automated steps that {% data variables.product.prodname_actions %} runs for you. Add one that builds and deploys your site whenever you push to `main`.

1. In your repository, create a file named `.github/workflows/deploy.yml`.
    1. On the main page of your `stargazers-log` repository above the list of files, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %}**, then click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Create new file**.
    1. In the file name field, type `.github/workflows/deploy.yml`.
1. Add the following workflow content.

   ```yaml copy
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: {% raw %}${{ steps.deployment.outputs.page_url }}{% endraw %}
       steps:
         - name: Checkout
           uses: {% data reusables.actions.action-checkout %}
         - name: Setup Pages
           uses: actions/configure-pages@v5
         - name: Upload artifact
   {%- ifversion fpt or ghec %}
           uses: actions/upload-pages-artifact@v4
   {%- elsif ghes %}
           uses: actions/upload-pages-artifact@v2
   {%- endif %}
           with:
             path: '.'
         - name: Deploy to GitHub Pages
   {%- ifversion fpt or ghec %}
           id: deployment
           uses: actions/deploy-pages@v4
   {%- elsif ghes %}
           id: deployment
           uses: actions/deploy-pages@v2
   {%- endif %}
   ```

1. Commit the file directly to the `main` branch.

## Understanding the workflow

Each part of the workflow has a job to do:

* **`on`** tells {% data variables.product.prodname_actions %} to run the workflow on every push to `main`.
* **`permissions`** grant the workflow the access it needs to publish to {% data variables.product.prodname_pages %}.
* **`environment`** connects the job to your {% data variables.product.prodname_pages %} site and exposes the published URL as {% raw %}`${{ steps.deployment.outputs.page_url }}`{% endraw %}.
* **`steps`** check out your code, prepare {% data variables.product.prodname_pages %}, upload your files as an artifact, and deploy them to your live site.

## Viewing your live site

After you commit the workflow, {% data variables.product.prodname_actions %} runs it automatically.

1. In your repository, click the **Actions** tab to watch the workflow run.
1. Click the latest workflow run to see a summary of the job details.
1. When the run completes, open your published site at {% ifversion fpt or ghec %}`https://YOUR-USERNAME.github.io/stargazers-log/`{% elsif ghes %}`https://pages.HOSTNAME/YOUR-USERNAME/stargazers-log/`{% endif %}. Replace `YOUR-USERNAME` with your username{% ifversion ghes %}, and replace `HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname{% endif %}.
    * For example, if your {% data variables.product.github %} account username is `octocat`, your site is at {% ifversion fpt or ghec %}`https://octocat.github.io/stargazers-log/`{% elsif ghes %}`https://pages.HOSTNAME/octocat/stargazers-log/`{% endif %}.

From now on, every push to `main` redeploys your site with your latest changes.

## What you built

Across this series, you built a complete software project and practiced the {% data variables.product.github %} workflow:

| Stage | What you learned |
| ----- | ---------------- |
| Creating your software project | Repositories, README files |
| Planning your work | Issues, Projects (project boards) |
| Connecting locally | {% data variables.product.prodname_desktop %}, cloning |
| Writing and storing code | Branches, commits, pull requests, {% data variables.product.prodname_copilot_short %} |
| Reviewing changes | Pull request reviews, {% data variables.product.prodname_copilot_short %} |
| Deploying automatically | {% data variables.product.prodname_actions %}, {% data variables.product.prodname_pages %} |

## Next steps

* Expand your understanding of Git and {% data variables.product.github %}. For more information, see [AUTOTITLE](/get-started/start-your-journey/git-and-github-learning-resources).
* Explore {% data variables.copilot.copilot_chat_short %} to learn faster and get help as you code. For more information, see [AUTOTITLE]({% ifversion ghes %}/enterprise-cloud@latest/{% endif %}/copilot/concepts/chat){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.
* Go deeper with AI and learn how agents can act like a practical coding partner by turning ideas into small actionable steps, generating examples, and handling repetitive work. For more information, see [AUTOTITLE]({% ifversion ghes %}/enterprise-cloud@latest/{% endif %}/copilot/concepts/agents){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.
* Learn more about automating your software projects with {% data variables.product.prodname_actions %} workflows. For more information, see [AUTOTITLE](/actions/get-started/understand-github-actions).
* Add a custom domain or explore more ways to publish your website with {% data variables.product.prodname_pages %}. For more information, see [AUTOTITLE](/pages/getting-started-with-github-pages).
