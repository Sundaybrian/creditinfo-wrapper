dev:
	yarn run dev
amka:
	sudo pg_ctlcluster 10 main start
restart:
	sudo service postgresql restart	
kill:
	sudo kill -9 `sudo lsof -t -i:3001`
serve:
	yarn run server	
pm2:
	pm2 start ecosystem.config.js
redis:
	sudo service redis-server start	
send:
	git push origin master
build:
	npm run build
historia:
	git pull origin main --allow-unrelated-histories
