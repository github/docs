The files in the specified output directory contain the results of the audit. See the `audit_summary.md` file for a summary of the audit results.

The audit summary has the following sections.

#### Pipelines

The "Pipelines" section contains a high-level statistics regarding the conversion rate done by {% data variables.product.prodname_actions_importer %}.

Listed below are some key terms that can appear in the "Pipelines" section:

* **Successful** pipelines had 100% of the pipeline constructs and individual items converted automatically to their {% data variables.product.prodname_actions %} equivalent.
* **Partially successful** pipelines had all of the pipeline constructs converted, however, there were some individual items that were not converted automatically to their {% data variables.product.prodname_actions %} equivalent.
* **Unsupported** pipelines are definition types that are not supported by {% data variables.product.prodname_actions_importer %}.
* **Failed** pipelines encountered a fatal error when being converted. This can occur for one of three reasons:
  * The pipeline was originally misconfigured and not valid.
  * {% data variables.product.prodname_actions_importer %} encountered an internal error when converting it.
  * There was an unsuccessful network response that caused the pipeline to be inaccessible, which is often due to invalid credentials.

#### Build steps

The "Build steps" section contains an overview of individual build steps that are used across all pipelines, and how many were automatically converted by {% data variables.product.prodname_actions_importer %}.

Listed below are some key terms that can appear in the "Build steps" section:

* A **known** build step is a step that was automatically converted to an equivalent action.
* An **unknown** build step is a step that was not automatically converted to an equivalent action.
* An **unsupported** build step is a step that is either:
  * Fundamentally not supported by {% data variables.product.prodname_actions %}.
  * Configured in a way that is incompatible with {% data variables.product.prodname_actions %}.
* An **action** is a list of the actions that were used in the converted workflows. This can be important for:
  * If you use {% data variables.product.prodname_ghe_server %}, gathering the list of actions to sync to your instance.
  * Defining an organization-level allowlist of actions that are used. This list of actions is a comprehensive list of actions that your security or compliance teams may need to review.

#### Manual tasks

The "Manual tasks" section contains an overview of tasks that {% data variables.product.prodname_actions_importer %} is not able to complete automatically, and that you must complete manually.

Listed below are some key terms that can appear in the "Manual tasks" section:

* A **secret** is a repository or organization-level secret that is used in the converted pipelines. These secrets must be created manually in {% data variables.product.prodname_actions %} for these pipelines to function properly. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."
* A **self-hosted runner** refers to a label of a runner that is referenced in a converted pipeline that is not a {% data variables.product.prodname_dotcom %}-hosted runner. You will need to manually define these runners for these pipelines to function properly.

#### Files

The final section of the audit report provides a manifest of all the files that were written to disk during the audit.

Each pipeline file has a variety of files included in the audit, including:

* The original pipeline as it was defined in {% data variables.product.prodname_dotcom %}.
* Any network responses used to convert the pipeline.
* The converted workflow file.
* Stack traces that can be used to troubleshoot a failed pipeline conversion.

Additionally, the `workflow_usage.csv` file contains a comma-separated list of all actions, secrets, and runners that are used by each successfully converted pipeline. This can be useful for determining which workflows use which actions, secrets, or runners, and can be useful for performing security reviews.
