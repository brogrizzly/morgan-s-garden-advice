# MSSS Offline-First Archon Checkpoint

**Date:** 2026-08-27  
**Project:** Morgan Software / Seeds / Systems Company (MSSS)  
**Repository:** `brogrizzly/morgan-s-garden-advice`  
**Evidence status:** design doctrine and research hypothesis; no model-training or distributed-system proof is claimed here.

## The Riddle Comes First

This checkpoint explicitly begins with the Riddle of Steel from John Milius's film *Conan the Barbarian* (1982), screenplay by John Milius and Oliver Stone:

> “What is steel compared to the hand that wields it?”

The film is an acknowledged influence, not an MSSS invention. Its relevance is the distinction between a tool and the living authority that gives the tool purpose. Software, models, weights, and computers are steel. The human remains the hand.

## Offline-First Ownership

MSSS adopts the following candidate doctrine:

> **People own the software, the model, the weights, their data, and the machine running it.**

The intended ownership chain is:

```text
Human → machine → software → weights → data
```

The chain must not silently reverse.

Core operation should remain available without a subscription, remote inference service, permanent account connection, or company-controlled server. Network access may provide optional updates and bounded collaboration, but it must not become the hidden source of authoritative local state.

A person must be able to inspect the system, preserve it, disconnect it, move it, and shut it off.

## Archon Must Fit the Owner

Archon is a proposed small, inspectable, open-weight cognitive kernel. It is not a cloud-scale frontier-model project and must not be designed around hardware its owner could never possess.

Candidate physical constraint:

> **If Archon cannot be built, tuned, inspected, and operated on one personally owned machine, Archon has violated its purpose.**

The present planning ceiling is a separate M4-class machine with enough unified memory to develop and tune a model in roughly the two-billion-parameter class. The practical path is to begin with a properly credited open-weight foundation, then perform local continued training, adapter training, evaluation, merging, and quantization.

This does not claim that MSSS created the inherited foundation weights or that one small machine can economically pretrain a competitive two-billion-parameter foundation model from zero.

A separate Archon machine would provide a real physical boundary:

- the human workstation retains development and authorization;
- the Archon machine performs bounded model experiments and inference;
- model output crosses through an explicit interface;
- Archon may propose, but it cannot silently become system authority.

The expense is a planned capital requirement, not an assumed server cluster.

## Garden → Mathematics → Systems

The Coos Bay garden is the observational origin of this research thread: calendula, cosmos, poppies, sunflowers, gladiolus, yucca cuttings, bees, goats, weather, sunlight, soil, and the human gardener create a living field of state and boundaries.

The garden is evidence of the garden. It may inspire software hypotheses, but it does not prove them.

### Stokes' theorem

Stokes' theorem relates circulation around a boundary to curl across the bounded surface:

$
\\oint_{\\partial S}\\mathbf{F}\\cdot d\\mathbf{r}
=
\\iint_S(\\nabla\\times\\mathbf{F})\\cdot\\mathbf{n}\\,dS
$

For MSSS this is a candidate accounting metaphor: internal activity should reconcile with observable boundary behavior. It is not a claim that software literally has the differentiable structure required for a formal application of the theorem.

### Plant virology

Plant viruses offer a useful two-scale observation:

- local cell-to-cell movement can occur through plasmodesmata;
- systemic long-distance movement can occur through vascular pathways such as phloem;
- local movement and systemic circulation cross different biological boundaries.

Candidate systems invariant:

> **Local permission is not automatically systemic authority.**

This remains a research question. Plant virology does not prove software security, and biological infection is not an implementation recipe.

## Repository Boundaries

MSSS work must remain separated by ownership:

### This public garden repository

Owns public garden observations, photographs, plant identification, seasonal experiments, weather and radiation context, biological research sources, and public-safe design reflections emerging from those observations.

It must not expose private protocols, credentials, security details, model weights, or unpublished distributed-system mechanisms.

### Morgan

Owns the player-facing wizard-life experience, visible deterministic projections, accessibility, stagecraft, and game implementation. Morgan may express an idea through story or interface without becoming the authority for the underlying systems doctrine.

### G4LO

Owns private deterministic authority, validation, provenance, ledger, resource governance, security boundaries, and distributed-system research. This public note does not redefine or publish those internals.

### Archon

Should own model-specific artifacts: model card, credited foundation lineage, datasets allowed for release, training configuration, adapters or weights, evaluations, quantization, device budgets, and reproducibility instructions.

No Archon repository presently exists. Its name, visibility, license, and release boundary require a separate human decision before code or weights are pushed.

## Current Research Flow

```text
Garden observations
  → public biological and mathematical research
  → bounded MSSS design hypotheses
  → repository-specific documentation
  → separately verified implementation
  → human promotion
```

No repository inherits another repository's authority merely by linking to it. Each implementation, test result, evidence class, and release decision remains local to its owning repository.

## Closing Doctrine

> **If the boundary cannot account for the magic, the wizard does not get to cast it.**

And if an ordinary person cannot own the forge, inspect the steel, and shut off the wizard, it is not Archon.

## Research Anchors

- *Conan the Barbarian*. Directed by John Milius; screenplay by John Milius and Oliver Stone. Universal Pictures, 1982.
- MIT OpenCourseWare. “Stokes' Theorem.” https://ocw.mit.edu/ans7870/18/18.013a/textbook/chapter28/section01.html
- Carrington, J. C., et al. “Cell-to-Cell and Long-Distance Transport of Viruses in Plants.” https://www.ncbi.nlm.nih.gov/pmc/articles/PMC161306/
- Ueki, S., and V. Citovsky. “Plasmodesmata: Gateways to Local and Systemic Virus Infection.” https://doi.org/10.1094/MPMI-05-10-0116
