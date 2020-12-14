---
title: View autograding results
intro: You can see results from autograding within the repository for your assignment.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
---

### About autograding

Your teacher can configure tests that automatically check your work when you push to an assignment repository on {% data variables.product.product_location %}.

If you're a student and your instructor has configured autograding for your assignment in {% data variables.product.prodname_classroom %}, you'll find autograding test results throughout your assignment repository. If all tests succeed for a commit, you'll see a green checkmark. If any tests fail for a commit, you'll see a red X. You can see detailed logs by clicking the green checkmark or red X.

### Viewing autograding results for an assignment repository

{% data variables.product.prodname_classroom %} uses {% data variables.product.prodname_actions %} to run autograding tests. For more information about viewing the logs for an autograding test, see "[Using workflow run logs](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)."

The **Actions** tab shows the full history of test runs.

!["Actions" tab with "All workflows" selected](/assets/images/help/classroom/autograding-actions-tab.png)

You can click a specific test run to review log output, like compilation errors and test failures.

![The "{% data variables.product.prodname_classroom %}  Autograding Workflow" test results logs in {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

### Further reading

- "[About status checks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
