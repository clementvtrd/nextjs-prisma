import { Events } from '@/inngest/events';
import { EventSchemas, Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-app",
  schemas: new EventSchemas().fromRecord<Events>(),
});
