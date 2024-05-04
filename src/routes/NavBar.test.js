import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import { UserProvider } from "../testUtils";
import NavBar from "./NavBar";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <NavBar/>
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const {asFragment} = render(
      <MemoryRouter>
        <UserProvider>
          <NavBar/>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const {asFragment} = render(
      <MemoryRouter>
        <UserProvider currentUser={null}>
          <NavBar/>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
