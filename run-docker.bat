@REM docker network create --subnet=172.18.0.0/16 vault-net
@REM docker pull mongo

@REM docker build ^
@REM -t cubbit ^
@REM -f docker/Dockerfile ^
@REM .

docker run ^
-d ^
-p 27017:27017 ^
--ip 172.18.0.2 ^
--name mongodb ^
--network vault-net ^
-v %cd%/mongodb/data:/data/db ^
--rm ^
mongo

@REM docker run ^
@REM -p 3000:3000 ^
@REM -p 3001:3001 ^
@REM --ip 172.18.0.3 ^
@REM --network vault-net ^
@REM --rm ^
@REM -d ^
@REM cubbit ^
@REM yarn start-app