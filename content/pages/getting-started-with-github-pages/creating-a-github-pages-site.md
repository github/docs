title: Creating a GitHub Pages Site
intro: 'Learn how to create a GitHub Pages site in a new or existing repository.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:fpt:'*'ghes:'*'ghec:'*'topics:
 
  - Pages shortTitle: Create a GitHub Pages site
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Overview

GitHub Pages allows you to host a website directly from your GitHub repository. This guide will walk you through the process of creating a GitHub Pages site, from setting up the repository to publishing your content.

## Step 1: Creating a Repository for Your Site

{% data reusables.pages.new-or-existing-repo %}

To create a new repository:

1. {% data reusables.repositories.create_new %}
2. {% data reusables.repositories.owner-drop-down %}
3. {% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
4. {% data reusables.pages.create-repo-name %}
   - For a user site, name your repository `<username>.github.io`
   - For a project site, choose any name for your repository
5. {% data reusables.repositories.choose-repo-visibility %}
6. {% data reusables.repositories.initialize-with-readme %}
7. {% data reusables.repositories.create-repo %}

## Step 2: Creating Your Site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

1. {% data reusables.pages.navigate-site-repo %}
2. {% data reusables.pages.decide-publishing-source %}
3. Create the entry file for your site:
   - GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry point for your site.
   - If your publishing source is a branch and folder, place the entry file at the top level of the source folder on the source branch.
   - For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file should be in the `/docs` folder on the `main` branch.
   - If using a {% data variables.product.prodname_actions %} workflow, ensure the deployed artifact includes the entry file at its top level.

4. {% data reusables.pages.configure-publishing-source %}
5. {% data reusables.repositories.sidebar-settings %}
6. {% data reusables.pages.sidebar-pages %}
7. {% data reusables.pages.choose-visibility %}
8. {% data reusables.pages.visit-site %}
9. {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Step 3: Customizing Your Site

To enhance your GitHub Pages site:

1. Add more pages:
   - Create new files in your repository.
   - Each file will be available on your site in the same directory structure as your publishing source.
   - Example: If you create `/about/contact-us.md` on the `gh-pages` branch, it will be accessible at `https://<user>.github.io/<repository>/about/contact-us.html`.

2. Add a theme:
   - Customize your site's appearance using Jekyll themes.
   - For more information, see "[Adding a theme to your GitHub Pages site using Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

3. Use Jekyll for advanced customization:
   - Jekyll is a static site generator with built-in support for GitHub Pages.
   - Learn more in "[About GitHub Pages and Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)".

## Troubleshooting

If you encounter issues:

- For Jekyll build errors, see "[Troubleshooting Jekyll build errors for GitHub Pages sites](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)".
- For 404 errors, check "[Troubleshooting 404 errors for GitHub Pages sites](/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)".

## Further Reading

- "[Creating and deleting branches within your repository](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[Creating new files](/repositories/working-with-files/managing-files/creating-new-files)"
- "[GitHub Pages documentation](https://docs.github.com/en/pages)"
