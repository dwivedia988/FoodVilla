import "@testing-library/jest-dom";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );


    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(20);
    
});

test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));


    const resId = body.getByTestId("res-id");

    expect(resId.children.length).toBe(25);
    
});

test("Search for string(food) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));


    const input = body.getByTestId("search-input");
    fireEvent.change(input, {
        target: {
            value: "food",
        },
    });

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resId = body.getByTestId("res-id");

    expect(resId.children.length).toBe(1);
    
});