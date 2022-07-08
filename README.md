# Mio Tarot リポジトリ

## 開発環境構築
**1. Gitクローン**
```sh
git clone https://github.com/TakanoriIchikawa/mio-tarot-docker.git mio-tarot
```

**2. ディレクトリの移動**
```sh
cd mio-tarot
```

**3. セットアップスクリプトの実行**
```sh
bash setup.sh
```

## コンテナへのアクセス
**UIコンテナ**
```sh
docker compose exec ui bash
```

**APPコンテナ**
```sh
docker compose exec app bash
```