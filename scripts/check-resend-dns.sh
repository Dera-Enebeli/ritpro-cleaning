#!/bin/sh
# Checks whether the Resend DNS records for the sending subdomain are live.
# Re-run this after adding the records in GoDaddy. Exit 0 = all good.
#
# The DKIM value is per-account and must be copied from Resend's
# Domains > <domain> > Records tab. This script only checks that *some*
# DKIM public key is published, not that it matches yours.

SUBDOMAIN="${1:-send.riteprocleaning.com.au}"
ROOT="riteprocleaning.com.au"
fail=0

echo "Resend DNS check for ${SUBDOMAIN}"
echo "------------------------------------------------"

# 1. MX - feedback loop (SPF alignment for bounces)
mx=$(dig +short MX "$SUBDOMAIN" 2>/dev/null)
if [ -n "$mx" ]; then
  echo "  [OK]   MX    $mx"
else
  echo "  [MISS] MX    expected feedback-smtp.<region>.amazonses.com"
  fail=1
fi

# 2. TXT - SPF
txt=$(dig +short TXT "$SUBDOMAIN" 2>/dev/null | grep -i "v=spf1")
if [ -n "$txt" ]; then
  echo "  [OK]   SPF   $txt"
else
  echo "  [MISS] SPF   expected \"v=spf1 include:amazonses.com ~all\""
  fail=1
fi

# 3. TXT - DKIM (selector resend._domainkey + subdomain)
dkim=$(dig +short TXT "resend._domainkey.${SUBDOMAIN}" 2>/dev/null | grep -i "p=")
if [ -n "$dkim" ]; then
  echo "  [OK]   DKIM  ${dkim:0:40}..."
else
  echo "  [MISS] DKIM  expected a TXT starting p= at resend._domainkey.${SUBDOMAIN}"
  fail=1
fi

echo "------------------------------------------------"
if [ "$fail" -eq 0 ]; then
  echo "All records present. Now click Verify DNS Records in Resend."
else
  echo "Records missing. Add them in GoDaddy, then re-run: sh $0"
fi
exit "$fail"