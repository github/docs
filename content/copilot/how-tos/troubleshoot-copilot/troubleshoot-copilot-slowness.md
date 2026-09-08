---
title: Troubleshooting slow responses from GitHub Copilot
intro: Troubleshooting help for slow responses from {% data variables.product.prodname_copilot %}.
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Troubleshoot slow responses
redirect_from:
  - /copilot/troubleshooting-github-copilot/troubleshooting-copilot-slowness
  - /copilot/how-tos/troubleshoot/troubleshooting-copilot-slowness
  - /copilot/how-tos/troubleshoot/troubleshoot-copilot-slowness
contentType: how-tos
category:
  - Troubleshooting Copilot
---

## About the problem

If {% data variables.product.prodname_copilot %} is responding more slowly than expected, the problem may be related to network conditions, local system performance, editor configuration, or connectivity restrictions such as proxies or firewalls. Because {% data variables.product.prodname_copilot_short %} relies on remote services to generate responses, issues that affect communication with {% data variables.product.github %} services can reduce responsiveness or cause delays. The troubleshooting steps below can help you determine whether the problem is caused by your environment or by a broader service issue.

If {% data variables.product.prodname_copilot_short %} is responding slowly, work through the following troubleshooting steps.

## Check your internet connection 

Make sure you have a stable, high-speed internet connection. Slow or inconsistent connectivity can increase latency and affect how quickly {% data variables.product.prodname_copilot_short %} returns responses.

## Check the GitHub status page  
   
Visit the [GitHub status page](https://www.githubstatus.com/) to confirm whether there is an ongoing incident affecting {% data variables.product.prodname_copilot_short %} or related GitHub services.

## Update your editor and {% data variables.product.prodname_copilot_short %} extension 
   
Make sure your editor and the {% data variables.product.prodname_copilot_short %} extension or plugin are up to date. After updating, restart your editor.

## Check for extension conflicts
   
Temporarily disable other extensions or plugins, especially ones related to AI coding assistants, linting, formatting, or code analysis. Conflicts between extensions can sometimes affect editor responsiveness and make {% data variables.product.prodname_copilot_short %} appear slow.

## Try a smaller or simpler file
   
{% data variables.product.prodname_copilot_short %} may respond more slowly in very large files or in projects with high complexity. Test whether performance improves in a smaller file or after splitting large files into smaller units.

## Test in a new project or workspace

Open a new minimal project or workspace and test {% data variables.product.prodname_copilot_short %} there. If response times improve, the issue may be related to the size, dependencies, or configuration of your main project.

## Review system resource usage

Check CPU and memory usage on your machine. High system load or limited available resources can slow down your editor and affect how quickly {% data variables.product.prodname_copilot_short %} responds.

## Check proxy, VPN, and firewall settings

If you use a proxy, VPN, firewall, or security software that inspects web traffic, verify that it is not blocking or interfering with connections required by {% data variables.product.prodname_copilot_short %}. If you work behind a corporate proxy or firewall, you may need to review your organization's network configuration and make sure to follow [AUTOTITLE](/copilot/how-tos/troubleshoot-copilot/troubleshoot-firewall-settings).

## Review logs for errors or timeouts

Check your editor logs for errors, timeouts, or connectivity problems.

   * In **Visual Studio Code**, open the **Output** panel and select **GitHub Copilot** from the dropdown.
   * In **JetBrains IDEs**, open the logs from the **Help** menu.
   
For more information, see [AUTOTITLE](/copilot/how-tos/troubleshoot-copilot/view-logs?tool=vscode#viewing-and-collecting-log-files). Save any relevant logs if you need to report the problem.

## Try a different network or device

If possible, test {% data variables.product.prodname_copilot_short %} on a different network or another device. This can help determine whether the issue is specific to your current environment.

## Check GitHub Docs and known issues

Review [AUTOTITLE](/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues), similar reports, or environment-specific guidance.

## Contact GitHub Support with diagnostic details

If the problem persists, collect relevant diagnostic information before contacting GitHub Support. Include your editor and {% data variables.product.prodname_copilot_short %} extension or plugin versions, steps to reproduce the problem, example files if available, and any related log messages or errors.
