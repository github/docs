---
title: Monitoring using SNMP
intro: '{% data variables.product.prodname_enterprise %} provides data on disk usage, CPU utilization, memory usage, and more over SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp/
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

SNMP is a common standard for monitoring devices over a network. We strongly recommend enabling SNMP so you can monitor the health of {% data variables.product.product_location %} and know when to add more memory, storage, or processor power to the host machine.

{% data variables.product.prodname_enterprise %} has a standard SNMP installation, so you can take advantage of the [many plugins](http://www.monitoring-plugins.org/doc/man/check_snmp.html) available for Nagios or for any other monitoring system.

### Configuring SNMP v2c

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. In the **Community string** field, enter a new community string. If left blank, this defaults to `public`.
![Field to add the community string](/assets/images/enterprise/management-console/community-string.png)
{% data reusables.enterprise_management_console.save-settings %}
5. Test your SNMP configuration by running the following command on a separate workstation with SNMP support in your network:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

This should return the system time on {% data variables.product.product_location %} host.

### User-based security

If you enable SNMP v3, you can take advantage of increased user based security through the User Security Model (USM). For each unique user, you can specify a security level:
- `noAuthNoPriv`: This security level provides no authentication and no privacy.
- `authNoPriv`: This security level provides authentication but no privacy. To query the appliance you'll need a username and password (that must be at least eight characters long). Information is sent without encryption, similar to SNMPv2. The authentication protocol can be either MD5 or SHA and defaults to SHA.
- `authPriv`: This security level provides authentication with privacy. Authentication, including a minimum eight-character authentication password, is required and responses are encrypted. A privacy password is not required, but if provided it must be at least eight characters long. If a privacy password isn't provided, the authentication password is used. The privacy protocol can be either DES or AES and defaults to AES.

### Configuring users for SNMP v3

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. Select **SNMP v3**.
![Button to enable SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. In "Username", type the unique username of your SNMP v3 user.
![Field to type the SNMP v3 username](/assets/images/enterprise/management-console/snmpv3-username.png)
6. In the **Security Level** dropdown menu, click the security level for your SNMP v3 user.
![Dropdown menu for the SNMP v3 user's security level](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. For SNMP v3 users with the `authnopriv` security level:
  ![Settings for the authnopriv security level](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. For SNMP v3 users with the `authpriv` security level:
  ![Settings for the authpriv security level](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - Optionally, in "Privacy password", type the privacy password.
    - On the right side of "Privacy password", in the **Protocol** dropdown menu, click the privacy protocol method you want to use.
9. Click **Add user**.
![Button to add SNMP v3 user](/assets/images/enterprise/management-console/snmpv3-adduser.png)
{% data reusables.enterprise_management_console.save-settings %}

##### Querying SNMP data

Both hardware and software-level information about your appliance is available with SNMP v3. Due to the lack of encryption and privacy for the `noAuthNoPriv` and `authNoPriv` security levels, we exclude the `hrSWRun` table (1.3.6.1.2.1.25.4) from the resulting SNMP reports. We include this table if you're using the `authPriv` security level. For more information, see the "[OID reference documentation](http://oidref.com/1.3.6.1.2.1.25.4)." 

With SNMP v2c, only hardware-level information about your appliance is available. The applications and services within {% data variables.product.prodname_enterprise %} do not have OIDs configured to report metrics. Several MIBs are available, which you can see by running `snmpwalk` on a separate workstation with SNMP support in your network:

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

Of the available MIBs for SNMP, the most useful is `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25). See the table below for some important objects in this MIB:

| Name | OID | Description |
| ---- | --- | ----------- |
| hrSystemDate.2 | 1.3.6.1.2.1.25.1.2 | The hosts notion of the local date and time of day. |
| hrSystemUptime.0 | 1.3.6.1.2.1.25.1.1.0 | How long it's been since the host was last initialized. |
| hrMemorySize.0 | 1.3.6.1.2.1.25.2.2.0 | The amount of RAM on the host. |
| hrSystemProcesses.0 | 1.3.6.1.2.1.25.1.6.0 | The number of process contexts currently loaded or running on the host. |
| hrStorageUsed.1 | 1.3.6.1.2.1.25.2.3.1.6.1 | The amount of storage space consumed on the host, in hrStorageAllocationUnits. |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | The size, in bytes, of an hrStorageAllocationUnit |

For example, to query for `hrMemorySize` with SNMP v3, run the following command on a separate workstation with SNMP support in your network:
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

With SNMP v2c, to query for `hrMemorySize`, run the following command on a separate workstation with SNMP support in your network:
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Note:** To prevent leaking information about services running on your appliance, we exclude the `hrSWRun` table (1.3.6.1.2.1.25.4) from the resulting SNMP reports unless you're using the `authPriv` security level with SNMP v3. If you're using the `authPriv` security level, we include the `hrSWRun` table.

{% endtip %}

For more information on OID mappings for common system attributes in SNMP, see "[Linux SNMP OID’s for CPU, Memory and Disk Statistics](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)".
