# Personal portfolio starter

An App Router portfolio built with Next.js, TypeScript, Tailwind CSS, and a small set of focused UI dependencies.

## Run locally

```bash
pnpm install
pnpm dev
```

Use `pnpm lint` and `pnpm build` to check the project.

## Personalize before publishing

This workspace began empty, so the included content is editable starter material rather than verified personal history. Update these files first:

- `data/profile.ts` — name, bio, education, email, social URLs, and map embed
- `data/skills.ts` — remove tools you do not use
- `data/experience.ts` — replace the sample experience or use an empty array
- `data/projects.ts` — replace all eight sample case studies with your own projects and links

Replace the initials portrait with a real local image in `app/page.tsx` and replace the CSS project previews with screenshots in `components/works/project-card.tsx` and `app/works/[slug]/page.tsx`.

The contact form validates input in the browser and displays a demo confirmation. It does not transmit or store messages. Connect an API route or email provider before treating it as a delivery form.
