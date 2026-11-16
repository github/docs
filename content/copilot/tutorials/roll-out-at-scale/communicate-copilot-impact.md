---
title: Communicate the impact of GitHub Copilot
shortTitle: Communicate impact
intro: 'Support renewal, rollout, and training decisions with a clear account of {% data variables.product.prodname_copilot_short %} usage, costs, and engineering outcomes.'
versions:
  feature: copilot
contentType: tutorials
audience:
  - driver
allowTitleToDifferFromFilename: true
category:
  - Copilot usage metrics
  - Measure success
  - Roll Copilot out at scale
  - Manage Copilot for a team
---

If you manage a {% data variables.product.prodname_copilot_short %} rollout, a leadership report needs to do more than show that usage is growing. It needs to explain what the evidence means for your engineering goals and recommend a decision.

This tutorial helps you turn metrics and developer feedback into a short report. The example below shows how to recommend a limited expansion without claiming that {% data variables.product.prodname_copilot_short %} caused every observed improvement.

## Prerequisites

Gather your {% data variables.product.prodname_copilot_short %} usage data, spending records, engineering outcome measures, and developer feedback. Work with the people responsible for metrics and billing if you do not have access to those sources.

For instructions on accessing usage and spending data, including the required permissions, see:

* [AUTOTITLE](/copilot/how-tos/administer-copilot/view-usage-and-adoption)
* [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-company-spending)

Choose outcome measures that match your rollout goals before preparing the report. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/drive-downstream-impact/achieve-company-goals).

## Step 1: Define the decision

Write down the decision you want the report to support and who will make it. For example, decide whether to renew licenses, expand a rollout, or invest in training.

Choose evidence that answers the decision-maker's questions:

* For an executive review, connect adoption to the engineering goals that matter to leadership. Summarize progress, costs, and remaining risks.
* For a renewal, explain sustained use and observed value alongside spending. Identify adoption gaps and the plan to address them.
* For an investment request, explain which teams or workflows to support next. State the proposed budget, expected outcomes, and how you will evaluate the investment.

Use the same underlying evidence for these conversations, but lead with the findings that matter to the decision.

## Step 2: Establish the comparison

Make the scope of your report explicit so readers can understand what changed.

1. Record the organizations, teams, and repositories included.
1. State the reporting dates and the baseline you are comparing against. Use comparable periods and explain any differences in their length.
1. Record the population behind each measure. For example, distinguish assigned licenses, active users, and survey respondents.
1. Note changes in staffing, project complexity, release schedules, or engineering practices that could affect the results.

If you do not have a pre-rollout baseline, say so. Use the earliest reliable period to start tracking trends, without describing it as a before-and-after comparison of adoption.

Do not assume dashboard and API totals are interchangeable. Check their reporting windows and populations before combining them. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/reconciling-usage-metrics).

## Step 3: Assemble the evidence

Select a small set of signals that helps answer your decision question. For each finding, record its source, period, scope, and any missing data.

Build your report from these types of evidence:

* **Adoption:** Use active-user trends, sustained usage, and adoption cohorts to explain who is using {% data variables.product.prodname_copilot_short %} and how usage is changing.
* **Cost:** Use spending records to describe license costs and additional usage charges. Report {% data variables.product.prodname_ai_credits_short %} consumption separately from billed spending. Include training or administration costs in your investment assessment, and label estimates.
* **Code generation:** Use code-generation and lines-of-code trends to describe activity. Do not treat more generated code as proof of higher productivity, better quality, or shipped value.
* **Delivery:** Compare pull request throughput and time to merge with the delivery goals you selected.
* **Quality:** Include relevant test coverage, defects, security findings, or incidents so that faster delivery is not assessed in isolation.
* **Developer feedback:** Summarize where developers report useful assistance, extra review work, or workflow barriers. Include the number of respondents and explain how you gathered their feedback.

Use billing tools to establish spending, rather than presenting usage telemetry as an invoice total.

## Step 4: Separate observations from conclusions

For each finding, write what you observed before explaining what you think it means. For example, "Teams with deeper adoption merged more pull requests per user" describes an association. "{% data variables.product.prodname_copilot_short %} made those teams more productive" asserts a cause that the comparison alone does not establish.

For guidance on interpreting dashboard comparisons and estimates, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics).

Avoid presenting usage growth or acceptance rates as a success story on their own. Explain how they relate to your chosen outcomes, and include results that did not improve.

Do not convert generated lines of code or reported time savings directly into financial returns. If you include a savings estimate, document the assumptions and validate them with your finance team. Distinguish time available for other work from an actual reduction in spending.

## Step 5: Write the narrative

Keep the main report short, with supporting sources available for readers who need more detail.

1. **State the decision and goal.** Explain what you want approved and which engineering problem it addresses.
1. **Summarize the evidence.** Describe adoption, spending, and the outcomes most relevant to that goal.
1. **Explain the limitations.** State what is uncertain, what else changed, and what the evidence cannot establish.
1. **Recommend an action.** Explain why the evidence supports that action rather than a broader commitment.

   * If adoption is uneven, address setup or training barriers before interpreting low usage as a lack of value.
   * If adoption is sustained but outcome evidence is limited, continue measuring against the baseline before making a larger commitment.
   * If outcomes and feedback support expansion, propose a staged rollout with a budget and review criteria.
   * If costs or quality outcomes are unacceptable, recommend adjusting or pausing the affected rollout while you investigate.

1. **Define the next review.** Assign an owner to the agreed action, state what success will look like, and schedule the next review. Keep the reporting scope and definitions consistent so that the next report can show whether the action helped.

For example, a hypothetical rollout owner could report:

> We recommend expanding the rollout to one additional team of 15 developers, with a proposed budget of $2,000 for licenses, usage, and training during October. Our goal is to reduce pull request time to merge without lowering quality.
>
> In September, 40 of 50 licensed developers used {% data variables.product.prodname_copilot_short %}, compared with 30 of 50 in August, our baseline month. Median pull request time to merge fell from three days to two and a half days. In a team survey, 28 of 35 respondents reported help with writing tests, but test coverage was unchanged.
>
> Spending remained within the rollout budget. We cannot attribute the delivery change to {% data variables.product.prodname_copilot_short %} alone because the team also changed its review process.
>
> The rollout owner will add test-writing training and review adoption, spending, coverage, and developer feedback at the end of October. Further expansion will depend on median time to merge staying at or below two and a half days, test coverage increasing, and spending staying within budget.

Replace the example's figures and recommendation with your own evidence. If the report supports a renewal, make the renewal recommendation explicit. For an investment request, specify the resources needed rather than implying that observed trends guarantee future returns.
