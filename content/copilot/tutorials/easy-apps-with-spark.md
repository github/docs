---
title: Building your first app in minutes with GitHub Spark
shortTitle: Easy apps with Spark
intro: 'Learn how to use {% data variables.product.prodname_spark %} to quickly create and deploy an app without writing any code.'
allowTitleToDifferFromFilename: true
versions:
  feature: spark
product: 'Anyone with a {% data variables.copilot.copilot_pro_plus_short %} license can use {% data variables.product.prodname_spark_short %}.'
redirect_from:
  - /copilot/tutorials/building-your-first-app-in-minutes-with-github-spark
contentType: tutorials
---

Have you ever had a great idea for an app, but you didn't have the tools to build it? With the help of AI, you can now bring your app ideas to life in minutes using only natural language. In this article, we'll use {% data variables.product.prodname_spark %} to build, improve, and share a word search app without writing a single line of code ourselves.

> [!NOTE]
> {% data reusables.spark.preview-note-spark %}

## Creating a prototype of your app

Let's start by generating an initial, basic version of our app that we can build on later.

1. Navigate to https://github.com/spark.
1. Send the following prompt to generate the first iteration of your app:

    ```text copy
    Please create a word search game. The game should take in a set of words from the user, then create a word search puzzle containing those words, as well as a word bank listing the words. Words in the puzzle can be horizontal, vertical, diagonal, forwards, and backwards, and are "found" when the user clicks and drags their mouse across them. Once all words are found, give the user the option to create a new puzzle.
    ```

1. Watch as {% data variables.product.prodname_spark_short %} builds your app in real time! You'll know the app is done generating when the preview appears.
1. To test your app, create and solve a puzzle using the preview.

## Improving your app

Just like that, we have a working app! However, it still needs some tweaks. Let's give {% data variables.product.prodname_spark_short %} some additional prompts to polish our project.

1. At the left side of the page, in the **Iterate** tab, send the following prompt:

    ```text copy
    Please add a leaderboard and a timer to the game. The timer should start when the user generates a new puzzle, then stop when all words are found. The user should then be able to enter their name, and their name, time, and the number of words in their puzzle should be displayed on the leaderboard. The leaderboard should be sortable in ascending and descending order by each of the three categories.
    ```

1. Once the app is updated, create and solve another puzzle to see the new features in action.
1. Get creative and make your own improvements to the app! If you're feeling stuck, pick one of the suggestions {% data variables.product.prodname_spark_short %} provides above the prompt text box. You can also make changes using the visual editing controls in the "Theme", "Data", and "Prompts" tabs, without ever having to touch code.

## Debugging your app

While you're building your app, you may encounter some errors. Often, {% data variables.product.prodname_spark_short %} will identify these issues and list them in an "Errors" pop up above the prompt text box. To fix the errors, click **Fix all**.

![Screenshot of errors identified by {% data variables.product.prodname_spark %}. The "Fix all" button is outlined in orange.](/assets/images/help/copilot/spark-fix-all-errors.png)

If you find an error that {% data variables.product.prodname_spark_short %} itself didn't flag, write a prompt to fix it. For best results, provide a detailed description of the error, as well as the ideal fixed state. For example, if you notice that adding words over a certain number of characters causes the puzzle to render incorrectly, send the following prompt:

```text copy
Please prevent users from entering words longer than the number of rows or columns in the puzzle. Additionally, add an option to change the size of a puzzle. If the user tries to enter a word that's longer than the current size of the puzzle, display an error message telling them that provided words must be less than or equal to the size of the puzzle.
```

## Sharing your app

Now that you're happy with your app, let's deploy it so you can share it with others.

> [!NOTE]
> If you make your spark accessible to all {% data variables.product.github %} users, all users will be able to access and edit the data stored in your spark. Make sure to delete any private or sensitive data from your app prior to making it visible to other users.

1. In the top-right corner of the page, click **Publish**.
By default, your spark is deployed as private and only accessible to you. To let other {% data variables.product.github %} users access your app, in the **Visibility** section of the publication dropdown, choose {% octicon "id-badge" aria-hidden="true" aria-label="id-badge" %} **All {% data variables.product.github %} users**. This allows anyone with a {% data variables.product.github %} account to access your spark.

    ![Screenshot of the {% data variables.product.prodname_spark %} publication menu. The "All {% data variables.product.github %} users" visibility option is outlined in orange.](/assets/images/help/copilot/spark-github-user-visibility.png)

1. Click **View site** {% octicon "link-external" aria-hidden="true" aria-label="link-external" %} to see your deployed app, then copy and share your app's URL.

## Next steps

We just created a word search app, but {% data variables.product.prodname_spark_short %} can make all kinds of web apps! Try [creating a new app](https://github.com/spark) on your own. If you need some inspiration, here are a few ideas to get you started:

* Try building a **news aggregator app** or an **intelligent recipe generator**.
* Build a **budget tracker** that lets you set a budget, takes in a list of expenses, and displays your total remaining budget. You can give each expense a category and date, then sort the expenses by the many different categories.

## Further reading

* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark)
* [AUTOTITLE](/copilot/concepts/copilot-billing/about-billing-for-github-spark)
