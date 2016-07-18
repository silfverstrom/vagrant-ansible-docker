# file run.sh
#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
    npm run start:production
else
    npm run start:dev
fi
