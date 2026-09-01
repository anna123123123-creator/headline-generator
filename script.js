(function () {
  'use strict';

  var TEMPLATES = [
    { t: '{kw}：{benefit}', pain: false },
    { t: '还在为{pain}发愁？{kw}帮你一次搞定', pain: true },
    { t: '{kw}，让{benefit}变得触手可及', pain: false },
    { t: '3 分钟了解：{kw}到底能不能帮你{benefit}', pain: false },
    { t: '别再{pain}了，试试{kw}', pain: true },
    { t: '{kw}评测：真的能做到{benefit}吗？', pain: false },
    { t: '为什么越来越多人选择{kw}？答案是{benefit}', pain: false },
    { t: '{benefit}，从选对{kw}开始', pain: false },
    { t: '{kw}使用指南：如何实现{benefit}', pain: false },
    { t: '从{pain}到{benefit}，只差一个{kw}', pain: true },
    { t: '关于{kw}，你需要知道的 5 件事', pain: false },
    { t: '{kw}真的值得选吗？{benefit}实测体验', pain: false },
    { t: '告别{pain}：{kw}到底强在哪', pain: true },
    { t: '{kw}上线：{benefit}不再是难题', pain: false },
    { t: '如果你也在为{pain}苦恼，这个{kw}了解一下', pain: true },
    { t: '{kw} vs 传统方式：{benefit}谁更快', pain: false },
    { t: '一文看懂 {kw} 如何做到{benefit}', pain: false },
    { t: '{benefit}？{kw}说：交给我', pain: false },
    { t: '别人还在{pain}，你已经用上{kw}了', pain: true },
    { t: '{kw}：不止{benefit}这么简单', pain: false },
  ];

  var kwInput = document.getElementById('kwInput');
  var benefitInput = document.getElementById('benefitInput');
  var painInput = document.getElementById('painInput');
  var resultList = document.getElementById('resultList');

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function fill(template, kw, benefit, pain) {
    return template.split('{kw}').join(kw)
      .split('{benefit}').join(benefit)
      .split('{pain}').join(pain);
  }

  function generate() {
    var kw = kwInput.value.trim() || '你的产品';
    var benefit = benefitInput.value.trim() || '效率翻倍';
    var pain = painInput.value.trim();

    var pool = TEMPLATES.filter(function (tpl) { return !tpl.pain || pain; });
    var shuffled = shuffle(pool);

    resultList.innerHTML = '';
    shuffled.forEach(function (tpl) {
      var text = fill(tpl.t, kw, benefit, pain);
      var item = document.createElement('div');
      item.className = 'headline-item';
      var span = document.createElement('span');
      span.textContent = text;
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = '复制';
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = '已复制';
          btn.classList.add('copied');
          setTimeout(function () { btn.textContent = '复制'; btn.classList.remove('copied'); }, 1500);
        });
      });
      item.appendChild(span);
      item.appendChild(btn);
      resultList.appendChild(item);
    });
  }

  document.getElementById('btnGenerate').addEventListener('click', generate);
  generate();
})();
