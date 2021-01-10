# Deployment
- deployed using Nginx.
    - I built the prod version through "npm run build" for frontend. Copied the content of that folder over to Nginx's root folder, which is directed by the file in /etc/nginx/sites-available. This serves the static react app fine.
    - I also deployed the backend through Nginx (cuz why not? my router's port 80 is forwarding to it already anyway...). This one is deployed through reverse proxy - I'm guessing I could have done the same with frontend as well with a dev server, but whatever not like building the prod version took long. (I can have multiple reverse proxies setup with Nginx; just need different url to forward it to). below is what I have setup for node process. After I had that setup, all i had to do was make sure my frontend was consuming the api through /api/whatever, which is being served through the Nginx, not my [localhost](http://localhost) (because other networks can't reach my localhost)

    location /api/ {
    		proxy_pass http://localhost:5000/;
    }


# Sources
Most of basic code came from https://www.youtube.com/watch?v=7CqJlxBYj-M
This app as of now doesn't have edit and delete functions, so I didn't bother writing those code.
But the backend side has all the routing for edit and delete functions, so if I desire I can come back later and add those features as well. 

