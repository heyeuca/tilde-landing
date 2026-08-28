export const GITHUB_URL = "https://github.com/heyeuca/Tilde";
export const DOWNLOAD_URL = "https://github.com/heyeuca/Tilde/releases";
export const LICENSE_URL = "https://github.com/heyeuca/Tilde/blob/main/LICENSE";

// TODO: replace with the real production domain before deploying.
export const SITE_URL = "https://tilde.example.com";

export type Lang = "en" | "ko" | "ja" | "zh";

export interface Content {
  nav: {
    github: string;
    otherLangs: { label: string; href: string; hreflang: Lang }[];
  };
  hero: {
    title: string;
    subtitle: string;
    download: string;
    viewSource: string;
    fineprint: string;
    appStoreNote: string;
  };
  showcase: {
    ariaLabel: string;
    defaultId: string;
    items: { id: string; label: string; alt: string }[];
  };
  values: {
    heading: string;
    items: { name: string; line: string }[];
  };
  features: {
    heading: string;
    items: { title: string; body: string }[];
  };
  nonGoals: {
    heading: string;
    list: string[];
    closing: string;
  };
  privacy: {
    heading: string;
    items: string[];
    closing: string;
  };
  outro: {
    line: string;
    download: string;
  };
  footer: {
    license: string;
    licenseName: string;
    licenseSuffix: string;
    github: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      github: "GitHub",
      otherLangs: [
        { label: "한국어", href: "/ko/", hreflang: "ko" },
        { label: "日本語", href: "/ja/", hreflang: "ja" },
        { label: "中文", href: "/zh/", hreflang: "zh" },
      ],
    },
    hero: {
      title: "A tiny, beautiful text editor for macOS.",
      subtitle:
        "Open the file. Read it. Maybe change a line. Close it. No projects, no plugins, no sidebars — the editor disappears, and the content is all that's left.",
      download: "Download for macOS",
      viewSource: "View on GitHub",
      fineprint: "Free & open source · MIT License · macOS 14+",
      appStoreNote: "Coming soon to the Mac App Store",
    },
    showcase: {
      ariaLabel: "Tilde screenshots",
      defaultId: "reader-en",
      items: [
        {
          id: "md-en",
          label: "Markdown",
          alt: "A Markdown note in Tilde's editor — headings, blockquote, link, list, divider, pipe table and code fence, with every marker visible but dimmed",
        },
        {
          id: "reader-en",
          label: "Reader",
          alt: "The same note in Reader mode, rendered read-only: quote bar, live link, divider, real table and code block — one keystroke from the editor",
        },
        {
          id: "yaml",
          label: "Config files",
          alt: "config.yaml open in Tilde: keys are gently tinted, everything else stays plain, in SF Mono",
        },
        {
          id: "txt-en",
          label: "Plain text",
          alt: "Emily Dickinson's poem Hope is the thing with feathers, open as plain text in Tilde — SF Mono, full window width",
        },
        {
          id: "cjk",
          label: "CJK",
          alt: "A note mixing Japanese, Korean, and Chinese verse in one Tilde window — any Unicode text renders naturally",
        },
      ],
    },
    values: {
      heading: "Core values",
      items: [
        { name: "Instant", line: "Double-click a file and it opens almost immediately." },
        { name: "Quiet", line: "The interface never draws more attention than the content." },
        { name: "Native", line: "It behaves like a built-in macOS app." },
        { name: "Beautiful", line: "Reading text is a pleasure in itself." },
        { name: "Disposable", line: "There is almost nothing to configure or manage." },
      ],
    },
    features: {
      heading: "Nothing more than you need.",
      items: [
        {
          title: "Markdown, done lightly",
          body: "Headings render larger, bold renders bold — while the syntax stays visible. Tilde doesn't hide Markdown; it makes Markdown easier to read.",
        },
        {
          title: "Reader mode",
          body: "One keystroke — ⌘⇧R — renders the whole document, tables and highlighted code blocks included, read-only. Toggle it from the title bar, like Safari's Reader.",
        },
        {
          title: "Any plain text",
          body: ".txt and .md first, but .json, .yaml, .toml, .xml, .csv, .log, .env and most UTF-based text files open too — all as plain text.",
        },
        {
          title: "Quiet highlighting",
          body: "In .json, .yaml, and .toml, keys get a gentle tint. Everything else is left exactly alone.",
        },
        {
          title: "One file, one window",
          body: "A true document-based Mac app: Open With, Autosave, Versions, Recent Documents, window tabs — all standard, none reinvented.",
        },
        {
          title: "Fast, then silent",
          body: "Launches fast, and idle CPU usage is effectively zero. No background work, no indexing, no polling. Ever.",
        },
        {
          title: "Light and dark",
          body: "Light, dark, or follow the system — using macOS semantic colors. There is no theme system to manage.",
        },
        {
          title: "Everything you expect",
          body: "Undo, Find & Replace, spell check, drag-and-drop, word wrap, and optional line numbers.",
        },
      ],
    },
    nonGoals: {
      heading: "What Tilde won't do.",
      list: [
        "No terminal.",
        "No Git.",
        "No plugins.",
        "No project explorer.",
        "No note database.",
        "No sync.",
        "No accounts.",
        "No AI.",
      ],
      closing:
        "Tilde isn't a smaller IDE. If you need those things, Tilde is — intentionally — the wrong tool.",
    },
    privacy: {
      heading: "Your text stays yours.",
      items: [
        "No server uploads",
        "No account or sign-in",
        "No cloud storage",
        "No analytics in the initial release",
      ],
      closing: "Every document is processed locally, on your Mac.",
    },
    outro: {
      line: "Just open the file.",
      download: "Download for macOS",
    },
    footer: {
      license: "Tilde is free, open-source software released under the",
      licenseName: "MIT License",
      licenseSuffix: ".",
      github: "GitHub",
    },
  },
  ko: {
    nav: {
      github: "GitHub",
      otherLangs: [
        { label: "English", href: "/", hreflang: "en" },
        { label: "日本語", href: "/ja/", hreflang: "ja" },
        { label: "中文", href: "/zh/", hreflang: "zh" },
      ],
    },
    hero: {
      title: "macOS를 위한 작고 아름다운 텍스트 에디터.",
      subtitle:
        "파일을 열고, 읽고, 필요하면 한 줄 고치고, 닫는다. 프로젝트도, 플러그인도, 사이드바도 없이 — 에디터는 사라지고 내용만 남습니다.",
      download: "macOS용 다운로드",
      viewSource: "GitHub에서 보기",
      fineprint: "무료 오픈소스 · MIT License · macOS 14+",
      appStoreNote: "Mac App Store 출시 예정",
    },
    showcase: {
      ariaLabel: "Tilde 스크린샷",
      defaultId: "reader-ko",
      items: [
        {
          id: "md-ko",
          label: "Markdown",
          alt: "Tilde 에디터로 연 Markdown 메모 — 제목 두 단계, 인용, 링크, 리스트, 구분선, 파이프 표, 코드 펜스까지 모든 기호가 흐리게 그대로 보임",
        },
        {
          id: "reader-ko",
          label: "Reader",
          alt: "같은 메모를 Reader 모드로 렌더링한 모습 — 인용 바, 링크, 구분선, 실제 표와 코드 블록까지, 에디터에서 단축키 하나 거리",
        },
        {
          id: "yaml",
          label: "설정 파일",
          alt: "Tilde에서 연 config.yaml: 키에만 살짝 색이 들어가고 나머지는 그대로, SF Mono",
        },
        {
          id: "txt-ko",
          label: "플레인 텍스트",
          alt: "윤동주의 시 「서시」를 플레인 텍스트로 연 Tilde 창",
        },
        {
          id: "cjk",
          label: "CJK",
          alt: "일본어·한국어·중국어 시가 한 창에 담긴 메모 — 어떤 유니코드 텍스트든 자연스럽게 열립니다",
        },
      ],
    },
    values: {
      heading: "핵심 가치",
      items: [
        { name: "즉각적", line: "파일을 더블클릭하면 거의 즉시 열립니다." },
        { name: "조용함", line: "인터페이스가 내용보다 더 눈에 띄지 않습니다." },
        { name: "네이티브", line: "macOS 기본 앱처럼 동작합니다." },
        { name: "아름다움", line: "텍스트를 읽는 것 자체가 즐거움입니다." },
        { name: "부담 없음", line: "설정하거나 관리할 것이 거의 없습니다." },
      ],
    },
    features: {
      heading: "딱 필요한 만큼만.",
      items: [
        {
          title: "Markdown, 가볍게",
          body: "제목은 크게, 굵은 글씨는 굵게 — 문법 기호는 그대로 보입니다. Markdown을 숨기는 게 아니라, 더 읽기 쉽게 만듭니다.",
        },
        {
          title: "Reader 모드",
          body: "⌘⇧R 한 번이면 표와 하이라이트된 코드 블록까지 완전히 렌더링된 읽기 전용 뷰. Safari의 Reader처럼 타이틀바에서 토글합니다.",
        },
        {
          title: "어떤 평문이든",
          body: ".txt와 .md는 물론 .json, .yaml, .toml, .xml, .csv, .log, .env 등 대부분의 UTF 기반 텍스트 파일이 열립니다 — 전부 평문 그대로.",
        },
        {
          title: "조용한 하이라이팅",
          body: ".json·.yaml·.toml에서는 키에만 살짝 색을 입힙니다. 나머지는 정확히 그대로 둡니다.",
        },
        {
          title: "파일 하나, 창 하나",
          body: "진짜 문서 기반 macOS 앱. 다음으로 열기, 자동 저장, 버전, 최근 문서, 창 탭 — 전부 표준 그대로, 다시 만들지 않았습니다.",
        },
        {
          title: "빠르게, 그리고 조용히",
          body: "빠르게 실행되고, 유휴 상태의 CPU 사용량은 사실상 0입니다. 백그라운드 작업도, 인덱싱도, 폴링도 없습니다.",
        },
        {
          title: "라이트와 다크",
          body: "라이트, 다크, 또는 시스템 그대로 — macOS 시맨틱 컬러를 사용합니다. 관리할 테마 시스템이 없습니다.",
        },
        {
          title: "기대하는 모든 것",
          body: "실행 취소, 찾기 및 바꾸기, 맞춤법 검사, 드래그 앤 드롭, 자동 줄 바꿈, 그리고 선택적 줄 번호.",
        },
      ],
    },
    nonGoals: {
      heading: "Tilde가 하지 않는 것.",
      list: [
        "터미널 없음.",
        "Git 없음.",
        "플러그인 없음.",
        "프로젝트 탐색기 없음.",
        "노트 데이터베이스 없음.",
        "동기화 없음.",
        "계정 없음.",
        "AI 없음.",
      ],
      closing:
        "Tilde는 더 작은 IDE가 아닙니다. 그런 기능이 필요하다면, Tilde는 — 의도적으로 — 맞지 않는 도구입니다.",
    },
    privacy: {
      heading: "당신의 텍스트는 당신의 것.",
      items: [
        "서버 업로드 없음",
        "계정 및 로그인 없음",
        "클라우드 저장소 없음",
        "초기 릴리스에 분석 없음",
      ],
      closing: "모든 문서는 당신의 Mac에서, 로컬로 처리됩니다.",
    },
    outro: {
      line: "그냥 파일을 여세요.",
      download: "macOS용 다운로드",
    },
    footer: {
      license: "Tilde는",
      licenseName: "MIT License",
      licenseSuffix: "로 배포되는 무료 오픈소스 소프트웨어입니다.",
      github: "GitHub",
    },
  },
  ja: {
    nav: {
      github: "GitHub",
      otherLangs: [
        { label: "English", href: "/", hreflang: "en" },
        { label: "한국어", href: "/ko/", hreflang: "ko" },
        { label: "中文", href: "/zh/", hreflang: "zh" },
      ],
    },
    hero: {
      title: "macOSのための、小さくて美しいテキストエディタ。",
      subtitle:
        "ファイルを開く。読む。必要なら一行だけ直して、閉じる。プロジェクトも、プラグインも、サイドバーもなし — エディタは消えて、内容だけが残ります。",
      download: "macOS版をダウンロード",
      viewSource: "GitHubで見る",
      fineprint: "無料・オープンソース · MIT License · macOS 14+",
      appStoreNote: "Mac App Storeにも近日登場",
    },
    showcase: {
      ariaLabel: "Tildeのスクリーンショット",
      defaultId: "reader-ja",
      items: [
        {
          id: "md-ja",
          label: "Markdown",
          alt: "Tildeのエディタで開いたMarkdownノート — 見出し、引用、リンク、リスト、区切り線、表、コードフェンスの記号が薄いまま全部見える",
        },
        {
          id: "reader-ja",
          label: "Reader",
          alt: "同じノートをReaderモードで読み取り専用レンダリング — 引用バー、リンク、区切り線、本物の表とコードブロック。エディタからショートカットひとつ",
        },
        {
          id: "yaml",
          label: "設定ファイル",
          alt: "Tildeで開いたconfig.yaml — キーにだけそっと色がつき、ほかはそのまま。SF Mono",
        },
        {
          id: "txt-ja",
          label: "プレーンテキスト",
          alt: "石川啄木『一握の砂』をプレーンテキストで開いたTildeのウインドウ",
        },
        {
          id: "cjk",
          label: "CJK",
          alt: "中国語・日本語・韓国語の詩がひとつのウインドウに並ぶノート — どんなUnicodeテキストもそのまま開けます",
        },
      ],
    },
    values: {
      heading: "大切にしていること",
      items: [
        { name: "瞬時", line: "ファイルをダブルクリックすれば、ほぼ一瞬で開きます。" },
        { name: "静けさ", line: "インターフェイスが内容より目立つことはありません。" },
        { name: "ネイティブ", line: "macOS標準のアプリのように振る舞います。" },
        { name: "美しさ", line: "テキストを読むこと自体が、心地よい時間になります。" },
        { name: "身軽さ", line: "設定も管理も、ほとんど何もありません。" },
      ],
    },
    features: {
      heading: "必要なぶんだけ。",
      items: [
        {
          title: "Markdown、ひかえめに",
          body: "見出しは大きく、太字は太く — 記法はそのまま見えます。TildeはMarkdownを隠さず、読みやすくします。",
        },
        {
          title: "Readerモード",
          body: "⌘⇧R ひとつで、表もハイライトされたコードブロックも含めて文書全体を読み取り専用でレンダリング。Safariのリーダーのように、タイトルバーから切り替えられます。",
        },
        {
          title: "どんなプレーンテキストも",
          body: ".txtと.mdはもちろん、.json、.yaml、.toml、.xml、.csv、.log、.envなど、ほとんどのUTFテキストファイルが開けます — すべてプレーンテキストのまま。",
        },
        {
          title: "静かなハイライト",
          body: ".json・.yaml・.tomlでは、キーにだけそっと色がつきます。ほかには何もしません。",
        },
        {
          title: "1ファイル、1ウインドウ",
          body: "本物の書類ベースのMacアプリ。「このアプリケーションで開く」、自動保存、バージョン、最近使った書類、ウインドウタブ — すべて標準のまま、作り直していません。",
        },
        {
          title: "速く、そして静かに",
          body: "起動は速く、待機中のCPU使用は実質ゼロ。バックグラウンド処理も、インデックス作成も、ポーリングもありません。",
        },
        {
          title: "ライトとダーク",
          body: "ライト、ダーク、またはシステムに合わせて — macOSのセマンティックカラーを使います。管理するテーマシステムはありません。",
        },
        {
          title: "期待どおりの基本",
          body: "取り消す、検索と置換、スペルチェック、ドラッグ&ドロップ、行の折り返し。行番号は、必要なときだけ。",
        },
      ],
    },
    nonGoals: {
      heading: "Tildeがしないこと。",
      list: [
        "ターミナルなし。",
        "Gitなし。",
        "プラグインなし。",
        "プロジェクトエクスプローラなし。",
        "ノートデータベースなし。",
        "同期なし。",
        "アカウントなし。",
        "AIなし。",
      ],
      closing:
        "Tildeは小さなIDEではありません。それらが必要なら、Tildeは — あえて — 合わない道具です。",
    },
    privacy: {
      heading: "あなたのテキストは、あなたのもの。",
      items: [
        "サーバーへのアップロードなし",
        "アカウント・サインインなし",
        "クラウドストレージなし",
        "初期リリースでは解析なし",
      ],
      closing: "すべての書類は、あなたのMacの中でローカルに処理されます。",
    },
    outro: {
      line: "ただ、ファイルを開くだけ。",
      download: "macOS版をダウンロード",
    },
    footer: {
      license: "Tildeは",
      licenseName: "MIT License",
      licenseSuffix: "のもとで公開される、無料のオープンソースソフトウェアです。",
      github: "GitHub",
    },
  },
  zh: {
    nav: {
      github: "GitHub",
      otherLangs: [
        { label: "English", href: "/", hreflang: "en" },
        { label: "한국어", href: "/ko/", hreflang: "ko" },
        { label: "日本語", href: "/ja/", hreflang: "ja" },
      ],
    },
    hero: {
      title: "一款小而美的 macOS 文本编辑器。",
      subtitle:
        "打开文件。读一读。需要的话改一行，然后关掉。没有项目，没有插件，没有边栏——编辑器隐去，只留下内容。",
      download: "下载 macOS 版",
      viewSource: "在 GitHub 上查看",
      fineprint: "免费开源 · MIT License · macOS 14+",
      appStoreNote: "即将登陆 Mac App Store",
    },
    showcase: {
      ariaLabel: "Tilde 截图",
      defaultId: "reader-zh",
      items: [
        {
          id: "md-zh",
          label: "Markdown",
          alt: "在 Tilde 编辑器中打开的 Markdown 笔记——标题、引用、链接、列表、分隔线、表格与代码块的标记淡淡可见",
        },
        {
          id: "reader-zh",
          label: "阅读模式",
          alt: "同一篇笔记的阅读模式：引用线、链接、分隔线、真正的表格与代码块——距编辑器只有一个快捷键",
        },
        {
          id: "yaml",
          label: "配置文件",
          alt: "在 Tilde 中打开的 config.yaml——只有键被轻轻着色，其余保持原样。SF Mono",
        },
        {
          id: "txt-zh",
          label: "纯文本",
          alt: "以纯文本打开的陶渊明《饮酒·其五》",
        },
        {
          id: "cjk",
          label: "CJK",
          alt: "中日韩三种文字的诗句同在一个窗口——任何 Unicode 文本都能原样打开",
        },
      ],
    },
    values: {
      heading: "我们在意的",
      items: [
        { name: "即刻", line: "双击文件，几乎立刻打开。" },
        { name: "安静", line: "界面永远不会比内容更显眼。" },
        { name: "原生", line: "举手投足都像 macOS 自带的应用。" },
        { name: "优美", line: "阅读文字本身就是一种享受。" },
        { name: "轻盈", line: "几乎没有什么需要设置或管理。" },
      ],
    },
    features: {
      heading: "刚刚好，不多一分。",
      items: [
        {
          title: "Markdown，点到为止",
          body: "标题更大，粗体更粗——语法标记原样可见。Tilde 不隐藏 Markdown，只让它更易读。",
        },
        {
          title: "阅读模式",
          body: "只需一个快捷键（⌘⇧R），就能把整篇文档渲染为只读，表格和高亮的代码块也包括在内。像 Safari 的阅读器一样，从标题栏切换。",
        },
        {
          title: "任何纯文本",
          body: "以 .txt 和 .md 为主，.json、.yaml、.toml、.xml、.csv、.log、.env 等大多数 UTF 文本文件也都能打开——一律以纯文本呈现。",
        },
        {
          title: "安静的高亮",
          body: "在 .json、.yaml、.toml 中，只有键会被轻轻着色。其余一概不动。",
        },
        {
          title: "一个文件，一个窗口",
          body: "真正的文稿型 Mac 应用：打开方式、自动存储、版本、最近使用的文稿、窗口标签页——全部遵循系统标准，绝不重造。",
        },
        {
          title: "快，然后安静",
          body: "启动飞快，闲置时 CPU 占用几乎为零。没有后台任务，没有索引，没有轮询。",
        },
        {
          title: "浅色与深色",
          body: "浅色、深色，或跟随系统——使用 macOS 语义色。没有需要打理的主题系统。",
        },
        {
          title: "该有的都有",
          body: "撤销、查找与替换、拼写检查、拖放、自动换行，以及可选的行号。",
        },
      ],
    },
    nonGoals: {
      heading: "Tilde 不做的事。",
      list: [
        "没有终端。",
        "没有 Git。",
        "没有插件。",
        "没有项目浏览器。",
        "没有笔记数据库。",
        "没有同步。",
        "没有账户。",
        "没有 AI。",
      ],
      closing:
        "Tilde 不是缩小版的 IDE。如果你需要那些功能，Tilde 并不是合适的工具——而这正是有意为之。",
    },
    privacy: {
      heading: "你的文字，只属于你。",
      items: ["不上传至服务器", "无账户、无登录", "无云端存储", "首个版本不含数据分析"],
      closing: "每一份文稿都只在你的 Mac 上本地处理。",
    },
    outro: {
      line: "打开文件，就好。",
      download: "下载 macOS 版",
    },
    footer: {
      license: "Tilde 是基于",
      licenseName: "MIT License",
      licenseSuffix: " 发布的免费开源软件。",
      github: "GitHub",
    },
  },
};
