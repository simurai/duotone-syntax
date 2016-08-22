#!/usr/bin/env bash

set -o nounset
set -o errexit
#set -o xtrace

#
# Regerate the palette's duotone.css file. Use when the duotone
# less files change.
#
# I couldn't get the browser embeded less.js stuff to work locally -
# there are unsolvable CORS issues with the file:// protocol. This
# means that you would need to be running a local web server to view
# the page.
#

dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

lessc "$dir/../index.less" "$dir/duotone.css"
