import * as HelloWorldEvent from './hello';

export type Events = {
  [HelloWorldEvent.name]: HelloWorldEvent.Event;
};
