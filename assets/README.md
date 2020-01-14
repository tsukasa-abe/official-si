# ASSETS

**This directory is not required, you can delete it if you don't want to use it.**

# コーディングルール
margin-topやmargin-leftなど、topとleftで統一すると後々調整しやすい。paddingやborderも同様。

また同一の要素間の余白を取りたい場合は隣接セレクタを使うのが良い。

`隣接セレクタ：直後に隣接している要素にスタイルを適用する`
```
例）
.sidemenu + .sidemenu {
  margin-top: 1rem;
}
```
