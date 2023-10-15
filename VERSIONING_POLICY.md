# バージョニングポリシー

このリポジトリはSemVer（Semantic Versioning）に従います。おおむね次のポリシーに従います。

- major: 版が変わった（本の内容自体が更新された）
- minor: 使っている依存パッケージの更新と、それに伴うコードの変更
- patch: バグ修正、誤字など

## バージョン更新の際には以下のことを行います

- package.jsonのversionフィールドの更新
- git tag
- Releasesページに更新履歴の追加
