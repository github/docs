<!--When making updates to this text, remember to keep the text general. It is used in the end-to-end Supply chain guides -->

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When Dependabot discovers vulnerabilities in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application. 

If a patched version is available, you can generate a Dependabot pull request to update this dependency directly from a Dependabot alert. If you have Dependabot security updates enabled, the linked pull request will be shown in the Dependabot alert. 

In cases where a patched version is not available, or you can’t update to the secure version, Dependabot shares additional information to help you determine next steps. For example, you should consider how you’re using any impacted functions from the dependency, which are surfaced for supported languages in Dependabot alerts. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security vulnerability.
