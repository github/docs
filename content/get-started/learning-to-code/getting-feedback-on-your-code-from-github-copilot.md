---
title: Getting feedback on your code from GitHub Copilot
shortTitle: Getting feedback on your code
intro: "Learn how you can ask {% data variables.product.prodname_copilot %} to review your code changes and apply the suggested changes it creates."
versions:
  fpt: '*'
topics:
  - Copilot
  - Pull requests
  - GitHub
  - Open Source
---

## About coding collaboratively

When you're working with others on {% data variables.product.github %}, you typically make your changes in a branch or fork of the main project and then submit them as a pull request. A pull request shows the differences between the original code and your changes, and invites the repository maintainer to merge your code into the project.

Getting feedback on your pull request from others is an important part of the software development process. Pull request reviews improve the specific code you're working on, and also improves your coding and collaboration skills over time. Sometimes, especially when you're learning to code, you may not always have someone to ask for feedback. In those cases, you can get feedback and all its benefits from {% data variables.product.prodname_copilot %} instead.

A pull request is a collaborative place where you can show other people the changes you're proposing and get feedback. When you request a review from Copilot, you'll be learning the same process that you'll use use when working with development teams. The only difference is you'll also be requesting reviews from human colleagues alongside Copilot.

>[!NOTE]
>{% data variables.copilot.copilot_code-review_short %} on the {% data variables.product.github %} website is a premium feature, available with the {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans. For more information about how using {% data variables.copilot.copilot_code-review_short %} affects your quotas, see [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review#code-review-monthly-quota). If you're a student, you may be able to get {% data variables.copilot.copilot_pro_short %} for free, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer).

## 1. Creating the practice repository

In this exercise, you’ll use a sample repository with existing code. The sample repository is [`new2code/grid-toy`](https://github.com/new2code/grid-toy), a small HTML and JavaScript project that displays a grid of color-changing squares. This is a {% data variables.product.prodname_pages %} site and you can view the original version at https://new2code.github.io/grid-toy.

Get started by creating your own copy of the `grid-toy` repository.

1. Navigate to the [new repository page](https://github.com/new?template_owner=new2code&template_name=grid-toy). Following this link will pre-select the template on the `new2code` account.
1. Under "Owner", select your user account.
1. In the "Repository name" field, type "grid-toy".
1. Click **Create repository**.

## 2. Making a change

Next, you’ll make a change to the JavaScript file.

1. In your new repository, click **`script.js`** in the file list.
1. To edit the JavaScript file, at the top-right, click {% octicon "pencil" aria-label="Edit this file" %}.
1. On line 25, add the following code:

   ```javascript copy
   if (Math.random() < INVERT_PROBABILITY) {
      cell.classes.add("black");
   }
   ```

   This change randomly sets some grid squares to black when the page loads. There's a deliberate error to trigger feedback from {% data variables.product.prodname_copilot %}: the correct property is
   actually `.classList` and not `.classes`. {% data variables.product.prodname_copilot %} should help us fix this.
1. To commit the change, at the top-right, click **Commit changes...**
1. In the "Commit message" field, enter something like "Randomly set squares on load".
1. Select **Create a new branch for this commit and start a pull request**.
1. Click **Propose changes**.

## 3. Creating a pull request and requesting a review

Now complete the pull request and request a review.

1. Type a title and, optionally, a description for your pull request.
1. Click **Reviewers**.
   * If Copilot appears in the suggested list, click "Copilot".
   * If not, start typing "Copilot", then click the result.
1. Click **Create pull request**.

You’ll be taken to your new pull request.

## 4. Applying a suggested change

Within a few minutes, {% data variables.product.prodname_copilot %} will review your pull request, produce a summary, and create suggested changes for any problems found.

1. Wait for the review from {% data variables.product.prodname_copilot %} to appear.
1. One of these suggestions should correct the intentional error from earlier by changing `.classes` to `.classList`. Below the suggested change, click **Commit suggestion**.

   ![Screenshot of a suggested change from {% data variables.product.prodname_copilot %}. The "Commit suggestion" button is highlighted in an orange outline.](/assets/images/help/copilot/copilot-gridtoy-change.png)

1. Click **Commit changes**.
1. It's possible that {% data variables.product.prodname_copilot %} found other improvements and left additional comments. If you understand the changes suggested, you can apply these too.

## 5. Merging

Once you're happy with the changes, you can merge the pull request. This adds the changes from your branch to the repository’s default branch (`main`).

1. At the bottom of the page, click **Merge pull request**.
1. Optionally, update the commit message.
1. Press **Confirm merge**.

## Next steps

The project can be published using {% data variables.product.prodname_pages %}. Now you've made some changes, you could publish your version of the repository to see it in action. See [AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
