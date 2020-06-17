#!/bin/bash
function start_yolodice {
    node sites/yolodice/index.js $YOLODICE_PRIVKEY $YOLODICE_CURRENCY $TARGET $STOPLOSS
}

. config.sh
