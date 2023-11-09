# modulefed-react-test
 
the guide i followed - : "https://medium.com/@samho1996/microfrontend-with-module-federation-in-react-98b72b347238"

step to start the environment : 

#1 - Within each application, install webpack 5 and related dependencies. 
( yarn add -D webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader css-loader )

#1.5 - Must also add Bootstrap and axios within each application
( yarn add bootstrap && yarn add axios)

#2 - Run your home-app and header-app.
( 
    cd home-app && yarn start
    cd header-app && yarn start 
)

#3 - Navigate to Home App http://localhost:3000