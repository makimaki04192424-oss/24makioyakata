// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 「コース例」セクションを探す
  const coursesSection = document.querySelector('.courses');
  if (!coursesSection) return; // 念のため

  // おみくじボタンを作成
  const button = document.createElement('button');
  button.textContent = '今日の学習おみくじを引く';
  button.className = 'fortune-button';

  // 結果表示用の要素を作成
  const result = document.createElement('p');
  result.className = 'fortune-result';
  result.textContent = '※ ボタンを押すと、どすこい一言アドバイスが出ます。';

  // コースセクションの末尾に追加
  coursesSection.appendChild(button);
  coursesSection.appendChild(result);

  // おみくじのメッセージ一覧
  const fortunes = [
    'どすこい！今日は「console.log」でデバッグ力を鍛えよう。',
    'HTMLのタグを3つ覚えたら、ちゃんこ鍋一杯分の成長です。',
    'CSSで1つレイアウトを整えたら、それは立派な決まり手です。',
    'Gitでコミットしたら、「今日の自分」をちゃんと残せた証拠です。',
    'バグは敵ではなくスパーリングパートナー。どすこい精神で向き合おう。',
    '10分悩んだら5分休憩。土俵の外で深呼吸も大事です。',
    '「わからない」は負けではなく、「これから強くなる」サインです。',
    'まずは動くものを作る。それから綺麗に整えるのがどすこい流。',
    'チーム開発は取り組み稽古。遠慮せずに「わからない」を共有しよう。',
    '小さな一歩でも、100歩進めば本場所デビューです。'
  ];

  // ボタンクリック時の処理
  button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * fortunes.length);
    const message = fortunes[index];
    result.textContent = '📣 ' + message;
  });
});
