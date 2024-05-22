import * as HelloWorldEvent from '@/inngest/events/hello';

export type Events = {
  [HelloWorldEvent.name]: HelloWorldEvent.Event;
};
