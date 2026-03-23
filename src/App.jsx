import { useState } from 'react';

const allActors = {
  female: [
  { id: 1, gender: 'female', name: '石原さとみ', description: '明るく親しみやすい、国民的女優', axes: { a: 0.90, b: 0.70, c: 0.80, d: 0.30 }, works:[{title:'アンナチュラル',year:'2018',type:'ドラマ'},{title:'地味にスゴイ! 校閲ガール',year:'2016',type:'ドラマ'},{title:'ラストマイル',year:'2024',type:'映画'}] },
  { id: 2, gender: 'female', name: '綾瀬はるか', description: '天然で温かみのある、癒し系女優', axes: { a: 0.95, b: 0.60, c: 0.80, d: 0.40 }, works:[{title:'義母と娘のブルース',year:'2018',type:'ドラマ'},{title:'奥様は取り扱い注意',year:'2017',type:'ドラマ'},{title:'天地明察',year:'2012',type:'映画'}] },
  { id: 3, gender: 'female', name: '新垣結衣', description: '透明感あふれる清楚派の実力女優', axes: { a: 0.80, b: 0.75, c: 0.60, d: 0.50 }, works:[{title:'逃げるは恥だが役に立つ',year:'2016',type:'ドラマ'},{title:'掟上今日子の備忘録',year:'2015',type:'ドラマ'},{title:'わたし定時で帰ります',year:'2019',type:'ドラマ'}] },
  { id: 4, gender: 'female', name: '有村架純', description: '清楚で可愛らしい、癒し系の人気女優', axes: { a: 0.90, b: 0.80, c: 0.70, d: 0.60 }, works:[{title:'あまちゃん',year:'2013',type:'ドラマ'},{title:'ビリギャル',year:'2015',type:'映画'},{title:'中学聖日記',year:'2018',type:'ドラマ'}] },
  { id: 5, gender: 'female', name: '広瀬すず', description: 'フレッシュで爽やかな若手実力派', axes: { a: 0.70, b: 0.50, c: 0.70, d: 0.85 }, works:[{title:'海街diary',year:'2015',type:'映画'},{title:'あなたの番です',year:'2019',type:'ドラマ'},{title:'流浪の月',year:'2022',type:'映画'}] },
  { id: 6, gender: 'female', name: '土屋太鳳', description: '元気で明るい、スポーティな魅力', axes: { a: 0.85, b: 0.50, c: 0.90, d: 0.80 }, works:[{title:'ラジエーションハウス',year:'2019',type:'ドラマ'},{title:'orange',year:'2015',type:'映画'},{title:'トリリオンゲーム',year:'2023',type:'ドラマ'}] },
  { id: 7, gender: 'female', name: '永野芽郁', description: '天真爛漫で元気な、フレッシュな女優', axes: { a: 0.85, b: 0.45, c: 0.85, d: 0.90 }, works:[{title:'半分青い',year:'2018',type:'ドラマ'},{title:'3年A組',year:'2019',type:'ドラマ'},{title:'地獄の花園',year:'2021',type:'映画'}] },
  { id: 8, gender: 'female', name: '川口春奈', description: 'キュートで明るい、トレンドの若手女優', axes: { a: 0.75, b: 0.55, c: 0.75, d: 0.75 }, works:[{title:'Silent',year:'2022',type:'ドラマ'},{title:'着飾る恋には理由があって',year:'2021',type:'ドラマ'},{title:'ライアー×ライアー',year:'2021',type:'映画'}] },
  { id: 9, gender: 'female', name: '波瑠', description: '爽やかで知的、清潔感のある実力派', axes: { a: 0.60, b: 0.65, c: 0.55, d: 0.50 }, works:[{title:'朝が来た',year:'2015',type:'ドラマ'},{title:'アリバイ崩し承ります',year:'2020',type:'ドラマ'},{title:'海の沈黙',year:'2024',type:'映画'}] },
  { id: 10, gender: 'female', name: '今田美桜', description: 'キュートさと色気を兼ね備えた注目株', axes: { a: 0.65, b: 0.30, c: 0.60, d: 0.70 }, works:[{title:'花のち晴れ',year:'2018',type:'ドラマ'},{title:'悪女AKUJO',year:'2022',type:'映画'},{title:'ビリオン×スクール',year:'2023',type:'ドラマ'}] },
  { id: 11, gender: 'female', name: '長澤まさみ', description: 'クールで洗練された、実力派女優', axes: { a: 0.40, b: 0.50, c: -0.10, d: -0.30 }, works:[{title:'コンフィデンスマンJP',year:'2018',type:'ドラマ'},{title:'シン・ウルトラマン',year:'2022',type:'映画'},{title:'MOTHER',year:'2020',type:'映画'}] },
  { id: 12, gender: 'female', name: '天海祐希', description: '圧倒的な存在感と品格を持つ大女優', axes: { a: 0.10, b: 0.70, c: -0.20, d: -0.70 }, works:[{title:'女王の教室',year:'2005',type:'ドラマ'},{title:'緊急取調室',year:'2014',type:'ドラマ'},{title:'ハケンの品格',year:'2007',type:'ドラマ'}] },
  { id: 13, gender: 'female', name: '中谷美紀', description: '知性とクールさが光る、大人の女優', axes: { a: -0.20, b: 0.60, c: -0.30, d: -0.60 }, works:[{title:'電車男',year:'2005',type:'映画'},{title:'大奥',year:'2003',type:'映画'},{title:'ダーリンは外国人',year:'2010',type:'映画'}] },
  { id: 14, gender: 'female', name: '米倉涼子', description: 'スタイリッシュでクールな大人の魅力', axes: { a: -0.10, b: 0.55, c: -0.40, d: -0.50 }, works:[{title:'ドクターX',year:'2012',type:'ドラマ'},{title:'黒革の手帖',year:'2017',type:'ドラマ'},{title:'離婚弁護士',year:'2004',type:'ドラマ'}] },
  { id: 15, gender: 'female', name: '竹内結子', description: 'クールな美しさと繊細な演技力', axes: { a: 0.30, b: 0.65, c: -0.20, d: -0.40 }, works:[{title:'いま会いにゆきます',year:'2004',type:'映画'},{title:'ストロベリーナイト',year:'2010',type:'ドラマ'},{title:'リング',year:'1998',type:'映画'}] },
  { id: 16, gender: 'female', name: '吉高由里子', description: '独特の個性とコミカルさを持つ女優', axes: { a: 0.50, b: -0.30, c: 0.60, d: 0.40 }, works:[{title:'花子とアン',year:'2014',type:'ドラマ'},{title:'推しの子',year:'2024',type:'ドラマ'},{title:'東京タラレバ娘',year:'2017',type:'ドラマ'}] },
  { id: 17, gender: 'female', name: '高畑充希', description: '歌・ダンス・演技すべてこなす万能女優', axes: { a: 0.70, b: 0.15, c: 0.65, d: 0.55 }, works:[{title:'とと姉ちゃん',year:'2016',type:'ドラマ'},{title:'過保護のカホコ',year:'2017',type:'ドラマ'},{title:'ゆとりですがなにか',year:'2016',type:'ドラマ'}] },
  { id: 18, gender: 'female', name: '多部未華子', description: '親しみやすさと個性のバランスが秀逸', axes: { a: 0.60, b: 0.10, c: 0.50, d: 0.50 }, works:[{title:'時をかける少女',year:'2010',type:'ドラマ'},{title:'悪夢ちゃん',year:'2012',type:'ドラマ'},{title:'ウロボロス',year:'2015',type:'ドラマ'}] },
  { id: 19, gender: 'female', name: '趣里', description: 'ダンス×演技の爆発的なエネルギー', axes: { a: 0.30, b: -0.60, c: 0.50, d: -0.20 }, works:[{title:'ブギウギ',year:'2023',type:'ドラマ'},{title:'最高の教師',year:'2023',type:'ドラマ'},{title:'水上のフライト',year:'2020',type:'映画'}] },
  { id: 20, gender: 'female', name: 'のん', description: '唯一無二の個性と自由な表現力', axes: { a: 0.40, b: -0.70, c: 0.40, d: 0.30 }, works:[{title:'この世界の片隅に',year:'2016',type:'映画'},{title:'あまちゃん',year:'2013',type:'ドラマ'},{title:'さかなのこ',year:'2022',type:'映画'}] },
  { id: 21, gender: 'female', name: '二階堂ふみ', description: '個性的で唯一無二の存在感', axes: { a: -0.30, b: -0.60, c: -0.10, d: 0.20 }, works:[{title:'桐島部活やめるってよ',year:'2012',type:'映画'},{title:'翔んで埼玉',year:'2019',type:'映画'},{title:'ヒミズ',year:'2012',type:'映画'}] },
  { id: 22, gender: 'female', name: '松岡茉優', description: '知性と個性が光る次世代の実力派', axes: { a: 0.10, b: -0.55, c: 0.10, d: 0.40 }, works:[{title:'万引き家族',year:'2018',type:'映画'},{title:'勝手にふるえてろ',year:'2017',type:'映画'},{title:'あの子は貴族',year:'2021',type:'映画'}] },
  { id: 23, gender: 'female', name: '安藤サクラ', description: '圧倒的な演技力と強烈な個性の実力派', axes: { a: -0.40, b: -0.70, c: -0.10, d: -0.30 }, works:[{title:'万引き家族',year:'2018',type:'映画'},{title:'百円の恋',year:'2014',type:'映画'},{title:'おちょやん',year:'2020',type:'ドラマ'}] },
  { id: 24, gender: 'female', name: '蒼井優', description: 'アート系・個性派の実力派女優', axes: { a: -0.10, b: -0.50, c: -0.20, d: 0.10 }, works:[{title:'フラガール',year:'2006',type:'映画'},{title:'花とアリス',year:'2004',type:'映画'},{title:'鈴木先生',year:'2011',type:'ドラマ'}] },
  { id: 25, gender: 'female', name: '門脇麦', description: '鋭い眼差しと繊細な個性派演技', axes: { a: -0.50, b: -0.65, c: -0.30, d: 0.30 }, works:[{title:'愛の渦',year:'2014',type:'映画'},{title:'二重生活',year:'2016',type:'映画'},{title:'あなたの番です',year:'2019',type:'ドラマ'}] },
  { id: 26, gender: 'female', name: '小松菜奈', description: 'ミステリアスな美しさとモード系の魅力', axes: { a: -0.60, b: -0.30, c: -0.30, d: 0.50 }, works:[{title:'渇き。',year:'2014',type:'映画'},{title:'来る',year:'2018',type:'映画'},{title:'糸',year:'2020',type:'映画'}] },
  { id: 27, gender: 'female', name: '森七菜', description: '天然で個性的、独自の世界観を持つ女優', axes: { a: 0.55, b: -0.40, c: 0.50, d: 0.85 }, works:[{title:'天気の子',year:'2019',type:'映画'},{title:'ラストレター',year:'2020',type:'映画'},{title:'消えた初恋',year:'2021',type:'ドラマ'}] },
  { id: 28, gender: 'female', name: '夏帆', description: '透明感と独特の柔らかさを持つ女優', axes: { a: 0.50, b: -0.15, c: 0.30, d: 0.40 }, works:[{title:'カルテット',year:'2017',type:'ドラマ'},{title:'大豆田とわ子と三人の元夫',year:'2021',type:'ドラマ'},{title:'天然コケッコー',year:'2007',type:'映画'}] },
  { id: 29, gender: 'female', name: '木村文乃', description: '凛とした雰囲気と自然体の演技力', axes: { a: 0.45, b: 0.20, c: 0.20, d: 0.30 }, works:[{title:'デート',year:'2015',type:'ドラマ'},{title:'遺留捜査',year:'2011',type:'ドラマ'},{title:'幕末高校生',year:'2014',type:'映画'}] },
  { id: 31, gender: 'female', name: '浜辺美波', description: '清楚で神秘的、次世代を担う実力派', axes: { a: 0.60, b: 0.70, c: 0.40, d: 0.80 }, works:[{title:'賭ケグルイ',year:'2018',type:'ドラマ'},{title:'アルキメデスの大戦',year:'2019',type:'映画'},{title:'大怪獣のあとしまつ',year:'2022',type:'映画'}] },
  { id: 32, gender: 'female', name: '橋本環奈', description: '天使すぎるアイドルから実力派女優へ', axes: { a: 0.90, b: 0.55, c: 0.85, d: 0.85 }, works:[{title:'今日から俺は!!',year:'2018',type:'ドラマ'},{title:'かぐや様は告らせたい',year:'2019',type:'映画'},{title:'シンデレラ',year:'2023',type:'舞台'}] },
  { id: 33, gender: 'female', name: '上白石萌音', description: '透明感と歌声が魅力の清楚系女優', axes: { a: 0.75, b: 0.75, c: 0.50, d: 0.70 }, works:[{title:'恋はつづくよどこまでも',year:'2020',type:'ドラマ'},{title:'なのに千輝くんが悪すぎる',year:'2023',type:'映画'},{title:'糸',year:'2020',type:'映画'}] },
  { id: 34, gender: 'female', name: '黒木華', description: '凛とした佇まいと繊細な演技力', axes: { a: 0.20, b: 0.45, c: -0.10, d: 0.10 }, works:[{title:'リップヴァンウィンクルの花嫁',year:'2016',type:'映画'},{title:'スパイの妻',year:'2020',type:'映画'},{title:'俺の家の話',year:'2021',type:'ドラマ'}] },
  { id: 35, gender: 'female', name: '清野菜名', description: 'アクションと演技を兼ね備えた次世代女優', axes: { a: 0.65, b: 0.35, c: 0.60, d: 0.75 }, works:[{title:'今日から俺は!!',year:'2018',type:'ドラマ'},{title:'東京リベンジャーズ',year:'2021',type:'映画'},{title:'セオリーオブラブ',year:'2018',type:'映画'}] },
  { id: 36, gender: 'female', name: '長野里美', description: '個性的な演技で存在感を放つ実力派', axes: { a: 0.15, b: -0.35, c: 0.10, d: -0.10 }, works:[{title:'問題のあるレストラン',year:'2015',type:'ドラマ'},{title:'カルテット',year:'2017',type:'ドラマ'},{title:'凪のお暇',year:'2019',type:'ドラマ'}] },
  { id: 37, gender: 'female', name: '岸井ゆきの', description: '等身大の演技が輝く個性派女優', axes: { a: 0.45, b: -0.45, c: 0.30, d: 0.20 }, works:[{title:'愛がなんだ',year:'2019',type:'映画'},{title:'MIU404',year:'2020',type:'ドラマ'},{title:'ケイコ目を澄ませて',year:'2022',type:'映画'}] },
  { id: 39, gender: 'female', name: '仲間由紀恵', description: '華やかで存在感あふれる大人の女優', axes: { a: 0.55, b: 0.60, c: 0.30, d: -0.40 }, works:[{title:'TRICK',year:'2000',type:'ドラマ'},{title:'ごくせん',year:'2002',type:'ドラマ'},{title:'テンペスト',year:'2011',type:'ドラマ'}] },
  { id: 40, gender: 'female', name: '菊地凛子', description: '国際的な活躍を誇るミステリアスな実力派', axes: { a: -0.65, b: -0.40, c: -0.50, d: -0.10 }, works:[{title:'バベル',year:'2006',type:'映画'},{title:'ノルウェイの森',year:'2010',type:'映画'},{title:'太陽を掴め',year:'2016',type:'ドラマ'}] },
  { id: 30, gender: 'female', name: 'のん (能年玲奈)', description: '唯一無二の独創的な世界観', axes: { a: 0.35, b: -0.75, c: 0.45, d: 0.60 }, works:[{title:'この世界の片隅に',year:'2016',type:'映画'},{title:'さかなのこ',year:'2022',type:'映画'},{title:'Ribbon',year:'2022',type:'映画'}] },
  ],
  male: [
  { id: 101, gender: 'male', name: '山崎賢人', description: '爽やかで正統派のイケメン俳優', axes: { a: 0.85, b: 0.75, c: 0.80, d: 0.75 }, works:[{title:'キングダム',year:'2019',type:'映画'},{title:'グッド・ドクター',year:'2018',type:'ドラマ'},{title:'近キョリ恋愛',year:'2014',type:'映画'}] },
  { id: 102, gender: 'male', name: '竹内涼真', description: '爽やかな笑顔と正統派イケメンの魅力', axes: { a: 0.90, b: 0.70, c: 0.85, d: 0.70 }, works:[{title:'ドラゴン桜',year:'2021',type:'ドラマ'},{title:'テセウスの船',year:'2020',type:'ドラマ'},{title:'恋はDeepに',year:'2021',type:'ドラマ'}] },
  { id: 103, gender: 'male', name: '坂口健太郎', description: '爽やかで優しい雰囲気の人気俳優', axes: { a: 0.80, b: 0.60, c: 0.75, d: 0.65 }, works:[{title:'大豆田とわ子と三人の元夫',year:'2021',type:'ドラマ'},{title:'ナイトドクター',year:'2021',type:'ドラマ'},{title:'子供はわかってあげない',year:'2021',type:'映画'}] },
  { id: 104, gender: 'male', name: '吉沢亮', description: '端正な顔立ちと豊かな演技の実力派', axes: { a: 0.70, b: 0.40, c: 0.70, d: 0.70 }, works:[{title:'青天を衝け',year:'2021',type:'ドラマ'},{title:'キングダム',year:'2019',type:'映画'},{title:'東京リベンジャーズ',year:'2021',type:'映画'}] },
  { id: 105, gender: 'male', name: '目黒蓮', description: '洗練された爽やかさと高い人気', axes: { a: 0.65, b: 0.60, c: 0.70, d: 0.75 }, works:[{title:'わたしの宝物',year:'2024',type:'ドラマ'},{title:'Silent',year:'2022',type:'ドラマ'},{title:'消えない罪',year:'2025',type:'映画'}] },
  { id: 106, gender: 'male', name: '間宮祥太朗', description: 'さわやかで誠実な雰囲気の人気俳優', axes: { a: 0.75, b: 0.55, c: 0.70, d: 0.60 }, works:[{title:'ハコヅメ',year:'2021',type:'ドラマ'},{title:'ラジエーションハウス',year:'2019',type:'ドラマ'},{title:'パリピ孔明',year:'2022',type:'ドラマ'}] },
  { id: 107, gender: 'male', name: '杉野遥亮', description: '清潔感あふれる爽やか系の若手俳優', axes: { a: 0.70, b: 0.70, c: 0.65, d: 0.75 }, works:[{title:'コントが始まる',year:'2021',type:'ドラマ'},{title:'ヴィレッジ',year:'2023',type:'映画'},{title:'恋です！',year:'2021',type:'ドラマ'}] },
  { id: 108, gender: 'male', name: '中島裕翔', description: '爽やかなルックスと真面目な演技', axes: { a: 0.80, b: 0.65, c: 0.75, d: 0.65 }, works:[{title:'クロサギ',year:'2022',type:'ドラマ'},{title:'探偵が早すぎる',year:'2018',type:'ドラマ'},{title:'ピース オブ ケイク',year:'2015',type:'映画'}] },
  { id: 109, gender: 'male', name: '木村拓哉', description: '王道のクールさを持つ永遠のスター', axes: { a: 0.50, b: 0.65, c: -0.20, d: -0.50 }, works:[{title:'HERO',year:'2001',type:'ドラマ'},{title:'グランメゾン東京',year:'2019',type:'ドラマ'},{title:'マスカレード・ホテル',year:'2019',type:'映画'}] },
  { id: 110, gender: 'male', name: '玉木宏', description: 'クールで品のある大人の男の魅力', axes: { a: 0.35, b: 0.60, c: -0.30, d: -0.55 }, works:[{title:'のだめカンタービレ',year:'2006',type:'ドラマ'},{title:'ブラックペアン',year:'2018',type:'ドラマ'},{title:'ONE DAY',year:'2023',type:'ドラマ'}] },
  { id: 111, gender: 'male', name: '堺雅人', description: 'クールな知性と圧倒的な演技力', axes: { a: 0.40, b: 0.55, c: -0.20, d: -0.45 }, works:[{title:'半沢直樹',year:'2013',type:'ドラマ'},{title:'リーガルハイ',year:'2012',type:'ドラマ'},{title:'真田丸',year:'2016',type:'ドラマ'}] },
  { id: 112, gender: 'male', name: '横浜流星', description: 'クールな顔立ちと熱い演技が魅力', axes: { a: 0.45, b: 0.50, c: -0.10, d: 0.30 }, works:[{title:'わたしの幸せな結婚',year:'2023',type:'映画'},{title:'流浪の月',year:'2022',type:'映画'},{title:'あなたがしてくれなくても',year:'2023',type:'ドラマ'}] },
  { id: 113, gender: 'male', name: '松坂桃李', description: 'クールで繊細な演技が光る実力派', axes: { a: 0.30, b: 0.40, c: -0.30, d: -0.10 }, works:[{title:'孤狼の血',year:'2018',type:'映画'},{title:'娼年',year:'2018',type:'映画'},{title:'大奥',year:'2023',type:'ドラマ'}] },
  { id: 114, gender: 'male', name: '西島秀俊', description: '知的で落ち着いた、大人の魅力', axes: { a: 0.10, b: 0.30, c: -0.30, d: -0.65 }, works:[{title:'きのう何食べた?',year:'2019',type:'ドラマ'},{title:'MOZU',year:'2014',type:'ドラマ'},{title:'怒り',year:'2016',type:'映画'}] },
  { id: 115, gender: 'male', name: '岡田准一', description: 'ストイックで圧倒的な存在感の実力派', axes: { a: -0.20, b: 0.35, c: -0.50, d: -0.40 }, works:[{title:'海賊とよばれた男',year:'2016',type:'映画'},{title:'燃えよ剣',year:'2021',type:'映画'},{title:'来る',year:'2018',type:'映画'}] },
  { id: 116, gender: 'male', name: '神木隆之介', description: '自然体と個性が共存する天才型俳優', axes: { a: 0.60, b: -0.20, c: 0.50, d: 0.50 }, works:[{title:'らんまん',year:'2023',type:'ドラマ'},{title:'桐島部活やめるってよ',year:'2012',type:'映画'},{title:'バクマン。',year:'2015',type:'映画'}] },
  { id: 117, gender: 'male', name: '山田裕貴', description: '熱量と個性を兼ね備えた次世代の実力俳優', axes: { a: 0.55, b: -0.10, c: 0.50, d: 0.50 }, works:[{title:'ハコヅメ',year:'2021',type:'ドラマ'},{title:'ブラッシュアップライフ',year:'2023',type:'ドラマ'},{title:'今夜世界からこの恋が消えても',year:'2022',type:'映画'}] },
  { id: 118, gender: 'male', name: '北村匠海', description: '繊細でアーティスティックな若手俳優', axes: { a: 0.40, b: -0.35, c: 0.20, d: 0.60 }, works:[{title:'君の膵臓をたべたい',year:'2017',type:'映画'},{title:'ダンスダンスダンスール',year:'2022',type:'ドラマ'},{title:'あの頃。',year:'2021',type:'映画'}] },
  { id: 119, gender: 'male', name: '仲野太賀', description: '独特のユーモアと個性派の実力俳優', axes: { a: 0.50, b: -0.50, c: 0.30, d: 0.30 }, works:[{title:'ガンニバル',year:'2022',type:'ドラマ'},{title:'前科者',year:'2022',type:'映画'},{title:'全裸監督',year:'2019',type:'ドラマ'}] },
  { id: 120, gender: 'male', name: '柄本佑', description: '個性と自由さが光る次世代の実力派', axes: { a: 0.20, b: -0.55, c: 0.00, d: 0.10 }, works:[{title:'光る君へ',year:'2024',type:'ドラマ'},{title:'ある男',year:'2022',type:'映画'},{title:'大奥',year:'2023',type:'ドラマ'}] },
  { id: 121, gender: 'male', name: '菅田将暉', description: '個性的でアーティスティックな俳優', axes: { a: 0.10, b: -0.60, c: 0.10, d: 0.30 }, works:[{title:'ミステリと言う勿れ',year:'2022',type:'映画'},{title:'3月のライオン',year:'2017',type:'映画'},{title:'溺れるナイフ',year:'2016',type:'映画'}] },
  { id: 122, gender: 'male', name: '高橋一生', description: 'クールで知的、独特の色気を持つ実力派', axes: { a: -0.30, b: 0.10, c: -0.50, d: -0.20 }, works:[{title:'カルテット',year:'2017',type:'ドラマ'},{title:'大豆田とわ子と三人の元夫',year:'2021',type:'ドラマ'},{title:'岸辺露伴は動かない',year:'2020',type:'ドラマ'}] },
  { id: 123, gender: 'male', name: '阿部寛', description: '風格と個性を兼ね備えた大ベテラン', axes: { a: 0.30, b: -0.40, c: -0.20, d: -0.70 }, works:[{title:'TRICK',year:'2000',type:'ドラマ'},{title:'テルマエ・ロマエ',year:'2012',type:'映画'},{title:'ドラゴン桜',year:'2005',type:'ドラマ'}] },
  { id: 124, gender: 'male', name: '窪田正孝', description: '幅広い役をこなす、カメレオン俳優', axes: { a: 0.20, b: -0.20, c: 0.00, d: 0.20 }, works:[{title:'エール',year:'2020',type:'ドラマ'},{title:'ファーストラヴ',year:'2021',type:'映画'},{title:'ボク運命の人です',year:'2017',type:'ドラマ'}] },
  { id: 125, gender: 'male', name: '斎藤工', description: 'ミステリアスな色気と多彩な才能', axes: { a: -0.55, b: 0.00, c: -0.50, d: -0.30 }, works:[{title:'昼顔',year:'2014',type:'ドラマ'},{title:'蜜蜂と遠雷',year:'2019',type:'映画'},{title:'リバーサルオーケストラ',year:'2023',type:'ドラマ'}] },
  { id: 126, gender: 'male', name: '綾野剛', description: 'ワイルドで圧倒的な存在感の俳優', axes: { a: -0.50, b: -0.50, c: -0.30, d: -0.20 }, works:[{title:'MIU404',year:'2020',type:'ドラマ'},{title:'ヤクザと家族',year:'2021',type:'映画'},{title:'怒り',year:'2016',type:'映画'}] },
  { id: 127, gender: 'male', name: '池松壮亮', description: '鋭い眼差しと重厚な個性派演技力', axes: { a: -0.30, b: -0.60, c: -0.40, d: 0.00 }, works:[{title:'宮本から君へ',year:'2019',type:'映画'},{title:'愛がなんだ',year:'2019',type:'映画'},{title:'ちひろさん',year:'2023',type:'映画'}] },
  { id: 128, gender: 'male', name: '松田龍平', description: '独特の空気感とクールな個性派演技', axes: { a: -0.60, b: -0.50, c: -0.50, d: -0.10 }, works:[{title:'まほろ駅前多田便利軒',year:'2011',type:'映画'},{title:'カルテット',year:'2017',type:'ドラマ'},{title:'探偵はBARにいる',year:'2011',type:'映画'}] },
  { id: 129, gender: 'male', name: 'オダギリジョー', description: 'アーティスティックで唯一無二の存在感', axes: { a: -0.70, b: -0.65, c: -0.40, d: -0.20 }, works:[{title:'血と骨',year:'2004',type:'映画'},{title:'メゾン・ド・ヒミコ',year:'2005',type:'映画'},{title:'おかえりモネ',year:'2021',type:'ドラマ'}] },
  { id: 131, gender: 'male', name: '佐藤健', description: '甘いルックスと幅広い演技力を持つ人気俳優', axes: { a: 0.75, b: 0.60, c: 0.65, d: 0.55 }, works:[{title:'るろうに剣心',year:'2012',type:'映画'},{title:'コウノドリ',year:'2015',type:'ドラマ'},{title:'何様',year:'2016',type:'映画'}] },
  { id: 132, gender: 'male', name: '福士蒼汰', description: '爽やかなイケメン俳優の王道', axes: { a: 0.85, b: 0.65, c: 0.80, d: 0.65 }, works:[{title:'仮面ライダーフォーゼ',year:'2011',type:'ドラマ'},{title:'恋仲',year:'2015',type:'ドラマ'},{title:'orange',year:'2015',type:'映画'}] },
  { id: 133, gender: 'male', name: '松山ケンイチ', description: 'カメレオン俳優と呼ばれる圧倒的な変身力', axes: { a: 0.30, b: -0.50, c: -0.10, d: -0.20 }, works:[{title:'デスノート',year:'2006',type:'映画'},{title:'ノルウェイの森',year:'2010',type:'映画'},{title:'ど根性ガエル',year:'2015',type:'ドラマ'}] },
  { id: 134, gender: 'male', name: '妻夫木聡', description: '爽やかさと演技力を兼ね備えた実力派', axes: { a: 0.70, b: 0.40, c: 0.50, d: -0.10 }, works:[{title:'スウィングガールズ',year:'2004',type:'映画'},{title:'悪人',year:'2010',type:'映画'},{title:'大奥',year:'2010',type:'映画'}] },
  { id: 135, gender: 'male', name: '小栗旬', description: 'ダークな色気と圧倒的な存在感', axes: { a: 0.40, b: 0.30, c: -0.30, d: -0.10 }, works:[{title:'花より男子',year:'2005',type:'ドラマ'},{title:'クローズZERO',year:'2007',type:'映画'},{title:'鎌倉殿の13人',year:'2022',type:'ドラマ'}] },
  { id: 136, gender: 'male', name: '藤原竜也', description: '舞台仕込みの圧倒的な表現力と個性', axes: { a: 0.10, b: -0.30, c: -0.20, d: -0.30 }, works:[{title:'デスノート',year:'2006',type:'映画'},{title:'カイジ',year:'2009',type:'映画'},{title:'2046',year:'2004',type:'映画'}] },
  { id: 137, gender: 'male', name: '向井理', description: '清潔感と知性が光るさわやかな俳優', axes: { a: 0.80, b: 0.70, c: 0.60, d: 0.20 }, works:[{title:'ゲゲゲの女房',year:'2010',type:'ドラマ'},{title:'バチスタ',year:'2010',type:'映画'},{title:'BORDER',year:'2014',type:'ドラマ'}] },
  { id: 138, gender: 'male', name: '染谷将太', description: '独特の存在感と個性派の演技力', axes: { a: -0.10, b: -0.55, c: -0.20, d: 0.30 }, works:[{title:'ヒミズ',year:'2012',type:'映画'},{title:'寄生獣',year:'2014',type:'映画'},{title:'バードマン',year:'2014',type:'映画'}] },
  { id: 139, gender: 'male', name: '岡田将生', description: '繊細な美しさと確かな演技力', axes: { a: 0.50, b: 0.35, c: 0.20, d: 0.40 }, works:[{title:'告白',year:'2010',type:'映画'},{title:'ハゲタカ',year:'2009',type:'映画'},{title:'俺の家の話',year:'2021',type:'ドラマ'}] },
  { id: 141, gender: 'male', name: '宮沢氷魚', description: 'ジェンダーレスな美しさと繊細な演技力を持つ俳優', axes: { a: 0.35, b: -0.20, c: 0.10, d: 0.65 }, works:[{title:'his',year:'2020',type:'映画'},{title:'35歳の少女',year:'2020',type:'ドラマ'},{title:'ちひろさん',year:'2023',type:'映画'}] },
  { id: 140, gender: 'male', name: '塚地武雅', description: '唯一無二のキャラクターで愛される個性派', axes: { a: 0.85, b: -0.70, c: 0.70, d: -0.50 }, works:[{title:'嫌われ松子の一生',year:'2006',type:'映画'},{title:'探偵はBARにいる',year:'2011',type:'映画'},{title:'幕末高校生',year:'2014',type:'映画'}] },
  { id: 130, gender: 'male', name: '浅野忠信', description: 'ミステリアスで国際的な個性派俳優', axes: { a: -0.80, b: -0.60, c: -0.50, d: -0.30 }, works:[{title:'モンゴル',year:'2007',type:'映画'},{title:'パシフィック・リム',year:'2013',type:'映画'},{title:'ノルウェイの森',year:'2010',type:'映画'}] },
  ],
};


// ===================== 定数 =====================
const FIRST_HALF = 10;
const TOTAL_Q    = 20;

// 4軸の定義
const AXES_DEF = [
  { key: 'a', pos: '親しみやすい', neg: 'ミステリアス' },
  { key: 'b', pos: '王道・正統派', neg: '個性派・アート系' },
  { key: 'c', pos: '明るい・華やか', neg: '渋い・クール' },
  { key: 'd', pos: '若々しい', neg: '大人っぽい' },
];

// 16タイプ定義 (abcd 各 H=High=+, L=Low=-)
const TYPE_MAP = {
  HHHL: { name: '太陽のスター',    emoji: '☀️', desc: '明るく誰にでも愛される正統派。親しみやすさと華やかさで場を照らす存在。', color: '#e8a830' },
  HHHH: { name: '永遠のアイドル',  emoji: '🌸', desc: 'フレッシュで明るく正統派。清潔感と若さで人々を魅了する王道タイプ。', color: '#e87890' },
  HHLL: { name: '大人の王道美人',  emoji: '👑', desc: '親しみやすさと正統派の美しさを持ちながら、大人っぽい落ち着きも兼備。', color: '#c8a050' },
  HHLH: { name: '元気印スター',    emoji: '⚡', desc: '若くて明るく元気いっぱい。親しみやすい正統派の魅力で人々を元気にする。', color: '#f0b040' },
  HLHL: { name: '自由な個性派',    emoji: '🎨', desc: '親しみやすいが個性もしっかり持つ。明るさの中に独自センスが光るタイプ。', color: '#70b890' },
  HLHH: { name: 'フレッシュな才人',emoji: '🌿', desc: '若くて明るく個性的。親しみやすさの中に独自の世界観を持つ魅力。', color: '#60c880' },
  HLLL: { name: 'アーティスト',    emoji: '🎭', desc: '親しみやすさと個性派を兼ね備えた大人タイプ。渋みの中に自由な表現力。', color: '#80a870' },
  HLLH: { name: '若き個性派',      emoji: '✨', desc: '若くて個性的だが親しみやすい。独自のセンスで人々を引き付けるタイプ。', color: '#90d860' },
  LHHL: { name: '孤高のスター',    emoji: '🌙', desc: 'ミステリアスな雰囲気を持ちながら正統派。近寄りがたい品格と華やかさ。', color: '#6878c8' },
  LHHH: { name: '神秘的アイドル',  emoji: '💫', desc: '謎めいた雰囲気と若さ・正統派の魅力を持つ。不思議な引力で惹きつけるタイプ。', color: '#7898e8' },
  LHLL: { name: '大人の品格',      emoji: '🖤', desc: 'ミステリアスで正統派、大人っぽい落ち着きと渋みを持つ洗練されたタイプ。', color: '#5060a0' },
  LHLH: { name: '謎多き若手',      emoji: '🔮', desc: 'ミステリアスだが正統派の若手タイプ。近寄りがたさの中に輝きを持つ。', color: '#8070c0' },
  LLHL: { name: 'ダーク個性派',    emoji: '🌑', desc: 'ミステリアスで個性的かつ明るい側面も。独特のオーラで他を圧倒するタイプ。', color: '#607050' },
  LLHH: { name: '若き反骨者',      emoji: '⚔️', desc: '若くて個性的でミステリアス。独自の世界観と謎めいた魅力が共存するタイプ。', color: '#708060' },
  LLLL: { name: '孤高の芸術家',    emoji: '🎪', desc: 'ミステリアス・個性派・渋い・大人。圧倒的な存在感と唯一無二の世界観。', color: '#405060' },
  LLLH: { name: '新世代の鬼才',    emoji: '🌊', desc: '若くてミステリアスで個性的。渋い魅力と若さが混在する次世代型。', color: '#508070' },
};

function getTypeKey(scores) {
  return AXES_DEF.map(ax => scores[ax.key] >= 0 ? 'H' : 'L').join('');
}

// ===================== アルゴリズム =====================
const RATING_WEIGHTS = { 1: -1.5, 2: -0.7, 3: 0, 4: 0.7, 5: 1.5 };

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 前半：各軸の+/-両端を均等にカバーする10問を選ぶ
function getInitialQuestions(actorList) {
  // 4軸×2方向=8バケット、各バケットからランダムに選んで10問
  const buckets = {};
  AXES_DEF.forEach(ax => {
    buckets[ax.key + 'P'] = shuffleArray(actorList.filter(a => a.axes[ax.key] >= 0.4));
    buckets[ax.key + 'N'] = shuffleArray(actorList.filter(a => a.axes[ax.key] <= -0.4));
  });
  const chosen = new Set();
  const result = [];
  // 各バケットから1問ずつ（8問）
  for (const key of Object.keys(buckets)) {
    for (const a of buckets[key]) {
      if (!chosen.has(a.id)) { result.push(a); chosen.add(a.id); break; }
    }
  }
  // 残り2問は中央付近から
  const center = shuffleArray(actorList.filter(a =>
    !chosen.has(a.id) &&
    AXES_DEF.every(ax => Math.abs(a.axes[ax.key]) < 0.5)
  ));
  center.slice(0, TOTAL_Q - result.length > 2 ? 2 : TOTAL_Q - result.length).forEach(a => {
    result.push(a); chosen.add(a.id);
  });
  // まだ足りなければ残りから補充
  if (result.length < FIRST_HALF) {
    shuffleArray(actorList.filter(a => !chosen.has(a.id)))
      .slice(0, FIRST_HALF - result.length)
      .forEach(a => { result.push(a); chosen.add(a.id); });
  }
  return shuffleArray(result.slice(0, FIRST_HALF));
}

function calcScores(questions, ratings) {
  const sums = { a: 0, b: 0, c: 0, d: 0 };
  const weights = { a: 0, b: 0, c: 0, d: 0 };
  questions.forEach(q => {
    const r = ratings[q.id];
    if (r === undefined) return;
    const w = RATING_WEIGHTS[r];
    if (w === 0) return;
    const absW = Math.abs(w);
    AXES_DEF.forEach(ax => {
      sums[ax.key] += q.axes[ax.key] * w;
      weights[ax.key] += absW;
    });
  });
  const result = {};
  AXES_DEF.forEach(ax => {
    result[ax.key] = weights[ax.key] > 0
      ? Math.max(-1, Math.min(1, sums[ax.key] / weights[ax.key]))
      : 0;
  });
  return result;
}

function getAdaptiveQuestions(actorList, shownIds, scores, count) {
  const unseen = actorList.filter(a => !shownIds.has(a.id));
  const dist = a => AXES_DEF.reduce((s, ax) => s + Math.pow(a.axes[ax.key] - scores[ax.key], 2), 0);
  return [...unseen].sort((a, b) => dist(a) - dist(b)).slice(0, count);
}

// ===================== UI =====================
const ratingLabels = ['😑', '🙁', '😐', '🙂', '😍'];
const ratingColors  = ['#8a8080', '#b09080', '#c8c0b0', '#c8a060', '#b87830'];

export default function App() {
  const [step, setStep]               = useState('intro');
  const [mode, setMode]               = useState(null);
  const [activeQ, setActiveQ]         = useState([]);
  const [current, setCurrent]         = useState(0);
  const [ratings, setRatings]         = useState({});
  const [hovered, setHovered]         = useState(null);
  const [animating, setAnimating]     = useState(false);
  const [midScores, setMidScores]     = useState(null);

  function selectMode(m) {
    setMode(m);
    setActiveQ(getInitialQuestions(allActors[m]));
    setCurrent(0); setRatings({}); setMidScores(null);
    setStep('quiz');
  }

  const totalQ    = activeQ.length;
  const progress  = totalQ > 0 ? (current / totalQ) * 100 : 0;

  function handleRating(val) {
    if (animating) return;
    const q = activeQ[current];
    const newR = { ...ratings, [q.id]: val };
    setRatings(newR);

    if (current + 1 === FIRST_HALF && activeQ.length === FIRST_HALF) {
      const scores = calcScores(activeQ, newR);
      setMidScores(scores);
      const shownIds = new Set(activeQ.map(q => q.id));
      const second = getAdaptiveQuestions(allActors[mode], shownIds, scores, TOTAL_Q - FIRST_HALF);
      setActiveQ(prev => [...prev, ...second]);
      setAnimating(true);
      setTimeout(() => { setCurrent(c => c + 1); setStep('midpoint'); setAnimating(false); }, 350);
      return;
    }
    setAnimating(true);
    setTimeout(() => {
      if (current + 1 < totalQ) setCurrent(c => c + 1);
      else setStep('result');
      setAnimating(false);
    }, 350);
  }

  const finalScores = (step === 'result' || step === 'midpoint')
    ? calcScores(activeQ.slice(0, step === 'midpoint' ? FIRST_HALF : totalQ), ratings)
    : null;
  const typeKey  = finalScores ? getTypeKey(finalScores) : null;
  const typeInfo = typeKey ? (TYPE_MAP[typeKey] || TYPE_MAP['HHHL']) : null;

  // レーダーチャート用 (4軸を正八角形風に)
  function radarPoint(axIdx, val, cx, cy, r) {
    const angle = (axIdx / 4) * 2 * Math.PI - Math.PI / 2;
    const mag = (val + 1) / 2; // 0..1
    return [cx + Math.cos(angle) * r * mag, cy + Math.sin(angle) * r * mag];
  }

  const S = {
    page: { minHeight:'100vh', background:'linear-gradient(135deg,#14120f 0%,#221e18 50%,#14120f 100%)',
      fontFamily:'\'Noto Serif JP\',\'Georgia\',serif', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', padding:'24px 16px', color:'#e8e0d8' },
    card: { background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:20, padding:'24px', marginBottom:20 },
    gold: { color:'#b8925e' },
    tag: (c) => ({ fontSize:10, padding:'2px 8px', borderRadius:50,
      background: c+'22', border:`1px solid ${c}66`, color:c, letterSpacing:'0.05em' }),
  };

  return (
    <div style={S.page}>
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0, opacity:0.3,
        backgroundImage:'url(\"data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E\")' }} />

      <div style={{ position:'relative', zIndex:1, width:'100%', maxWidth:520 }}>

        {/* ===== INTRO ===== */}
        {step === 'intro' && (
          <div style={{ textAlign:'center', animation:'fadeUp 0.6s ease' }}>
            <div style={{ fontSize:13, letterSpacing:'0.4em', color:'#b8925e', marginBottom:16, textTransform:'uppercase' }}>Actor Preference Analysis</div>
            <h1 style={{ fontSize:'clamp(26px,6vw,38px)', fontWeight:700, lineHeight:1.3, marginBottom:16,
              background:'linear-gradient(135deg,#e8e0d8,#b8925e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              あなたの好みの俳優タイプを<br/>16タイプで診断
            </h1>
            <p style={{ color:'#a09088', fontSize:14, lineHeight:1.8, marginBottom:32 }}>
              4つの軸で俳優の好みを分析。<br/>20問の診断で16タイプのどれかに分類します。
            </p>
            {/* 4軸説明 */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:32 }}>
              {AXES_DEF.map((ax, i) => (
                <div key={ax.key} style={{ ...S.card, padding:'12px 14px', marginBottom:0 }}>
                  <div style={{ fontSize:11, color:'#b8925e', letterSpacing:'0.1em', marginBottom:4 }}>軸 {i+1}</div>
                  <div style={{ fontSize:12, color:'#d4c0a8', lineHeight:1.6 }}>
                    {ax.pos}<br/><span style={{ color:'#7a706a' }}>↕</span><br/>{ax.neg}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setStep('mode')} style={{
              background:'linear-gradient(135deg,#b8925e,#8a6e48)', border:'none', borderRadius:50,
              padding:'16px 48px', fontSize:16, fontFamily:'inherit', color:'#fff', cursor:'pointer',
              letterSpacing:'0.1em', boxShadow:'0 8px 32px rgba(184,146,94,0.3)', transition:'transform 0.2s' }}
              onMouseEnter={e=>e.target.style.transform='translateY(-2px)'}
              onMouseLeave={e=>e.target.style.transform='translateY(0)'}>
              診断スタート →
            </button>
          </div>
        )}

        {/* ===== MODE ===== */}
        {step === 'mode' && (
          <div style={{ textAlign:'center', animation:'fadeUp 0.5s ease' }}>
            <div style={{ fontSize:13, letterSpacing:'0.4em', color:'#b8925e', marginBottom:16, textTransform:'uppercase' }}>Select Mode</div>
            <h2 style={{ fontSize:22, fontWeight:700, marginBottom:12,
              background:'linear-gradient(135deg,#e8e0d8,#b8925e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              どちらの俳優で診断しますか？
            </h2>
            <p style={{ color:'#7a706a', fontSize:13, marginBottom:32 }}>各30人から20問出題。前半で傾向把握→後半で最適化</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:24 }}>
              {[
                { key:'female', emoji:'👩', label:'女優モード', sub:'石原さとみ・綾瀬はるかなど', color:'#c8a0b8' },
                { key:'male',   emoji:'👨', label:'俳優モード', sub:'木村拓哉・菅田将暉など',   color:'#8aa0c8' },
              ].map(m => (
                <button key={m.key} onClick={() => selectMode(m.key)} style={{
                  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.12)',
                  borderRadius:20, padding:'28px 16px', cursor:'pointer', fontFamily:'inherit',
                  textAlign:'center', transition:'all 0.2s', color:'#e8e0d8' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.08)';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.borderColor=m.color+'88';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.04)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='rgba(255,255,255,0.12)';}}>
                  <div style={{ fontSize:44, marginBottom:10 }}>{m.emoji}</div>
                  <div style={{ fontSize:15, fontWeight:700, color:m.color, marginBottom:6 }}>{m.label}</div>
                  <div style={{ fontSize:11, color:'#7a706a' }}>{m.sub}</div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep('intro')} style={{ background:'transparent', border:'none', color:'#6a6058', fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>← 戻る</button>
          </div>
        )}

        {/* ===== MIDPOINT ===== */}
        {step === 'midpoint' && midScores && (
          <div style={{ textAlign:'center', animation:'fadeUp 0.6s ease' }}>
            <div style={{ fontSize:13, letterSpacing:'0.4em', color:'#b8925e', marginBottom:16, textTransform:'uppercase' }}>Halfway — 10 / 20</div>
            <div style={{ fontSize:48, marginBottom:12 }}>🔍</div>
            <h2 style={{ fontSize:20, fontWeight:700, marginBottom:20,
              background:'linear-gradient(135deg,#e8e0d8,#b8925e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              前半の傾向が見えてきました
            </h2>
            {/* 4軸バー */}
            <div style={{ ...S.card }}>
              {AXES_DEF.map(ax => {
                const v = midScores[ax.key];
                const pct = ((v + 1) / 2) * 100;
                return (
                  <div key={ax.key} style={{ marginBottom:14 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#7a706a', marginBottom:4 }}>
                      <span>{ax.neg}</span><span>{ax.pos}</span>
                    </div>
                    <div style={{ height:6, background:'rgba(255,255,255,0.08)', borderRadius:3, position:'relative' }}>
                      <div style={{ position:'absolute', left:'50%', top:0, width:1, height:'100%', background:'rgba(255,255,255,0.2)' }} />
                      <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#6a5a4a,#b8925e)', borderRadius:3, transition:'width 0.8s ease' }} />
                    </div>
                    <div style={{ textAlign:'center', fontSize:11, color:'#b8925e', marginTop:4 }}>
                      {v > 0.2 ? ax.pos : v < -0.2 ? ax.neg : '中間'}
                    </div>
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize:13, color:'#7a706a', marginBottom:24, lineHeight:1.7 }}>
              この傾向をもとに後半10問をあなた向けに最適化しました。
            </p>
            <button onClick={() => setStep('quiz')} style={{
              background:'linear-gradient(135deg,#b8925e,#8a6e48)', border:'none', borderRadius:50,
              padding:'14px 44px', fontSize:15, fontFamily:'inherit', color:'#fff', cursor:'pointer',
              letterSpacing:'0.1em', boxShadow:'0 8px 32px rgba(184,146,94,0.25)', transition:'transform 0.2s' }}
              onMouseEnter={e=>e.target.style.transform='translateY(-2px)'}
              onMouseLeave={e=>e.target.style.transform='translateY(0)'}>
              後半へ進む →
            </button>
          </div>
        )}

        {/* ===== QUIZ ===== */}
        {step === 'quiz' && current < totalQ && (
          <div style={{ animation: animating ? 'fadeOut 0.3s ease forwards' : 'fadeUp 0.4s ease' }}>
            {/* Progress */}
            <div style={{ marginBottom:28 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, color:'#7a706a', marginBottom:8 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ letterSpacing:'0.2em', textTransform:'uppercase', color:'#b8925e' }}>Question</span>
                  <span style={S.tag(current < FIRST_HALF ? '#b8925e' : '#7ab0d8')}>
                    {current < FIRST_HALF ? '前半：傾向把握' : '後半：あなた向け'}
                  </span>
                </div>
                <span>{current + 1} / {totalQ}</span>
              </div>
              <div style={{ height:2, background:'rgba(255,255,255,0.08)', borderRadius:2 }}>
                <div style={{ height:'100%', width:`${progress}%`, background:'linear-gradient(90deg,#b8925e,#e0b882)', borderRadius:2, transition:'width 0.4s ease' }} />
              </div>
            </div>

            {/* Actor card */}
            <div style={{ ...S.card, textAlign:'center', padding:'28px 24px' }}>
              <div style={{ width:72, height:72, background:'linear-gradient(135deg,#3a3028,#2a2218)',
                borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                margin:'0 auto 16px', fontSize:26, border:'2px solid rgba(184,146,94,0.3)' }}>
                {activeQ[current]?.gender === 'female' ? '👩' : '👨'}
              </div>
              <div style={{ fontSize:11, letterSpacing:'0.3em', color:'#b8925e', marginBottom:6, textTransform:'uppercase' }}>
                {activeQ[current]?.gender === 'female' ? 'Female Actor' : 'Male Actor'}
              </div>
              <h2 style={{ fontSize:24, fontWeight:700, marginBottom:8, letterSpacing:'0.05em' }}>
                {activeQ[current]?.name}
              </h2>
              <p style={{ fontSize:13, color:'#9a9088', lineHeight:1.6, marginBottom:14 }}>
                {activeQ[current]?.description}
              </p>
              <a href={`https://www.google.com/search?q=${encodeURIComponent((activeQ[current]?.name||'')+' 俳優')}&tbm=isch`}
                target='_blank' rel='noopener noreferrer'
                style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:12, color:'#7ab0d8',
                  background:'rgba(100,160,220,0.1)', border:'1px solid rgba(100,160,220,0.3)',
                  borderRadius:50, padding:'4px 14px', textDecoration:'none' }}>
                🔍 画像を確認する
              </a>
            </div>

            {/* Rating */}
            <p style={{ textAlign:'center', fontSize:12, color:'#7a706a', marginBottom:14, letterSpacing:'0.1em' }}>
              どのくらい好みですか？
            </p>
            <div style={{ display:'flex', gap:8, justifyContent:'center' }}>
              {[1,2,3,4,5].map(v => (
                <button key={v}
                  onMouseEnter={() => setHovered(v)} onMouseLeave={() => setHovered(null)}
                  onClick={() => handleRating(v)}
                  style={{ flex:1, maxWidth:80, aspectRatio:'1', borderRadius:14,
                    border:`1px solid ${hovered >= v ? 'rgba(184,146,94,0.6)' : 'rgba(255,255,255,0.08)'}`,
                    background: hovered >= v ? `${ratingColors[v-1]}22` : 'rgba(255,255,255,0.03)',
                    cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center',
                    justifyContent:'center', gap:4, transition:'all 0.15s ease',
                    transform: hovered === v ? 'translateY(-4px) scale(1.05)' : 'none' }}>
                  <span style={{ fontSize:22 }}>{ratingLabels[v-1]}</span>
                  <span style={{ fontSize:9, color:'#7a706a' }}>{v}</span>
                </button>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:10, fontSize:11, color:'#5a5248' }}>
              1 = 好みでない　　5 = とても好み
            </div>
          </div>
        )}

        {/* ===== RESULT ===== */}
        {step === 'result' && finalScores && typeInfo && (() => {
          const shownIds = new Set(activeQ.map(q => q.id));
          const distFn = a => AXES_DEF.reduce((s,ax) => s + Math.pow(a.axes[ax.key]-finalScores[ax.key],2), 0);
          const unseen = (allActors[mode]||[]).filter(a => !shownIds.has(a.id));
          const recs = [...unseen].sort((a,b) => distFn(a)-distFn(b)).slice(0,3);
          const topPicks = activeQ.filter(q => ratings[q.id] >= 4);

          // Radar chart
          const cx=100, cy=100, r=72;
          const pts = AXES_DEF.map((_,i) => {
            const v = finalScores[AXES_DEF[i].key];
            const angle = (i/4)*2*Math.PI - Math.PI/2;
            const mag = (v+1)/2;
            return [cx + Math.cos(angle)*r*mag, cy + Math.sin(angle)*r*mag];
          });
          const polyPts = pts.map(p=>p.join(',')).join(' ');
          const gridPts = (scale) => AXES_DEF.map((_,i) => {
            const angle = (i/4)*2*Math.PI - Math.PI/2;
            return [cx+Math.cos(angle)*r*scale, cy+Math.sin(angle)*r*scale].join(',');
          }).join(' ');

          return (
            <div style={{ animation:'fadeUp 0.6s ease' }}>
              {/* Type header */}
              <div style={{ textAlign:'center', marginBottom:24 }}>
                <div style={{ fontSize:12, letterSpacing:'0.4em', color:'#b8925e', marginBottom:12, textTransform:'uppercase' }}>Your Type</div>
                <div style={{ fontSize:52, marginBottom:10 }}>{typeInfo.emoji}</div>
                <h2 style={{ fontSize:28, fontWeight:700, marginBottom:10,
                  background:'linear-gradient(135deg,#e8e0d8,#b8925e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  {typeInfo.name}
                </h2>
                <div style={{ display:'flex', justifyContent:'center', gap:6, marginBottom:12 }}>
                  {AXES_DEF.map(ax => (
                    <span key={ax.key} style={S.tag(finalScores[ax.key]>=0 ? '#b8925e' : '#7ab0d8')}>
                      {finalScores[ax.key]>=0 ? ax.pos : ax.neg}
                    </span>
                  ))}
                </div>
                <p style={{ color:'#a09088', fontSize:13, lineHeight:1.8 }}>{typeInfo.desc}</p>
              </div>

              {/* Radar chart */}
              <div style={{ ...S.card, textAlign:'center' }}>
                <div style={{ fontSize:11, color:'#b8925e', letterSpacing:'0.2em', marginBottom:12 }}>PREFERENCE RADAR</div>
                <svg viewBox='0 0 200 200' style={{ width:'100%', maxWidth:220, height:'auto', display:'block', margin:'0 auto' }}>
                  {[0.25,0.5,0.75,1].map(s => (
                    <polygon key={s} points={gridPts(s)} fill='none' stroke='rgba(255,255,255,0.08)' strokeWidth='1' />
                  ))}
                  {AXES_DEF.map((_,i) => {
                    const angle = (i/4)*2*Math.PI - Math.PI/2;
                    return <line key={i} x1={cx} y1={cy} x2={cx+Math.cos(angle)*r} y2={cy+Math.sin(angle)*r} stroke='rgba(255,255,255,0.1)' strokeWidth='1' />;
                  })}
                  <polygon points={polyPts} fill='rgba(184,146,94,0.2)' stroke='#b8925e' strokeWidth='2' />
                  {pts.map((p,i) => <circle key={i} cx={p[0]} cy={p[1]} r='4' fill='#b8925e' />)}
                  {AXES_DEF.map((ax,i) => {
                    const angle = (i/4)*2*Math.PI - Math.PI/2;
                    const lx = cx+Math.cos(angle)*(r+16);
                    const ly = cy+Math.sin(angle)*(r+16);
                    const v = finalScores[ax.key];
                    const label = v >= 0 ? ax.pos : ax.neg;
                    return <text key={i} x={lx} y={ly} fill='#9a9088' fontSize='7' textAnchor='middle' dominantBaseline='middle'>{label}</text>;
                  })}
                </svg>
              </div>

              {/* 4軸スコアバー */}
              <div style={{ ...S.card }}>
                <div style={{ fontSize:11, color:'#b8925e', letterSpacing:'0.2em', marginBottom:16 }}>AXIS SCORES</div>
                {AXES_DEF.map(ax => {
                  const v = finalScores[ax.key];
                  const pct = ((v+1)/2)*100;
                  return (
                    <div key={ax.key} style={{ marginBottom:14 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'#7a706a', marginBottom:4 }}>
                        <span>{ax.neg}</span>
                        <span style={{ color:'#d4c0a8', fontWeight:600 }}>{v>=0 ? ax.pos : ax.neg}</span>
                        <span>{ax.pos}</span>
                      </div>
                      <div style={{ height:5, background:'rgba(255,255,255,0.08)', borderRadius:3, position:'relative' }}>
                        <div style={{ position:'absolute', left:'50%', top:0, width:1, height:'100%', background:'rgba(255,255,255,0.2)' }} />
                        <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#5a4a3a,#b8925e)', borderRadius:3, transition:'width 1s ease' }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Top Picks */}
              {topPicks.length > 0 && (
                <div style={{ ...S.card }}>
                  <div style={{ fontSize:11, color:'#b8925e', letterSpacing:'0.2em', marginBottom:14 }}>TOP PICKS</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                    {topPicks.map(q => (
                      <div key={q.id} style={{ background:'rgba(184,146,94,0.06)', border:'1px solid rgba(184,146,94,0.2)', borderRadius:12, padding:'10px 14px' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom: q.works ? 7 : 0 }}>
                          <span style={{ fontSize:15 }}>{q.gender==='female'?'👩':'👨'}</span>
                          <span style={{ fontSize:14, fontWeight:700, color:'#d4c0a8' }}>{q.name}</span>
                          <span style={{ fontSize:11, color:'#b8925e', marginLeft:'auto' }}>{'★'.repeat(ratings[q.id])}</span>
                          <a href={`https://www.google.com/search?q=${encodeURIComponent(q.name+' 俳優')}&tbm=isch`}
                            target='_blank' rel='noopener noreferrer'
                            style={{ fontSize:11, color:'#7ab0d8', textDecoration:'none',
                              background:'rgba(100,160,220,0.1)', border:'1px solid rgba(100,160,220,0.3)', borderRadius:50, padding:'2px 8px' }}>🔍</a>
                        </div>
                        {q.works && (
                          <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                            {q.works.slice(0,3).map((w,wi) => (
                              <span key={wi} style={{ fontSize:10, padding:'2px 7px', borderRadius:4,
                                background: w.type==='映画'?'rgba(120,100,160,0.18)':'rgba(80,140,160,0.18)',
                                border: w.type==='映画'?'1px solid rgba(120,100,160,0.4)':'1px solid rgba(80,140,160,0.4)',
                                color: w.type==='映画'?'#a898c8':'#78b8c8', whiteSpace:'nowrap' }}>
                                {w.type==='映画'?'🎬':'📺'} {w.title}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {recs.length > 0 && (
                <div style={{ ...S.card, border:'1px solid rgba(184,146,94,0.25)', marginBottom:24 }}>
                  <div style={{ fontSize:11, color:'#b8925e', letterSpacing:'0.2em', marginBottom:4 }}>RECOMMENDATION</div>
                  <p style={{ fontSize:12, color:'#7a706a', marginBottom:16, lineHeight:1.6 }}>あなたの好みに近い、今回出題されなかった俳優です</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                    {recs.map((a,i) => {
                      const sim = Math.max(0, Math.round((1 - Math.sqrt(distFn(a))/2) * 100));
                      const mc = sim>=75?'#b8925e':sim>=55?'#a08060':'#7a706a';
                      return (
                        <div key={a.id} style={{ display:'flex', alignItems:'flex-start', gap:14,
                          background:'rgba(255,255,255,0.03)', borderRadius:14, padding:'12px 14px',
                          border:'1px solid rgba(255,255,255,0.06)', animation:`fadeUp 0.4s ease ${i*0.1}s both` }}>
                          <div style={{ width:32, height:32, borderRadius:'50%', flexShrink:0,
                            background: i===0?'linear-gradient(135deg,#b8925e,#8a6e48)':'rgba(255,255,255,0.06)',
                            display:'flex', alignItems:'center', justifyContent:'center',
                            fontSize:14, fontWeight:700, color: i===0?'#fff':'#7a706a' }}>{i+1}</div>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4, flexWrap:'wrap' }}>
                              <span style={{ fontSize:15, fontWeight:700, color:'#e8e0d8' }}>{a.name}</span>
                              <span style={S.tag(mc)}>{sim}% マッチ</span>
                              <a href={`https://www.google.com/search?q=${encodeURIComponent(a.name+' 俳優')}&tbm=isch`}
                                target='_blank' rel='noopener noreferrer'
                                style={{ fontSize:11, color:'#7ab0d8', textDecoration:'none',
                                  background:'rgba(100,160,220,0.1)', border:'1px solid rgba(100,160,220,0.3)', borderRadius:50, padding:'2px 8px' }}>🔍</a>
                            </div>
                            <div style={{ fontSize:12, color:'#7a706a', marginBottom:6 }}>{a.description}</div>
                            {a.works && (
                              <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                                {a.works.slice(0,3).map((w,wi) => (
                                  <span key={wi} style={{ fontSize:10, padding:'2px 7px', borderRadius:4,
                                    background: w.type==='映画'?'rgba(120,100,160,0.18)':'rgba(80,140,160,0.18)',
                                    border: w.type==='映画'?'1px solid rgba(120,100,160,0.4)':'1px solid rgba(80,140,160,0.4)',
                                    color: w.type==='映画'?'#a898c8':'#78b8c8', whiteSpace:'nowrap' }}>
                                    {w.type==='映画'?'🎬':'📺'} {w.title}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <button onClick={() => { setStep('intro'); setMode(null); setCurrent(0); setRatings({}); setActiveQ([]); setMidScores(null); }}
                style={{ width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.12)',
                  borderRadius:50, padding:'14px', fontSize:14, fontFamily:'inherit', color:'#a09088',
                  cursor:'pointer', letterSpacing:'0.1em', transition:'all 0.2s' }}
                onMouseEnter={e=>e.target.style.background='rgba(255,255,255,0.08)'}
                onMouseLeave={e=>e.target.style.background='rgba(255,255,255,0.04)'}>
                もう一度診断する
              </button>
            </div>
          );
        })()}

      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeOut { from { opacity:1; } to { opacity:0; transform:translateY(-10px); } }
        * { box-sizing:border-box; margin:0; padding:0; }
        button { -webkit-tap-highlight-color:transparent; }
      `}</style>
    </div>
  );
}
