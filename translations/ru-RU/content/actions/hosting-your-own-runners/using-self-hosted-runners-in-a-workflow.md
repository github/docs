---
title: Using self-hosted runners in a workflow
intro: 'To use self-hosted runners in a workflow, you can use labels to specify the runner type for a job.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

For information on creating custom and default labels, see "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)."

### Using self-hosted runners in a workflow

Labels allow you to send workflow jobs to specific types of self-hosted runners, based on their shared characteristics. For example, if your job requires a particular hardware component or software package, you can assign a custom label to a runner and then configure your job to only execute on runners with that label.

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

### Using default labels to route jobs

A self-hosted runner automatically receives certain labels when it is added to {% data variables.product.prodname_actions %}. These are used to indicate its operating system and hardware platform:

* `self-hosted`: Default label applied to all self-hosted runners.
* `linux`, `windows`, or `macOS`: Applied depending on operating system.
* `x86`, `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

You can use your workflow's YAML to send jobs to a combination of these labels. In this example, a self-hosted runner that matches all three labels will be eligible to run the job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - Run this job on a self-hosted runner.
- `linux` - Only use a Linux-based runner.
- `ARM64` - Only use a runner based on ARM64 hardware.

The default labels are fixed and cannot be changed or removed. Consider using custom labels if you need more control over job routing.

### Using custom labels to route jobs

You can create custom labels and assign them to your self-hosted runners at any time. Custom labels let you send jobs to particular types of self-hosted runners, based on how they're labeled.

For example, if you have a job that requires a specific type of graphics hardware, you can create a custom label called `gpu` and assign it to the runners that have the hardware installed. A self-hosted runner that matches all the assigned labels will then be eligible to run the job.

This example shows a job that combines default and custom labels:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - Run this job on a self-hosted runner.
- `linux` - Only use a Linux-based runner.
- `x64` - Only use a runner based on x64 hardware.
- `gpu` - This custom label has been manually assigned to self-hosted runners with the GPU hardware installed.

These labels operate cumulatively, so a self-hosted runner’s labels must match all four to be eligible to process the job.

### Routing precedence for self-hosted runners

When routing a job to a self-hosted runner, {% data variables.product.prodname_dotcom %} looks for a runner that matches the job's `runs-on` labels:

1. {% data variables.product.prodname_dotcom %} first searches for a runner at the repository level, then at the organization level{% if currentVersion ver_gt "enterprise-server@2.21" %}, then at the enterprise level{% endif %}.
2. The job is then sent to the first matching runner that is online and idle.
   - If all matching online runners are busy, the job will queue at the level with the highest number of matching online runners.
   - If all matching runners are offline, the job will queue at the level with the highest number of matching offline runners.
   - If there are no matching runners at any level, the job will fail.
   - If the job remains queued for more than 24 hours, the job will fail.
