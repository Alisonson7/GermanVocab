/* ============ 呢個係你日常唯一需要改嘅檔案 ============

   每條影片一個區塊。詞語每行寫一個，用「|」分隔，格式如下：

   時間 | 詞性 | 冠詞 | 德文 | 中文 | 例句

   - 時間：寫 0:19 或者秒數 19 都得
   - 詞性：用「名詞」「動詞」「形容詞」開頭先會歸入對應按鈕，其他會歸入「其他」
            例如：名詞・陰性　動詞片語　形容詞　副詞　慣用語
   - 冠詞：只有名詞先填 der / die / das，其他留空（保留兩個 | 之間嘅空位）
   - 例句：可以留空
   - 以 # 開頭嘅行會被忽略
   - 詞語入面唔好用「`」呢個符號

   加新詞語：喺 words 入面新增一行就得。
   加新影片：複製整個 { ... } 區塊，貼喺後面，中間用逗號隔開。
*/
const VIDEOS = [
  {
    id: "U8xKvBvXC14",
    title: "Tagesschau 中文 | 德國與另外四個歐盟國家計劃在盧旺達設立遣返中心 | 16.11.2026",
    topic: "新聞",
    words: `
0:05 | 動詞片語 | | über etw. verhandeln | 談判 | Sie verhandeln über einen neuen Vertrag.
0:07 | 名詞・中性 | das | Abschiebezentrum, tren | 遣返中心 | 由 Abschiebung「遣返、驅逐」與 Zentrum「中心」組成
0:10 | 固定時間搭配 | | ab kommendem Jahr | 從明年起 | 常見於新聞、商業或正式場合，意為「從即將到來的一年開始」
0:19 | 名詞・陰性 | die | Beratung, en | 磋商、協商、商量 | Nach einer langen Beratung haben wir eine Lösung gefunden.
`
  }
];
