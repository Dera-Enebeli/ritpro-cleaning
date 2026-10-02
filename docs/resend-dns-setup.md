# Resend DNS setup (GoDaddy)

Required so the quote form can deliver. The DNS for `riteprocleaning.com.au`
is hosted at **GoDaddy** (`ns27/ns28.domaincontrol.com`), not Vercel, so these
records must be added there.

## Step 1 — Add the domain in Resend

At [resend.com/domains](https://resend.com/domains) → **Add Domain**:

- **Domain:** `send.riteprocleaning.com.au`
  (Resend recommend a subdomain over the root domain so a compromised
  sending reputation cannot damage `riteprocleaning.com.au` itself.)
- **Region:** `us-east-1`

> **On region:** Resend has no Australian region. Available options are
> `us-east-1`, `eu-west-1`, `sa-east-1`, `ap-northeast-1`. `us-east-1` is
> the default and has the largest, best-warmed IP pool; `ap-northeast-1`
> (Tokyo) is geographically closest to Brisbane. For transactional email,
> reputation matters more than the extra ~100ms of latency, so `us-east-1`
> is the safer pick. Change it later by deleting and re-adding the domain.

Leave **Receiving** off — these are outbound quote notifications only.

## Step 2 — Add 3 records in GoDaddy

GoDaddy → **My Domains** → `riteprocleaning.com.au` → **DNS** → **Manage DNS** → **Add record**.

| # | Type | Name  | Value | TTL  |
|---|------|-------|-------|------|
| 1 | MX   | `send` | `feedback-smtp.us-east-1.amazonses.com` | 1 hour |
| 2 | TXT  | `send` | `v=spf1 include:amazonses.com ~all` | 1 hour |
| 3 | TXT  | `resend._domainkey.send` | *(copy from Resend)* | 1 hour |

Record 1 is priority `10`.

> **The two traps here**
>
> 1. **Resend shows you full domain names. Paste only the prefix.** It
>    displays `send.riteprocleaning.com.au` and
>    `resend._domainkey.send.riteprocleaning.com.au`, but in GoDaddy you
>    enter just `send` and `resend._domainkey.send`. GoDaddy appends the
>    domain for you. Pasting the full name gives you
>    `send.send.riteprocleaning.com.au` and verification silently fails.
>
> 2. **Record 3's value must be copied exactly** from Resend's
>    Domains → `send.riteprocleaning.com.au` → **Records** tab. It is a
>    per-account DKIM public key starting with `p=`. It cannot be
>    guessed or reused. Resend's dashboard is the only source for it.

Do not add an MX record for the root domain. Nothing receives mail on
`riteprocleaning.com.au` today (it has no MX records at all), and this
setup is send-only.

## Step 3 — Verify

Usually under 15 minutes, occasionally up to 72 hours for global propagation.

Check from anywhere:

```sh
sh scripts/check-resend-dns.sh
```

Then click **Verify DNS Records** in Resend. If it sits pending past an
hour, confirm you did not paste the full domain into the Name field.

## Step 4 — After verification (optional but recommended)

Add a DMARC record so nobody can spoof your domain in email. Start
permissive and tighten once you are confident nothing legitimate is being
blocked:

| Type | Name | Value |
|------|------|-------|
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:riteprocleaningservices@gmail.com` |

Once Resend is sending reliably, move `p=none` to `p=quarantine`.

## Then hand back

Once verified, the remaining work is a single command with the API key from
Resend → **API Keys**. Nothing else needs doing.

## The alternative, if you want quotes landing today

Skip DNS entirely. Sign up at [resend.com](https://resend.com) using
**`riteprocleaningservices@gmail.com`** as the account email and paste the
`re_...` key. Since that is the same inbox the site sends *to*, the default
`onboarding@resend.dev` sender delivers without any domain verified. You
can do the DNS properly afterwards.