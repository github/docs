---
title: 'Connecting to your code locally'
shortTitle: 'Connect locally'
intro: 'Connect {% data variables.product.prodname_desktop %} to your account and clone your repository to edit files locally.'
category:
  - Learn to code
contentType: get-started
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

So far, you've worked in the browser. In this tutorial, you'll use {% data variables.product.prodname_desktop %} to clone your repository to your computer so you can edit files in your own code editor.

{% data reusables.enterprise.url-substitute-note %}

## Prerequisites

* A `stargazers-log` repository. If you haven't created it yet, see [AUTOTITLE](/get-started/start-your-journey/creating-a-repository-for-your-project-on-github).
* {% data variables.product.prodname_desktop %} installed on your computer.

## Installing {% data variables.product.prodname_desktop %}

If you don't have {% data variables.product.prodname_desktop %} yet, install it before you continue. [Download {% data variables.product.prodname_desktop %}](https://desktop.github.com/?ref_product=desktop&ref_type=engagement&ref_style=button).

> [!TIP]
> {% data variables.product.prodname_docs %} contains documentation for all of {% data variables.product.company_short %}'s plans, and where relevant, tools and operating systems. To find content that matches your setup, use the **Version** dropdown in the top left corner of an article to select your plan, and select the tool or operating system tabs below the article's introduction.

## Signing in to {% data variables.product.prodname_desktop %}

Sign in so that {% data variables.product.prodname_desktop %} can access your repositories.

1. Open {% data variables.product.prodname_desktop %}.
1. From the welcome screen, click {% ifversion fpt or ghec %}**Sign in to {% data variables.product.prodname_dotcom_the_website %}**{% else %}**Sign in to {% data variables.product.prodname_enterprise %}**{% endif %}.
1. Follow the prompts to authenticate with your {% data variables.product.github %} account and authorize the app.
1. Follow the steps to configure Git with your name and email address, which will be used for commits you make in {% data variables.product.prodname_desktop %}.

If you don't see the welcome screen, follow the steps in [AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-basic-settings-in-github-desktop) to sign in and manage your settings from the {% data variables.product.prodname_desktop %} menu.

## Cloning your repository

Cloning creates a copy of your repository on your computer that stays connected to the version on {% data variables.product.github %}.

1. From the "Let's get started!" screen, select **`stargazers-log`** from the list of "Your repositories".
1. Directly below the repositories list, click **Clone OWNER/stargazers-log**, where OWNER is your {% data variables.product.github %} personal account.
1. Accept the default repository URL and local path, and click **Clone**.

If you don't see the "Let's get started!" screen, follow the steps in [Cloning a repository](/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop#cloning-a-repository) to clone your `stargazers-log` repository.

## Opening your code in an editor

With your repository cloned, open it in a code editor to start working on the files.

1. In {% data variables.product.prodname_desktop %}, select **Repository**, then click **Open in EDITOR**.
    * If you haven't set an editor yet, install one such as [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) ({% data variables.product.prodname_vscode_shortname %}), then choose it in the **Advanced** section of {% data variables.product.prodname_desktop %} settings.

1. Confirm that you can see your `index.html` and `README.md` files in the editor.

## What you accomplished

| Task | Outcome |
| ---- | ------- |
| Signed in to {% data variables.product.prodname_desktop %} | You connected {% data variables.product.prodname_desktop %} to your account. |
| Cloned your repository | You created a local copy of `stargazers-log` on your computer. |
| Opened your code | You opened the website files in a code editor, ready to make changes. |

## Next steps

* Now that your code is on your computer, build the first feature for your website. Continue to [AUTOTITLE](/get-started/start-your-journey/writing-and-storing-your-code).
