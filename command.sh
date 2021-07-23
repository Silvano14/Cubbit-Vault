docker network create --subnet=172.18.0.0/16 vault-net
echo "Network created"
echo "mongo db are starting at 172.18.0.2:27017 ..."
docker run -d -p 27017:27017 --ip 172.18.0.2 mongo