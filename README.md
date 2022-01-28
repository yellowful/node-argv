# node process小練習

## 背景知識

1. node的api的東西，只能在node裡有用，在browser裡不能用。
2. `process`：
   1. node api提供一個object，是`global`，可以用來控制和了解目前的Node.js的process。
   2. `process.argv`：
      1. 唸作`arg-v`
      2. 是一個array
      3. 第一個item是node這個程式所在的路徑，例如`/usr/local/bin/node`。
      4. 第二個item是執行的js檔所在的路徑
      5. 第三個item是執行這個js檔後面放的參數，如此就可以執行時給這個程式一個參數了。

## app用法

1. 在terminal裡下`node remote.js 一代`，會得到`唉，Apple TV 4K 一代的遙控器真得很難用`
2. 在terminal裡下`node remote.js 二代`，會得到`幸運喔，Apple TV 4K 二代的遙控器好用多了`
3. 觀察參數`一代`或`二代`如何傳進原始碼裡。