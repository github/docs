![61077DEE-0A0C-4738-B0CF-CB91B5463737](https://user-images.githubusercontent.com/85616681/121336527-9f458280-c8e9-11eb-9c26-dcd7382f694c.jpeg)
![CE4B38E8-629E-4EAA-BE6C-F8480CE213DB](https://user-images.githubusercontent.com/85616681/121336547-a2d90980-c8e9-11eb-8d91-8a97b9e0a644.png)
![4D336786-1323-46A4-BEA7-73F3FCDE4557](https://user-images.githubusercontent.com/85616681/121336571-a79dbd80-c8e9-11eb-835d-9fe688e573e5.jpeg)
![CF212028-C1E6-48BE-86FF-0A1ED3547A93](https://user-images.githubusercontent.com/85616681/121336579-a8ceea80-c8e9-11eb-98db-3466dc1d6611.jpeg)
![632D9DA7-7423-48C4-996C-FDA654785A4B](https://user-images.githubusercontent.com/85616681/121336586-aa98ae00-c8e9-11eb-9f55-2e76958a175a.png)
![833922B3-CDC4-4258-8CAB-5DE79DC9450E](https://user-images.githubusercontent.com/85616681/121336604-aec4cb80-c8e9-11eb-9ada-0838db87649a.jpeg)
![1B434272-5AC4-42AB-BA5B-F793535DE459](https://user-images.githubusercontent.com/85616681/121336618-b2f0e900-c8e9-11eb-90e0-a59606574d56.jpeg)
![3E686DD3-4800-49A5-9F5B-F34E9170DF1C](https://user-images.githubusercontent.com/85616681/121336626-b4221600-c8e9-11eb-9822-7d41e4c4f23b.jpeg)
![670BB7CA-E263-4969-98A9-261FA99DBD75](https://user-images.githubusercontent.com/85616681/121336634-b5534300-c8e9-11eb-9199-bbf9a644ba51.png)
![0FE7D91D-7309-42BF-9273-6C4F64B64D17](https://user-images.githubusercontent.com/85616681/121336636-b71d0680-c8e9-11eb-86cb-9f38a6410e5b.jpeg)
![2C859254-19A9-44D1-B139-AB72D3FFB8C2](https://user-images.githubusercontent.com/85616681/121336643-b84e3380-c8e9-11eb-98c7-38a976a803b8.jpeg)
![24E98805-AA9C-43E8-8EAE-1173BBC42C27](https://user-images.githubusercontent.com/85616681/121336651-bab08d80-c8e9-11eb-93c2-9bcde550f71d.png)
![Uploading 1860AA6C-AEFE-449C-95EE-DFFC5D9D047E.jpeg…]()
---
title: GitHub Enterprise Server releases
intro: 'Documentation for the currently supported and previously deprecated versions of {{ site.data.variables.product.prodname_ghe_server }}.'
allowTitleToDifferFromFilename: true
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

## Currently supported

See [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) for information about the latest release.

{% for supportedRelease in enterpriseServerReleases.supported %}
- [{% data variables.product.prodname_ghe_server %} {{supportedRelease}}](/enterprise-server@{{supportedRelease}})
{% endfor %}

## Deprecated

Documentation for deprecated versions remains available but is no longer maintained.

{% for deprecatedRelease in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
- [Enterprise Server {{deprecatedRelease}}](/enterprise-server@{{deprecatedRelease}})
{% endfor %}

{% for deprecatedReleaseLegacyFormat in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
- [Enterprise Server {{deprecatedReleaseLegacyFormat}}](/enterprise/{{deprecatedReleaseLegacyFormat}})
{% endfor %}

## Deprecated developer documentation

Developer documentation for deprecated versions remains available but is no longer maintained.

{% for deprecatedDevRelease in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
- [Enterprise Server {{deprecatedDevRelease}}](https://developer.github.com/enterprise/{{deprecatedDevRelease}})
{% endfor %}
