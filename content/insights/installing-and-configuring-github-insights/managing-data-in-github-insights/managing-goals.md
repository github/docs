---
title: Managing goals
intro: You can use goals to set targets for key metrics and measure success reaching those targets.
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-goals
  - /insights/installing-and-configuring-github-insights/managing-goals
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can manage goals.'
versions:
  ghes: '*'
---
## About goals

Goals are targets that you can set for key metrics to measure your team's success. When you set a goal for a key metric, you can see how your team's performance compares to the goal using the goal line on charts and the success rate metric. For example, you can set the goal for `code review turnaround time` to 4 hours. A goal line on the key metric chart shows which code reviews achieved the goal and which did not. If your team completed one half of code reviews in less than 4 hours, your `success rate` will be 50%.

Goals are only available in key metrics. Some reports also show which work, such as individual pull requests, did not meet your goal. For more information, see "[Viewing key metrics and reports](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)."

Goals cannot be created or deleted. When you edit a goal, the new goal applies to everyone using your {% data variables.product.prodname_insights %} application.

## Editing a goal

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
1. To the right of the goal, click {% octicon "gear" aria-label="The gear icon" %}.
  ![Gear icon to edit goal](/assets/images/help/insights/edit-goal.png)
2. In the text field, type a new goal value.
  ![Goal value field](/assets/images/help/insights/input-goal.png)
3. Click **Save**.
  ![Save goal](/assets/images/help/insights/save-goal.png)
