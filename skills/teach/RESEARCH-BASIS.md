# Research basis and design choices

Reviewed for the 2026-10-25 foundation. These sources inform specific decisions; none validates this particular skill arrangement, guarantees expert performance, or establishes an optimal LLM teaching protocol. The two-skill boundary is a maintainability choice, not an educational research finding.

## Research → bounded application

| Source and inspection scope | Application here | Boundary |
| --- | --- | --- |
| Ericsson, Krampe & Tesch-Römer (1993), [The Role of Deliberate Practice in the Acquisition of Expert Performance](https://doi.org/10.1037/0033-295X.100.3.363). Read the original paper's practice-design, instruction, and constraint passages via an [archived PDF](https://gwern.net/doc/psychology/1993-ericsson.pdf). | Target a specific weakness; design a repeatable task, informative feedback, and an adapted next challenge. Respect effort and resource constraints. | The research concerns expertise and domain-specific training. Adapting its principles to an LLM coach does not make every exercise expert-supervised deliberate practice or support a universal hours rule. |
| Chi et al. (1994), [Eliciting Self-Explanations Improves Understanding](https://doi.org/10.1207/s15516709cog1803_3). Read the publisher-supplied abstract through Crossref; publisher full text was inaccessible in this run. | Ask learners to reconstruct causal links, assumptions, and examples, then diagnose gaps. | This study's small sample and specific learning context do not validate every popular Feynman-method recipe, nor mandate line-by-line self-explanation in all courses. |
| Wisniewski, Zierer & Hattie (2020), [The Power of Feedback Revisited](https://pmc.ncbi.nlm.nih.gov/articles/PMC6987456/). Read abstract and relevant introduction/discussion passages. | Make feedback specific to the task, discrepancy, and next action; evaluate the repair. | Effects vary substantially with the information conveyed and context. More feedback or more praise is not automatically better. |
| Sailer & Homner (2020), [The Gamification of Learning: a Meta-analysis](https://link.springer.com/article/10.1007/s10648-019-09498-w). Read abstract and relevant introductory findings. | Treat clear challenges, retries, and visible progress as candidate design mechanisms; observe learning and learner experience separately. | Aggregate effects do not identify a guaranteed reward formula. Motivation and behavioral findings were less stable in the high-rigor subset. The particular mechanics chosen here are design hypotheses, not a directly tested package. |

Additional sources considered during the original design discussion are listed below. They were not all independently reopened in that pass:

- [Dunlosky et al. (2013)](https://doi.org/10.1177/1529100612453266), learning-technique review: retain retrieval and distributed practice; avoid a single mandatory technique for all tasks.
- [Soderstrom & Bjork (2015)](https://pubmed.ncbi.nlm.nih.gov/25910388/), learning versus performance: separate immediate success from later retention and transfer.
- [Kalyuga et al. (2003)](https://doi.org/10.1207/S15326985EP3801_4), expertise reversal: adjust scaffolding to actual prior knowledge.

A precise effect-size claim, historical assertion, or new instructional rule should be checked against the actual source and its study context before teaching it. This is a focused design review, not a systematic literature review.

## Public skills inspected

- [Matt Pocock's teach](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md): read the skill entrypoint. Retain mission-linked teaching, non-obvious learning records, a tangible next capability, and feedback. Adapt to the selected workspace's content and privacy boundaries; do not adopt its compulsory HTML lesson/reference artifacts or rigid answer-length rule.
- [bstellato/ai-teaching-skills](https://github.com/bstellato/ai-teaching-skills): read the README and the [ai-socratic-tutor](https://github.com/bstellato/ai-teaching-skills/blob/main/ai-socratic-tutor/SKILL.md) and [ai-novice](https://github.com/bstellato/ai-teaching-skills/blob/main/ai-novice/SKILL.md) entrypoints. Borrow focused questions, learner-as-teacher reconstruction, and attention to the first consequential gap. Do not adopt rules that refuse a requested explanation, forbid corrective feedback, or trap the learner in a role. The solution-study behavior was examined through the README example, not a separate full skill review.

These are implementation references, not efficacy evidence. No external skill was installed, executed, or copied wholesale. Source popularity is not a teaching outcome.

## What is provisional

The compact teaching brief, evidence-to-action table, selected game mechanisms, and division between content and media are the current engineering design. Multimedia selection is guided by the learning job, coherent reasoning, reader control, and accessibility; no claim is made that animation, generated images, or PPT-to-video is generally superior to prose or static diagrams.

During real use, inspect whether these decisions produce better explanations, less help dependence, later retention, transfer, and acceptable reported effort. A successful task does not establish causal benefit from the skill rewrite. Adjust the relevant decision when evidence shows a problem rather than accumulating rules from one anecdote.
