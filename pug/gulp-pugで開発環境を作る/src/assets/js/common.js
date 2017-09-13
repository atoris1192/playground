window.onload = function() { // 画像読み込み終了後、実行 重い画像があると表示が遅れるので、画像の高さ指定での対応を推奨
  new Masonry('body', {
    itemSelector: '.item',
    columnWidth: 180,
    gutter: 4
  });
}
