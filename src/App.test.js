import { render } from "@testing-library/react";
import App from "./App";

const wait = time => new Promise(res => setTimeout(res, time));

test("renders the events", async () => {
  const { asFragment } = render(<App />);
  await wait(30000);
  expect(asFragment()).toMatchSnapshot();
}, 60000);
