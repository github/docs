---
title: Interpreting the code quality results for your repository
shortTitle: Interpret results
allowTitleToDifferFromFilename: true
intro: View {% data variables.product.prodname_code_quality %} findings for your default branch.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
topics:
  - Code Quality
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/interpret-results
---

{% data reusables.code-quality.code-quality-preview-note %}

## Prerequisites

* {% data variables.product.prodname_code_quality_short %} is enabled, see [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).

## Viewing the full backlog of code quality results

{% data reusables.code-quality.dashboard-navigation-repo %}
{% data reusables.code-quality.dashboard-all-findings %}

Alternatively, if you want to view AI-powered findings for the most recently changed files, see [AUTOTITLE](/code-security/code-quality/tutorials/improve-recent-merges).

## Exploring the backlog for your repository

The "{% data variables.code-quality.all_findings %}" dashboard shows all the results found by {% data variables.product.prodname_codeql %} analysis on the default branch of your repository. This view helps you visualize the full backlog of quality results and prioritize work to fix specific types of problems.

The overview, at the top of the page, summarizes the maintainability and reliability of the codebase.

![Screenshot of the "{% data variables.code-quality.all_findings %}" dashboard for code quality results. The summary is outlined in dark orange.](/assets/images/help/code-quality/all-findings-overview-repo.png)

Underneath the overview, the full list of results is shown with a header with filters that you can use to focus on a specific set of findings. The results are:

   * Grouped by the rule that detected each finding
   * Within each rule, ordered by file path alphabetically

Explore the results by expanding a rule to list the affected files and clicking on the name of a rule to see full details of the findings.

![Screenshot of the Rules table on the "{% data variables.code-quality.all_findings %}" dashboard for code quality. The "Overwritten property" rule name is outlined in dark orange.](/assets/images/help/code-quality/all-findings-rules-repo.png)

## Interpreting ratings and metrics

Code quality results should always be interpreted in the context of your repository. For example:

* Small repositories, or repositories with only a small amount of code written in supported languages, tend to have few results and good ratings.
* Repositories with a lot of generated code may have many maintenance results, lowering the rating for maintainability. This is not a problem if the source code itself is maintainable.
* Large repositories with a lot of code in a fully supported language often have many results even if the majority of the code has good maintainability and reliability standards.

To learn more about the metrics and how the ratings are calculated, see [AUTOTITLE](/code-security/code-quality/reference/metrics-and-ratings).

## Next steps

* Remediate quality findings in your default branch and improve the maintainability and reliability rating for your repository. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-your-codebase).
* Stop your repository from accumulating more code quality problems by setting a quality threshold for pull requests using rulesets. See [AUTOTITLE](/code-security/code-quality/how-tos/set-pr-thresholds).
