npx sass sass/ok.scss
! npx sass sass/ng.scss # コンパイルエラーになって欲しい

npx lessc less/ok.less
npx lessc less/ng.less # 意図しない出力になるが、コンパイルエラーにはならない

npx stylus stylus/ok.styl --print
npx stylus stylus/ng.styl --print # 意図しない出力になるが、コンパイルエラーにはならない
