---
title: Trying out the new projects experience
shortTitle: Projects (beta)
intro: 'Build customized projects to track your work in {% data variables.product.company_short %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Issues
  - Projects
children:
  - /about-projects
  - /quickstart
  - /creating-a-project
  - /customizing-your-project-views
  - /using-the-api-to-manage-projects
  - /automating-projects
  - /managing-the-visibility-of-your-projects
  - /managing-access-to-projects
  - /best-practices-for-managing-projects
  - /# lloesche/valheim-server Docker image
![Valheim](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/Logo_valheim.png "Valheim")

Valheim Server in a Docker Container (with [BepInEx](#bepinexpack-valheim) and [ValheimPlus](#valheimplus) support)  
This project is hosted at [https://github.com/lloesche/valheim-server-docker](https://github.com/lloesche/valheim-server-docker)  


# Table of contents
<!-- vim-markdown-toc GFM -->

* [Basic Docker Usage](#basic-docker-usage)
* [Environment Variables](#environment-variables)
	* [Log filters](#log-filters)
		* [Log filter event hooks](#log-filter-event-hooks)
			* [Discord log filter event hook example](#discord-log-filter-event-hook-example)
	* [Event hooks](#event-hooks)
		* [Event hook examples](#event-hook-examples)
			* [Install extra packages](#install-extra-packages)
			* [Copy backups to another location](#copy-backups-to-another-location)
			* [Notify on Discord](#notify-on-discord)
	* [Mod config from Environment Variables](#mod-config-from-environment-variables)
* [System requirements](#system-requirements)
* [Deployment](#deployment)
	* [Deploying with Docker and systemd](#deploying-with-docker-and-systemd)
	* [Deploying with docker-compose](#deploying-with-docker-compose)
	* [Deploying to Kubernetes](#deploying-to-kubernetes)
	* [Deploying to AWS ECS](#deploying-to-aws-ecs)
	* [Deploying to Nomad](#deploying-to-nomad)
* [Updates](#updates)
* [Backups](#backups)
  * [Manual backup](#manual-backup)
* [Finding Your Server](#finding-your-server)
	* [In-game](#in-game)
		* [Joining Directly via Hostname/IP](#joining-directly-via-hostnameip)
	* [Steam Server Browser](#steam-server-browser)
	* [Steam Server Favorites & LAN Play](#steam-server-favorites--lan-play)
* [Admin Commands](#admin-commands)
  * [Enable Admin Console](#enable-admin-console)
* [Supervisor](#supervisor)
  * [Supervisor API](#supervisor-api)
* [Status web server](#status-web-server)
* [Modding](#modding)
  * [BepInExPack Valheim](#bepinexpack-valheim)
    * [Configuration](#configuration)
  * [ValheimPlus](#valheimplus)
    * [Updates](#updates-1)
    * [Configuration](#configuration-1)
      * [Disable server password](#disable-server-password)
* [Changing startup CMD in Portainer](#changing-startup-cmd-in-portainer)
* [Synology Help](#synology-help)
	* [First install](#first-install)
	* [Updating the container image to the latest version](#updating-the-container-image-to-the-latest-version)
		* [Error after download of new container image](#error-after-download-of-new-container-image)
* [QNAP NAS Help](#qnap-nas-help)
	* [Creating container](#creating-container)
	* [Updating image](#updating-image)
	* [QNAP ZFS issue](#qnap-zfs-issue)
* [OpenMediaVault Help](#openmediavault-help)
  * [Permission denied error](#permission-denied-error)
* [License](#license)
* [Legal disclaimer](#legal-disclaimer)
<!-- vim-markdown-toc -->


# Basic Docker Usage

The name of the Docker image is `ghcr.io/lloesche/valheim-server`.

Volume mount the server config directory to `/config` within the Docker container.

If you have an existing world on a Windows system you can copy it from e.g.  
  `C:\Users\Lukas\AppData\LocalLow\IronGate\Valheim\worlds`
to e.g.  
  `$HOME/valheim-server/config/worlds`
and run the image with `$HOME/valheim-server/config` volume mounted to `/config` inside the container.
The container directory `/opt/valheim` contains the downloaded server. It can optionally be volume mounted to avoid having to download the server on each fresh start.

```
$ mkdir -p $HOME/valheim-server/config/worlds $HOME/valheim-server/data
# copy existing world
$ docker run -d \
    --name valheim-server \
    --cap-add=sys_nice \
    --stop-timeout 120 \
    -p 2456-2457:2456-2457/udp \
    -v $HOME/valheim-server/config:/config \
    -v $HOME/valheim-server/data:/opt/valheim \
    -e SERVER_NAME="My Server" \
    -e WORLD_NAME="Neotopia" \
    -e SERVER_PASS="secret" \
    ghcr.io/lloesche/valheim-server
```

Warning: `SERVER_PASS` must be at least 5 characters long. Otherwise `valheim_server.x86_64` will refuse to start!

A fresh start will take several minutes depending on your Internet connection speed as the container will download the Valheim dedicated server from Steam (~1 GB).

Do not forget to modify `WORLD_NAME` to reflect the name of your world! For existing worlds that is the filename in the `worlds/` folder without the `.db/.fwl` extension.

If you want to play with friends over the Internet and are behind NAT make sure that UDP ports 2456-2457 are forwarded to the container host.
Also ensure they are publicly accessible in any firewall.

There is more info in section [Finding Your Server](#finding-your-server).

For LAN-only play see section [Steam Server Favorites & LAN Play](#steam-server-favorites--lan-play)

For more deployment options see the [Deployment section](#deployment). 

Granting `CAP_SYS_NICE` to the container is optional. It allows the Steam library that Valheim uses to give itself more CPU cycles.
Without it you will see a message `Warning: failed to set thread priority` in the startup log.


# Environment Variables
**All variable names and values are case-sensitive!**

| Name | Default | Purpose |
|----------|----------|-------|
| `SERVER_NAME` | `My Server` | Name that will be shown in the server browser |
| `SERVER_PORT` | `2456` | UDP start port that the server will listen on |
| `WORLD_NAME` | `Dedicated` | Name of the world without `.db/.fwl` file extension |
| `SERVER_PASS` | `secret` | Password for logging into the server - min. 5 characters! |
| `SERVER_PUBLIC` | `true` | Whether the server should be listed in the server browser (`true`) or not (`false`) |
| `SERVER_ARGS` |  | Additional Valheim server CLI arguments |
| `ADMINLIST_IDS` |  | Space separated list of admin SteamIDs. Overrides any existing adminlist.txt entries! |
| `BANNEDLIST_IDS` |  | Space separated list of banned SteamIDs. Overrides any existing bannedlist.txt entries! |
| `PERMITTEDLIST_IDS` |  | Space separated list of whitelisted SteamIDs. Overrides any existing permittedlist.txt entries! |
| `UPDATE_CRON` | `*/15 * * * *` | [Cron schedule](https://en.wikipedia.org/wiki/Cron#Overview) for update checks (disabled if set to an empty string or if the legacy `UPDATE_INTERVAL` is set) |
| `IDLE_DATAGRAM_WINDOW` | `3` | The time window, in seconds, to wait for incoming UDP datagrams on non-public servers before determining if the server is idle |
| `IDLE_DATAGRAM_MAX_COUNT` | `30` | The number of incoming UDP datagrams the container should tolerate (including useless datagrams such as mDNS, as well as useful datagrams like queries against the UDP query port and active connections by players) on non-public servers before deciding that the server is not idle |
| `UPDATE_IF_IDLE` | `true` | Only run update check if no players are connected to the server (`true` or `false`) |
| `RESTART_CRON` | `0 5 * * *` | [Cron schedule](https://en.wikipedia.org/wiki/Cron#Overview) for server restarts (disabled if set to an empty string) |
| `RESTART_IF_IDLE` | `true` | Only run daily restart if no players are connected to the server (`true` or `false`) |
| `TZ` | `Etc/UTC` | Container [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| `BACKUPS` | `true` | Whether the server should create periodic backups (`true` or `false`) |
| `BACKUPS_CRON` | `0 * * * *` | [Cron schedule](https://en.wikipedia.org/wiki/Cron#Overview) for world backups (disabled if set to an empty string or if the legacy `BACKUPS_INTERVAL` is set) |
| `BACKUPS_DIRECTORY` | `/config/backups` | Path to the backups directory |
| `BACKUPS_MAX_AGE` | `3` | Age in days after which old backups are flushed |
| `BACKUPS_MAX_COUNT` | `0` | Maximum number of backups kept, 0 means infinity |
| `BACKUPS_IF_IDLE` | `true` | Backup even when no players have been connected for a while |
| `BACKUPS_IDLE_GRACE_PERIOD` | `3600` | Grace period in seconds after the last player has disconnected in which we will still create backups when `BACKUPS_IF_IDLE=false` |
| `BACKUPS_ZIP` | `true` | Compress Backups with `zip`. If set to `false` Backups will be stored uncompressed. |
| `PERMISSIONS_UMASK` | `022` | [Umask](https://en.wikipedia.org/wiki/Umask) to use for backups, config files and directories |
| `STEAMCMD_ARGS` | `validate` | Additional steamcmd CLI arguments |
| `VALHEIM_PLUS` | `false` | Whether [ValheimPlus](https://github.com/valheimPlus/ValheimPlus) mod should be loaded (config in `/config/valheimplus`, additional plugins in `/config/valheimplus/plugins`). Can not be used together with `BEPINEX`. |
| `BEPINEX` | `false` | Whether [BepInExPack Valheim](https://valheim.thunderstore.io/package/denikson/BepInExPack_Valheim/) mod should be loaded (config in `/config/bepinex`, plugins in `/config/bepinex/plugins`). Can not be used together with `VALHEIM_PLUS`. |
| `SUPERVISOR_HTTP` | `false` | Turn on supervisor's http server |
| `SUPERVISOR_HTTP_PORT` | `9001` | Set supervisor's http server port |
| `SUPERVISOR_HTTP_USER` | `admin` | Supervisor http server username |
| `SUPERVISOR_HTTP_PASS` |  | Supervisor http server password |
| `STATUS_HTTP` | `false` | Turn on the status http server. Only useful on public servers (`SERVER_PUBLIC=true`). |
| `STATUS_HTTP_PORT` | `80` | Status http server tcp port |
| `STATUS_HTTP_CONF` | `/config/httpd.conf` | Path to the [busybox httpd config](https://git.busybox.net/busybox/tree/networking/httpd.c) |
| `STATUS_HTTP_HTDOCS` | `/opt/valheim/htdocs` | Path to the status httpd htdocs where `status.json` is written |
| `SYSLOG_REMOTE_HOST` |  | Remote syslog host or IP to send logs to |
| `SYSLOG_REMOTE_PORT` | `514` | Remote syslog UDP port to send logs to |
| `SYSLOG_REMOTE_AND_LOCAL` | `true` | When sending logs to a remote syslog server also log local |
| `PUID` | `0` | UID to run valheim-server as |
| `PGID` | `0` | GID to run valheim-server as |

There are a few undocumented environment variables that could break things if configured wrong. They can be found in [`defaults`](defaults).


## Log filters
Valheim server by default logs a lot of noise. These env variables allow users to remove unwanted lines from the log.

| Prefix | Default | Purpose |
|----------|----------|-------|
| `VALHEIM_LOG_FILTER_EMPTY` | `true` | Filter empty log lines |
| `VALHEIM_LOG_FILTER_UTF8` | `true` | Filter invalid UTF-8 characters |
| `VALHEIM_LOG_FILTER_MATCH` | ` ` | Filter log lines exactly matching |
| `VALHEIM_LOG_FILTER_STARTSWITH` | `(Filename:` | Filter log lines starting with |
| `VALHEIM_LOG_FILTER_ENDSWITH` |  | Filter log lines ending with |
| `VALHEIM_LOG_FILTER_CONTAINS` |  | Filter log lines containing |
| `VALHEIM_LOG_FILTER_REGEXP` |  | Filter log lines matching regexp |

The default filter removes:
- Empty log lines
- Log lines consisting of a single space (wtf?)
- A repeating line saying `(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)`
- Lines flodding the log with `Assertion Failed` warnings on packet processing timeouts (See [#104](https://github.com/lloesche/valheim-server-docker/discussions/104))
- If ValheimPlus is turned on lines starting with `Fallback handler could not load library`


### Log filter event hooks
If an environment variable prefixed with `ON_` exists for an identically named log filter, instead of removing the log line the contents of the variable will be executed when the filter matches with the log line piped on stdin.

| Prefix | Purpose |
|----------|-------|
| `ON_VALHEIM_LOG_FILTER_MATCH` | Run command hook on log lines exactly matching |
| `ON_VALHEIM_LOG_FILTER_STARTSWITH` | Run command hook on log lines starting with |
| `ON_VALHEIM_LOG_FILTER_ENDSWITH` | Run command hook on log lines ending with |
| `ON_VALHEIM_LOG_FILTER_CONTAINS` | Run command hook on log lines containing |
| `ON_VALHEIM_LOG_FILTER_REGEXP` | Run command hook on regexp match |

All environment variables except for `VALHEIM_LOG_FILTER_EMPTY` and `VALHEIM_LOG_FILTER_UTF8` are prefixes. Meaning you can define multiple matches like so:
```
-e VALHEIM_LOG_FILTER_STARTSWITH=foo \
-e VALHEIM_LOG_FILTER_STARTSWITH_BAR=bar \
-e VALHEIM_LOG_FILTER_STARTSWITH_SOMETHING_ELSE="some other filter"
-e VALHEIM_LOG_FILTER_CONTAINS_Connected="Got character ZDOID from"
-e ON_VALHEIM_LOG_FILTER_CONTAINS_Connected="cat >> /tmp/character_login"
```

#### Discord log filter event hook example
Sends a Discord message whenever a player spawns
```
-e DISCORD_WEBHOOK="https://discord.com/api/webhooks/8171522530..." \
-e VALHEIM_LOG_FILTER_CONTAINS_Spawned="Got character ZDOID from" \
-e ON_VALHEIM_LOG_FILTER_CONTAINS_Spawned='{ read l; l=${l//*ZDOID from /}; l=${l// :*/}; msg="Player $l spawned into the world"; curl -sfSL -X POST -H "Content-Type: application/json" -d "{\"username\":\"Valheim\",\"content\":\"$msg\"}" "$DISCORD_WEBHOOK"; }'
```

See [Notify on Discord](#notify-on-discord) below for proper quoting in env and compose files.

If you are running ValheimPlus and this filter triggers twice, check [this ValheimPlus issue](https://github.com/valheimPlus/ValheimPlus/issues/318).
The cause is a misconfigured `BepInEx.cfg` that causes all log lines to be duplicated.


## Event hooks
The following environment variables can be populated to run commands whenever specific events happen.

| Name | Default | Purpose |
|----------|----------|-------|
| `PRE_SUPERVISOR_HOOK` |  | Command to be executed before supervisord is run. Startup is blocked until this command returns. |
| `PRE_BOOTSTRAP_HOOK` |  | Command to be executed before bootstrapping is done. Startup is blocked until this command returns. |
| `POST_BOOTSTRAP_HOOK` |  | Command to be executed after bootstrapping is done and before the server or any services are started. Can be used to install additional packages or perform additional system setup. Startup is blocked until this command returns. |
| `PRE_BACKUP_HOOK` |  | Command to be executed before a backup is created. The string `@BACKUP_FILE@` will be replaced by the full path of the future backup zip file. Backups are blocked until this command returns. |
| `POST_BACKUP_HOOK` |  | Command to be executed after a backup is created. The string `@BACKUP_FILE@` will be replaced by the full path of the backup zip file. Backups are blocked until this command returns. See [Copy backups to another location](#copy-backups-to-another-location) for details. |
| `PRE_UPDATE_CHECK_HOOK` |  | Command to be executed before an update check is performed. Current update is blocked until this command returns. |
| `POST_UPDATE_CHECK_HOOK` |  | Command to be executed after an update check was performed. Future updates are blocked until this command returns. |
| `PRE_START_HOOK` |  | Command to be executed before the first server start is performed by the valheim-updater. Current start is blocked until this command returns. |
| `POST_START_HOOK` |  | Command to be executed after the first server start was performed by the valheim-updater. Future restarts and update checks are blocked until this command returns. |
| `PRE_RESTART_HOOK` |  | Command to be executed before a server restart is performed by the valheim-updater. Current restart is blocked until this command returns. |
| `PRE_SERVER_LISTENING_HOOK` |  | Command to be executed after the server runs, but before it's able to accept connections. The loop that checks connection status will be blocked until this command returns. |
| `POST_SERVER_LISTENING_HOOK` |  | Command to be executed once the server is available for players to connect! The hook only fires after status is updated to `running`. |
| `POST_RESTART_HOOK` |  | Command to be executed after a server restart was performed by the valheim-updater. Future restarts and update checks are blocked until this command returns. |
| `PRE_SERVER_RUN_HOOK` |  | Command to be executed before the server is started. Server startup is blocked until this command returns. |
| `POST_SERVER_RUN_HOOK` |  | Command to be executed after the server has finished running. Server shutdown is blocked until this command returns or a shutdown timeout is triggered after 29 seconds. |
| `PRE_SERVER_SHUTDOWN_HOOK` |  | Command to be executed before the server is shut down. Server shutdown is blocked until this command returns. If `PRE_SERVER_SHUTDOWN_HOOK` holds the shutdown process for more than 90 seconds, the entire process will be hard-killed by `supervisord`. |
| `POST_SERVER_SHUTDOWN_HOOK` |  | Command to be executed after the server has finished shutting down. |
| `PRE_BEPINEX_CONFIG_HOOK` |  | Command to be executed before writing BepInEx.cfg. |
| `POST_BEPINEX_CONFIG_HOOK` |  | Command to be executed after writing BepInEx.cfg. Can be used to write your own mod config using [`env2cfg`](#mod-config-from-environment-variables). |


### Event hook examples
#### Install extra packages
```
-e POST_BOOTSTRAP_HOOK="apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y install awscli"
```

#### Copy backups to another location
After a backup ZIP has been created the command specified by `$POST_BACKUP_HOOK` will be executed if set to a non-zero string.
Within that command the string `@BACKUP_FILE@` will be replaced by the full path to the just created ZIP file.

```
-v $HOME/.ssh/id_rsa:/root/.ssh/id_rsa \
-v $HOME/.ssh/known_hosts:/root/.ssh/known_hosts \
-e POST_BACKUP_HOOK='timeout 300 scp @BACKUP_FILE@ myself@example.com:~/backups/$(basename @BACKUP_FILE@)'
```

#### Notify on Discord
Because proper string quoting on the shell vs. inside a `docker-compose.yaml` vs. an `env_file` can be challenging, here are examples for each use case.

##### Using the commandline
Delay restarts by 1 minute and notify on Discord
```
-e DISCORD_WEBHOOK="https://discord.com/api/webhooks/8171522530..." \
-e DISCORD_MESSAGE="Restarting Valheim server in one minute!" \
-e PRE_RESTART_HOOK='curl -sfSL -X POST -H "Content-Type: application/json" -d "{\"username\":\"Valheim\",\"content\":\"$DISCORD_MESSAGE\"}" "$DISCORD_WEBHOOK" && sleep 60'
```

##### Inside docker-compose.yaml
Notify on Discord with server's name in the message
```
    environment:
      - DISCORD_WEBHOOK=https://discord.com/api/webhooks/8171522530...
      - DISCORD_MESSAGE=Starting Valheim server $$SERVER_NAME
      - 'PRE_BOOTSTRAP_HOOK=curl -sfSL -X POST -H "Content-Type: application/json" -d "{\"username\":\"Valheim\",\"content\":\"$$(eval echo $$DISCORD_MESSAGE)\"}" "$$DISCORD_WEBHOOK"'
```

##### Inside an env_file
```
DISCORD_WEBHOOK=https://discord.com/api/webhooks/8171522530...
DISCORD_MESSAGE=Starting Valheim server
PRE_BOOTSTRAP_HOOK=curl -sfSL -X POST -H "Content-Type: application/json" -d "{\"username\":\"Valheim\",\"content\":\"$DISCORD_MESSAGE\"}" "$DISCORD_WEBHOOK"
```

#### Notify on Matrix, inside an env_file
Create an account for your bot, log in and join the room you want to post to. The room ID is noted in the room's settings.
```
MATRIX_BOT_SERVER=https://matrix...
MATRIX_BOT_ROOM_ID=!...
MATRIX_BOT_ACCESS_TOKEN=...
PRE_RESTART_HOOK=curl -sfSL -X PUT -d "{\"msgtype\":\"m.notice\",\"body\":\"Valheim is being updated\"}" "$MATRIX_BOT_SERVER/_matrix/client/r0/rooms/$MATRIX_BOT_ROOM_ID/send/m.room.message/$(date +%s-%N)?access_token=$MATRIX_BOT_ACCESS_TOKEN"
```
Note the `$(date +%s-%N)` is used for the required unique txnId.


## Mod config from Environment Variables
Mod config can be specified in environment variables using the syntax `<prefix>_<section>_<variable>=<value>`.

**Predefined prefix list**
| Prefix | Mod | File |
|----------|----------|----------|
| `VPCFG` | ValheimPlus | `/config/valheimplus/valheim_plus.cfg` |
| `BEPINEXCFG` | BepInEx | `/config/valheimplus/BepInEx.cfg` or `/config/bepinex/BepInEx.cfg` depending on whether `VALHEIM_PLUS=true` or `BEPINEX=true` |


**Translation table**  
Some characters that are allowed as section names in the config files are not allowed as environment variable names. They can be encoded using the following translation table.
| Variable name string | Replacement |
|----------|----------|
| `_DOT_` | `.` |
| `_HYPHEN_` | `-` |
| `_UNDERSCORE_` | `_` |
| `_PLUS_` | `+` |

Example:
```
-e VALHEIM_PLUS=true \
-e VPCFG_Server_enabled=true \
-e VPCFG_Server_enforceMod=false \
-e VPCFG_Server_dataRate=500 \
-e BEPINEXCFG_Logging_DOT_Console_Enabled=true
```

turns into `/config/valheimplus/valheim_plus.cfg`
```
[Server]
enabled=true
enforceMod=false
dataRate=500
```

and `/config/valheimplus/BepInEx.cfg`
```
[Logging.Console]
Enabled=true
```

All existing configuration in those files is retained and a backup of the old config is created as e.g. `/config/valheimplus/valheim_plus.cfg.old` before writing the new config file.

You could generate your own custom plugin config from environment variables using [the `POST_BEPINEX_CONFIG_HOOK` event hook](#event-hooks) and [`env2cfg`](https://github.com/lloesche/valheim-server-docker/tree/main/env2cfg).


# System requirements
On our system while idle with no players connected Valheim server consumes around 2.8 GB RSS. All the while using around 30% of one CPU Core on a 2.40 GHz Intel Xeon E5-2620 v3. Valheim server is making use of many threads with two of them seemingly doing the bulk of the work each responsible for around 8-10% of the 30% of idle load.

The picture changes when players connect. The first player increased overall load to 42%, the second player to 53%. In the thread view we see that a thread that was previously consuming 10% is now hovering around 38%. Meaning while Valheim server creates 50 threads on our system it looks like there is a single thread doing the bulk of all work (~70%) with no way for the Kernel to distribute the load to many cores.

Therefor our minimum requirements would be a dual core system with 4 GB of RAM and our recommended system would be a high clocked 4 core server with 8 GB of RAM. A few very high clocked cores will be more beneficial than having many cores. I.e. two 5 GHz cores will yield better performance than six 2 GHz cores.
This holds especially true the more players are connected to the system.


# Deployment

## Deploying with Docker and systemd
Create a config file `/etc/sysconfig/valheim-server`
```
SERVER_NAME=My Server
SERVER_PORT=2456
WORLD_NAME=Dedicated
SERVER_PASS=secret
SERVER_PUBLIC=true
```

Then enable the Docker container on system boot
```
$ sudo mkdir -p /etc/valheim /opt/valheim
$ sudo curl -o /etc/systemd/system/valheim.service https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/valheim.service
$ sudo systemctl daemon-reload
$ sudo systemctl enable valheim.service
$ sudo systemctl start valheim.service
```

## Deploying with docker-compose
Copy'paste the following into your shell
```
mkdir -p $HOME/valheim-server/config $HOME/valheim-server/data
cd $HOME/valheim-server/
cat > $HOME/valheim-server/valheim.env << EOF
SERVER_NAME=My Server
WORLD_NAME=Dedicated
SERVER_PASS=secret
SERVER_PUBLIC=true
EOF
curl -o $HOME/valheim-server/docker-compose.yaml https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/docker-compose.yaml
docker-compose up
```

## Deploying to Kubernetes
Kubernetes manifests using this container image, along with a helm chart, are available from the following repository:
[https://github.com/Addyvan/valheim-k8s](https://github.com/Addyvan/valheim-k8s)

The chart is also available directly using:
```bash
helm repo add valheim-k8s https://addyvan.github.io/valheim-k8s/
helm repo update
helm install valheim-server valheim-k8s/valheim-k8s # see repo for full config
```

## Deploying to AWS ECS
CDK Project for spinning up a Valheim game server on AWS Using ECS Fargate and Amazon EFS is available here:
[https://github.com/rileydakota/valheim-ecs-fargate-cdk](https://github.com/rileydakota/valheim-ecs-fargate-cdk)

## Deploying to Nomad
```
$ sudo mkdir -p /var/lib/valheim/{config,data}
$ sudo curl -o /var/lib/valheim/valheim.nomad https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/valheim.nomad
$ sudo nomad job run /var/lib/valheim/valheim.nomad
```

# Updates
By default the container will check for Valheim server updates every 15 minutes if no players are currently connected to the server.
If an update is found it is downloaded and the server restarted.
This update schedule can be changed using the `UPDATE_CRON` environment variable.


# Backups
The container will on startup and periodically create a backup of the `worlds/` directory.

The default is once per hour but can be changed using the `BACKUPS_CRON` environment variable.

Default backup directory is `/config/backups/` within the container. A different directory can be set using the `BACKUPS_DIRECTORY` environment variable.
It makes sense to have this directory be a volume mount from the host.
Warning: do not make the backup directory a subfolder of `/config/worlds/`. Otherwise each backup will backup all previous backups.

By default 3 days worth of backups will be kept. A different number can be configured using `BACKUPS_MAX_AGE`. The value is in days.

It is possible to configure a maximum number of to-be-kept backup files with `BACKUPS_MAX_COUNT`. When going over this limit, the oldest file(s) will be deleted. The default is `0` which means no limit. Note that `BACKUPS_MAX_AGE` will always be respected: if backups get too old, they will be deleted even if `BACKUPS_MAX_COUNT` was not yet reached (or is `0`).

Beware that backups are performed while the server is running. As such files might be in an open state when the backup runs.
However the `worlds/` directory also contains a `.db.old` file for each world which should always be closed and in a consistent state.

See [Copy backups to another location](#copy-backups-to-another-location) for an example of how to copy backups offsite.

If `BACKUPS_IF_IDLE=false` then backups are only created if there has been recent player activity. Once the last player disconnects
there is a grace period `BACKUPS_IDLE_GRACE_PERIOD` in seconds after which backups are still being created. The reason for this is that Valheim
dedicated server only saves the world in 20 minute intervals and on shutdown. So to make sure that we have a consistent world file backup of
the most recent changes we want to wait out one world save. This grace period also needs to be long enough so that our `BACKUPS_CRON` had a chance to run.

`BACKUPS_ZIP=false` can be used to store backups uncompressed in the backup directory. Please note that this will increase the filesize of the backups, due to no compression.

## Manual backup
Sending `SIGHUP` to the `valheim-backup` service or restarting the service will create a backup.
If `BACKUPS_IF_IDLE=false` sending `SIGHUP` only creates a backup if there has been recent player activity.
Restarting `valheim-backup` will always create a backup.

The PID of the running service can be found in `/var/run/valheim-backup.pid`

Assuming your container's name is `valheim-server` here's how both would work:

Sending SIGHUP using `supervisorctl`
```
docker exec -it valheim-server supervisorctl signal HUP valheim-backup
```

Sending SIGHUP manually
```
docker exec -it valheim-server bash -c 'kill -HUP $(< /var/run/valheim-backup.pid)'
```

Restarting `valheim-backup`
```
docker exec -it valheim-server supervisorctl restart valheim-backup
```

The restart can also be done from [the Supervisor web UI](#supervisor).
![Backup Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/backup1.png "Backup Step 1")


# Finding Your Server
Once the server is up and running and the log says something like
```
02/09/2021 10:42:24: Game server connected
```
it can still be challenging to actually find the server.

There are three ways of getting to your server. Either using the Steam server browser, adding the IP manually or using the in-game `Community` server list.

## In-game
When in-game, click on `Join Game` and select `Community`. Wait for the game to load the list of all 4000+ servers.
Only 200 servers will be shown at a time so we will have to enter part of our server name to filter the view.
![in-game server browser](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/find1.png "in-game server browser")

### Joining Directly via Hostname/IP

Valheim has since added the `Join IP` button to the `Join Game` tab. If you click the `Join IP` button, you are prompted to enter your server's IP address and port number.
If you left the `SERVER_PORT` at its default value of `2456`, you do not have to enter the port. The hostname or IP of your server will suffice.
If you changed the port, you have to specify it like this: `example.com:3333`.

This method of connecting to your server will work even if your server is not public (i.e., you set `SERVER_PUBLIC` to `false`).

![in-game server browser with join ip button](./misc/find5.png "in-game server browser with join ip button")
![join ip dialog](./misc/find6.png "join ip dialog")

## Steam Server Browser
When using the Steam server browser, in Steam go to `View -> Servers`. Click on `CHANGE FILTERS` and select Game `Valheim`.
Wait for Steam to load all 4000+ Servers then sort the `SERVERS` column by clicking on its title. Scroll down until you find your server.
![Steam server browser](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/find2.png "Steam server browser")
From there you can right-click it and add as a favourite.

Note that in my tests when connecting to the server via the Steam server browser I had to enter the server password twice. Once in Steam and once in-game.

## Steam Server Favorites & LAN Play
A third option within Steam is to add the server manually by IP. This also allows for LAN play without the need to open or forward any firewall ports.

Steps:
1) Within Steam click on `View -> Servers`
2) `FAVORITES`
3) `ADD SERVER`
4) Enter Server IP and port+1. So if the server is running on UDP port `2456` enter `ip:2457`
5) `FIND GAMES AT THIS ADDRESS...`
6) `ADD SELECTED GAME SERVER TO FAV...`

![Add server manually](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/find3.png "Add server manually")

Do not use the `ADD THIS ADDRESS TO FAVORITES` button at this point.

NOTE: Sometimes I will get the following error when trying to connect to a LAN server:
![Steam Server Browser Error](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/find4.png "Steam Server Browser Error")

In those cases it sometimes helped to add the server again, but this time using port `2456` and now pressing the `ADD THIS ADDRESS TO FAVORITES` button.
It will not generate a new entry in the favourites list but seemingly just update the existing one that was originally discovered on port `2457`.

Sometimes it also helps to press the `REFRESH` button and then immediately double click on the Server.

Overall LAN play via the Steam Server Browser has been a bit hit and miss for me while online play using the in-game search has resulted in the most consistent success.

NOTE 2: You will only find your Valheim game server using this method if your server is public (`SERVER_PUBLIC` is NOT set to `false`).
If you started your server with `SERVER_PUBLIC` set to `false`, you will get the error message: `Server is not responding.` in the list where the servers are supposed to appear.

# Admin Commands
Upon startup the server will create a file `/config/adminlist.txt`. In it you can list the IDs of all administrator users.

The ID of a user can be gotten either in-game by pressing ***F2***
![User ID in-game](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/admin2.png "User ID in-game")

or in the server logs when a user connects.
![User ID in logs](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/admin1.png "User ID in logs")

Administrators can press ***F5*** to open the in-game console and use commands like `ban` and `kick`.
![Kick a user](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/admin3.png "Kick a user")


## Enable Admin Console
In recent versions of Valheim the game client has to be started with the `-console` flag for ***F5*** to work.
![Enable Admin Console](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/admin_console1.png "Enable Admin Console")


# Supervisor
This container uses a process supervisor aptly named [`supervisor`](http://supervisord.org/).
Within the container processes can be started and restarted using the command `supervisorctl`. For instance `supervisorctl restart valheim-server` would restart the server.

Supervisor provides a very simple http interface which can be optionally turned on by supplying `SUPERVISOR_HTTP=true` and a password in `SUPERVISOR_HTTP_PASS`.
The default `SUPERVISOR_HTTP_USER` is `admin` but can be changed to anything else. Once activated the http server will listen on tcp port `9001` which has to be exposed (`-p 9001:9001/tcp`).

![Supervisor](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/supervisor.png "Supervisor")


## Supervisor API
If Supervisor's http server is enabled it also provides an XML-RPC API at `/RPC2`. Details can be found in [the official documentation](http://supervisord.org/api.html).


# Status web server
If `STATUS_HTTP` is set to `true` the status web server will be started.
By default it runs on container port `80` but can be customized using `STATUS_HTTP_PORT`.

This only works for public Valheim servers (`SERVER_PUBLIC=true`) because private ones do not answer to [Steam server queries](https://developer.valvesoftware.com/wiki/Server_queries).

A `/status.json` will be updated every 10 seconds.

Whenever Valheim server is not yet running the status will contain an error like
```
{
  "last_status_update": "2021-03-07T21:42:46.307232+00:00",
  "error": "timeout('timed out')"
}
```
The error is just a string representation of whatever Python exception was thrown when trying to connect to the query port (`2457/udp` by default).

Once the server is running and listening on its UDP ports `/status.json` will contain something like this
```
{
  "last_status_update": "2021-03-07T21:42:16.076662+00:00",
  "error": null,
  "server_name": "My Docker based server",
  "server_type": "d",
  "platform": "l",
  "player_count": 1,
  "password_protected": true,
  "vac_enabled": false,
  "port": 2456,
  "steam_id": 90143789459088380,
  "keywords": "0.147.3@0.9.4",
  "game_id": 892970,
  "players": [
    {
      "name": "",
      "score": 0,
      "duration": 7.000421047210693
    }
  ]
}
```
All the information in `status.json` is fetched from Valheim servers public query port. You will notice that some of the fields like player name or player score currently contain no information. However for completeness the entire query response is left intact.

Within the container `status.json` is written to `STATUS_HTTP_HTDOCS` which by default is `/opt/valheim/htdocs`. It can either be consumed directly or the user can add their own html/css/js to this directory to read the json data and present it in whichever style they prefer. A file named `index.html` will be shown on `/` if it exists.

As mentioned all the information is publicly available on the Valheim server query port. However the option is there to configure a `STATUS_HTTP_CONF` (`/config/httpd.conf` by default) containing [busybox httpd config](https://git.busybox.net/busybox/tree/networking/httpd.c) to limit access to the status web server by IP/subnet or login/password.

# Modding
## BepInExPack Valheim
**Enable with**
| Variable | Value |
|----------|----------|
| `BEPINEX` | `true` |

[BepInExPack Valheim](https://valheim.thunderstore.io/package/denikson/BepInExPack_Valheim/) packages [BepInEx](https://github.com/BepInEx/BepInEx) for Valheim. BepInEx is a plugin / modding framework for Unity Mono, IL2CPP and .NET framework games.
To enable BepInExPack provide the env variable `BEPINEX=true`. This can not be specified together with `VALHEIM_PLUS=true`.
Just like Valheim Server this mod is automatically updated using the `UPDATE_CRON` schedule.

Upon first start BepInExPack will create a new directory `/config/bepinex` where its config files are located.
BepInEx plugins must be copied into the `/config/bepinex/plugins/` directory. From there they will be automatically copied into `/opt/valheim/bepinex/BepInEx/plugins/` on install/update.

### Configuration
See [Mod config from Environment Variables](#mod-config-from-environment-variables)


## ValheimPlus
**Enable with**
| Variable | Value |
|----------|----------|
| `VALHEIM_PLUS` | `true` |

[ValheimPlus](https://github.com/valheimPlus/ValheimPlus) is a popular Valheim mod based on BepInEx.
It has been incorporated into this container. To enable V+ provide the env variable `VALHEIM_PLUS=true`. This can not be specified together with `BEPINEX=true`.
Upon first start V+ will create a new directory `/config/valheimplus` where its config files are located.
As a user you are mainly concerned with the values in `/config/valheimplus/valheim_plus.cfg`.
For most modifications the mod has to be installed both, on the server as well as all the clients that connect to the server.
A few modifications, like for example changing the `dataRate` can be done server only.

### Updates
ValheimPlus is automatically being updated using the same `UPDATE_CRON` schedule the Valheim server uses to check for updates. If an update of either
Valheim server or ValheimPlus is found it is being downloaded, configured and the server automatically restarted.
This also means your clients always need to run the latest ValheimPlus version or will not be able to connect. If this is undesired the schedule could be changed to only check for updates once per day. Example  `UPDATE_CRON='0 6 * * *'` would only check at 6 AM.

### Configuration
See [Mod config from Environment Variables](#mod-config-from-environment-variables)

#### Disable server password
Another popular mod for LAN play that does not require the clients to run ValheimPlus is to turn off password authentication.

To do so enable ValheimPlus (`VALHEIM_PLUS=true`), set an empty password (`SERVER_PASS=""`), make the server non-public (`SERVER_PUBLIC=false`) and configure the following section in `/config/valheimplus/valheim_plus.cfg`
```
[Server]
enabled=true
enforceMod=false
disableServerPassword=true
```
Alternatively start with `-e VPCFG_Server_enabled=true -e VPCFG_Server_enforceMod=false -e VPCFG_Server_disableServerPassword=true`.

Ensure that the server can not be accessed from the public Internet. If you like to have the LAN experience but over the Internet I can highly recommend [ZeroTier](https://www.zerotier.com/). It is an open source VPN service where you can create a virtual network switch that you and your friends can join. It is like Hamachi but free and open source. They do have a paid product for Businesses with more than 50 users. So for more than 50 users you could either get their Business product or alternatively would have to host the VPN controller yourself.


# Changing startup CMD in Portainer

Portainer retains the startup CMD from the first time the container ist deployed. This is also true if the container is updated using "Recreate" in combination with "Pull latest image".

Recent changes made it so that the startup CMD of the image was changed. To avoid recreating the container from scratch you can use the "Duplicate/Edit" function of Portainer by following the instructions outlined below.

![Portainer Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/portainer_step1.png "Portainer Step 1")

Stop the old container (1) and edit the name (2)

![Portainer Step 2](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/portainer_step2.png "Portainer Step 2")

Append `_old` or similar to the name (3) save the change (4) and click "Duplicate/Edit" (5)

![Portainer Step 3](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/portainer_step3.png "Portainer Step 3")

Change the name back to original name (2) (3) (4).

Unter Advanced container settings override (6) the command and enter `/usr/local/sbin/bootstrap` (7)

Make shure "Always pull the image" is enabled.

click "Deploy the container" to finish.

If your server starts and is working delete the old unused image and the old container.

# Synology Help
## First install
This is not an extensive tutorial, but I hope these screenshots can be helpful.
Beware that the server can use multiple GB of RAM and produces a lot of CPU load.

![Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step1.png "Step 1")
![Step 2](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step2.png "Step 2")
![Step 3](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step3.png "Step 3")
![Step 4](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step4.png "Step 4")
![Step 5](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step5.png "Step 5")
![Step 6](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step6.png "Step 6")
![Step 7](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step7.png "Step 7")
![Step 8](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/step8.png "Step 8")

## Updating the container image to the latest version
The process of updating the image clears all data stored inside the container. So before doing a container image upgrade, make absolutely sure that `/config`, which contains your world, is an external volume stored on your NAS (Step 4 of the [First install](#first-install) process). It is also a good idea to copy the latest version of the world backup to another location, like your PC.
![Update Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/update1.png "Update Step 1")
![Update Step 2](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/update2.png "Update Step 2")
![Update Step 3](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/update3.png "Update Step 3")
![Update Step 4](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/update4.png "Update Step 4")
![Update Step 5](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/update5.png "Update Step 5")
![Update Step 6](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/update6.png "Update Step 6")

### Error after download of new container image
If you are getting the following error after an Update:
![Error Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/synology_upgrade_error1.png "Error Step 1")

![Error Step 2](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/synology_upgrade_error2.png "Error Step 2")
```
"Failure: OCI runtime create failed: container_linux.go:367: [...]"
```

You will need to remove the container completely and perform the [First install](#first-install) steps again.
![Error Step 3](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/synology_upgrade_error3.png "Error Step 3")

Make sure to use the same folder settings as before so the existing `/config` and `/opt/valheim` directories are used.

The error is caused by Synology using the old image's `CMD` with the newly downloaded image. By removing the container and recreating it we're forcing Synology to use the new images `CMD`.

# QNAP NAS Help
## Creating container

As a prerequisite you need to create a folder where you will keep yours saves, backups and configuration.

Here is an example `docker-compose.yml` file that we will use in the next steps.
```yaml
version: "3"

services: 
  valheim: 
    image: lloesche/valheim-server
    cap_add:
      - sys_nice
    volumes: 
      - /share/CACHEDEV1_DATA/{path_to_folder}/config:/config
      - /share/CACHEDEV1_DATA/{path_to_folder}/data:/opt/valheim
    ports: 
      - "2456-2457:2456-2457/udp"
      - "9001:9001/tcp"
    env_file:
      - /share/CACHEDEV1_DATA/{path_to_folder}/valheim.env
    restart: always
    stop_grace_period: 2m
    deploy:
      resources:
        limits:
          cpus: '0.70'
          memory: 4gb
```

The most important part is `/share/CACHEDEV1_DATA/{path_to_folder}/config`. You need to replace **{path_to_folder}** with the folder path where you want to store data and configuration for your Valheim server.

Change your memory and cpu limit according to your available resources on QNAP. Current settings are 70% of single CPU and 4gb of RAM.

In this folder you need to create a file `valheim.env` to store configuration variables. 

Example `valheim.env`:

```
SERVER_NAME=My Server
WORLD_NAME=Dedicated
SERVER_PASS=secret
SERVER_PUBLIC=true
```


![Qnap Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_create_button.png "Qnap Step 1")

![Qnap Step 2](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_create_application.png "Qnap Step 2")

![Qnap Step 3](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_create_yaml.png "Qnap Step 3")



## Updating image

![Qnap update Step 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_update_resources.png "Qnap update Step 1")

![Qnap update Step 2](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_update_button.png "Qnap update Step 2")

In the image name you have to specify the image from the container definition `lloesche/valheim-server`.

![Qnap update Step 3](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_update_pull.png "Qnap update Step 3")

After the image is downloaded restart the container. As you can see the old image is now unused and the new one is in use by the container. You can now safely delete the old image.

![Qnap update Step 4](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/qnap_update_images.png "Qnap update Step 4")


## QNAP ZFS issue
We have had [a report from a QNAP user](https://github.com/lloesche/valheim-server-docker/issues/275) where Steam failed when using ZFS as the backing filesystem with the following error
```
valheim-updater [ 0%] !!! Fatal Error: Steamcmd needs 250MB of free disk space to update.
valheim-updater src/tier0/threadtools.cpp (3553) : Assertion Failed: Illegal termination of worker thread 'Thread(0x0x58a1d8f0/0x0xf7780b'
```
This appears to be due to a bad Steam/ZFS interaction akin to [this Steam bug](https://github.com/ValveSoftware/steam-for-linux/issues/4982) where very large ZFS volumes get interpreted as very small due to bad overflow handling. There are two workarounds available. Use a non-ZFS volume, or set a quota on the volume, e.g.:

1. Connect to the QNAP SSH console.
2. Get the ZFS volume ID from within the container
```
df /opt/valheim | tail -n 1 | awk '{ print $1 }'
```
3. Set the quota to 2TB or less from the QNAP SSH console:
```
zfs set quota=1TB "volume_id_here"
```

You could also try this one-liner from the SSH console:
```
CONTAINER="your_valheim_container name/id" \
  docker exec -t "$CONTAINER" df /opt/valheim | tail -n 1 | awk '{ print $1 }' | \
  xargs -I zfs_id sudo zfs set quota=1TB zfs_id
```

If you have access to a QNAP NAS running ZFS and can reproduce/debug this issue further, please open a new issue with your findings so we can update this section and provide more information here.


# OpenMediaVault Help
## Permission denied error
If you are running this container in Portainer on a OpenMediaVault NAS and getting the following error
```
valheim-server /usr/local/bin/valheim-server: line 110: /opt/valheim/server/valheim_server.x86_64: Permission denied
```

the cause is that the container's filesystem is mounted with the `noexec` flag. Meaning no files are allowed to be executed on that filesystem.

See [this page](https://openmediavault.readthedocs.io/en/5.x/various/fs_env_vars.html) for detailed information on how to disable noexec for newly created and existing filesystems.

For existing filesystems edit `/etc/openmediavault/config.xml` and remove the `noexec` option from the filesystem in question. The file should look something like this

![OMV 1](https://raw.githubusercontent.com/lloesche/valheim-server-docker/main/misc/omv1.png "OMV Step 1")


# License
Copyright 2021 [Lukas Lösche](mailto:lukas@opensourcery.de)  
  
Licensed under the Apache License, Version 2.0 (the "License");  
you may not use this file except in compliance with the License.  
You may obtain a copy of the License at  
  
&nbsp;&nbsp;&nbsp;&nbsp;[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)  
  
Unless required by applicable law or agreed to in writing, software  
distributed under the License is distributed on an "AS IS" BASIS,  
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and  
limitations under the License.

# Legal disclaimer
This Docker container is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by [Iron Gate Studio](https://irongatestudio.se/).  
[Valheim](https://www.valheimgame.com/), [Valheim dedicated server](https://steamcommunity.com/app/896660/) and [the Valheim Logo](https://irongatestudio.se/onewebmedia/ValheimPresskit.zip) are © 2021 Iron Gate Studio.
---

