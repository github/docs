System Requirements — NVIDIA cuOpt (26.04)
Dependencies are installed automatically when using the pip and Conda installation methods. However, users would still need to make sure the system meets the minimum requirements.

Detalles
System Architecture:
x86-64

ARM64

GPU:
Volta architecture or better (Compute Capability >=7.0)

CPU:
4+ cores

System Memory:
16+ GB RAM

NVMe SSD Storage:
100+ GB free space

CUDA:
12.0+

Python:
>= 3.11.* and <= 3.14.*

NVIDIA drivers:
525.60.13+ (Linux)

527.41+ (Windows)

OS:
Linux distributions with glibc>=2.28 (released in August 2018):
Arch Linux (minimum version 2018-08-02)

Debian (minimum version 10.0)

Fedora (minimum version 29)

Linux Mint (minimum version 20)

Rocky Linux / Alma Linux / RHEL (minimum version 8)

Ubuntu (minimum version 20.04)

Windows 11 with WSL2

CUDA & NVIDIA Driver combinations:
CUDA 12.0 with Driver 525.60.13+

CUDA 12.2 with Driver 535.86.10+

CUDA 12.5 with Driver 555.42.06+

CUDA 12.9 with Driver 570.42.01+

CUDA 13.0 with Driver 580.65.06+

Detalles
System Architecture:
x86-64

ARM64

GPU:
NVIDIA H100 SXM (compute capability >= 9.0)

CPU:
32+ cores

System Memory:
64+ GB RAM

NVMe SSD Storage:
100+ GB free space

CUDA:
13.0

Latest NVIDIA drivers (580.65.06+)

OS:
Linux distributions with glibc>=2.28 (released in August 2018):
Arch Linux (minimum version 2018-08-02)

Debian (minimum version 10.0)

Fedora (minimum version 29)

Linux Mint (minimum version 20)

Rocky Linux / Alma Linux / RHEL (minimum version 8)

The above configuration will provide optimal performance for large-scale optimization problems.

Container#
nvidia-container-toolkit needs to be installed

Thin-client for Self-Hosted#
OS: Linux

System Architecture:
x86-64

ARM64

Python >= 3.11.x <= 3.14.x
Subscription Troubleshooting for Access Server
This document can help you troubleshoot issues with subscriptions. You can also create a support ticket (opens in a new window).

Determine the licensing method in use
To resolve an issue with software licensing, you need to know which licensing method you are using to follow the correct activation and troubleshooting procedure.

To determine your type of key:

Sign into your Admin Web UI.

Click Configuration > Activation.

Take note of your activation key. A subscription key will be long. A fixed license is grouped by four. An AWS tiered license is through AWS. An unlicensed server allows just two connections.

Subscription License Key:

ThisIsAnExampleKeyVGhpcyBpcyBqdXN0IGFuIGV4YW1wbGUga2V5IGFuZCBpcyB0b3RhbGx5IGZha2UuIElmIHlvdSdyZSByZWFkaW5nIHRoaXMsIHlvdSd2ZSBqdXN0IGZvdW5kIGFuIGVhc3RlciBlZ2cgb24gdGhlIG9wZW52cG4ubmV0IHdlYnNpdGUsIGNvbmdyYXR1bGF0aW9ucy4gSSdtIHNvcnJ5LCBidXQgdGhlcmUgaXMgbm8gcHJpemUgYXR0YWNoZWQuIEhhdmUgYSBuaWNlIGRheS4=
Fixed License Key:

#THI-SISA-NEXA-MPLE

When you know your license type, you can refer to the appropriate troubleshooting topic:

Subscription

Fixed License

AWS License

Resolving common issues
1. Why does the subscription fail to activate?
2. Why isn’t there an activation key option in the Admin Web UI?
3. Why am I still getting billed for a license?
4. How do I activate another subscription?
5. How can I change the hostname that displays in the subscription portal?
6. Why did I get an “invalid key format”?
7. Is there a debug flag I can use to log subscription information?
8. Why can’t I switch my license key to a new server?
9. Why is my fixed license key no longer listed on my Access Server?
10. How can I add more connections to my fixed license key?
11. How can I remove a fixed license key from my Access Server?
12. How can I change how the VPN clients connect when we exceed our limit?
13. What does this log message mean? “Subscription: enforcement_order is not set. Will disconnect newest subscription clients.”
14. How can I configure a local connection limit?
1.

Why does the subscription fail to activate?

First, check your Access Server version. Subscription fails if your Access Server is older than version 2.8.1. We introduced the subscription function in version 2.8.1. You must upgrade your Access Server to use subscriptions.

Next, ensure your server can access our activation server at asb.sts.openvpn.net. For more information, refer to the detailed troubleshooting section.

2.

Why isn’t there an activation key option in the Admin Web UI?

If you don’t have the option to enter an activation key on the Activation page for your Access Server, it could be that the license is through another software licensing method. Contact support (opens in a new window) and we’ll help you determine the best course of action.

3.

Why am I still getting billed for a license?

It’s important to note that an active subscription on your Access Server overrides other licensing models. Other modes are suppressed when a subscription is active. However, that doesn’t mean the billing is suspended.

4.

How do I activate another subscription?

You can only activate one subscription on an Access Server. You can have multiple Access Servers on the same subscription, but you can’t have multiple subscriptions on the same Access Server.

5.

How can I change the hostname that displays in the subscription portal?

Sign into your account on our site to view information about your subscriptions and activated Access Servers. Click on the subscription name, then Access Server information. To change it, refer to our tutorial: Change the Subscription Portal Hostname (opens in a new window).

6.

Why did I get an “invalid key format”?

The most common reason for this error message is when you attempt to activate a subscription on an older version of Access Server. Ensure you have 2.8.1 or newer. If you are using an older version, upgrade your Access Server.

7.

Is there a debug flag I can use to log subscription information?

Our support team uses debug flags as a helpful troubleshooting tool. You can use the debug flag DEBUG_SUBSCRIPTION=2 to log subscription information to openvpnas.log. For more information, refer to the debug flag tutorial (opens in a new window).

Caution
Adding a debug flag creates the possibility of increasing the logging data and, therefore, the file size.

8.

Why can’t I switch my license key to a new server?

If you’re using a fixed license, the key is locked to the hardware/software of your system. Trying to activate the license key on another installation can cause the key to no longer function. In that case, contact support (opens in a new window) for assistance.

9.

Why is my fixed license key no longer listed on my Access Server?

If your fixed license key expires, it may disappear from the overview of licenses on your Access Server. This is normal behavior when a key expires. It no longer unlocks additional connections.

10.

How can I add more connections to my fixed license key?

With a fixed license key, you can’t add or remove connections. This differs from our subscription licenses, in which you can adjust the connections you pay for as needed. You must purchase another license to change the connections on an Access Server with a fixed license key. Fixed license keys are fixed in size and purchased for a specific number of connections. You can increase the licensed amount on your Access Server by purchasing and adding more fixed license keys. When you activate multiple fixed license keys on your server, they add up to their total amount of allowed connections.

11.

How can I remove a fixed license key from my Access Server?

You can remove a fixed license key by following the steps outlined on the fixed license troubleshooting page.

12.

How can I change how the VPN clients connect when we exceed our limit?

Refer to this tutorial to set which clients are disconnected when you exceed your license limits:

Tutorial: Change the VPN Client Disconnection Behavior (opens in a new window)

13.

What does this log message mean? “Subscription: enforcement_order is not set. Will disconnect newest subscription clients.”

This message means that the subscription.enforcement_order is not explicitly defined, the number of concurrent connections exceeds your subscription limit, and the newest connections are dropped first.

14.

How can I configure a local connection limit?

Refer to this tutorial to set a limit for a specific server using a subscription:

Tutorial: Set a Local Connection Limit (opens in a new window)

Was this information helpful?

Can't find what you're looking for?
Our support team will be happy to assist you.