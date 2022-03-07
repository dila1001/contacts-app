import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import "@testing-library/jest-dom";
import Contacts from "../Contacts";

describe("Contacts component", () => {
  test("renders contacts if request succeeds", async () => {
    /*    mockAllIsIntersecting(false); */
    render(<Contacts />);

    const email = await screen.findAllByAltText("email");
    expect(email[0]).toBeInTheDocument();
  });

  test("infinite scroll callback triggers a new request", async () => {
    render(<Contacts />);

    const contacts = await screen.findAllByAltText("email");
    mockAllIsIntersecting(true);
    const contactsAfterScroll = await screen.findAllByAltText("email");

    expect(contactsAfterScroll.length).toBeGreaterThan(contacts.length);
  });
});
