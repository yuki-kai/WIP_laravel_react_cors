## 参考記事

- https://juno-engineer.com/article/docker-laravel/
- https://www.creatorlab.jp/2023/04/26/laravel_learning_1/
- https://qiita.com/Keichan_15/items/4fc605895fef2a33b629
- https://freemas.org/front/react/laravel_react_spa
- https://juno-engineer.com/article/laravel-react-vite-spa/
- https://www.webopixel.net/javascript/1815.html
- https://zenn.dev/yudai64/articles/7caaa3c828b828
  これに沿って作ってみる(react-hook-form は使わない)
- https://zenn.dev/masatotezuka/articles/9d9f9f9812f239

## 環境

- Laravel: 10.39.0
- Larave Breeze
- React: 18.2.0
- TypeScript: 4.9.5

## メモ

laravel を backend コンテナに変更する場合は以下を変更

- docker-compose の service.app を banckend
- backend と web のマウント先を/var/www/backend
- default.conf を root /var/www/backend/public;, fastcgi_pass backend:9000;

frontend のコンテナに入る
- docker compose exec frontend sh

## 次やること

1. Laravel に Breeze API を導入して API サーバにする

- 参考記事

1. SPA 認証
  これに沿って作ってみる(react-hook-form は使わない)
- https://zenn.dev/masatotezuka/articles/9d9f9f9812f239

- メモ
  - get("http://localhost/sanctum/csrf-cookie")
    をAPI実行前にかますことでtokenがヘッダーに含まれているrequestのみ許可する
    
  https://zenn.dev/funayamateppei/articles/ee64daaaff6ccf
  https://sagara.ink/article/app/206/
  https://webxreal.com/laravel-sanctum-spa/
  https://zenn.dev/yumemi_inc/articles/2021-03-21-laravel-react-query-auth
  https://zenn.dev/kawataku/articles/71468ceb6d96e8



上記うまくいかなかったので以下で試す
- https://sagara.ink/article/app/206/
参考になりそう
- https://jamband.github.io/blog/2022/01/web-api-with-cookie-based-session-authentication-in-laravel/
- https://poppotennis.com/posts/laravel-419-error