---
title: Achieving your company's engineering goals with GitHub Copilot
shortTitle: Achieve company goals
intro: Plan your rollout based on GitHub's recommended approach for driving and measuring improvements.
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/get-started/achieve-engineering-goals
  - /copilot/get-started/achieve-company-goals
contentType: tutorials
category:
  - Manage Copilot for a team
---

When your company rolls out a new tool such as {% data variables.product.prodname_copilot %}, you will want to measure the impact of the tool on your engineering systems and assess the tool's contribution to your company's goals.

{% data variables.product.company_short %}'s [Engineering System Success Playbook](https://resources.github.com/engineering-system-success-playbook/) (ESSP) provides strategies and metrics for driving meaningful and measurable improvements. The playbook recommends a three-step process for solving engineering challenges:

1. Identify the current barriers to success.
1. Evaluate what needs to be done to achieve your goals.
1. Implement your changes, monitor results, and adjust.

## Define your goals

Choose an engineering outcome before deciding which {% data variables.product.prodname_copilot_short %} metrics to track. Usage and adoption signals show only whether people are **using** the tool. Outcome measures from your engineering systems and developer feedback help you assess whether the changes you want are actually occurring.

Start with one or two goals and communicate them to your teams. Record a baseline before changing your rollout. Use the existing guidance for each goal to plan training and select outcome measures.

Usage signals do not identify whether a particular interaction produced a test, fixed a vulnerability, or prevented an incident. Use them to understand adoption alongside your outcome measures, not as a substitute for those measures. For example, more generated code does not establish better test coverage, and a higher acceptance rate does not establish code quality or developer satisfaction.

### Increase test coverage

If gaps in testing are delaying releases or reducing confidence, track line and branch coverage from your continuous integration reports. Also track time spent writing tests and developer confidence. Compare these outcomes with chat and agent usage trends among participating teams. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/increase-test-coverage).

### Accelerate pull requests

If review delays are slowing delivery, track pull request lead time and review cycles, while checking for defects after deployment. Use adoption cohorts, pull requests merged per user, and time to merge in the impact dashboard to explore how adoption relates to delivery. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/accelerate-pull-requests).

### Reduce security debt

If unresolved vulnerabilities are accumulating, track the security alert backlog and time to remediate in security overview. Consider agent and code review usage trends among teams working on remediation alongside these outcomes. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/reduce-security-debt).

### Improve code quality

If maintainability or reliability problems are increasing, review organization-level code health and open findings over time in {% data variables.product.prodname_code_quality_short %}. Compare these with adoption and feature usage trends among the teams working on those problems. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/explore-code-quality).

Keep the set of analyzed repositories consistent. Open finding counts can change when analysis is enabled on more repositories or findings are dismissed, not only when code is improved.

### Reduce production incidents

If refactoring and maintenance work aims to improve stability, track production incidents related to the refactored code using your incident records. Review those results alongside usage trends among teams using {% data variables.product.prodname_copilot_short %} for that work. See [AUTOTITLE](/copilot/tutorials/reduce-technical-debt#quality-metrics).

### Improve developer experience

If your goal is to reduce workflow friction, gather feedback on usefulness, trust, and satisfaction through surveys or retrospectives. Use sustained usage, feature adoption, and acceptance rate trends to identify questions to explore with developers, rather than inferring satisfaction from activity alone. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/measure-success#step-4-incorporate-qualitative-feedback).

## Compare results responsibly

Use the same comparison approach each time you review progress:

1. **Align the scope and period.** Compare usage and outcomes for the same teams and reporting dates. Record the repositories and tools included, and keep metric definitions consistent with your baseline.

   The impact dashboard compares users in different adoption cohorts, not the same users before and after adoption. Differences between cohorts can reflect their work or experience as well as their use of {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics#reviewing-the-adoption-multiplier).

1. **Check what else changed.** Record changes in staffing, project complexity, release schedules, training, or engineering practices. These can affect outcomes independently of {% data variables.product.prodname_copilot_short %}.
1. **Check quality alongside speed.** If pull requests merge faster, also review defects, incidents, and developer feedback. Increased output alone does not establish an improvement in engineering outcomes.
1. **Investigate before attributing results.** Review trends over multiple periods and ask teams how they used {% data variables.product.prodname_copilot_short %}. Describe observed changes as associations unless you have additional evidence that supports a causal conclusion.

Use the combined findings to choose a next action. For example, if test coverage is unchanged despite growing usage, ask teams whether they are using {% data variables.product.prodname_copilot_short %} to write tests. Address any training or workflow barriers before expanding that approach.
