#!/bin/zsh
set -e
export PATH="/Users/pedrodavics/.nvm/versions/node/v24.19.0/bin:/usr/bin:/bin:/usr/sbin:/sbin"
cd /Users/pedrodavics/projects/zarys/climhub-landingpage
exec npm run dev -- --port 3001
