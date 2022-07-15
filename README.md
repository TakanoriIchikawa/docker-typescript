# Mio Tarot リポジトリ

## 開発環境構築
**1. Gitクローン**
```sh
git clone https://github.com/TakanoriIchikawa/docker-typescript.git
```

**2. ディレクトリの移動**
```sh
cd docker-typescript
```

**3. 環境変数の設定**
```sh
cp .env.example .env
```

**4. イメージのビルド**
```sh
docker compose build --no-cache
```

**5. コンテナの起動ド**
```sh
docker compose up -d
```

**6.**
```sh
docker compose exec node npm run build
```

**7.**
```sh
docker compose exec node npm run watch
```

## コンテナへのアクセス
**Webコンテナ**
```sh
docker compose exec app bash
```

**Nodeコンテナ**
```sh
docker compose exec node bash
```

## Vue.js動かすとき
**1. Nodeコンテナアクセス**
```sh
docker compose exec node bash
```

**2. ディレクトリの移動**
```sh
cd vue-typescript
```

**3. Vue起動**
```sh
npm run dev
```