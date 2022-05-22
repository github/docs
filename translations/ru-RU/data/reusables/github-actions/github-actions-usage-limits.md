There are some limits on {% data variables.product.prodname_actions %} usage, and will vary depending on whether you use {% data variables.product.prodname_dotcom %}-hosted or self-hosted runners. These limits are subject to change.

- **Job execution time** - Each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails to complete. This limit does not apply to self-hosted runners.
- **Workflow run time** - Each workflow run is limited to 72 hours. If a workflow run reaches this limit, the workflow run is cancelled. This limit also applies to self-hosted runners.
- **Job queue time** - Each job for self-hosted runners can be queued for a maximum of 24 hours. If a self-hosted runner does not start executing the job within this limit, the job is terminated and fails to complete. This limit does not apply to {% data variables.product.prodname_dotcom %}-hosted runners.
- **API requests** - You can execute up to 1000 API requests in an hour across all actions within a repository. If exceeded, additional API calls will fail, which might cause jobs to fail. This limit also applies to self-hosted runners.
- **Concurrent jobs** - The number of concurrent jobs you can run in your account depends on your GitHub plan, as indicated in the following table. If exceeded, any additional jobs are queued. There are no concurrency limits for self-hosted runners.

  | GitHub plan | Total concurrent jobs | Maximum concurrent macOS jobs |
  | ----------- | --------------------- | ----------------------------- |
  | Бесплатные  | 20                    | 5                             |
  | Pro         | 40                    | 5                             |
  | Team        | 60                    | 5                             |
  | Enterprise  | 180                   | 50                            |
- **Job matrix** - {% data reusables.github-actions.matrix-limits %}
