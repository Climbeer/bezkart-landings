# Default Orchestration Directive

## Objective
Handle general operational tasks safely and consistently.

## Inputs
- User request
- Environment context
- Available scripts in `execution/`
- Capability metadata in `execution_registry.yaml`

## Outputs
- Requested artifact/change
- Validation evidence
- Concise completion report

## Tools/Scripts
- `execution/preflight_check.sh`

## Procedure
1. Understand objective and constraints.
2. Run preflight checks.
3. Check `execution_registry.yaml` for reusable tools.
4. Prefer dry-run/preview if side effects exist.
5. Execute deterministic script(s).
6. Validate deliverable quality and structure.
7. Log what changed in `run_history/` when needed.

## Validation criteria
- Deliverable exists and is non-empty.
- Output structure matches requested format.
- Target resource was correctly affected.

## Edge cases
- Missing credentials or `.env`
- API/network unavailable
- Partial completion after interruption

## Constraints
- Avoid irreversible actions without explicit user approval.
- Do not modify directives unless requested.

## Approval requirements
- Required for high-risk actions (production writes, deletes, paid external steps, irreversible operations).
