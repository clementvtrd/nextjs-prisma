export type Event = {
  name: typeof name,
  data: {
    name: string
  }
}

export const name = 'test/hello.world'

export default function sayHelloWorld(userName: string): Event {
  return {
    name,
    data: { name: userName },
  }
}
