# Personal Skills

个人维护的 agent 技能。当前收录 5 个教学相关技能；课程、学习记录、阅读器源码和凭据不放在此仓库。

| 技能 | 职责 |
| --- | --- |
| [teach](skills/teach/SKILL.md) | 课程规划、内容设计、反馈练习与续学的统一入口 |
| [lesson-visuals](skills/lesson-visuals/SKILL.md) | 课文展示设计，可选择纯文字或按需媒体 |
| [excalidraw](skills/excalidraw/SKILL.md) | 可编辑架构图与本地 SVG/PNG 导出 |
| [svg-animation](skills/svg-animation/SKILL.md) | 精确 SVG、动画与交互 |
| [manim-video](skills/manim-video/SKILL.md) | 按需制作数学动画视频 |

## 安装与维护

从仓库根目录运行 `uv run --no-project python scripts/install.py` 查看链接计划，加 `--apply` 执行。目标默认 `~/.agents/skills/`，每个技能单独软链接到本仓库的 `skills/<name>`。既有同名目录默认不会覆盖；明确需要替换时加 `--replace teach`。被替换内容保存在发现目录之外的备份中。重复执行不会更改已正确安装的链接。

技能相对引用以真实技能目录为基准；课程与网页位置以当前工作区的 AGENTS.md 为准。teach 保留显式调用策略，可用 `$teach` 或由工作区指令明确指定。不同 agent 是否自动发现此目录需各自核对。

Excalidraw 的可选本地导出工具随技能保存在 `skills/excalidraw/tools/`，依赖按需安装，不提交 node_modules。课程素材保存在课程或交付项目中。

## 来源

这 5 个技能从 personal-studio 的教学工作流整理并移除固定项目路径；相关研究和公开技能参考保留在 [研究依据](skills/teach/RESEARCH-BASIS.md)。不把旧版参考 teach 或其他第三方已安装技能收录为原创技能。Excalidraw 渲染器使用官方依赖，版本由其 lockfile 固定。
