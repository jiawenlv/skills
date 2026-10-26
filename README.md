# Agent Skills

面向 **OpenAI Codex** 和 **Pi coding agent** 的开源技能集合，覆盖学习项目初始化、教学展示、图解动画与技能复盘。采用 [MIT License](LICENSE)。

Skills for learning, visual explanations, and workflow improvement. Install with Codex's skill installer, Pi's package manager, or the local installer below. Instructions are mostly English; the teaching template is Chinese and can be adapted to your language.

## 技能目录

| 技能 | 用途 |
| --- | --- |
| [teach](skills/teach/SKILL.md) | 初始化独立学习项目，生成项目教学说明、目标、计划和续学笔记；后续教学使用项目自己的说明 |
| [lesson-visuals](skills/lesson-visuals/SKILL.md) | 为课文选择合适的文字、图解与交互，纯文字也是有效结果 |
| [excalidraw](skills/excalidraw/SKILL.md) | 可编辑架构图、关系图及本地 SVG/PNG 导出 |
| [svg-animation](skills/svg-animation/SKILL.md) | 精确 SVG、分步推导与交互模拟 |
| [manim-video](skills/manim-video/SKILL.md) | 按需制作数学动画视频 |
| [skill-retrospective](skills/skill-retrospective/SKILL.md) | 根据真实使用证据改进指定技能，保留可复用决策 |

## 安装到 Codex

在 Codex 中发送以下内容即可安装单个技能（需要内置 `skill-installer`）：

```text
$skill-installer 从 https://github.com/jiawenlv/skills 安装 skills/teach，保留其 assets 和 agents 目录。
```

将 `skills/teach` 换成上表中的技能路径即可。需要全部技能时：

```text
$skill-installer 从 https://github.com/jiawenlv/skills 安装 skills/ 下的全部六个技能，包含各自的资源文件，并保留目录名称。
```

安装后用 `$teach` 初始化学习项目，或用 `$excalidraw` 等名称调用。未出现在技能列表时，重启 Codex。不同安装方式不要重复安装同名技能。

## 安装到 Pi agent

已安装 Pi 的用户，在终端运行：

```sh
pi install git:github.com/jiawenlv/skills
```

在 Pi 中执行 `/reload`，然后调用：

```text
/skill:teach 帮我初始化一个学习项目
/skill:excalidraw 画出这个系统的组件关系
```

只为当前项目安装可加 `--local`。更新和卸载：

```sh
pi update --extensions
pi remove git:github.com/jiawenlv/skills
```

`pi update --extensions` 会更新已配置的包。此仓库的根 `package.json` 只声明技能资源，没有安装钩子和运行时依赖。Pi 的安装命令不会安装可选绘图工具。

## 本地安装：Codex / Pi 共用

适合希望自己维护、修改或按需选择技能的用户。需要 Git 和 [uv](https://docs.astral.sh/uv/getting-started/installation/)；以下命令适用于 macOS / Linux（Windows 可用 WSL）。

```sh
git clone https://github.com/jiawenlv/skills.git
cd skills
# 先预览；不会写入安装目录
uv run --no-project python scripts/install.py
# 安装全部技能到 ~/.agents/skills/
uv run --no-project python scripts/install.py --apply
```

安装单个或多个技能：

```sh
uv run --no-project python scripts/install.py --skill teach --skill skill-retrospective --apply
```

脚本会一并链接所选技能引用的其他仓库技能，避免相对引用断开。使用 `--target ~/.pi/agent/skills` 可指定 Pi 的独立目录，或指定项目的 `.agents/skills` 目录。默认目录可被 Codex 和当前 Pi 共同发现。

安装使用软链接，请保留克隆目录。更新时在克隆目录执行 `git pull --ff-only`，再让 agent 重新加载；若更新新增技能，重新运行安装脚本。重复执行不会改变已正确安装的链接。

已有同名技能时脚本会停止，不会覆盖。检查冲突内容后，只有确实需要替换才添加 `--replace teach`（可重复指定）；旧内容移到目标目录旁的 `skill-migration-backups/`，脚本会输出备份路径。卸载时只删除对应软链接，例如 `unlink ~/.agents/skills/teach`，不要删除真实技能目录；恢复旧版本可将备份移回原安装位置。

## 使用条件与边界

- `teach` 保留显式调用策略：Codex 使用 `$teach`，Pi 使用 `/skill:teach`。普通答疑和续学遵循生成的项目说明，不会重复初始化。
- 技能是工作流说明，不自带模型、浏览器、图片生成服务或网站阅读器。某些流程需要文件读写、资料查询或独立子 agent；缺少能力时应说明未完成的验证。
- 文字教学无需绘图依赖。Excalidraw 的可选工具需要 Node.js >= 22.12，按 [工具说明](skills/excalidraw/references/diagram-input.md) 安装依赖与 Chromium。Manim 按技能中的官方指南用 uv 单独设置环境。
- 课程、学习记录、私有路径、凭据和生成素材放在使用技能的项目中，不放在本仓库。安装技能不授权发布学习记录。

安装依据：[OpenAI 官方技能文档](https://learn.chatgpt.com/docs/build-skills)、[Pi Packages](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/packages.md)、[Pi Skills](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/skills.md)。

## 贡献与来源

欢迎通过 [Issues](https://github.com/jiawenlv/skills/issues) 提交问题，或通过 Pull Request 改进技能。提交时说明使用场景、实际问题和验证方式；保留技能调用策略，不加入私人学习记录或密钥。Python 脚本使用 uv 运行。

```sh
uv run --no-project python -m unittest discover -s tests -v
npm ci --prefix skills/excalidraw/tools --ignore-scripts
node --test skills/excalidraw/tools/render-excalidraw.test.mjs
```

教学技能从作者的 personal-studio 教学工作流整理；研究和公开技能参考保留在 [研究依据](skills/teach/RESEARCH-BASIS.md)。本仓库未打包那些第三方技能。Excalidraw 渲染器通过 npm 使用官方依赖，版本由其 lockfile 固定；第三方依赖仍适用各自许可证。本仓库原创文件使用 [MIT](LICENSE)。
