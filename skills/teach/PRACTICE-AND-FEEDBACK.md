# Adaptive practice and feedback

Use this guide to design a challenge or act on real learner evidence. The aim is a specific improvement in capability, not maximizing difficulty, task count, or output volume. “Deliberate-practice principles” here describe targeted practice, feedback, and adjustment; an LLM exercise is not automatically equivalent to expert-supervised deliberate practice in a mature training domain.

## Choose a useful challenge

Tie the task to a capability and a current bottleneck. Make the result observable: a prediction with reasons, a trace, a repaired explanation, a design under constraints, an implementation, or a comparison justified by evidence. State enough context and prerequisites for the task to be solvable. Define acceptance before seeing the response, including valid alternatives and assumptions for open-ended work.

Keep the challenge close enough to current ability that the learner can make progress, while requiring an inference or decision they cannot yet make reliably. Adjust one useful dimension at a time where possible: support, number of interacting parts, novelty, ambiguity, or transfer distance. A changed number or renamed variable is not necessarily meaningful transfer. Speed matters only when the goal requires it.

Possible progressions include a complete demonstration, a partly completed example, an independent case, and a changed-context case. Enter at the appropriate point and move backward when useful; this is not a compulsory four-stage ladder. Teach unknown premises before asking for deductions that require them.

## Evidence → next action

| Observed evidence | Working interpretation | Useful next move |
| --- | --- | --- |
| No attempt yet, skipped task, or self-reported familiarity | Ability remains uncertain | Teach or offer one small probe; do not record failure or mastery |
| Cannot begin and cannot state a needed premise | Missing prerequisite or unclear task | Clarify context; teach that premise or demonstrate a smaller case |
| Correct outcome with an unsupported explanation | Possible guessing or shallow pattern matching | Ask for a prediction, causal link, or boundary case |
| Coherent approach with a local slip | Execution error may differ from conceptual error | Point to the discrepancy and invite a local repair |
| Same consequential misconception survives a hint | Current explanation or representation is inadequate | Use a contrast or counterexample, explicitly teach the distinction, then try a new case |
| Correct only after a leading hint or supplied solution | Assisted performance | Record help; fade support on another task before increasing complexity |
| Independent explanation and success on a meaningfully varied case | Provisional readiness to advance | Increase one challenge dimension and reserve a later retention check |
| Immediate success followed by later retrieval difficulty | Durability needs work | Brief retrieval, targeted feedback, and another suitable revisit |
| Learner reports excessive effort, boredom, or fatigue | Task fit or current capacity needs adjustment | Ask only what changes the next choice; shorten, vary, support, or pause |

Treat interpretations as hypotheses, not permanent learner traits. Recheck confusing task wording, missing context, or a faulty reference answer before diagnosing the learner. Do not infer motivation or fatigue from silence or message length. There is no universal percentage of correct answers that defines the ideal challenge.

## Feedback that changes the next attempt

Compare the actual work with the goal. Name the supported reasoning specifically, locate the first gap that blocks progress, explain its consequence, and offer a manageable repair. During formative practice, return feedback promptly after an attempt; a diagnostic may first need a clean independent sample. Do not leave a false explanation uncorrected merely to preserve a novice role.

Possible support, selected according to need:

- Ask which premise supports a claim or what a small counterexample would do.
- Point attention to the relevant relationship without stating the conclusion.
- Provide a partial representation or intermediate step.
- Explain the missing concept or work a parallel example.
- Give a full explanation when requested or needed, then use a fresh case for practice.

Do not mechanically climb every support level. Once questioning stops helping, explain. Once explanation is enough, return the next decision to the learner. If repeated failure remains, narrow the objective or revisit a prerequisite instead of serving more equivalent failures.

## Socratic and Feynman-style moves

Use a Socratic question at a real reasoning fork: “What must remain true?”, “What changes if this assumption is removed?”, or “What evidence would distinguish these explanations?” Choose one question that discriminates the current hypothesis. Wait for the response instead of appending an answer or the next five questions. A question should allow more than parroting the teacher's preferred wording.

For learner-as-teacher practice, state the role-play and ask for a plain-language account of one concept using an example. Inspect the problem it solves, the mechanism, causal links, assumptions, and a limit; these are evaluation lenses, not five compulsory prompts. A concise technical explanation can be good even if it uses correct terminology. Ask about the most consequential gap, provide corrective instruction if needed, and invite a revised explanation or new prediction. Fluent storytelling and an attractive analogy are not substitutes for accuracy.

## Return parts to the whole

After a focused repair, include a later task that reconnects it to the larger system or problem. Otherwise the learner may acquire isolated tricks without knowing when they apply. Use interleaving for concepts that need discrimination once the learner has enough grounding; do not create random context switching. In retention checks, let the learner retrieve before reopening a reference when independent recall is the target.

Select later revisits by importance, fragility, elapsed time, and the next planned use. Record a next-session or milestone trigger in `NOTES.md`; do not create a scheduler automatically. One successful immediate retry is insufficient evidence of durable learning.

## Motivation and progress

Make progress concrete: an error the learner can now diagnose, a tradeoff they can now justify, a system behavior they can now predict. Celebrate that observed change specifically. A milestone can invite the next challenge without locking the learner out of explanations or other topics. Offer a task choice when both choices train the same bottleneck.

Keep retries low-cost and allow “I don't know,” hints, direct explanation, and stopping. If points or badges are later requested, label whether they represent participation or demonstrated performance, and preserve the underlying evidence. Do not treat scores as psychometrically calibrated mastery or attach loss penalties to missed practice.

## Record enough to choose next time

Apply the minimal persistence rule in [CONTENT-CONTRACT.md](CONTENT-CONTRACT.md). Record a practice finding when it changes what to teach, how much help to give, or what to revisit. A few sentences are normally enough; do not create a record for every answer or retry. Preserve distinctions that affect the interpretation, such as a supplied hint versus an independent solution, without imposing a fixed evidence form. Keep a pending prompt or useful revisit in the compact resume notes; never invent confidence, burden, or mastery scores.
