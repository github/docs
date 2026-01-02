---
title: Script injections
intro: Understand the security risks associated with script injections and {% data variables.product.prodname_actions %} workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Understanding the risk of script injections

When creating workflows, [custom actions](/actions/creating-actions/about-custom-actions), and [composite actions](/actions/creating-actions/creating-a-composite-action), you should always consider whether your code might execute untrusted input from attackers. This can occur when an attacker adds malicious commands and scripts to a context. When your workflow runs, those strings might be interpreted as code which is then executed on the runner.

Attackers can add their own malicious content to the [`github` context](/actions/learn-github-actions/contexts#github-context), which should be treated as potentially untrusted input. These contexts typically end with `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref`, and `title`. For example: `github.event.issue.title`, or `github.event.pull_request.body`.

You should ensure that these values do not flow directly into workflows, actions, API calls, or anywhere else where they could be interpreted as executable code. By adopting the same defensive programming posture you would use for any other privileged application code, you can help security harden your use of {% data variables.product.prodname_actions %}. For information on some of the steps an attacker could take, see [AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner).

In addition, there are other less obvious sources of potentially untrusted input, such as branch names and email addresses, which can be quite flexible in terms of their permitted content. For example, `zzz";echo${IFS}"hello";#` would be a valid branch name and would be a possible attack vector for a target repository.

The following sections explain how you can help mitigate the risk of script injection.

### Example of a script injection attack

A script injection attack can occur directly within a workflow's inline script. In the following example, an action uses an expression to test the validity of a pull request title, but also adds the risk of script injection:

{% raw %}

```yaml
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```

{% endraw %}

This example is vulnerable to script injection because the `run` command executes within a temporary shell script on the runner. Before the shell script is run, the expressions inside {% raw %}`${{ }}`{% endraw %} are evaluated and then substituted with the resulting values, which can make it vulnerable to shell command injection.

To inject commands into this workflow, the attacker could create a pull request with a title of `a"; ls $GITHUB_WORKSPACE"`:

![Screenshot of the title of a pull request in edit mode. A new title has been entered in the field: a"; ls $GITHUB_WORKSPACE".](/assets/images/help/actions/example-script-injection-pr-title.png)

In this example, the `"` character is used to interrupt the {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %} statement, allowing the `ls` command to be executed on the runner. You can see the output of the `ls` command in the log:

```shell
Run title="a"; ls $GITHUB_WORKSPACE""
README.md
code.yml
example.js
```

For best practices keeping runners secure, see [AUTOTITLE](/actions/reference/secure-use-reference#good-practices-for-mitigating-script-injection-attacks).
