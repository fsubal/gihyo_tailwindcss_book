npx sass src/第8章_Tailwind_CSSを既存のプロジェクトに導入する/sass/ok.scss
! npx sass src/第8章_Tailwind_CSSを既存のプロジェクトに導入する/sass/ng.scss # コンパイルエラーになって欲しい

npx lessc src/第8章_Tailwind_CSSを既存のプロジェクトに導入する/less/ok.less
npx lessc src/第8章_Tailwind_CSSを既存のプロジェクトに導入する/less/ng.less # 意図しない出力になるが、コンパイルエラーにはならない

npx stylus src/第8章_Tailwind_CSSを既存のプロジェクトに導入する/stylus/ok.styl --print
npx stylus src/第8章_Tailwind_CSSを既存のプロジェクトに導入する/stylus/ng.styl --print # 意図しない出力になるが、コンパイルエラーにはならない
