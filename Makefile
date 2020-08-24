init:
	cp docker-compose.override.yml.dist docker-compose.override.yml

coding-style:
	npm run lint:fix
	npm run prettier
