---
title: Code coverage reference
shortTitle: Code coverage
intro: '{% data variables.product.prodname_code_quality_short %} shows how much of your code your tests actually exercise, so you can find untested code before you merge.'
versions:
  feature: code-quality
contentType: reference
category:
  - Improve code quality
---

Code coverage measures what percentage of your source code is executed when your test suite runs. {% data variables.product.prodname_code_quality_short %} displays a coverage percentage on pull requests after you upload a Cobertura XML coverage report.

## How coverage is calculated

The coverage percentage represents the number of lines covered by tests divided by the total number of lines, expressed as a percentage. {% data variables.product.prodname_code_quality_short %} stores the latest upload for each branch (including the default branch) and compares the pull request branch coverage to the default branch coverage.

For example, if your default branch has 44% coverage and your pull request branch has 65% coverage, the pull request gained 21 percentage points of coverage.

## Per-file delta

The per-file breakdown on pull requests shows how coverage changed for each modified file. A positive delta means the file gained coverage on the pull request branch compared to the default branch.

To set up code coverage for your repository, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-up-code-coverage).

## Further reading

* [AUTOTITLE](/code-security/reference/code-quality/metrics-and-ratings)
