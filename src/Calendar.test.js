import { render } from "@testing-library/react";
import Calendar from "./Calendar";

test("renders the events", async () => {
  const { asFragment, container } = render(<Calendar />);
  expect(asFragment()).toMatchSnapshot();
  expect(
    [...container.querySelectorAll(".fc-timegrid-event")].length,
  ).not.toEqual(0);
});
