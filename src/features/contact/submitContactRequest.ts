import type { ContactRequest } from "./contactSchema";

const SIMULATED_LATENCY_MS = 900;

export async function submitContactRequest(request: ContactRequest): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
  if (request.email.endsWith("@fail.test")) {
    throw new Error("Simulated delivery failure");
  }
}
