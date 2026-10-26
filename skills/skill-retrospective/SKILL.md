---
name: skill-retrospective
description: Review the current conversation and resulting artifacts to improve a specified skill when the user requests retrospective learning or skill refinement. Distinguish reusable instruction gaps from execution failures and local preferences; make evidence-backed changes or conclude that no change is warranted. Not for ordinary task feedback without a request to review the skill.
---

# Improve a skill from real use

Use the conversation as evidence about decisions, not as a list of new rules to append. The goal is a smaller or clearer reusable decision procedure where needed, not a mandatory diff or a reconstruction of the whole conversation.

## Establish the target and scope

Resolve the named skill and its canonical source, including symlinks, repository instructions, invocation policy, and relevant supporting files. Inspect existing changes before editing. If several targets remain plausible, ask only which one matters. Use the available conversation and relevant artifacts; disclose missing context rather than inventing what happened.

Distinguish a request to assess or propose from a request to apply improvements. Proceed with authorized edits without adding a ceremonial approval step; an assessment-only request produces findings or a proposed patch. Skill improvement does not itself authorize publishing, committing, modifying unrelated skills, or rewriting the user's task artifacts. Follow the target environment's storage and permission rules.

## Find the decision behind the outcome

Identify consequential corrections, repeated friction, successful repairs, and explicit preferences. For each candidate, trace a short chain: what happened, what decision contributed, what future decision would change. Separate the user's report, observed artifacts or tool results, and the agent's causal hypothesis. An accepted revision is evidence of fit, not proof of general effectiveness.

Compare the candidate with the existing skill before choosing a remedy:

- **Missing or misleading guidance:** a bounded instruction change may help.
- **Existing guidance not followed:** explain the execution failure; do not add a duplicate prohibition. Change routing or wording only when evidence shows why the existing guidance was missed or misread.
- **Local preference, domain fact, or task-specific constraint:** keep it in the task's established context when authorized and useful, rather than universalizing it.
- **Tool or environment limitation:** fix the relevant integration when in scope; do not teach the skill a permanent workaround for an unexplained transient failure.
- **Uncertain cause or no consequential gap:** retain the uncertainty and leave the skill unchanged. State what later evidence would make a change useful when that helps.

These are diagnostic distinctions, not compulsory report headings. Do not infer the cause solely from the latest criticism or treat agent-authored summaries as independent evidence.

## Test generality before editing

For a promising change, identify the situation where it applies, the decision it should affect, and a situation where it should not apply. Consider a materially different task within the skill's scope: would the proposed instruction improve that task without forcing the current example's structure onto it?

Prefer the underlying relationship or decision criterion to an example-specific recipe. Do not promote one conversation's topic, artifact format, workflow length, tool, or aesthetic preference into a universal requirement. A narrow domain rule can belong in a domain skill, but its source, scope, and exceptions still matter. Keep factual or safety claims grounded in appropriate evidence; do not present a conversational lesson as a research finding.

Weigh expected benefit against added context, rigidity, duplication, and maintenance. No change, a deletion, or clarifying an existing sentence may be better than adding a section. There is no quota of lessons learned, edits, examples, or supporting files.

## Make the smallest useful revision

Edit the canonical source at the narrowest relevant location: discovery text for routing, the entrypoint for common decisions, or an existing reference for conditional detail. Preserve purpose, unrelated work, invocation policy, and valid flexibility. Do not silently broaden the skill's task scope.

Prefer replacing an ambiguous instruction to accumulating patches beside it. Keep private conversation excerpts, personal records, secrets, and project-specific paths out of reusable skill instructions. Use only the minimum sanitized context needed to explain a transferable distinction. Do not create permanent retrospective logs, new frameworks, helper scripts, or cross-skill dependencies without a concrete need.

For substantial creation or restructuring, follow the environment's skill-authoring workflow if available. Ordinary focused edits need no new scaffolding.

## Validate behavior and report honestly

Check the diff, frontmatter, references, and available skill validators. Syntax validation does not show that the guidance works. Proportionally inspect realistic cases: the triggering situation, a contrasting case where the old behavior remains appropriate, and transfer beyond the original example when generalization is claimed. Do not use tests that only match the wording of the new rule.

For complex changes, independent forward-testing can help when authorized and available. Give the evaluator the skill, a realistic request, and raw context, without the intended fix or preferred verdict. Keep tests in temporary or isolated artifacts; do not expose private conversation material or modify live user resources as a test. Do not require delegation for every edit or claim a simulated review was executed.

Report the few findings that matter, the applied changes or no-change decision and why, validation actually performed, and remaining uncertainty. Distinguish observed improvements from hypotheses awaiting future use. Give the user the canonical skill link and disclose when edits were only staged or installation was not completed. Stop when the bounded improvement is complete; further conversation alone is not a reason to keep expanding the skill.
