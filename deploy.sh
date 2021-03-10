#!/bin/bash
#once you have git pull-ed
#run "sudo bash deploy.sh" to copy the necessary files over to nginx directory and restart nginx

cp -r ./build /var/www/michaelyoung.kim/encourage
echo copy complete!

systemctl reload nginx
echo nginx reloaded!