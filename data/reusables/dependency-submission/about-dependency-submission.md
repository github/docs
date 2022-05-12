The Dependency submission API lets you submit dependencies for a project to generate a dependency graph. This enables you to generate a dependency graph for projects 
that resolve dependencies when the software is built or compiled. Submitted dependencies will receive {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_security_updates %} for any known vulnerabilities.

Projects that declare their dependencies in a file that is committed to the repository (for example, a `package-lock.json` file in a JavaScript project) do not need to use the Dependency submission API in order to generate a dependency graph. However, these projects can still use the Dependency submission API.
