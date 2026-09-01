# 标题文案生成器 · Headline Generator

**[在线体验 →](https://anna123123123-creator.github.io/headline-generator/)**

免费开源、纯浏览器运行的标题文案生成器。填关键词和核心卖点，套用 20 多种营销文案模板，一次批量生成一批标题草稿，点击即可复制。基于模板规则填空，不是 AI 创作。

![screenshot](screenshot.png)

## 试用方法

直接用浏览器打开 `index.html`，或用静态文件服务器跑起来：

```bash
python3 -m http.server 8000
```

填"产品/主题词"和"核心卖点"（必填），"目标痛点"选填——填了会解锁更多带痛点场景的模板。

## 实现原理

内置 20 条营销文案模板（提问式、对比式、痛点式、清单式、评测式……），每条模板里的 `{kw}` `{benefit}` `{pain}` 占位符替换成你填的内容，随机打乱顺序展示。纯字符串模板填空，不涉及任何语言模型。`script.js` 里大概 80 行原生 JavaScript。

## 协议

MIT。

## 相关项目

这个是做 **AI 写作**产品时顺手做的免费小工具——固定模板填空，不能理解语境、不能自由创作。完整版是 AI 真正理解语境的文案生成、长文创作、多风格改写、SEO 优化，源码在这：[AI 写作网站源码](https://inzyxuashop.com/aixiezuo-yuanma.html)。
