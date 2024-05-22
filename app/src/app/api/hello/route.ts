import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client";
import sayHelloWorld from '../../../inngest/events/hello';

export const dynamic = "force-dynamic";

export async function GET() {
  const event = sayHelloWorld('Fernendos');
  await inngest.send(event);

  return NextResponse.json({ event });
}
