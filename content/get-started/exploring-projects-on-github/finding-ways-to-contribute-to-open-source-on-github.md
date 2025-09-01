---
title: Finding ways to contribute to open source on GitHub
intro: 'You can find ways to contribute to open source projects on {% data variables.product.prodname_dotcom %} that are relevant to you.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-interact %}'
redirect_from:
  - /articles/where-can-i-find-open-source-projects-to-work-on
  - /articles/finding-interesting-projects-on-github
  - /articles/about-official-github-mirrors
  - /articles/about-github-mirrors
  - /articles/finding-open-source-projects-on-github
  - /github/getting-started-with-github/finding-open-source-projects-on-github
  - /github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github
  - /github/getting-started-with-github/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Open Source
shortTitle: Finding open source projects
---

Open source software powers much of the technology you use daily, from the web browser on your screen to the [NASA Ingenuity helicopter that flew on Mars](https://github.com/readme/featured/nasa-ingenuity-helicopter).

Contributing to open source software allows you to build upon your technical expertise, boost your portfolio, help shape the future of technology, and connect with developers across the globe.

## Discovering relevant projects

With the vast array of available open source projects spanning numerous domains and technologies, finding where to begin your contribution journey can seem overwhelming. If you have open source software that you use daily, that's a great place to get started! {% data variables.product.github %} also provides several tools that can help narrow down your search to a project that fits your domain.

### Using {% data variables.copilot.copilot_chat_short %} to find open source projects

You can use {% data variables.copilot.copilot_chat_short %} to help find open source repositories that match an area you want to improve or boost your skills in.

Open [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot) and start a general purpose chat. In this example, we'll ask {% data variables.product.prodname_copilot_short %} to find open source projects written in the Python programming language.

```text copy
 I'm looking for a list of open source projects written in Python that are accepting new contributors. Narrow down the list to repositories that use the `good first issue` or `help wanted` labels and have over 100 stars on GitHub.
```

Using the `good first issue` and `help wanted` labels in the search will help {% data variables.product.prodname_copilot_short %} filter for repositories that open for first-time contributors. After searching, {% data variables.product.prodname_copilot_short %} will provide a link to a full list of repositories with those labels in the context of your search.

### Using other resources to find projects to contribute to

If there's a particular topic that interests you, visit `github.com/topics/<topic>`. For example, if you are interested in machine learning, you can find relevant projects and good first issues by visiting https://github.com/topics/machine-learning. You can also search for repositories that match a topic you're interested in. See [AUTOTITLE](/search-github/searching-on-github/searching-for-repositories#search-by-topic). You can browse popular repositories of the day by visiting [Trending](https://github.com/trending).

If you're interested in contributing to projects that **reduce the carbon emissions of software**, review [{% data variables.product.github %}'s Green Software Directory](https://github.com/github/GreenSoftwareDirectory).

If you've been active on {% data variables.product.prodname_dotcom %}, you can find personalized recommendations for projects and good first issues based on your past contributions, stars, and other activities in [Explore {% data variables.product.prodname_dotcom %}](https://github.com/explore).

## Checking if the repository is actively maintained

Before getting started contributing to an open source repository, it's recommended to check if the repository is being actively maintained. {% data variables.product.prodname_copilot_short %} can analyze a repository and tell you about its recent activity.

1. On the {% data variables.product.prodname_dotcom %} website, go to the repository you want to chat about.
1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** {% data variables.product.prodname_copilot %} icon at the top right of the page.
   The full-page, immersive, mode {% data variables.copilot.copilot_chat %} is displayed. The heading at the top of the chat panel will show the name of the repository as an attachment.
1. In the prompt box, type "Is this repository being actively maintained?" and press <kbd>Enter</kbd>.  {% data variables.product.prodname_copilot_short %} replies in the chat panel.

You can also visit the **Pulse** view under the **Insights** tab in the repository to get an overview of recent activity. See the [`github/docs` Pulse](https://github.com/github/docs/pulse) for an example of what an active open source project looks like.

## Finding ways to contribute

There are many ways to contribute to open source projects.

* **Looking through the issue tracker**: Look for bugs that need fixing or reproduction, feature requests, or documentation improvements. Many open source projects use the `good first issue` or `help wanted` labels to make it easier for new contributors to find issues to work on.
* **Testing a pull request**: You can contribute by merging a pull request into your local copy of the project and testing the changes. Add the outcome of your testing in a comment on the pull request.
* **Installing and testing the project**: As you use an open source project, note any bugs, usability issues, or missing features you encounter. Sharing these pain points can provide valuable feedback to other contributors.
* **Improving the documentation**: Documentation improvements are almost always welcome, and can be an excellent way to start contributing while learning the project.
* **Adding tests**: Many projects need better test coverage, which helps you learn the codebase while adding value.

Each open source project will have a different approach to how they want to accept contributions. If you're looking to add a new feature or have discovered a bug, you'll want to open an issue outlining your proposed approach before investing significant development time. This can save effort by aligning with maintainer expectations early on.

Remember that non-code contributions like improving documentation, design, or community support are just as valuable as code contributions, and often have a lower barrier to entry.

## Next steps

Now that you've found an open source project to work on and have learned about different ways to contribute, you are ready to make your first contribution. Head over to [AUTOTITLE](/get-started/exploring-projects-on-github/contributing-to-open-source) to walk through the end-to-end process of making a contribution.
