import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import "@testing-library/jest-dom";
import Contacts from "../Contacts";

import { rest } from "msw";
import { setupServer } from "msw/node";

const firstGetRequest = {
  results: [
    {
      gender: "female",
      name: { title: "Miss", first: "Dahlia", last: "Aleena" },
      location: {
        street: { number: 7690, name: "Rua Pará " },
        city: "Natal",
        state: "Roraima",
        country: "Brazil",
        postcode: 54073,
        coordinates: { latitude: "-74.5521", longitude: "126.2585" },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "irene.moura@example.com",
      login: {
        uuid: "6a38c79d-7ecd-42ef-ac3e-784ebe2f895e",
        username: "whitekoala560",
        password: "charter",
        salt: "4XZi57AV",
        md5: "34e9bfa327122806f07bfcb26801559b",
        sha1: "014ea8d4094a8480b28d7006085928888aa741b0",
        sha256:
          "b94a9aacebfe9d87475bead47229d39b8b30439623f59d9ed07d9abe61c0eb31",
      },
      dob: { date: "1961-03-21T14:06:32.082Z", age: 61 },
      registered: { date: "2018-02-16T15:55:03.619Z", age: 4 },
      phone: "(91) 9563-9888",
      cell: "(26) 0227-9822",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
      },
      nat: "BR",
    },
  ],
  info: { seed: "devoteam", results: 1, page: 1, version: "1.3" },
};

const server = setupServer(
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    const pageNumber = req.url.searchParams.get("page");
    const result = ctx.json(
      pageNumber == 1 ? firstGetRequest : secondGetRequest
    );
    return res(result);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Contacts component", () => {
  test("renders contacts if request succeeds", async () => {
    render(<Contacts />);

    const contact = await screen.findByText("Dahlia Aleena", {
      exact: false,
    });
    expect(contact).toBeInTheDocument();
  });
});
