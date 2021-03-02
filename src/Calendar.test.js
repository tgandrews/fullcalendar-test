import { render } from "@testing-library/react";
import Calendar from "./Calendar";

const wait = timeout => new Promise(res => setTimeout(res, timeout));

test("renders the events", async () => {
  const { asFragment, container } = render(<Calendar />);
  await wait(5000);
  expect(asFragment()).toMatchSnapshot();
  expect(
    [...container.querySelectorAll(".fc-timegrid-event")].length,
  ).not.toEqual(0);
}, 30000);
