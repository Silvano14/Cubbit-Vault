docker network create --subnet=172.18.0.0/16 vault-net
echo "Network 172.18.0.0/16 created"
echo "Pulling mongo..."
docker pull mongo
echo "Mongo are starting at 172.18.0.2:27017..."
docker run \
-d \
-p 27017:27017 \
--ip 172.18.0.2 \
--name mongodb \
--network vault-net \
-v $PWD/mongodb/data:/data/db \
--rm \
mongo

echo "Creating images for cubbit-vault.."
docker build \
-t cubbit \
-f docker/Dockerfile \
.

echo "Running cubbit-vault.."
docker run \
-p 3000:3000 \
-p 3001:3001 \
--ip 172.18.0.3 \
--network vault-net \
--rm \
cubbit \
yarn start-app