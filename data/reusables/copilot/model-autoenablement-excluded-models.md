The default policy applies to models that you have not explicitly configured. These models are indicated in your enterprise or organization's model settings with the **Delegate to Default Policy** label. When a new model is released, it inherits the default until you explicitly configure it.

The following models are **not** in scope. They are disabled by default, regardless of your "Default availability" policy setting.

* Pre-GA models
* Open weight models (DeepSeek, {% data variables.copilot.copilot_kimi_k27_code %}, {% data variables.copilot.copilot_kimi_k3 %})
* Models that are not covered by {% data variables.product.company_short %}'s data retention agreement ({% data variables.copilot.copilot_claude_fable_5 %})
* For enterprises that have restricted models to data-resident or FedRAMP-compliant models, any models that do not respect these policies
