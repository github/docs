<!-- expires 2026-08-26 -->

New and existing unconfigured models will follow the default set in the policy. Unconfigured models are:

<!-- end expires 2026-08-26 -->

* At the enterprise level, models that have not been added to the models list on the models configuration page.
* At the organization level, models that have been made "optional" by an enterprise administrator, and that an organization owner has not explicitly enabled or disabled. (**Does not apply** if you are opted in to the enterprise teams model access preview.)

When a new model is released, it is unconfigured by default.

The following models are **not** eligible for default enablement, regardless of whether they are new or existing:

* Models that have been explicitly disabled
* Pre-GA models
* Open weight models (DeepSeek, {% data variables.copilot.copilot_kimi_k27_code %})
* Models that are not covered by {% data variables.product.company_short %}'s data retention agreement ({% data variables.copilot.copilot_claude_fable_5 %})
* For enterprises that have restricted models to data-resident or FedRAMP-compliant models, any models that do not respect these policies
