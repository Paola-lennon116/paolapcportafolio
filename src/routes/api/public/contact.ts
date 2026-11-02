import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => null);
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "invalid_input" }, { status: 400 });
        }
        // Email delivery is enabled once the sender domain is configured.
        return Response.json({ error: "email_not_configured" }, { status: 503 });
      },
    },
  },
});
