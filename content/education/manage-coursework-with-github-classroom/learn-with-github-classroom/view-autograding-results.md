---
title: View autograding results
intro: You can see results from autograding within the repository for your assignment.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
---
## About autograding

Your teacher can configure tests that automatically check your work when you push to an assignment repository on {% data variables.location.product_location %}.

If you're a student and your instructor has configured autograding for your assignment in {% data variables.product.prodname_classroom %}, you'll find autograding test results throughout your assignment repository. If all tests succeed for a commit, you'll see a green checkmark. If any tests fail for a commit, you'll see a red X. You can see detailed logs by clicking the green checkmark or red X.

## Viewing autograding results for an assignment repository

{% data variables.product.prodname_classroom %} uses {% data variables.product.prodname_actions %} to run autograding tests. For more information about viewing the logs for an autograding test, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)."

The **Actions** tab shows the full history of test runs.

![Screenshot of the "Actions" tab with "All workflows" option in the left sidebar selected.](/assets/images/help/classroom/autograding-actions-tab.png)

You can click a specific test run to review log output, like compilation errors and test failures.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)"
