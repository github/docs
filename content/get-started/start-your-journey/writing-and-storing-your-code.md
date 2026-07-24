---
title: 'Writing and storing your code'
shortTitle: 'Write and store code'
intro: 'Follow the core developer workflow to create a branch, write code, and open a pull request using {% data variables.product.prodname_copilot_short %} and {% data variables.product.prodname_desktop %}.'
category:
  - Learn to code
contentType: get-started
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

Now you'll build the website feature you planned: a page that lists starred repositories. Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request.

## Prerequisites

* A local clone of your `stargazers-log` repository. If you haven't set this up yet, see [AUTOTITLE](/get-started/start-your-journey/connecting-to-your-code-locally).

## Creating a branch

A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready.

1. Open {% data variables.product.prodname_desktop %}.
1. At the top of the app, click **Current Branch**, then click **New Branch**.
1. Name the branch `add-starred-list`, then click **Create Branch**.
1. Click **Publish branch** to make the branch available on {% data variables.product.github %}.

## Building the website's code

Your feature needs a few files: sample data, a stylesheet, a script to display the data, and an updated home page.

You can write these files yourself or ask {% data variables.product.prodname_copilot_short %}, an AI assistant, to generate them. Every {% data variables.product.github %} account includes access to {% data variables.copilot.copilot_free %} and an allowance of AI credits, so you can start using {% data variables.product.prodname_copilot_short %} right away.

To learn about the {% data variables.product.prodname_copilot_short %} plans available and how usage works, see [AUTOTITLE]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/copilot/get-started/plans){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

Open {% data variables.copilot.copilot_chat_short %} in your editor and ask it to create the files with a prompt like the following.

<!-- markdownlint-disable search-replace -->
```text copy
Create a starred repositories page for my software project. Add:
- events.json with sample data for a few starred repositories
- style.css to style a simple list
- script.js to fetch events.json and render the list
- an update to index.html that links style.css and script.js

Use the code written in https://docs.github.com/get-started/start-your-journey/creating-and-changing-your-code.
```
<!-- markdownlint-enable search-replace -->

<a href="vscode://GitHub.Copilot-Chat?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline" aria-label="Open Copilot Chat in Visual Studio Code">
<span>Open {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}
</a><br><br>

Review what {% data variables.product.prodname_copilot_short %} generates, then adjust the files to match the examples below.

If you didn't use {% data variables.product.prodname_copilot_short %}, use your code editor to create the files below in the `add-starred-list` branch.

1. Create a file named `events.json` with the following sample data. Save the file.

   ```json copy
   [
     { "name": "octocat/Hello-World", "starred": "2024-01-15" },
     { "name": "github/docs", "starred": "2024-02-02" },
     { "name": "octo-org/octo-repo", "starred": "2024-03-21" }
   ]
   ```

1. Create a file named `style.css` with the following styles. Save the file.

   ```scss copy
   body {
     font-family: sans-serif;
     margin: 2rem;
   }

   ul {
     list-style: none;
     padding: 0;
   }

   li {
     padding: 0.5rem 0;
     border-bottom: 1px solid #ddd;
   }
   ```

1. Create a file named `script.js` with the following code. Save the file.

   ```javascript copy
   fetch("events.json")
     .then((response) => response.json())
     .then((events) => {
       const list = document.querySelector("#starred");
       events.forEach((event) => {
         const item = document.createElement("li");
         item.textContent = `${event.name} — starred ${event.starred}`;
         list.appendChild(item);
       });
     });
   ```

1. Update `index.html` to link the new files and hold the list. Save the file.

   ```html copy
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <title>Stargazers log</title>
       <link rel="stylesheet" href="style.css">
     </head>
     <body>
       <h1>Stargazers log</h1>
       <p>A log of the repositories I've starred.</p>
       <ul id="starred"></ul>
       <script src="script.js"></script>
     </body>
   </html>
   ```

## Committing and pushing your changes

Committing saves a snapshot of your changes, and pushing sends them to {% data variables.product.github %} where they will be stored in your repository.

1. In {% data variables.product.prodname_desktop %}, review your changed files in the left sidebar.
1. At the bottom of the sidebar, in the **Summary** field, type a commit message such as `Add starred repositories list`.
1. Click **Commit 4 files to add-starred-list**.
1. Click **Push origin** to send your commit to {% data variables.product.github %}.

## Opening a pull request

A pull request proposes your branch's changes for review before they merge into `main`.

1. In {% data variables.product.prodname_desktop %}, click **Preview Pull Request**, then click **Create Pull Request**. Your browser opens to the pull request form on {% data variables.product.github %}.
1. Review the title and description, then add a note about what your feature does.
1. Click **Create pull request**.

## What you accomplished

| Task | Outcome |
| ---- | ------- |
| Created a branch | You made an isolated space for your feature with `add-starred-list`. |
| Wrote the code | You added the feature's files to your branch, with an optional assist from {% data variables.copilot.copilot_chat_short %}. |
| Pushed your changes | You stored your branch's changes on {% data variables.product.github %}. |
| Opened a pull request | You proposed your changes for review. |

## Further reading

* [AUTOTITLE]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/copilot/concepts/billing/individual-plans)
* [AUTOTITLE]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/copilot/concepts/billing/usage-based-billing-for-individuals)
* [AUTOTITLE]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/copilot/how-tos/manage-and-track-spending/monitor-ai-usage){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}

## Next steps

* Before you merge, review your own changes to catch issues early. Continue to [AUTOTITLE](/get-started/start-your-journey/reviewing-your-proposed-changes).
