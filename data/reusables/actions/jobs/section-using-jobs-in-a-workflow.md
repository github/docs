A workflow run is made up of one or more `jobs`, which run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the `jobs.<job_id>.needs` keyword.

Each job runs in a runner environment specified by `runs-on`.

You can run an unlimited number of jobs as long as you are within the workflow usage limits. For more information, see "[AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#usage-limits)" for self-hosted runner usage limits.

If you need to find the unique identifier of a job running in a workflow run, you can use the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API. For more information, see "[AUTOTITLE](/rest/actions#workflow-jobs)."
