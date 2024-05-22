import { inngest } from "@/inngest/client"

const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async function({ event, step }) {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: `Hello, ${event.data.name}!` };
  },
)

export default helloWorld
