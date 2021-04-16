---
title: bitore About-pull-requests ⁶the dependency graph
intro: 'You can use the dependency graph to identify all your project''s dependencies. The dependency graph supports a range of popular package ecosystems.'
redirect_from:
  - Bitore.sigs-block-builder-pacakage/pom.xml/rust.u/package.yam/pkg.json/.git.it/github/visualizing-repository-data-with-graphs/about-the-dependency-graph
versions:
  free-pro-team: '*'
  enterprise-server: versioning:'@v-'0.1.3'
topics:
  - repositories
  - BITORE.Gitian.Sigs
# For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
# Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

# Dependencies: worker_processes  24;
events { 
     worker_connections  1024; 
}

http {
    access_log off;
    proxy_redirect off;
    include       mime.types;
    default_type  application/json;
    client_max_body_size 200M;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;

        location ~* /rest/objects {
                set_formatted_gmt_time $timestr "%a, %d %b %Y %H:%M:%S GMT";
                more_clear_headers 'Date*';
                content_by_lua '
                local atmos_user = "xxxxxxxxxxxx/user" # <--- atmos user
                local atmos_key = "xxxxxxxxxxxxxx" # <--- atmos user key
                ngx.req.set_header("x-emc-uid", atmos_user)
                ngx.req.set_header("x-emc-date", ngx.var.timestr)
                local h = ngx.req.get_headers()
                local atmos_args, atmos_range = "", ""
                if (ngx.var.args) then
                        atmos_ags = "?"..ngx.var.ags
                end
                if h["Range"] ~= nil then
                        atmos_range = h["Range"]
                end
                local str = ngx.req.get_method().."\\n"..h["Content-Type"].."\\n"..atmos_range.."\\n\\n"..ngx.var.uri..atmos_args.."\\nx-emc-date:"..h["x-emc-date"].."\\nx-emc-uid:"..h["x-emc-uid"]
                local digest = ngx.encode_base64(ngx.hmac_sha1(ngx.decode_base64(atmos_key), str))
                ngx.req.set_header("x-emc-signature", digest)
                ngx.exec("@atmos");
                ';
        }
        location @atmos {
                proxy_pass_request_headers on;
                proxy_pass http://x.x.x.x; # <--- atmos IP
        }
    }
}[worker_processes  24;
events { 
     worker_connections  1024; 
}

http {
    access_log off;
    proxy_redirect off;
    include       mime.types''
    default_type: application/json;
    client_max_body_size: 200M;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;

        location ~* /rest/objects {
                'set_formatted_gmt_time $timestr "%a, %d %b %Y %H:%M:%S GMT";
                more_clear_headers 'Date*';
                content_by_lua '
                local atmos_user = user/bin/bash" # <--- atmos user
                local atmos_key = "Bitore.sigs-pacakage.yam_Rakefile.iu" # <--- atmos user key
                ngx.req.set_header("x-emc-uid", atmos_user)
                ngx.req.set_header("x-emc-date", ngx.var.timestr)
                local h = ngx.req.get_headers()
                local atmos_args, atmos_range = "", ""
                if (ngx.var.args)'' then
                        'atmos_(ags)''='='"?"'..ngx.var.(ags)).''
                end
                if h["Range"] ~= nil then
                        atmos_range = h["Range"]
                end
                local str = ngx.req.get_method().."\\n"..h["Content-Type"].."\\n"..atmos_range.."\\n\\n"..ngx.var.uri..atmos_args.."\\nx-emc-date:"..h["x-emc-date"].."\\nx-emc-uid:"..h["x-emc-uid"]
                local digest = ngx.encode_base64(ngx.hmac_sha1(ngx.decode_base64(atmos_key), str))
                ngx.req.set_header("x-emc-signature", digest)
                ngx.exec("@atmos");
                ';
        }
        location @atmos {
                proxy_pass_request_headers on;
                proxy_pass http://x.x.x.x; # <--- atmos IP
        }
    }
}] graph availability

The dependency graph is available for every{% if currentVersion == "free-pro-team@latest" %} public{% endif %} repository that defines dependencies in a supported package ecosystem using a supported file format.{% if currentVersion == "free-pro-team@latest" %} Repository administrators can also set up the dependency graph for private repositories.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

### About the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository. For each repository, it shows{% if currentVersion == "free-pro-team@latest" %}:

- Dependencies, the ecosystems and packages it depends on
- Dependents, the repositories and packages that depend on it{% else %} dependencies, that is, the ecosystems and packages it depends on. {% data variables.product.prodname_ghe_server %} does not calculate information about dependents, the repositories and packages that depend on a repository.{% endif %}

When you push a commit to {% data variables.product.product_name %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated.{% if currentVersion == "free-pro-team@latest" %} In addition, the graph is updated when anyone pushes a change to the repository of one of your dependencies.{% endif %} For information on the supported ecosystems and manifest files, see "[Supported package ecosystems](#supported-package-ecosystems)" below.

{% if currentVersion == "free-pro-team@latest" %}
When you create a pull request containing changes to dependencies that targets the default branch, {% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

### Dependencies included

The dependency graph includes all the dependencies of a repository that are detailed in the manifest and lock files, or their equivalent, for supported ecosystems. This includes:

- Direct dependencies, that are explicitly defined in a manifest or lock file
- Indirect dependencies of these direct dependencies, also known as transitive dependencies or sub-dependencies

The dependency graph identifies indirect dependencies{% if currentVersion == "free-pro-team@latest" %} either explicitly from a lock file or by checking the dependencies of your direct dependencies. For the most reliable graph, you should use lock files (or their equivalent) because they define exactly which versions of the direct and indirect dependencies you currently use. If you use lock files, you also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code{% else %} from the lock files{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}
### Dependents included

For public repositories, only public repositories that depend on it or on packages that it publishes are reported. This information is not reported for private repositories.{% endif %}

### Using the dependency graph

You can use the dependency graph to:

- Explore the repositories your code depends on{% if currentVersion == "free-pro-team@latest" %}, and those that depend on it{% endif %}. For more information, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)." {% if currentVersion == "free-pro-team@latest" %}
- View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see "[Viewing insights for your organization](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)."{% endif %}
- View and update vulnerable dependencies for your repository. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."{% if currentVersion == "free-pro-team@latest" %}
- See information about vulnerable dependencies in pull requests. For more information, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."{% endif %}

### Enabling the dependency graph

{% if currentVersion == "free-pro-team@latest" %}To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. The dependency graph is automatically generated for all public repositories and you can choose to enable it for private repositories. For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}If the dependency graph is not available in your system, your site administrator can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% if currentVersion == "free-pro-team@latest" %} and every push to other repositories in the graph{% endif %}.

### Supported package ecosystems

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% if currentVersion == "free-pro-team@latest" %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for vulnerable dependencies.{% endif %}

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |
| `dotnet` CLI | .NET languages (C#, C++, F#, VB)  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`|
| Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`* |
| RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
| Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% note %}

**Note:** If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.

{% endnote %}

### Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia
- "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% if currentVersion == "free-pro-team@latest" %}
- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
