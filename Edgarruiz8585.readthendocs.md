X-Received: by 2002:a05:7300:8b84:b0:2d9:6373:ad24 with SMTP id 5a478bee46e88-2f5508508d7mr2362672eec.26.1778093135591;
        Wed, 06 May 2026 11:45:35 -0700 (PDT)
Return-Path: <ruizariasedgarmanuel@gmail.com>
Received: from MW6PR02CU001.outbound.protection.outlook.com (mail-westus2azlp17012017.outbound.protection.outlook.com. [40.93.10.17])
        by mx.google.com with ESMTPS id 5a478bee46e88-2f56fe891a6si8436794eec.39.2026.05.06.11.45.35
        for <noreply@github.com>
        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);
        Wed, 06 May 2026 11:45:35 -0700 (PDT)
Received-SPF: softfail (google.com: domain of transitioning ruizariasedgarmanuel@gmail.com does not designate 40.93.10.17 as permitted sender) client-ip=40.93.10.17;
Authentication-Results: mx.google.com;
       dkim=fail header.i=@gmail.com header.s=20251104 header.b=NM5ecVrn;
       arc=fail (signature failed);
       spf=softfail (google.com: domain of transitioning ruizariasedgarmanuel@gmail.com does not designate 40.93.10.17 as permitted sender) smtp.mailfrom=ruizariasedgarmanuel@gmail.com;
       dmarc=fail (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com;
       dara=neutral header.i=@github.com
ARC-Seal: i=3; a=rsa-sha256; s=arcselector10001; d=microsoft.com; cv=pass;
 b=Ysq98OK/RrKJe7zccDeVF1yCMyIcE1zMFjxuHTcomgi0c2MJXNEKrqaTJr+XKOauvFHdL8NvTX9xSoDK0lLv3vsmvMVzkF1LMYEU9bf12w8BLvBFQHUXnTcsWrpmyaq8N3QlRA7twYhzO2FQ5rLXKYTu7LAHbtE3DLPUnwQgsy3BKQDhcv/53PQesu4N0yB+E6m6prmuoPG4XNcK3WbxcC3wTwFYRL4h6ZnGr9JcBFDYopu8XACBUlsRcOzCij7JJAVS8l5KpMcOGs8WAvFMwJPnbfcDA6bugZn64+tlb/bk7x3PvBuqh9TeMBG5a0CtI4iFy/j2nIDjBRYNRkeiNA==
ARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;
 s=arcselector10001;
 h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;
 bh=mG8+HWJMxEgVQAhYeYumAvb9L8zQM5zgBVJsvle6G9I=;
 b=HtGpzlNROTei0AClCxqg8HWv6YzhSRgTzn0fbqNKSb80zRUVblaF7JPrBVIC6Vq9I82EpR1n45//PC9cm0hlRTJV6avaiYiNrIYZ2FaascmwLBK7RYQs9D7XU6xGlHaS0WEyMbMkk+eH74tSRp+m0S59TzvGGjZKlUkkehKG1tb/S00Ep5u60VtDBrEtlSLafZE2p5lZUVhYHNEGZ9E+RCGB/tfY6rP1p6ji2/Ld4OYo28Lo8J9mMmm8KFIumayLrhyT/WAiN9vyVykVMj8WSGhJcri5lZuD1oXUae34e3wFgRg7RymUYK+aHdyhf6NMc51mp5zN3nJuFqYZ3t/rUQ==
ARC-Authentication-Results: i=3; mx.microsoft.com 1; spf=pass (sender ip is
 2a00:1450:4864:20::12c) smtp.rcpttodomain=github.com smtp.mailfrom=gmail.com;
 dmarc=pass (p=none sp=quarantine pct=100) action=none header.from=gmail.com;
 dkim=pass (signature was verified) header.d=gmail.com; arc=pass (0 oda=0
 ltdi=1)
ARC-Seal: i=2; a=rsa-sha256; s=arcselector10001; d=microsoft.com; cv=pass;
 b=IRwI2cSfsS4rlmXE8Masqw3yoEou9XlvBx8POsW5XtNoO32pqG54P73i+wkdp5eNIC9JN3TmUP69VSqf2GqneCyKOcfC1XhrXQ3S6gdwZjSyWKxGOFQGXMs4pLQI9npXVdMnXdL4YNf13vgo/hMDr4QllT3LqoU+whVUeYy36XaEzYsyL40D5IUtgd8fXQ0ZZcp762d5SY3s5cuO9PE4bZBgYuTLJr6OZ4qg3Pfer1aQHhcLBhJCAD8M/Wbt+t/ZcXLxu/QgjxClBBVqGqPhDBiP7Dr+YCUN7sVKT+g7ufKW4hAVO7FIxrEVHO25cMiVLgnyXOkbM4iYat/id9E+tQ==
ARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;
 s=arcselector10001;
 h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;
 bh=mG8+HWJMxEgVQAhYeYumAvb9L8zQM5zgBVJsvle6G9I=;
 b=hIWMaFmx8AJJUl4+ASs4ADKIUbNGJggFvj9lxjUOZm0rZqpaOlXE3IxZruRHcqrbMerQgyZrr0RzlSKixjanW0HW8aKirXfvVDDcE+iRCW/eZswUk/dQ0FqbUFI8bfSun6swWANUO98coHgahL0Uy2FeDFKADXnNV7vqRbNqcru5qHjiGG0qVm2AjuDleWoW64zuJqVArUTQ6ckMcfuCdz5EBoFXhvx1bipq4+nw/X6hVUa7wJgeMzbJ4pduG5jZoOWwBUXt0qfSVrx/b4oAQ1Q5Gcig3AxAol5INSDkRh4BK65Fps17KgeBAS55kP54S3S2WSdYJXIrxlp6/qjuKQ==
ARC-Authentication-Results: i=2; mx.microsoft.com 1; spf=pass (sender ip is
 2a00:1450:4864:20::12c) smtp.rcpttodomain=github.com smtp.mailfrom=gmail.com;
 dmarc=pass (p=none sp=quarantine pct=100) action=none header.from=gmail.com;
 dkim=pass (signature was verified) header.d=gmail.com; arc=pass (0 oda=0
 ltdi=1)
Received: from PH7PR03CA0018.namprd03.prod.outlook.com (2603:10b6:510:339::15)
 by LV9PR21MB5069.namprd21.prod.outlook.com (2603:10b6:408:2e9::19) with
 Microsoft SMTP Server (version=TLS1_2,
 cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.9913.3; Wed, 6 May
 2026 18:30:00 +0000
Received: from SJ1PEPF000023D8.namprd21.prod.outlook.com
 (2603:10b6:510:339:cafe::c7) by PH7PR03CA0018.outlook.office365.com
 (2603:10b6:510:339::15) with Microsoft SMTP Server (version=TLS1_3,
 cipher=TLS_AES_256_GCM_SHA384) id 15.20.9891.16 via Frontend Transport; Wed,
 6 May 2026 18:29:59 +0000
Authentication-Results: spf=pass (sender IP is 2a00:1450:4864:20::12c)
 smtp.mailfrom=gmail.com; dkim=pass (signature was verified)
 header.d=gmail.com;dmarc=pass action=none header.from=gmail.com;compauth=pass
 reason=100
Received-SPF: Pass (protection.outlook.com: domain of gmail.com designates
 2a00:1450:4864:20::12c as permitted sender) receiver=protection.outlook.com;
 client-ip=2a00:1450:4864:20::12c; helo=mail-lf1-x12c.google.com; pr=C
Received: from mail-lf1-x12c.google.com (2a00:1450:4864:20::12c) by
 SJ1PEPF000023D8.mail.protection.outlook.com (2603:10b6:a0f:fc02::549) with
 Microsoft SMTP Server (version=TLS1_3, cipher=TLS_AES_256_GCM_SHA384) id
 15.21.25.1 via Frontend Transport; Wed, 6 May 2026 18:29:59 +0000
Received: by mail-lf1-x12c.google.com with SMTP id 2adb3069b0e04-5a865004748so1364152e87.0
        for <noreply@github.com>; Wed, 06 May 2026 11:29:59 -0700 (PDT)
ARC-Seal: i=1; a=rsa-sha256; t=1778092197; cv=none;
        d=google.com; s=arc-20240605;
        b=LZVE+sNqsCDM2NGHL+tLOFLJ3pubu5acRFjprF6fXb77HXB1VO/HPUdLOMQQf81qqZ
         TPPj3LnKIGt1wPstK4ozaCe6gOBObYP/ByiGm8zAAhp6vtIOAEcT6HeuchxAnuGx7qZF
         SJ0y5s1jslPZ9rFQhKeEH5YSS9JP+SoG3xOIqJf9324v4SJD36TBeaL766YISeJxiMFT
         LqWU7NoeiJneRuDhGoOixk07FhXLeSZybM7mzZwibB0ETZnYHHoFxZsQJlMZ8Vps1Iad
         d73ukPtTRnW6cid69Ail0Tf5QWz3s5XD4sSdWGrY8ETAIkLxCOBw5rMsh03Sxt3WwobC
         /Nfg==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20240605;
        h=cc:to:subject:message-id:date:from:in-reply-to:references
         :mime-version:dkim-signature;
        bh=mG8+HWJMxEgVQAhYeYumAvb9L8zQM5zgBVJsvle6G9I=;
        fh=s2UxhlaVzlkiN9k6yjPRefcPb7uGD46gG17VKd4fAi8=;
        b=iMrK50vZC2tEJLWCxWaAvX0hYx321ex2Y3r30MeMOO166Q2ddsTPr189VWkQ2ZyACi
         hW4kawwnWTJEX0ClcO+34eHqb06Lhd2Lr9aUdlhcfELihdYzAqOym8hGMDl7p4jGTJus
         X6TR03Q80560sdfWXjs1allZpnOWgLzl0PPw7f9rU75Au5GsPGfFJjVpB37xcKcvAJNI
         7JhUmq7iUekBE4IFSm5HUVmuF8ZMgumm2byXgHmD/xVaCRF2an0PTbwjhYghoOFJTBcq
         vtAM/ukVIDXVZaDlz0NJDw30dmdoVxuw7OC3UZDcyA+DmHbN8mjIHrDWHrUkEWu+1UG7
         e2lA==;
        darn=github.com
ARC-Authentication-Results: i=1; mx.google.com; arc=none
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=gmail.com; s=20251104; t=1778092197; x=1778696997; darn=github.com;
        h=cc:to:subject:message-id:date:from:in-reply-to:references
         :mime-version:from:to:cc:subject:date:message-id:reply-to;
        bh=mG8+HWJMxEgVQAhYeYumAvb9L8zQM5zgBVJsvle6G9I=;
        b=NM5ecVrnvhCYBd1mce1a5DWZ/QI7CgzVu0ZgfQEnnqVKLz+bPSHbMEUXh/soZy75NL
         GOIcK1gLJSHYqQtg30+RoCO+ZGxqsTbOgGHwtGdfj0G9LP/YUjgC4MBlJFE8VN4i6XTY
         gG5mNeyBEGA0XDACJHej4tDRUIBMxMyHwAIqjpENM9GAA7/vAPTEy7j+G+4f2H7NvaWL
         nZwJf4w6HAkHpbwLlUJTa9iYWq1nHg2RuYDkeu/1OJdYBVsubMmNefvI8IzZ03RUG2Qy
         PTO6BzgSyIGwM9BRsz1ZyNrcx1FoMbaLm4Ltq3zxBwUICVRlDZY3i35+B3j41hwqWNgs
         OK8w==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20251104; t=1778092197; x=1778696997;
        h=cc:to:subject:message-id:date:from:in-reply-to:references
         :mime-version:x-gm-gg:x-gm-message-state:from:to:cc:subject:date
         :message-id:reply-to;
        bh=mG8+HWJMxEgVQAhYeYumAvb9L8zQM5zgBVJsvle6G9I=;
        b=qdLKZd0qSJzTPE/EOCg7NBHgmrZExgwgV0/pdNzzLixCnEq5FC76Bp9A2VlDe2FSc6
         XevrtOoH2uRa+4S85EqrokeMBTG1kShmLJQkO6nroIli0pAs9oW+XZW8zbSJl2x7UNWL
         UIWu5CoqTXucRFOjNp+RqKdLoRMB2xLuFff3ZMoJrMcWqtjZQwoS3h5JAvRVdnBdx7Ip
         GruZkFLQTtK3tHY9v99il1PfwLyVjb8ke86C1N56leJ/DsRnbIV+G6uSuX0RAuiW1Kdq
         LNP8G5j2YDqYs5u/E9hScaqkVh4XA42LK3RczO64NVUSBh6bLFWrur3BklihUvi6JIDa
         9kYA==
X-Gm-Message-State: AOJu0YxtwzEqu1Kqp5BphIxxGrXxPeJJxALj+vlUAa0OsEpWFi0dBi8g
	XQlV92bnLQevo8JhLlYvnjSYna3aNCFQO64ESsPlbqIuDocFExRozUtfUbPG/ZKMwGXE69cknvb
	XPMrKXYMSuXRnZuINzvSyr+FvdkZKKuZwo7qiI/NWL99DkgZ44OgDtkKVBoBsehRL6gMtULCuxw
	==
X-Gm-Gg: AeBDieucUPoAUF2kJiHy+JPGXi0++MttX5+17gA5Eu0cwsvEpW2FCjsvK3prcFQ6WMm
	vi5+ZCMxapo2Ooq8lNtwkP/+uQp64r2f+ZrD2Lh+gV0nowDB4++jsyV86QAedPze6dXgUDoNW7K
	u2yZs4FtR4KIxmgQ2sPxwx/D5OA5b5emcvLRcvbkpINZBwcByXJBQUcQ1lW1Xo498N74o+FVU+W
	elrFmbu4gFus9rJwKkgvV2ab4N0nt/CgLmEaA6IachtkufaekSKUdr9rAa7GElz9VtsI8j17jJY
	Gz41R5A9l4E+mke+vE+ogFHICB11UPJmdnucnsQhH/SVMSxSycKoy98ViAS7l/B6cdo+jqtk
X-Received: by 2002:a05:6512:10cb:b0:5a8:628c:60b0 with SMTP id
 2adb3069b0e04-5a8875ba84cmr1592385e87.2.1778092196768; Wed, 06 May 2026
 11:29:56 -0700 (PDT)
MIME-Version: 1.0
References: <rails/rails/pull/57307@github.com> <rails/rails/pull/57307/before/0a83ccbd094f1d82a4a9fae3e362981732369517/after/81bf54feb84a05ffe5faf7ddc37efc3fad032e2e@github.com>
 <CAE9fHhj0KyEp+9N5MR_FXY1x2KZDGYWx2GzENUS1fj13SJzUtQ@mail.gmail.com>
In-Reply-To: <CAE9fHhj0KyEp+9N5MR_FXY1x2KZDGYWx2GzENUS1fj13SJzUtQ@mail.gmail.com>
From: =?UTF-8?Q?=C3=89dgar_Manuel_Ruiz_Arias?= <ruizariasedgarmanuel@gmail.com>
Date: Wed, 6 May 2026 12:29:44 -0600
X-Gm-Features: AVHnY4L0X5Ch7JGtKaPzC4aUCJj396MBA90es70G-PbWxThah78YSAU60gET9UA
Message-ID: <CAE9fHhiNwTOF9HzoLC2omJrkY9XbO_CxNLLxv-e+WUN+dyVLFA@mail.gmail.com>
Subject:
	=?utf-8?B?W0VYVEVSTkFMXSBSZTogW3JhaWxzL3JhaWxzXSBDb2VyY2UgYEFjdGl2ZVJl?=
 =?utf-8?B?Y29yZDo6UmVsYXRpb25gIGluc3RhbmNlcyBhcyBgLmluY2x1ZGVzKOKApilg?=
 =?utf-8?Q?_compliant_arguments_(PR_#57307)?=
To: noreply@github.com
Cc: rails@noreply.github.com, push@noreply.github.com
Content-Type: multipart/alternative; boundary="000000000000c4314b06512a590e"
Return-Path: ruizariasedgarmanuel@gmail.com
X-EOPAttributedMessage: 0
X-EOPTenantAttributedMessage: 72f988bf-86f1-41af-91ab-2d7cd011db47:0
X-MS-PublicTrafficType: Email
X-MS-TrafficTypeDiagnostic: SJ1PEPF000023D8:EE_|LV9PR21MB5069:EE_
X-MS-Office365-Filtering-Correlation-Id: 69ec2de0-be7a-46cf-c1aa-08deab9d7af3
X-MS-Exchange-AtpMessageProperties: SA|SL
X-MS-Exchange-EnableFirstContactSafetyTip: enable
X-O365-Sonar-Daas-Pilot: True
X-Microsoft-Antispam:
	BCL:0;ARA:13230040|69100299015|39142699007|31052699007|7149299003|7093399015|4022899009|55112099003|13003099007|8096899003|4076899003|16102099003|18002099003|56012099003|19002099003|22082099003;
X-Microsoft-Antispam-Message-Info:
	=?utf-8?B?Rk5LTHl4VkU2Nm1tQkgvRW91MG5XN0pKcGd1TlQ3UldVODE4eHQrV1RkUG1D?=
 =?utf-8?B?VExBd0F3TDFWWFBSUFBNZDJXSlhzUmdtN2xrWnJ6TnU2UnVoNmVWM2ZQczRn?=
 =?utf-8?B?bVdnSklXWEtLZlppZzlMQVVsd05vTGRxclpPYlo3SDQ4VllpVmg2YXBIVnhx?=
 =?utf-8?B?d2lRdk9EdUtkUjRIak8zcmVqQ0FrNFd4YzMvdVpHMVNjZWI3a01Xa1h4clBP?=
 =?utf-8?B?VlF6SzQ2ZWxGcXdzdlBHdk1KOFlrYTZsVWNaNjRFcVlvY3N1UEpPMTJ1V0cr?=
 =?utf-8?B?RzdmWU1JUHVGQnVNck1EakF0dDNFalpBTWYxWHhTeGlSNGVpeEdYRWpzcFJn?=
 =?utf-8?B?YURweHJzd0Vxa2ZlT2lqWGZRTFB2MEhEa0JxSkFBM21OWm5KUFRhVE1nbXBt?=
 =?utf-8?B?WjJscTNuNXdKY2pscXR5Q1lRdFdTMWRlWXo0RFZLenhYQXlxZFpFY1AzR2I0?=
 =?utf-8?B?c0hDclQ0RVRaUXFMbG9jdk5wUzhwQXVrQ1NUUzY5dW1rNGxlOXMrRXZpUzFP?=
 =?utf-8?B?Rnhyc1JhVUw1aU9MSkJWSERyRU9CaTkra0lRZTBCY3FaWTNnUFlXN2dCOTJu?=
 =?utf-8?B?bjNESW13akdrVVQ0NkFtYUhENTVTcm95MzVKUXMvdzN3QnJhTVNNZVo0MTRS?=
 =?utf-8?B?SDVVYUEreEZXbzJMUU9VOEl0b1lWQWtzYkh2cUxSY3BtaFZOZy9OeWxiYnp2?=
 =?utf-8?B?VWRVVnpleCtWdkxoNXFkNHVJY3VERWwwbnVrQ3h5bWFXd1hoTkNST1Q4dHlC?=
 =?utf-8?B?K0I1MTdyM01ReFI1blBtbXpBQjNMRTIyTHFuNE14djRTbWt1a0dScCszb2Za?=
 =?utf-8?B?R0FxQUFFSEd6aTYzOVNKWkVpd29YZXA5VCtwSCt2d2lhWmhSM3RqUXEwQmlk?=
 =?utf-8?B?Ujl2TFNDYUhhWEE5VVRnaFZhL3JHR2dQYmwxdEswZGhwcm1OUHZDQ1ZzZU91?=
 =?utf-8?B?L1VLRHRQRzZjd2MyNnZDYitlR2F2cExCRThuOURUcmIzWkhqYkRIRkNWSkNk?=
 =?utf-8?B?QlhtWjJTWmpNcDhIdngxVzUyUitqeUE2ZUl5YW5UbmFzNCtFd0xOVVRGaGdW?=
 =?utf-8?B?aUoza1J0MzlrR3c4Uk1XUnMzRng4ZGVDMDVOTFBKQnl4L251NmRxSWNmS3RG?=
 =?utf-8?B?aVlBUWxuZ3FBN1FjWGRjS3J5Um51a2lwMWUrbG5sZXduYnliRUNaZ1F0dEw3?=
 =?utf-8?B?eHZtVWlRNlU5bDNicUNpNVBmVEowdyt4KzE3MEVzcHhsSWVPZUUzbkhxcFVQ?=
 =?utf-8?B?blBabjJ1eUZnSml5VDg4VXhOMThxSnZHaGRxckEycVBoWkRwa0lqN0x5SEhp?=
 =?utf-8?B?N1VWdUFiQWZ2Q0JsUVpJRituUm9nNzB4bXF5ZjRHYUJHa3RaVjJCQUtNYzNz?=
 =?utf-8?B?MFdFSEJodmhEMzhkb1BQTk5wZG90enZycFd4T2RJRmVLeG5jaDdkM0M3aTJ2?=
 =?utf-8?B?M0IwUEsyNXZFY0U3alk4Tm5SSVlJMjUzTFJleXFlV1lsK0UxdE1qUDQ5QlRr?=
 =?utf-8?B?dG1vRFBzUG1OVWVCUlYzZ1lLeTh1NEhCYzA1ZmQwYys0bTJKV1JGKy9pN2dv?=
 =?utf-8?B?eFhNVU5LRUUyWThyOEhpVzdJR3liQk84NWRHK1BoYUdISVYxeWdtbmNVcXNE?=
 =?utf-8?B?SlYwRmJkaEhHV0lBQWRIN2JVVFFIVkZHcXhhNncyVk1LSjdNN28vRDdQU3E1?=
 =?utf-8?B?QW15aXg2UWswRlZybW00OUdqUWgyd3dqMFpEYkxZcGR5N3U5OUE5R0FnL1da?=
 =?utf-8?B?T3hQaUgzdmFYdEVJWXAvTVlMOTh6OUJqSUp0S1ViRHpaNU54MGN5ZDgrSERq?=
 =?utf-8?B?MmFoc1RpZ253N1pMOVNYUkNVQU83L3VTN3ZaeTYydXkzdVhlZWg3VzFQMUVn?=
 =?utf-8?B?VEhhQkhZL1RpNk1ucVZYMnRYcm56cGNPQUJuMWRHcUtVQUQrUklKN3VQZUpX?=
 =?utf-8?B?RFVKcnpyS2hQY2NoVHhrbVoyNDFmZW01UkNzQmNjeXg1NUtCdXdvZFVFWDE1?=
 =?utf-8?B?VldUbjh5L1RuU29nU1kvVDBhY1ExTnR0NUwvZ1dFQmhrd2kxek90NUVSYW1O?=
 =?utf-8?B?djFJeFRBVUZRSjFGd1RJYUJ2NkNYRjMybkJSZUk5cDh4RHYrWkZlMnBTakkv?=
 =?utf-8?B?YUJtZ0s1L2M4RzlDaC9neFB2ZHp6T09WWERPZ21KYnRPMzUwbXB0MkNpdkVS?=
 =?utf-8?B?SmwrTFVSdTBOS3dYWldUNkt1bHRpNEVRMHVYdkRvQWN3UzZGWGFleEJCS0gx?=
 =?utf-8?B?eUxvMm9FbGN0bTRkenRrVnptZTRsN3VidWlhTHAyaUpYOUN3eXAya0dSNlZF?=
 =?utf-8?B?bjJxZGdoRytnWDdhcmFzd2ZCV0U5bG5xOE1sWmNyQ0xjaFBacSs1ckJlNk5Q?=
 =?utf-8?B?ay9zOVVMdUMvaldqemlHcFl6VmU5QTRUOGkzQ3VDbVNLVkZDU0tyRnFzV292?=
 =?utf-8?B?WDJJbzF2VGswejdPd0p0ZTZsNDNWb2RSNXh2OFkwRVQxVGhleXJndEN2QUVE?=
 =?utf-8?B?c1VCVEM0b0JTOEVnVFZKcG9yZ1lMVlVqRDVkTW5NYzZ5WmZCOSs5eVNTTUdY?=
 =?utf-8?B?eUZZb0lEU09IQVl2L3NEL2pVYmg5d3BSSjVGMGFuVkZ1eGtieUJXMWdUaSsx?=
 =?utf-8?B?c3N2VUExV0RZVmp5T0RDOXdnKzF3V0QwSzhJak1qSWhZU2cxWlNqNTZtSVBt?=
 =?utf-8?B?STlnR0NTZndDOXQxQ1J0dXFTcEhWczRLc25BeC9MQy9peWxOTGUzQnI5QlJW?=
 =?utf-8?B?eEZwakRMZEpRS1BuWC9vOVBQNWN3N1laT3Nwb0VEZm5xZS9XeGIxelArVVN5?=
 =?utf-8?B?ZnR6SFBWcUpjallSVDVxOGVBNU9lZk5DNkhRdDNZMUFXVjJ6ZEhLanMzemJJ?=
 =?utf-8?B?QTBzTXRiTDdPU21hbW5tYUZZMWZrRklNbHI4MERpSll6WlN6ZkJtUGxOT1Ez?=
 =?utf-8?B?b3gvOURhZGNNT3Z2SXFXL2ZlNEdLTkRURmd1R0xZNGc2RmF6MVEydG1VNGEz?=
 =?utf-8?B?cjdEN0FOcWFuWWhULzQ1R1VNQ2FTc1BrbGJDWTliV25pZTR2QW81ZVZ1K1Bi?=
 =?utf-8?B?aXk2MmZvc0pTeWVjZWZ2RHpEWWhieERLRVlRSll3L0lhcDgvVld3SXIrZTJF?=
 =?utf-8?B?dW9TdjdLYkpCSlRzRnVnVVh1NDUxZkZFTXpSKzNjenlXRFg5TjdiZ1V4VEFo?=
 =?utf-8?B?NWhSSEZBSHRLbW5SU3ZLYVlJNE9tdEx2WmJNOWJ3SzNYYzVJUThTb2RFNGRV?=
 =?utf-8?B?N0VPWGY2K0NNejJtYnJlUit6K3B0U0tIWGR1MW5QelVwRmx2OUUveFJSYXU2?=
 =?utf-8?B?NXdxUWVPb3p0eEp1THpBZEVGOWJlcS9uVDRDelBIWGVIZ1hjdmxzeDh3QWIx?=
 =?utf-8?B?ZFpjZml1YlJWRlBTM0VNa3VvQzJRRVIwa1h2UHJNMGsxaXNmK3pjbnJzSVVt?=
 =?utf-8?B?UW1zOHg2Nmk4VStGM3ZtMEs3Qk5oQVV0L1lKNVVtRUVVL0F3RUxQeUNCdW5l?=
 =?utf-8?B?N2duZnRGMTgzbHJjVmppK2ZzRzI4aVc4SU9UOWRjeUVpdkk1b052NUhyWWFr?=
 =?utf-8?B?bGZBRDdKUVRRYzN0ZXYzZXJnQ0daSzhVTzZ4bndJWEZJTUJkV01RdjljMy9S?=
 =?utf-8?B?Y1pzUVBTV3hvT3pkdERUU0ZDaGw0WnA2Vk96R011L0VrSnV1OFlLaXA1YUZs?=
 =?utf-8?B?UkVUeUxGamRrME01VWtpNm1Fdzd3dklLS1JYU3ovWEtJQnVHNUFLNTZIRlln?=
 =?utf-8?B?eFkyT2xocUdPclNQL3dxYkVJcVFPdmh6dnlSdGRiUFZZYjdTL2lNWCtzQlVP?=
 =?utf-8?B?bnNRM09ZU1dvVzhMVWdFVVljSWF3Z2VIR3pwSkt6R3R3ZU42Y2V1L3BnL3Nk?=
 =?utf-8?B?azhEYW1qMmV1M3NLZUxkaWhuTGtZdnMvcWpBa1FZUWNJTVRvWk5EUUxBZHV1?=
 =?utf-8?B?d3BjaU54Z2dNNG5VU09tcU1obThXQT09?=
X-Forefront-Antispam-Report:
	CIP:2a00:1450:4864:20::12c;CTRY:;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:mail-lf1-x12c.google.com;PTR:mail-lf1-x12c.google.com;CAT:NONE;SFS:(13230040)(69100299015)(39142699007)(31052699007)(7149299003)(7093399015)(4022899009)(55112099003)(13003099007)(8096899003)(4076899003)(16102099003)(18002099003)(56012099003)(19002099003)(22082099003);DIR:INB;
X-Exchange-RoutingPolicyChecked:
	DcMS9FhfGcfR9GKBA67rpYYvyrhcILKBtjdNJYwdpkOQxKv54ePdHs1yjHktbbpZINRFMrnTZAoH5G0cPDD1qmSu5p/QAa6N8+IjlFmUzbpHvo5AcqeBUANnVQeHS89cdVmljMbIXHDFZ6xv/WpEDhRCKQbsmtBC3SmD41DoS8DylLvNez1THOpfJ44hAAa+dD6inRdg0S3DQyPRdodN5h1keoC254Z4LWT43eWjKroYpVwL11DW+s8VPKl/DUNsR3ZWy6CENcx/pJvESUkSdvG2RRHUeOl6BUmFqmxaLBcC4fG+GkyPHyTCCHqbNniwzkOQhNnZ9jY4rU1Koj0RGQ==
X-OriginatorOrg: microsoft.onmicrosoft.com
X-MS-Exchange-CrossTenant-OriginalArrivalTime: 06 May 2026 18:29:59.3697
 (UTC)
X-MS-Exchange-CrossTenant-Network-Message-Id: 69ec2de0-be7a-46cf-c1aa-08deab9d7af3
X-MS-Exchange-CrossTenant-Id: 72f988bf-86f1-41af-91ab-2d7cd011db47
X-MS-Exchange-CrossTenant-AuthSource:
	SJ1PEPF000023D8.namprd21.prod.outlook.com
X-MS-Exchange-CrossTenant-AuthAs: Anonymous
X-MS-Exchange-CrossTenant-FromEntityHeader: Internet
X-MS-Exchange-Transport-CrossTenantHeadersStamped: LV9PR21MB5069

