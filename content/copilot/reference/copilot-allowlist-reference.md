---
title: Copilot allowlist reference
intro: 'Learn how to allow certain traffic through your firewall or proxy server for {% data variables.product.prodname_copilot_short %} to work as intended in your organization.'
permissions: Proxy server maintainers or firewall maintainers
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Configure Copilot
redirect_from:
  - /copilot/reference/proxy-server-and-firewall-settings-for-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot
  - /copilot/how-tos/administer/organizations/configuring-your-proxy-server-or-firewall-for-copilot
  - /copilot/reference/allowlist-reference
contentType: reference
---

If your company employs security measures like a firewall or proxy server, you should add the following URLs, ports, and protocols to an allowlist to ensure {% data variables.product.prodname_copilot_short %} works as expected:

## {% data variables.product.github %} public URLs

| Domain and/or URL                                           | Purpose |
|:------------------------------------------------------------| :--------------------------------- |
| `https://github.com/login/*`                                | Authentication |
| `https://github.com/enterprises/YOUR-ENTERPRISE/*`          | Authentication for {% data variables.enterprise.prodname_managed_users %}, only required with {% data variables.product.prodname_emus %} |
| `https://api.github.com/user`                               | User Management |
| `https://api.github.com/copilot_internal/*`                 | User Management |
| `https://copilot-telemetry.githubusercontent.com/telemetry` | Telemetry |
| `https://collector.github.com/*`                            | Analytics telemetry |
| `https://default.exp-tas.com`                               | Telemetry |
| `https://copilot-proxy.githubusercontent.com`               | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://origin-tracker.githubusercontent.com`              | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.githubcopilot.com/*`[^1]                         | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.individual.githubcopilot.com`[^2]                | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.business.githubcopilot.com`[^3]                  | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.enterprise.githubcopilot.com`[^4]                | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.SUBDOMAIN.ghe.com`                                      | For {% data variables.product.prodname_copilot_short %} users on {% data variables.enterprise.data_residency_site %} |
| `https://SUBDOMAIN.ghe.com`                                        | For {% data variables.product.prodname_copilot_short %} users on {% data variables.enterprise.data_residency_site %} |

Depending on the security policies and editors your organization uses, you may need to allowlist additional domains and URLs. For more information on specific editors, see [Further reading](#further-reading).

Every user of the proxy server or firewall also needs to configure their own environment to connect to {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot).

## {% data variables.copilot.copilot_coding_agent %} recommended allowlist

The {% data variables.copilot.copilot_coding_agent %} includes a built-in firewall with a recommended allowlist that is enabled by default. The recommended allowlist allows access to:

* Common operating system package repositories (for example, Debian, Ubuntu, Red Hat).
* Common container registries (for example, Docker Hub, Azure Container Registry, AWS Elastic Container Registry).
* Packages registries used by popular programming languages (C#, Dart, Go, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, Rust, Swift).
* Common certificate authorities (to allow SSL certificates to be validated).
* Hosts used to download web browsers for the Playwright MCP server.

For more information about configuring the {% data variables.copilot.copilot_coding_agent %} firewall, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall).

The allowlist allows access to the following hosts:

### Azure Infrastructure: Metadata Service

* `168.63.129.16`

### Certificate Authorities: DigiCert

* `crl3.digicert.com`
* `crl4.digicert.com`
* `ocsp.digicert.com`

### Certificate Authorities: Symantec

* `ts-crl.ws.symantec.com`
* `ts-ocsp.ws.symantec.com`
* `s.symcb.com`
* `s.symcd.com`

### Certificate Authorities: GeoTrust

* `crl.geotrust.com`
* `ocsp.geotrust.com`

### Certificate Authorities: Thawte

* `crl.thawte.com`
* `ocsp.thawte.com`

### Certificate Authorities: VeriSign

* `crl.verisign.com`
* `ocsp.verisign.com`

### Certificate Authorities: GlobalSign

* `crl.globalsign.com`
* `ocsp.globalsign.com`

### Certificate Authorities: SSL.com

* `crls.ssl.com`
* `ocsp.ssl.com`

### Certificate Authorities: IdenTrust

* `crl.identrust.com`
* `ocsp.identrust.com`

### Certificate Authorities: Sectigo

* `crl.sectigo.com`
* `ocsp.sectigo.com`

### Certificate Authorities: UserTrust

* `crl.usertrust.com`
* `ocsp.usertrust.com`

### Container Registries: Docker

* `172.18.0.1`
* `ghcr.io`
* `registry.hub.docker.com`
* `*.docker.io`
* `*.docker.com`
* `production.cloudflare.docker.com`
* `auth.docker.io`
* `quay.io`
* `mcr.microsoft.com`
* `gcr.io`
* `public.ecr.aws`

### GitHub: Content & API

* `*.githubusercontent.com`
* `raw.githubusercontent.com`
* `objects.githubusercontent.com`
* `lfs.github.com`
* `github-cloud.githubusercontent.com`
* `github-cloud.s3.amazonaws.com`
* `codeload.github.com`
* `scanning-api.github.com`
* `api.mcp.github.com`
* `uploads.github.com/copilot/chat/attachments/`

### GitHub: Actions Artifact Storage

* `productionresultssa0.blob.core.windows.net`
* `productionresultssa1.blob.core.windows.net`
* `productionresultssa2.blob.core.windows.net`
* `productionresultssa3.blob.core.windows.net`
* `productionresultssa4.blob.core.windows.net`
* `productionresultssa5.blob.core.windows.net`
* `productionresultssa6.blob.core.windows.net`
* `productionresultssa7.blob.core.windows.net`
* `productionresultssa8.blob.core.windows.net`
* `productionresultssa9.blob.core.windows.net`
* `productionresultssa10.blob.core.windows.net`
* `productionresultssa11.blob.core.windows.net`
* `productionresultssa12.blob.core.windows.net`
* `productionresultssa13.blob.core.windows.net`
* `productionresultssa14.blob.core.windows.net`
* `productionresultssa15.blob.core.windows.net`
* `productionresultssa16.blob.core.windows.net`
* `productionresultssa17.blob.core.windows.net`
* `productionresultssa18.blob.core.windows.net`
* `productionresultssa19.blob.core.windows.net`

### Programming Languages & Package Managers: C# / .NET

* `nuget.org`
* `dist.nuget.org`
* `api.nuget.org`
* `nuget.pkg.github.com`
* `dotnet.microsoft.com`
* `pkgs.dev.azure.com`
* `builds.dotnet.microsoft.com`
* `dotnetcli.blob.core.windows.net`
* `nugetregistryv2prod.blob.core.windows.net`
* `azuresearch-usnc.nuget.org`
* `azuresearch-ussc.nuget.org`
* `dc.services.visualstudio.com`
* `dot.net`
* `download.visualstudio.microsoft.com`
* `dotnetcli.azureedge.net`
* `ci.dot.net`
* `www.microsoft.com`
* `oneocsp.microsoft.com`
* `www.microsoft.com/pkiops/crl/`

### Programming Languages & Package Managers: Dart

* `pub.dev`
* `pub.dartlang.org`
* `storage.googleapis.com/pub-packages/`
* `storage.googleapis.com/dart-archive/`

### Programming Languages & Package Managers: Go

* `go.dev`
* `golang.org`
* `proxy.golang.org`
* `sum.golang.org`
* `pkg.go.dev`
* `goproxy.io`
* `storage.googleapis.com/proxy-golang-org-prod/`

### Programming Languages & Package Managers: Haskell

* `haskell.org`
* `*.hackage.haskell.org`
* `get-ghcup.haskell.org`
* `downloads.haskell.org`

### Programming Languages & Package Managers: Java

* `www.java.com`
* `jdk.java.net`
* `api.adoptium.net`
* `adoptium.net`
* `search.maven.org`
* `maven.apache.org`
* `repo.maven.apache.org`
* `repo1.maven.org`
* `maven.pkg.github.com`
* `maven-central.storage-download.googleapis.com`
* `maven.google.com`
* `maven.oracle.com`
* `jcenter.bintray.com`
* `oss.sonatype.org`
* `repo.spring.io`
* `gradle.org`
* `services.gradle.org`
* `plugins.gradle.org`
* `plugins-artifacts.gradle.org`
* `repo.grails.org`
* `download.eclipse.org`
* `download.oracle.com`

### Programming Languages & Package Managers: Node.js / JavaScript

* `npmjs.org`
* `npmjs.com`
* `registry.npmjs.com`
* `registry.npmjs.org`
* `skimdb.npmjs.com`
* `npm.pkg.github.com`
* `api.npms.io`
* `nodejs.org`
* `yarnpkg.com`
* `registry.yarnpkg.com`
* `repo.yarnpkg.com`
* `deb.nodesource.com`
* `get.pnpm.io`
* `bun.sh`
* `deno.land`
* `registry.bower.io`
* `binaries.prisma.sh`

### Programming Languages & Package Managers: Perl

* `cpan.org`
* `www.cpan.org`
* `metacpan.org`
* `cpan.metacpan.org`

### Programming Languages & Package Managers: PHP

* `repo.packagist.org`
* `packagist.org`
* `getcomposer.org`

### Programming Languages & Package Managers: Python

* `pypi.python.org`
* `pypi.org`
* `pip.pypa.io`
* `*.pythonhosted.org`
* `files.pythonhosted.org`
* `bootstrap.pypa.io`
* `conda.binstar.org`
* `conda.anaconda.org`
* `binstar.org`
* `anaconda.org`
* `download.pytorch.org`
* `repo.continuum.io`
* `repo.anaconda.com`

### Programming Languages & Package Managers: Ruby

* `rubygems.org`
* `api.rubygems.org`
* `rubygems.pkg.github.com`
* `bundler.rubygems.org`
* `gems.rubyforge.org`
* `gems.rubyonrails.org`
* `index.rubygems.org`
* `cache.ruby-lang.org`
* `*.rvm.io`

### Programming Languages & Package Managers: Rust

* `crates.io`
* `index.crates.io`
* `static.crates.io`
* `sh.rustup.rs`
* `static.rust-lang.org`

### Programming Languages & Package Managers: Swift

* `download.swift.org`
* `swift.org`
* `cocoapods.org`
* `cdn.cocoapods.org`

### Infrastructure & Tools: HashiCorp

* `releases.hashicorp.com`
* `apt.releases.hashicorp.com`
* `yum.releases.hashicorp.com`
* `registry.terraform.io`

### Infrastructure & Tools: JSON Schema

* `json-schema.org`
* `json.schemastore.org`

### Infrastructure & Tools: Playwright

* `playwright.download.prss.microsoft.com`
* `cdn.playwright.dev`
* `playwright.azureedge.net`
* `playwright-akamai.azureedge.net`
* `playwright-verizon.azureedge.net`
* `storage.googleapis.com/chrome-for-testing-public`

### Linux Package Managers: Ubuntu

* `archive.ubuntu.com`
* `security.ubuntu.com`
* `ppa.launchpad.net`
* `keyserver.ubuntu.com`
* `azure.archive.ubuntu.com`
* `api.snapcraft.io`

### Linux Package Managers: Debian

* `deb.debian.org`
* `security.debian.org`
* `keyring.debian.org`
* `packages.debian.org`
* `debian.map.fastlydns.net`
* `apt.llvm.org`

### Linux Package Managers: Fedora

* `dl.fedoraproject.org`
* `mirrors.fedoraproject.org`
* `download.fedoraproject.org`

### Linux Package Managers: CentOS

* `mirror.centos.org`
* `vault.centos.org`

### Linux Package Managers: Alpine

* `dl-cdn.alpinelinux.org`
* `pkg.alpinelinux.org`

### Linux Package Managers: Arch

* `mirror.archlinux.org`
* `archlinux.org`

### Linux Package Managers: SUSE

* `download.opensuse.org`

### Linux Package Managers: Red Hat

* `cdn.redhat.com`

### Linux Package Managers: Common Package Sources

* `packagecloud.io`
* `packages.cloud.google.com`
* `packages.microsoft.com`

### Other

* `dl.k8s.io`
* `pkgs.k8s.io`

## Further reading

* [Network Connections in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/setup/network) in the {% data variables.product.prodname_vs %} documentation
* [Install and use {% data variables.product.prodname_vs %} and Azure Services behind a firewall or proxy server](https://learn.microsoft.com/en-us/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server) in the Microsoft documentation

[^1]: Allows access to authorized users regardless of {% data variables.product.prodname_copilot_short %} plan. Do not add this URL to your allowlist if you are using subscription-based network routing. For more information on subscription-based network routing, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/managing-github-copilot-access-to-your-enterprises-network).
[^2]: Allows access to authorized users via a {% data variables.copilot.copilot_individuals_short %} plan. Do not add this URL to your allowlist if you are using subscription-based network routing.
[^3]: Allows access to authorized users via a {% data variables.copilot.copilot_business_short %} plan. Do not add this URL to your allowlist if you want to use subscription-based network routing to block users from using {% data variables.copilot.copilot_business_short %} on your network.
[^4]: Allows access to authorized users via a {% data variables.copilot.copilot_enterprise_short %} plan. Do not add this URL to your allowlist if you want to use subscription-based network routing to block users from using {% data variables.copilot.copilot_enterprise_short %} on your network.
