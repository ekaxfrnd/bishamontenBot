#!/usr/bin/env bash

sudo snort -u snort -g snort -i eth0 -c /etc/snort/snort.conf -q -A full -D
watch -n 5 tail -n 20 /var/log/snort/alert > ../snort.log &