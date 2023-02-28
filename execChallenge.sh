#!/bin/sh

notStrRegex="^[^a-z|']"

functionCall=$1\(

for arg in $(seq 2 $#)
  do
    notStr=$(eval echo \$$arg | grep -i -E $notStrRegex)
    functionCall=$functionCall${notStr:-\"$(eval echo \$$arg)\"},
  done

functionCall=$functionCall\)

node -p "$(cat './src/challenges.js') $(cat './src/challenges2.js') $functionCall"