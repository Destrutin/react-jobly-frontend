import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import {UserProvider} from "../testUtils";
import AppRoutes from "./AppRoutes";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <AppRoutes/>
        </UserProvider>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <AppRoutes/>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
