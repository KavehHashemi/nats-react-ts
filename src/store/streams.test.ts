import { connecToServer } from "./streams";

test("connects asynchronously to nats server", async () => {
  let a = connecToServer("ws://localhost:9090");
  expect(a).not.toBe(undefined);
});
