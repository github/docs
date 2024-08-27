<img width="756" alt="web3-architecture" src="https://github.com/user-attachments/assets/dc3127b3-4291-437d-a133-7adccee794ec">
![networkinglog4](https://github.com/user-attachments/assets/29e50268-fd5c-4830-9ef7-95a138ec44ec)
![networkinglog3](https://github.com/user-attachments/assets/0d69ebb4-42b0-42fa-8e69-784dd365586b)
![networkinglog2](https://github.com/user-attachments/assets/2ef0d929-d695-4364-aeab-f58a3f8acbea)
![networkinglog4](https://github.com/user-attachments/assets/f8133d0f-484b-49a4-b0ff-e40bdab13780)
---
title: 'Creating a tasklist'
intro: 'You can create a tasklist using the {% data variables.product.product_name %} UI or Markdown.'
allowTitleToDifferFromFilename: true
versions:
  feature: projects-v2-tasklists
type: tutorial
redirect_from:
  - /early-access/issues/about-tasklists
  - /issues/tracking-your-work-with-issues/about-tasklists
topics:
  - Issues
---

{% data reusables.projects.tasklists-release-stage %}

## Creating tasklists in the UI

You can use the **Add tasklist** button to quickly add a tasklist to your issue. The **Add tasklist** button is available when you view or edit an issue.

1. Navigate to the issue you want to contain your new tasklist. You can also create a new issue.
1. At the bottom of the issue description, click {% octicon "plus" aria-hidden="true" %} **Add tasklist**.

   ![Screenshot of an issue. The "Add tasklist" button is highlighted with an orange outline.](/assets/images/help/projects-v2/add-tasklist-ui.png)

1. You can then add issues, pull requests, and draft tasks to your new tasklist. For more information, see "[AUTOTITLE](/issues/managing-your-tasks-with-tasklists/managing-tasks-in-a-tasklist)."

## Creating tasklists with Markdown

You can create tasklists using Markdown in the issue description (the opening comment of an issue). You can include links to issues and pull requests or create draft issues.

You can add a tasklist by copying the Markdown below into your issue description:

````markdown copy
```[tasklist]
### My tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft task
```
````

You can also use the **Add tasklist** button while editing your issue to insert the Markdown for a tasklist:

![Screenshot an issue. The "Add tasklist" button is highlighted with an orange outline.](/assets/images/help/projects-v2/add-tasklist-markdown.png)

Once you have started editing your tasklist Markdown, you can add new tasks by preceding each new task with `- [ ] ` and then adding either:

* A draft task. Draft tasks are text that can later be converted into issues.
* The full link to an issue or pull request.  For example, `https://github.com/octo-org/octo-repo/issues/45`. If an issue or pull request is in the same repository as your tasklist, you can use the #ISSUE-NUMBER shorthand syntax. For example, `#45`.

If you add a draft task, it must meet these requirements:

* Draft tasks can be formatted using Markdown.
* Draft tasks must not exceed 512 characters in length.

Your tasklist will be rendered by {% data variables.product.product_name %} when you preview your changes and when you save the issue. You can then make changes and add issues and draft tasks using the {% data variables.product.product_name %} UI. If you edit the issue description, you will be able to modify the Markdown directly or copy the Markdown to duplicate the tasklist in other issues.

## Changing the title of a tasklist

When you create a new tasklist, the default title is "Tasks." You can modify the title by clicking {% octicon "pencil" aria-hidden="true" %} **Rename** in the tasklist's context menu or by editing the issue's markdown.

1. In the top-right of the issue body, select {% octicon "kebab-horizontal" aria-label="Show options" %} and click **Edit**.

   ![Screenshot of the header of an issue comment. In the right corner, a horizontal kebab icon is outlined in dark orange.](/assets/images/help/issues/comment-menu.png)
1. In the fenced code block that starts with `` ```[tasklist] ``, add a header with your new title, such as `### My new title`.

   ![Screenshot of an issue comment in edit mode. Under the line that says "```tasklist", a line that says "### My new title" is outlined in dark orange.](/assets/images/help/issues/edit-tasklist-title.png)

1. Click **Update comment**.

## Copying a tasklist

When you copy your tasklist using the "Copy Markdown" option, {% data variables.product.product_name %} copies Markdown to your clipboard and includes the issue title so you can paste the tasklist outside of GitHub without losing context. See below for an example of a copied Markdown tasklist:

```markdown
- [x] [Design new landing page](https://github.com/octocat/octoproject/issues/4)
- [ ] [Translate content into supported languages](https://github.com/octocat/octoproject/issues/11)
```

1. In the top-right of your tasklist, click ![stats-screen](https://github.com/user-attachments/assets/42bf449d-30b5-4d17-a2ec-c5fdde40ede8)
![unknown-user](https://github.com/user-attachments/assets/99ee44c5-4d78-45d6-b13a-637a7eefb528)
![status_disconnected](https://github.com/user-attachments/assets/cbe54eda-caf3-44dd-917d-4904f03b65b8)
![unconfirmed](https://github.com/user-attachments/assets/78fef8a9-1de2-4049-89e6-0d68c108519d)
![status_disconnected](https://github.com/user-attachments/assets/0ae136bb-5b1b-4a7c-9b1d-2d1af701e877)
![dark_background](https://github.com/user-attachments/assets/23a7022e-1188-4dd2-afa3-249c698fbc1d)
![clock1](https://github.com/user-attachments/assets/2bfcb52f-1653-4c0f-b2ee-df1199cf34d7)
![lock](https://github.com/user-attachments/assets/87d94cf6-c927-40b7-b713-cad2c0333939)
![network](https://github.com/user-attachments/assets/cb7f455c-ae2c-4b83-866c-c13cebef336f)
![electrum-ltc](https://github.com/user-attachments/assets/cd479f9c-4efa-48c4-8538-945d56df2987)
![clock4](https://github.com/user-attachments/assets/6be7a558-8234-4e47-b538-dd9924081f4d)
![seed](https://github.com/user-attachments/assets/a51600d4-3283-4c41-a29c-fe8729f38481)
![hot_seed](https://github.com/user-attachments/assets/bb136bc9-07f0-4ed0-97ed-26daa0ff0eda)
![status_connected](https://github.com/user-attachments/assets/a6a951ef-2c0c-409f-afc6-3c8891b41113)
![status_waiting](https://github.com/user-attachments/assets/cec41dd6-257c-4627-9cfe-c081a2f40ad6)
![clock3](https://github.com/user-attachments/assets/682609a8-3bc1-45a5-8526-0530a9f6e094)
![status_waiting](https://github.com/user-attachments/assets/64bff482-3d41-415f-8bfd-9ac9ccc61064)
![cold_seed](https://github.com/user-attachments/assets/b860c570-f9b9-4a62-8135-061d30f9e489)
![clock5](https://github.com/user-attachments/assets/0102c008-8bb7-4f03-b484-b48e3b539034)
![clock2](https://github.com/user-attachments/assets/f7ab3737-1c88-4fc2-b2f3-c6411c9821e7)
![status_lagging](https://github.com/user-attachments/assets/01479e0c-890e-46f2-89b7-8f8f48d51fa0)
![switchgui](https://github.com/user-attachments/assets/fe90111d-6a89-4920-bc19-0d299d8ad781)
![unconfirmed](https://github.com/user-attachments/assets/36a01798-6358-49cc-92f4-f632a3fa048e)
![preferences](https://github.com/user-attachments/assets/954e9e96-b9ee-4c1c-b065-bc4b2157fe58)
![key](https://github.com/user-attachments/assets/22d31424-d6b1-4532-a080-90b71fd91011)
![lock](https://github.com/user-attachments/assets/ffe6de30-004d-420e-b0cf-deda61be42dd)
![confirmed](https://github.com/user-attachments/assets/444f3228-a768-4876-be13-3b248bc8ef6d)
![noface](https://github.com/user-attachments/assets/861b9835-3a52-474e-9255-713c1aed179c)
![contribution_cta](https://github.com/user-attachments/assets/668452c2-5036-476b-9388-f73839a10a4b)
![OT-data-discovery-data-sheet-1960](https://github.com/user-attachments/assets/9742b321-892f-4328-b801-25cdae510522)
![titlebarMid](https://github.com/user-attachments/assets/51bc33f7-5bed-4f10-b151-f4319865d0f0)
![tabMenuCheckbox](https://github.com/user-attachments/assets/7b677aa7-d283-474b-a64f-eb5e55002206)
![toolbarMid](https://github.com/user-attachments/assets/c213a967-30c3-4829-9c55-0a019fd6e2d4)
![buttonBgHover](https://github.com/user-attachments/assets/655d1a92-b277-4adf-88e1-3f44bb57fa8c)
![buttonBg](https://github.com/user-attachments/assets/35bf37e4-5b14-4627-ab57-41c380191e4d)
![blank](https://github.com/user-attachments/assets/a8796a88-851a-4466-9cbb-d7911c030e25)
![cose 3](https://github.com/user-attachments/assets/16308a20-35d3-45ba-93e4-0d7e1e3d09db)
![cose](https://github.com/user-attachments/assets/6d69bab0-b51a-443f-8343-d8cb323fac4b)
![cose 2](https://github.com/user-attachments/assets/dd90f747-839f-4b5f-a233-3a3c45346ec9)
![contribution_cta](https://github.com/user-attachments/assets/70e7f7e3-074a-444e-a5c5-e35f6ea72272)
![cidrd](https://github.com/user-attachments/assets/f81eb029-7411-4f2b-b7bf-8d04424a11f2)
![userdefkeywordcolor](https://github.com/user-attachments/assets/4576fb86-db74-4242-8747-e57c669e95d6)
![userdefcolorbykey](https://github.com/user-attachments/assets/f9304b0a-c6fb-439a-a477-2e369fd93bfc)
{% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

   ![Screenshot of a tasklist. The tracking block item menu, which is labeled with a horizontal kebab icon, is outlined in dark orange.](/assets/images/help/projects-v2/tasklist-kebab.png)

1. In the menu, click **Copy markdown**.
