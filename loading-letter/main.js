var text_wall = document.getElementById("text_wall"),
  text_line = document.getElementById("text_line_wall"),
  shotai_block = document.getElementById("ms")
output = "",
  j = 0;

text_wall.style.display = "none"
text_line.style.display = "none"

const hiragana = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ',
  'ら', 'り', 'る', 'れ', 'ろ',
  'わ', 'ゐ', 'ゑ', 'を', 'ん',
  'が', 'ぎ', 'ぐ', 'げ', 'ご',
  'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
  'だ', 'ぢ', 'づ', 'で', 'ど',
  'ば', 'び', 'ぶ', 'べ', 'ぼ',
  'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'
]


setTimeout(first, 3000)

function first() {
  shotai_block.style.display = "none"
  text_line.style.display = "block"
  var n_of_raw = (window.innerHeight / window.innerWidth) * 10

  if (hiragana[j] && j <10 * Math.ceil(n_of_raw)) {
    output = output + hiragana[j]
    text_line.innerText = output
    j++
    setTimeout(first, 77)
  } else {
    text_line.style.color = "white"
    text_line.style.backgroundColor = "black"
    setTimeout(function() {
      text_line.style.transform = "scale(0.03)"

      setTimeout(function() {
        text_wall.style.display = "block"

        Make_wall("はる", 300)
        text_line.style.display = "none"
      }, 1400)
    }, 500)
  }

}

//text_wall.appendChild(TL_block).appendChild(TL_text);


function Make_wall(MainText, num) {
  //メインの文字
  var MT_block = document.createElement('p'),
    main_text = document.createTextNode(MainText);
  MT_block.id = "main_text"
  MT_block.style.letterSpacing = 100 / MainText.length - 12 + "vw"
  text_wall.appendChild(MT_block).appendChild(main_text);

  //周りにバラバラ～って散らばってる文字
  for (i = 0; i < num; i++) {
    var random = Math.floor(Math.random() * hiragana.length),
      random_size = Math.floor(Math.random() * 18 + 3),
      random_top = Math.floor(Math.random() * 100),
      random_left = Math.floor(Math.random() * 100);

    var block = document.createElement('p'),
      text = document.createTextNode(hiragana[random]);
    block.classList.add("walled_txt")
    block.style.fontSize = random_size + "vmin"
    block.style.top = random_top + "vh"
    block.style.left = random_left + "vw"
    text_wall.appendChild(block).appendChild(text);
  }
  setTimeout(Destroy_wall, 3000)
}

function Destroy_wall() {
  var walled_txt_list = document.getElementsByClassName("walled_txt")
  for (i = 0; i < walled_txt_list.length; i++) {
    ths = walled_txt_list[i]
    ths.classList.add("fall")
    ths.style.animationDelay = i * 15 + "ms"
  }
  /*
  最後にアニメーションを消す
  setTimeout(function() {
    text_wall.style.display = "none"
  }, walled_txt_list.length * 10 + 2000)
  */
}
