export const GITHUB_URL = "https://github.com/heyeuca/Tilde";
// Stable "latest release" asset. The Tilde release workflow attaches the DMG
// twice: versioned (Tilde-vX.Y.Z.dmg, used by the Homebrew cask) and as a
// fixed-name copy so this link never has to change.
export const DOWNLOAD_URL =
  "https://github.com/heyeuca/Tilde/releases/latest/download/Tilde.dmg";
export const RELEASES_URL = "https://github.com/heyeuca/Tilde/releases";
// Empty until App Review approves the app; the hero shows the "coming soon"
// note instead of the badge while this is blank. Fill in the
// https://apps.apple.com/app/... URL from App Store Connect when live.
export const APP_STORE_URL = "https://apps.apple.com/app/id6808973955";
export const BREW_COMMAND = "brew install heyeuca/tap/tilde";
export const LICENSE_URL = "https://github.com/heyeuca/Tilde/blob/main/LICENSE";

export const SITE_URL = "https://tilde.euca.co";

export type Lang = "en" | "ko" | "ja" | "zh";

// Home path for each locale (trailingSlash-consistent).
export const LANG_HOME: Record<Lang, string> = {
  en: "/",
  ko: "/ko/",
  ja: "/ja/",
  zh: "/zh/",
};

export interface Content {
  nav: {
    github: string;
    otherLangs: { label: string; href: string; hreflang: Lang }[];
  };
  hero: {
    title: string;
    subtitle: string;
    download: string;
    appStore: string;
    fineprint: string;
    appStoreNote: string;
    copy: string;
    copied: string;
  };
  showcase: {
    ariaLabel: string;
    defaultId: string;
    items: { id: string; label: string; alt: string }[];
  };
  features: {
    heading: string;
    items: { title: string; body: string }[];
    /** Small-print line under the grid for the table-stakes features. */
    also: string;
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
        "Open the file. Read it. Maybe change a line. Close it. No projects, no plugins, no sidebars. The editor disappears, and the content is all that's left.",
      download: "Download .dmg",
      appStore: "Get on the App Store",
      fineprint: "Free & open source · MIT License · macOS 14+",
      appStoreNote: "Coming soon to the App Store",
      copy: "Copy",
      copied: "Copied",
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
          label: "Any language",
          alt: "A note mixing Japanese, Korean, and Chinese verse in one Tilde window — any Unicode text renders naturally",
        },
      ],
    },
    features: {
      heading: "Nothing more than you need.",
      items: [
        {
          title: "Markdown, done lightly",
          body: "Headings render larger, bold renders bold, while the syntax stays visible. Tilde doesn't hide Markdown; it makes Markdown easier to read.",
        },
        {
          title: "Reader mode",
          body: "One keystroke, ⌘⇧R, renders the whole document, tables and highlighted code blocks included, read-only. Toggle it from the title bar, like Safari's Reader.",
        },
        {
          title: "Any plain text",
          body: ".txt and .md first, but .json, .yaml, .toml, .xml, .csv, .log, .env and most UTF-based text files open too, all as plain text.",
        },
        {
          title: "Quiet highlighting",
          body: "In .json, .yaml, and .toml, keys get a gentle tint. Everything else is left exactly alone.",
        },
        {
          title: "One file, one window",
          body: "A true document-based Mac app: Open With, Autosave, Versions, Recent Documents, window tabs. All standard, none reinvented.",
        },
        {
          title: "Fast, then silent",
          body: "Launches fast, and idle CPU usage is effectively zero. No background work, no indexing, no polling. Ever.",
        },
      ],
      also:
        "Also: undo, Find & Replace, spell check, drag-and-drop, word wrap, optional line numbers, and light or dark along with the system.",
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
        "Tilde isn't a smaller IDE. If you need those things, Tilde is intentionally the wrong tool.",
    },
    privacy: {
      heading: "Your text stays yours.",
      items: [
        "No server uploads",
        "No account or sign-in",
        "No cloud storage",
        "No analytics",
      ],
      closing: "Every document is processed locally, on your Mac.",
    },
    outro: {
      line: "Just open the file.",
      download: "Download .dmg",
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
      title: "작고 아름다운 macOS 텍스트 에디터.",
      subtitle:
        "파일을 열어 읽고, 필요하면 한 줄 고친 뒤 닫아요. 프로젝트도, 플러그인도, 사이드바도 없어요. 에디터는 드러나지 않고, 글만 남도록요.",
      download: ".dmg 다운로드",
      appStore: "App Store에서 받기",
      fineprint: "무료 오픈소스 · MIT License · macOS 14+",
      appStoreNote: "App Store 출시 예정",
      copy: "복사",
      copied: "복사됨",
    },
    showcase: {
      ariaLabel: "Tilde 스크린샷",
      defaultId: "reader-ko",
      items: [
        {
          id: "md-ko",
          label: "Markdown",
          alt: "Tilde 에디터로 연 Markdown 메모. 제목, 인용문, 링크, 목록, 구분선, 표, 코드 블록까지 모든 기호가 흐리게 그대로 보여요",
        },
        {
          id: "reader-ko",
          label: "Reader",
          alt: "같은 메모를 Reader 모드로 본 모습. 인용 막대, 링크, 구분선, 표와 코드 블록이 읽기 전용으로 렌더링되고, 에디터에서 단축키 하나로 전환돼요",
        },
        {
          id: "yaml",
          label: "설정 파일",
          alt: "Tilde에서 연 config.yaml. 키에만 살짝 색이 들어가고 나머지는 SF Mono 글꼴 그대로예요",
        },
        {
          id: "txt-ko",
          label: "일반 텍스트",
          alt: "윤동주의 시 「서시」를 일반 텍스트로 연 Tilde 창",
        },
        {
          id: "cjk",
          label: "모든 언어",
          alt: "일본어·한국어·중국어 시가 한 창에 담긴 메모. 어떤 유니코드 텍스트든 자연스럽게 열려요",
        },
      ],
    },
    features: {
      heading: "딱 필요한 만큼만.",
      items: [
        {
          title: "Markdown, 가볍게",
          body: "제목은 크게, 굵은 글씨는 굵게 보여 주면서도 문법 기호는 그대로 남겨 둬요. Markdown을 숨기지 않고, 더 읽기 쉽게 만들 뿐이에요.",
        },
        {
          title: "Reader 모드",
          body: "⌘⇧R 한 번이면 문서 전체가 표와 하이라이트된 코드 블록까지 읽기 전용으로 렌더링돼요. Safari의 읽기 도우미처럼 제목 막대에서 켜고 끌 수 있어요.",
        },
        {
          title: "일반 텍스트라면 무엇이든",
          body: ".txt와 .md는 물론 .json, .yaml, .toml, .xml, .csv, .log, .env 등 대부분의 UTF 기반 텍스트 파일을 열 수 있어요. 모두 일반 텍스트 그대로 보여 줘요.",
        },
        {
          title: "조용한 하이라이팅",
          body: ".json·.yaml·.toml에서는 키에만 살짝 색을 입혀요. 나머지는 손대지 않아요.",
        },
        {
          title: "파일 하나, 창 하나",
          body: "macOS 문서 기반 앱의 정석을 따라요. 다음으로 열기, 자동 저장, 버전, 최근 사용 항목, 창 탭까지 모두 macOS 표준 기능 그대로예요.",
        },
        {
          title: "빠르게, 그리고 조용히",
          body: "빠르게 실행되고, 유휴 상태의 CPU 사용량은 사실상 0이에요. 백그라운드 작업도, 인덱싱도, 폴링도 전혀 없어요.",
        },
      ],
      also:
        "그 밖에도: 실행 취소, 찾기 및 바꾸기, 맞춤법 검사, 드래그 앤 드롭, 자동 줄 바꿈, 켜고 끌 수 있는 줄 번호, 시스템 설정을 따르는 라이트·다크 모드.",
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
        "Tilde는 IDE의 축소판이 아니에요. 그런 기능이 필요하다면 Tilde는 맞지 않는 도구이고, 일부러 그렇게 만들었어요.",
    },
    privacy: {
      heading: "내 텍스트는 오롯이 내 것.",
      items: [
        "서버 업로드 없음",
        "계정 및 로그인 없음",
        "클라우드 저장소 없음",
        "사용 통계 수집 없음",
      ],
      closing: "모든 문서는 이 Mac 안에서만 처리돼요.",
    },
    outro: {
      line: "그냥, 파일을 여세요.",
      download: ".dmg 다운로드",
    },
    footer: {
      license: "Tilde는",
      licenseName: "MIT License",
      licenseSuffix: "로 배포되는 무료 오픈소스 소프트웨어예요.",
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
      // U+200B marks where the headline may wrap (see .hero h1:lang(ja)).
      title: "小さくて美しい、\u200BmacOSの\u200Bテキストエディタ。",
      subtitle:
        "ファイルを開く。読む。必要なら一行だけ直して、閉じる。プロジェクトも、プラグインも、サイドバーもない。エディタは前に出ず、文章だけが残るように。",
      download: ".dmgをダウンロード",
      appStore: "App Storeで入手",
      fineprint: "無料のオープンソース · MIT License · macOS 14+",
      appStoreNote: "App Storeにも近日登場",
      copy: "コピー",
      copied: "コピーしました",
    },
    showcase: {
      ariaLabel: "Tildeのスクリーンショット",
      defaultId: "reader-ja",
      items: [
        {
          id: "md-ja",
          label: "Markdown",
          alt: "Tildeのエディタで開いたMarkdownノート。見出し、引用、リンク、リスト、区切り線、表、コードブロックの記号もすべて薄く表示されている",
        },
        {
          id: "reader-ja",
          label: "Reader",
          alt: "同じノートをReaderモードで表示したところ。引用バー、リンク、区切り線、表、コードブロックが読み取り専用できちんと描画される。エディタからショートカットひとつで切り替え",
        },
        {
          id: "yaml",
          label: "設定ファイル",
          alt: "Tildeで開いたconfig.yaml。キーにだけそっと色がつき、ほかはSF Monoのプレーンな表示のまま",
        },
        {
          id: "txt-ja",
          label: "プレーンテキスト",
          alt: "石川啄木『一握の砂』をプレーンテキストで開いたTildeのウインドウ",
        },
        {
          id: "cjk",
          label: "あらゆる言語",
          alt: "中国語・日本語・韓国語の詩がひとつのウインドウに並ぶノート。どんなUnicodeテキストもそのまま開ける",
        },
      ],
    },
    features: {
      heading: "必要なぶんだけ。",
      items: [
        {
          title: "Markdown、ひかえめに",
          body: "見出しは大きく、太字は太く表示しつつ、記法の記号はそのまま残します。TildeはMarkdownを隠さず、読みやすくするだけです。",
        },
        {
          title: "Readerモード",
          body: "⌘⇧R ひとつで、表もハイライトされたコードブロックも含めて書類全体を読み取り専用で表示します。Safariのリーダーのように、タイトルバーから切り替えられます。",
        },
        {
          title: "プレーンテキストなら何でも",
          body: ".txtと.mdはもちろん、.json、.yaml、.toml、.xml、.csv、.log、.envなど、ほとんどのUTFテキストファイルが開けます。どれもプレーンテキストのまま表示します。",
        },
        {
          title: "静かなハイライト",
          body: ".json・.yaml・.tomlでは、キーにだけそっと色がつきます。ほかには何もしません。",
        },
        {
          title: "ファイルひとつ、ウインドウひとつ",
          body: "Macの書類ベースアプリの作法どおりに作っています。「このアプリケーションで開く」、自動保存、バージョン、最近使った項目、ウインドウタブ。すべてmacOS標準のままで、車輪の再発明はしていません。",
        },
        {
          title: "速く、そして静かに",
          body: "起動は速く、待機中のCPU使用率は実質ゼロ。バックグラウンド処理も、インデックス作成も、ポーリングも一切ありません。",
        },
      ],
      also:
        "そのほか：取り消し、検索と置換、スペルチェック、ドラッグ＆ドロップ、行の折り返し、表示を切り替えられる行番号、システムに連動するライト／ダークモード。",
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
        "TildeはIDEの縮小版ではありません。そうした機能が必要なら、Tildeは向いていません。あえて、そう作っています。",
    },
    privacy: {
      heading: "あなたのテキストは、あなたのもの。",
      items: [
        "サーバーへのアップロードなし",
        "アカウント・サインインなし",
        "クラウドストレージなし",
        "利用状況の収集なし",
      ],
      closing: "すべての書類は、お使いのMacの中だけで処理されます。",
    },
    outro: {
      line: "ファイルを開く、それだけ。",
      download: ".dmgをダウンロード",
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
        "打开文件。读一读。需要的话改一行，然后关掉。没有项目，没有插件，没有边栏。编辑器退到幕后，只留下文字。",
      download: "下载 .dmg",
      appStore: "在 App Store 获取",
      fineprint: "免费开源 · MIT License · macOS 14+",
      appStoreNote: "即将登陆 App Store",
      copy: "复制",
      copied: "已复制",
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
          alt: "同一篇笔记的阅读模式：引用线、链接、分隔线、表格与代码块都完整渲染为只读，按一个快捷键即可与编辑器切换",
        },
        {
          id: "yaml",
          label: "配置文件",
          alt: "在 Tilde 中打开的 config.yaml——只有键带上淡淡的颜色，其余保持原样，字体为 SF Mono",
        },
        {
          id: "txt-zh",
          label: "纯文本",
          alt: "在 Tilde 中以纯文本打开的陶渊明《饮酒·其五》",
        },
        {
          id: "cjk",
          label: "任何语言",
          alt: "中日韩三种文字的诗句同在一个窗口——任何 Unicode 文本都能原样打开",
        },
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
          body: "按下 ⌘⇧R，整篇文稿连同表格和高亮代码块都会渲染为只读视图。像 Safari 的阅读器一样，从标题栏切换。",
        },
        {
          title: "任何纯文本",
          body: "以 .txt 和 .md 为主，.json、.yaml、.toml、.xml、.csv、.log、.env 等大多数 UTF 文本文件也都能打开——一律以纯文本呈现。",
        },
        {
          title: "安静的高亮",
          body: "在 .json、.yaml、.toml 中，只有键带上淡淡的颜色。其余一概不动。",
        },
        {
          title: "一个文件，一个窗口",
          body: "遵循 Mac 文稿型应用的规范：打开方式、自动存储、版本、最近使用的文稿、窗口标签页，全部沿用系统标准，不重复造轮子。",
        },
        {
          title: "又快，又安静",
          body: "启动飞快，闲置时 CPU 占用几乎为零。没有后台任务，没有索引，没有轮询。",
        },
      ],
      also:
        "此外：撤销、查找与替换、拼写检查、拖放、自动换行、可开关的行号，以及跟随系统切换的浅色/深色外观。",
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
        "Tilde 不是缩小版的 IDE。如果你需要这些功能，Tilde 并不是合适的工具——而这正是有意为之。",
    },
    privacy: {
      heading: "你的文字，只属于你。",
      items: ["不上传至服务器", "无账户、无登录", "无云端存储", "不收集使用数据"],
      closing: "每一份文稿都只在你的 Mac 上处理。",
    },
    outro: {
      line: "打开文件，就好。",
      download: "下载 .dmg",
    },
    footer: {
      license: "Tilde 是以",
      licenseName: "MIT License",
      licenseSuffix: " 发布的免费开源软件。",
      github: "GitHub",
    },
  },
};
