There are 2 locations in the `dependabot.yml` file where you can use the `registries` key:

* At the top level, where you define the registries and their access information, if needed.
* Within the `updates` blocks, where you can use `registries: "*"` to tell {% data variables.product.prodname_dependabot %} to use any or all of the registries you defined at the top level.

```yaml
# registries: gradle-artifactory - provides access details for the gradle-artifactory registry
# registries: "*" - allows {% data variables.product.prodname_dependabot %} to use all the defined registries specified at the top level

{% raw %}
version: 2
registries:
  gradle-artifactory:
    type: maven-repository
    url: https://acme.jfrog.io/artifactory/my-gradle-registry
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
updates:
  - package-ecosystem: "gradle"
    directory: "/"
    registries: "*"
    schedule:
      interval: "monthly"
{% endraw %}
```
